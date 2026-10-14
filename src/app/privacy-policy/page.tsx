import React from "react";
import { Metadata } from "next";
import { ShieldCheck, Lock, Eye, Server, RefreshCw } from "lucide-react";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Moneyfrog Financial Services",
  description:
    "Data protection compliance and privacy policy of Moneyfrog Financial Services Private Limited.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3 pb-8 border-b border-black/[0.06]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 text-forest-800 text-xs font-semibold">
            <Lock className="w-3.5 h-3.5" />
            <span>Data Protection Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-forest-950">Privacy & Data Governance Policy</h1>
          <p className="text-xs text-charcoal-500">Effective Date: October 2025 | Last Reviewed: February 2026</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-forest-950">1. Commitment to Client Confidentiality</h2>
            <p>
              Moneyfrog Financial Services Private Limited (CIN: {COMPANY.cin}) (“Moneyfrog”, “we”, “our”, or “us”) is
              deeply committed to maintaining the highest degree of confidentiality, security, and integrity with respect
              to your personal, financial, and KYC information.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-forest-950">2. Categories of Information Collected</h2>
            <p>In order to provide regulated financial services and satisfy statutory obligations, we collect:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Identity & Demographic Information:</strong> Full name, date of birth, nationality, PAN card, Aadhaar, passport copy (for NRIs/foreign nationals).</li>
              <li><strong>Contact Information:</strong> Residential address, overseas address (where applicable), email address, and verified telephone numbers.</li>
              <li><strong>Financial Profile:</strong> Annual income bracket, source of funds, bank account numbers (for mutual fund auto-debit mandates), and risk appetite diagnostic responses.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-forest-950">3. Purpose of Processing and Regulatory Sharing</h2>
            <p>
              Your data is processed strictly for: (i) statutory KYC verification under SEBI/AMFI guidelines; (ii) transmitting
              investment instructions to registered Asset Management Companies (AMCs), RTAs (CAMS, KFintech), and insurance
              underwriters; and (iii) tax computation and filing assistance through qualified Chartered Accountants.
            </p>
            <p>
              Moneyfrog never sells, rents, or monetizes client information to third-party advertising brokers under any
              circumstance.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-forest-950">4. Data Security & Encryption</h2>
            <p>
              All data transmissions are protected using TLS 1.3 / 256-bit encryption. System access within Moneyfrog is
              strictly restricted by role-based access control and multi-factor authentication.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-forest-950">5. Grievance Officer & Contact</h2>
            <p>
              If you have any questions or grievances regarding the processing of your data, please write to our Compliance &
              Grievance Officer:
            </p>
            <div className="p-4 rounded-xl bg-ivory-100 border border-black/[0.05] text-xs">
              <p><strong>Compliance Officer:</strong> Moneyfrog Financial Services Private Limited</p>
              <p>Address: {COMPANY.address.full}</p>
              <p>Email: contact@moneyfrog.in | Phone: {COMPANY.phones.primary}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
