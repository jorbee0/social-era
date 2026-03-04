import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import CaseStudy from "@/models/CaseStudy";

export const dynamic = "force-dynamic";

// Get published case studies only
export async function GET() {
  try {
    await connectDB();
    const caseStudies = await CaseStudy.find({ isPublished: true }).sort({
      createdAt: -1,
    });
    return NextResponse.json(
      { success: true, data: caseStudies },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
