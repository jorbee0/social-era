import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import CaseStudy from "@/models/CaseStudy";
import { verifyToken } from "@/lib/verifyToken";

// Update case study
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        verifyToken(req);
        await connectDB();
        const body = await req.json();
        const { id } = params;

        const updated = await CaseStudy.findByIdAndUpdate(id, body, { new: true });
        if (!updated) return NextResponse.json({ message: "Not found" }, { status: 404 });

        return NextResponse.json({ success: true, data: updated }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "Update failed" }, { status: 400 });
    }
}

// Delete case study
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        verifyToken(req);
        await connectDB();
        const { id } = params;

        const deleted = await CaseStudy.findByIdAndDelete(id);
        if (!deleted) return NextResponse.json({ message: "Not found" }, { status: 404 });

        return NextResponse.json({ success: true, message: "Deleted successfully" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "Delete failed" }, { status: 400 });
    }
}
