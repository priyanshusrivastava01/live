import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

import speakingImage from '../assets/ChatGPT Image Jul 2, 2026, 12_47_00 PM.webp';
import seminarImage from '../assets/sales_overflow_strategy.png';

export default function About() {
  return (
    <section id="about" className="bg-bgCanvas py-24 px-6 md:px-12 relative overflow-hidden border-b border-black/[0.03]">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 right-0 w-[40%] h-[40%] bg-accentGold/[0.015] rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[40%] h-[40%] bg-accentGold/[0.015] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center">
        
        {/* Header Block */}
        <div className="space-y-4 mb-16">
          <span className="inline-block text-[11px] tracking-[0.25em] font-bold text-accentGold mb-4 uppercase font-heading">
            — THE MAN BEHIND THE FRAMEWORK
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold text-black tracking-tight leading-[1.02] font-heading">
            ARUNN GUPTAA
            <span className="block text-2xl sm:text-3xl md:text-4xl font-serif italic text-textSecondary mt-4 font-normal">
              From Struggling Consultant To Building India's Most Practical <span className="bg-gradient-to-br from-[#E6C15C] via-[#C9A227] to-[#9C7A1D] bg-clip-text text-transparent font-bold font-serif">Sales Framework</span>
            </span>
          </h2>
          <p className="text-xs uppercase tracking-widest text-textSecondary font-semibold font-heading pt-4">
            Here's The Story No One Talks About...
          </p>
        </div>

        {/* Story Section Part 1 */}
        <div className="space-y-8 text-left">
          {/* Speaking Image Card */}
          <div className="relative rounded-premium overflow-hidden aspect-[16/10] shadow-xl border border-black/[0.04] my-10">
            <img
              src={speakingImage}
              alt="Arunn Guptaa's consulting workspace"
              className="w-full h-full object-cover object-center scale-102 hover:scale-100 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="font-serif text-lg leading-relaxed text-textSecondary space-y-6">
            <p>
              I didn't start with{' '}
              <span className="bg-[#FAF6EE] border border-[#E6C15C]/20 text-textPrimary px-2 py-0.5 rounded font-medium font-body">
                100 clients
              </span>
              ,{' '}
              <span className="bg-[#FAF6EE] border border-[#E6C15C]/20 text-textPrimary px-2 py-0.5 rounded font-medium font-body">
                large stages
              </span>
              , or a{' '}
              <span className="bg-[#FAF6EE] border border-[#E6C15C]/20 text-textPrimary px-2 py-0.5 rounded font-medium font-body">
                bestselling book
              </span>
              .
            </p>

            <p>
              I started with a notebook, a big dream — and a business that{' '}
              <span className="underline decoration-red-500 decoration-2 underline-offset-4 font-medium text-textPrimary">
                barely survived on referrals.
              </span>
            </p>

            <p>
              For years, I watched business owners — brilliant people with incredible products — struggle to get clients. Not because they lacked skill. But because{' '}
              <span className="bg-bgDark text-white px-2.5 py-1 rounded font-medium font-body text-sm inline-block">
                nobody knew they existed.
              </span>
            </p>

            <p>
              That broke something in me. So I made it my life's work to fix it.
            </p>

            <p>
              I spent years studying what the top 1% of businesses do differently. And I discovered{' '}
              <span className="underline decoration-red-500 decoration-2 underline-offset-4 font-medium text-textPrimary">
                one uncomfortable truth:
              </span>
            </p>
          </div>

          {/* Centered Quote Block */}
          <div className="bg-[#FAF6EE]/60 border border-accentGold/20 rounded-2xl p-8 my-12 text-center max-w-2xl mx-auto shadow-sm relative overflow-hidden">
            <Quote className="w-12 h-12 text-accentGold/5 absolute -top-2 -left-2" />
            <p className="text-xl sm:text-2xl font-serif italic text-textPrimary leading-relaxed">
              "The best businesses don't chase customers. <br />
              They build systems that <span className="bg-gradient-to-br from-[#E6C15C] via-[#C9A227] to-[#9C7A1D] bg-clip-text text-transparent font-bold font-serif">attract them.</span>"
            </p>
          </div>

          <div className="font-serif text-lg leading-relaxed text-textSecondary space-y-6">
            <p>
              In 2020, I put that belief to the test. A coaching business was stuck at{' '}
              <span className="bg-[#FAF6EE] border border-[#E6C15C]/20 text-textPrimary px-2 py-0.5 rounded font-medium font-body">
                ₹10 lakhs a month
              </span>{' '}
              — plateaued, frustrated, and ready to give up.
            </p>

            <p>
              We rebuilt their marketing from scratch. Within months, they crossed{' '}
              <span className="bg-bgDark text-white px-2.5 py-1 rounded font-medium font-body text-sm inline-block">
                ₹1 Crore per month
              </span>{' '}
              — in the middle of a pandemic.
            </p>

            <p className="text-accentGold font-medium italic">
              That result became the foundation of the Sales Overflow Framework.
            </p>
          </div>
        </div>

        {/* Divider & Section Part 2 */}
        <div className="mt-24 pt-16 border-t border-black/[0.05]">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-black font-heading tracking-tight mb-2 uppercase">
              And then, one more case study...
            </h3>
            <p className="text-xs text-red-500 uppercase tracking-widest font-extrabold font-heading">
              (Because one win wasn't enough...)
            </p>
          </div>

          <div className="space-y-8 text-left">
            {/* Seminar Image Card */}
            <div className="relative rounded-premium overflow-hidden aspect-[16/10] shadow-xl border border-black/[0.04] my-10">
              <img
                src={seminarImage}
                alt="Arunn Guptaa's sales strategy whiteboard"
                className="w-full h-full object-cover object-center scale-102 hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="font-serif text-lg leading-relaxed text-textSecondary space-y-6">
              <p>
                Around the same time, I started working with one of India's most respected influencers and business coaches. Their content was brilliant, but their business{' '}
                <span className="underline decoration-red-500 decoration-2 underline-offset-4 font-medium text-textPrimary">
                  wasn't growing the way it deserved to.
                </span>
              </p>

              <p>
                The problem wasn't <em>him</em>. The problem was positioning and marketing.
              </p>

              <p>
                We applied the same framework — rebuilt his brand authority, sharpened his messaging, and created a system that attracted the right audience consistently.
              </p>

              <p>
                The result?{' '}
                <span className="bg-[#FAF6EE] border border-[#E6C15C]/20 text-textPrimary px-2 py-0.5 rounded font-medium font-body">
                  His business scaled 10X.
                </span>{' '}
                Not through hard selling. Not through cold outreach. But through smart, strategic marketing that made people come to <em>him</em>.
              </p>

              <p>
                That's when I knew — this framework wasn't a one-time miracle.{' '}
                <span className="underline decoration-red-500 decoration-2 underline-offset-4 font-medium text-textPrimary">
                  It was repeatable.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider & Section Part 3 */}
        <div className="mt-24 pt-16 border-t border-black/[0.05]">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase font-bold tracking-widest text-red-500 font-heading block mb-2">
              BUT COULD IT WORK ON MY OWN BUSINESS?
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-black font-heading tracking-tight">
              THE <span className="underline decoration-red-500 decoration-4 underline-offset-4">REAL TEST</span> WAS NEXT...
            </h3>
          </div>

          <div className="space-y-8 text-left">
            <div className="font-serif text-lg leading-relaxed text-textSecondary space-y-6">
              <p>
                So I did something most consultants would{' '}
                <span className="underline decoration-red-500 decoration-2 underline-offset-4 font-medium text-textPrimary">
                  never dare to do.
                </span>{' '}
                <span className="bg-bgDark text-white px-2.5 py-1 rounded font-medium font-body text-sm inline-block">
                  I implemented it on myself.
                </span>
              </p>

              <p>
                I applied the Sales Overflow Framework to my own agency and consulting business.{' '}
                I stopped chasing clients. I stopped cold pitching. I stopped relying on referrals and hoping the phone would ring.
              </p>

              <p>
                Within months,{' '}
                <span className="underline decoration-red-500 decoration-2 underline-offset-4 font-medium text-textPrimary">
                  clients started coming on autopilot.
                </span>{' '}
                No chasing. No convincing. No discounting.
              </p>

              <p>
                That's the moment I realized — if it works for me, it can work for you too. Since then, I've worked with{' '}
                <span className="bg-[#FAF6EE] border border-[#E6C15C]/20 text-textPrimary px-2 py-0.5 rounded font-medium font-body">
                  100+ brands
                </span>{' '}
                — coaches, consultants, MSMEs, service providers, and industry leaders across India.
              </p>

              <p>
                And that's when I made a decision. I didn't want to keep this framework limited to the clients I could personally work with.{' '}
                <span className="underline decoration-red-500 decoration-2 underline-offset-4 font-medium text-textPrimary">
                  Every business owner deserves to know this.
                </span>
              </p>

              <p>
                So I did what made the most sense —{' '}
                <span className="bg-bgDark text-white px-2.5 py-1 rounded font-medium font-body text-sm inline-block">
                  I wrote it all down.
                </span>{' '}
                Every principle. Every strategy. Every lesson from 100+ businesses, distilled into one place.
              </p>
            </div>

            {/* Bottom Slogan Quote Block */}
            <div className="bg-[#FAF6EE]/60 border border-accentGold/20 rounded-2xl p-8 my-12 text-center max-w-2xl mx-auto shadow-sm relative overflow-hidden">
              <p className="text-lg sm:text-xl font-serif text-textSecondary leading-relaxed">
                That's why <span className="italic text-textPrimary font-semibold">this book exists.</span> <br />
                That's why the <span className="font-bold text-accentGold font-heading">Sales Overflow Framework</span> was born — <br />
                <span className="italic text-textPrimary font-semibold">so that every business owner can stop chasing and start attracting.</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
