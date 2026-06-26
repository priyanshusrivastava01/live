import React from 'react';
import { motion } from 'framer-motion';

export default function SignatureFramework() {
  const phases = [
    {
      number: "01",
      phaseName: "PHASE ONE · FOUNDATION",
      title: "The Preparation Engine",
      description: "Build your corporate foundation before you scale. ",
      highlightedDesc: "Diagnostic forensic audits and premium authority positioning",
      suffixDesc: " so your firm stands out as an enterprise leader rather than a commoditized service provider."
    },
    {
      number: "02",
      phaseName: "PHASE TWO · INTEGRATION",
      title: "The Operational System",
      description: "Integrate workflow efficiency into your business. ",
      highlightedDesc: "Standard Operating Procedures (SOPs), custom CRM pipelines, and team automations",
      suffixDesc: " that make the firm run smoothly without depending on the founder."
    },
    {
      number: "03",
      phaseName: "PHASE THREE · ACCELERATION",
      title: "The Valuation Engine",
      description: "Turn stability into growth. Activate ",
      highlightedDesc: "organic acquisition flywheels, outbound frameworks, and EBITDA margin refinements",
      suffixDesc: " that prepare the enterprise for a lucrative exit or scalable hands-off management."
    }
  ];

  return (
    <section 
      id="framework" 
      className="bg-bgCanvas py-24 px-6 md:px-12 relative overflow-hidden border-t border-black/[0.03]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16 md:mb-20 items-start">
          
          {/* Left Column: Heading */}
          <div className="md:col-span-7">
            <span className="inline-block text-[11px] tracking-[0.25em] font-bold text-accentGold mb-6 uppercase font-heading">
              — THE VELOCITY FRAMEWORK™
            </span>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold text-black tracking-tight leading-[1.02] font-heading">
              Strategy Is the Tap.
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] font-serif italic text-[#686D73] mt-4 font-normal">
                <span className="text-accentGold font-bold font-serif">Growth</span> Is the Water.
              </span>
            </h2>
          </div>

          {/* Right Column: Paragraph Description */}
          <div className="md:col-span-5 md:pt-14">
            <p className="text-textSecondary font-serif italic text-base md:text-lg leading-relaxed font-serif">
              Most businesses pour energy into closing deals while ignoring the source. Fix the operating system—and growth starts flowing on its own. Three phases. Elite system. 8-figure results.
            </p>
          </div>

        </div>

        {/* Cards Row Container */}
        <div className="border border-black/[0.07] rounded-[2rem] bg-white overflow-hidden shadow-premium mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/[0.07]">
            {phases.map((phase, idx) => (
              <motion.div
                key={idx}
                className="p-8 md:p-10 flex flex-col justify-start min-h-[380px] relative hover:bg-[#FAFAF8]/50 transition-colors duration-500 group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Large Background Accent Number */}
                <div className="text-7xl lg:text-8xl font-black font-serif italic text-accentGold/10 leading-none mb-2 select-none group-hover:text-accentGold/15 transition-colors duration-500">
                  {phase.number}
                </div>

                {/* Phase Sub-label */}
                <span className="text-[10px] tracking-[0.2em] font-bold text-accentGold mb-5 block uppercase font-heading">
                  {phase.phaseName}
                </span>

                {/* Phase Title */}
                <h3 className="text-xl md:text-2xl font-bold font-heading text-textPrimary mb-4 tracking-tight">
                  {phase.title}
                </h3>

                {/* Phase Description */}
                <p className="text-textSecondary font-body text-[13.5px] leading-relaxed">
                  {phase.description}
                  <span className="font-semibold text-textPrimary">
                    {phase.highlightedDesc}
                  </span>
                  {phase.suffixDesc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Centered Quote */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-textPrimary leading-relaxed">
            &ldquo;When the system is right, growth doesn't trickle.
            <span className="block mt-2">
              It <span className="text-accentGold font-serif italic font-semibold">overflows.</span>&rdquo;
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
