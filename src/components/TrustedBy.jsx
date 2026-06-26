import React from 'react';
import { motion } from 'framer-motion';

export default function TrustedBy() {
  const stats = [
    {
      highlight: "TEDx",
      highlightColor: "text-accentGold", // Styled gold tone
      label: "SPEAKER"
    },
    {
      highlight: "Amazon",
      highlightColor: "text-textPrimary font-extrabold",
      label: "#1 BESTSELLING AUTHOR"
    },
    {
      highlight: "100+",
      highlightColor: "text-textPrimary font-black",
      label: "BRANDS TRANSFORMED"
    },
    {
      highlight: "8 Fig",
      highlightColor: "text-textPrimary font-black",
      label: "REVENUE GENERATED"
    },
    {
      highlight: "Systems",
      highlightColor: "text-textPrimary font-bold italic font-serif",
      label: "CONSULTING"
    }
  ];

  return (
    <section className="bg-[#F1EAD8] border-y border-black/[0.06] py-7 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        
        {/* Left Side Header */}
        <div className="flex items-center gap-4 w-full lg:w-auto shrink-0 justify-center lg:justify-start">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-textSecondary font-heading">
            Trusted Authority In
          </span>
          <div className="hidden lg:block w-px h-8 bg-black/10 mx-2" />
        </div>

        {/* Right Side Items Grid */}
        <div className="w-full flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-center justify-between gap-6 sm:gap-8 lg:gap-4 flex-1">
          {stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left font-heading">
                {/* Highlight Number/Brand */}
                <span className={`text-base sm:text-lg tracking-tight leading-none ${stat.highlightColor}`}>
                  {stat.highlight}
                </span>
                {/* Secondary Label */}
                <span className="text-[9px] font-bold text-textSecondary uppercase tracking-widest mt-1">
                  {stat.label}
                </span>
              </div>
              
              {/* Divider between items (hidden on last, hidden on mobile/responsive based on layout) */}
              {idx < stats.length - 1 && (
                <div className="hidden lg:block w-px h-8 bg-black/10 shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
