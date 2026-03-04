import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 },
      );
    }

    // 1. Check if it's the Master Admin from ENV
    const isMasterAdmin =
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD;

    let userRole = "";
    let userId = "";

    if (isMasterAdmin) {
      userRole = "admin";
      userId = "master-admin";
    } else {
      // 2. Fallback to Database Auth
      const user = await User.findOne({ email: email.toLowerCase() }).select(
        "+password",
      );

      if (!user) {
        return NextResponse.json(
          { message: "Invalid email or password" },
          { status: 401 },
        );
      }

      const isMatch = await bcrypt.compare(password, user.password!);
      if (!isMatch) {
        return NextResponse.json(
          { message: "Invalid email or password" },
          { status: 401 },
        );
      }

      if (user.role !== "admin") {
        return NextResponse.json(
          { message: "Unauthorized access" },
          { status: 403 },
        );
      }

      userRole = user.role;
      userId = user._id.toString();
    }

    // 3. Generate JWT
    const token = jwt.sign(
      { id: userId, role: userRole, email },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" },
    );

    const response = NextResponse.json(
      { success: true, message: "Login successful", role: userRole },
      { status: 200 },
    );

    // 4. Set HTTP-only Cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 86400, // 1 day
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
