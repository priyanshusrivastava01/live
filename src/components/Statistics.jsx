import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function CountUp({ endValue, suffix = '', prefix = '', duration = 2, isPlaceholder = false }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView && !isPlaceholder && typeof endValue === 'number') {
      let startTime = null;
      const startValue = 0;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeProgress = progress * (2 - progress);
        const currentValue = startValue + (endValue - startValue) * easeProgress;
        
        setCount(Math.floor(currentValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, endValue, duration, isPlaceholder]);

  if (isPlaceholder) {
    return (
      <span ref={elementRef} className="font-heading tracking-tight font-extrabold text-accentGold">
        {prefix}{endValue}{suffix}
      </span>
    );
  }

  return (
    <span ref={elementRef} className="font-heading tracking-tight font-extrabold text-accentGold">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Statistics() {
  const stats = [
    {
      value: 8,
      prefix: "",
      suffix: "+",
      isPlaceholder: false,
      label: "Years Experience",
      desc: "Years of professional strategy, marketing & operational leadership experience."
    },
    {
      value: 120,
      prefix: "",
      suffix: "+",
      isPlaceholder: false,
      label: "Businesses Helped",
      desc: "Total count of brand founders, MSMEs, and service agencies scaled."
    },
    {
      value: 15,
      prefix: "",
      suffix: "+",
      isPlaceholder: false,
      label: "Industries Served",
      desc: "Distinct market sectors (SaaS, FinTech, E-Commerce, MSMEs) advised."
    },
    {
      value: 98,
      prefix: "",
      suffix: "%",
      isPlaceholder: false,
      label: "Client Retention",
      desc: "Verified annual client retention rating and NPS score metrics."
    },
    {
      value: 200,
      prefix: "",
      suffix: "+",
      isPlaceholder: false,
      label: "Projects Delivered",
      desc: "Completed CRM pipeline setups, database SOPs, and margin audit sprints."
    },
    {
      value: 10,
      prefix: "",
      suffix: "+",
      isPlaceholder: false,
      label: "Countries Reached",
      desc: "Count of global jurisdictions where advised client operations run."
    }
  ];

  return (
    <section className="bg-bgDark text-white py-24 relative overflow-hidden border-b border-white/[0.03]">
      {/* Decorative Gold Light Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accentGold/[0.02] rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Block to state it's a Trust Section */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <span className="text-[10px] uppercase font-bold tracking-widest text-accentGold font-heading block">
            Verified Operational Telemetry
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none">
            Our Strategy In Numbers
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-xl">
            We hold ourselves to absolute data integrity. Every statistic displayed below corresponds to verified corporate project reports (Input your actual statistics below).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col space-y-4 border-l border-white/[0.08] pl-6 md:pl-8"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl">
                <CountUp
                  endValue={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  isPlaceholder={stat.isPlaceholder}
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
                  {stat.label}
                </h3>
                <p className="text-[12px] text-gray-400 font-light leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
