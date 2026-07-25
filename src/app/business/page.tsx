import { Metadata } from 'next';
import Image from 'next/image';
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Users,
  Briefcase,
  Building2,
  CalendarDays,
  Star,
  Zap,
  TrendingUp,
  HeartHandshake,
  ArrowRight,
  Globe,
  Award,
  BarChart3,
  GraduationCap,
  Handshake,
  Target,
  Megaphone,
  Settings,
  Lightbulb,
  Network,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Corporates | Student Forge',
  description: 'Discover. Connect. Hire the Best Student Talent.',
};

export default function BusinessPage() {
  return (
    <main className="flex-1 bg-white font-sans">

      {/* ─── HERO HEADER SECTION (Matching About/Startup Style) ────── */}
      <section className="relative pt-20 pb-20 px-6 bg-[#fbb03b] border-b border-[#1a3646]/10">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Copy */}
          <div className="flex-1 text-left">
            <div className="border border-[#1a3646]/20 text-[#1a3646] px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest mb-6 inline-block">
              For Corporates
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a3646] mb-5 tracking-tight leading-tight">
              Discover, Connect & <br className="hidden sm:block" />
              Hire Top <span className="text-white">Talent</span>.
            </h1>

            <p className="text-base lg:text-lg text-[#1a3646] opacity-80 max-w-md leading-relaxed mb-8 font-normal">
              We partner with companies to recruit skilled interns, future-ready builders, and establish strong campus presence.
            </p>

            <div className="flex flex-wrap items-center justify-start gap-4">
              <Link
                href="https://platform.studentforge.in"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a3646] text-white rounded-full font-medium text-sm hover:bg-[#2d414e] transition-all shadow-md"
              >
                Hire Talent
              </Link>
              <Link
                href="#how-we-help"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#1a3646]/30 text-[#1a3646] rounded-full font-medium text-sm hover:bg-[#1a3646]/10 transition-all"
              >
                Collaborate With Us <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right: SVG Illustration */}
          <div className="flex-1 relative hidden lg:flex justify-end items-center">
            <div className="relative w-[450px] h-[290px] flex items-center justify-end">
              <img
                src="https://ik.imagekit.io/dypkhqxip/In%20the%20office-amico.svg"
                alt="In the office illustration"
                className="w-full h-full object-contain scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW WE HELP COMPANIES ───────────────────────────────── */}
      <section id="how-we-help" className="py-20 px-6 bg-slate-50/50 flex justify-center">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-medium uppercase tracking-widest text-[#1a3646]/60 bg-white px-4 py-1.5 rounded-full border border-slate-200/80 mb-4">
              Corporate Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#1a3646] tracking-tight">
              How We Help Companies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Talent Sourcing', desc: 'Access pre-vetted student talent matched to your specific industry skills.' },
              { icon: Briefcase, title: 'Internship Programs', desc: 'Recruit interns for short or long term projects with tracking compliance.' },
              { icon: Building2, title: 'Campus Hiring Drives', desc: 'Conduct targeted hiring events across leading university institutions.' },
              { icon: CalendarDays, title: 'Event Sponsorships', desc: 'Sponsor tech competitions and hackathons to build brand presence.' },
              { icon: Megaphone, title: 'Employer Branding', desc: 'Amplify corporate visibility directly among top-performing students.' },
              { icon: Settings, title: 'Custom Architecture', desc: 'Tailored recruitment pipelines matching your technical requirements.' },
              { icon: Lightbulb, title: 'Innovation Hackathons', desc: 'Host real-world corporate problem statements for crowdsourced solutions.' },
              { icon: HeartHandshake, title: 'CSR & Impact', desc: 'Execute meaningful educational CSR programs that empower future builders.' },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 bg-white border border-slate-200/80 rounded-3xl transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#fbb03b]/15 text-[#1a3646] flex items-center justify-center mb-6 group-hover:bg-[#fbb03b] transition-colors">
                    <feature.icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-medium text-[#1a3646] mb-2 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY PARTNER WITH US ───────────────────────────────────── */}
      <section className="py-20 px-6 bg-white flex justify-center border-t border-slate-100">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-medium uppercase tracking-widest text-[#1a3646]/60 bg-slate-100 px-4 py-1.5 rounded-full mb-4">
              Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#1a3646] tracking-tight">
              Why Partner With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Pre-Vetted Candidates", desc: "Access high-performing student builders evaluated through real projects." },
              { num: "02", title: "Cost & Time Savings", desc: "Streamline campus recruitment pipelines without heavy administrative overhead." },
              { num: "03", title: "Sustained Talent Pipeline", desc: "Establish long-term employer brand presence across premier institutes." }
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 sm:p-10 bg-slate-50/50 hover:bg-white border border-slate-200/80 rounded-3xl transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <span className="text-3xl font-light text-[#fbb03b] block mb-6">
                    {item.num}
                  </span>
                  <h3 className="text-xl font-medium text-[#1a3646] mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HIRING IMPACT STATS ───────────────────────────────────── */}
      <section className="py-20 px-6 bg-slate-50/50 flex justify-center border-t border-slate-100">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-medium uppercase tracking-widest text-[#1a3646]/60 bg-white px-4 py-1.5 rounded-full border border-slate-200/80 mb-4">
              Impact Numbers
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#1a3646] tracking-tight">
              Our Recruitment Impact
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: '5,000+', label: 'Students Trained' },
              { stat: '300+', label: 'Corporate Partners' },
              { stat: '1,200+', label: 'Internships Facilitated' },
              { stat: '450+', label: 'Full-time Placements' },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white border border-slate-200/80 rounded-3xl flex flex-col items-center text-center shadow-sm">
                <span className="text-3xl sm:text-4xl font-normal text-[#fbb03b] mb-2">{item.stat}</span>
                <span className="text-sm text-slate-600 font-normal">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-16 px-6 pb-24 bg-white">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[#1a3646] p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="relative z-10 flex-1">
              <h2 className="text-3xl sm:text-4xl font-normal text-white mb-4 tracking-tight leading-tight">
                Partner With Us <br className="hidden sm:block" />
                Today.
              </h2>
              <p className="text-base text-white/70 font-normal mb-8 max-w-md leading-relaxed">
                Build your future talent pipeline with Student Forge. Connect with top-tier student candidates from institutions nationwide.
              </p>
              <Link
                href="https://platform.studentforge.in"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#fbb03b] text-[#1a3646] rounded-full font-medium text-sm hover:bg-[#e09e35] transition-all shadow-md"
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative z-10 hidden md:flex w-1/3 max-w-[240px] items-center justify-center">
              <div className="relative w-[220px] h-[240px] rounded-2xl overflow-hidden border-2 border-white/20">
                <Image
                  src="/corporate-hero.png"
                  alt="Corporate professionals"
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
