"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  AlertCircle,
  ArrowLeft,
  PieChart,
  TrendingUp,
  Briefcase,
  Building2,
  Globe2,
  Landmark,
  Shield,
  ReceiptText,
} from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";
import { ProductDetail } from "@/data/products";

interface ProductTemplateProps {
  product: ProductDetail;
}

export default function ProductPageTemplate({ product }: ProductTemplateProps) {
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  return (
    <div className="py-8 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-4 sm:mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-500 hover:text-forest-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Products</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8 sm:mb-16">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-900 text-[11px] sm:text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-forest-600" />
              <span>
                {product.category} • {product.badge}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-950 tracking-tight">
              {product.title}
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-charcoal-700 leading-relaxed font-serif italic">
              {product.summary}
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <button
                onClick={() => setIsConsultOpen(true)}
                className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-forest-900 hover:bg-forest-800 text-white font-semibold text-xs sm:text-sm shadow-apple-md transition-all active:scale-95"
              >
                Schedule Consultation
              </button>
              <Link
                href="/contact"
                className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-white hover:bg-ivory-100 text-forest-950 font-semibold text-xs sm:text-sm border border-black/[0.08] shadow-apple-sm"
              >
                Inquire With Wealth Desk
              </Link>
            </div>
          </div>

          {/* Quick Specifications Card */}
          <div className="lg:col-span-5">
            <div className="double-bezel">
              <div className="double-bezel-inner space-y-5">
                <div className="flex items-center gap-3 pb-3 border-b border-black/[0.05]">
                  <div className="w-10 h-10 rounded-xl bg-forest-900 text-white flex items-center justify-center">
                    {product.id === "mutual-funds" && <PieChart className="w-5 h-5" />}
                    {product.id === "stocks-equity" && <TrendingUp className="w-5 h-5" />}
                    {product.id === "pms" && <Briefcase className="w-5 h-5" />}
                    {product.id === "aifs" && <Building2 className="w-5 h-5" />}
                    {product.id === "gift-city" && <Globe2 className="w-5 h-5" />}
                    {product.id === "fixed-income" && <Landmark className="w-5 h-5" />}
                    {product.id === "insurance" && <Shield className="w-5 h-5" />}
                    {product.id === "tax-services" && <ReceiptText className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-bold text-forest-950">Key Parameters</h3>
                    <div className="text-[10px] text-charcoal-500">Regulatory & Structural Guidelines</div>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-charcoal-700">
                  <div className="flex justify-between py-1.5 border-b border-black/[0.04]">
                    <span className="text-charcoal-500">Minimum Investment</span>
                    <strong className="text-charcoal-900">{product.minInvestment}</strong>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-black/[0.04]">
                    <span className="text-charcoal-500">Recommended Horizon</span>
                    <strong className="text-charcoal-900">{product.horizon}</strong>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-black/[0.04]">
                    <span className="text-charcoal-500">Risk Profile</span>
                    <strong className="text-charcoal-900">{product.riskProfile}</strong>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-black/[0.04]">
                    <span className="text-charcoal-500">Account Classification</span>
                    <strong className="text-charcoal-900">Individual / Family / NRI</strong>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-forest-50/70 border border-forest-100 text-[11px] text-forest-900">
                  <span className="font-semibold">Fiduciary Note: </span>
                  Suitability is evaluated against your personalized investor profile prior to allocation.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* High-Definition Feature Photography Banner */}
        <div className="relative w-full h-48 sm:h-80 md:h-[420px] rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] overflow-hidden border border-black/[0.08] shadow-apple-md mb-8 sm:mb-16">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent" />
          <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-1.5 sm:gap-2">
            <div>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-forest-400">
                Strategic Discipline
              </span>
              <h3 className="text-base sm:text-2xl font-serif font-bold">{product.title} Stewardship</h3>
            </div>
            <span className="text-[10px] sm:text-xs text-ivory-300/80 bg-forest-900/80 px-3 py-1 rounded-full border border-forest-700 backdrop-blur-md">
              Institutional Quality Standards
            </span>
          </div>
        </div>

        {/* Detailed Overview Paragraphs */}
        <div className="mb-8 sm:mb-16 space-y-3 sm:space-y-6 max-w-4xl">
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-forest-950">Detailed Solution Overview</h2>
          <div className="space-y-2.5 sm:space-y-4 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
            {product.overview.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="mb-8 sm:mb-16 p-4 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-white border border-black/[0.06] shadow-apple-sm">
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-forest-950 mb-4 sm:mb-8">Strategic Advantages & Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
            {product.keyBenefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-ivory-100/70 border border-black/[0.04]">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-forest-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="mb-8 sm:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          <div className="lg:col-span-5 space-y-2 sm:space-y-3">
            <h2 className="text-lg sm:text-2xl font-serif font-bold text-forest-950">Investor Eligibility</h2>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Statutory regulations determine eligibility criteria based on residency status, KYC validation, and
              minimum ticket sizes.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
            {product.eligibility.map((crit, i) => (
              <div key={i} className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white border border-black/[0.05]">
                <ShieldCheck className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                <span className="text-xs text-charcoal-800">{crit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Structured 4-Step Process */}
        <div className="mb-8 sm:mb-16 space-y-4 sm:space-y-8">
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-forest-950">How We Execute This Strategy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {product.processSteps.map((step, idx) => (
              <div key={idx} className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-ivory-100/80 border border-black/[0.05] space-y-2 sm:space-y-3">
                <div className="text-xl sm:text-2xl font-serif font-bold text-forest-700">0{idx + 1}</div>
                <h3 className="text-xs sm:text-sm font-bold text-forest-950">{step.title}</h3>
                <p className="text-xs text-charcoal-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Risk Disclaimer Notice */}
        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-forest-950 text-ivory-200 text-xs leading-relaxed space-y-2">
          <div className="flex items-center gap-2 text-forest-400 font-bold">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Important Product Risk Disclaimer</span>
          </div>
          <p className="text-ivory-300/80">{product.regulatoryNote}</p>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-8 sm:mt-16 text-center">
          <button
            onClick={() => setIsConsultOpen(true)}
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-forest-900 hover:bg-forest-800 text-white font-semibold text-xs sm:text-sm shadow-apple-md"
          >
            Inquire About {product.title}
          </button>
        </div>
      </div>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        defaultProduct={product.title}
      />
    </div>
  );
}
