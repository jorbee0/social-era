import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/verifyToken";

export async function GET(req: NextRequest) {
    try {
        const decoded = verifyToken(req);
        return NextResponse.json({ success: true, user: decoded }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Not authenticated" }, { status: 401 });
    }
}
