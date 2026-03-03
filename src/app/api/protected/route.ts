import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { verifyToken } from "@/lib/verifyToken";

/**
 * Handle GET request for protected resource
 * URL: /api/protected
 */
export async function GET(req: NextRequest) {
    try {
        // 1. Authenticate user using the token from headers
        const decoded = verifyToken(req);

        // 2. Connect to Database (optional for this specific check, but good for boilerplate)
        await connectDB();

        // 3. Return success response with decoded token data
        return NextResponse.json(
            {
                success: true,
                message: "Protected route accessed successfully",
                user: decoded,
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Protected Route Error:", error.message);

        // 4. Handle unauthorized access (token missing, invalid, or expired)
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Unauthorized access",
            },
            { status: 401 }
        );
    }
}
