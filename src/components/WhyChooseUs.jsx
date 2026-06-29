import React from 'react';
import { BarChart, Percent, FileCode, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <BarChart className="w-5 h-5" />,
      title: "Data-Driven Diagnostics",
      desc: "We base our strategies on forensic financial audit insights, resource margins, and operational metrics—not generic assumptions or subjective advice."
    },
    {
      icon: <Percent className="w-5 h-5" />,
      title: "Performance & ROI Alignment",
      desc: "Our consulting engagement models are structured around milestones and clear growth percentages, ensuring we have direct skin in the game."
    },
    {
      icon: <FileCode className="w-5 h-5" />,
      title: "Proprietary Infrastructure & SOPs",
      desc: "We don't just deliver advice. We hand over pre-built tech stacks, automated pipelines, and standard operating procedures to become permanent corporate assets."
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Speed to Execution",
      desc: "Operating in fast 90-day sprints, we integrate directly with your department heads to deploy systems, train staff, and measure cashflow outcomes."
    }
  ];

  return (
    <section className="bg-bgCanvas py-24 px-6 md:px-12 relative overflow-hidden border-b border-black/[0.03]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Sticky Left Column */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
          <span className="text-[10px] uppercase font-bold tracking-widest text-accentGold font-heading block">
            Competitive Distinction
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-textPrimary tracking-tight leading-none">
            Why Enterprise Directors Align With Us
          </h2>
          <p className="text-sm text-textSecondary font-light leading-relaxed">
            Standard business consulting model is broken: long-winded slide presentations that gather dust. We write code, build databases, build marketing funnels, and restructure operations for you.
          </p>
          <div className="p-5 border-l-2 border-accentGold bg-black/[0.015] rounded-r-xl">
            <p className="text-xs italic text-textSecondary leading-relaxed">
              "Arunn Guptaa's framework didn't just give us a strategy—it gave us an operating platform that allowed us to step back and double EBIT in 14 months."
            </p>
            <span className="text-[10px] font-bold text-textPrimary tracking-wider uppercase block mt-2">
              — Chief Operating Officer, Nexus Group
            </span>
          </div>
        </div>

        {/* Right Column: Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              whileHover={{ 
                y: -5,
                borderColor: 'rgba(201, 162, 39, 0.3)',
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.04)' 
              }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-premium border border-black/[0.03] shadow-premium transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="p-3 bg-accentGold/[0.06] text-accentGold rounded-xl w-fit">
                  {pillar.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-textPrimary">
                    {pillar.title}
                  </h3>
                  <p className="text-[12px] text-textSecondary leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
