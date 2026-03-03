import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

/**
 * Handle POST request for user registration
 * URL: /api/auth/register
 */
export async function POST(req: Request) {
    try {
        // 1. Connect to Database
        await connectDB();

        // 2. Get data from request body
        const { name, email, password } = await req.json();

        // 3. Validation
        if (!name || !email || !password) {
            return NextResponse.json(
                { message: "All fields (name, email, password) are required" },
                { status: 400 }
            );
        }

        if (password.length < 6) {
            return NextResponse.json(
                { message: "Password must be at least 6 characters long" },
                { status: 400 }
            );
        }

        // 4. Check if user already exists
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return NextResponse.json(
                { message: "User with this email already exists" },
                { status: 400 }
            );
        }

        // 5. Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 6. Create new user
        const newUser = await User.create({
            name,
            email: email.toLowerCase(),
            password: hashedPassword,
        });

        // 7. Return success response (Security: Do not return password)
        // We convert the mongoose document to a plain object and remove sensitive info
        const userResponse = {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
            createdAt: newUser.createdAt,
        };

        return NextResponse.json(
            {
                message: "User registered successfully",
                user: userResponse,
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Registration Error:", error);

        // Handle mongoose validation errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map((val: any) => val.message);
            return NextResponse.json({ message: messages.join(', ') }, { status: 400 });
        }

        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
