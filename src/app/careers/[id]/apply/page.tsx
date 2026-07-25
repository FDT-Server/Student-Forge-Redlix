import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ApplicationFormClient from "./ApplicationFormClient";
import { ChevronRight, Home } from "lucide-react";

export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  try {
    const job = await prisma.job.findUnique({ where: { id } });
    if (job) {
      return {
        title: `Apply - ${job.title} | Student Forge Careers`,
        description: `Submit your application for ${job.title} at Student Forge.`,
      };
    }
  } catch {}
  return {
    title: "Apply for Job | Student Forge Careers",
  };
}

export default async function JobApplyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let job: any = null;
  try {
    job = await prisma.job.findUnique({
      where: { id },
    });
  } catch (err) {
    console.error("Error fetching job detail for application:", err);
  }

  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-100 font-sans text-slate-800 flex flex-col justify-between">
      
      {/* ─── 1. SIMPLE YELLOW HEADER BANNER ─────────────────────── */}
      <section className="w-full bg-[#fbb03b] pt-12 pb-32 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center space-y-3">
          
          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-xs text-[#1a3646]/80 font-normal flex-wrap mb-1">
            <Link href="/" className="hover:text-[#1a3646] hover:underline flex items-center gap-1 transition-colors">
              <Home className="w-3 h-3" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 opacity-60" />
            <Link href="/careers" className="hover:text-[#1a3646] hover:underline transition-colors">
              Careers
            </Link>
            <ChevronRight className="w-3 h-3 opacity-60" />
            <Link href={`/careers/${job.id}`} className="hover:text-[#1a3646] hover:underline transition-colors truncate max-w-[150px]">
              {job.title}
            </Link>
            <ChevronRight className="w-3 h-3 opacity-60" />
            <span className="text-[#1a3646] font-semibold">
              Apply
            </span>
          </nav>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1a3646] tracking-tight">
            Apply for {job.title}
          </h1>

          <p className="text-xs text-[#1a3646]/80 font-medium">
            {job.department} • {job.location} • {job.employmentType}
          </p>
        </div>
      </section>

      {/* ─── 2. OVERLAPPING APPLICATION FORM CONTAINER ────────── */}
      <section className="w-full max-w-xl mx-auto px-4 -mt-20 pb-16 relative z-10 flex-1">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-8">
          <ApplicationFormClient jobId={job.id} jobTitle={job.title} />
        </div>
      </section>
    </main>
  );
}
