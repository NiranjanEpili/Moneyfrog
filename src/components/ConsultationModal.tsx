"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Phone, Mail, Clock } from "lucide-react";
import { COMPANY } from "@/data/company";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function ConsultationModal({ isOpen, onClose, defaultProduct }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    countryOfResidence: "India",
    areaOfInterest: defaultProduct || "General Consultation",
    preferredContactMethod: "Phone Call",
    message: "",
    consent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (defaultProduct) {
      setFormData((prev) => ({ ...prev, areaOfInterest: defaultProduct }));
    }
  }, [defaultProduct]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.fullName.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg("Please enter a valid contact phone number.");
      return;
    }
    if (!formData.consent) {
      setErrorMsg("Please agree to the privacy policy to proceed.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setIsSuccess(true);
      } else {
        setErrorMsg(resData.message || "Unable to submit your request. Please try again or call us directly.");
      }
    } catch {
      setErrorMsg("Network error. Please try again or reach out directly at " + COMPANY.phones.primary);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    setErrorMsg("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/60 backdrop-blur-md transition-all duration-300">
      <div
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl sm:rounded-[2rem] shadow-2xl border border-black/[0.08] p-4 sm:p-6 md:p-8 transition-all transform scale-100 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-3 right-3 sm:top-6 sm:right-6 p-2 rounded-full text-charcoal-400 hover:text-charcoal-800 hover:bg-black/5 transition-colors z-10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-5 sm:py-8 text-center space-y-3 sm:space-y-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-forest-50 text-forest-700 rounded-full flex items-center justify-center mx-auto border border-forest-200 shadow-inner">
              <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-2xl font-serif font-bold text-forest-950">Consultation Request Received</h3>
            <p className="text-xs sm:text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-charcoal-900">{formData.fullName}</span>. A senior wealth
              advisor from Moneyfrog will reach out to you via {formData.preferredContactMethod.toLowerCase()} within 1 business day.
            </p>
            <div className="p-3 sm:p-4 rounded-xl bg-ivory-100 text-xs text-charcoal-600 border border-ivory-300 space-y-1">
              <p className="font-medium text-forest-900">Immediate Assistance</p>
              <p>Direct line: {COMPANY.phones.primary} | WhatsApp: {COMPANY.phones.whatsapp}</p>
            </div>
            <button
              onClick={resetAndClose}
              className="mt-3 sm:mt-6 px-7 py-2.5 sm:px-8 sm:py-3 rounded-full bg-forest-900 text-white text-xs sm:text-sm font-medium hover:bg-forest-800 transition-colors shadow-apple-sm"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-4 sm:mb-6 pr-8 sm:pr-8">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-forest-50 border border-forest-200 text-forest-800 text-[10px] sm:text-[11px] font-medium tracking-wide uppercase mb-1.5 sm:mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-forest-600" />
                Confidential Wealth Consultation
              </div>
              <h2 className="text-lg sm:text-2xl font-serif font-bold text-forest-950">A Better Financial Future Starts Here</h2>
              <p className="text-xs text-charcoal-600 mt-1">
                Schedule a one-on-one session with our experienced wealth specialists. No obligations.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 outline-none transition-all bg-ivory-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rahul@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 outline-none transition-all bg-ivory-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">Country Code</label>
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-charcoal-200 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 outline-none transition-all bg-ivory-50/50"
                  >
                    <option value="+91">🇮🇳 India (+91)</option>
                    <option value="+1">🇺🇸 USA / Canada (+1)</option>
                    <option value="+971">🇦🇪 UAE (+971)</option>
                    <option value="+65">🇸🇬 Singapore (+65)</option>
                    <option value="+44">🇬🇧 UK (+44)</option>
                    <option value="+60">🇲🇾 Malaysia (+60)</option>
                    <option value="+852">🇭🇰 Hong Kong (+852)</option>
                    <option value="+966">🇸🇦 Saudi Arabia (+966)</option>
                    <option value="+974">🇶🇦 Qatar (+974)</option>
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 outline-none transition-all bg-ivory-50/50"
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
                    placeholder="e.g. India, UAE, USA"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 outline-none transition-all bg-ivory-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">Area of Interest</label>
                  <select
                    value={formData.areaOfInterest}
                    onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-charcoal-200 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 outline-none transition-all bg-ivory-50/50"
                  >
                    <option value="General Consultation">Comprehensive Wealth Consultation</option>
                    <option value="Mutual Funds">Mutual Funds (SIP / Lumpsum)</option>
                    <option value="Stocks and Equity">Stocks & Direct Equity</option>
                    <option value="Portfolio Management Services (PMS)">Portfolio Management Services (PMS)</option>
                    <option value="Alternative Investment Funds (AIFs)">Alternative Investment Funds (AIFs)</option>
                    <option value="GIFT City Investments">GIFT City / Cross-Border Investments</option>
                    <option value="Fixed Income">Fixed Income / Bonds / FDs</option>
                    <option value="Life and Health Insurance">Life & Health Insurance</option>
                    <option value="Tax Services">Tax Advisory & NRI Tax Filing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">Preferred Contact Mode</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { mode: "Phone Call", icon: Phone },
                    { mode: "WhatsApp", icon: Clock },
                    { mode: "Email", icon: Mail },
                  ].map((item) => (
                    <button
                      key={item.mode}
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredContactMethod: item.mode })}
                      className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl border text-xs font-medium transition-all ${
                        formData.preferredContactMethod === item.mode
                          ? "border-forest-800 bg-forest-50 text-forest-900 font-semibold"
                          : "border-charcoal-200 text-charcoal-600 hover:bg-ivory-100"
                      }`}
                    >
                      <item.icon className="w-3.5 h-3.5" />
                      {item.mode}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                  Message / Specific Goals (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any specific requirements or questions..."
                  className="w-full px-3.5 py-2 rounded-xl border border-charcoal-200 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 outline-none transition-all bg-ivory-50/50 resize-none"
                />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="consentCheckbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 rounded border-charcoal-300 text-forest-700 focus:ring-forest-600 cursor-pointer"
                />
                <label htmlFor="consentCheckbox" className="text-[11px] text-charcoal-500 leading-tight cursor-pointer">
                  I authorize Moneyfrog Financial Services to contact me via phone, email, or WhatsApp regarding this inquiry.
                  Your information is kept confidential in adherence to our{" "}
                  <a href="/privacy-policy" className="underline text-forest-800 hover:text-forest-600">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-full bg-forest-900 hover:bg-forest-800 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-apple-md disabled:opacity-70 disabled:cursor-not-allowed group active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <span>Submitting Securely...</span>
                ) : (
                  <>
                    <span>Confirm Consultation Request</span>
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
