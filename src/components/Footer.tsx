'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#f4f6f8] text-[#1a3646] pt-20 pb-12 px-6 sm:px-12 flex flex-col items-center border-t border-slate-200 overflow-hidden">
      <div className="w-full max-w-[1400px] flex flex-col gap-12 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand & Logos */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-4">
              <Link href="/" className="transition-transform hover:scale-105">
                <img
                  src="https://ik.imagekit.io/dypkhqxip/sflogo?updatedAt=1774952380858"
                  alt="Student Forge Logo"
                  className="h-10 sm:h-12 object-contain"
                />
              </Link>
              <div className="h-7 w-[1px] bg-slate-300" />
              <img
                src="https://ik.imagekit.io/dypkhqxip/platform"
                alt="Student Platform Logo"
                className="h-8 sm:h-9 object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#1a3646]/70 leading-relaxed font-normal max-w-xs">
              Empowering students with industry-grade mentorship, career acceleration, and practical learning programs.
            </p>

            {/* Official Affiliations */}
            <div className="flex flex-col gap-3 pt-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#1a3646]/60 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#6fb9a5]" />
                Official Affiliations
              </span>
              <div className="flex items-center gap-5">
                <img
                  src="https://aartisto.com/wp-content/uploads/2020/11/msme1.png"
                  alt="MSME"
                  className="h-12 sm:h-14 object-contain"
                />
                <div className="h-10 w-[1px] bg-slate-300" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Ministry_of_Corporate_Affairs_India.svg/1280px-Ministry_of_Corporate_Affairs_India.svg.png"
                  alt="MCA"
                  className="h-12 sm:h-14 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Column 2: Hyderabad Office */}
          <div className="flex flex-col gap-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a3646] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#fbb03b]" />
              Hyderabad Office
            </h4>
            <a
              href="https://maps.google.com/?q=HF2R%2BCCV,+Devender+Colony,+Kompally,+Hyderabad,+Telangana+500100"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1.5"
            >
              <div className="flex items-center gap-1 text-xs font-semibold text-[#1a3646] group-hover:text-[#fbb03b] transition-colors">
                <span>HQ Address</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <p className="text-xs sm:text-sm text-[#1a3646]/70 leading-relaxed font-normal group-hover:text-[#1a3646] transition-colors">
                HF2R+CCV, Devender Colony,<br />
                Kompally, Hyderabad, 500100
              </p>
            </a>
          </div>

          {/* Column 3: Khammam Office */}
          <div className="flex flex-col gap-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a3646] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#6fb9a5]" />
              Khammam Office
            </h4>
            <a
              href="https://maps.google.com/?q=H.no+10-11-860/5,+Bypass+Road,+Raparthi+Nagar,+Khammam,+507003"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1.5"
            >
              <div className="flex items-center gap-1 text-xs font-semibold text-[#1a3646] group-hover:text-[#6fb9a5] transition-colors">
                <span>Regional Office</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <p className="text-xs sm:text-sm text-[#1a3646]/70 leading-relaxed font-normal group-hover:text-[#1a3646] transition-colors">
                H.no 10-11-860/5, Bypass Road,<br />
                Raparthi Nagar, Khammam, 507003
              </p>
            </a>
          </div>

          {/* Column 4: Direct Support & Social */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a3646] flex items-center gap-2">
              Direct Support
            </h4>

            <div className="flex flex-col gap-2.5">
              <a
                href="tel:+916304218064"
                className="group flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#1a3646] hover:text-[#fbb03b] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#fbb03b] group-hover:scale-110 transition-transform" />
                <span className="font-semibold">+91 6304218064</span>
              </a>

              <a
                href="mailto:info@studentforge.in"
                className="group flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#1a3646] hover:text-[#6fb9a5] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#6fb9a5] group-hover:scale-110 transition-transform" />
                <span className="font-semibold">info@studentforge.in</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2 text-[#1a3646]/70">
              <a
                href="https://wa.me/916304218064"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#6fb9a5] transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.986-1.396C8.441 21.493 10.17 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.61 0-3.116-.442-4.41-1.21l-.316-.188-2.923.82.834-2.852-.207-.33A7.954 7.954 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/studentforge/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#fbb03b] transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/student-forge/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#fbb03b] transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@StudentForge"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff0000] transition-colors"
                aria-label="YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Reduced Width Modern Watermark Text */}
        <div className="w-full overflow-hidden select-none pointer-events-none pt-2 flex justify-center">
          <span className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#1a3646]/[0.08] leading-none whitespace-nowrap block text-center">
            STUDENT FORGE
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-300/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#1a3646]/60 font-medium">
          <p>© 2026 Student Forge. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#1a3646] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#1a3646] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
