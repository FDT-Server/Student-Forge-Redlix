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
  Building2,
  GraduationCap,
  ArrowRight,
  Globe,
  Trophy,
  Presentation,
  LayoutDashboard,
  CalendarDays,
  Handshake,
  BookOpen,
  Cpu,
  Star,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Universities & Institutions | Student Forge',
  description: 'Empowering Colleges. Inspiring Students. Building Futures.',
};

export default function InstitutionsPage() {
  return (
    <main className="flex-1 bg-white font-sans">

      {/* ─── HERO HEADER SECTION (Matching About/Startup Style) ────── */}
      <section className="relative pt-20 pb-20 px-6 bg-[#fbb03b] border-b border-[#1a3646]/10">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Copy */}
          <div className="flex-1 text-left">
            <div className="border border-[#1a3646]/20 text-[#1a3646] px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest mb-6 inline-block">
              For Colleges
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a3646] mb-5 tracking-tight leading-tight">
              Empowering Colleges, <br className="hidden sm:block" />
              Building <span className="text-white">Futures</span>.
            </h1>

            <p className="text-base lg:text-lg text-[#1a3646] opacity-80 max-w-md leading-relaxed mb-8 font-normal">
              We partner with institutions to create impactful experiences, skill students, and drive innovation on campus.
            </p>

            <div className="flex flex-wrap items-center justify-start gap-4">
              <Link
                href="https://platform.studentforge.in"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a3646] text-white rounded-full font-medium text-sm hover:bg-[#2d414e] transition-all shadow-md"
              >
                Partner With Us
              </Link>
              <Link
                href="#programs"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#1a3646]/30 text-[#1a3646] rounded-full font-medium text-sm hover:bg-[#1a3646]/10 transition-all"
              >
                Explore Programs <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right: SVG Illustration */}
          <div className="flex-1 relative hidden lg:flex justify-end items-center">
            <div className="relative w-[450px] h-[290px] flex items-center justify-end">
              <img
                src="https://ik.imagekit.io/dypkhqxip/High%20School-amico.svg"
                alt="High School College illustration"
                className="w-full h-full object-contain scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DO FOR COLLEGES (Clean Grid) ────────────────── */}
      <section id="programs" className="py-20 px-6 bg-slate-50/50 flex justify-center">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-medium uppercase tracking-widest text-[#1a3646]/60 bg-white px-4 py-1.5 rounded-full border border-slate-200/80 mb-4">
              Institutional Programs
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#1a3646] tracking-tight">
              What We Do For Colleges
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Trophy, title: 'Hackathons & Tech Events', desc: 'National level competitions, hackathons, and campus tech festivals.' },
              { icon: BookOpen, title: 'Workshops & Bootcamps', desc: 'Industry-relevant workshops and hands-on bootcamps for students.' },
              { icon: Lightbulb, title: 'Innovation Cells', desc: 'Build campus innovation cells and nurture student startup projects.' },
              { icon: GraduationCap, title: 'Placement & Skill Training', desc: 'Skill development programs and direct industry placement connects.' },
              { icon: Handshake, title: 'Industry Connect', desc: 'Connect campus talent with leading industry experts and corporate partners.' },
              { icon: Zap, title: 'Custom Campus Programs', desc: 'Domain-specific solutions tailored for your institution.' },
              { icon: Users, title: 'Student Clubs', desc: 'Build active, student-led technical communities and campus clubs.' },
              { icon: LayoutDashboard, title: 'Digital Platforms', desc: 'Provide institutional dashboards for tracking events and placements.' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white border border-slate-200/80 rounded-3xl transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#fbb03b]/15 text-[#1a3646] flex items-center justify-center mb-6 group-hover:bg-[#fbb03b] transition-colors">
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-medium text-[#1a3646] mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY COLLEGES PARTNER ─────────────────────────────────── */}
      <section className="py-20 px-6 bg-white flex justify-center border-t border-slate-100">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-medium uppercase tracking-widest text-[#1a3646]/60 bg-slate-100 px-4 py-1.5 rounded-full mb-4">
              Key Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#1a3646] tracking-tight">
              Why Colleges Partner With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Industry Connections", desc: "Direct access to top companies, startup networks, and corporate mentors." },
              { num: "02", title: "Skill Acceleration", desc: "Structured bootcamps, verified project tracks, and placement assistance." },
              { num: "03", title: "Ecosystem Growth", desc: "Transform your institution into a recognized center of student innovation." }
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 sm:p-10 bg-slate-50/50 hover:bg-white border border-slate-200/80 rounded-3xl transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <span className="text-3xl font-light text-[#fbb03b] block mb-6">
                    {feature.num}
                  </span>
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

      {/* ─── RECENT WORK ─────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-slate-50/50 flex justify-center border-t border-slate-100">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-medium uppercase tracking-widest text-[#1a3646]/60 bg-white px-4 py-1.5 rounded-full border border-slate-200/80 mb-4">
              Campus Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#1a3646] tracking-tight">
              Our Campus Initiatives
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Trophy, title: 'HackX 5.0', sub: 'National Level Hackathon', stat: '500+ Students' },
              { icon: Cpu, title: 'AI Workshop Series', sub: 'Hands-on AI/ML Sessions', stat: '25+ Colleges' },
              { icon: Lightbulb, title: 'Innovate Launchpad', sub: 'Startup Ideation Program', stat: '100+ Ideas' },
              { icon: Star, title: 'TechFest Collaboration', sub: 'Technical Fest Partner', stat: '3000+ Participants' },
            ].map((work, i) => (
              <div key={i} className="p-8 bg-white border border-slate-200/80 rounded-3xl flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1a3646] text-[#fbb03b] flex items-center justify-center mb-5">
                    <work.icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-medium text-[#1a3646] mb-1">{work.title}</h3>
                  <p className="text-xs text-slate-500 font-normal mb-4">{work.sub}</p>
                  <span className="text-xs font-medium text-[#fbb03b] bg-[#fbb03b]/10 px-3 py-1 rounded-full w-fit block">
                    {work.stat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COLLEGES THAT TRUST US ──────────────────────────────── */}
      <section className="py-20 px-6 bg-white overflow-hidden border-t border-slate-100">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-medium uppercase tracking-widest text-[#1a3646]/60 bg-slate-100 px-4 py-1.5 rounded-full mb-4 inline-block">
              Network
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#1a3646] tracking-tight">
              Colleges That Trust Us
            </h2>
          </div>

          <div className="relative w-full flex overflow-hidden group">
            <div className="flex animate-scroll-left whitespace-nowrap gap-8 py-4 items-center min-w-max">
              {[
                { name: 'KITSS', location: 'Karimnagar', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWJZrm1bfseDZ7WkdqHEvMGO5SGCiv__Mumw&s' },
                { name: 'SRM', location: 'Chennai', logo: 'https://i.pinimg.com/736x/d7/75/41/d77541e44be753901dc2a9ce403e7f52.jpg' },
                { name: 'KL University', location: 'Vijayawada', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpos4pg63pE7Juhd-YWCG3CzF5Rx5ns00DjQ&s' },
                { name: 'Sri Chaitanya', location: 'Khammam', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMR_HCn6NJTJ_PBeSpZWfGA1T-CM90WEEn6g&s' },
                { name: 'Narshimha Reddy', location: 'Hyderabad', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gKgeZMpu1DF0faCTZOWJOXVHpFWmNYNuug&s' },
                { name: 'BITS Pilani', location: 'Rajasthan', logo: 'https://i.pinimg.com/736x/f5/6b/cd/f56bcd8133f436b410b33637e90a540d.jpg' },
                { name: 'Vignan Women\'s', location: 'Hyderabad', logo: 'https://media.collegedekho.com/media/img/institute/logo/Vignan_logo2.jpg' },
                { name: 'CMRIT', location: 'Hyderabad', logo: 'https://cmrithyderabad.edu.in/wp-content/uploads/2025/07/cmr-logo.jpg' },
              ].map((college, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-105"
                >
                  <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center p-3 overflow-hidden">
                    <Image
                      src={college.logo}
                      alt={college.name}
                      width={70}
                      height={70}
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium text-xs text-[#1a3646]">{college.name}</h3>
                    <p className="text-[11px] text-slate-500 font-normal">{college.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─────────────────────────────────────────── */}
      <section className="py-16 px-6 pb-24 bg-white">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[#1a3646] p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="relative z-10 flex-1">
              <h2 className="text-3xl sm:text-4xl font-normal text-white mb-4 tracking-tight leading-tight">
                Let&apos;s Build Something <br className="hidden sm:block" />
                Amazing Together.
              </h2>
              <p className="text-base text-white/70 font-normal mb-8 max-w-md leading-relaxed">
                Partner with Student Forge to empower your campus with industry-relevant skills, events, and career opportunities.
              </p>
              <Link
                href="https://platform.studentforge.in"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#fbb03b] text-[#1a3646] rounded-full font-medium text-sm hover:bg-[#e09e35] transition-all shadow-md"
              >
                Partner With Us <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative z-10 hidden md:flex w-1/3 max-w-[240px] items-center justify-center">
              <div className="relative w-[220px] h-[240px] rounded-2xl overflow-hidden border-2 border-white/20">
                <Image
                  src="/university-hero.png"
                  alt="University campus"
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
