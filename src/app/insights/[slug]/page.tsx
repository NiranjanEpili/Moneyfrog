import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, Clock, Calendar, ShieldCheck, CheckCircle2, ArrowRight, Share2, BookOpen } from "lucide-react";
import { INSIGHTS } from "@/data/insights";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INSIGHTS.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Moneyfrog Insights",
    };
  }

  return {
    title: `${article.title} | Moneyfrog Insights`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
    },
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = INSIGHTS.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = INSIGHTS.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-500 hover:text-forest-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Insights & Academy</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="space-y-4 pb-8 border-b border-black/[0.06]">
          <div className="flex items-center gap-3 text-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-forest-50 text-forest-800 border border-forest-200">
              {article.category}
            </span>
            <span className="text-charcoal-400">•</span>
            <span className="text-charcoal-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span className="text-charcoal-400">•</span>
            <span className="text-charcoal-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-forest-950 tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-serif italic">
            {article.summary}
          </p>

          <div className="pt-2 flex items-center justify-between text-xs text-charcoal-600">
            <div>
              <span className="font-semibold text-forest-950">{article.author}</span>
              <span className="text-charcoal-400"> — {article.authorRole}</span>
            </div>
          </div>
        </div>

        {/* Key Takeaways Callout Card */}
        <div className="my-10 p-6 md:p-8 rounded-[2rem] bg-forest-950 text-white shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-forest-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-forest-400" />
            <span>Executive Takeaways</span>
          </div>
          <ul className="space-y-2.5">
            {article.takeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ivory-200">
                <CheckCircle2 className="w-4 h-4 text-forest-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body */}
        <div className="space-y-6 text-sm sm:text-base text-charcoal-800 leading-relaxed">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 p-5 rounded-2xl bg-ivory-200/60 border border-black/[0.05] text-xs text-charcoal-600 space-y-1">
          <strong className="text-forest-950">Statutory Notice: </strong>
          <span>
            This perspective is published for financial education and informational purposes only. It does not constitute
            an offer or recommendation to buy or sell securities. Past performance is not indicative of future results.
          </span>
        </div>

        {/* Consultation Action Banner */}
        <div className="mt-16 p-8 rounded-[2rem] bg-forest-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-serif font-bold text-white">Have Questions Regarding This Subject?</h3>
            <p className="text-xs text-ivory-300">
              Speak with Moneyfrog’s specialized advisory desk for personalized guidance.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-forest-400 hover:bg-forest-300 text-forest-950 font-bold text-xs shrink-0 transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>

        {/* Related Articles */}
        <div className="mt-20 pt-10 border-t border-black/[0.06] space-y-6">
          <h3 className="text-xl font-serif font-bold text-forest-950">Related Perspectives</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/insights/${rel.slug}`}
                className="p-6 rounded-2xl bg-white border border-black/[0.06] hover:shadow-apple-md transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-ivory-200 text-charcoal-700">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-serif font-bold text-forest-950 mt-2 hover:text-forest-700">
                    {rel.title}
                  </h4>
                </div>
                <div className="flex items-center justify-between text-xs text-charcoal-500 pt-2 border-t border-black/[0.04]">
                  <span>{rel.readTime}</span>
                  <span className="font-semibold text-forest-800 flex items-center gap-1">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
