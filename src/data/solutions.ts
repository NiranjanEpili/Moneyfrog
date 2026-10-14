export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  idealFor: string;
  relatedProducts: string[];
  quote: string;
}

export const WEALTH_SOLUTIONS: SolutionItem[] = [
  {
    id: "wealth-creation",
    slug: "wealth-creation",
    title: "Wealth Creation",
    tagline: "Compounding with Precision and Long-Term Horizon",
    description:
      "Transform surplus income and investible capital into enduring generational assets through systematic asset allocation, disciplined equity exposure, and thematic growth strategies.",
    highlights: [
      "Disciplined Systematic Investment Plans (SIP) engineered for rupee cost averaging",
      "Core-and-satellite portfolio allocation across large, mid, and flexi-cap equities",
      "Goal-based portfolio structuring for retirement, legacy creation, and education",
      "Strategic thematic allocations capitalizing on India's demographic and economic expansion",
    ],
    idealFor: "Ambitious professionals, entrepreneurs, and families seeking aggressive yet risk-managed wealth compounding.",
    relatedProducts: ["Mutual Funds", "Stocks and Equity", "Portfolio Management Services (PMS)"],
    quote: "Wealth creation is not about chasing the fastest stock; it is about staying invested in enduring business models long enough for compounding to do its heavy lifting.",
  },
  {
    id: "wealth-management",
    slug: "wealth-management",
    title: "Wealth Management",
    tagline: "Active Stewardship for Affluent Portfolios",
    description:
      "A comprehensive, fiduciary-first approach to managing accumulated wealth. We bring consolidated multi-asset visibility, active rebalancing, and bespoke institutional access under one roof.",
    highlights: [
      "Consolidated family-office style reporting covering all asset classes and custodians",
      "Direct access to discretionary Portfolio Management Services (PMS) and Category II/III AIFs",
      "Periodic rebalancing to protect accrued gains and capitalize on macro valuation shifts",
      "Dedicated senior wealth relationship managers providing continuous strategic guidance",
    ],
    idealFor: "High Net Worth Individuals (HNIs), family offices, business owners, and senior executives.",
    relatedProducts: ["PMS", "Alternative Investment Funds (AIFs)", "GIFT City Investments"],
    quote: "Managing wealth requires equal parts offense and defense: capturing market upside while ensuring drawdown protection during economic dislocations.",
  },
  {
    id: "wealth-protection",
    slug: "wealth-protection",
    title: "Wealth Protection",
    tagline: "Defending Your Family and Capital from External Shocks",
    description:
      "A fortress around your financial life. We safeguard your family's future and preserve capital stability using high-yield fixed income, sovereign debt, and comprehensive risk underwriting.",
    highlights: [
      "Human Life Value (HLV) analysis ensuring adequate high-sum-assured term coverage",
      "Global health insurance portfolios protecting against catastrophic medical costs",
      "High-grade fixed income instruments (Corporate FDs, AAA Bonds, Government Securities)",
      "Succession and nomination alignment to guarantee frictionless wealth transition",
    ],
    idealFor: "Families with dependents, retirees seeking stable cash flow, and investors prioritizing capital preservation.",
    relatedProducts: ["Fixed Income", "Life and Health Insurance"],
    quote: "A comprehensive financial plan without robust protection is simply a house built on sand. Protect before you project.",
  },
  {
    id: "tax-planning",
    slug: "tax-planning",
    title: "Tax Planning & Efficiency",
    tagline: "Maximizing Post-Tax Compounding",
    description:
      "It is not merely what you earn, but what you retain. We integrate tax efficiency into every portfolio decision, ensuring statutory compliance while legally optimizing asset class tax liabilities.",
    highlights: [
      "Tax-loss harvesting and capital gains optimization across equity and fund portfolios",
      "NRI cross-border taxation, Double Taxation Avoidance Agreements (DTAA), and TRC advisory",
      "Preparation and verification of Form 15CA and Form 15CB for outward remittances",
      "Seamless annual tax computation and filing coordination with certified Chartered Accountants",
    ],
    idealFor: "Active investors, high-income earners, and NRIs with multi-jurisdictional assets.",
    relatedProducts: ["Tax Services", "GIFT City Investments", "Mutual Funds"],
    quote: "Tax optimization is the only guaranteed risk-free return you can generate every financial year.",
  },
];
