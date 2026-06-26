import React, { useState, useRef } from 'react';
import { ArrowUpRight, CheckCircle2, AlertCircle, Calendar, Tag, ShieldCheck, FileText, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CaseStudies() {
  const [sliderPos, setSliderPos] = useState(50);
  const sliderContainerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const caseStudies = [
    {
      company: "[REPLACE WITH CLIENT LOGO / COMPANY 1]",
      industry: "[Replace with Industry - e.g. B2B SaaS / FinTech]",
      timeline: "[Replace with Project Timeline - e.g. 90-Day Sprint]",
      title: "[Replace with Case Study Title - e.g. Scaling Revenue via Custom CRM Pipelines]",
      problem: "[Replace with a detailed description of the client's business problems, legacy workflow friction, CRM drop-offs, or manual bottlenecks they faced before strategy consulting.]",
      strategy: "[Replace with the strategic approach deployed - custom pricing tier structures, positioning audits, or automation framework blueprints.]",
      implementation: "[Replace with details on how you implemented the systems—SOP database construction, API automations, or training department leaders.]",
      results: "[Replace with the final project outcomes - increased revenue, lowered customer churn, or EBITDA percentage improvements.]",
      quote: "\"[Replace with a direct testimonial from the CEO or client champion regarding your execution speed and consulting ROI.]\"",
      clientName: "[Replace with Client Name]",
      clientTitle: "[Replace with Client Role, Company Name]",
      metrics: [
        { label: "EBITDA Growth (Replace)", val: "[+00%]" },
        { label: "LTV Expansion (Replace)", val: "[0.0x]" },
        { label: "Admin Hours Saved (Replace)", val: "[00h/wk]" }
      ]
    },
    {
      company: "[REPLACE WITH CLIENT LOGO / COMPANY 2]",
      industry: "[Replace with Industry - e.g. Private Equity / Manufacturing]",
      timeline: "[Replace with Project Timeline - e.g. 6-Month Overhaul]",
      title: "[Replace with Case Study Title - e.g. Systems Restructuring for Acquisition Exit]",
      problem: "[Replace with description of corporate inventory clutter, lack of structured valuation assets, and founder-dependency loops that blocked the exit valuation.]",
      strategy: "[Replace with M&A readiness strategy - forensic balance sheet diagnostics, asset formatting, and structural operating SOP database releases.]",
      implementation: "[Replace with ERP migrations, inventory syncing, and executive board role alignments implemented during the sprint.]",
      results: "[Replace with acquisition exit multiple expansion, verified due-diligence audit speed, and final transaction valuation.]",
      quote: "\"[Replace with a quote outlining how systemization facilitated the M&A diligence audit and increased stakeholder confidence during transaction closing.]\"",
      clientName: "[Replace with Client Name]",
      clientTitle: "[Replace with Client Role, Company Name]",
      metrics: [
        { label: "Exit Multiple (Replace)", val: "[0.0x]" },
        { label: "EBITDA Margin (Replace)", val: "[+00%]" },
        { label: "Audit Time (Replace)", val: "[-00%]" }
      ]
    }
  ];

  return (
    <section id="case-studies" className="bg-[#FAFAF8] py-24 px-6 md:px-12 relative overflow-hidden border-b border-black/[0.03]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-accentGold font-heading block">
            Case Studies Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-textPrimary tracking-tight leading-none">
            Verified Client Case Overviews
          </h2>
          <p className="text-sm md:text-base text-textSecondary font-light leading-relaxed max-w-2xl">
            Review detailed reports of client turnarounds. Every study is structured to outline the initial problem, strategy, execution roadmap, and verified bottom-line growth.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Case List */}
          <div className="lg:col-span-7 space-y-12">
            {caseStudies.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 sm:p-10 rounded-premium border border-black/[0.03] shadow-premium space-y-6 hover:border-accentGold/20 transition-all duration-300"
              >
                {/* Top Badge strip */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.04] pb-4">
                  <span className="text-xs font-bold text-accentGold tracking-widest">
                    {item.company}
                  </span>
                  <div className="flex items-center space-x-3 text-[10px] text-textSecondary font-medium">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5 text-accentGold" />
                      {item.industry}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-black/10" />
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-accentGold" />
                      {item.timeline}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-textPrimary leading-tight">
                  {item.title}
                </h3>

                {/* Four Pillar Detail blocks */}
                <div className="space-y-4 pt-2">
                  {/* Problem */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-textPrimary flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                      Business Problem
                    </span>
                    <p className="text-[12px] text-textSecondary leading-relaxed font-light pl-5 border-l border-red-200">
                      {item.problem}
                    </p>
                  </div>
                  
                  {/* Strategy */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-textPrimary flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-accentGold" />
                      Deployed Strategy
                    </span>
                    <p className="text-[12px] text-textSecondary leading-relaxed font-light pl-5 border-l border-accentGold/30">
                      {item.strategy}
                    </p>
                  </div>

                  {/* Implementation */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-textPrimary flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-accentGold" />
                      Systems Implementation
                    </span>
                    <p className="text-[12px] text-textSecondary leading-relaxed font-light pl-5 border-l border-accentGold/30">
                      {item.implementation}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-textPrimary flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      Project Results
                    </span>
                    <p className="text-[12px] text-textSecondary leading-relaxed font-light pl-5 border-l border-emerald-200">
                      {item.results}
                    </p>
                  </div>
                </div>

                {/* Client Quote Box */}
                <div className="bg-black/[0.01] border border-black/[0.02] rounded-xl p-5 relative mt-6">
                  <Quote className="w-6 h-6 text-accentGold/10 absolute top-3 left-3" />
                  <p className="text-[11px] text-textSecondary italic leading-relaxed pl-4 relative z-10">
                    {item.quote}
                  </p>
                  <div className="mt-3 pl-4 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-bold text-textPrimary block">{item.clientName}</span>
                      <span className="text-[9px] text-textSecondary block">{item.clientTitle}</span>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-accentGold border border-accentGold/20 px-2 py-0.5 rounded">
                      Verified Client Reference
                    </span>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-black/[0.03]">
                  {item.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-accentGold">{m.val}</div>
                      <div className="text-[9px] uppercase tracking-wider text-textSecondary font-semibold mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Before & After Visual Slider */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <span className="text-[10px] uppercase font-bold tracking-widest text-textSecondary font-heading block">
              Before & After Operational Benchmark
            </span>
            <div className="bg-white p-6 rounded-premium border border-black/[0.03] shadow-premium">
              
              <div 
                ref={sliderContainerRef}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseDown={() => { isDragging.current = true; }}
                onMouseUp={() => { isDragging.current = false; }}
                onMouseLeave={() => { isDragging.current = false; }}
                className="relative w-full aspect-square bg-[#0F0F10] rounded-xl overflow-hidden cursor-ew-resize select-none"
              >
                {/* Before Panel (Chaos) */}
                <div className="absolute inset-0 bg-[#0F0F10] p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-extrabold tracking-widest text-red-400 border border-red-400/20 px-2 py-0.5 rounded uppercase">
                      [BEFORE: Operational Bottlenecks]
                    </span>
                    <h4 className="text-lg font-bold text-white mt-4 leading-tight">
                      Founder Dependency
                    </h4>
                    <ul className="mt-4 space-y-3 text-gray-400 text-xs">
                      <li>⚠️ [Replace with manual spreadsheet bottleneck]</li>
                      <li>⚠️ [Replace with customer acquisition friction]</li>
                      <li>⚠️ [Replace with high team turnover / communication leaks]</li>
                      <li>⚠️ [Replace with margin erosion / unoptimized budgets]</li>
                    </ul>
                  </div>
                  <div className="text-[10px] text-gray-500 font-bold border-t border-white/5 pt-4">
                    EBITDA Metric (Before): [Replace]
                  </div>
                </div>

                {/* After Panel (Optimized) */}
                <div 
                  className="absolute inset-0 bg-white border-r-2 border-accentGold p-6 sm:p-8 flex flex-col justify-between"
                  style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
                >
                  <div className="w-[300px] sm:w-[350px]">
                    <span className="text-[9px] font-extrabold tracking-widest text-accentGold border border-accentGold/20 px-2 py-0.5 rounded uppercase">
                      [AFTER: Integrated Systems]
                    </span>
                    <h4 className="text-lg font-bold text-textPrimary mt-4 leading-tight">
                      SOPs & Automation
                    </h4>
                    <ul className="mt-4 space-y-3 text-textSecondary text-xs font-light">
                      <li>✨ [Replace with new automated CRM system]</li>
                      <li>✨ [Replace with clean standardized onboarding flow]</li>
                      <li>✨ [Replace with automated executive dashboard logs]</li>
                      <li>✨ [Replace with equity transition assets built]</li>
                    </ul>
                  </div>
                  <div className="text-[10px] text-textSecondary font-bold border-t border-black/5 pt-4 w-[300px]">
                    EBITDA Metric (After): [Replace]
                  </div>
                </div>

                {/* Drag Slider Handle Line */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-accentGold pointer-events-none cursor-ew-resize flex items-center justify-center"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-accentGold text-white shadow-xl flex items-center justify-center text-xs font-bold font-heading -translate-x-[2px]">
                    ↔
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-[11px] text-textSecondary italic font-light">
                  Drag the slider horizontally to view operational structure difference.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
