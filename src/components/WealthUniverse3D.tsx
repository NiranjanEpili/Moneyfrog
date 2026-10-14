"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PieChart,
  TrendingUp,
  Briefcase,
  Building2,
  Globe2,
  Landmark,
  Shield,
  ReceiptText,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PRODUCTS, ProductDetail } from "@/data/products";

const ICONS: Record<string, React.ElementType> = {
  "mutual-funds": PieChart,
  "stocks-equity": TrendingUp,
  pms: Briefcase,
  aifs: Building2,
  "gift-city": Globe2,
  "fixed-income": Landmark,
  insurance: Shield,
  "tax-services": ReceiptText,
};

export default function WealthUniverse3D() {
  const [activeSlug, setActiveSlug] = useState<string>("mutual-funds");
  const activeProduct = PRODUCTS.find((p) => p.slug === activeSlug) || PRODUCTS[0];
  const ActiveIcon = ICONS[activeProduct.slug] || PieChart;

  return (
    <div className="relative w-full rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-forest-950 text-white p-4 sm:p-8 lg:p-14 border border-forest-800/80 shadow-2xl overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-forest-700/20 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 bg-gold-500/15 rounded-full blur-[120px]" />

      {/* Header */}
      <div className="relative z-10 max-w-3xl mb-6 sm:mb-10 lg:mb-12 space-y-2 sm:space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-forest-900/90 border border-forest-700/70 text-forest-300 text-[11px] sm:text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-forest-400" />
          <span>Interactive Asset Constellation</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
          The Wealth Universe
        </h2>
        <p className="text-xs sm:text-sm text-ivory-300/80 leading-relaxed max-w-2xl">
          An interconnected financial ecosystem spanning eight distinct asset classes. Select any node to inspect its
          role within a resilient private balance sheet.
        </p>
      </div>

      {/* Desktop & Tablet: Interactive Orbital Visual Ecosystem */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start lg:items-center">
        {/* Left Side: Orbit Node Selector Grid (2-col mobile, 4-col tablet, 2-col desktop) */}
        <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2 sm:gap-3">
          {PRODUCTS.map((prod) => {
            const Icon = ICONS[prod.slug] || PieChart;
            const isActive = prod.slug === activeSlug;

            return (
              <button
                key={prod.slug}
                onClick={() => setActiveSlug(prod.slug)}
                onMouseEnter={() => setActiveSlug(prod.slug)}
                className={`group relative p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between h-20 sm:h-28 lg:h-32 ${
                  isActive
                    ? "bg-forest-900 border-forest-400/80 shadow-glass-emerald scale-[1.02]"
                    : "bg-forest-950/80 border-forest-800/60 hover:bg-forest-900/60 hover:border-forest-700/80"
                }`}
              >
                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute top-2 right-2 sm:top-3 sm:right-3 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-forest-400 animate-pulse shadow-[0_0_8px_#4ADE80]" />
                )}

                <div className="flex items-center justify-between">
                  <div
                    className={`w-6 h-6 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-forest-400 text-forest-950"
                        : "bg-forest-900 text-forest-300 group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold text-ivory-400/60">
                    {prod.badge}
                  </span>
                </div>

                <div>
                  <h4
                    className={`text-[10px] sm:text-xs font-bold leading-tight transition-colors line-clamp-1 ${
                      isActive ? "text-white" : "text-ivory-200 group-hover:text-white"
                    }`}
                  >
                    {prod.title}
                  </h4>
                  <p className="text-[8px] sm:text-[10px] text-ivory-400/60 line-clamp-1 mt-0.5">{prod.minInvestment}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Showcase Display Panel for the Active Node */}
        <div className="lg:col-span-7">
          <div className="relative rounded-2xl sm:rounded-3xl bg-forest-900/90 border border-forest-700/80 p-4 sm:p-7 backdrop-blur-xl shadow-2xl transition-all duration-500">
            {/* Visual Header Strip */}
            <div className="flex items-start justify-between pb-4 sm:pb-6 border-b border-forest-800/80 gap-3">
              <div className="space-y-1 sm:space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-forest-800 text-forest-300 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border border-forest-700">
                    {activeProduct.category}
                  </span>
                  <span className="text-xs text-ivory-400/60">•</span>
                  <span className="text-[11px] sm:text-xs text-forest-400 font-semibold">{activeProduct.badge}</span>
                </div>
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight">
                  {activeProduct.title}
                </h3>
              </div>

              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-forest-800/80 text-forest-300 flex items-center justify-center shrink-0 border border-forest-700">
                <ActiveIcon className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
            </div>

            {/* High Definition Asset Image & Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 my-4 sm:my-6 items-center">
              <div className="sm:col-span-5 relative h-28 xs:h-32 sm:h-44 rounded-xl sm:rounded-2xl overflow-hidden border border-forest-700/60 shadow-lg">
                <Image
                  src={activeProduct.imageUrl}
                  alt={activeProduct.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent opacity-60" />
              </div>

              <div className="sm:col-span-7 space-y-2 sm:space-y-3">
                <p className="text-xs sm:text-sm text-ivory-200 leading-relaxed">{activeProduct.summary}</p>
                <div className="space-y-1 pt-1">
                  {activeProduct.keyBenefits.slice(0, 2).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-[10px] sm:text-[11px] text-ivory-300/80">
                      <ShieldCheck className="w-3.5 h-3.5 text-forest-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Parameter Specification Badges (Stacked on tiny mobile, 3-col on sm+) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-forest-950/80 border border-forest-800 text-xs">
              <div className="flex sm:block justify-between items-center py-1 sm:py-0 border-b sm:border-b-0 border-forest-800/50">
                <span className="block text-[9px] sm:text-[10px] text-ivory-400/70">Minimum Ticket</span>
                <strong className="text-white text-[11px] sm:text-xs font-semibold">
                  {activeProduct.minInvestment}
                </strong>
              </div>
              <div className="flex sm:block justify-between items-center py-1 sm:py-0 border-b sm:border-b-0 border-forest-800/50">
                <span className="block text-[9px] sm:text-[10px] text-ivory-400/70">Time Horizon</span>
                <strong className="text-white text-[11px] sm:text-xs font-semibold">{activeProduct.horizon}</strong>
              </div>
              <div className="flex sm:block justify-between items-center py-1 sm:py-0">
                <span className="block text-[9px] sm:text-[10px] text-ivory-400/70">Risk Profile</span>
                <strong className="text-forest-400 text-[11px] sm:text-xs font-semibold">
                  {activeProduct.riskProfile}
                </strong>
              </div>
            </div>

            {/* Action Bottom */}
            <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-forest-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <span className="text-[10px] sm:text-[11px] text-ivory-400/60 text-center sm:text-left">
                *Subject to investor risk suitability & applicable SEBI / AMFI guidelines.
              </span>
              <Link
                href={`/products/${activeProduct.slug}`}
                className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-forest-400 hover:bg-forest-300 text-forest-950 font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 shadow-apple-md"
              >
                <span>Explore Full Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
