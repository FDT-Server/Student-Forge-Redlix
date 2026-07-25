import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/jobs - List job postings
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const statusFilter = searchParams.get("status");

    const whereCondition = statusFilter ? { status: statusFilter } : {};

    const jobs = await prisma.job.findMany({
      where: whereCondition,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, jobs });
  } catch (error: any) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}

// POST /api/jobs - Create a new job posting
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      // Section 1: Basic Information
      title,
      department,
      team,
      employmentType,
      workplaceType,
      location,
      openings,

      // Section 2: Job Description
      shortDescription,
      detailedDescription,
      responsibilities,
      requiredSkills,
      preferredSkills,

      // Section 3: Eligibility
      qualification,
      experience,
      languages,

      // Section 4: Compensation
      salary,
      benefits,

      // Section 5: Application
      deadline,
      joiningDate,
      resumeRequired,
      portfolioRequired,
      customQuestions,

      // Section 6: Publishing
      bannerImage,
      featured,
      status,
    } = body || {};

    if (!title || !department || !employmentType || !workplaceType || !location) {
      return NextResponse.json(
        { error: "Required basic fields are missing (Title, Department, Employment Type, Workplace Type, Location)" },
        { status: 400 }
      );
    }

    if (!shortDescription || !detailedDescription || !responsibilities || !requiredSkills) {
      return NextResponse.json(
        { error: "Required description fields are missing" },
        { status: 400 }
      );
    }

    const newJob = await prisma.job.create({
      data: {
        title: String(title).trim(),
        department: String(department).trim(),
        team: team ? String(team).trim() : null,
        employmentType: String(employmentType).trim(),
        workplaceType: String(workplaceType).trim(),
        location: String(location).trim(),
        openings: openings ? parseInt(String(openings), 10) : 1,

        shortDescription: String(shortDescription).trim(),
        detailedDescription: String(detailedDescription).trim(),
        responsibilities: String(responsibilities).trim(),
        requiredSkills: String(requiredSkills).trim(),
        preferredSkills: preferredSkills ? String(preferredSkills).trim() : null,

        qualification: qualification ? String(qualification).trim() : "Not Specified",
        experience: experience ? String(experience).trim() : "Not Specified",
        languages: languages ? String(languages).trim() : "English",

        salary: salary ? String(salary).trim() : "Competitive",
        benefits: benefits ? String(benefits).trim() : null,

        deadline: deadline ? String(deadline).trim() : null,
        joiningDate: joiningDate ? String(joiningDate).trim() : null,
        resumeRequired: Boolean(resumeRequired),
        portfolioRequired: Boolean(portfolioRequired),
        customQuestions: customQuestions ? String(customQuestions).trim() : null,

        bannerImage: bannerImage ? String(bannerImage).trim() : null,
        featured: Boolean(featured),
        status: status ? String(status).trim() : "Published",
      },
    });

    return NextResponse.json({ success: true, job: newJob });
  } catch (error: any) {
    console.error("Error creating job:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create job posting" },
      { status: 500 }
    );
  }
}
