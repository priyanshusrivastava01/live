import React from 'react';
import { ShieldAlert, BarChart3, Users, Zap, Layers, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProblemSection() {
  const problems = [
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Scaling Plateaus",
      desc: "Your organization has hit an invisible ceiling. Legacy workflows and current staffing are stretched, preventing you from onboarding new clients without operational decay."
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Diluted Brand Authority",
      desc: "Struggling to command premium pricing. Your offering is perceived as a commodity because your messaging fails to reflect the true, high-tier value you deliver."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Founder Dependency Loop",
      desc: "The entire business revolves around your personal daily intervention. You are trapped in micro-management, making the enterprise unsellable and exhausting to run."
    },
    {
      icon: <ShieldAlert className="w-5 h-5" />,
      title: "Leaky Sales Pipelines",
      desc: "High-quality leads are dropping off due to fragmented customer relationship management. There is no automated, systematic process to nurture prospects into closes."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Manual Operational Friction",
      desc: "Valuable resources are lost to repetitive manual administration. A lack of modern system integrations reduces margins and slows down service delivery."
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Absence of Clear Exit Paths",
      desc: "You have no defined path for equity transition, succession, or acquisition. The company lacks the structured asset valuation necessary for premium exit multiples."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="bg-bgCanvas py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-accentGold font-heading block">
            Systemic Bottlenecks
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-textPrimary tracking-tight leading-none">
            Is Your Business Facing These Growth Constraints?
          </h2>
          <p className="text-sm md:text-base text-textSecondary font-light leading-relaxed max-w-2xl">
            Unchecked organizational friction compounds over time. Identifying these core bottlenecks is the first critical step toward establishing market dominance.
          </p>
        </div>

        {/* Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {problems.map((prob, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                borderColor: 'rgba(201, 162, 39, 0.4)',
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.05)'
              }}
              className="bg-white p-8 rounded-premium border border-black/[0.04] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Icon Container */}
                <div className="p-3 bg-black/[0.02] text-textPrimary rounded-2xl w-fit group-hover:bg-accentGold group-hover:text-white transition-all duration-500">
                  {prob.icon}
                </div>
                
                {/* Problem Info */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-textPrimary group-hover:text-accentGold transition-colors duration-300">
                    {prob.title}
                  </h3>
                  <p className="text-[13px] text-textSecondary leading-relaxed font-light">
                    {prob.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Decorative Highlight */}
              <div className="w-8 h-[1px] bg-black/10 mt-8 group-hover:w-full group-hover:bg-accentGold transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
