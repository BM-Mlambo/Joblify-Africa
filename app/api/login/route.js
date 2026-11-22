import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { signToken } from "@/lib/auth";

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required." },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Strip password before it ever leaves the server
    const { password: _omit, ...safeUser } = existingUser;

    const token = signToken({ userId: safeUser.id, email: safeUser.email });

    const response = NextResponse.json(
      {
        message: "Login successful",
        user: safeUser,
      },
      { status: 200 }
    );

    // httpOnly cookie — not readable by client-side JS, sent automatically on every request
    response.cookies.set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days, matches token expiry
      path: "/",
    });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}