import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: "Job ID is required" }, { status: 400 });
    }

    const job = await prisma.job.findUnique({
      where: { id },
    });

    if (!job) {
      return NextResponse.json({ error: "Job posting not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, job });
  } catch (error: any) {
    console.error("Error fetching job details:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch job" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: "Job ID is required" }, { status: 400 });
    }

    await prisma.job.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Job deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting job:", error);
    return NextResponse.json(
      { error: error.message || "Failed to delete job" },
      { status: 500 }
    );
  }
}
