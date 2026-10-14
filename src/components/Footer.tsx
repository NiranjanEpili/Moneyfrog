"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Shield,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  ArrowUpRight,
} from "lucide-react";
import { COMPANY } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-ivory-100 border-t border-forest-900/60 pt-10 sm:pt-16 pb-8 sm:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-10 pb-8 sm:pb-16 border-b border-forest-900/60">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-forest-800 flex items-center justify-center border border-forest-700/50 shadow-inner">
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
              <span className="text-2xl font-serif font-bold tracking-tight text-white">
                moneyfrog<span className="text-forest-400">.</span>
              </span>
            </div>

            <p className="text-sm text-ivory-300/80 max-w-sm leading-relaxed">
              Simplifying your investment journey through research-backed wealth solutions, institutional products,
              and disciplined portfolio stewardship.
            </p>

            {/* Official Social Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={COMPANY.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-forest-900/80 hover:bg-forest-800 flex items-center justify-center text-ivory-200 hover:text-white transition-all border border-forest-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-forest-900/80 hover:bg-forest-800 flex items-center justify-center text-ivory-200 hover:text-white transition-all border border-forest-800"
                aria-label="X (formerly Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={COMPANY.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-forest-900/80 hover:bg-forest-800 flex items-center justify-center text-ivory-200 hover:text-white transition-all border border-forest-800"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-forest-900/80 hover:bg-forest-800 flex items-center justify-center text-ivory-200 hover:text-white transition-all border border-forest-800"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-forest-900/80 hover:bg-forest-800 flex items-center justify-center text-ivory-200 hover:text-white transition-all border border-forest-800"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* App Store Links */}
            <div className="pt-2">
              <div className="text-[11px] font-semibold tracking-wider text-forest-300 uppercase mb-2">
                Mobile Wealth App
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY.appStoreLinks.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-forest-900/60 hover:bg-forest-800 text-xs font-medium text-ivory-200 border border-forest-800 flex items-center gap-2 transition-colors"
                >
                  <span>Google Play</span>
                  <ExternalLink className="w-3 h-3 text-forest-400" />
                </a>
                <a
                  href={COMPANY.appStoreLinks.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-forest-900/60 hover:bg-forest-800 text-xs font-medium text-ivory-200 border border-forest-800 flex items-center gap-2 transition-colors"
                >
                  <span>App Store</span>
                  <ExternalLink className="w-3 h-3 text-forest-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Wealth Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-forest-300">Wealth Solutions</h4>
            <ul className="space-y-2.5 text-xs text-ivory-300/80">
              <li>
                <Link href="/solutions#wealth-creation" className="hover:text-white transition-colors">
                  Wealth Creation
                </Link>
              </li>
              <li>
                <Link href="/solutions#wealth-management" className="hover:text-white transition-colors">
                  Wealth Management
                </Link>
              </li>
              <li>
                <Link href="/solutions#wealth-protection" className="hover:text-white transition-colors">
                  Wealth Protection
                </Link>
              </li>
              <li>
                <Link href="/solutions#tax-planning" className="hover:text-white transition-colors">
                  Tax Planning & Efficiency
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors flex items-center gap-1 text-forest-400 pt-1">
                  Solutions Overview <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-forest-300">Financial Products</h4>
            <ul className="space-y-2 text-xs text-ivory-300/80">
              <li>
                <Link href="/products/mutual-funds" className="hover:text-white transition-colors">
                  Mutual Funds
                </Link>
              </li>
              <li>
                <Link href="/products/stocks-equity" className="hover:text-white transition-colors">
                  Stocks & Equity
                </Link>
              </li>
              <li>
                <Link href="/products/pms" className="hover:text-white transition-colors">
                  PMS (₹50L+)
                </Link>
              </li>
              <li>
                <Link href="/products/aifs" className="hover:text-white transition-colors">
                  AIFs (₹1Cr+)
                </Link>
              </li>
              <li>
                <Link href="/products/gift-city" className="hover:text-white transition-colors">
                  GIFT City Investments
                </Link>
              </li>
              <li>
                <Link href="/products/fixed-income" className="hover:text-white transition-colors">
                  Fixed Income & Bonds
                </Link>
              </li>
              <li>
                <Link href="/products/insurance" className="hover:text-white transition-colors">
                  Life & Health Insurance
                </Link>
              </li>
              <li>
                <Link href="/products/tax-services" className="hover:text-white transition-colors">
                  Tax Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-forest-300">Registered Office</h4>
            <div className="text-xs text-ivory-300/80 space-y-2 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-forest-400 shrink-0 mt-0.5" />
                <span>
                  723 & 724, 7th Floor, Swastik Chambers, SG Barve Marg, Chembur, Mumbai, Maharashtra 400071
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-forest-400 shrink-0" />
                <a href={`tel:${COMPANY.phones.primary}`} className="hover:text-white">
                  {COMPANY.phones.primary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-forest-400 shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                  {COMPANY.email}
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-forest-900/50 space-y-1.5 text-xs">
              <Link href="/about" className="block text-ivory-300/80 hover:text-white">
                About Moneyfrog
              </Link>
              <Link href="/insights" className="block text-ivory-300/80 hover:text-white">
                Research & Insights
              </Link>
              <Link href="/contact" className="block text-ivory-300/80 hover:text-white">
                Contact & Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Regulatory License Badges */}
        <div className="py-8 border-b border-forest-900/60 flex flex-wrap items-center justify-between gap-4 text-xs text-ivory-400">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-forest-400" />
              <span>AMFI ARN-94798 (Mutual Fund Distributor)</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-forest-400" />
              <span>IRDAI CA0450 (Corporate Agent - Insurance)</span>
            </div>
            <div>
              <span>CIN: {COMPANY.cin}</span>
            </div>
            <div>
              <span>GSTIN: {COMPANY.gstin}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-ivory-400">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white">
              Terms of Use
            </Link>
            <span>•</span>
            <Link href="/disclosures" className="hover:text-white">
              Risk Disclosures
            </Link>
          </div>
        </div>

        {/* Mandatory Regulatory Disclosures & Footnotes */}
        <div className="py-8 text-[11px] leading-relaxed text-ivory-400/70 space-y-3">
          <p>
            <strong>Regulatory & Risk Disclosures:</strong> Moneyfrog Financial Services Private Limited acts as an AMFI-registered Mutual Fund Distributor (ARN-94798) and an IRDAI-registered Corporate Agent (CA0450). Mutual fund investments are subject to market risks. Please read the Scheme Information Document (SID) and other offer documents carefully before investing. Past performance is not indicative of future returns.
          </p>
          <p>
            <strong>Portfolio Management Services (PMS) & Alternative Investment Funds (AIFs):</strong> PMS and AIF instruments are sophisticated investments subject to higher volatility and liquidity constraints. Minimum regulatory ticket size for PMS is ₹50 Lakhs and for AIFs is ₹1 Crore, as mandated by SEBI. Moneyfrog distributes third-party SEBI-registered PMS and AIF strategies and does not directly manage funds.
          </p>
          <p>
            <strong>GIFT City (IFSCA):</strong> Investments via GIFT City IFSC are governed by the International Financial Services Centres Authority and RBI FEMA/LRS regulations. Tax benefits are subject to provisions of the Indian Income Tax Act and applicable bilateral DTAA treaties.
          </p>
          <p>
            <strong>Tax Services:</strong> Tax filing assistance and cross-border advisory are facilitated in coordination with certified Chartered Accountants and independent tax consultants. Final declaration accuracy rests with the individual taxpayer.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-forest-900/60 flex flex-col md:flex-row items-center justify-between text-xs text-ivory-400/60 gap-4">
          <p>© {new Date().getFullYear()} Moneyfrog Financial Services Private Limited. All rights reserved.</p>
          <p className="text-[11px]">Crafted with institutional precision for discerning global investors.</p>
        </div>
      </div>
    </footer>
  );
}
