import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GoldenCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FAD980] via-[#E6C15C] to-[#C49E2D] py-24 px-6 md:px-12 text-center border-t border-black/[0.05]">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        {/* Top Subtitle with lines */}
        <div className="flex items-center justify-center gap-4 text-bgDark/50">
          <span className="w-6 sm:w-10 h-[1px] bg-bgDark/20" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase font-heading">
            THE SYSTEM THAT AUTOMATES ACQUISITION
          </span>
          <span className="w-6 sm:w-10 h-[1px] bg-bgDark/20" />
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-bgDark tracking-tight leading-[1.08] font-heading">
          Your Business Deserves <br />
          <span className="font-serif italic font-normal text-[#5C4509] block mt-3">
            Clients Who Value Your Expertise.
          </span>
        </h2>

        {/* Subtext */}
        <div className="max-w-xl mx-auto space-y-2 text-bgDark/85 text-sm sm:text-base font-medium leading-relaxed font-body">
          <p>
            Stop relying on erratic referrals or constant manual outreach.
          </p>
          <p className="font-bold text-bgDark text-base sm:text-lg">
            The Sales Overflow Framework changes that.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4.5 bg-bgDark text-white hover:bg-bgDark/90 text-xs font-bold tracking-widest uppercase rounded-full shadow-xl transition-all duration-300 group cursor-pointer"
            >
              Apply For Strategy Session
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
