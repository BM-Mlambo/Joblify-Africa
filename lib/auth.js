import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  // Fail loudly in dev rather than silently signing tokens with "undefined"
  console.warn(
    "WARNING: JWT_SECRET is not set in your .env file. Auth will not work correctly."
  );
}

export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}