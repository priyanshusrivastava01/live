import React from 'react';
import { Award, Briefcase, FileCheck2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrustedBy() {
  const corporateClients = [
    { name: '[CLIENT LOGO 1]', type: 'Replace with Client Logo' },
    { name: '[CLIENT LOGO 2]', type: 'Replace with Client Logo' },
    { name: '[CLIENT LOGO 3]', type: 'Replace with Client Logo' },
    { name: '[CLIENT LOGO 4]', type: 'Replace with Client Logo' },
    { name: '[CLIENT LOGO 5]', type: 'Replace with Client Logo' },
    { name: '[CLIENT LOGO 6]', type: 'Replace with Client Logo' },
    { name: '[CLIENT LOGO 7]', type: 'Replace with Client Logo' },
    { name: '[CLIENT LOGO 8]', type: 'Replace with Client Logo' },
  ];

  const credentials = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "[Replace with Award Title]",
      org: "[Replace with Award Organization / Year]",
      desc: "[Replace with a brief sentence describing this accolade, award significance, or recognition details.]"
    },
    {
      icon: <FileCheck2 className="w-5 h-5" />,
      title: "[Replace with Executive Certification]",
      org: "[Replace with Institution / Academy Name]",
      desc: "[Replace with details about the certification requirements, executive specialization, or M&A frameworks studied.]"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "[Replace with Board Membership]",
      org: "[Replace with Syndicate / Venture Org Name]",
      desc: "[Replace with details regarding your active guidance, advising limits, international partnerships, or licensing.]"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "[Replace with Media Mention / Column]",
      org: "[Replace with Publication / Channel Name]",
      desc: "[Replace with a short description of topics you contribute, shared systems blueprints, or featured interview titles.]"
    }
  ];

  return (
    <section className="bg-[#FAFAF8] py-16 border-y border-black/[0.04] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-[10px] uppercase font-bold tracking-widest text-textSecondary mb-8">
          Trusted by Industry Leaders and Market Disruptors
        </p>

        {/* Infinite Marquee Container */}
        <div className="relative w-full flex items-center overflow-hidden mb-16 select-none">
          {/* Left vignette blur overlay */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-bgCanvas to-transparent z-10 pointer-events-none" />
          {/* Right vignette blur overlay */}
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-bgCanvas to-transparent z-10 pointer-events-none" />

          {/* Scrolling Content */}
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {/* Double the list to maintain seamless looping */}
            {[...corporateClients, ...corporateClients].map((client, idx) => (
              <div
                key={idx}
                className="inline-flex flex-col items-start mx-12 md:mx-16 font-heading"
              >
                <span className="text-lg md:text-xl font-black tracking-[0.15em] text-textPrimary/80">
                  {client.name}
                </span>
                <span className="text-[9px] font-bold text-accentGold uppercase tracking-widest mt-0.5">
                  {client.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials and Accreditations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {credentials.map((cred, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-white p-6 rounded-premium border border-black/[0.03] shadow-premium flex flex-col justify-between"
            >
              <div className="flex flex-col space-y-4">
                <div className="p-2.5 bg-accentGold/[0.07] text-accentGold rounded-xl w-fit">
                  {cred.icon}
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-textPrimary leading-snug">
                    {cred.title}
                  </h3>
                  <span className="text-[10px] font-semibold text-accentGold tracking-wide block mt-1">
                    {cred.org}
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-textSecondary leading-relaxed mt-4">
                {cred.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
