import React from 'react';
import { Mic, Newspaper, Calendar, Award, BookOpen, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const YoutubeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

export default function Authority() {
  const authorityCards = [
    {
      icon: <Award className="w-5 h-5" />,
      type: "TEDx Appearance",
      title: "[Replace with TEDx Talk Title]",
      desc: "[Replace with a brief summary of your TEDx presentation, key lessons shared, and link to the YouTube video resource.]",
      metric: "[Replace with Views Count]"
    },
    {
      icon: <Mic className="w-5 h-5" />,
      type: "Executive Podcast",
      title: "[Replace with Podcast Interview Name]",
      desc: "[Replace with podcast guest details, discussion topics like operational pipelines, and link to Spotify / Apple episodes.]",
      metric: "[Replace with Stream Link]"
    },
    {
      icon: <YoutubeIcon className="w-5 h-5" />,
      type: "YouTube Spotlight",
      title: "[Replace with Channel Interview Title]",
      desc: "[Replace with description of the roundtable video interview, systems whiteboard breakdown, or case reviews featured.]",
      metric: "[Replace with Video URL]"
    },
    {
      icon: <Newspaper className="w-5 h-5" />,
      type: "News & Media Column",
      title: "[Replace with Forbes/Inc. Column Topic]",
      desc: "[Replace with a synopsis of your editorial contribution, thoughts on business systems, or strategic advice featured in news.]",
      metric: "[Replace with Article link]"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      type: "Business Events",
      title: "[Replace with Keynote Speech Venue]",
      desc: "[Replace with summary of your presentation to company founders, M&A preparation guidelines, or scaling systems summits.]",
      metric: "[Replace with Attendance count]"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      type: "Industry Publications",
      title: "[Replace with Published Book / Whitepaper]",
      desc: "[Replace with title of your whitepaper, scaling operating playbook, or published guides on EBITDA expansion.]",
      metric: "[Replace with PDF Download]"
    }
  ];

  return (
    <section className="bg-bgCanvas py-24 px-6 md:px-12 relative overflow-hidden border-b border-black/[0.03]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header block */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-accentGold font-heading block">
            Media & Public Accreditation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-textPrimary tracking-tight leading-none">
            As Featured In
          </h2>
          <p className="text-sm md:text-base text-textSecondary font-light leading-relaxed max-w-2xl">
            A directory of keynotes, columns, guest features, and academic publications where our scaling frameworks have been shared with global business leaders.
          </p>
        </div>

        {/* Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {authorityCards.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ 
                y: -5,
                borderColor: 'rgba(201, 162, 39, 0.3)',
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.04)' 
              }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-premium border border-black/[0.03] shadow-premium flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-extrabold tracking-widest text-accentGold bg-accentGold/10 px-2.5 py-1 rounded-full uppercase">
                    {item.type}
                  </span>
                  <div className="text-textSecondary group-hover:text-accentGold transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-textPrimary group-hover:text-accentGold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-textSecondary leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="pt-4 border-t border-black/[0.03] mt-8 flex justify-between items-center">
                <span className="text-[9px] text-textSecondary font-semibold uppercase tracking-wider">
                  Asset Location
                </span>
                <span className="text-[10px] font-bold text-textPrimary flex items-center gap-1 group-hover:text-accentGold transition-colors">
                  {item.metric}
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
