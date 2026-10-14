import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  ShieldCheck,
  Award,
  Users2,
  TrendingUp,
  Landmark,
  ArrowRight,
  Compass,
  CheckCircle2,
  Building,
  FileCheck,
} from "lucide-react";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "About Moneyfrog | 11 Years of Trusted Wealth Stewardship",
  description:
    "Learn about Moneyfrog Financial Services Private Limited, our first-generation leadership, AMFI and IRDAI registrations, and our multi-asset approach to wealth.",
};

export default function AboutPage() {
  return (
    <div className="py-8 sm:py-16 md:py-24">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-900 text-[11px] sm:text-xs font-semibold">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-forest-600" />
            <span>Built on Integrity Since 2011</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-950 tracking-tight leading-tight">
            Stewards of Generational Wealth, Built on First-Principles Trust.
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-charcoal-700 leading-relaxed">
            Moneyfrog Financial Services Private Limited was founded with a singular conviction: that wealth
            management should be an honest, research-led partnership, not a transactional sales contest.
          </p>
        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 p-4 sm:p-8 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-forest-950 text-white shadow-2xl">
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-forest-300">11+ Years</div>
            <div className="text-[10px] sm:text-xs text-ivory-300/80 mt-1">Established Track Record</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-forest-300">₹1,700+ Cr</div>
            <div className="text-[10px] sm:text-xs text-ivory-300/80 mt-1">Managed Assets (Oct-2025)</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-forest-300">ARN-94798</div>
            <div className="text-[10px] sm:text-xs text-ivory-300/80 mt-1">AMFI Registered Distributor</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-forest-300">CA0450</div>
            <div className="text-[10px] sm:text-xs text-ivory-300/80 mt-1">IRDAI Corporate Agent</div>
          </div>
        </div>

        {/* High-Definition Architectural Banner */}
        <div className="mt-8 sm:mt-16 relative w-full h-56 sm:h-80 lg:h-96 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] overflow-hidden border border-black/[0.08] shadow-apple-md">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1600&q=85"
            alt="Moneyfrog Private Wealth Architecture"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-forest-400">
                Institutional Roots
              </span>
              <h3 className="text-base sm:text-xl font-serif font-bold">Mumbai Headquarters • Serving Global Indians</h3>
            </div>
            <span className="text-[10px] sm:text-xs text-ivory-300/90 bg-forest-900/80 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-forest-700 backdrop-blur-md">
              Established 2011 • Regulated Fiduciary
            </span>
          </div>
        </div>

        {/* Our Story & Promoters */}
        <div className="mt-10 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-forest-800">Our Origins</div>
            <h2 className="text-xl sm:text-3xl font-serif font-bold text-forest-950">
              First-Generation Promoters With Hands-On Capital Market Experience
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              Moneyfrog is led by first-generation entrepreneurs who bring decades of deep capital-market experience.
              Having guided portfolios through multiple economic and monetary cycles—from liquidity shocks to global
              bull markets—our leadership operates with the humility, vigilance, and discipline required to safeguard
              affluent capital.
            </p>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              We observed that most retail and affluent investors were burdened by fragmented financial arrangements:
              one broker for stocks, a separate bank RM selling arbitrary mutual funds, an insurance agent pushing
              high-commission endowment plans, and a distant accountant handling taxes at the final deadline.
            </p>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              Moneyfrog was engineered to solve this fragmentation—bringing all eight financial product categories together
              under a cohesive, fiduciary-first framework.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="double-bezel">
              <div className="double-bezel-inner space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-forest-900 text-white flex items-center justify-center font-bold text-xs sm:text-sm">
                  MF
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-forest-950">Corporate Identity & Verification</h3>
                <div className="space-y-2.5 sm:space-y-3 text-xs text-charcoal-700 pt-2 border-t border-black/[0.05]">
                  <div className="flex justify-between py-1 border-b border-black/[0.03]">
                    <span className="text-charcoal-500">Legal Entity</span>
                    <strong className="text-right text-[11px] sm:text-xs">{COMPANY.legalName}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-black/[0.03]">
                    <span className="text-charcoal-500">CIN</span>
                    <strong className="text-[11px] sm:text-xs">{COMPANY.cin}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-black/[0.03]">
                    <span className="text-charcoal-500">GSTIN</span>
                    <strong className="text-[11px] sm:text-xs">{COMPANY.gstin}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-black/[0.03]">
                    <span className="text-charcoal-500">AMFI Registration</span>
                    <strong className="text-forest-800 text-[11px] sm:text-xs">{COMPANY.amfiArn}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-black/[0.03]">
                    <span className="text-charcoal-500">IRDAI License</span>
                    <strong className="text-forest-800 text-[11px] sm:text-xs">{COMPANY.irdaiLicense}</strong>
                  </div>
                  <div className="pt-2 text-[10px] sm:text-[11px] text-charcoal-500 leading-relaxed">
                    Headquartered in Mumbai with full operational coverage across India and primary global NRI corridors.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Operating Principles */}
        <div className="mt-12 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14 space-y-1.5 sm:space-y-2">
            <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-forest-800">Our Ethos</div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest-950">Guiding Pillars of Our Fiduciary Practice</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {[
              {
                title: "1. No Unrealistic Promises",
                desc: "We never invent returns or promise risk-free wealth. True compounding requires patience, structural discipline, and emotional equilibrium during pullbacks.",
                icon: ShieldCheck,
              },
              {
                title: "2. Absolute Regulatory Rigor",
                desc: "Every recommendation adheres strictly to SEBI, AMFI, IRDAI, and IFSCA guidelines. We prioritize regulatory compliance and investor security above all else.",
                icon: FileCheck,
              },
              {
                title: "3. Consolidated Transparency",
                desc: "You retain direct visibility and ownership of your assets. Direct demat securities, transparent fund factsheets, and comprehensive tax reports.",
                icon: Compass,
              },
            ].map((p, i) => (
              <div key={i} className="p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] bg-white border border-black/[0.06] shadow-apple-sm space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-forest-50 text-forest-800 flex items-center justify-center border border-forest-200">
                  <p.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-forest-950">{p.title}</h3>
                <p className="text-xs text-charcoal-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-24 p-5 sm:p-10 md:p-14 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-gradient-to-br from-forest-950 to-forest-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-2xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white">
              Ready to Align Your Wealth With Your Life Aspirations?
            </h3>
            <p className="text-xs sm:text-sm text-ivory-300/80 leading-relaxed">
              Schedule a preliminary conversation with our senior advisory team in Mumbai or connect digitally from
              anywhere in the world.
            </p>
          </div>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-forest-400 hover:bg-forest-300 text-forest-950 font-bold text-xs sm:text-sm shadow-apple-md transition-all active:scale-95 shrink-0 text-center"
          >
            Schedule a Private Conversation
          </Link>
        </div>
      </div>
    </div>
  );
}
