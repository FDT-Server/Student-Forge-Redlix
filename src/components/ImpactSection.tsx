'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

function Counter({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function ImpactSection() {
  return (
    <section className="w-full bg-white py-16 px-8 flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12 max-w-4xl">
        <div className="bg-[#8ecfcb] text-[#1a3646] px-6 py-1 rounded-md text-[10px] font-normal mb-6 uppercase tracking-wider">
          Student Forge Impact
        </div>
        <h2 className="text-5xl font-normal text-[#1a3646] mb-6 tracking-tight">
          Making a Difference in the Student Community
        </h2>
        <p className="text-lg font-normal text-[#1a3646] opacity-70 leading-relaxed">
          At Student Forge, we are dedicated to making a positive impact in the community through various programs and initiatives.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Row 1, Box 1 - Orange Metric */}
        <div className="lg:col-span-1 bg-[#fbb03b] rounded-[32px] p-10 flex flex-col items-start justify-start text-[#1a3646]">
          <span className="text-7xl font-normal mb-8">
            <Counter end={1500} suffix="+" />
          </span>
          <h3 className="text-xl font-normal mb-4">Students Reached Online</h3>
          <p className="text-sm font-normal opacity-80 leading-relaxed">
            In 2025, our online initiatives reached over 1500 individuals with precise, accessible, and compelling information.
          </p>
        </div>

        {/* Row 1, Box 2 - Large Image */}
        <div className="lg:col-span-2 relative aspect-[21/9] lg:aspect-auto rounded-[32px] overflow-hidden shadow-sm">
          <Image
            src="/impact-card.png"
            alt="Student Forge Graduation"
            fill
            className="object-cover"
          />
        </div>

        {/* Row 2, Box 3 - Teal Metric */}
        <div className="bg-[#6fb9a5] rounded-[32px] p-10 flex flex-col items-start justify-start text-white">
          <span className="text-7xl font-normal mb-8">
            <Counter end={30} suffix="+" />
          </span>
          <h3 className="text-xl font-normal mb-4">Mentorship Sessions</h3>
          <p className="text-sm font-normal opacity-80 leading-relaxed">
            In 2025, Student Forge led over 30 in-person and virtual mentorship programs covering key topics.
          </p>
        </div>

        {/* Row 2, Box 4 - Aqua Metric */}
        <div className="bg-[#8ecfcb] rounded-[32px] p-10 flex flex-col items-start justify-start text-[#1a3646]">
          <span className="text-7xl font-normal mb-8">
            <Counter end={100} suffix="+" />
          </span>
          <h3 className="text-xl font-normal mb-4">Projects Completed</h3>
          <p className="text-sm font-normal opacity-80 leading-relaxed">
            Over 100 industry-level projects successfully conceptualized and delivered by our interns across various technical and business domains.
          </p>
        </div>

        {/* Row 2, Box 5 - Dark Slate Metric */}
        <div className="bg-[#2d414e] rounded-[32px] p-10 flex flex-col items-start justify-start text-white">
          <span className="text-7xl font-normal mb-8">
            <Counter end={100} suffix="+" />
          </span>
          <h3 className="text-xl font-normal mb-4">Internships</h3>
          <p className="text-sm font-normal opacity-80 leading-relaxed">
            In 2025, Student Forge provided 100+ internship opportunities to students across various technical and business domains.
          </p>
        </div>
      </div>
    </section>
  );
}
