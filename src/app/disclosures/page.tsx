import React from "react";
import { Metadata } from "next";
import { ShieldAlert, AlertTriangle, FileCheck, Landmark, Building2, Shield } from "lucide-react";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Risk Disclosures & Regulatory Notes | Moneyfrog",
  description:
    "Comprehensive regulatory disclosures and risk factors across Mutual Funds, Equities, PMS, AIFs, GIFT City, and Insurance.",
};

export default function DisclosuresPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3 pb-8 border-b border-black/[0.06]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-800 text-xs font-semibold border border-red-200">
            <ShieldAlert className="w-4 h-4 text-red-700" />
            <span>Statutory Compliance Disclosures</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-forest-950">
            Regulatory & Product Risk Disclosures
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
            Please read these statutory risk disclosures thoroughly prior to executing any investment allocation.
            Moneyfrog Financial Services Private Limited believes in complete transparency regarding market risks.
          </p>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
          {/* General Warning */}
          <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-950">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>General Market Risk Notice</span>
            </div>
            <p className="text-amber-900/90">
              Investments in financial instruments including securities, mutual funds, portfolio management services,
              and alternative investment funds are subject to market risks, interest rate fluctuations, liquidity constraints,
              and macroeconomic volatility. Moneyfrog does not guarantee any returns or capital preservation unless
              explicitly backed by sovereign or contractually guaranteed statutory instruments.
            </p>
          </div>

          {/* 1. Mutual Funds */}
          <section className="space-y-2 p-6 rounded-2xl bg-white border border-black/[0.05]">
            <h2 className="text-base font-bold text-forest-950">1. Mutual Funds (AMFI ARN-94798)</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-charcoal-600">
              <li>
                Mutual fund investments are subject to market risks. Please read the Scheme Information Document (SID),
                Statement of Additional Information (SAI), Key Information Memorandum (KIM), and other scheme-related
                documents carefully before investing.
              </li>
              <li>
                Past performance of mutual fund schemes is not indicative of future results and may not provide a basis for
                comparison with other investments.
              </li>
              <li>
                Moneyfrog Financial Services Private Limited is registered with AMFI as a Mutual Fund Distributor (ARN-94798).
                We earn commissions from Asset Management Companies (AMCs) as per statutory SEBI guidelines. Commission
                structures are disclosed upon request and in periodic transaction statements.
              </li>
            </ul>
          </section>

          {/* 2. Direct Stocks & Equities */}
          <section className="space-y-2 p-6 rounded-2xl bg-white border border-black/[0.05]">
            <h2 className="text-base font-bold text-forest-950">2. Stocks & Direct Equity</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-charcoal-600">
              <li>
                Direct equity investments carry business, sectoral, and market risk. Stock values can fluctuate widely due
                to earnings reports, economic policy shifts, and liquidity conditions.
              </li>
              <li>
                Moneyfrog facilitates equity execution in partnership with authorized SEBI-registered stockbrokers and
                depository participants.
              </li>
            </ul>
          </section>

          {/* 3. PMS */}
          <section className="space-y-2 p-6 rounded-2xl bg-white border border-black/[0.05]">
            <h2 className="text-base font-bold text-forest-950">3. Portfolio Management Services (PMS)</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-charcoal-600">
              <li>
                As mandated by the Securities and Exchange Board of India (SEBI), the statutory minimum investment ticket for
                Portfolio Management Services is ₹50,00,000 (Rupees Fifty Lakhs).
              </li>
              <li>
                Moneyfrog acts as an institutional distributor of third-party SEBI-registered PMS strategies and does not
                directly manage discretionary portfolios.
              </li>
              <li>
                PMS strategies may maintain concentrated positions (typically 15 to 25 securities), which can exhibit higher
                volatility than broadly diversified mutual funds.
              </li>
            </ul>
          </section>

          {/* 4. AIFs & GIFT City */}
          <section className="space-y-2 p-6 rounded-2xl bg-white border border-black/[0.05]">
            <h2 className="text-base font-bold text-forest-950">4. Alternative Investment Funds (AIF) & GIFT City (IFSCA)</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-charcoal-600">
              <li>
                AIF Category I, II, and III products are sophisticated, high-risk instruments intended strictly for Accredited
                or High Net Worth Investors with statutory minimum commitment thresholds of ₹1,00,00,000 (Rupees One Crore) as
                governed by SEBI.
              </li>
              <li>
                AIF investments often feature extended lock-in periods (typically 3 to 7+ years) and limited secondary market
                liquidity. Investors must review the Private Placement Memorandum (PPM) carefully.
              </li>
              <li>
                Investments routed through Gujarat International Finance Tec-City (GIFT City) are governed by the International
                Financial Services Centres Authority (IFSCA) and RBI FEMA regulations. Tax benefits are subject to compliance
                with Indian tax codes and bilateral DTAA treaties.
              </li>
            </ul>
          </section>

          {/* 5. Fixed Income */}
          <section className="space-y-2 p-6 rounded-2xl bg-white border border-black/[0.05]">
            <h2 className="text-base font-bold text-forest-950">5. Fixed Income (FDs, NCDs, MLDs)</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-charcoal-600">
              <li>
                Corporate Fixed Deposits and debentures are credit obligations of the issuing corporate body and carry issuer
                credit and default risk. Ratings assigned by credit rating agencies (CRISIL, ICRA, CARE) are opinions, not
                guarantees.
              </li>
              <li>
                Market-Linked Debentures (MLDs) are subject to specific underlying index performance and may result in
                variable payout outcomes upon maturity.
              </li>
            </ul>
          </section>

          {/* 6. Insurance */}
          <section className="space-y-2 p-6 rounded-2xl bg-white border border-black/[0.05]">
            <h2 className="text-base font-bold text-forest-950">6. Insurance (IRDAI CA0450)</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-charcoal-600">
              <li>
                Insurance is a subject matter of solicitation. Please read policy terms, exclusions, and claim clauses carefully
                before concluding any purchase.
              </li>
              <li>
                Moneyfrog Financial Services Private Limited acts as a Corporate Agent registered with IRDAI (Registration No.:
                CA0450). Moneyfrog does not underwrite risk or act as an insurance carrier.
              </li>
            </ul>
          </section>

          {/* 7. Tax Services */}
          <section className="space-y-2 p-6 rounded-2xl bg-white border border-black/[0.05]">
            <h2 className="text-base font-bold text-forest-950">7. Tax Advisory & Filing Services</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-charcoal-600">
              <li>
                Tax preparation and NRI compliance services are facilitated in coordination with independent, qualified
                Chartered Accountants and registered tax consultants.
              </li>
              <li>
                Final legal responsibility for the accuracy, completeness, and timeliness of declarations submitted to the
                Income Tax Department rests with the individual taxpayer.
              </li>
            </ul>
          </section>

          {/* 8. Financial Calculators */}
          <section className="space-y-2 p-6 rounded-2xl bg-white border border-black/[0.05]">
            <h2 className="text-base font-bold text-forest-950">8. Mathematical Calculators & Projections</h2>
            <p className="text-xs text-charcoal-600">
              All financial simulators, compounding calculators, and SIP tools displayed on this website are designed solely
              for mathematical demonstration and educational planning. Projected future values do not account for future tax
              amendments, exit loads, inflation volatility, or scheme-specific expense ratios.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
