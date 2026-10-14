import React from "react";
import { Metadata } from "next";
import { FileText, ShieldAlert } from "lucide-react";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms and Conditions | Moneyfrog Financial Services",
  description:
    "Terms of use, service conditions, and legal parameters governing Moneyfrog Financial Services Private Limited.",
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3 pb-8 border-b border-black/[0.06]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 text-forest-800 text-xs font-semibold">
            <FileText className="w-3.5 h-3.5" />
            <span>Service Terms & Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-forest-950">Terms and Conditions of Use</h1>
          <p className="text-xs text-charcoal-500">Last Updated: February 2026</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-forest-950">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website, client portal, or services of Moneyfrog Financial Services Private Limited
              (“Moneyfrog”), you acknowledge that you have read, understood, and agreed to be legally bound by these Terms
              and Conditions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-forest-950">2. Nature of Services</h2>
            <p>
              Moneyfrog is registered with AMFI as a Mutual Fund Distributor (ARN-94798) and with IRDAI as a Corporate Agent
              (CA0450). Moneyfrog facilitates distribution and execution of financial products including mutual funds,
              third-party PMS, AIFs, fixed deposits, bonds, and insurance products.
            </p>
            <p>
              Materials provided on this website are for educational and informational purposes and do not constitute an
              unconditional offer, endorsement, or investment guarantee.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-forest-950">3. Regulatory & Jurisdictional Restrictions</h2>
            <p>
              Investment services are offered strictly in compliance with Indian regulatory frameworks, including the
              Securities and Exchange Board of India (SEBI), Reserve Bank of India (RBI), and Insurance Regulatory and
              Development Authority of India (IRDAI).
            </p>
            <p>
              Non-Resident Indians (NRIs) and overseas investors must verify that their participation conforms to the local
              regulations of their country of tax residence.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-forest-950">4. User Obligations & Accuracy of Submissions</h2>
            <p>
              You warrant that all information provided during consultation requests, account setup, and KYC verification is
              accurate, genuine, and current. You agree not to submit fraudulent, unauthorized, or misleading documentation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-forest-950">5. Limitation of Liability</h2>
            <p>
              Investments in financial instruments are subject to market risks, volatility, and potential loss of capital.
              Moneyfrog, its promoters, and directors shall not be liable for any direct, indirect, or consequential loss
              arising from market movements, changes in statutory tax laws, or third-party fund manager performance.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-forest-950">6. Governing Law & Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of the Republic of India. Any legal proceedings or disputes arising from
              these terms shall be subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
