import { Metadata } from 'next';
import Footer from "@/components/Footer";
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Student Forge | Mission & Vision',
  description: 'Explore the mission, vision, and core values of Student Forge. We are dedicated to nurturing the next generation of technical and entrepreneurial leaders.',
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-white font-sans">
      {/* ─── HERO HEADER SECTION (Matching All Pages Style) ─────── */}
      <section className="relative pt-20 pb-20 px-6 bg-[#fbb03b] border-b border-[#1a3646]/10">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Copy */}
          <div className="flex-1 text-left">
            <div className="border border-[#1a3646]/20 text-[#1a3646] px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest mb-6 inline-block">
              Our Foundation
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a3646] mb-5 tracking-tight leading-tight">
              Our Mission & <span className="text-white">Vision</span>.
            </h1>

            <p className="text-base lg:text-lg text-[#1a3646] opacity-80 max-w-md leading-relaxed mb-8 font-normal">
              Student Forge is a dedicated national initiative designed to bridge the gap between academic foundations and professional success.
            </p>
          </div>

          {/* Right: Illustration */}
          <div className="flex-1 relative hidden lg:flex justify-end items-center">
            <div className="relative w-[450px] h-[290px] flex items-center justify-end">
              <img
                src="https://ik.imagekit.io/dypkhqxip/Vision%20board-rafiki.svg"
                alt="Vision Board Illustration"
                className="w-full h-full object-contain scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISION & MISSION CARDS (Clean Layout) ───────────────── */}
      <section className="py-20 px-6 bg-slate-50/50 flex justify-center">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200/80 bg-white p-4 shadow-sm flex items-center justify-center">
            <img
              src="https://ik.imagekit.io/dypkhqxip/WhatsApp_Image_2026-07-25_at_22.51.54-removebg-preview.png"
              alt="Student Forge Foundation"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Vision Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#fbb03b]">
                <span className="w-2 h-2 rounded-full bg-[#fbb03b]" />
                Vision Statement
              </div>
              <h2 className="text-2xl sm:text-3xl font-normal text-[#1a3646] tracking-tight">
                Empowering Accessible Innovation
              </h2>
              <p className="text-base text-slate-600 font-normal leading-relaxed">
                To build the world&apos;s most accessible and high-impact ecosystem for student innovation. We believe every student deserves access to mentorship, tools, and real-world infrastructure to transform academic potential into a professional legacy.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#6fb9a5]">
                <span className="w-2 h-2 rounded-full bg-[#6fb9a5]" />
                Mission Objective
              </div>
              <h2 className="text-2xl sm:text-3xl font-normal text-[#1a3646] tracking-tight">
                Bridging Theory and Practice
              </h2>
              <p className="text-base text-slate-600 font-normal leading-relaxed">
                We are committed to bridging the gap between academic theory and industry reality. By providing a platform for structured mentorship and growth, we ensure every student becomes a true technical innovator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PILLARS OF STUDENT FORGE (Clean Cards) ─────────────── */}
      <section className="py-20 px-6 bg-white flex justify-center border-t border-slate-100">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-medium uppercase tracking-widest text-[#1a3646]/60 bg-slate-100 px-4 py-1.5 rounded-full mb-4">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#1a3646] tracking-tight">
              The Pillars of Student Forge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Standardized Excellence",
                desc: "Ensuring every student has access to the same high-tier technical resources, verified project tracks, and expert guidance regardless of location."
              },
              {
                num: "02",
                title: "Practical Assistance",
                desc: "Moving beyond theory to provide verified, hands-on support in internships, projects, and startup entrepreneurship."
              },
              {
                num: "03",
                title: "National Ecosystem",
                desc: "Building an interconnected network of campus nodes that uplift the entire student community simultaneously."
              }
            ].map((pillar, i) => (
              <div
                key={i}
                className="p-8 sm:p-10 bg-slate-50/50 hover:bg-white border border-slate-200/80 rounded-3xl transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
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

      <Footer />
    </main>
  );
}
