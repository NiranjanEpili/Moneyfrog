"use client";

import React, { useState, useMemo } from "react";
import { Sparkles, ArrowRight, ShieldCheck, TrendingUp, Calculator } from "lucide-react";

interface SimulatorProps {
  onOpenConsult?: (product: string) => void;
}

export default function WealthGrowthSimulator({ onOpenConsult }: SimulatorProps) {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(25000);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [years, setYears] = useState<number>(15);
  const [annualStepUp, setAnnualStepUp] = useState<number>(10);

  // Calculate wealth compounding with optional annual step up
  const calculations = useMemo(() => {
    let totalInvested = 0;
    let totalValue = 0;
    const monthlyRate = expectedReturn / 12 / 100;
    let currentMonthly = monthlyInvestment;

    const yearlyData: { year: number; invested: number; value: number }[] = [];

    for (let y = 1; y <= years; y++) {
      for (let m = 1; m <= 12; m++) {
        totalInvested += currentMonthly;
        totalValue = (totalValue + currentMonthly) * (1 + monthlyRate);
      }
      yearlyData.push({
        year: y,
        invested: Math.round(totalInvested),
        value: Math.round(totalValue),
      });

      // Apply annual step-up
      if (annualStepUp > 0) {
        currentMonthly = currentMonthly * (1 + annualStepUp / 100);
      }
    }

    const returnsEarned = Math.max(0, Math.round(totalValue - totalInvested));

    return {
      totalInvested: Math.round(totalInvested),
      returnsEarned,
      futureValue: Math.round(totalValue),
      yearlyData,
    };
  }, [monthlyInvestment, expectedReturn, years, annualStepUp]);

  // Format currency in Indian Lakhs/Crores format
  const formatINR = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹${val.toLocaleString("en-IN")}`;
  };

  const investedPercent = Math.round(
    (calculations.totalInvested / Math.max(1, calculations.futureValue)) * 100
  );
  const returnPercent = 100 - investedPercent;

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-gradient-to-br from-forest-950 via-forest-900 to-[#0A2619] p-1.5 sm:p-2 md:p-3 border border-forest-800/80 shadow-2xl text-white">
      <div className="rounded-xl sm:rounded-2xl lg:rounded-[2.2rem] bg-forest-950/80 backdrop-blur-xl p-4 sm:p-7 md:p-10 border border-white/[0.08]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 pb-5 sm:pb-8 border-b border-forest-800/60">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-forest-800/60 border border-forest-700/60 text-forest-300 text-[11px] sm:text-xs font-semibold mb-2">
              <Calculator className="w-3.5 h-3.5" />
              Interactive Wealth Horizon Simulator
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white">
              The Physics of Long-Term Compounding
            </h3>
            <p className="text-xs md:text-sm text-ivory-300/80 mt-1">
              Visualize how disciplined allocation and modest annual step-ups transform capital.
            </p>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-forest-300 bg-forest-900/90 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl border border-forest-800 self-start md:self-auto">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-forest-400" />
            <span>Mathematical Projection Model</span>
          </div>
        </div>

        {/* Sliders & Outputs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-5 sm:pt-8">
          {/* Controls (Left 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Monthly Investment */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-ivory-300">Monthly Contribution</label>
                <span className="text-sm font-bold text-forest-400 bg-forest-900/80 px-3 py-1 rounded-xl border border-forest-700/60">
                  {formatINR(monthlyInvestment)} / mo
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full h-2 bg-forest-900 rounded-lg appearance-none cursor-pointer accent-forest-400"
              />
              <div className="flex justify-between text-[10px] text-ivory-400/60">
                <span>₹5,000</span>
                <span>₹1,00,000</span>
                <span>₹2,50,000</span>
              </div>
            </div>

            {/* Time Horizon */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-ivory-300">Investment Horizon</label>
                <span className="text-sm font-bold text-forest-400 bg-forest-900/80 px-3 py-1 rounded-xl border border-forest-700/60">
                  {years} Years
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="30"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-forest-900 rounded-lg appearance-none cursor-pointer accent-forest-400"
              />
              <div className="flex justify-between text-[10px] text-ivory-400/60">
                <span>3 Years</span>
                <span>15 Years</span>
                <span>30 Years</span>
              </div>
            </div>

            {/* Expected Return */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-ivory-300">Expected Annual Growth</label>
                <span className="text-sm font-bold text-forest-400 bg-forest-900/80 px-3 py-1 rounded-xl border border-forest-700/60">
                  {expectedReturn}% p.a.
                </span>
              </div>
              <input
                type="range"
                min="8"
                max="16"
                step="0.5"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full h-2 bg-forest-900 rounded-lg appearance-none cursor-pointer accent-forest-400"
              />
              <div className="flex justify-between text-[10px] text-ivory-400/60">
                <span>8% (Conservative)</span>
                <span>12% (Balanced Equity)</span>
                <span>16% (Aggressive)</span>
              </div>
            </div>

            {/* Annual Step-Up */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-ivory-300">Annual Step-Up (% Increase)</label>
                <span className="text-sm font-bold text-forest-400 bg-forest-900/80 px-3 py-1 rounded-xl border border-forest-700/60">
                  {annualStepUp}% yearly
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                step="5"
                value={annualStepUp}
                onChange={(e) => setAnnualStepUp(Number(e.target.value))}
                className="w-full h-2 bg-forest-900 rounded-lg appearance-none cursor-pointer accent-forest-400"
              />
              <div className="flex justify-between text-[10px] text-ivory-400/60">
                <span>0% (Flat SIP)</span>
                <span>10% (Income-Matched)</span>
                <span>20% (Aggressive)</span>
              </div>
            </div>
          </div>

          {/* Results Summary & Visualization (Right 6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-forest-900/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-forest-800/80">
            <div>
              <div className="text-[10px] sm:text-[11px] font-semibold text-forest-300 uppercase tracking-widest mb-1">
                Projected Wealth Creation
              </div>
              <div className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
                {formatINR(calculations.futureValue)}
              </div>
              <p className="text-xs text-ivory-300/70 mt-1">
                Estimated maturity corpus over {years} years at {expectedReturn}% growth.
              </p>

              {/* Progress Bar Split */}
              <div className="mt-4 sm:mt-6 space-y-2">
                <div className="h-3 sm:h-3.5 w-full bg-forest-950 rounded-full overflow-hidden flex p-0.5 border border-forest-800">
                  <div
                    style={{ width: `${investedPercent}%` }}
                    className="bg-forest-600 rounded-l-full transition-all duration-500"
                    title={`Invested: ${investedPercent}%`}
                  />
                  <div
                    style={{ width: `${returnPercent}%` }}
                    className="bg-forest-400 rounded-r-full transition-all duration-500"
                    title={`Growth: ${returnPercent}%`}
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-forest-600 shrink-0" />
                    <span className="text-ivory-300">Invested: </span>
                    <strong className="text-white">{formatINR(calculations.totalInvested)}</strong>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-forest-400 shrink-0" />
                    <span className="text-ivory-300">Compounded Growth: </span>
                    <strong className="text-forest-300">{formatINR(calculations.returnsEarned)}</strong>
                  </div>
                </div>
              </div>

              {/* Compounding Multiplier Note */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-forest-950/70 border border-forest-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-forest-800/80 flex items-center justify-center text-forest-300 shrink-0">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-ivory-400">Wealth Multiplier</div>
                    <div className="text-xs sm:text-sm font-bold text-white">
                      {(calculations.futureValue / Math.max(1, calculations.totalInvested)).toFixed(1)}x Capital Expansion
                    </div>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-forest-400 bg-forest-900 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-forest-700 self-start sm:self-auto">
                  Power of Compounding
                </span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-forest-800/60">
              <button
                onClick={() => onOpenConsult?.("Mutual Funds")}
                className="w-full py-3 px-4 sm:py-3.5 sm:px-6 rounded-full bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-400 hover:to-forest-500 text-forest-950 font-bold text-xs sm:text-sm shadow-apple-md flex items-center justify-center gap-2 transition-all duration-300 active:scale-98 group"
              >
                <Sparkles className="w-4 h-4" />
                <span>Discuss This Personalized Allocation Strategy</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-[9px] sm:text-[10px] text-center text-ivory-400/60 mt-2">
                *Simulations are for illustrative purposes and do not represent guaranteed returns. Mutual fund investments are subject to market risks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
