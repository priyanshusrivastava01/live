import React from 'react';
import { Users, Award, Mic, Building2 } from 'lucide-react';

export default function SocialProof() {
  const networks = [
    {
      icon: <Users className="w-5 h-5" />,
      size: "1M+ Reached",
      label: "Entrepreneurs Reached",
      desc: "Empowering founders and business owners across India with scaling frameworks."
    },
    {
      icon: <Award className="w-5 h-5" />,
      size: "2,400+ Clients",
      label: "Paid Customers & Community",
      desc: "Delivering massive revenue growths and predictable operating systems."
    },
    {
      icon: <Mic className="w-5 h-5" />,
      size: "500+ Seminars",
      label: "Seminars Conducted",
      desc: "Keynote speaking and corporate coaching on M&A exits and scale-up strategies."
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      size: "210+ Sectors",
      label: "Industries Worked With",
      desc: "Cross-industry strategic execution, optimization, and system audits."
    }
  ];

  return (
    <section className="bg-bgDark text-white py-16 relative overflow-hidden border-b border-white/[0.04]">
      {/* Subtle overlay lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {networks.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 border-l border-white/[0.08] pl-6 md:pl-8 first:border-l-0 lg:first:border-l lg:border-l border-t lg:border-t-0 pt-6 lg:pt-0 first:border-t-0"
            >
              <div className="p-3 bg-white/[0.03] text-accentGold rounded-xl flex-shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1 text-left">
                <span className="text-sm font-heading font-extrabold text-white block">
                  {item.size}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-accentGold block">
                  {item.label}
                </span>
                <p className="text-[9px] text-gray-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
