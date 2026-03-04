import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export interface DecodedToken {
  id: string;
  role: string;
  iat: number;
  exp: number;
}

/**
 * Helper to verify JWT token from request cookies or headers
 * @param request NextRequest object
 * @returns Decoded payload if token is valid
 */
export const verifyToken = (request: NextRequest): DecodedToken => {
  try {
    let token = "";

    // 1. Try to get token from HTTP-only cookies (Preferred for Admin)
    const cookieToken = request.cookies.get("token")?.value;
    if (cookieToken) {
      token = cookieToken;
    }
    // 2. Fallback to Authorization header
    else {
      const authHeader = request.headers.get("authorization");
      if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
      }
    }

    if (!token) {
      throw new Error("Missing authentication token");
    }

    // 3. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;

    return decoded;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to verify token";
    throw new Error(message);
  }
};
