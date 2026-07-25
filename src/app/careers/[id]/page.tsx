import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";
import {
  ChevronRight,
  MapPin,
  Clock,
  Building2,
  CheckCircle2,
  DollarSign,
  Calendar,
  FileText,
  Users,
  Award,
  Send,
  Home,
  Check,
  Code2,
  GraduationCap,
  Briefcase,
  Globe,
  PlusCircle,
  FolderCheck,
} from "lucide-react";

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
        title: `${job.title} | Student Forge Careers`,
        description: job.shortDescription,
      };
    }
  } catch {}
  return {
    title: "Job Position | Student Forge Careers",
  };
}

// Helper to parse line breaks or bullets into structured array
function parseListItems(text: string): string[] {
  if (!text) return [];
  return text
    .split(/\n|•|-|\*/)
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

// Helper to parse skills (commas, newlines, bullets)
function parseSkills(text: string): string[] {
  if (!text) return [];
  return text
    .split(/,|\n|•|-|\*/)
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

export default async function JobDetailPage({
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
    console.error("Error fetching job detail:", err);
  }

  if (!job) {
    notFound();
  }

  const responsibilitiesList = parseListItems(job.responsibilities);
  const requiredSkillsList = parseSkills(job.requiredSkills);
  const preferredSkillsList = parseSkills(job.preferredSkills || "");

  return (
    <main className="flex-1 bg-slate-50 font-sans text-slate-800">
      
      {/* ─── ELEGANT HEADER SECTION ──────────────────────────────── */}
      <section className="bg-[#fbb03b] pt-14 pb-16 px-6 border-b border-[#1a3646]/10">
        <div className="max-w-[1100px] mx-auto space-y-6">
          
          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#1a3646]/80 font-normal flex-wrap">
            <Link href="/" className="hover:text-[#1a3646] hover:underline flex items-center gap-1 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <Link href="/careers" className="hover:text-[#1a3646] hover:underline transition-colors">
              Careers
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <Link href="/careers#openings" className="hover:text-[#1a3646] hover:underline transition-colors">
              Open Positions
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1a3646] font-semibold truncate max-w-[250px] sm:max-w-none">
              {job.title}
            </span>
          </nav>

          {/* Title & Metadata */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#1a3646] font-medium">
              <span className="flex items-center gap-1.5 bg-white/50 px-3 py-1 rounded-lg">
                <Building2 className="w-4 h-4 text-[#1a3646]" />
                {job.department} {job.team ? `• ${job.team}` : ""}
              </span>

              {job.featured && (
                <span className="bg-[#1a3646] text-white text-xs font-semibold px-3 py-1 rounded-lg">
                  Featured Position
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a3646] tracking-tight leading-tight">
              {job.title}
            </h1>

            {/* Normal Font Info Bar */}
            <div className="flex flex-wrap items-center gap-6 text-sm font-normal text-[#1a3646]/90 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#1a3646]" /> {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#1a3646]" /> {job.employmentType} ({job.workplaceType})
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#1a3646]" /> {job.openings} {job.openings === 1 ? "Opening" : "Openings"}
              </span>
            </div>
          </div>

          {/* Optional Banner Image */}
          {job.bannerImage && (
            <div className="w-full h-52 sm:h-72 rounded-2xl overflow-hidden border border-[#1a3646]/20 shadow-sm mt-6">
              <img
                src={job.bannerImage}
                alt={job.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* ─── DETAILED CONTENT & SIDEBAR GRID ─────────────────────── */}
      <section className="py-12 px-6 max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Main Content */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* About the Role */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[#1a3646] border-b border-slate-100 pb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#fbb03b]" /> About the Role
            </h2>
            <p className="text-base text-slate-700 leading-relaxed font-normal whitespace-pre-line">
              {job.detailedDescription}
            </p>
          </div>

          {/* Key Responsibilities - Checklist Cards */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">
            <h2 className="text-xl font-bold text-[#1a3646] border-b border-slate-100 pb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#fbb03b]" /> Key Responsibilities
            </h2>

            {responsibilitiesList.length > 0 ? (
              <div className="space-y-3">
                {responsibilitiesList.map((resp, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#1a3646]/10 text-[#1a3646] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <p className="text-sm font-normal text-slate-700 leading-relaxed">
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-600 font-normal whitespace-pre-line">
                {job.responsibilities}
              </p>
            )}
          </div>

          {/* Required & Preferred Skills - Clean Skill Chips */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* Required Skills */}
            <div>
              <h2 className="text-xl font-bold text-[#1a3646] border-b border-slate-100 pb-3 flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-[#fbb03b]" /> Required Skills & Qualifications
              </h2>

              {requiredSkillsList.length > 0 ? (
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {requiredSkillsList.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1a3646]/5 border border-[#1a3646]/15 text-[#1a3646] text-xs font-semibold hover:bg-[#1a3646] hover:text-white transition-all shadow-2xs"
                    >
                      <Code2 className="w-3.5 h-3.5 text-[#1a3646]" />
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl text-sm font-normal text-slate-700 whitespace-pre-line">
                  {job.requiredSkills}
                </div>
              )}
            </div>

            {/* Preferred Skills */}
            {job.preferredSkills && (
              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-base font-bold text-[#1a3646] mb-3 flex items-center gap-1.5">
                  <PlusCircle className="w-4 h-4 text-slate-500" /> Preferred Skills
                </h3>

                {preferredSkillsList.length > 0 ? (
                  <div className="flex flex-wrap gap-2.5">
                    {preferredSkillsList.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-medium shadow-2xs"
                      >
                        <Check className="w-3 h-3 text-[#1a3646]" />
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl text-sm font-normal text-slate-700 whitespace-pre-line">
                    {job.preferredSkills}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          
          {/* Quick Apply Card */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-[#1a3646] border-b border-slate-100 pb-3">
              Apply for this Position
            </h3>

            <div className="space-y-3 text-sm font-normal text-slate-600">
              <div>
                <span className="text-xs text-slate-400 block font-medium">Compensation / Salary</span>
                <span className="text-xl font-bold text-[#1a3646]">{job.salary}</span>
              </div>

              {job.benefits && (
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Perks & Benefits</span>
                  <p className="text-xs text-slate-600 mt-0.5">{job.benefits}</p>
                </div>
              )}
            </div>

            <Link
              href={`/careers/${job.id}/apply`}
              className="w-full py-3.5 px-4 bg-[#1a3646] hover:bg-[#112430] text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md transition-all text-sm mt-4"
            >
              <Send className="w-4 h-4 text-[#fbb03b]" />
              <span>Apply Now</span>
            </Link>
          </div>

          {/* Eligibility Criteria Cards */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-[#1a3646] border-b border-slate-100 pb-3">
              Eligibility Criteria
            </h3>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#1a3646]/10 text-[#1a3646] shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#1a3646] block text-xs">Qualification</span>
                  <span className="text-slate-600 mt-0.5 block leading-relaxed">{job.qualification}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#1a3646]/10 text-[#1a3646] shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#1a3646] block text-xs">Experience Required</span>
                  <span className="text-slate-600 mt-0.5 block leading-relaxed">{job.experience}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#1a3646]/10 text-[#1a3646] shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#1a3646] block text-xs">Languages</span>
                  <span className="text-slate-600 mt-0.5 block leading-relaxed">{job.languages}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Important Dates & Requirements Redesigned */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-[#1a3646] border-b border-slate-100 pb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#fbb03b]" />
              Important Dates & Requirements
            </h3>

            <div className="space-y-3 text-xs text-slate-700">
              {job.deadline && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#1a3646]/10 text-[#1a3646] shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#1a3646] block text-xs">Application Deadline</span>
                    <span className="text-slate-600 text-xs mt-0.5 block">{job.deadline}</span>
                  </div>
                </div>
              )}

              {job.joiningDate && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#1a3646]/10 text-[#1a3646] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#1a3646] block text-xs">Expected Joining</span>
                    <span className="text-slate-600 text-xs mt-0.5 block">{job.joiningDate}</span>
                  </div>
                </div>
              )}

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#1a3646]/10 text-[#1a3646] shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-[#1a3646] text-xs">Resume</span>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${job.resumeRequired ? "bg-[#1a3646] text-white" : "bg-slate-200 text-slate-700"}`}>
                  {job.resumeRequired ? "Required" : "Optional"}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#1a3646]/10 text-[#1a3646] shrink-0">
                    <FolderCheck className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-[#1a3646] text-xs">Portfolio</span>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${job.portfolioRequired ? "bg-[#1a3646] text-white" : "bg-slate-200 text-slate-700"}`}>
                  {job.portfolioRequired ? "Required" : "Optional"}
                </span>
              </div>
            </div>
          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}
