import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Eye, Target, Cpu, TrendingUp, Sliders } from 'lucide-react';

export default function SignatureFramework() {
  const containerRef = useRef(null);
  
  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Scale the height of the gold timeline line based on scroll
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const steps = [
    {
      icon: <Eye className="w-5 h-5" />,
      number: "01",
      title: "Discover (Diagnostic Audit)",
      subtitle: "360-Degree Operational & Financial Analysis",
      desc: "We begin with a deep-dive forensic audit of your historical finances, resource allocation, and workflow friction. The result is a roadmap detailing your exact operational leaks."
    },
    {
      icon: <Target className="w-5 h-5" />,
      number: "02",
      title: "Position (Value Refinement)",
      subtitle: "Enterprise Authority & Premium Packaging",
      desc: "We reconstruct your positioning. By decoupling billing from time and focusing on outcome-based structures, we reposition your brand to attract enterprise contracts."
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      number: "03",
      title: "Build (SOPs & Infrastructure)",
      subtitle: "System Integration & Workflows",
      desc: "We deploy custom CRM, client-onboarding, and administration automations. We document critical standard operating procedures so your company functions without you."
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      number: "04",
      title: "Scale (Growth Engines)",
      subtitle: "Strategic Acquisition & Partner Networks",
      desc: "With operational foundations secured, we activate scaling flywheels: organic high-value content loops, direct outreach campaigns, and strategic referral frameworks."
    },
    {
      icon: <Sliders className="w-5 h-5" />,
      number: "05",
      title: "Optimize (Exit Readiness)",
      subtitle: "EBITDA Expansion & Asset Valuations",
      desc: "Finally, we focus on margin refinement and legal compliance. We structure the business assets, documents, and key management so you are prepared for a high-value exit."
    }
  ];

  return (
    <section 
      ref={containerRef} 
      className="bg-bgCanvas py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-accentGold font-heading block">
            Proprietary Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-textPrimary tracking-tight leading-none">
            The Velocity Framework™
          </h2>
          <p className="text-sm md:text-base text-textSecondary font-light leading-relaxed">
            A battle-tested, 5-stage consulting methodology engineered to systematically eliminate operating bottlenecks and accelerate corporate valuation.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative mt-12">
          {/* Vertical Center Line (Base) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-black/[0.05] -translate-x-[1px]" />
          
          {/* Vertical Center Line (Animated Gold Progress) */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-accentGold -translate-x-[1px] z-10"
          />

          {/* Timeline Nodes */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot with Icon */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div 
                      whileInView={{ 
                        backgroundColor: '#C9A227', 
                        borderColor: '#C9A227',
                        color: '#FFFFFF',
                        scale: 1.15
                      }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 rounded-full bg-white border-2 border-black/10 text-textSecondary flex items-center justify-center shadow-lg"
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  {/* Spacer / Content Alignment Container */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-12">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                      className="bg-white p-8 rounded-premium border border-black/[0.03] shadow-premium relative group hover:border-accentGold/20 transition-all duration-500"
                    >
                      {/* Step Number Badge */}
                      <span className="absolute top-6 right-8 font-heading text-4xl font-extrabold text-black/[0.04] group-hover:text-accentGold/10 transition-colors duration-500">
                        {step.number}
                      </span>

                      <div className="space-y-3">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-accentGold font-heading block">
                          Stage {idx + 1}
                        </span>
                        <h3 className="text-xl font-bold text-textPrimary">
                          {step.title}
                        </h3>
                        <p className="text-xs font-semibold text-textSecondary">
                          {step.subtitle}
                        </p>
                        <p className="text-[13px] text-textSecondary font-light leading-relaxed pt-2 border-t border-black/[0.03]">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Empty Right Column Spacer (Visible on Desktop) */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
