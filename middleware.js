import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = "your_jwt_secret";

export function middleware(req) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Access denied" }, { status: 401 });
  }

  try {
    jwt.verify(token, JWT_SECRET);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid token", error },
      { status: 403 }
    );
  }
}

export const config = {
  matcher: ["/api/dashboard/"], // Apply middleware to specific routes
};
