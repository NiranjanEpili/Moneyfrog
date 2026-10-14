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
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";

export default function ProductsPage() {
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const categories = ["All", "Wealth Accumulation", "High Net Worth", "Capital Preservation", "Cross-Border Wealth"];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filterCategory === "All") return true;
    if (filterCategory === "Wealth Accumulation")
      return p.category === "Wealth Accumulation" || p.category === "Capital Growth";
    if (filterCategory === "High Net Worth")
      return p.category === "High Net Worth" || p.category === "Private Wealth";
    if (filterCategory === "Capital Preservation")
      return p.category === "Capital Preservation" || p.category === "Wealth Protection";
    if (filterCategory === "Cross-Border Wealth")
      return p.category === "Cross-Border Wealth" || p.category === "Financial Efficiency";
    return true;
  });

  return (
    <div className="py-8 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4 mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-900 text-[11px] sm:text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-forest-600" />
            <span>Regulated Financial Products Suite</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-950 tracking-tight leading-tight">
            Institutional Quality Across Every Asset Class
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-charcoal-700 leading-relaxed">
            Moneyfrog curates and distributes leading third-party investment products, matching accredited investors and
            families with the appropriate instruments for their time horizon and risk tolerance.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-6 sm:mb-10 pb-4 border-b border-black/[0.06]">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-charcoal-500 mr-2">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filter Asset Classes:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold transition-all ${
                filterCategory === cat
                  ? "bg-forest-900 text-white shadow-apple-sm"
                  : "bg-white text-charcoal-700 border border-black/[0.08] hover:bg-ivory-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid with HD Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-white border border-black/[0.06] shadow-apple-sm hover:shadow-apple-md hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* High Resolution Category Image Header */}
                <div className="relative h-40 sm:h-48 w-full overflow-hidden">
                  <Image
                    src={prod.imageUrl}
                    alt={prod.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent" />
                  <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between">
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-forest-950/80 text-forest-300 backdrop-blur-md border border-forest-700">
                      {prod.badge}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-white/90 font-medium bg-black/40 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                      {prod.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">{prod.title}</h3>
                  </div>
                </div>

                <div className="p-4 sm:p-8 space-y-4 sm:space-y-5">
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">{prod.shortDesc}</p>

                  {/* Specs Box */}
                  <div className="grid grid-cols-1 xs:grid-cols-3 gap-2 p-3 sm:p-3.5 rounded-2xl bg-ivory-100/70 border border-black/[0.04] text-[11px]">
                    <div className="flex xs:block justify-between items-center py-0.5 xs:py-0 border-b xs:border-b-0 border-black/[0.04]">
                      <span className="block text-charcoal-400">Min. Commitment</span>
                      <strong className="text-charcoal-900">{prod.minInvestment}</strong>
                    </div>
                    <div className="flex xs:block justify-between items-center py-0.5 xs:py-0 border-b xs:border-b-0 border-black/[0.04]">
                      <span className="block text-charcoal-400">Horizon</span>
                      <strong className="text-charcoal-900">{prod.horizon}</strong>
                    </div>
                    <div className="flex xs:block justify-between items-center py-0.5 xs:py-0">
                      <span className="block text-charcoal-400">Risk Profile</span>
                      <strong className="text-charcoal-900">{prod.riskProfile}</strong>
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-1.5 pt-1">
                    {prod.keyBenefits.slice(0, 2).map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-charcoal-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-8 pt-0 border-t border-black/[0.04] mt-2 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] text-charcoal-500 font-medium">{prod.category}</span>
                <Link
                  href={`/products/${prod.slug}`}
                  className="inline-flex items-center gap-1.5 px-5 sm:px-6 py-2.5 rounded-full bg-forest-900 hover:bg-forest-800 text-white text-xs font-semibold transition-colors shadow-apple-sm"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Disclosure Box */}
        <div className="mt-16 p-6 rounded-2xl bg-ivory-200/60 border border-black/[0.05] text-xs text-charcoal-600 space-y-2">
          <p className="font-semibold text-forest-950">Statutory Notice on Investment Distribution:</p>
          <p>
            Moneyfrog Financial Services Private Limited operates as an AMFI-registered Mutual Fund Distributor (ARN-94798)
            and IRDAI-registered Corporate Agent (CA0450). Third-party products such as PMS and AIFs are distributed only to
            eligible investors meeting statutory net-worth and minimum commitment criteria under SEBI guidelines.
          </p>
        </div>
      </div>
    </div>
  );
}
