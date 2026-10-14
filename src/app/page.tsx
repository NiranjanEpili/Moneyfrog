"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  PieChart,
  Briefcase,
  Building2,
  Globe2,
  Landmark,
  Shield,
  ReceiptText,
  ChevronRight,
  Award,
  CheckCircle2,
  PhoneCall,
  Clock,
  Compass,
} from "lucide-react";
import RealGlobeHero from "@/components/RealGlobeHero";
import WealthUniverse3D from "@/components/WealthUniverse3D";
import GlobalGlobe3D from "@/components/GlobalGlobe3D";
import StickyJourneyStory from "@/components/StickyJourneyStory";
import EditorialAudience from "@/components/EditorialAudience";
import WealthGrowthSimulator from "@/components/WealthGrowthSimulator";
import ConsultationModal from "@/components/ConsultationModal";
import Apple3DCard from "@/components/Apple3DCard";
import { INSIGHTS } from "@/data/insights";
import { COMPANY } from "@/data/company";

export default function HomePage() {
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState("General Consultation");

  // Contact section state
  const [contactState, setContactState] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    countryOfResidence: "India",
    areaOfInterest: "General Consultation",
    preferredContactMethod: "Phone Call",
    message: "",
    consent: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactError, setContactError] = useState("");

  const handleOpenConsult = (product = "General Consultation") => {
    setSelectedProductForModal(product);
    setIsConsultModalOpen(true);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactError("");

    if (!contactState.fullName.trim() || !contactState.email.trim() || !contactState.phone.trim()) {
      setContactError("Please fill out your full name, email, and phone number.");
      return;
    }
    if (!contactState.consent) {
      setContactError("Please accept the privacy policy to submit.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactState),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setContactSuccess(true);
      } else {
        setContactError(data.message || "Failed to submit. Please try again.");
      }
    } catch {
      setContactError("Network error. Please call +91 90049 32221 directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-ivory-100">
      {/* ========================================================================= */}
      {/* 1. SIGNATURE 3D HERO EXPERIENCE */}
      {/* ========================================================================= */}
      <section className="relative min-h-[80vh] lg:min-h-[95vh] flex items-center pt-4 pb-8 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Subtle Ambient Background Lighting */}
        <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-forest-500/10 via-forest-400/10 to-gold-400/5 rounded-full blur-[140px] -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full">
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 relative z-10">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-950 text-[11px] sm:text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-forest-600 animate-pulse" />
              <span>Institutional Wealth Stewardship & Advisory</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-forest-950 tracking-tight leading-[1.15]">
              Your Wealth. <br />
              Your Goals. <br />
              <span className="text-forest-700 italic">One Trusted Partner.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-charcoal-700 max-w-xl leading-relaxed">
              Discover a more considered approach to wealth management through personalized investment solutions, expert
              guidance, and a clearer view of your financial future.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <button
                onClick={() => handleOpenConsult()}
                className="group inline-flex items-center gap-2.5 sm:gap-3 px-5 py-3 sm:px-8 sm:py-4 rounded-full bg-forest-900 hover:bg-forest-800 text-white font-semibold text-xs sm:text-sm shadow-apple-md hover:shadow-apple-lg transition-all duration-300 active:scale-95"
              >
                <span>Book a Consultation</span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                </span>
              </button>

              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-4 rounded-full bg-white hover:bg-ivory-50 text-forest-950 font-semibold text-xs sm:text-sm border border-black/[0.08] shadow-apple-sm hover:shadow-apple-md transition-all duration-300 active:scale-95"
              >
                <span>Explore Wealth Solutions</span>
                <ChevronRight className="w-4 h-4 text-forest-700" />
              </Link>
            </div>

            {/* Verified Credentials Strip */}
            <div className="pt-4 sm:pt-6 border-t border-black/[0.06] grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4 max-w-lg">
              <div>
                <div className="text-lg sm:text-2xl font-serif font-bold text-forest-950">₹1,700+ Cr</div>
                <div className="text-[10px] sm:text-[11px] font-medium text-charcoal-500 mt-0.5">Managed Assets (Oct-2025)</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-serif font-bold text-forest-950">11+ Years</div>
                <div className="text-[10px] sm:text-[11px] font-medium text-charcoal-500 mt-0.5">Organisational Journey</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-lg sm:text-2xl font-serif font-bold text-forest-950">4.3 / 5</div>
                <div className="text-[10px] sm:text-[11px] font-medium text-charcoal-500 mt-0.5">Client Trust Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column: Real Photorealistic 3D Earth Globe with Financial Telemetry (6 cols) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <RealGlobeHero />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE MONEYFROG PHILOSOPHY (EDITORIAL CONTRAST) */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-16 lg:py-24 bg-white border-y border-black/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-3 sm:space-y-6">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-forest-700">The Moneyfrog Philosophy</span>
            <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-950 tracking-tight leading-[1.2]">
              “Wealth is more than numbers. <br className="hidden sm:block" />
              <span className="text-forest-700 italic">It is the future you are building for generations.”</span>
            </blockquote>
            <p className="text-xs sm:text-base text-charcoal-700 leading-relaxed max-w-2xl">
              Too often, financial services reduce life aspirations to cold return percentages and aggressive product
              pitches. At Moneyfrog, we steward your capital with patience, research-backed discipline, and absolute
              regulatory transparency.
            </p>
          </div>

          {/* Core Philosophy Blocks */}
          <div className="mt-8 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {[
              {
                title: "Holistic Balance Sheet Stewardship",
                desc: "We look across your entire financial landscape—equities, liquid reserves, real debt, and family protection—to build resilient, compounding wealth.",
              },
              {
                title: "Objective, Research-Led Allocation",
                desc: "Every fund and instrument is vetted for risk-adjusted alpha, rolling return consistency, and corporate governance before inclusion.",
              },
              {
                title: "Statutory Fiduciary Integrity",
                desc: "AMFI Registered (ARN-94798) and IRDAI Licensed (CA0450). We operate with full regulatory compliance and transparent commission disclosures.",
              },
            ].map((block, i) => (
              <Apple3DCard key={i} className="h-full">
                <div className="p-4 sm:p-8 rounded-2xl sm:rounded-[2rem] bg-ivory-100/70 border border-black/[0.05] space-y-2.5 sm:space-y-3 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-xl sm:text-2xl font-serif font-bold text-forest-800">0{i + 1}</div>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-forest-950 mt-1.5 sm:mt-2">{block.title}</h3>
                  </div>
                  <p className="text-xs text-charcoal-600 leading-relaxed mt-1 sm:mt-2">{block.desc}</p>
                </div>
              </Apple3DCard>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE WEALTH UNIVERSE (INTERACTIVE ORBITAL ECOSYSTEM) */}
      {/* ========================================================================= */}
      {/* 3. THE WEALTH UNIVERSE (INTERACTIVE ORBITAL ECOSYSTEM) */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <WealthUniverse3D />
      </section>

      {/* ========================================================================= */}
      {/* 4. WEALTH CREATION & INTERACTIVE COMPOUNDING SIMULATOR */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <WealthGrowthSimulator onOpenConsult={(prod) => handleOpenConsult(prod)} />
      </section>

      {/* ========================================================================= */}
      {/* 5. MONEYFROG'S APPROACH (STICKY 4-STEP JOURNEY WITH HD IMAGERY) */}
      {/* ========================================================================= */}
      <section className="bg-white border-y border-black/[0.05]">
        <StickyJourneyStory />
      </section>

      {/* ========================================================================= */}
      {/* 6. WHO WE SERVE (EDITORIAL ASYMMETRIC COMPOSITIONS WITH HD PHOTOGRAPHY) */}
      {/* ========================================================================= */}
      <section>
        <EditorialAudience onOpenConsult={(seg) => handleOpenConsult(seg)} />
      </section>

      {/* ========================================================================= */}
      {/* 7. GLOBAL WEALTH & 3D INTERACTIVE GLOBE */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <GlobalGlobe3D />
      </section>

      {/* ========================================================================= */}
      {/* 8. RESEARCH & INSIGHTS (LUXURY EDITORIAL MAGAZINE LAYOUT) */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-16 lg:py-24 bg-white border-t border-black/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16 gap-4 sm:gap-6">
            <div className="max-w-2xl space-y-2 sm:space-y-3">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-forest-700">
                Editorial & Market Analysis
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-950 tracking-tight">
                Research & Perspectives
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                Objective financial commentary, NRI cross-border tax analyses, and disciplined compounding frameworks
                curated by our senior research desk.
              </p>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-bold text-forest-900 hover:text-forest-700 group shrink-0"
            >
              <span>Explore All Perspectives</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Magazine-Style Grid with High-Resolution Curated Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            {INSIGHTS.slice(0, 3).map((article, idx) => {
              // Curated HD photos matching each research subject
              const articleImages = [
                "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80", // NRI global skyline
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80", // Architecture / volatility
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", // Luxury private banking
              ];

              return (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group rounded-2xl sm:rounded-[2.2rem] bg-ivory-100/60 border border-black/[0.06] hover:bg-white hover:shadow-apple-md hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div className="space-y-3 sm:space-y-4">
                    {/* Featured Image Thumbnail */}
                    <div className="relative h-36 sm:h-48 w-full overflow-hidden">
                      <Image
                        src={articleImages[idx] || articleImages[0]}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-forest-950/80 text-forest-300 backdrop-blur-md border border-forest-800">
                        {article.category}
                      </span>
                    </div>

                    <div className="p-4 sm:p-6 pt-1 sm:pt-2 space-y-2 sm:space-y-3">
                      <h3 className="text-base sm:text-xl font-serif font-bold text-forest-950 group-hover:text-forest-700 transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-3">{article.summary}</p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 pt-0 border-t border-black/[0.04] flex items-center justify-between text-[11px] sm:text-xs text-charcoal-500 mt-2 sm:mt-4">
                    <span>{article.readTime}</span>
                    <span className="font-bold text-forest-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CINEMATIC CONSULTATION CTA & LEAD FORM */}
      {/* ========================================================================= */}
      <section id="contact-form" className="py-10 sm:py-16 lg:py-24 bg-forest-950 text-white relative overflow-hidden">
        {/* Atmospheric Glow */}
        <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-forest-600/20 rounded-full blur-[140px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-forest-900 border border-forest-700 text-forest-300 text-[11px] sm:text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-forest-400" />
                <span>Private Consultation Booking</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Your Next Chapter Starts With a Better Financial Conversation.
              </h2>

              <p className="text-xs sm:text-sm text-ivory-300/80 leading-relaxed">
                Discuss your financial goals with the Moneyfrog advisory team and explore personalized solutions aligned
                with your family's future. Complete privacy and fiduciary confidentiality assured.
              </p>

              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-forest-900/60 border border-forest-800 space-y-2.5 sm:space-y-3">
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-forest-400">
                  Direct Advisory Line
                </div>
                <div className="flex items-center gap-3 text-xs text-ivory-200">
                  <PhoneCall className="w-4 h-4 text-forest-400 shrink-0" />
                  <a href={`tel:${COMPANY.phones.primary}`} className="font-semibold hover:text-white">
                    {COMPANY.phones.primary}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs text-ivory-300/70">
                  <Clock className="w-4 h-4 text-forest-400 shrink-0" />
                  <span>Monday – Saturday: 9:30 AM – 6:30 PM IST</span>
                </div>
              </div>
            </div>

            {/* Right: Embedded High-Conversion Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl sm:rounded-[2.2rem] bg-white text-charcoal-900 p-4 sm:p-8 lg:p-10 shadow-2xl border border-black/[0.08]">
                {contactSuccess ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-16 h-16 bg-forest-50 text-forest-700 rounded-full flex items-center justify-center mx-auto border border-forest-200">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-forest-950">Inquiry Confirmed</h3>
                    <p className="text-sm text-charcoal-600 max-w-md mx-auto">
                      Thank you. A senior wealth advisor from Moneyfrog will reach out to schedule your private session.
                    </p>
                    <button
                      onClick={() => setContactSuccess(false)}
                      className="px-6 py-2.5 rounded-full bg-forest-900 text-white text-xs font-semibold"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="mb-2">
                      <h3 className="text-xl font-serif font-bold text-forest-950">Schedule a Private Review</h3>
                      <p className="text-xs text-charcoal-500 mt-1">
                        Connect with an experienced advisor for customized asset allocation.
                      </p>
                    </div>

                    {contactError && (
                      <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                        {contactError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-charcoal-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={contactState.fullName}
                          onChange={(e) => setContactState({ ...contactState, fullName: e.target.value })}
                          placeholder="e.g. Vikram Mehta"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 outline-none bg-ivory-50/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-charcoal-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={contactState.email}
                          onChange={(e) => setContactState({ ...contactState, email: e.target.value })}
                          placeholder="vikram@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 outline-none bg-ivory-50/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-charcoal-700 mb-1">Country Code</label>
                        <select
                          value={contactState.countryCode}
                          onChange={(e) => setContactState({ ...contactState, countryCode: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-charcoal-200 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 outline-none bg-ivory-50/50"
                        >
                          <option value="+91">🇮🇳 India (+91)</option>
                          <option value="+1">🇺🇸 USA (+1)</option>
                          <option value="+971">🇦🇪 UAE (+971)</option>
                          <option value="+65">🇸🇬 Singapore (+65)</option>
                          <option value="+44">🇬🇧 UK (+44)</option>
                          <option value="+60">🇲🇾 Malaysia (+60)</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-semibold text-charcoal-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={contactState.phone}
                          onChange={(e) => setContactState({ ...contactState, phone: e.target.value })}
                          placeholder="90049 32221"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 outline-none bg-ivory-50/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-charcoal-700 mb-1">Country of Residence</label>
                        <input
                          type="text"
                          value={contactState.countryOfResidence}
                          onChange={(e) => setContactState({ ...contactState, countryOfResidence: e.target.value })}
                          placeholder="India, UAE, US, etc."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 outline-none bg-ivory-50/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-charcoal-700 mb-1">Area of Interest</label>
                        <select
                          value={contactState.areaOfInterest}
                          onChange={(e) => setContactState({ ...contactState, areaOfInterest: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-charcoal-200 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 outline-none bg-ivory-50/50"
                        >
                          <option value="General Consultation">Comprehensive Wealth Review</option>
                          <option value="Mutual Funds">Mutual Funds (SIP & Lumpsum)</option>
                          <option value="Stocks and Equity">Stocks and Equity</option>
                          <option value="PMS">Portfolio Management Services (₹50L+)</option>
                          <option value="AIFs">Alternative Investment Funds (₹1Cr+)</option>
                          <option value="GIFT City Investments">GIFT City IFSC Offshore Wealth</option>
                          <option value="Fixed Income">Fixed Income / Bonds / FDs</option>
                          <option value="Insurance">Life and Health Insurance</option>
                          <option value="Tax Services">Tax Advisory & NRI Filing</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">Message (Optional)</label>
                      <textarea
                        rows={2}
                        value={contactState.message}
                        onChange={(e) => setContactState({ ...contactState, message: e.target.value })}
                        placeholder="Briefly describe your goals or portfolio queries..."
                        className="w-full px-3.5 py-2 rounded-xl border border-charcoal-200 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 outline-none bg-ivory-50/50 resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="homeLeadConsent"
                        checked={contactState.consent}
                        onChange={(e) => setContactState({ ...contactState, consent: e.target.checked })}
                        className="mt-0.5 rounded border-charcoal-300 text-forest-700 cursor-pointer"
                      />
                      <label htmlFor="homeLeadConsent" className="text-[11px] text-charcoal-500 leading-tight cursor-pointer">
                        I authorize Moneyfrog to contact me regarding this inquiry. Handled in accordance with our{" "}
                        <Link href="/privacy-policy" className="underline text-forest-800">
                          Privacy Policy
                        </Link>
                        .
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-full bg-forest-900 hover:bg-forest-800 text-white font-semibold text-sm shadow-apple-md flex items-center justify-center gap-2 transition-all duration-300 active:scale-98 group disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <span>Schedule Consultation</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
        defaultProduct={selectedProductForModal}
      />
    </div>
  );
}
