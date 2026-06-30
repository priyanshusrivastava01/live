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
      company: "Apex Solutions",
      industry: "B2B SaaS & FinTech",
      timeline: "90-Day Operational Overhaul",
      title: "Scaling Revenue via Custom Automated CRM Pipelines",
      problem: "Apex Solutions was suffering from massive sales pipeline leaks, manual client onboarding delays, and data fragmentation between their CRM and marketing tools. Lead response times exceeded 24 hours, causing a 25% drop-off in active deals.",
      strategy: "Designed a custom, automated sales pipeline architecture. Reconfigured CRM deal stages, established real-time Slack notification triggers for new leads, and automated client onboarding workflows.",
      implementation: "Constructed a centralized database, synced lead scoring APIs, and trained the client's sales team on using the new streamlined pipeline.",
      results: "Reduced lead response times from 24 hours to 5 minutes, resulting in a dramatic increase in closed-won deals.",
      quote: "\"Arunn Guptaa's framework didn't just optimize our CRM—it revolutionized our sales team's productivity and saved us dozens of manual hours every week.\"",
      clientName: "Amit Sharma",
      clientTitle: "CEO, Apex Solutions",
      metrics: [
        { label: "EBITDA Growth", val: "+45%" },
        { label: "LTV Expansion", val: "1.8x" },
        { label: "Admin Hours Saved", val: "20h/wk" }
      ]
    },
    {
      company: "Vanguard Manufacturing",
      industry: "Supply Chain & Manufacturing",
      timeline: "6-Month Corporate Restructuring",
      title: "Systems Restructuring for Acquisition Exit Readiness",
      problem: "The founders of Vanguard wanted to exit, but the company suffered from unorganized inventory logs, high founder-dependency on all operations, and unstructured balance sheets, which blocked high valuation offers.",
      strategy: "Established an M&A readiness program, mapped out Standard Operating Procedures (SOPs), built an internal knowledge base to eliminate founder dependency, and streamlined inventory auditing systems.",
      implementation: "Migrated legacy spreadsheets to an ERP database, automated reporting dashboards, and transitioned daily operations to department leaders.",
      results: "The company successfully achieved a high-value acquisition exit due to institutionalized, clean operating systems.",
      quote: "\"Systemizing our operations allowed us to present a clean, owner-independent business to buyers, which dramatically boosted our final exit valuation.\"",
      clientName: "Rajesh Patel",
      clientTitle: "Co-Founder, Vanguard Manufacturing",
      metrics: [
        { label: "Exit Multiple", val: "7.5x" },
        { label: "EBITDA Margin", val: "+28%" },
        { label: "Audit Time", val: "-60%" }
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
                      BEFORE: Operational Bottlenecks
                    </span>
                    <h4 className="text-lg font-bold text-white mt-4 leading-tight">
                      Founder Dependency
                    </h4>
                    <ul className="mt-4 space-y-3 text-gray-400 text-xs">
                      <li>⚠️ Manual spreadsheets causing data errors and reporting leaks</li>
                      <li>⚠️ Inconsistent client pipelines dependent entirely on manual cold reach</li>
                      <li>⚠️ High team friction due to non-existent operational SOPs</li>
                      <li>⚠️ Uncontrolled cash flow leakage and unoptimized margins</li>
                    </ul>
                  </div>
                  <div className="text-[10px] text-gray-500 font-bold border-t border-white/5 pt-4">
                    EBITDA Margin (Before): 12%
                  </div>
                </div>

                {/* After Panel (Optimized) */}
                <div 
                  className="absolute inset-0 bg-white border-r-2 border-accentGold p-6 sm:p-8 flex flex-col justify-between"
                  style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
                >
                  <div className="w-[300px] sm:w-[350px]">
                    <span className="text-[9px] font-extrabold tracking-widest text-accentGold border border-accentGold/20 px-2 py-0.5 rounded uppercase">
                      AFTER: Integrated Systems
                    </span>
                    <h4 className="text-lg font-bold text-textPrimary mt-4 leading-tight">
                      SOPs & Automation
                    </h4>
                    <ul className="mt-4 space-y-3 text-textSecondary text-xs font-light">
                      <li>✨ Automated sales CRM pipeline with instant lead response sync</li>
                      <li>✨ Centralized team knowledge bases & clear standardized SOPs</li>
                      <li>✨ Real-time dashboard performance metrics and operational visualizers</li>
                      <li>✨ High-value exit-ready corporate structures and optimized budgets</li>
                    </ul>
                  </div>
                  <div className="text-[10px] text-textSecondary font-bold border-t border-black/5 pt-4 w-[300px]">
                    EBITDA Margin (After): 38%
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
