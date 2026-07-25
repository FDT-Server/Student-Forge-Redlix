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
    <main className="flex-1 bg-white text-[#1a3646] font-sans">

      {/* ─── HERO HEADER SECTION (YELLOW BG) ───────────────────────── */}
      <section className="relative pt-32 pb-0 px-6 overflow-hidden bg-[#fbb03b]">
        {/* Ambient glow top-right */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-white opacity-[0.15] blur-[160px] rounded-full translate-x-1/2 -translate-y-1/4 pointer-events-none" />
        {/* Subtle dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #1a3646 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10 pb-0">

          {/* ── Left: Copy ── */}
          <div className="flex-1 text-left pt-6 pb-16">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 border border-[#1a3646]/30 bg-[#1a3646]/10 text-[#1a3646] px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1a3646] animate-pulse" />
              For Startups
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.8rem] xl:text-5xl font-semibold mb-5 tracking-tight leading-[1.12] text-[#1a3646]">
              From Idea to Impact,
              <br />
              <span>We Build Startups</span>
              <br />
              That Change the World.
            </h1>

            <p className="text-sm lg:text-base text-[#1a3646]/80 max-w-md mb-9 leading-relaxed font-normal">
              Student Forge helps startups build, grow and scale with mentorship,
              tech support, talent and exposure.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a3646] text-white rounded-full font-semibold text-sm hover:bg-[#2d414e] hover:scale-105 transition-all shadow-lg shadow-[#1a3646]/20"
              >
                Collaborate With Us
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#1a3646]/30 text-[#1a3646] rounded-full font-semibold text-sm hover:bg-[#1a3646]/10 hover:border-[#1a3646]/50 transition-all"
              >
                Explore Services <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* ── Right: Hero Image ── */}
          <div className="flex-1 relative hidden lg:flex justify-center items-end self-end">
            <div className="relative w-[420px] h-[480px] rounded-t-3xl overflow-hidden shadow-2xl">
              <Image
                src="/startup-hero.png"
                alt="Startup rocket launch"
                fill
                sizes="420px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fbb03b] to-transparent" />
            </div>
          </div>
        </div>

        <div className="h-10 bg-[#fbb03b]" />
      </section>

      {/* ─── FEATURES ROW (WHAT WE DO) ────────────────────────────── */}
      <section className="py-14 px-6 bg-[#f8f9fa] border-y border-[#1a3646]/10">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-3 text-[#1a3646]">
              How We Help Startups
            </h2>
            <p className="text-[#1a3646]/60 text-base max-w-xl mx-auto">
              End-to-end support to turn your ideas into successful ventures.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-[1400px] mx-auto">
            {[
              { icon: Lightbulb, title: 'Ideation Support', desc: 'Validate your idea and build a strong foundation.' },
              { icon: Code, title: 'MVP Development', desc: 'Build your MVP with our technical expertise.' },
              { icon: Users, title: 'Mentorship', desc: 'Get guidance from industry experts and mentors.' },
              { icon: GraduationCap, title: 'Talent Access', desc: 'Hire interns and connect with skilled students.' },
              { icon: TrendingUp, title: 'Branding & Growth', desc: 'From branding to marketing, we help you grow.' },
              { icon: Network, title: 'Funding & Network', desc: 'Connect with investors, partners and ecosystem.' },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-4 p-6 lg:p-7 xl:p-8 rounded-2xl bg-white border-2 border-[#1a3646]/12 hover:border-[#fbb03b] hover:shadow-md transition-all group cursor-default shadow-sm"
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#1a3646] flex items-center justify-center text-[#fbb03b] mb-1 group-hover:scale-110 group-hover:bg-[#fbb03b] group-hover:text-[#1a3646] transition-all shadow-sm shrink-0">
                  <feature.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-[15px] lg:text-base text-[#1a3646] leading-tight">{feature.title}</h3>
                <p className="text-[12px] lg:text-sm text-[#1a3646]/55 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW WE SUPPORT (PROCESS) ─────────────────────────────── */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="w-full max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-3 text-[#1a3646]">
              How We Support Startups
            </h2>
            <p className="text-[#1a3646]/60 text-base max-w-xl mx-auto">
              End-to-end support at every stage of your startup journey.
            </p>
          </div>

          {/* Steps */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div
              className="hidden md:block absolute left-[56px] right-[56px] h-0"
              style={{ top: '28px' }}
            >
              <div
                className="w-full h-0"
                style={{
                  borderTop: '2px dashed #fbb03b',
                  opacity: 0.45,
                }}
              />
            </div>

            {[
              { step: '01', label: 'IDEATE', icon: Lightbulb, desc: 'Validate your idea and build a strong foundation.' },
              { step: '02', label: 'BUILD', icon: Code, desc: 'Build your MVP with the right tech and guidance.' },
              { step: '03', label: 'SCALE', icon: TrendingUp, desc: 'Get resources, mentors and grow your product.' },
              { step: '04', label: 'CONNECT', icon: Network, desc: 'Connect with investors, partners and opportunities.' },
            ].map((phase, i) => (
              <div key={i} className="relative flex flex-col gap-4 group">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#fbb03b] text-[#1a3646] flex items-center justify-center font-semibold text-sm relative z-10 shadow-md group-hover:bg-[#fbb03b] group-hover:text-white transition-all">
                  {phase.step}
                </div>
                <div className="text-[#fbb03b] mt-3">
                  <phase.icon size={28} strokeWidth={1.5} className="opacity-75 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-base font-semibold text-[#1a3646] uppercase tracking-wider">{phase.label}</h4>
                <p className="text-sm text-[#1a3646]/55 leading-relaxed pr-2">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU GET GRID ────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a3646]">
        <div className="w-full max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#fbb03b]">
              What You Get With Student Forge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Code, title: 'Technical Support', desc: 'Development, Design and Tech consulting' },
              { icon: Users, title: 'Mentor Network', desc: 'Connect with industry experts & founders' },
              { icon: GraduationCap, title: 'Student Interns', desc: 'Hire skilled and passionate students' },
              { icon: Presentation, title: 'Pitch & Exposure', desc: 'Get exposure in events, demo days & more' },
              { icon: Building2, title: 'Incubation Connect', desc: 'Access incubators, investors & accelerators' },
              { icon: Globe, title: 'Community Access', desc: 'Join a network of builders & innovators' },
            ].map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-[#fbb03b]/40 hover:bg-white/8 transition-all group cursor-default"
              >
                <div className="w-14 h-14 rounded-xl bg-[#fbb03b]/10 border border-[#fbb03b]/20 flex items-center justify-center text-[#fbb03b] shrink-0 group-hover:scale-110 group-hover:bg-[#fbb03b]/20 transition-all">
                  <benefit.icon size={24} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-semibold text-white">{benefit.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STARTUPS WE'VE COLLABORATED WITH ───────────────────── */}
      <section className="py-24 px-6 bg-[#f8f9fa]">
        <div className="w-full max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#1a3646] mb-2">
              Startups Guided by Student Forge
            </h2>
            <p className="text-sm text-[#1a3646]/50">Growing together with the next generation of founders.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[780px] mx-auto">
            {[
              { name: 'Climato', cat: 'Climate Tech', icon: Globe, color: '#22c55e' },
              { name: 'Doctrina AI', cat: 'AI Education', icon: MessageSquare, color: '#3b82f6' },
              { name: 'Shoplio', cat: 'E-commerce', icon: Zap, color: '#8b5cf6' },
              { name: 'DocuX', cat: 'SaaS Platform', icon: Code, color: '#06b6d4' },
              { name: 'ByteScale', cat: 'Dev Tools', icon: LineChart, color: '#f97316' },
              { name: 'FinMate', cat: 'FinTech', icon: TrendingUp, color: '#fbb03b' },
            ].map((startup, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-6 py-5 rounded-2xl border-2 border-[#1a3646]/10 bg-white hover:border-[#fbb03b] hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer group shadow-sm"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${startup.color}20`, color: startup.color }}
                >
                  <startup.icon size={20} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-sm text-[#1a3646]">{startup.name}</h3>
                  <span className="text-[11px] text-[#1a3646]/45">{startup.cat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ──────────────────────────────────────────── */}
      <section className="py-16 px-6 pb-28 bg-white">
        <div className="w-full max-w-[1100px] mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[#1a3646] border border-white/5 p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#fbb03b] opacity-[0.08] blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#fbb03b] opacity-[0.05] blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            {/* Text */}
            <div className="relative z-10 flex-1">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#fbb03b] mb-4 tracking-tight leading-tight">
                Have an Idea?{' '}
                <br className="hidden sm:block" />
                Let&apos;s Build It Together.
              </h2>
              <p className="text-base text-white/55 mb-8 max-w-md leading-relaxed">
                Bring your idea. We&apos;ll help you build, launch and grow it.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#fbb03b] text-[#1a3646] rounded-full font-semibold text-sm hover:bg-[#e09e35] hover:scale-105 transition-all shadow-lg shadow-[#fbb03b]/20"
              >
                Collaborate With Us <ArrowRight size={16} />
              </Link>
            </div>

            {/* Rocket Image */}
            <div className="relative z-10 hidden md:flex w-1/3 max-w-[240px] items-center justify-center">
              <div className="relative w-[220px] h-[260px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/startup-hero.png"
                  alt="Rocket launch"
                  fill
                  sizes="220px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3646]/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
