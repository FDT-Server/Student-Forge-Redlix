'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function QuoteSection() {
  return (
    <section className="w-full bg-white py-12 px-6 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-4xl flex flex-col items-center"
      >
        {/* Awesome Quote Symbol directly on page */}
        <div className="relative mb-6 group">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1a3646] to-[#2d414e] flex items-center justify-center text-[#fbb03b] shadow-md group-hover:scale-105 transition-transform duration-300">
            <Quote className="w-7 h-7 rotate-180" />
          </div>
        </div>

        {/* Quote Content */}
        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-normal leading-relaxed text-[#1a3646] mb-6 tracking-tight italic">
          &ldquo;Redefining the journey from{' '}
          <span className="text-[#fbb03b] font-medium not-italic">
            student to innovator
          </span>{' '}
          through global mentorship and practical excellence.&rdquo;
        </blockquote>

        {/* Author Signature */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-0.5 bg-[#fbb03b] mb-3"></div>
          <cite className="text-base font-semibold not-italic text-[#1a3646]">
            The Student Forge Team
          </cite>
          <span className="text-[10px] font-medium text-[#1a3646]/50 uppercase tracking-[0.25em] mt-1">
            Core Philosophy
          </span>
        </div>
      </motion.div>
    </section>
  );
}
