import { Metadata } from 'next';
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from 'next/image';
import { prisma } from "@/lib/prisma";
import {
  Briefcase,
  ArrowRight,
  MapPin,
  Clock,
  Building2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers | Student Forge',
  description: 'Join Student Forge and help build the next generation of technical and entrepreneurial talent.',
};

export const revalidate = 0; // Dynamic server rendering for live job openings

export default async function CareersPage() {
  let openJobs: any[] = [];
  try {
    openJobs = await prisma.job.findMany({
      where: { status: "Published" },
      orderBy: [
        { featured: "desc" },
        { createdAt: "desc" },
      ],
    });
  } catch (err) {
    console.error("Error loading open jobs for careers page:", err);
  }

  return (
    <main className="flex-1 bg-white font-sans">

      {/* ─── HERO HEADER SECTION ─────────────────────────────────── */}
      <section className="relative pt-20 pb-20 px-6 bg-[#fbb03b] border-b border-[#1a3646]/10">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Copy */}
          <div className="flex-1 text-left">
            <div className="border border-[#1a3646]/20 text-[#1a3646] px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest mb-6 inline-block">
              Join Our Team
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a3646] mb-5 tracking-tight leading-tight">
              Build the Future with <br className="hidden sm:block" />
              <span className="text-white">Student Forge</span>.
            </h1>

            <p className="text-base lg:text-lg text-[#1a3646] opacity-80 max-w-md leading-relaxed mb-8 font-normal">
              We are looking for passionate builders, mentors, and ecosystem creators to help empower the next generation.
            </p>

            <div className="flex flex-wrap items-center justify-start gap-4">
              <Link
                href="#openings"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a3646] text-white rounded-full font-medium text-sm hover:bg-[#2d414e] transition-all shadow-md"
              >
                Explore Open Roles <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="flex-1 relative hidden lg:flex justify-end items-center">
            <div className="relative w-[450px] h-[290px] flex items-center justify-end">
              <img
                src="https://ik.imagekit.io/dypkhqxip/Job%20offers-pana.svg"
                alt="Job offers illustration"
                className="w-full h-full object-contain scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY WORK WITH US ────────────────────────────────────── */}
      <section className="py-20 px-6 bg-slate-50/50 flex justify-center">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-medium uppercase tracking-widest text-[#1a3646]/60 bg-white px-4 py-1.5 rounded-full border border-slate-200/80 mb-4">
              Culture & Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#1a3646] tracking-tight">
              Why Work With Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Impact-Driven Mission", desc: "Work on initiatives that directly transform student lives, campus innovation, and career trajectories across India." },
              { num: "02", title: "Fast-Paced Growth", desc: "Own ambitious projects from day one with guidance from experienced leaders, founders, and industry veterans." },
              { num: "03", title: "Flexible & Collaborative", desc: "Enjoy a transparent, modern, and supportive environment focused on outcomes, creativity, and personal growth." }
            ].map((pillar, i) => (
              <div
                key={i}
                className="p-8 sm:p-10 bg-white border border-slate-200/80 rounded-3xl transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <span className="text-3xl font-light text-[#fbb03b] block mb-6">
                    {pillar.num}
                  </span>
                  <h3 className="text-xl font-medium text-[#1a3646] mb-3 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIFE AT STUDENT FORGE ───────────────────────────────── */}
      <section className="py-20 px-6 bg-white flex justify-center border-t border-slate-100">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Bento Grid Left */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 items-start">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm group bg-slate-100 w-full">
                <Image
                  src="https://ik.imagekit.io/dypkhqxip/WhatsApp%20Image%202026-07-25%20at%2023.25.43.jpeg"
                  alt="Life at Student Forge 1"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>

              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm group bg-slate-100 w-full">
                <Image
                  src="https://ik.imagekit.io/dypkhqxip/WhatsApp%20Image%202026-07-25%20at%2023.23.15.jpeg"
                  alt="Life at Student Forge 3"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6 sm:pt-8">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm group bg-slate-100 w-full">
                <Image
                  src="https://ik.imagekit.io/dypkhqxip/WhatsApp%20Image%202026-07-25%20at%2023.23.35.jpeg"
                  alt="Life at Student Forge 2"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>

              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm group bg-slate-100 w-full">
                <Image
                  src="https://ik.imagekit.io/dypkhqxip/WhatsApp%20Image%202026-07-25%20at%2023.22.57.jpeg"
                  alt="Life at Student Forge 4"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Copy Right */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <span className="text-xs font-medium uppercase tracking-widest text-[#1a3646]/60 bg-slate-100 px-4 py-1.5 rounded-full w-fit">
              Life at Student Forge
            </span>

            <h2 className="text-3xl sm:text-4xl font-normal text-[#1a3646] tracking-tight leading-tight">
              A Culture Driven by Passion, Innovation & Freedom.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              At Student Forge, we believe that great work happens when passionate individuals are empowered with autonomy and a clear purpose.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: 'Collaborative Space', desc: 'Work alongside founders, designers, and engineers.' },
                { title: 'Continuous Growth', desc: 'Personal learning budgets and direct mentorship.' },
                { title: 'National Exposure', desc: 'Lead events, hackathons, and institutional programs.' },
                { title: 'Flexible Environment', desc: 'Focus on outcomes and ownership rather than hours.' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <h3 className="font-medium text-sm text-[#1a3646] mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── OPEN POSITIONS SECTION ──────────────────────────────── */}
      <section id="openings" className="py-20 px-6 bg-slate-50/50 flex justify-center border-t border-slate-100">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-medium uppercase tracking-widest text-[#1a3646]/60 bg-white px-4 py-1.5 rounded-full border border-slate-200/80 mb-4">
              Current Opportunities
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#1a3646] tracking-tight mb-4">
              Open Positions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Explore current open roles and apply to join our growing team across technical, design, and ecosystem initiatives.
            </p>
          </div>

          {/* Job List / Cards Grid */}
          {openJobs.length === 0 ? (
            <div className="bg-white border border-slate-200/80 rounded-3xl p-12 text-center max-w-xl mx-auto">
              <Briefcase className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-medium text-[#1a3646]">No Active Positions Right Now</h3>
              <p className="text-sm text-slate-500 mt-2">
                Check back soon or send us a general application below to be considered for upcoming roles!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {openJobs.map((job) => (
                <Link
                  key={job.id}
                  href={`/careers/${job.id}`}
                  className="bg-white border border-slate-200/80 hover:border-[#1a3646]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md group relative overflow-hidden"
                >
                  {job.featured && (
                    <div className="absolute top-4 right-4 bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#1a3646]/70 uppercase tracking-wider mb-2">
                      <Building2 className="w-4 h-4 text-[#fbb03b]" />
                      <span>{job.department}</span>
                      {job.team && <span>• {job.team}</span>}
                    </div>

                    <h3 className="text-xl font-bold text-[#1a3646] group-hover:text-amber-600 transition-colors mb-3">
                      {job.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-6">
                      {job.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-slate-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-slate-700">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-slate-700">
                        <Clock className="w-3.5 h-3.5 text-slate-400" /> {job.employmentType} ({job.workplaceType})
                      </span>
                    </div>

                    <span className="text-[#1a3646] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      View Details & Apply <ArrowRight className="w-3.5 h-3.5 text-[#fbb03b]" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── GENERAL APPLICATION CTA ─────────────────────────────── */}
      <section className="py-16 px-6 pb-24 bg-white">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[#1a3646] p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="relative z-10 flex-1">
              <h2 className="text-3xl sm:text-4xl font-normal text-white mb-4 tracking-tight leading-tight">
                Don&apos;t See a Perfect Fit? <br className="hidden sm:block" />
                Send Us Your Resume.
              </h2>
              <p className="text-base text-white/70 font-normal mb-8 max-w-md leading-relaxed">
                We are always excited to connect with proactive individuals. Drop us a note with your portfolio or background.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#fbb03b] text-[#1a3646] rounded-full font-medium text-sm hover:bg-[#e09e35] transition-all shadow-md"
              >
                Get In Touch <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
