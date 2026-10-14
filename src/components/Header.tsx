"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  PieChart,
  TrendingUp,
  Briefcase,
  Building2,
  Globe2,
  Landmark,
  ShieldCheck,
  ReceiptText,
  Phone,
  Sparkles,
} from "lucide-react";
import ConsultationModal from "./ConsultationModal";
import { COMPANY } from "@/data/company";

const PRODUCT_ITEMS = [
  {
    title: "Mutual Funds",
    slug: "mutual-funds",
    desc: "Goal-based SIP & lump-sum investment portfolios.",
    icon: PieChart,
    badge: "Core",
  },
  {
    title: "Stocks and Equity",
    slug: "stocks-equity",
    desc: "Direct market equities driven by fundamental research.",
    icon: TrendingUp,
    badge: "Growth",
  },
  {
    title: "PMS",
    slug: "pms",
    desc: "Bespoke discretionary portfolios for affluent investors (₹50L+).",
    icon: Briefcase,
    badge: "HNI",
  },
  {
    title: "AIFs",
    slug: "aifs",
    desc: "Private equity, venture capital, and structured credit (₹1Cr+).",
    icon: Building2,
    badge: "Private",
  },
  {
    title: "GIFT City IFSC",
    slug: "gift-city",
    desc: "Tax-advantaged dollar investments & NRI global wealth.",
    icon: Globe2,
    badge: "Global",
  },
  {
    title: "Fixed Income",
    slug: "fixed-income",
    desc: "AAA Corporate FDs, listed NCDs, and structured debt yields.",
    icon: Landmark,
    badge: "Yield",
  },
  {
    title: "Insurance",
    slug: "insurance",
    desc: "High-sum term protection and comprehensive family health.",
    icon: ShieldCheck,
    badge: "Defense",
  },
  {
    title: "Tax Services",
    slug: "tax-services",
    desc: "Capital gains optimization and NRI cross-border filing.",
    icon: ReceiptText,
    badge: "Tax",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Regulatory Ticker Banner */}
      <div className="bg-forest-950 text-ivory-300 text-[11px] py-1.5 px-4 text-center font-medium border-b border-forest-900/50 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-forest-300">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-400 animate-pulse" />
              AMFI Registered Mutual Fund Distributor: {COMPANY.amfiArn}
            </span>
            <span className="text-forest-700">|</span>
            <span className="text-ivory-400">IRDAI Corporate Agent: {COMPANY.irdaiLicense}</span>
          </div>
          <div className="flex items-center gap-4 text-ivory-400">
            <a href={`tel:${COMPANY.phones.primary}`} className="hover:text-white transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-forest-400" />
              {COMPANY.phones.primary}
            </a>
            <span className="text-forest-700">|</span>
            <a href={COMPANY.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://moneyfrog.in/login" target="_blank" rel="noopener noreferrer" className="text-forest-300 hover:text-white transition-colors font-semibold">
              Client Portal →
            </a>
          </div>
        </div>
      </div>

      {/* Floating Apple-Style Glass Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/85 backdrop-blur-xl border-b border-black/[0.06] shadow-apple-sm"
            : "py-4 bg-white/60 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-forest-800 to-forest-950 flex items-center justify-center shadow-apple-sm border border-forest-700/30 group-hover:scale-105 transition-transform duration-300 shrink-0">
                {/* Refined Frog SVG Icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-forest-300"
                >
                  <circle cx="8" cy="8" r="3" fill="#22C55E" stroke="none" />
                  <circle cx="16" cy="8" r="3" fill="#22C55E" stroke="none" />
                  <path d="M4 14c0-3.3 3.6-6 8-6s8 2.7 8 6" />
                  <path d="M7 17a5 5 0 0 0 10 0" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-forest-950 font-serif leading-none">
                  moneyfrog<span className="text-forest-500">.</span>
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-semibold text-charcoal-500 mt-0.5">
                  Wealth Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className={`px-3 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  pathname === "/"
                    ? "bg-forest-900 text-white shadow-apple-sm"
                    : "text-charcoal-700 hover:text-forest-900 hover:bg-black/5"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-3 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  pathname === "/about"
                    ? "bg-forest-900 text-white shadow-apple-sm"
                    : "text-charcoal-700 hover:text-forest-900 hover:bg-black/5"
                }`}
              >
                About Us
              </Link>

              <Link
                href="/solutions"
                className={`px-3 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  pathname === "/solutions"
                    ? "bg-forest-900 text-white shadow-apple-sm"
                    : "text-charcoal-700 hover:text-forest-900 hover:bg-black/5"
                }`}
              >
                Wealth Solutions
              </Link>

              {/* Products Mega Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <Link
                  href="/products"
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    pathname?.startsWith("/products")
                      ? "bg-forest-900 text-white shadow-apple-sm"
                      : "text-charcoal-700 hover:text-forest-900 hover:bg-black/5"
                  }`}
                >
                  Products
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      productsDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {/* Dropdown Card */}
                {productsDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[540px] z-50">
                    <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl border border-black/[0.08] animate-in fade-in zoom-in-95 duration-200">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.05]">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-forest-800">
                          Financial Products (All 8 Categories)
                        </div>
                        <Link
                          href="/products"
                          className="text-[11px] font-semibold text-forest-700 hover:text-forest-900 flex items-center gap-1"
                        >
                          Explore All <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {PRODUCT_ITEMS.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/products/${item.slug}`}
                            className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-ivory-100/80 transition-colors"
                          >
                            <div className="w-8 h-8 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center shrink-0 border border-forest-200/60 group-hover:bg-forest-800 group-hover:text-white transition-all">
                              <item.icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold text-charcoal-900 group-hover:text-forest-900">
                                  {item.title}
                                </span>
                                <span className="text-[9px] uppercase px-1.5 py-0.5 rounded-full bg-ivory-200 text-charcoal-700 font-medium">
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-[10px] text-charcoal-500 line-clamp-1 mt-0.5">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/insights"
                className={`px-3 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  pathname === "/insights"
                    ? "bg-forest-900 text-white shadow-apple-sm"
                    : "text-charcoal-700 hover:text-forest-900 hover:bg-black/5"
                }`}
              >
                Insights
              </Link>

              <Link
                href="/contact"
                className={`px-3 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  pathname === "/contact"
                    ? "bg-forest-900 text-white shadow-apple-sm"
                    : "text-charcoal-700 hover:text-forest-900 hover:bg-black/5"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop CTA Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://moneyfrog.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-semibold text-charcoal-700 hover:text-forest-900 transition-colors"
              >
                Sign In
              </a>

              <button
                onClick={() => setIsConsultModalOpen(true)}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest-900 hover:bg-forest-800 text-white text-xs font-semibold shadow-apple-md transition-all duration-300 hover:shadow-apple-lg active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 text-forest-300" />
                <span>Book a Consultation</span>
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsConsultModalOpen(true)}
                className="px-3 py-1.5 rounded-full bg-forest-900 text-white text-[11px] font-semibold"
              >
                Book Call
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-charcoal-700 hover:bg-black/5"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Over Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 bottom-0 top-full z-50 bg-white/98 backdrop-blur-2xl overflow-y-auto p-4 sm:p-6 pb-24 animate-in slide-in-from-top-4 duration-300 border-t border-black/[0.06] shadow-2xl">
            <div className="flex flex-col gap-2.5">
              <Link
                href="/"
                className="px-3.5 py-2.5 rounded-xl bg-ivory-100 font-serif font-bold text-base text-forest-950"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-3.5 py-2.5 rounded-xl bg-ivory-100 font-serif font-bold text-base text-forest-950"
              >
                About Moneyfrog
              </Link>
              <Link
                href="/solutions"
                className="px-3.5 py-2.5 rounded-xl bg-ivory-100 font-serif font-bold text-base text-forest-950"
              >
                Wealth Solutions
              </Link>
              <Link
                href="/products"
                className="px-3.5 py-2.5 rounded-xl bg-ivory-100 font-serif font-bold text-base text-forest-950"
              >
                Products Overview
              </Link>

              {/* Mobile Products Grid */}
              <div className="grid grid-cols-2 gap-1.5 my-1">
                {PRODUCT_ITEMS.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/products/${item.slug}`}
                    className="p-2.5 rounded-lg bg-forest-50/70 border border-forest-100 text-[11px] font-semibold text-forest-900 flex items-center gap-1.5"
                  >
                    <item.icon className="w-3.5 h-3.5 text-forest-700 shrink-0" />
                    <span className="truncate">{item.title}</span>
                  </Link>
                ))}
              </div>

              <Link
                href="/insights"
                className="px-3.5 py-2.5 rounded-xl bg-ivory-100 font-serif font-bold text-base text-forest-950"
              >
                Insights & Education
              </Link>
              <Link
                href="/contact"
                className="px-3.5 py-2.5 rounded-xl bg-ivory-100 font-serif font-bold text-base text-forest-950"
              >
                Contact Us
              </Link>

              <div className="pt-3 border-t border-black/[0.08] flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsConsultModalOpen(true);
                  }}
                  className="w-full py-3 px-5 rounded-full bg-forest-900 text-white font-semibold text-xs sm:text-sm shadow-apple-md"
                >
                  Book a Consultation
                </button>
                <a
                  href="https://moneyfrog.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-5 rounded-full border border-forest-900/20 text-center font-semibold text-xs sm:text-sm text-forest-950"
                >
                  Client Portal Login
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
      />
    </>
  );
}
