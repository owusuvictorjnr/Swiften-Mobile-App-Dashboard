import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export function authenticateToken(req) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Access denied" }, { status: 401 });
  }

  try {
    const user = jwt.verify(token, JWT_SECRET);
    req.user = user;
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid token", error },
      { status: 403 }
    );
  }
}
