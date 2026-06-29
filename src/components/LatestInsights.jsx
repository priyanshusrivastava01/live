import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

import insight1 from '../assets/insight_1.png';
import insight2 from '../assets/insight_2.png';
import insight3 from '../assets/insight_3.png';

export default function LatestInsights() {
  const articles = [
    {
      category: "OPERATIONS",
      readTime: "6 Min Read",
      title: "The Standard Operating Procedure Matrix: How to Write Workflows That Execs Actually Run",
      desc: "An actionable breakdown of systemizing business communications and training parameters to make operations founder-independent.",
      image: insight1,
      date: "June 14, 2026"
    },
    {
      category: "CORPORATE FINANCE",
      readTime: "8 Min Read",
      title: "Valuation Ceilings: Isolating the Operational Bottlenecks That Drop Exit Multiples",
      desc: "How corporate buyers assess dependency liabilities, manual data pipelines, and sales team vulnerabilities during due diligence.",
      image: insight2,
      date: "May 28, 2026"
    },
    {
      category: "ACQUISITION & SALES",
      readTime: "5 Min Read",
      title: "Outcome-Based Pricing Models: Decoupling Your Agency or Consulting Revenue From Time",
      desc: "Stop billing by the hour. Discover how to construct high-ticket pricing frameworks pegged strictly to financial results and deliverables.",
      image: insight3,
      date: "May 09, 2026"
    }
  ];

  return (
    <section id="insights" className="bg-[#FAFAF8] py-24 px-6 md:px-12 relative overflow-hidden border-b border-black/[0.03]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-accentGold font-heading block">
              Intellectual Capital
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-textPrimary tracking-tight leading-none">
              Strategic Insights & Executive Briefs
            </h2>
            <p className="text-sm text-textSecondary font-light max-w-xl">
              Equip your board with practical methodologies on operational structure, automation scripts, value packaging, and equity scaling.
            </p>
          </div>
          <a
            href="#insights"
            className="px-6 py-3 rounded-full border border-black/15 text-xs font-semibold uppercase tracking-wider text-textPrimary hover:bg-bgDark hover:text-white transition-colors duration-300 shadow-premium"
          >
            Access Full Library
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((art, idx) => (
            <motion.article
              key={idx}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-premium border border-black/[0.03] shadow-premium overflow-hidden flex flex-col justify-between group hover:border-accentGold/20 transition-all duration-300"
            >
              <div>
                {/* Featured Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-extrabold tracking-widest text-accentGold bg-accentGold/10 px-2.5 py-1 rounded-full uppercase">
                      {art.category}
                    </span>
                    <span className="text-[10px] font-medium text-textSecondary">
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-textPrimary leading-snug group-hover:text-accentGold transition-colors duration-300">
                    {art.title}
                  </h3>

                  <p className="text-[12px] text-textSecondary leading-relaxed font-light">
                    {art.desc}
                  </p>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="px-8 pb-8 pt-4 border-t border-black/[0.03] flex items-center justify-between mt-auto">
                <span className="text-[10px] text-textSecondary font-semibold">
                  {art.date}
                </span>
                <span className="text-[10px] font-bold text-textPrimary uppercase tracking-wider flex items-center gap-1 group-hover:text-accentGold transition-colors">
                  Read Article
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
