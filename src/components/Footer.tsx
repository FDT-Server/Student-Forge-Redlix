import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-gray-50 text-[#1a3646] pt-20 pb-10 px-6 sm:px-12 lg:px-16 flex justify-center border-t border-slate-200 overflow-hidden">
      {/* Visual background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(251,176,59,0.06),transparent_55%)]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_left,rgba(142,207,203,0.05),transparent_55%)]" />
      </div>

      <div className="w-full max-w-[1600px] relative z-10">
        {/* Top Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16">
          
          {/* Brand Block */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-4">
              <Link href="/" className="transition-transform duration-300 hover:scale-105">
                <img
                  src="https://ik.imagekit.io/dypkhqxip/sflogo?updatedAt=1774952380858"
                  alt="Student Forge Logo"
                  className="h-8 lg:h-9 object-contain"
                />
              </Link>
              <div className="h-6 w-[1px] bg-slate-300" />
              <img
                src="https://ik.imagekit.io/dypkhqxip/platform"
                alt="Student platform Logo"
                className="h-6 lg:h-7 object-contain opacity-90"
              />
            </div>
            
            <p className="text-sm text-slate-600 leading-relaxed font-light">
              Empowering next-gen innovators and bridging the gap between academic foundation and industry excellence.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <Link 
                href="#" 
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-white hover:bg-[#1a3646] hover:border-[#1a3646] transition-all duration-300 hover:scale-110"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link 
                href="#" 
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-white hover:bg-[#1a3646] hover:border-[#1a3646] transition-all duration-300 hover:scale-110"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link 
                href="#" 
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-white hover:bg-[#1a3646] hover:border-[#1a3646] transition-all duration-300 hover:scale-110"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links Block */}
          <div className="flex flex-col items-start">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1a3646] opacity-80 mb-6">
              Explore
            </h4>
            <ul className="flex flex-col gap-3.5 w-full">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Startup Program', href: '/startup' },
                { name: 'Institutions', href: '/institutions' },
                { name: 'Corporate Partnerships', href: '/business' },
                { name: 'Events & Programs', href: '/events' },
                { name: 'Forge Store', href: 'https://store.studentforge.in' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-1 text-sm text-slate-600 hover:text-[#1a3646] transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-[#1a3646] transition-all duration-300 overflow-hidden mr-0 group-hover:mr-1.5" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Block */}
          <div className="flex flex-col items-start gap-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1a3646] opacity-80 mb-1">
              Locations
            </h4>
            
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-[#fbb03b] shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#1a3646]">Hyderabad Head Office</span>
                <span className="text-xs text-slate-600 leading-relaxed mt-1">
                  HF2R+CCV, Devender Colony,<br />
                  Kompally, Hyderabad, 500100
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-[#fbb03b] shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#1a3646]">Khammam Branch</span>
                <span className="text-xs text-slate-600 leading-relaxed mt-1">
                  H.no 10-11-860/5, Bypass Road,<br />
                  Raparthi Nagar, Khammam, 507003
                </span>
              </div>
            </div>
          </div>

          {/* Support & Affiliations Block */}
          <div className="flex flex-col items-start gap-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1a3646] opacity-80 mb-1">
              Connect & Support
            </h4>
            
            <div className="flex flex-col gap-4 w-full">
              <a 
                href="tel:+916304218064" 
                className="flex items-center gap-3 text-sm text-slate-600 hover:text-[#1a3646] transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:bg-[#1a3646] group-hover:border-[#1a3646] group-hover:text-white transition-all duration-300">
                  <Phone className="w-4 h-4 text-[#1a3646] group-hover:text-white transition-all duration-300" />
                </div>
                <span className="font-light">+91 6304218064</span>
              </a>
              
              <a 
                href="mailto:info@studentforge.in" 
                className="flex items-center gap-3 text-sm text-slate-600 hover:text-[#1a3646] transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:bg-[#1a3646] group-hover:border-[#1a3646] group-hover:text-white transition-all duration-300">
                  <Mail className="w-4 h-4 text-[#1a3646] group-hover:text-white transition-all duration-300" />
                </div>
                <span className="font-light break-all">info@studentforge.in</span>
              </a>
            </div>

            <div className="flex flex-col gap-2.5 w-full mt-2">
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                Official Affiliations
              </span>
              <div className="flex items-center justify-center gap-6 bg-white border border-slate-200/80 rounded-xl p-3.5 w-full max-w-[280px] shadow-sm">
                <img 
                  src="https://aartisto.com/wp-content/uploads/2020/11/msme1.png" 
                  alt="MSME Logo" 
                  className="h-11 object-contain" 
                />
                <div className="h-8 w-[1px] bg-slate-200" />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Ministry_of_Corporate_Affairs_India.svg/1280px-Ministry_of_Corporate_Affairs_India.svg.png" 
                  alt="MCA Logo" 
                  className="h-11 object-contain" 
                />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Student Forge. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-800 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-800 transition-colors">Refund Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
