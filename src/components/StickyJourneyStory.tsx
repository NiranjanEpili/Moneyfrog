"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, ShieldCheck, Compass } from "lucide-react";

interface StepItem {
  id: string;
  stepNum: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  imageUrl: string;
}

const STEPS: StepItem[] = [
  {
    id: "step-1",
    stepNum: "01",
    title: "Understand Your Goals",
    subtitle: "Comprehensive Balance Sheet & Life Horizon Diagnostic",
    description:
      "Before discussing products, we examine your existing assets, liabilities, family aspirations, tax brackets, and retirement milestones. This establishes an objective diagnostic foundation free from sales pressure.",
    deliverables: [
      "Holistic net-worth & cash flow mapping",
      "Risk tolerance and drawdown capacity profiling",
      "Tax residency & cross-border constraint review",
    ],
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "step-2",
    stepNum: "02",
    title: "Explore Suitable Solutions",
    subtitle: "Independent Screening Across Eight Asset Classes",
    description:
      "We screen institutional opportunities across mutual funds, direct equities, PMS, AIFs, and fixed income. Suitability criteria guarantee that high-volatility or illiquid instruments are deployed only where statutory criteria are satisfied.",
    deliverables: [
      "Rigorous downside capture & rolling return screening",
      "Accredited investor threshold verification (PMS ₹50L / AIF ₹1Cr)",
      "Asset-class correlation and diversification stress-testing",
    ],
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "step-3",
    stepNum: "03",
    title: "Build Your Financial Strategy",
    subtitle: "Frictionless Mandate Setup & Structured Execution",
    description:
      "Execution should be elegant and paperless. We coordinate complete KYC documentation, automate systematic investment mandates, and synchronize multi-currency transfers through verified IFSC and banking rails.",
    deliverables: [
      "Seamless digital onboarding and unified demat integration",
      "Tax-loss harvesting and step-up mandate automation",
      "Consolidated family and NRI account synchronization",
    ],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "step-4",
    stepNum: "04",
    title: "Review and Refine",
    subtitle: "Quarterly Health Audits & Active Portfolio Rebalancing",
    description:
      "Markets evolve, and your wealth plan must adapt. Our team conducts systematic quarterly reviews to weed out underperformers, rebalance asset bands, and capitalize on structural macroeconomic catalysts.",
    deliverables: [
      "Quarterly portfolio health check diagnostics",
      "Annual tax computation and CA filing coordination",
      "Direct strategy consultations with senior wealth advisors",
    ],
    imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=85",
  },
];

export default function StickyJourneyStory() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStep = STEPS[activeIdx];

  return (
    <div className="py-10 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-6 sm:mb-12 lg:mb-16 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-900 text-[11px] sm:text-xs font-semibold">
            <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-forest-600" />
            <span>Consultative Framework</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-950 tracking-tight">
            Our Four-Step Investment Journey
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
            A disciplined, fiduciary-first methodology that turns aspirational financial goals into a measurable,
            resilient portfolio strategy.
          </p>
        </div>

        {/* Step Navigation Pill Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-10">
          {STEPS.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveIdx(idx)}
              className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                activeIdx === idx
                  ? "bg-forest-950 text-white border-forest-700 shadow-apple-md"
                  : "bg-white text-charcoal-700 border-black/[0.06] hover:bg-ivory-100"
              }`}
            >
              <span
                className={`text-lg sm:text-2xl font-serif font-bold ${
                  activeIdx === idx ? "text-forest-400" : "text-charcoal-400"
                }`}
              >
                {s.stepNum}
              </span>
              <span className="text-[10px] sm:text-xs font-bold mt-1 sm:mt-2 leading-tight">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Layout */}
        <div className="rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-white border border-black/[0.06] shadow-apple-md p-4 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left: Detailed Step Copy & Deliverables */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="space-y-1 sm:space-y-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-forest-700">
                Phase {activeStep.stepNum} • Execution Process
              </span>
              <h3 className="text-lg sm:text-2xl lg:text-3xl font-serif font-bold text-forest-950">{activeStep.title}</h3>
              <p className="text-xs font-semibold text-charcoal-500">{activeStep.subtitle}</p>
            </div>

            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">{activeStep.description}</p>

            <div className="pt-1 space-y-2">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-charcoal-900 block">
                Key Strategic Deliverables:
              </span>
              {activeStep.deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-charcoal-800">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-forest-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => setActiveIdx((prev) => (prev + 1) % STEPS.length)}
                className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-forest-900 hover:bg-forest-800 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-apple-sm"
              >
                <span>Proceed to Next Phase</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] sm:text-xs text-charcoal-500 font-medium">
                Step {activeIdx + 1} of {STEPS.length}
              </span>
            </div>
          </div>

          {/* Right: Curated High-Definition Imagery */}
          <div className="lg:col-span-5 relative h-48 sm:h-80 lg:h-96 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-black/[0.08] shadow-apple-md">
            <Image
              src={activeStep.imageUrl}
              alt={activeStep.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-3 rounded-xl bg-forest-950/80 backdrop-blur-md text-[10px] sm:text-[11px] text-ivory-200 border border-forest-800">
              <span className="font-semibold text-white">Stewardship Standard: </span>
              Objective financial metrics with full regulatory suitability.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
