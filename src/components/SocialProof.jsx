import React from 'react';
import { Mail, Users, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

export default function SocialProof() {
  const networks = [
    {
      icon: <LinkedinIcon className="w-5 h-5" />,
      size: "45,000+ Followers",
      label: "LinkedIn Influence",
      desc: "Active community of business leaders, founders, and startup CXOs."
    },
    {
      icon: <Mail className="w-5 h-5" />,
      size: "12,000+ Subscribers",
      label: "Sales Overflow Letter",
      desc: "Weekly breakdown of system workflows and operations scale plays."
    },
    {
      icon: <YoutubeIcon className="w-5 h-5" />,
      size: "25,000+ Subscribers",
      label: "YouTube Insights",
      desc: "In-depth video case studies and deconstructions of sales pipelines."
    },
    {
      icon: <Users className="w-5 h-5" />,
      size: "350+ Founders",
      label: "Elite Scaling Circle",
      desc: "Exclusive boardroom group scaling together in real-time."
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
