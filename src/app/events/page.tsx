import { Metadata } from 'next';
import Footer from "@/components/Footer";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CalendarDays, MapPin, Sparkles, Trophy } from 'lucide-react';
import EventBannerCarousel from '@/components/EventBannerCarousel';

export const metadata: Metadata = {
  title: 'Events & Summits | Student Forge Bootcamps',
  description: 'Stay updated on upcoming Student Forge events, technical bootcamps, and national leadership summits.',
};

const pastEvents = [
  "https://ik.imagekit.io/dypkhqxip/WhatsApp%20Image%202026-07-25%20at%2023.30.41.jpeg",
  "https://ik.imagekit.io/dypkhqxip/WhatsApp%20Image%202026-07-25%20at%2023.30.41%20(3).jpeg",
  "https://ik.imagekit.io/dypkhqxip/WhatsApp%20Image%202026-07-25%20at%2023.30.41%20(4).jpeg",
  "https://ik.imagekit.io/dypkhqxip/WhatsApp%20Image%202026-07-25%20at%2023.30.41%20(2).jpeg",
  "https://ik.imagekit.io/dypkhqxip/WhatsApp%20Image%202026-07-25%20at%2023.30.41%20(1).jpeg",
  "https://ik.imagekit.io/dypkhqxip/IMG_20260308_131425.jpg?updatedAt=1773266169989",
  "https://ik.imagekit.io/dypkhqxip/IMG_20260310_175149.jpg?updatedAt=1773266169978",
  "https://ik.imagekit.io/dypkhqxip/IMG_20260310_175105.jpg?updatedAt=1773266169996",
  "https://ik.imagekit.io/dypkhqxip/IMG_20260310_175035.jpg?updatedAt=1773266169852",
  "https://ik.imagekit.io/dypkhqxip/IMG_20260310_174945.jpg?updatedAt=1773266169831",
  "https://ik.imagekit.io/dypkhqxip/IMG_20260308_131321.jpg?updatedAt=1773266169809",
  "https://ik.imagekit.io/dypkhqxip/IMG_20260227_134707%20(1).jpg?updatedAt=1773266169756",
  "https://ik.imagekit.io/dypkhqxip/IMG_20260308_131351.jpg?updatedAt=1773266168825",
  "https://ik.imagekit.io/dypkhqxip/WhatsApp%20Image%202026-03-10%20at%2018.03.04.jpeg?updatedAt=1773265592482",
  "https://ik.imagekit.io/dypkhqxip/WhatsApp%20Image%202026-03-10%20at%2017.48.20.jpeg?updatedAt=1773265591827",
  "https://ik.imagekit.io/dypkhqxip/Screenshot%202026-03-12%20at%2003.11.30.png?updatedAt=1773265330453"
];

export default function EventsPage() {
  return (
    <main className="flex-1 bg-white font-sans">
      {/* ─── HERO HEADER SECTION (Matching All Pages Style) ─────── */}
      <section className="relative pt-20 pb-20 px-6 bg-[#fbb03b] border-b border-[#1a3646]/10">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Copy */}
          <div className="flex-1 text-left">
            <div className="border border-[#1a3646]/20 text-[#1a3646] px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest mb-6 inline-block">
              National Impact
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a3646] mb-5 tracking-tight leading-tight">
              Events, Summits & <br className="hidden sm:block" />
              Student Forge <span className="text-white">Work</span>.
            </h1>

            <p className="text-base lg:text-lg text-[#1a3646] opacity-80 max-w-md leading-relaxed mb-8 font-normal">
              From technical immersion bootcamps to national leadership summits, we bring the industry to your academic node.
            </p>

            <div className="flex flex-wrap items-center justify-start gap-4">
              <Link
                href="https://platform.studentforge.in"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a3646] text-[#fbb03b] rounded-full font-medium text-sm hover:bg-[#2d414e] transition-all shadow-md"
              >
                Join Next Event <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right: SVG Illustration */}
          <div className="flex-1 relative hidden lg:flex justify-end items-center">
            <div className="relative w-[450px] h-[290px] flex items-center justify-end">
              <img
                src="https://ik.imagekit.io/dypkhqxip/Events-cuate.svg"
                alt="Events & Summits Illustration"
                className="w-full h-full object-contain scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── AUTO-SCROLLING 4-BANNER CAROUSEL ───────────────────── */}
      <section className="pt-10 pb-4 px-6 bg-slate-50/50 flex justify-center">
        <EventBannerCarousel />
      </section>

      {/* ─── EVENT CATEGORIES ───────────────────────────────────── */}
      <section className="pt-8 pb-16 px-6 bg-white flex justify-center border-t border-slate-100">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-medium uppercase tracking-widest text-[#1a3646]/60 bg-slate-100 px-4 py-1.5 rounded-full mb-4">
              Program Tracks
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#1a3646] tracking-tight">
              Event Formats & Initiatives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Leadership Summits", desc: "Gatherings focused on bridging the gap between student aspirations and executive-level corporate mentorship." },
              { num: "02", title: "Technical Hackathons", desc: "Intensive 48-hour development sprints where students build, validate, and launch real-world engineering projects." },
              { num: "03", title: "Placement Bootcamps", desc: "Standardized technical readiness programs focused on skill evaluation and career interview excellence." }
            ].map((event, i) => (
              <div key={i} className="p-8 sm:p-10 bg-slate-50/50 hover:bg-white border border-slate-200/80 rounded-3xl transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md">
                <div>
                  <span className="text-3xl font-light text-[#fbb03b] block mb-6">
                    {event.num}
                  </span>
                  <h3 className="text-xl font-medium text-[#1a3646] mb-3 tracking-tight">{event.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PAST EVENTS GALLERY ─────────────────────────────────── */}
      <section className="py-20 px-6 bg-slate-50/50 flex justify-center border-t border-slate-100">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-medium uppercase tracking-widest text-[#1a3646]/60 bg-white px-4 py-1.5 rounded-full border border-slate-200/80 mb-4">
              National Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#1a3646] tracking-tight">
              Snapshots of Excellence
            </h2>
            <p className="text-sm text-slate-600 font-normal mt-3">
              A glimpse into our past summits, technical bootcamps, and high-impact innovation cycles across national Student Forge nodes.
            </p>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {pastEvents.map((url, i) => (
              <div key={i} className="relative break-inside-avoid rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <img 
                  src={url} 
                  alt={`Past event ${i + 1}`} 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOST AN EVENT CTA ───────────────────────────────────── */}
      <section className="py-16 px-6 pb-24 bg-white">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[#1a3646] p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="relative z-10 flex-1">
              <span className="text-xs font-medium uppercase tracking-widest text-[#fbb03b] mb-3 block">
                Bring Forge to your Campus
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-white mb-4 tracking-tight leading-tight">
                Ready to Host an Event?
              </h2>
              <p className="text-base text-white/70 font-normal mb-8 max-w-md leading-relaxed">
                Partner with Student Forge to bring high-impact technical bootcamps and summits to your institution.
              </p>
              <Link 
                href="https://platform.studentforge.in" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#fbb03b] text-[#1a3646] rounded-full font-medium text-sm hover:bg-[#e09e35] transition-all shadow-md"
              >
                Start Hosting <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
