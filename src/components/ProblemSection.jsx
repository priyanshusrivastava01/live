import React from 'react';
import { motion } from 'framer-motion';

export default function ProblemSection() {
  const problems = [
    {
      num: "01",
      title: "Commodity Positioning",
      desc: "Struggling to command premium pricing. Your offering is perceived as a commodity because your messaging fails to reflect the high-tier value you deliver."
    },
    {
      num: "02",
      title: "The Founder Dependency Trap",
      desc: "The entire business revolves around your daily intervention. You are trapped in micro-management, making the enterprise exhausting to run and impossible to scale."
    },
    {
      num: "03",
      title: "Fragmented Client Acquisition",
      desc: "High-quality leads are dropping off due to unconfigured CRM pipelines. There is no automated system to systematically nurture and qualify prospects."
    },
    {
      num: "04",
      title: "Repetitive Administrative Overhead",
      desc: "Valuable resource hours are lost to manual tasks and redundant processes. A lack of modern software integration reduces margins and slows down delivery."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 15 }
    }
  };

  return (
    <section id="problems" className="bg-bgCanvas py-24 md:py-36 px-6 md:px-12 relative overflow-hidden border-t border-black/[0.03]">
      {/* Background blurs */}
      <div className="absolute top-1/2 left-10 w-[30%] h-[30%] bg-accentGold/[0.015] rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto mb-20 space-y-6">
          <span className="text-[10px] uppercase font-bold tracking-widest text-accentGold font-heading block">
            Systemic Bottlenecks
          </span>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold text-black tracking-tight leading-[1.02] font-heading">
            You Don't Have a Scaling <br />
            Problem. <br />
            <span className="font-serif font-normal text-[#686D73] italic block mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] tracking-tight leading-[1.05]">
              You Have a <span className="bg-gradient-to-br from-[#E6C15C] via-[#C9A227] to-[#9C7A1D] bg-clip-text text-transparent font-bold font-serif italic pb-1">Systems</span> <br />
              Problem.
            </span>
          </h2>

          <p className="text-sm md:text-base text-textSecondary font-light leading-relaxed max-w-xl mx-auto font-body">
            When your operations are structured, documented, and automated — <span className="font-bold text-textPrimary">growth is predictable</span>. But when systems are broken, every new client creates organizational chaos. The fix isn't more headcount. <span className="font-bold text-accentGold">It's the right operating platform.</span>
          </p>
        </div>

        {/* 2x2 Grid Container with Shared Border lines */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 border border-black/[0.06] rounded-[2rem] overflow-hidden bg-white shadow-premium max-w-5xl mx-auto text-left"
        >
          {problems.map((prob, idx) => {
            // Calculate borders for a clean 2x2 quadrant layout
            const borderClasses = `
              p-8 md:p-12 flex flex-col justify-between hover:bg-black/[0.005] transition-colors duration-300 group
              ${idx === 0 ? 'border-b md:border-r border-black/[0.06]' : ''}
              ${idx === 1 ? 'border-b border-black/[0.06]' : ''}
              ${idx === 2 ? 'border-b md:border-b-0 md:border-r border-black/[0.06]' : ''}
              ${idx === 3 ? '' : ''}
            `;

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={borderClasses}
              >
                <div className="space-y-4">
                  {/* Huge Monospace Number */}
                  <span className="font-heading text-5xl md:text-6xl font-black tracking-tighter text-accentGold/20 block group-hover:text-accentGold/45 transition-colors duration-500">
                    {prob.num}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-textPrimary group-hover:text-accentGold transition-colors duration-300 tracking-tight font-heading">
                    {prob.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[13px] sm:text-sm text-textSecondary leading-relaxed font-body font-light">
                    {prob.desc}
                  </p>
                </div>
                
                {/* Visual accent bar */}
                <div className="w-8 h-[1px] bg-black/10 mt-8 group-hover:w-full group-hover:bg-accentGold transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
