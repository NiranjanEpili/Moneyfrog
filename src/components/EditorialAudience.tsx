"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, ShieldCheck, Sparkles } from "lucide-react";

interface AudienceSegment {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  coreSolutions: string[];
  imageUrl: string;
}

const SEGMENTS: AudienceSegment[] = [
  {
    id: "hni",
    badge: "Private Client",
    title: "HNIs & Affluent Families",
    subtitle: "Generational Wealth Stewardship & Alpha Preservation",
    description:
      "For individuals and family offices seeking concentrated alpha generation, tax-loss harvesting, institutional PMS/AIFs, and frictionless succession planning across asset classes.",
    coreSolutions: [
      "Discretionary Portfolio Management Services (PMS ₹50L+)",
      "Category II & III Alternative Investment Funds (AIFs ₹1Cr+)",
      "Multi-generational family office consolidation & estate shielding",
    ],
    imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "nri",
    badge: "Global Indian",
    title: "NRIs & Global Indians",
    subtitle: "Seamless Cross-Border Inbound & Offshore Wealth",
    description:
      "Serving Indians in the US, UAE, Singapore, UK, and East Asia navigating dual-tax treaties (DTAA), NRE/NRO banking, property repatriation, and USD GIFT City accounts.",
    coreSolutions: [
      "GIFT City IFSC dollar-denominated funds & deposits",
      "FEMA-compliant PIS / Non-PIS equity onboarding",
      "Form 15CA & 15CB repatriation certifications via CAs",
    ],
    imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "entrepreneurs",
    badge: "Corporate & Founder",
    title: "Entrepreneurs & Executives",
    subtitle: "Treasury Management & Liquidity Event Diversification",
    description:
      "Converting corporate equity liquidity events, ESOP vesting rounds, and enterprise cash flows into liquid, tax-efficient, non-correlated personal wealth portfolios.",
    coreSolutions: [
      "Corporate surplus deployment into AAA fixed income",
      "Diversified asset allocation shielding against sector concentration",
      "Keyman insurance and business asset protection structures",
    ],
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "emerging",
    badge: "Foundation Builder",
    title: "Emerging & First-Time Investors",
    subtitle: "Disciplined Compounding & Financial Foundations",
    description:
      "Engineered for ambitious professionals building their first ₹10 Crore corpus through automated step-up SIPs, risk protection, and rigorous financial education.",
    coreSolutions: [
      "Goal-based Step-Up SIP architectures",
      "Term life & global health insurance defensive shields",
      "Direct equity & index fund compounding models",
    ],
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=85",
  },
];

interface Props {
  onOpenConsult?: (segment: string) => void;
}

export default function EditorialAudience({ onOpenConsult }: Props) {
  const [selectedId, setSelectedId] = useState("hni");
  const activeSegment = SEGMENTS.find((s) => s.id === selectedId) || SEGMENTS[0];

  return (
    <div className="py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-6 sm:mb-12 lg:mb-16 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-900 text-[11px] sm:text-xs font-semibold">
            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-forest-600" />
            <span>Tailored Advisory Segments</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-950 tracking-tight">
            Who We Serve
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
            Every investor life-stage demands distinct fiduciary solutions. Explore how Moneyfrog structures bespoke
            wealth architecture for each clientele segment.
          </p>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
          {/* Left Column: Interactive Segment Selector List (2 cols on tablet, 1 on mobile/desktop) */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3">
            {SEGMENTS.map((seg) => {
              const isSelected = seg.id === selectedId;
              return (
                <button
                  key={seg.id}
                  onClick={() => setSelectedId(seg.id)}
                  className={`p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? "bg-forest-950 text-white border-forest-700 shadow-apple-md"
                      : "bg-white text-charcoal-700 border-black/[0.06] hover:bg-ivory-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-forest-800 text-forest-300 border border-forest-700"
                          : "bg-ivory-200 text-charcoal-700"
                      }`}
                    >
                      {seg.badge}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-forest-400 animate-pulse" />
                    )}
                  </div>
                  <h3
                    className={`text-xs sm:text-base font-serif font-bold mt-1.5 sm:mt-2 ${
                      isSelected ? "text-white" : "text-forest-950"
                    }`}
                  >
                    {seg.title}
                  </h3>
                  <p
                    className={`text-[9px] sm:text-[11px] line-clamp-1 mt-0.5 sm:mt-1 ${
                      isSelected ? "text-ivory-300/80" : "text-charcoal-500"
                    }`}
                  >
                    {seg.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: High-Definition Curated Showcase (8 cols) */}
          <div className="lg:col-span-8">
            <div className="h-full rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-white border border-black/[0.06] shadow-apple-md p-4 sm:p-7 lg:p-10 flex flex-col justify-between space-y-5 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 items-center">
                {/* Text Content (7 cols) */}
                <div className="md:col-span-7 space-y-2.5 sm:space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-forest-50 text-forest-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-forest-200">
                    {activeSegment.badge} Strategy
                  </div>

                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-serif font-bold text-forest-950">
                    {activeSegment.title}
                  </h3>
                  <p className="text-xs font-semibold text-charcoal-500">{activeSegment.subtitle}</p>

                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">{activeSegment.description}</p>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-charcoal-900 block">
                      Prioritized Solutions:
                    </span>
                    {activeSegment.coreSolutions.map((sol, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-charcoal-800">
                        <ShieldCheck className="w-3.5 h-3.5 text-forest-600 shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* High-Resolution Curated Imagery (5 cols) */}
                <div className="md:col-span-5 relative h-44 sm:h-64 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden border border-black/[0.08] shadow-md">
                  <Image
                    src={activeSegment.imageUrl}
                    alt={activeSegment.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 sm:pt-6 border-t border-black/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                <span className="text-[11px] sm:text-xs text-charcoal-500 text-center sm:text-left">
                  Schedule a private conversation to explore suitability for this segment.
                </span>
                <button
                  onClick={() => onOpenConsult?.(activeSegment.title)}
                  className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-forest-900 hover:bg-forest-800 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-apple-sm"
                >
                  <span>Inquire for {activeSegment.title.split(" ")[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
