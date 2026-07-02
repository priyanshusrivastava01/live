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
              I didn't start with a{' '}
              <span className="bg-[#FAF6EE] border border-[#E6C15C]/20 text-textPrimary px-2 py-0.5 rounded font-medium font-body">
                roster of 100+ clients
              </span>
              ,{' '}
              <span className="bg-[#FAF6EE] border border-[#E6C15C]/20 text-textPrimary px-2 py-0.5 rounded font-medium font-body">
                speaking on global stages
              </span>
              , or having a{' '}
              <span className="bg-[#FAF6EE] border border-[#E6C15C]/20 text-textPrimary px-2 py-0.5 rounded font-medium font-body">
                bestselling book
              </span>{' '}
              to my name.
            </p>

            <p>
              I began with just a notebook, a major goal — and a consulting practice that{' '}
              <span className="underline decoration-red-500 decoration-2 underline-offset-4 font-medium text-textPrimary">
                struggled to survive on erratic referrals.
              </span>
            </p>

            <p>
              For years, I saw talented business owners — brilliant people with incredible products — struggle to get high-paying clients. Not due to a lack of skill, but simply because{' '}
              <span className="bg-bgDark text-white px-2.5 py-1 rounded font-medium font-body text-sm inline-block">
                they were the market's best-kept secret.
              </span>
            </p>

            <p>
              That broke something in me. So I made it my life's work to fix it.
            </p>

            <p>
              I spent years analyzing the strategies of the top 1% of high-growth businesses. That research led me to{' '}
              <span className="underline decoration-red-500 decoration-2 underline-offset-4 font-medium text-textPrimary">
                one critical realization:
              </span>
            </p>
          </div>

          {/* Centered Quote Block */}
          <div className="bg-[#FAF6EE]/60 border border-accentGold/20 rounded-2xl p-8 my-12 text-center max-w-2xl mx-auto shadow-sm relative overflow-hidden">
            <Quote className="w-12 h-12 text-accentGold/5 absolute -top-2 -left-2" />
            <p className="text-xl sm:text-2xl font-serif italic text-textPrimary leading-relaxed">
              "The most successful companies never chase customers. <br />
              They design engines that <span className="bg-gradient-to-br from-[#E6C15C] via-[#C9A227] to-[#9C7A1D] bg-clip-text text-transparent font-bold font-serif">naturally attract them.</span>"
            </p>
          </div>

          <div className="font-serif text-lg leading-relaxed text-textSecondary space-y-6">
            <p>
              In 2020, I put this methodology to the test with a client's coaching business that was stuck at{' '}
              <span className="bg-[#FAF6EE] border border-[#E6C15C]/20 text-textPrimary px-2 py-0.5 rounded font-medium font-body">
                a monthly revenue of ₹10 Lakhs
              </span>{' '}
              — hit a ceiling, and was unable to scale.
            </p>

            <p>
              We overhauled their client acquisition engine. Within just a few months, they scaled past{' '}
              <span className="bg-bgDark text-white px-2.5 py-1 rounded font-medium font-body text-sm inline-block">
                ₹1 Crore in monthly revenue
              </span>{' '}
              — right during the peak of the pandemic.
            </p>

            <p className="text-accentGold font-medium italic">
              That breakthrough became the cornerstone of my consulting methodology.
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
                Around the same time, I partnered with a prominent Indian business coach and creator. Their expertise was world-class, but their backend business{' '}
                <span className="underline decoration-red-500 decoration-2 underline-offset-4 font-medium text-textPrimary">
                  wasn't matching their massive online reach.
                </span>
              </p>

              <p>
                The bottleneck wasn't their knowledge or content. The problem lay in core positioning and client acquisition systems.
              </p>

              <p>
                We deployed the exact same model — redesigned their brand authority, structured their core message, and built a framework that operated consistently.
              </p>

              <p>
                The outcome?{' '}
                <span className="bg-[#FAF6EE] border border-[#E6C15C]/20 text-textPrimary px-2 py-0.5 rounded font-medium font-body">
                  We scaled his business by 10X
                </span>{' '}
                without resorting to aggressive sales tactics or endless cold outreach. Instead, we built authority systems that brought clients directly to him.
              </p>

              <p>
                That success proved to me that this model wasn't a fluke.{' '}
                <span className="underline decoration-red-500 decoration-2 underline-offset-4 font-medium text-textPrimary">
                  It was a predictable system.
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
                So I decided to take a step that most advisors{' '}
                <span className="underline decoration-red-500 decoration-2 underline-offset-4 font-medium text-textPrimary">
                  hesitate to take.
                </span>{' '}
                <span className="bg-bgDark text-white px-2.5 py-1 rounded font-medium font-body text-sm inline-block">
                  I deployed the model on my own agency.
                </span>
              </p>

              <p>
                I implemented these exact scaling systems in my own consulting practice. No more chasing prospects, no more cold emails, and no more hoping for the next referral.
              </p>

              <p>
                Within months,{' '}
                <span className="underline decoration-red-500 decoration-2 underline-offset-4 font-medium text-textPrimary">
                  high-tier clients began reaching out to us consistently
                </span>{' '}
                — with zero chasing and zero cold outreach.
              </p>

              <p>
                That was the proof I needed: if it worked for my own business, it could work for any service business. Since then, I have helped{' '}
                <span className="bg-[#FAF6EE] border border-[#E6C15C]/20 text-textPrimary px-2 py-0.5 rounded font-medium font-body">
                  over 100 brands
                </span>{' '}
                — ranging from coaches and consultants to mid-sized enterprises across India.
              </p>

              <p>
                But I didn't want to limit this growth playbook to just my private clients.{' '}
                <span className="underline decoration-red-500 decoration-2 underline-offset-4 font-medium text-textPrimary">
                  Every founder deserves a reliable growth engine.
                </span>
              </p>

              <p>
                So, I took all the learnings from scaling those 100+ companies and{' '}
                <span className="bg-bgDark text-white px-2.5 py-1 rounded font-medium font-body text-sm inline-block">
                  distilled them into a comprehensive manual.
                </span>{' '}
                Every principle, action step, and template gathered in one place.
              </p>
            </div>

            {/* Bottom Slogan Quote Block */}
            <div className="bg-[#FAF6EE]/60 border border-accentGold/20 rounded-2xl p-8 my-12 text-center max-w-2xl mx-auto shadow-sm relative overflow-hidden">
              <p className="text-lg sm:text-xl font-serif text-textSecondary leading-relaxed">
                That is the exact reason <span className="italic text-textPrimary font-semibold">I published this book.</span> <br />
                That is why the <span className="font-bold text-accentGold font-heading">Sales Overflow Framework</span> was created — <br />
                <span className="italic text-textPrimary font-semibold">to help founders escape the chase and build a magnetic business.</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
