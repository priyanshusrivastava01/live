import React from 'react';
import { Calendar, CheckCircle2, Sparkles, PhoneCall, LineChart, Cpu, ClipboardList, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

export default function ConsultationCTA() {
  const benefits = [
    "[Replace with consultation benefit 1 - e.g. Diagnostic balance sheet leak checks]",
    "[Replace with consultation benefit 2 - e.g. Custom CRM and automations architecture layout]",
    "[Replace with consultation benefit 3 - e.g. Valuations scaling recommendations]"
  ];

  const onboardingSteps = [
    {
      icon: <PhoneCall className="w-4 h-4" />,
      step: "01",
      title: "Discovery Call",
      desc: "45-minute call to evaluate operational bottlenecks."
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      step: "02",
      title: "Business Audit",
      desc: "Deep forensic check of finance margins & workflows."
    },
    {
      icon: <ClipboardList className="w-5 h-5" />,
      step: "03",
      title: "Strategy Session",
      desc: "Co-construction of your systems scaling map."
    },
    {
      icon: <ClipboardList className="w-5 h-5" />,
      step: "04",
      title: "Action Plan",
      desc: "Delivery of clear project tasks and timelines."
    },
    {
      icon: <Rocket className="w-4 h-4" />,
      step: "05",
      title: "Implementation",
      desc: "Active 90-day system integration & team training."
    }
  ];

  return (
    <section className="bg-bgDark text-white py-24 px-6 md:px-12 relative overflow-hidden border-b border-white/[0.04]">
      
      {/* Premium Gold Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-accentGold/[0.04] rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-center space-y-16">
        
        {/* Subtle Icon Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-1.5 w-fit mx-auto">
          <Sparkles className="w-4 h-4 text-accentGold" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300 font-heading">
            Strictly Limited Board Availability
          </span>
        </div>

        {/* Heading */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-heading">
            [Replace: Build a High-Valuation Corporate Asset]
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
            [Replace with: Book a complimentary strategic audit session. We will diagnose your workflows, map automation integrations, and outline exit multiplier paths.]
          </p>
        </div>

        {/* Visual Onboarding Flow Pipeline */}
        <div className="space-y-6 text-left">
          <h3 className="text-[10px] uppercase font-bold tracking-widest text-accentGold font-heading text-center">
            Your Advisory Onboarding Journey
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {onboardingSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white/[0.02] border border-white/[0.06] hover:border-accentGold/20 rounded-premium p-6 flex flex-col justify-between space-y-4 relative group transition-colors duration-300"
              >
                {/* Horizontal connection arrow visible on large screens */}
                {idx < onboardingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-[50%] right-[-14px] transform -translate-y-1/2 z-20 text-accentGold/30 text-lg font-bold">
                    ➔
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-white/[0.04] text-accentGold rounded-xl">
                    {step.icon}
                  </div>
                  <span className="font-heading text-xl font-extrabold text-white/10 group-hover:text-accentGold/10 transition-colors">
                    {step.step}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-accentGold transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[10px] text-gray-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables/Benefits list */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-premium p-6 sm:p-8 max-w-2xl mx-auto text-left space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-accentGold border-b border-white/5 pb-2">
            What You Receive in the Call
          </h3>
          <ul className="space-y-3.5 pt-2">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-[12px] sm:text-sm text-gray-300 font-light">
                <CheckCircle2 className="w-4 h-4 text-accentGold flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <Magnetic>
            <a
              href="#contact"
              className="relative overflow-hidden inline-flex items-center justify-center px-10 py-5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-accentGold border border-accentGold transition-all duration-300 hover:bg-transparent hover:text-white group cursor-pointer"
            >
              <span className="absolute inset-0 bg-white/20 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Secure Your Strategic Audit Session
              </span>
            </a>
          </Magnetic>
          <div className="mt-4 text-[10px] text-gray-500 font-semibold tracking-wider uppercase">
            No obligation. strictly confidential.
          </div>
        </div>

      </div>
    </section>
  );
}
