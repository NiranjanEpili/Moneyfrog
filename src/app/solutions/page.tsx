import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, Shield, Layers, TrendingUp, ReceiptText, Sparkles } from "lucide-react";
import { WEALTH_SOLUTIONS } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Wealth Solutions | Moneyfrog Financial Services",
  description:
    "Explore Moneyfrog's 4 core wealth pillars: Wealth Creation, Active Stewardship, Wealth Protection, and Tax Planning.",
};

const PILLAR_IMAGES: Record<string, string> = {
  "wealth-creation": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
  "wealth-management": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  "wealth-protection": "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1400&q=85",
  "tax-planning": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=85",
};

export default function SolutionsPage() {
  return (
    <div className="py-8 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4 mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-900 text-[11px] sm:text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-forest-600" />
            <span>Four Integrated Wealth Pillars</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-950 tracking-tight leading-tight">
            Comprehensive Wealth Architecture
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-charcoal-700 leading-relaxed">
            True wealth management is not a collection of isolated products; it is a synchronized balance sheet strategy
            that drives capital growth, ensures downside defense, and optimizes tax retention.
          </p>
        </div>

        {/* Detailed Solutions Section */}
        <div className="space-y-8 sm:space-y-16">
          {WEALTH_SOLUTIONS.map((sol, index) => (
            <div
              key={sol.id}
              id={sol.id}
              className="scroll-mt-24 p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-white border border-black/[0.06] shadow-apple-md grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-forest-50 text-forest-800 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border border-forest-200">
                  Pillar 0{index + 1} • {sol.tagline}
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-forest-950">{sol.title}</h2>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">{sol.description}</p>

                <div className="pt-1 sm:pt-2 space-y-2 sm:space-y-2.5">
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-charcoal-900">Key Focus Areas:</h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {sol.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-charcoal-700">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-forest-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-ivory-100 border border-black/[0.04] text-xs text-charcoal-700">
                  <span className="font-semibold text-charcoal-900">Who This Serves Best: </span>
                  {sol.idealFor}
                </div>
              </div>

              {/* Right Side Card: Philosophy Quote, HD Image & Related Products */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full bg-ivory-100/70 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-black/[0.04] space-y-4 sm:space-y-6">
                {/* HD Image */}
                <div className="relative h-36 sm:h-44 rounded-xl sm:rounded-2xl overflow-hidden border border-black/[0.06] shadow-sm">
                  <Image
                    src={PILLAR_IMAGES[sol.id] || PILLAR_IMAGES["wealth-creation"]}
                    alt={sol.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-forest-300">
                    {sol.title} Strategy
                  </span>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <div className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-forest-800">
                    Guiding Philosophy
                  </div>
                  <blockquote className="text-xs sm:text-sm font-serif italic text-forest-950 leading-relaxed">
                    “{sol.quote}”
                  </blockquote>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-black/[0.06] space-y-2.5 sm:space-y-3">
                  <div className="text-[10px] sm:text-[11px] font-semibold text-charcoal-700">Connected Product Vehicles:</div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {sol.relatedProducts.map((p) => (
                      <span
                        key={p}
                        className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white text-forest-900 text-[10px] sm:text-[11px] font-semibold border border-forest-200 shadow-sm"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/contact?pillar=${sol.id}`}
                    className="w-full mt-2 sm:mt-4 py-2.5 sm:py-3 px-4 sm:px-5 rounded-full bg-forest-900 hover:bg-forest-800 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-apple-sm"
                  >
                    <span>Consult on {sol.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-20 text-center p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-forest-950 text-white space-y-3 sm:space-y-4 shadow-2xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold">Unsure Which Wealth Pillar Suits You?</h3>
          <p className="text-xs sm:text-sm text-ivory-300 max-w-xl mx-auto leading-relaxed">
            Book an exploratory portfolio review with our advisory specialists to assess where your financial strategy
            currently stands.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-forest-400 hover:bg-forest-300 text-forest-950 font-bold text-xs shadow-apple-md"
            >
              <span>Book Comprehensive Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
