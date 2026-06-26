import React, { useState } from 'react';
import { Mail, BookOpen, Send, DownloadCloud, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

export default function LeadMagnet() {
  const [form, setForm] = useState({ name: '', email: '', company: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();
    if (!form.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: '', email: '', company: '' });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="bg-bgCanvas py-20 px-6 md:px-12 relative overflow-hidden border-b border-black/[0.03]">
      <div className="max-w-6xl mx-auto bg-white rounded-premium border border-black/[0.03] shadow-premium overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-12 items-center">
        
        {/* Left: Copy & Bullet points */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <span className="inline-flex items-center space-x-2 bg-accentGold/10 border border-accentGold/20 rounded-full px-3.5 py-1 w-fit">
            <BookOpen className="w-3.5 h-3.5 text-accentGold" />
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-accentGold font-heading">
              Complimentary Scaling Asset
            </span>
          </span>

          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-textPrimary tracking-tight leading-tight">
              Get the [Business Growth Checklist & Scaling Blueprint]
            </h3>
            <p className="text-xs sm:text-sm text-textSecondary font-light leading-relaxed">
              [Replace with your checklist overview: e.g. A battle-tested 37-point operational framework designed to help founders isolate margin leaks and transition workloads to management teams.]
            </p>
          </div>

          <ul className="space-y-2.5 pt-2">
            <li className="flex items-center space-x-2.5 text-xs text-textSecondary font-light">
              <CheckCircle2 className="w-4 h-4 text-accentGold flex-shrink-0" />
              <span>[Replace with checklist perk 1 - e.g. SOP workflow audit sheets]</span>
            </li>
            <li className="flex items-center space-x-2.5 text-xs text-textSecondary font-light">
              <CheckCircle2 className="w-4 h-4 text-accentGold flex-shrink-0" />
              <span>[Replace with checklist perk 2 - e.g. M&A document folder structure template]</span>
            </li>
            <li className="flex items-center space-x-2.5 text-xs text-textSecondary font-light">
              <CheckCircle2 className="w-4 h-4 text-accentGold flex-shrink-0" />
              <span>[Replace with checklist perk 3 - e.g. Outbound marketing campaign builders]</span>
            </li>
          </ul>
        </div>

        {/* Right: Lead Capture Form */}
        <div className="lg:col-span-6 bg-[#FAFAF8] p-6 sm:p-8 rounded-2xl border border-black/5">
          <h4 className="text-sm font-bold text-textPrimary uppercase tracking-wider mb-6 text-left">
            Request Secure Access Link
          </h4>

          <form onSubmit={handleDownload} className="space-y-4">
            <div className="space-y-1 text-left">
              <label className="text-[9px] uppercase font-bold tracking-widest text-textSecondary font-heading block">
                Your Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 text-xs text-textPrimary focus:outline-none focus:border-accentGold/50 transition-colors"
                placeholder="[Enter Name]"
              />
            </div>

            <div className="space-y-1 text-left">
              <label className="text-[9px] uppercase font-bold tracking-widest text-textSecondary font-heading block">
                Corporate Email Address
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 text-xs text-textPrimary focus:outline-none focus:border-accentGold/50 transition-colors"
                placeholder="[Enter Corporate Email]"
              />
            </div>

            <div className="space-y-1 text-left">
              <label className="text-[9px] uppercase font-bold tracking-widest text-textSecondary font-heading block">
                Company Name
              </label>
              <input
                type="text"
                required
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 text-xs text-textPrimary focus:outline-none focus:border-accentGold/50 transition-colors"
                placeholder="[Enter Company Name]"
              />
            </div>

            <div className="pt-2 text-left">
              <Magnetic>
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-full bg-bgDark text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group hover:bg-accentGold transition-colors w-full cursor-pointer"
                >
                  {submitted ? (
                    <span>Access Request Logged</span>
                  ) : (
                    <>
                      <DownloadCloud className="w-4 h-4" />
                      Download Checklist & Blueprint
                    </>
                  )}
                </button>
              </Magnetic>
            </div>
          </form>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-emerald-50 text-emerald-800 text-[11px] font-medium rounded-xl border border-emerald-100 mt-4 text-left"
            >
              ✓ Blueprint link sent to <strong>{form.email}</strong>. Please check your promotions folder or spam filters if it doesn't arrive in 5 minutes.
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
