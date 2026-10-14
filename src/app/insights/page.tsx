"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, BookOpen, Clock, Calendar, Sparkles, Filter } from "lucide-react";
import { INSIGHTS } from "@/data/insights";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "NRI Finance",
    "Wealth Management",
    "Market Perspectives",
    "Mutual Fund Education",
    "Fixed Income",
  ];

  const filteredArticles = INSIGHTS.filter((art) => {
    const matchesCat = selectedCategory === "All" || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-900 text-xs font-semibold">
            <BookOpen className="w-4 h-4 text-forest-600" />
            <span>Moneyfrog Research & Academy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-forest-950 tracking-tight">
            Financial Education & Strategic Perspectives
          </h1>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            Unbiased research, practical regulatory frameworks, and investor education designed to bring clarity to
            complex financial decisions.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-black/[0.06]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-forest-900 text-white shadow-apple-sm"
                    : "bg-white text-charcoal-700 border border-black/[0.08] hover:bg-ivory-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research topics..."
              className="w-full pl-9 pr-4 py-2 rounded-full border border-black/[0.1] bg-white text-xs outline-none focus:border-forest-700 focus:ring-2 focus:ring-forest-600/20"
            />
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-black/[0.05]">
            <p className="text-charcoal-500 text-sm">No articles matched your search or category selection.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 text-xs font-bold text-forest-900 underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group rounded-[2rem] bg-white border border-black/[0.06] shadow-apple-sm hover:shadow-apple-md hover:-translate-y-1 transition-all duration-300 p-7 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-forest-50 text-forest-800 border border-forest-200">
                      {article.category}
                    </span>
                    <span className="text-[11px] text-charcoal-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-forest-950 group-hover:text-forest-700 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-3">{article.summary}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-black/[0.05] flex items-center justify-between text-xs">
                  <span className="text-charcoal-500 font-medium">{article.date}</span>
                  <span className="font-bold text-forest-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Disclaimer Notice */}
        <div className="mt-16 p-4 rounded-xl bg-ivory-200/50 border border-black/[0.04] text-[11px] text-charcoal-500 text-center">
          *All educational articles are published for informational purposes and should not be construed as individualized investment advice. Please consult a qualified advisor before taking investment decisions.
        </div>
      </div>
    </div>
  );
}
