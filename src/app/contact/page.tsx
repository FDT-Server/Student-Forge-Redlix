import { Metadata } from 'next';
import Footer from "@/components/Footer";
import ContactFormClient from "./ContactFormClient";

export const metadata: Metadata = {
  title: 'Contact Us | Student Forge HQ',
  description: 'Get in touch with the Student Forge national portal team. Reach out for collaborations, institutional nodes, or technical support.',
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-white">
      {/* ─── HERO HEADER SECTION ─────────────────────────────────── */}
      <section className="relative pt-24 pb-16 px-6 bg-[#fbb03b] border-b border-[#1a3646]/10">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          <h1 className="text-4xl lg:text-5xl font-normal text-[#1a3646] mb-4 tracking-tight leading-tight">
            Connect with <span className="text-white">Student Forge</span>.
          </h1>
          <p className="text-base lg:text-lg text-[#1a3646] opacity-80 max-w-2xl leading-relaxed">
            Reach out to our national portal team for collaborations, institutional nodes, or support.
          </p>
        </div>
      </section>

      {/* ─── CONTENT & FORM SECTION ─────────────────────────────── */}
      <section className="py-16 px-6 flex justify-center bg-slate-50/50">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-[#1a3646]">Get in Touch</h2>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                Whether you are a student builder, startup founder, or university leader, we are here to support your mission.
              </p>

              <div className="space-y-6 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#fbb03b]/20 text-[#1a3646] flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#1a3646]/60">Email Us</h3>
                    <a href="mailto:info@studentforge.in" className="text-base font-semibold text-[#1a3646] hover:text-[#fbb03b] transition-colors">
                      info@studentforge.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#fbb03b]/20 text-[#1a3646] flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#1a3646]/60">Phone Call</h3>
                    <a href="tel:+916304218064" className="text-base font-semibold text-[#1a3646] hover:text-[#fbb03b] transition-colors">
                      +91 6304218064
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#fbb03b]/20 text-[#1a3646] flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#1a3646]/60">HQ Location</h3>
                    <p className="text-sm font-medium text-[#1a3646] leading-relaxed">
                      HF2R+CCV, Devender Colony, Kompally,<br />
                      Hyderabad, Telangana 500100
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Custom Contact Form */}
          <div className="lg:col-span-7" id="form">
            <ContactFormClient />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
