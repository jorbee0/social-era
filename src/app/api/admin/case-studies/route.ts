import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import CaseStudy from "@/models/CaseStudy";
import { verifyToken } from "@/lib/verifyToken";

// Get all case studies (Admin)
export async function GET(req: NextRequest) {
    try {
        verifyToken(req); // Ensure admin
        await connectDB();
        const caseStudies = await CaseStudy.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: caseStudies }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "Unauthorized" }, { status: 401 });
    }
}

// Create new case study
export async function POST(req: NextRequest) {
    try {
        verifyToken(req); // Ensure admin
        await connectDB();
        const body = await req.json();

        const newCaseStudy = await CaseStudy.create(body);
        return NextResponse.json({ success: true, data: newCaseStudy }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "Failed to create" }, { status: 400 });
    }
}
