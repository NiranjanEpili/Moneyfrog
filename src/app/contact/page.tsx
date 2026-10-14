"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { COMPANY } from "@/data/company";

export default function ContactPage() {
  const [formData, setFormData] = useState({
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
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg("Please fill out your full name, email, and phone number.");
      return;
    }
    if (!formData.consent) {
      setErrorMsg("Please agree to the privacy terms to submit your inquiry.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSuccess(true);
      } else {
        setErrorMsg(data.message || "Unable to submit inquiry. Please try again.");
      }
    } catch {
      setErrorMsg("Network error. Please call +91 90049 32221 directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-8 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4 mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-900 text-[11px] sm:text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-forest-600" />
            <span>Private Advisory Desk</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-950 tracking-tight">
            Schedule a Confidential Consultation
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-charcoal-700 leading-relaxed">
            Whether you are evaluating a family portfolio review, planning NRI cross-border investments, or exploring
            institutional PMS/AIF strategies, our Mumbai advisory team is at your disposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Office details & Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] bg-forest-950 text-white space-y-4 sm:space-y-6 shadow-xl">
              <div>
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-forest-400">
                  India Headquarters
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">Mumbai Advisory Office</h3>
              </div>

              <div className="space-y-4 text-xs text-ivory-200 leading-relaxed">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-forest-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Physical Location:</strong>
                    {COMPANY.address.full}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-forest-400 shrink-0" />
                  <div>
                    <strong className="text-white block">Advisory Desk Direct:</strong>
                    <a href={`tel:${COMPANY.phones.primary}`} className="hover:text-forest-300">
                      {COMPANY.phones.primary}
                    </a>{" "}
                    /{" "}
                    <a href={`tel:${COMPANY.phones.secondary}`} className="hover:text-forest-300">
                      {COMPANY.phones.secondary}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-forest-400 shrink-0" />
                  <div>
                    <strong className="text-white block">Official Email:</strong>
                    <a href={`mailto:${COMPANY.email}`} className="hover:text-forest-300">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-forest-400 shrink-0" />
                  <div>
                    <strong className="text-white block">Operating Hours:</strong>
                    Monday – Saturday: 9:30 AM – 6:30 PM IST
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY.phones.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs font-semibold flex items-center justify-center gap-2 border border-forest-700 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-forest-400" />
                  <span>Connect Directly on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5 text-forest-400" />
                </a>
              </div>
            </div>

            {/* Corporate Registration Strip */}
            <div className="p-6 rounded-2xl bg-white border border-black/[0.06] text-xs text-charcoal-700 space-y-2">
              <div className="font-bold text-forest-950">Statutory Regulatory Details</div>
              <div className="text-[11px] text-charcoal-600 space-y-1">
                <p>AMFI Registered Mutual Fund Distributor: <strong>{COMPANY.amfiArn}</strong></p>
                <p>IRDAI Registered Corporate Agent: <strong>{COMPANY.irdaiLicense}</strong></p>
                <p>Corporate Identity Number (CIN): {COMPANY.cin}</p>
                <p>GSTIN: {COMPANY.gstin}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Contact Form */}
          <div className="lg:col-span-7">
            <div className="double-bezel">
              <div className="double-bezel-inner">
                {isSuccess ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-forest-50 text-forest-700 rounded-full flex items-center justify-center mx-auto border border-forest-200">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-forest-950">Consultation Scheduled</h3>
                    <p className="text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-charcoal-900">{formData.fullName}</span>. A senior
                      advisor from Moneyfrog will get in touch with you via {formData.preferredContactMethod.toLowerCase()} within
                      24 business hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-full bg-forest-900 text-white text-xs font-semibold"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-2">
                      <h3 className="text-xl font-serif font-bold text-forest-950">Client Consultation Request</h3>
                      <p className="text-xs text-charcoal-500 mt-1">
                        Please provide your contact information to connect with our advisory desk.
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-charcoal-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Aditya Singhania"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 outline-none bg-ivory-50/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-charcoal-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="aditya@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 outline-none bg-ivory-50/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-charcoal-700 mb-1">Country Code</label>
                        <select
                          value={formData.countryCode}
                          onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-charcoal-200 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 outline-none bg-ivory-50/50"
                        >
                          <option value="+91">🇮🇳 India (+91)</option>
                          <option value="+1">🇺🇸 USA / Canada (+1)</option>
                          <option value="+971">🇦🇪 UAE (+971)</option>
                          <option value="+65">🇸🇬 Singapore (+65)</option>
                          <option value="+44">🇬🇧 UK (+44)</option>
                          <option value="+60">🇲🇾 Malaysia (+60)</option>
                          <option value="+852">🇭🇰 Hong Kong (+852)</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-semibold text-charcoal-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                          value={formData.countryOfResidence}
                          onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
                          placeholder="e.g. India, UAE, Singapore"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 outline-none bg-ivory-50/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-charcoal-700 mb-1">Area of Interest</label>
                        <select
                          value={formData.areaOfInterest}
                          onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-charcoal-200 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 outline-none bg-ivory-50/50"
                        >
                          <option value="General Consultation">Comprehensive Wealth Portfolio Audit</option>
                          <option value="Mutual Funds">Mutual Funds (SIP & Lumpsum)</option>
                          <option value="Stocks and Equity">Direct Equity Research</option>
                          <option value="PMS">Portfolio Management Services (₹50L+)</option>
                          <option value="AIFs">Alternative Investment Funds (₹1Cr+)</option>
                          <option value="GIFT City Investments">GIFT City Offshore USD Wealth</option>
                          <option value="Fixed Income">Fixed Income / Bonds / FDs</option>
                          <option value="Insurance">Life & Health Protection</option>
                          <option value="Tax Services">Tax Advisory & NRI Filing</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">Preferred Contact Mode</label>
                      <div className="grid grid-cols-3 gap-2">
                        {["Phone Call", "WhatsApp", "Email"].map((mode) => (
                          <button
                            key={mode}
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredContactMethod: mode })}
                            className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all ${
                              formData.preferredContactMethod === mode
                                ? "border-forest-800 bg-forest-50 text-forest-900 font-semibold"
                                : "border-charcoal-200 text-charcoal-600 hover:bg-ivory-100"
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">Message (Optional)</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please share any existing portfolio details or questions..."
                        className="w-full px-3.5 py-2 rounded-xl border border-charcoal-200 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 outline-none bg-ivory-50/50 resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="contactConsent"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 rounded border-charcoal-300 text-forest-700 cursor-pointer"
                      />
                      <label htmlFor="contactConsent" className="text-[11px] text-charcoal-500 leading-tight cursor-pointer">
                        I authorize Moneyfrog Financial Services to contact me regarding this consultation request. Data
                        is processed strictly under our Privacy Policy.
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
                          <span>Submit Consultation Request</span>
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
      </div>
    </div>
  );
}
