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
  ArrowLeft,
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
    <main className="flex-1 bg-white text-[#1a3646] font-sans">

      {/* ─── HERO HEADER SECTION (YELLOW BG) ───────────────────────── */}
      <section className="relative pt-32 pb-0 px-6 overflow-hidden bg-[#fbb03b]">
        {/* Ambient glow top-right */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-white opacity-[0.15] blur-[160px] rounded-full translate-x-1/2 -translate-y-1/4 pointer-events-none" />
        {/* Subtle dot grid */}
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
              For Colleges
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#1a3646] leading-[1.1] mb-6 tracking-tight">
              Empowering Colleges.
              <br />
              Inspiring Students.
              <br />
              Building Futures.
            </h1>

            <p className="text-[#1a3646]/80 text-base lg:text-lg max-w-md leading-relaxed mb-10 font-normal">
              We partner with colleges to create impactful experiences, skill students and drive innovation on campus.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://platform.studentforge.in"
                className="px-7 py-3.5 bg-[#1a3646] text-white rounded-full font-semibold text-sm hover:bg-[#2d414e] hover:scale-105 transition-transform shadow-lg shadow-[#1a3646]/20"
              >
                Partner With Us
              </Link>
              <Link
                href="#programs"
                className="px-7 py-3.5 border border-[#1a3646]/30 text-[#1a3646] rounded-full font-semibold text-sm hover:bg-[#1a3646]/10 hover:border-[#1a3646]/50 transition-all flex items-center gap-2"
              >
                Explore Programs <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* ── Right: University building image ── */}
          <div className="flex-1 w-full max-w-[520px] relative self-end">
            <div className="relative w-full h-[420px] rounded-t-3xl overflow-hidden">
              <Image
                src="/university-hero.png"
                alt="University campus"
                fill
                sizes="520px"
                className="object-cover object-center"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fbb03b] to-transparent" />
            </div>
          </div>
        </div>

        <div className="h-10 bg-[#fbb03b]" />
      </section>

      {/* ─── WHAT WE DO FOR COLLEGES ──────────────────────────────── */}
      <section id="programs" className="py-20 px-6 bg-white">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#1a3646] mb-3">
              What We Do For Colleges
            </h2>
            <p className="text-[#1a3646]/60 text-base max-w-2xl mx-auto">
              End-to-end programs and services designed to transform campus life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Trophy,
                title: 'Hackathons & Tech Events',
                desc: 'We organize hackathons, competitions and tech festivals.',
                color: '#fbb03b'
              },
              {
                icon: BookOpen,
                title: 'Workshops & Bootcamps',
                desc: 'Industry-relevant workshops and hands-on bootcamps for students.',
                color: '#3b82f6'
              },
              {
                icon: Lightbulb,
                title: 'Innovation & Incubation Support',
                desc: 'Build innovation cells and support student startups.',
                color: '#22c55e'
              },
              {
                icon: GraduationCap,
                title: 'Placement & Training Support',
                desc: 'Skill development programs and placement assistance.',
                color: '#8b5cf6'
              },
              {
                icon: Handshake,
                title: 'Industry Connect',
                desc: 'Connect students with industry experts and opportunities.',
                color: '#f97316'
              },
              {
                icon: Zap,
                title: 'Custom Solutions',
                desc: 'Domain-specific solutions tailored for your college.',
                color: '#06b6d4'
              },
              {
                icon: Users,
                title: 'Community Building',
                desc: 'Build active student communities and clubs.',
                color: '#ec4899'
              },
              {
                icon: LayoutDashboard,
                title: 'Digital Platforms',
                desc: 'Provide dashboards and platforms for events, placements & more.',
                color: '#6366f1'
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 rounded-xl bg-[#f8f9fa] border border-[#1a3646]/5 hover:border-[#fbb03b]/30 hover:shadow-md transition-all group cursor-default"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[16px] text-[#1a3646] mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[#1a3646]/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY COLLEGES PARTNER ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="w-full max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#1a3646] mb-3">
              Why Colleges Partner With Student Forge?
            </h2>
            <p className="text-[#1a3646]/60 text-base max-w-xl mx-auto">
              We go beyond events. We build an innovation ecosystem.
            </p>
          </div>

          {/* Hub-and-spoke layout */}
          <div className="hidden lg:grid grid-cols-[1fr_260px_1fr] items-center">

            {/* Left column — pr-10 leaves space for the connector line */}
            <div className="flex flex-col gap-5 pr-10">
              {[
                { icon: Network,   title: 'Industry Connect',   desc: 'Strong industry & startup network for students' },
                { icon: BookOpen,  title: 'Skill Development',  desc: 'Workshops, bootcamps & training programs' },
                { icon: Lightbulb, title: 'Innovation Culture', desc: 'Encouraging creativity, research & startups' },
              ].map((item, i) => (
                <div key={i} className="relative flex items-start gap-4 p-5 rounded-2xl border border-[#1a3646]/10 hover:border-[#fbb03b]/50 hover:bg-[#fbb03b]/4 transition-all group cursor-default shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-[#1a3646] flex items-center justify-center text-[#fbb03b] shrink-0 group-hover:scale-110 group-hover:bg-[#fbb03b] group-hover:text-[#1a3646] transition-all">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[14px] text-[#1a3646] mb-1">{item.title}</h3>
                    <p className="text-[12px] text-[#1a3646]/55 leading-relaxed">{item.desc}</p>
                  </div>
                  {/* Connector */}
                  <div
                    className={`absolute right-0 h-0 ${i === 1 ? 'top-1/2 -translate-y-1/2' : i === 0 ? 'top-1/3' : 'top-2/3'}`}
                    style={{
                      width: i === 1 ? '75px' : '100px',
                      right: i === 1 ? '-75px' : '-100px',
                      borderTop: '3px dashed #fbb03b',
                      opacity: 0.6,
                      transform: i === 0 ? 'rotate(15deg)' : i === 2 ? 'rotate(-15deg)' : 'none',
                      transformOrigin: 'left center'
                    }}
                  />
                </div>
              ))}
            </div>

            {/* ── Center: glowing college building icon ── */}
            <div className="flex justify-center items-center">
              <div className="relative flex items-center justify-center w-[200px] h-[200px]">
                <div className="absolute inset-0 rounded-full border border-[#fbb03b]/15 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute w-44 h-44 rounded-full border border-[#fbb03b]/20" />
                <div className="absolute w-36 h-36 rounded-full border-2 border-dashed border-[#fbb03b]/35 animate-spin" style={{ animationDuration: '22s' }} />
                <div className="absolute w-28 h-28 rounded-full bg-[#fbb03b] opacity-[0.15] blur-2xl" />
                <div className="relative w-[110px] h-[110px] rounded-full bg-[#1a3646] border-2 border-[#fbb03b]/80 flex items-center justify-center shadow-2xl shadow-[#fbb03b]/25 z-10">
                  <svg
                    viewBox="0 0 64 64"
                    className="w-14 h-14 text-[#fbb03b]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="32" y1="2" x2="32" y2="12" />
                    <polygon points="32,2 42,6 32,10" fill="currentColor" stroke="none" opacity="0.9" />
                    <path d="M20,22 Q32,10 44,22" />
                    <line x1="20" y1="22" x2="44" y2="22" />
                    <line x1="16" y1="26" x2="48" y2="26" />
                    <line x1="20" y1="26" x2="20" y2="48" />
                    <line x1="27" y1="26" x2="27" y2="48" />
                    <line x1="37" y1="26" x2="37" y2="48" />
                    <line x1="44" y1="26" x2="44" y2="48" />
                    <line x1="14" y1="48" x2="50" y2="48" />
                    <path d="M27,48 L27,40 Q32,36 37,40 L37,48" />
                    <line x1="12" y1="50" x2="52" y2="50" />
                    <line x1="10" y1="53" x2="54" y2="53" />
                    <line x1="8" y1="56" x2="56" y2="56" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-5 pl-10">
              {[
                { icon: GraduationCap,   title: 'Placement Support',   desc: 'Better opportunities and hiring connects' },
                { icon: CalendarDays,    title: 'Event Management',    desc: 'End-to-end execution of college events' },
                { icon: LayoutDashboard, title: 'Dedicated Dashboard', desc: 'Track students, events and engagement' },
              ].map((item, i) => (
                <div key={i} className="relative flex items-start gap-4 p-5 rounded-2xl border border-[#1a3646]/10 hover:border-[#fbb03b]/50 hover:bg-[#fbb03b]/4 transition-all group cursor-default shadow-sm">
                  <div
                    className={`absolute left-0 h-0 ${i === 1 ? 'top-1/2 -translate-y-1/2' : i === 0 ? 'top-1/3' : 'top-2/3'}`}
                    style={{
                      width: i === 1 ? '75px' : '100px',
                      left: i === 1 ? '-75px' : '-100px',
                      borderTop: '3px dashed #fbb03b',
                      opacity: 0.6,
                      transform: i === 0 ? 'rotate(-15deg)' : i === 2 ? 'rotate(15deg)' : 'none',
                      transformOrigin: 'right center'
                    }}
                  />
                  <div className="w-11 h-11 rounded-xl bg-[#1a3646] flex items-center justify-center text-[#fbb03b] shrink-0 group-hover:scale-110 group-hover:bg-[#fbb03b] group-hover:text-[#1a3646] transition-all">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[14px] text-[#1a3646] mb-1">{item.title}</h3>
                    <p className="text-[12px] text-[#1a3646]/55 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Mobile fallback */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[
              { icon: Network,         title: 'Industry Connect',   desc: 'Strong industry & startup network for students' },
              { icon: BookOpen,        title: 'Skill Development',  desc: 'Workshops, bootcamps & training programs' },
              { icon: Lightbulb,       title: 'Innovation Culture', desc: 'Encouraging creativity, research & startups' },
              { icon: GraduationCap,   title: 'Placement Support',  desc: 'Better opportunities and hiring connects' },
              { icon: CalendarDays,    title: 'Event Management',   desc: 'End-to-end execution of college events' },
              { icon: LayoutDashboard, title: 'Dedicated Dashboard',desc: 'Track students, events and engagement' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-[#1a3646]/10 hover:border-[#fbb03b]/40 transition-all group cursor-default">
                <div className="w-11 h-11 rounded-xl bg-[#1a3646] flex items-center justify-center text-[#fbb03b] shrink-0 group-hover:bg-[#fbb03b] group-hover:text-[#1a3646] transition-all">
                  <item.icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-[14px] text-[#1a3646] mb-1">{item.title}</h3>
                  <p className="text-[12px] text-[#1a3646]/55 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── OUR RECENT WORK ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a3646]">
        <div className="w-full max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#fbb03b] mb-3">
              Our Recent Work
            </h2>
            <p className="text-white/50 text-base">
              A glimpse of what we&apos;ve created on campus.
            </p>
          </div>

          {/* Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Trophy,       title: 'HackX 5.0',              sub: 'National Level Hackathon',    stat: '500+ Students', image: '/community-card.png' },
              { icon: Cpu,          title: 'AI Workshop Series',      sub: 'Hands-on AI/ML Sessions',    stat: '25+ Colleges', image: '/impact-card.png' },
              { icon: Lightbulb,    title: 'Innovate Launchpad',      sub: 'Startup Ideation Program',   stat: '100+ Ideas', image: '/startup-hero.png' },
              { icon: Star,         title: 'TechFest Collaboration',  sub: 'Technical Fest Partner',     stat: '3000+ Participants', image: '/about-torch-new.jpg' },
            ].map((work, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-[#fbb03b]/40 transition-all cursor-default">
                {/* Image */}
                <div className="relative h-32 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a3646]/80 z-10" />
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                {/* Coloured top strip */}
                <div className="h-2 w-full bg-[#fbb03b]/60 group-hover:bg-[#fbb03b] transition-colors" />
                <div className="p-6 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#fbb03b]/15 border border-[#fbb03b]/20 flex items-center justify-center text-[#fbb03b] group-hover:scale-110 transition-transform">
                    <work.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-[15px] mb-1">{work.title}</h3>
                    <p className="text-[12px] text-white/50 mb-3">{work.sub}</p>
                    <div className="flex items-center gap-1.5 text-[#fbb03b] text-[12px] font-semibold">
                      <Star size={11} fill="#fbb03b" />
                      {work.stat}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COLLEGES THAT TRUST US ──────────────────────────────── */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#1a3646] mb-3">
              Colleges That Trust Us
            </h2>
            <p className="text-base text-[#1a3646]/50 max-w-2xl mx-auto">
              Partnering with the best institutions across India to drive innovation and excellence.
            </p>
          </div>

          {/* Infinite Scroll Container */}
          <div className="relative w-full flex overflow-hidden group">
            <div className="flex animate-scroll-left whitespace-nowrap gap-8 py-4 items-center min-w-max">
              {[
                { name: 'KITSS', location: 'Karimnagar', shortName: 'KITSS', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWJZrm1bfseDZ7WkdqHEvMGO5SGCiv__Mumw&s', size: 90 },
                { name: 'SRM', location: 'Chennai', shortName: 'SRM', logo: 'https://i.pinimg.com/736x/d7/75/41/d77541e44be753901dc2a9ce403e7f52.jpg', size: 110 },
                { name: 'KL University', location: 'Vijayawada', shortName: 'KL', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpos4pg63pE7Juhd-YWCG3CzF5Rx5ns00DjQ&s', size: 75 },
                { name: 'Sri Chaitanya', location: 'Khammam', shortName: 'SRI CHAITANYA', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMR_HCn6NJTJ_PBeSpZWfGA1T-CM90WEEn6g&s', size: 90 },
                { name: 'Narshimha Reddy', location: 'Hyderabad', shortName: 'NARSHIMHA REDDY', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gKgeZMpu1DF0faCTZOWJOXVHpFWmNYNuug&s', size: 90 },
                { name: 'BITS Pilani', location: 'Rajasthan', shortName: 'BITS', logo: 'https://i.pinimg.com/736x/f5/6b/cd/f56bcd8133f436b410b33637e90a540d.jpg', size: 90 },
                { name: 'Vignan Women\'s', location: 'Hyderabad', shortName: 'VIGNAN', logo: 'https://media.collegedekho.com/media/img/institute/logo/Vignan_logo2.jpg', size: 90 },
                { name: 'CMRIT', location: 'Hyderabad', shortName: 'CMRIT', logo: 'https://cmrithyderabad.edu.in/wp-content/uploads/2025/07/cmr-logo.jpg', size: 90 },
              ].map((college, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex flex-col items-center gap-3 group cursor-default transition-transform duration-300 hover:scale-110"
                >
                  <div className="w-24 h-24 rounded-xl bg-[#f8f9fa] border border-[#1a3646]/10 flex items-center justify-center group-hover:border-[#fbb03b] group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
                    {college.logo ? (
                      <Image
                        src={college.logo}
                        alt={college.name}
                        width={college.size || 90}
                        height={college.size || 90}
                        className="object-contain"
                        unoptimized
                      />
                    ) : (
                      <span className="text-[10px] font-semibold text-[#1a3646] text-center leading-tight px-1 group-hover:text-[#fbb03b] transition-colors">
                        {college.shortName}
                      </span>
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-sm text-[#1a3646]">{college.name}</h3>
                    <p className="text-xs text-[#1a3646]/40">{college.location}</p>
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                { name: 'KITSS', location: 'Karimnagar', shortName: 'KITSS', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWJZrm1bfseDZ7WkdqHEvMGO5SGCiv__Mumw&s', size: 90 },
                { name: 'SRM', location: 'Chennai', shortName: 'SRM', logo: 'https://i.pinimg.com/736x/d7/75/41/d77541e44be753901dc2a9ce403e7f52.jpg', size: 110 },
                { name: 'KL University', location: 'Vijayawada', shortName: 'KL', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpos4pg63pE7Juhd-YWCG3CzF5Rx5ns00DjQ&s', size: 75 },
                { name: 'Sri Chaitanya', location: 'Khammam', shortName: 'SRI CHAITANYA', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMR_HCn6NJTJ_PBeSpZWfGA1T-CM90WEEn6g&s', size: 90 },
                { name: 'Narshimha Reddy', location: 'Hyderabad', shortName: 'NARSHIMHA REDDY', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gKgeZMpu1DF0faCTZOWJOXVHpFWmNYNuug&s', size: 90 },
                { name: 'BITS Pilani', location: 'Rajasthan', shortName: 'BITS', logo: 'https://i.pinimg.com/736x/f5/6b/cd/f56bcd8133f436b410b33637e90a540d.jpg', size: 90 },
                { name: 'Vignan Women\'s', location: 'Hyderabad', shortName: 'VIGNAN', logo: 'https://media.collegedekho.com/media/img/institute/logo/Vignan_logo2.jpg', size: 90 },
                { name: 'CMRIT', location: 'Hyderabad', shortName: 'CMRIT', logo: 'https://cmrithyderabad.edu.in/wp-content/uploads/2025/07/cmr-logo.jpg', size: 90 },
              ].map((college, i) => (
                <div
                  key={`duplicate-${i}`}
                  className="flex-shrink-0 flex flex-col items-center gap-3 group cursor-default transition-transform duration-300 hover:scale-110"
                >
                  <div className="w-24 h-24 rounded-xl bg-[#f8f9fa] border border-[#1a3646]/10 flex items-center justify-center group-hover:border-[#fbb03b] group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
                    {college.logo ? (
                      <Image
                        src={college.logo}
                        alt={college.name}
                        width={college.size || 90}
                        height={college.size || 90}
                        className="object-contain"
                        unoptimized
                      />
                    ) : (
                      <span className="text-[10px] font-semibold text-[#1a3646] text-center leading-tight px-1 group-hover:text-[#fbb03b] transition-colors">
                        {college.shortName}
                      </span>
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-sm text-[#1a3646]">{college.name}</h3>
                    <p className="text-xs text-[#1a3646]/40">{college.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─────────────────────────────────────────── */}
      <section className="py-16 px-6 pb-28 bg-white">
        <div className="w-full max-w-[1100px] mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[#1a3646] border border-white/5 p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#fbb03b] opacity-[0.08] blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#fbb03b] opacity-[0.05] blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            {/* Text */}
            <div className="relative z-10 flex-1">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#fbb03b] mb-4 tracking-tight leading-tight">
                Let&apos;s Build Something{' '}
                <br className="hidden sm:block" />
                Amazing Together.
              </h2>
              <p className="text-base text-white/55 mb-8 max-w-md leading-relaxed">
                Partner with Student Forge and empower your students with opportunities, skills and innovation. We provide comprehensive programs including hackathons, workshops, innovation cells, and placement support to transform your campus into a hub of creativity and excellence.
              </p>
              <Link
                href="https://platform.studentforge.in"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#fbb03b] text-[#1a3646] rounded-full font-semibold text-sm hover:bg-[#e09e35] hover:scale-105 transition-all shadow-lg shadow-[#fbb03b]/20"
              >
                Partner With Us <ArrowRight size={16} />
              </Link>
            </div>

            {/* University Image */}
            <div className="relative z-10 hidden md:flex w-1/3 max-w-[240px] items-center justify-center">
              <div className="relative w-[220px] h-[260px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/university-hero.png"
                  alt="University campus"
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
