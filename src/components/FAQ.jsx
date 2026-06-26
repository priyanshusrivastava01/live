import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "What types of companies do you consult for?",
      a: "We partner primarily with established service-based firms, high-ticket agencies, and B2B SaaS organizations generating between $2M and $20M ARR. These businesses typically possess solid product-market fit but suffer from operational bottlenecks and founder-dependency loops."
    },
    {
      q: "How does this differ from traditional management consulting?",
      a: "Traditional consultants deliver a high-level report and walk away. We are builders. We write your SOPs, audit your financial pipelines, design your automation workflows, configure your CRMs, and train your staff. We don't just strategize—we implement."
    },
    {
      q: "What is your typical fee and engagement structure?",
      a: "Our engagements are structured as 90-day sprint retainer packages. Depending on the complexity, they consist of a base retainer combined with a performance bonus linked to bottom-line EBITDA growth or equity milestones. We ensure our interests are completely aligned."
    },
    {
      q: "Can you assist if we are planning a company exit in the near future?",
      a: "Absolutely. M&A preparation is one of our key strengths. We conduct forensic audits, build automated documentation rooms, and decouple the founder from operations. This turns your company from a job into an asset, commanding premium multiples from corporate buyers."
    },
    {
      q: "What is the timeline to see real operational and financial relief?",
      a: "In the first 30 days, we deliver your forensic audit and alignment maps. By day 60, we launch your core database automations and SOP networks. Most founders claw back 10 to 15 hours of administrative work per week within the first 90 days of implementation."
    }
  ];

  return (
    <section className="bg-[#FAFAF8] py-24 px-6 md:px-12 relative overflow-hidden border-b border-black/[0.03]">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-accentGold font-heading block">
            General Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-textPrimary tracking-tight leading-none">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-textSecondary font-light leading-relaxed max-w-xl mx-auto">
            Get answers regarding engagement parameters, financial structures, timelines, and operational deliverables.
          </p>
        </div>

        {/* Accordions Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-black/[0.03] shadow-premium overflow-hidden transition-all duration-300 hover:border-accentGold/20"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-6"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-sm sm:text-base font-extrabold text-textPrimary leading-snug">
                    {faq.q}
                  </h3>
                  <div className="flex-shrink-0 p-2 bg-black/[0.02] text-textSecondary rounded-lg group-hover:bg-accentGold/[0.05] group-hover:text-accentGold transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 text-[13px] text-textSecondary font-light leading-relaxed border-t border-black/[0.02] pt-4 bg-black/[0.005]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
