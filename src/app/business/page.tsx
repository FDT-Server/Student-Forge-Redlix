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
  CheckCircle2,
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
    <main className="flex-1 bg-white text-[#1a3646] font-sans">

      {/* ─── HERO HEADER SECTION (YELLOW BG) ───────────────────────── */}
      <section className="relative pt-32 pb-0 px-6 overflow-hidden bg-[#fbb03b]">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-white opacity-[0.15] blur-[160px] rounded-full translate-x-1/2 -translate-y-1/4 pointer-events-none" />
        {/* Dot grid */}
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
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#1a3646]/30 bg-[#1a3646]/10 text-[#1a3646] px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1a3646] animate-pulse" />
              For Corporates
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#1a3646] leading-[1.1] mb-6 tracking-tight">
              Discover. Connect.
              <br />
              Hire the Best
              <br />
              <span>Student Talent.</span>
            </h1>

            <p className="text-[#1a3646]/80 text-base lg:text-lg max-w-md leading-relaxed mb-10 font-normal">
              We partner with companies to hire skilled interns, future-ready talent and build strong campus presence.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="https://platform.studentforge.in"
                className="px-7 py-3.5 bg-[#1a3646] text-white rounded-full font-semibold text-sm hover:bg-[#2d414e] hover:scale-105 transition-transform shadow-lg shadow-[#1a3646]/20"
              >
                Hire Talent
              </Link>
              <Link
                href="#how-we-help"
                className="px-7 py-3.5 border border-[#1a3646]/30 text-[#1a3646] rounded-full font-semibold text-sm hover:bg-[#1a3646]/10 hover:border-[#1a3646]/50 transition-all flex items-center gap-2"
              >
                Collaborate With Us <ArrowRight size={15} />
              </Link>
            </div>

            {/* Three quick stats / info pills */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Users,     label: 'Access to Talent Pool' },
                { icon: Building2, label: 'Campus Hiring Solutions' },
                { icon: Megaphone, label: 'Event & Branding Opportunities' },
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-[#1a3646]/10 border border-[#1a3646]/20 px-4 py-2.5 rounded-full">
                  <pill.icon size={16} className="text-[#1a3646]" strokeWidth={1.5} />
                  <span className="text-[#1a3646] text-[12px] font-medium">{pill.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Corporate image ── */}
          <div className="flex-1 w-full max-w-[520px] relative self-end hidden lg:flex">
            <div className="relative w-full h-[420px] rounded-t-3xl overflow-hidden">
              <Image
                src="/corporate-hero.png"
                alt="Corporate professionals"
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

      {/* ─── HOW WE HELP COMPANIES (Clean Minimalist Layout) ────────── */}
      <section id="how-we-help" className="py-24 px-6 bg-[#f8f9fa] border-y border-[#1a3646]/5">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1a3646] mb-4">
                How We Help Companies
              </h2>
              <p className="text-[#1a3646]/60 text-lg leading-relaxed">
                End-to-end solutions to find, hire, and engage with the best student talent. We provide the infrastructure for your campus success.
              </p>
            </div>
            <div className="hidden md:block w-32 h-[1px] bg-[#fbb03b]" />
          </div>

          {/* Individual Cards with Borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users,          title: 'Talent Sourcing',          desc: 'Access a pool of skilled and pre-evaluated student talent directly matched to your industry needs.' },
              { icon: Briefcase,      title: 'Internship Programs',      desc: 'Hire interns for short-term or long-term projects with seamless compliance and tracking.' },
              { icon: Building2,      title: 'Campus Hiring',            desc: 'Conduct placement drives and recruit top performers from targeted institutions.' },
              { icon: CalendarDays,   title: 'Event Collaboration',      desc: 'Sponsor events and hackathons to build authentic brand presence.' },
              { icon: Megaphone,      title: 'Employer Branding',        desc: 'Strengthen your brand visibility among students and campuses with targeted campaigns.' },
              { icon: Settings,       title: 'Custom Solutions',         desc: 'Tailored hiring architectures designed specifically for your unique requirements.' },
              { icon: Lightbulb,      title: 'Innovation Challenges',    desc: 'Run problem statements and hackathons for students to crowdsource solutions.' },
              { icon: HeartHandshake, title: 'CSR & Impact',             desc: 'Collaborate on CSR initiatives and social impact programs to empower the next generation.' },
            ].map((feature, i) => (
              <div key={i} className="bg-[#f8f9fa] p-10 flex flex-col group hover:bg-white transition-colors duration-300 border-2 border-[#1a3646]/10 rounded-2xl">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#1a3646]/10 flex items-center justify-center text-[#1a3646] mb-8 group-hover:border-[#fbb03b] group-hover:text-[#fbb03b] group-hover:shadow-md transition-all duration-300 shadow-sm">
                  <feature.icon size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-[18px] text-[#1a3646] mb-3">{feature.title}</h3>
                  <p className="text-[14px] text-[#1a3646]/60 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY PARTNER WITH US ───────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="w-full max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 text-left">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#1a3646] mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-[#1a3646]/60 text-lg max-w-md leading-relaxed mb-8">
              We make talent acquisition seamless, cost-effective and impactful. Our proven processes ensure you get the best fit for your corporate needs.
            </p>
            <div className="w-20 h-1.5 bg-[#fbb03b] rounded-full" />
          </div>

          <div className="flex-[1.5] w-full flex flex-col gap-4">
            {[
              { icon: Star,         title: 'High Quality Student Talent', desc: 'Pre-vetted and industry-ready candidates.' },
              { icon: Zap,          title: 'Streamlined Hiring Process',  desc: 'End-to-end support from sourcing to onboarding.' },
              { icon: BarChart3,    title: 'Cost-Effective Solutions',    desc: 'Optimize your hiring budget without compromising quality.' },
              { icon: Network,      title: 'Strong Campus Presence',      desc: 'Build your brand across top-tier institutions.' },
              { icon: TrendingUp,   title: 'Long-term Talent Pipeline',   desc: 'Secure future leaders for your organization.' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-5 p-5 rounded-2xl bg-[#f8f9fa] border border-[#1a3646]/5 hover:border-[#fbb03b]/40 hover:bg-[#fbb03b]/5 transition-all group cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-white border border-[#1a3646]/10 flex items-center justify-center text-[#1a3646] group-hover:bg-[#fbb03b] group-hover:text-white transition-all shadow-sm shrink-0">
                  <item.icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-[15px] text-[#1a3646] mb-1">{item.title}</h3>
                  <p className="text-[13px] text-[#1a3646]/50">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HIRING IMPACT STATS ───────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1a3646] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fbb03b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 w-full max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#fbb03b] mb-3">
              Our Hiring Impact
            </h2>
            <p className="text-white/50 text-base">Numbers that speak for themselves.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: '5000+',  label: 'Students Trained' },
              { stat: '300+',   label: 'Companies Partnered' },
              { stat: '1200+',  label: 'Internships Completed' },
              { stat: '450+',   label: 'Placements Facilitated' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-[#fbb03b]/40 transition-all"
              >
                <span className="text-4xl lg:text-5xl font-extrabold text-[#fbb03b] mb-2">{item.stat}</span>
                <span className="text-white/60 text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORPORATE PARTNERS ────────────────────────────────────── */}
      <section className="w-full bg-white py-10 flex flex-col items-center overflow-hidden border-y border-gray-50">
        <div className="w-full max-w-4xl text-center mb-8 px-6">
          <h2 className="text-xl lg:text-2xl font-semibold text-[#1a3646] tracking-tight">
            Our Students Placed in Companies
          </h2>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative w-full flex overflow-hidden group">
          <div className="flex animate-scroll-left whitespace-nowrap gap-12 py-4 items-center min-w-max">
            {[
              { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png" },
              { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" },
              { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png" },
              { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" },
              { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1280px-Accenture.svg.png" },
              { name: "TCS", logo: "https://i.logos-download.com/113971/29583-s2560-9598f09d0f40cf2bc3d3c47217493980.png/Tata_Consultancy_Services_Logo_2020-s2560.png?dl" },
              { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png" },
              { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/3840px-Wipro_Primary_Logo_Color_RGB.svg.png" },
              { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png" },
              { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" },
              { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png" },
              { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" },
              { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1280px-Accenture.svg.png" },
              { name: "TCS", logo: "https://i.logos-download.com/113971/29583-s2560-9598f09d0f40cf2bc3d3c47217493980.png/Tata_Consultancy_Services_Logo_2020-s2560.png?dl" },
              { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png" },
              { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/3840px-Wipro_Primary_Logo_Color_RGB.svg.png" }
            ].map((company, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center px-4 transition-transform duration-300 hover:scale-110">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 lg:h-10 w-auto object-contain block"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ───────────────────────────────────────────── */}
      <section className="py-16 px-6 pb-28 bg-white">
        <div className="w-full max-w-[1100px] mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[#1a3646] border border-white/5 p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#fbb03b] opacity-[0.08] blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#fbb03b] opacity-[0.05] blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            {/* Text */}
            <div className="relative z-10 flex-1">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#fbb03b] mb-4 tracking-tight leading-tight">
                Partner With Us{' '}
                <br className="hidden sm:block" />
                Today.
              </h2>
              <p className="text-base text-white/55 mb-8 max-w-md leading-relaxed">
                Let&apos;s build the future workforce together. We provide end-to-end solutions to help you discover, connect, and hire the best student talent from across India&apos;s top institutions. From talent sourcing to campus hiring and employer branding, we make your recruitment process seamless and impactful.
              </p>
              <Link
                href="https://platform.studentforge.in"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#fbb03b] text-[#1a3646] rounded-full font-semibold text-sm hover:bg-[#e09e35] hover:scale-105 transition-all shadow-lg shadow-[#fbb03b]/20"
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
            </div>

            {/* Corporate Image */}
            <div className="relative z-10 hidden md:flex w-1/3 max-w-[240px] items-center justify-center">
              <div className="relative w-[220px] h-[260px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/corporate-hero.png"
                  alt="Corporate professionals"
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
