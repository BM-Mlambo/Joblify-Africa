// app/api/jobs/route.js
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const type = searchParams.get("type") || "";

  const jobs = await prisma.job.findMany({
    where: {
      AND: [
        search
          ? {
              OR: [
                { title: { contains: search, mode: "insensitive" } },
                { company: { contains: search, mode: "insensitive" } },
                { description: { contains: search, mode: "insensitive" } },
              ],
            }
          : {},
        category ? { category } : {},
        type ? { type } : {},
      ],
    },
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
  });

  return NextResponse.json(jobs);
}

export async function POST(req) {
  const body = await req.json();

  const {
    title,
    company,
    description,
    category,
    type,
    location,
    salaryMin,
    salaryMax,
    applyUrl,
    applyEmail,
  } = body;

  if (!title || !company || !description || !category || !type || !location) {
    return NextResponse.json(
      { error: "Missing required fields: title, company, description, category, type, location." },
      { status: 400 }
    );
  }

  if (!applyUrl && !applyEmail) {
    return NextResponse.json(
      { error: "Provide either applyUrl or applyEmail." },
      { status: 400 }
    );
  }

  try {
    const job = await prisma.job.create({
      data: {
        title,
        company,
        description,
        category,
        type,
        location,
        salaryMin: salaryMin ? parseInt(salaryMin, 10) : null,
        salaryMax: salaryMax ? parseInt(salaryMax, 10) : null,
        applyUrl: applyUrl || null,
        applyEmail: applyEmail || null,
      },
    });

    return NextResponse.json(job, { status: 201 });
  } catch (err) {
    console.error("Failed to create job:", err);
    return NextResponse.json({ error: "Failed to create job." }, { status: 500 });
  }
}