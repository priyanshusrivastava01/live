import React from 'react';
import { Target, Users2, ShieldAlert, BadgeCheck, Compass, Heart, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/consultant_boardroom.png';

export default function About() {
  const consultingPrinciples = [
    {
      icon: <BadgeCheck className="w-5 h-5" />,
      label: "[Replace Principle 1 - e.g. Absolute Integrity]",
      desc: "[Replace with details on how you protect company cashflow margins, balance sheets, and shareholder value.]"
    },
    {
      icon: <Users2 className="w-5 h-5" />,
      label: "[Replace Principle 2 - e.g. High-Access Partnership]",
      desc: "[Replace with details about direct strategic alignment, zero intermediary junior consultants, and direct board communication.]"
    },
    {
      icon: <Compass className="w-5 h-5" />,
      label: "[Replace Principle 3 - e.g. Speed to Action]",
      desc: "[Replace with description of your execution speed, rolling out SOPs, CRM funnels, or automations in 90-day sprints.]"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      label: "[Replace Principle 4 - e.g. Business Philosophy]",
      desc: "[Replace with description of your core philosophy: systems create sanity, and the ultimate measure is transferability.]"
    }
  ];

  const milestones = [
    {
      year: "[REPLACE YEARS]",
      title: "[Replace Milestone Title - e.g. Founder Scale Advisory]",
      desc: "[Replace with description of major projects during this timeframe, industries served, and collective value generated.]"
    },
    {
      year: "[REPLACE YEARS]",
      title: "[Replace Milestone Title - e.g. Strategic Corporate Restructure]",
      desc: "[Replace with description of operational leadership, executive roles, CRM scale, or mergers guided.]"
    },
    {
      year: "[REPLACE YEARS]",
      title: "[Replace Milestone Title - e.g. Early Career Strategy Lead]",
      desc: "[Replace with description of your educational foundations, early management consultancies, or academic certifications.]"
    }
  ];

  return (
    <section id="about" className="bg-[#FAFAF8] py-24 px-6 md:px-12 relative overflow-hidden border-b border-black/[0.03]">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* PART 1: THE FOUNDER STORY (Emotional connection) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* story content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-[10px] uppercase font-bold tracking-widest text-accentGold font-heading block">
              The Journey & Story
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-textPrimary tracking-tight leading-none">
              [Replace with: Why I Started Consulting]
            </h2>
            
            <p className="text-sm md:text-base text-textSecondary font-light leading-relaxed">
              [Replace with your personal story. Explain your background, the turning points in your corporate career, and the specific moment you realized businesses were struggling due to manual chaos and operational leaks.]
            </p>

            <p className="text-xs sm:text-sm text-textSecondary font-light leading-relaxed">
              [Explain your core philosophy here. For example: \"Systems should serve the business, not exhaust the founder. Legacy is built on systems that operate independently of any single individual's day-to-day work.\"]
            </p>

            <div className="p-5 border-l-2 border-accentGold bg-black/[0.01] rounded-r-xl">
              <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-accentGold block mb-1">
                Consulting Mission Statement
              </span>
              <p className="text-xs italic text-textSecondary leading-relaxed">
                "[Replace with your core consulting mission statement: e.g. Empowering mid-market CEOs with the frameworks and databases required to scale company valuations and claim absolute personal freedom.]"
              </p>
            </div>
          </div>

          {/* portrait card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-premium overflow-hidden aspect-[16/11] shadow-xl border border-black/[0.04]">
              <img
                src={aboutImage}
                alt="Founder Strategic Working Session"
                className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bgDark/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* PART 2: MISSION, VISION, & PRINCIPLES */}
        <div className="pt-16 border-t border-black/[0.04] space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="space-y-4 text-left">
              <span className="inline-flex items-center gap-1.5 text-accentGold">
                <Target className="w-5 h-5" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-textPrimary">
                  Consultant Mission
                </h3>
              </span>
              <p className="text-sm text-textSecondary font-light leading-relaxed">
                [Replace with your verified operational mission statement. Describe your focus on systemizing client workflows, securing asset valuations, and eliminating dependency friction.]
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-4 text-left">
              <span className="inline-flex items-center gap-1.5 text-accentGold">
                <Eye className="w-5 h-5" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-textPrimary">
                  Consultant Vision
                </h3>
              </span>
              <p className="text-sm text-textSecondary font-light leading-relaxed">
                [Replace with your visionary milestones. Describe how you see the future of organizational automation, fractional COO strategies, and outcome-based pricing frameworks.]
              </p>
            </div>
          </div>

          {/* Value Principles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {consultingPrinciples.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-premium border border-black/[0.03] shadow-premium space-y-4">
                <div className="p-2.5 bg-accentGold/[0.07] text-accentGold rounded-xl w-fit">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-textPrimary uppercase tracking-wider">
                    {item.label}
                  </h4>
                  <p className="text-[11px] text-textSecondary font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 3: TIMELINE & ACHIEVEMENTS */}
        <div className="pt-16 border-t border-black/[0.04] space-y-10 text-left">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-accentGold font-heading block">
              Accreditation Timeline
            </span>
            <h3 className="text-xl font-bold text-textPrimary">
              Professional Milestones & Achievements
            </h3>
          </div>

          <div className="relative">
            {/* Timeline bar */}
            <div className="absolute left-[34px] top-4 bottom-4 w-[1px] bg-black/[0.05]" />

            <div className="space-y-8">
              {milestones.map((ms, idx) => (
                <div key={idx} className="flex items-start space-x-6 relative z-10">
                  <span className="text-[9px] font-heading font-extrabold text-accentGold bg-accentGold/10 border border-accentGold/20 px-3 py-1.5 rounded-full whitespace-nowrap mt-0.5">
                    {ms.year}
                  </span>
                  <div className="space-y-1 bg-white p-6 rounded-xl border border-black/[0.02] shadow-sm flex-grow">
                    <h4 className="text-xs font-bold text-textPrimary uppercase tracking-wider">
                      {ms.title}
                    </h4>
                    <p className="text-[11px] text-textSecondary font-light leading-relaxed">
                      {ms.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
