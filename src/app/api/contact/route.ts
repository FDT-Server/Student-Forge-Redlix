import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendContactEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, category, message } = body;

    if (!name || !email || !phone || !category || !message) {
      return NextResponse.json(
        { error: "All fields (name, email, phone, category, message) are required." },
        { status: 400 }
      );
    }

    // Save submission to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        category: category.trim(),
        message: message.trim(),
      },
    });

    // Send email notification asynchronously
    try {
      await sendContactEmail({
        name: submission.name,
        email: submission.email,
        phone: submission.phone,
        category: submission.category,
        message: submission.message,
      });
    } catch (mailError) {
      console.error("Non-fatal email dispatch error:", mailError);
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been submitted successfully!",
      submissionId: submission.id,
    });
  } catch (error: any) {
    console.error("Error creating contact submission:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process contact submission." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ submissions });
  } catch (error: any) {
    console.error("Error fetching contact submissions:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch contact submissions." },
      { status: 500 }
    );
  }
}
