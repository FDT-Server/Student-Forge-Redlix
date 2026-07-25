'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname?.startsWith('/admin') || pathname?.includes('/apply')) {
    return null;
  }

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Startup', href: '/startup' },
    { name: 'Universities / Institutions', href: '/institutions' },
    { name: 'Corporate', href: '/business' },
    { name: 'Events', href: '/events' },
    { name: 'Careers', href: '/careers' },
    { name: 'Store', href: 'https://store.studentforge.in' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:px-12 group pointer-events-none">
      <nav 
        className={`
          flex items-center justify-between w-full transition-all duration-500 ease-in-out pointer-events-auto
          ${scrolled 
            ? 'bg-[#fbb03b]/95 backdrop-blur-md max-w-5xl rounded-full px-6 py-2 shadow-xl' 
            : 'bg-transparent max-w-full px-4 py-2'
          }
        `}
      >
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center pointer-events-auto transition-transform hover:scale-105">
            <img 
              src="https://ik.imagekit.io/dypkhqxip/sflogo?updatedAt=1774952380858" 
              alt="Student Forge Logo" 
              className={`transition-all duration-500 ${scrolled ? 'h-5 md:h-7' : 'h-7 md:h-9'}`}
              style={{ filter: scrolled ? 'none' : 'brightness(0) saturate(100%) invert(18%) sepia(31%) auto' }}
            />
          </Link>
        </div>

        <div className="flex items-center gap-4 lg:gap-8">
          <div className="hidden lg:flex items-center gap-5 text-[13px] font-medium text-[#1a3646]">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:opacity-60 transition-opacity whitespace-nowrap">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="https://platform.studentforge.in" 
              className={`
                rounded-full text-[10px] font-bold uppercase tracking-wider transition-all whitespace-nowrap
                ${scrolled 
                  ? 'bg-[#1a3646] text-white px-4 py-2 hover:opacity-90' 
                  : 'bg-[#1a3646] text-white px-5 py-2.5 hover:opacity-90'
                }
              `}
            >
              Get Started
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1a3646]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen 
                  ? <path d="M18 6L6 18M6 6l12 12" /> 
                  : <path d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 mx-4 bg-white/95 backdrop-blur-lg rounded-3xl p-8 flex flex-col gap-6 shadow-2xl lg:hidden pointer-events-auto border border-[#1a3646]/5">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-normal text-[#1a3646] hover:opacity-100 opacity-70 transition-all border-b border-[#1a3646]/5 pb-4"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
