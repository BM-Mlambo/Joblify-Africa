import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Call this from any server component or route handler to check who's logged in.
// Returns null if there's no valid session.
export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;

  if (!token) return null;

  const payload = verifyToken(token);
  if (!payload) return null;

  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
  });

  if (!user) return null;

  const { password: _omit, ...safeUser } = user;
  return safeUser;
}
