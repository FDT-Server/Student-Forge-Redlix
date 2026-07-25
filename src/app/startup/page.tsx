import { Metadata } from 'next';
import Image from 'next/image';
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Lightbulb,
  Users,
  Code,
  TrendingUp,
  Network,
  Zap,
  Presentation,
  Building2,
  Globe,
  ArrowRight,
  GraduationCap,
  LineChart,
  MessageSquare,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Startups | Student Forge',
  description: 'From Idea to Impact, We Build Startups That Change the World.',
};

export default function StartupPage() {
  return (
    <main className="flex-1 bg-white font-sans">

      {/* ─── HERO HEADER SECTION (Matching About Page Style) ─────── */}
      <section className="relative pt-20 pb-20 px-6 bg-[#fbb03b] border-b border-[#1a3646]/10">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Copy */}
          <div className="flex-1 text-left">
            <div className="border border-[#1a3646]/20 text-[#1a3646] px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest mb-6 inline-block">
              For Startups
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a3646] mb-5 tracking-tight leading-tight">
              From Idea to Impact, <br className="hidden sm:block" />
              We Build <span className="text-white">Startups</span>.
            </h1>

            <p className="text-base lg:text-lg text-[#1a3646] opacity-80 max-w-md leading-relaxed mb-8 font-normal">
              Student Forge helps startups build, grow, and scale.
            </p>

            <div className="flex flex-wrap items-center justify-start gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a3646] text-white rounded-full font-medium text-sm hover:bg-[#2d414e] transition-all shadow-md"
              >
                Collaborate With Us
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#1a3646]/30 text-[#1a3646] rounded-full font-medium text-sm hover:bg-[#1a3646]/10 transition-all"
              >
                Explore Services <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right: SVG Illustration */}
          <div className="flex-1 relative hidden lg:flex justify-end items-center">
            <div className="relative w-[450px] h-[290px] flex items-center justify-end">
              <img
                src="https://ik.imagekit.io/dypkhqxip/Starting%20a%20business%20project-amico.svg"
                alt="Starting a business project illustration"
                className="w-full h-full object-contain scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW WE HELP STARTUPS (Clean Grid) ───────────────────── */}
      <section className="py-20 px-6 bg-slate-50/50 flex justify-center">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-medium uppercase tracking-widest text-[#1a3646]/60 bg-white px-4 py-1.5 rounded-full border border-slate-200/80 mb-4">
              Comprehensive Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#1a3646] tracking-tight">
              How We Help Startups
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: 'Ideation Support', desc: 'Validate your concept and build a solid strategic foundation.' },
              { icon: Code, title: 'MVP Development', desc: 'Build scalable MVPs with our hands-on technical architecture support.' },
              { icon: Users, title: 'Mentorship', desc: 'Receive direct guidance from industry founders and domain leaders.' },
              { icon: GraduationCap, title: 'Talent Access', desc: 'Connect with skilled student interns and high-performing builders.' },
              { icon: TrendingUp, title: 'Branding & Growth', desc: 'Accelerate your market reach through brand positioning and marketing.' },
              { icon: Network, title: 'Funding & Network', desc: 'Connect with investors, venture networks, and incubator partners.' },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 sm:p-10 bg-white border border-slate-200/80 rounded-3xl transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#fbb03b]/15 text-[#1a3646] flex items-center justify-center mb-6 group-hover:bg-[#fbb03b] transition-colors">
                    <feature.icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium text-[#1a3646] mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS MODEL ────────────────────────────────────────── */}
      <section id="services" className="py-20 px-6 bg-white flex justify-center border-t border-slate-100">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-medium uppercase tracking-widest text-[#1a3646]/60 bg-slate-100 px-4 py-1.5 rounded-full mb-4">
              Execution Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#1a3646] tracking-tight">
              Our Execution Model
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'IDEATE', icon: Lightbulb, desc: 'Validate your concept and build a strong market foundation.' },
              { step: '02', title: 'BUILD', icon: Code, desc: 'Construct your MVP with proper tech stack and guidance.' },
              { step: '03', title: 'SCALE', icon: TrendingUp, desc: 'Acquire resources, mentors, and expand your user base.' },
              { step: '04', title: 'CONNECT', icon: Network, desc: 'Engage with investors, partners, and growth networks.' },
            ].map((phase, i) => (
              <div
                key={i}
                className="p-8 bg-slate-50/50 border border-slate-200/80 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-light text-[#fbb03b] block mb-4">
                    {phase.step}
                  </span>
                  <div className="text-[#1a3646] mb-3">
                    <phase.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-medium text-[#1a3646] mb-2 uppercase tracking-wider">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU GET WITH STUDENT FORGE ─────────────────────── */}
      <section className="py-20 px-6 bg-slate-50/50 flex justify-center border-t border-slate-100">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-medium uppercase tracking-widest text-[#1a3646]/60 bg-white px-4 py-1.5 rounded-full border border-slate-200/80 mb-4">
              Value Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#1a3646] tracking-tight">
              What You Get With Student Forge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Code, title: 'Technical Support', desc: 'Development, Design and Architecture consulting.' },
              { icon: Users, title: 'Mentor Network', desc: 'Connect directly with industry experts & seasoned founders.' },
              { icon: GraduationCap, title: 'Student Interns', desc: 'Recruit skilled, passionate, and pre-evaluated student builders.' },
              { icon: Presentation, title: 'Pitch & Exposure', desc: 'Gain visibility at demo days, showcase events, and tech expos.' },
              { icon: Building2, title: 'Incubation Connect', desc: 'Direct referral pathways to top incubators & venture funds.' },
              { icon: Globe, title: 'Community Access', desc: 'Join an active network of innovators and technical builders.' },
            ].map((benefit, i) => (
              <div
                key={i}
                className="p-8 bg-white border border-slate-200/80 rounded-3xl flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#1a3646] text-[#fbb03b] flex items-center justify-center mb-5">
                    <benefit.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-medium text-[#1a3646] mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ─── CTA BANNER ─────────────────────────────────────────── */}
      <section className="py-16 px-6 pb-24 bg-white">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[#1a3646] p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="relative z-10 flex-1">
              <h2 className="text-3xl sm:text-4xl font-normal text-white mb-4 tracking-tight leading-tight">
                Have an Idea? <br className="hidden sm:block" />
                Let&apos;s Build It Together.
              </h2>
              <p className="text-base text-white/70 font-normal mb-8 max-w-md leading-relaxed">
                Bring your idea. We&apos;ll help you validate, build, launch, and grow it.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#fbb03b] text-[#1a3646] rounded-full font-medium text-sm hover:bg-[#e09e35] transition-all shadow-md"
              >
                Collaborate With Us <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative z-10 hidden md:flex w-1/3 max-w-[240px] items-center justify-center">
              <div className="relative w-[220px] h-[240px] rounded-2xl overflow-hidden border-2 border-white/20">
                <Image
                  src="/startup-hero.png"
                  alt="Rocket launch"
                  fill
                  sizes="220px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
