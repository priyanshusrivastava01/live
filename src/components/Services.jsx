import React from 'react';
import { Compass, ShieldCheck, Megaphone, Target, Settings, Cpu, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: <Compass className="w-5 h-5" />,
      title: "Business Strategy & M&A Advisory",
      tag: "STRATEGY",
      deliverables: ["Corporate restructuring & expansion", "Financial modeling & budget optimization", "Joint venture & exit positioning advisory"],
      stat: "2.4x Valuation growth avg."
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Brand Authority & Market Positioning",
      tag: "POSITIONING",
      deliverables: ["Proprietary framework development", "Executive messaging mapping", "High-ticket service design & premium pricing"],
      stat: "Command 40%+ Premium rates"
    },
    {
      icon: <Megaphone className="w-5 h-5" />,
      title: "Enterprise Growth Marketing",
      tag: "ACQUISITION",
      deliverables: ["Inbound thought leadership networks", "Organic newsletter & editorial growth", "Account-Based Marketing (ABM) strategies"],
      stat: "150% Inbound pipeline boost"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "High-Ticket Sales Architecture",
      tag: "CONVERSION",
      deliverables: ["Consultative sales scripting", "Sales team performance audits", "Pipeline tracking & CRM configuration"],
      stat: "42% Close-rate benchmark"
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Operations & Systems Engineering",
      tag: "EFFICIENCY",
      deliverables: ["Standard Operating Procedure (SOP) design", "Frictionless client onboarding", "Fractional COO resource integration"],
      stat: "Save 15+ Admin hours / week"
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Business Process Automation",
      tag: "AUTOMATION",
      deliverables: ["End-to-end CRM integrations (HubSpot, Salesforce)", "Data pipeline sync & dashboarding", "AI workflow assistant agents"],
      stat: "Reduce operational overhead 22%"
    }
  ];

  return (
    <section id="services" className="bg-bgCanvas py-24 px-6 md:px-12 relative border-b border-black/[0.03]">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-accentGold/[0.015] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-8">
            <span className="inline-block text-[11px] tracking-[0.25em] font-bold text-accentGold mb-6 uppercase font-heading">
              — AREAS OF EXPERTISE
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold text-black tracking-tight leading-[1.02] font-heading">
              Strategic Services
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] font-serif italic text-textSecondary mt-4 font-normal">
                Structured for <span className="bg-gradient-to-br from-[#E6C15C] via-[#C9A227] to-[#9C7A1D] bg-clip-text text-transparent font-bold font-serif">Equity Growth.</span>
              </span>
            </h2>
          </div>
          
          <div className="lg:col-span-4 lg:pt-14">
            <p className="text-textSecondary font-serif italic text-base md:text-lg leading-relaxed">
              We do not provide generic tips. We consult, engineer, and embed custom growth mechanisms, building assets that increase overall enterprise multiples.
            </p>
          </div>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-black/[0.07] hover:border-accentGold/20 rounded-premium p-8 flex flex-col justify-between group transition-all duration-300 shadow-premium relative overflow-hidden"
            >
              {/* Subtle top light overlay */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/[0.03] to-transparent pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-accentGold/[0.07] text-accentGold rounded-2xl group-hover:bg-accentGold group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                  <span className="text-[9px] font-extrabold tracking-widest text-accentGold bg-accentGold/10 px-2.5 py-1 rounded-full uppercase font-heading">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-textPrimary group-hover:text-accentGold transition-colors duration-300 mb-6">
                  {service.title}
                </h3>

                <ul className="space-y-3 mb-8">
                  {service.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="text-[13px] text-textSecondary font-light flex items-start space-x-2 font-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-accentGold/60 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Metrics highlight */}
              <div className="pt-4 border-t border-black/[0.05] flex items-center justify-between mt-auto">
                <span className="text-[10px] text-textSecondary font-semibold uppercase tracking-wider font-heading">
                  Target Outcome
                </span>
                <span className="text-xs font-bold text-accentGold flex items-center gap-1 font-heading">
                  {service.stat}
                  <ArrowUpRight className="w-3 h-3 text-accentGold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
