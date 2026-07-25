'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ─── ADD YOUR BANNER IMAGES DIRECTLY HERE ────────────────────────
const bannerImages = [
  {
    url: 'https://ik.imagekit.io/dypkhqxip/r%20(3).png',
    title: 'Student Forge Event Banner 1',
  },
  {
    url: 'https://ik.imagekit.io/dypkhqxip/r%20(2).png',
    title: 'Student Forge Event Banner 2',
  },
  {
    url: 'https://ik.imagekit.io/dypkhqxip/r%20(1).png',
    title: 'Student Forge Event Banner 3',
  },
  {
    url: 'https://ik.imagekit.io/dypkhqxip/r.png',
    title: 'Student Forge Event Banner 4',
  },
];

export default function EventBannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const total = bannerImages.length;

  return (
    <div className="relative w-full max-w-[1400px] mx-auto py-4 px-2 overflow-hidden select-none">
      
      {/* 3D Cover Flow Stage - Reduced Height & Increased Width */}
      <div className="relative h-[200px] sm:h-[280px] md:h-[320px] flex items-center justify-center">
        {bannerImages.map((banner, index) => {
          let offset = index - currentIndex;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isCenter = offset === 0;
          const isImmediateLeft = offset === -1;
          const isImmediateRight = offset === 1;

          let translateX = '0%';
          let scale = 1;
          let zIndex = 10;
          let opacity = 0;

          if (isCenter) {
            translateX = '0%';
            scale = 1;
            zIndex = 30;
            opacity = 1;
          } else if (isImmediateLeft) {
            translateX = '-52%';
            scale = 0.85;
            zIndex = 20;
            opacity = 0.6;
          } else if (isImmediateRight) {
            translateX = '52%';
            scale = 0.85;
            zIndex = 20;
            opacity = 0.6;
          } else if (offset < 0) {
            translateX = '-88%';
            scale = 0.72;
            zIndex = 10;
            opacity = 0.2;
          } else {
            translateX = '88%';
            scale = 0.72;
            zIndex = 10;
            opacity = 0.2;
          }

          return (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                transform: `translateX(${translateX}) scale(${scale})`,
                zIndex,
                opacity,
              }}
              className="absolute w-[88%] max-w-[960px] h-full rounded-2xl overflow-hidden shadow-xl transition-all duration-700 ease-out cursor-pointer border border-slate-200/80 bg-white"
            >
              {/* Clean Banner Image (No Dark Shades or Overlays) */}
              <div className="relative w-full h-full">
                <Image
                  src={banner.url}
                  alt={banner.title}
                  fill
                  className="object-cover object-center"
                  unoptimized
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-[#1a3646] text-white flex items-center justify-center hover:bg-[#fbb03b] hover:text-[#1a3646] transition-all shadow-lg"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-[#1a3646] text-white flex items-center justify-center hover:bg-[#fbb03b] hover:text-[#1a3646] transition-all shadow-lg"
        aria-label="Next Slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {bannerImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-8 bg-[#fbb03b]' : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
