import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/applications - Fetch candidate submissions
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const jobId = searchParams.get("jobId");

    const whereClause = jobId ? { jobId } : {};

    const applications = await prisma.jobApplication.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, applications });
  } catch (error: any) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch applications" },
      { status: 500 }
    );
  }
}

// POST /api/applications - Submit job application
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      jobId,
      jobTitle,
      fullName,
      email,
      phone,
      college,
      yearOfStudy,
      portfolioUrl,
      resumeName,
      resumeLink,
      inCollegeClub,
      clubName,
      clubPosition,
      coverNote,
    } = body || {};

    if (!jobId || !fullName || !email || !phone || !college || !yearOfStudy) {
      return NextResponse.json(
        { error: "Required fields missing (Full Name, Email, Phone, College, and Year of Study are required)" },
        { status: 400 }
      );
    }

    if (!resumeName && !resumeLink) {
      return NextResponse.json(
        { error: "Please provide your resume by uploading a file or attaching a Google Drive / cloud link." },
        { status: 400 }
      );
    }

    const application = await prisma.jobApplication.create({
      data: {
        jobId: String(jobId).trim(),
        jobTitle: String(jobTitle || "Job Position").trim(),
        fullName: String(fullName).trim(),
        email: String(email).trim().toLowerCase(),
        phone: String(phone).trim(),
        college: String(college).trim(),
        yearOfStudy: String(yearOfStudy).trim(),
        portfolioUrl: portfolioUrl ? String(portfolioUrl).trim() : null,
        resumeName: resumeName ? String(resumeName).trim() : null,
        resumeLink: resumeLink ? String(resumeLink).trim() : null,
        inCollegeClub: Boolean(inCollegeClub),
        clubName: clubName ? String(clubName).trim() : null,
        clubPosition: clubPosition ? String(clubPosition).trim() : null,
        coverNote: coverNote ? String(coverNote).trim() : null,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully!",
      applicationId: application.id,
    });
  } catch (error: any) {
    console.error("Error submitting job application:", error);
    return NextResponse.json(
      { error: error.message || "Failed to submit application" },
      { status: 500 }
    );
  }
}
