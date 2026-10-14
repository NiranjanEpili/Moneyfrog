export interface ProductDetail {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  category: string;
  badge: string;
  minInvestment: string;
  horizon: string;
  riskProfile: string;
  iconName: string;
  imageUrl: string;
  summary: string;
  overview: string[];
  keyBenefits: string[];
  eligibility: string[];
  processSteps: { title: string; desc: string }[];
  regulatoryNote: string;
}

export const PRODUCTS: ProductDetail[] = [
  {
    id: "mutual-funds",
    slug: "mutual-funds",
    title: "Mutual Funds",
    category: "Wealth Accumulation",
    badge: "Core Wealth Engine",
    shortDesc: "Disciplined SIP & lump-sum investment strategies curated across equity, hybrid, and debt asset classes.",
    minInvestment: "₹500 / month (SIP)",
    horizon: "3 to 10+ Years",
    riskProfile: "Moderate to Aggressive",
    iconName: "PieChart",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=85",
    summary:
      "A diversified basket of institutional-grade funds designed to achieve life goals, build generational compounding, and beat inflation through disciplined asset allocation.",
    overview: [
      "Access curated equity, debt, and hybrid mutual fund portfolios matched scientifically to your risk appetite and life goals.",
      "Benefit from disciplined Systematic Investment Plans (SIPs), systematic transfer plans (STP), and lumpsum allocations.",
      "Continuous rebalancing recommendations and portfolio health diagnostics to weed out underperformers.",
      "Fully digital, paperless onboarding with institutional-grade security and consolidated portfolio tracking.",
    ],
    keyBenefits: [
      "Institutional scheme selection based on rolling returns and downside capture ratio",
      "Goal-based tagging (Child education, Retirement, Dream home, Wealth creation)",
      "Automated periodic portfolio review and smart tax harvesting alerts",
      "Single consolidated dashboard for individual and family accounts",
    ],
    eligibility: [
      "Resident Indian individuals and HUFs with valid KYC (PAN and Aadhaar)",
      "Non-Resident Indians (NRIs) and OCIs holding NRE/NRO bank accounts",
      "Corporate entities, trusts, and partnership firms seeking treasury management",
    ],
    processSteps: [
      { title: "Risk Profile Diagnostic", desc: "Evaluate your time horizon, financial goals, and volatility tolerance." },
      { title: "Asset Allocation Model", desc: "Construct a strategic split between large-cap, mid-cap, flexi-cap, and debt funds." },
      { title: "Paperless Execution", desc: "Instant KYC validation and seamless automated mandate setup." },
      { title: "Continuous Review", desc: "Ongoing monitoring against benchmark indices and periodic rebalancing triggers." },
    ],
    regulatoryNote:
      "Mutual fund investments are subject to market risks. Please read the scheme information and other related documents carefully before investing. Moneyfrog is an AMFI-registered Mutual Fund Distributor (ARN-94798).",
  },
  {
    id: "stocks-equity",
    slug: "stocks-equity",
    title: "Stocks and Equity",
    category: "Capital Growth",
    badge: "Direct Capital Participation",
    shortDesc: "Direct equity investment opportunities supported by institutional research and thematic macro trends.",
    minInvestment: "₹25,000",
    horizon: "5 to 10+ Years",
    riskProfile: "High",
    iconName: "TrendingUp",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    summary:
      "Direct equity participation in India's leading structural growth stories, high-conviction sectoral themes, and vetted fundamentally sound businesses.",
    overview: [
      "Direct equity ownership provides direct participation in India's industrial, technological, and consumption expansion.",
      "Proprietary research insights focusing on corporate governance, clean balance sheets, and competitive economic moats.",
      "Thematic portfolios tailored to emerging trends like domestic manufacturing, renewable energy, and digital infrastructure.",
      "Seamless demat integration through premier depository participants and market execution partners.",
    ],
    keyBenefits: [
      "Direct fractional or full ownership of market leaders without intermediary fund fees",
      "Research coverage focused on high return on equity (RoE) and low financial leverage",
      "Disciplined entry and exit frameworks with risk management stop-loss guardrails",
      "Tax efficiency with long-term capital gains optimization strategies",
    ],
    eligibility: [
      "Indian residents with active PAN and linked Demat account",
      "NRIs under the Portfolio Investment Scheme (PIS) or Non-PIS route through designated banks",
      "Accredited investors seeking thematic equity baskets",
    ],
    processSteps: [
      { title: "Demat & Trading Setup", desc: "Link your verified demat account or initiate seamless new onboarding." },
      { title: "Thematic Basket Selection", desc: "Choose high-conviction equity themes aligned with economic catalysts." },
      { title: "Order Execution", desc: "Execute orders via secure partner brokerages with transparent trade confirmations." },
      { title: "Quarterly Earnings Tracking", desc: "Receive comprehensive analysis of portfolio companies' earnings releases." },
    ],
    regulatoryNote:
      "Equity trading and direct stock investments involve substantial market risk and volatility. Moneyfrog facilitates equity accounts in partnership with licensed SEBI registered brokers.",
  },
  {
    id: "pms",
    slug: "pms",
    title: "Portfolio Management Services (PMS)",
    category: "High Net Worth",
    badge: "Bespoke Portfolio Management",
    shortDesc: "Discretionary and non-discretionary portfolio management for HNIs, delivered by seasoned fund managers.",
    minInvestment: "₹50,00,000 (Regulatory Minimum)",
    horizon: "3 to 7+ Years",
    riskProfile: "High to Aggressive",
    iconName: "Briefcase",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    summary:
      "Tailored, actively managed equity portfolios designed specifically for affluent investors seeking concentrated alpha generation beyond traditional mutual funds.",
    overview: [
      "PMS offers personalized investment strategies managed by distinguished portfolio managers registered with SEBI.",
      "Concentrated portfolio structures (typically 15 to 25 stocks) allowing high-conviction ideas to deliver meaningful alpha.",
      "Direct ownership of individual stocks held directly in the client's dedicated Demat account.",
      "Complete transparency with real-time portfolio holdings, transaction notes, and customized corporate action management.",
    ],
    keyBenefits: [
      "Higher portfolio concentration targeting superior risk-adjusted alpha",
      "Direct communication and quarterly strategy calls with lead fund managers",
      "Flexibility in managing legacy stock holdings and strategic cash allocations",
      "Comprehensive performance reporting with auditable time-weighted returns (TWRR)",
    ],
    eligibility: [
      "High Net Worth Individuals (HNIs) meeting SEBI's minimum regulatory ticket size of ₹50 Lakhs",
      "Family offices, corporate treasuries, and Hindu Undivided Families (HUFs)",
      "Non-Resident Indians (NRIs) compliant with FEMA regulations and PIS guidelines",
    ],
    processSteps: [
      { title: "Investment Policy Statement", desc: "Formulate a personalized IPS detailing mandate objectives and constraints." },
      { title: "Manager Due Diligence", desc: "Screen across top-performing PMS strategies by investment philosophy and track record." },
      { title: "Direct Demat Allocation", desc: "Open a dedicated PMS pool account under the client's direct legal name." },
      { title: "Bespoke Reporting", desc: "Access institutional quarterly reviews, audit statements, and tax pass-through reports." },
    ],
    regulatoryNote:
      "As per SEBI regulations, the statutory minimum investment in a Portfolio Management Service is ₹50 Lakhs. Moneyfrog distributes leading third-party SEBI-registered PMS strategies.",
  },
  {
    id: "aifs",
    slug: "aifs",
    title: "Alternative Investment Funds (AIFs)",
    category: "Private Wealth",
    badge: "Private Markets & Venture Alpha",
    shortDesc: "Access to private equity, structured credit, venture capital, and long-short hedge strategies for sophisticated investors.",
    minInvestment: "₹1,00,00,000 (Cat I & II) / ₹1 Cr (Cat III)",
    horizon: "5 to 8+ Years",
    riskProfile: "Aggressive / Sophisticated",
    iconName: "Building2",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1600&q=85",
    summary:
      "Institutional alternative assets providing unlisted growth participation, structured private credit yields, and market-neutral hedge fund strategies.",
    overview: [
      "Alternative Investment Funds (Category I, II, and III) unlock private capital opportunities unavailable to retail public markets.",
      "Category I & II: Venture capital, early-to-growth stage private equity, infrastructure funds, and real estate pre-yield debt.",
      "Category III: Long-short equity funds, structured derivative strategies, and quantitative market-neutral strategies.",
      "Portfolio diversification with low statistical correlation to broader public equity indices.",
    ],
    keyBenefits: [
      "Unique pre-IPO allocations and venture investments into rapidly expanding market leaders",
      "Regular cash flow distributions through structured debt and real asset yields",
      "Downside protection strategies in Cat III long-short mandates during market corrections",
      "Exclusive access to marquee fund houses and veteran private equity general partners (GPs)",
    ],
    eligibility: [
      "Accredited Investors and High Net Worth Individuals able to commit minimum ₹1 Crore as per SEBI norms",
      "Family offices, private trusts, and institutional endowments",
      "Eligible NRIs seeking unlisted Indian growth exposure",
    ],
    processSteps: [
      { title: "Accredited Investor Verification", desc: "Verify statutory eligibility threshold and investment readiness." },
      { title: "PPM Review & Due Diligence", desc: "Examine Private Placement Memorandum (PPM), GP track record, and fee structure." },
      { title: "Capital Commitment Execution", desc: "Execute formal commitment agreements with progressive capital drawdown schedules." },
      { title: "Distribution & Exit Tracking", desc: "Monitor capital calls, distributions, DPI metrics, and fund liquidation phases." },
    ],
    regulatoryNote:
      "AIF investments are high-risk instruments with illiquidity constraints and capital commitment structures. Moneyfrog distributes third-party SEBI-registered AIFs to qualified investors.",
  },
  {
    id: "gift-city",
    slug: "gift-city",
    title: "GIFT City Investments",
    category: "Cross-Border Wealth",
    badge: "International Financial Centre",
    shortDesc: "Gateway to global equities, USD-denominated funds, and inbound NRI investments via IFSC GIFT City, Gujarat.",
    minInvestment: "$10,000 / ₹10 Lakhs equivalent",
    horizon: "3 to 10 Years",
    riskProfile: "Moderate to High",
    iconName: "Globe2",
    imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=85",
    summary:
      "Harness India's premier International Financial Services Centre (IFSC) for tax-efficient foreign currency assets, global equities, and NRI investment structuring.",
    overview: [
      "GIFT City (Gujarat International Finance Tec-City) acts as India's offshore financial hub regulated by IFSCA.",
      "Resident Indians can invest offshore under the RBI's Liberalised Remittance Scheme (LRS) up to $250,000 per financial year.",
      "NRIs and foreign nationals can route investments into India and global markets in foreign currencies (USD, EUR) free from local Indian taxation on select instruments.",
      "Access global funds, international real estate trusts, US equity portfolios, and offshore fixed deposits with streamlined repatriation.",
    ],
    keyBenefits: [
      "Tax efficiency: Exemptions on capital gains tax, GST, and stamp duty for specified IFSC securities",
      "Foreign currency denomination eliminating INR currency fluctuation risks for global goals",
      "Seamless repatriation of principal and returns into international bank accounts",
      "Single jurisdiction for multi-currency wealth accumulation and legacy structuring",
    ],
    eligibility: [
      "Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs) across US, UAE, UK, Singapore, and Europe",
      "Resident Indians utilizing the RBI's LRS (Liberalised Remittance Scheme) window",
      "Foreign corporate bodies and international trusts seeking India-dedicated exposure",
    ],
    processSteps: [
      { title: "Cross-Border Tax Advisory", desc: "Determine dual-jurisdiction tax implications and treaty benefits (DTAA)." },
      { title: "IFSC Account Setup", desc: "Open offshore bank and trading facilities with authorized GIFT City banking units." },
      { title: "Currency Allocation", desc: "Convert capital into USD or designated currency with competitive institutional FX rates." },
      { title: "Global Mandate Allocation", desc: "Deploy capital into dollar-denominated funds, international equities, or debt." },
    ],
    regulatoryNote:
      "Investments via GIFT City are governed by the International Financial Services Centres Authority (IFSCA) and RBI FEMA guidelines. Subject to international tax reporting under FATCA/CRS.",
  },
  {
    id: "fixed-income",
    slug: "fixed-income",
    title: "Fixed Income",
    category: "Capital Preservation",
    badge: "Predictable Yield Strategies",
    shortDesc: "Corporate Fixed Deposits, Non-Convertible Debentures (NCDs), and Market-Linked Debentures with predictable returns.",
    minInvestment: "₹10,000",
    horizon: "1 to 5 Years",
    riskProfile: "Conservative to Moderate",
    iconName: "Landmark",
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=85",
    summary:
      "Capital preservation and predictable cash-flow solutions built with AAA-rated corporate FDs, government securities, and high-yield structured debentures.",
    overview: [
      "Fixed income investments provide regular cash inflows, shield capital from equity volatility, and anchor long-term financial plans.",
      "Offerings include Corporate Fixed Deposits from premier RBI-regulated NBFCs, sovereign green bonds, and tax-free PSU bonds.",
      "Non-Convertible Debentures (NCDs) offering attractive fixed coupons with listed liquidity on national exchanges.",
      "Market-Linked Debentures (MLDs) combining capital protection with upside participation linked to benchmark indices.",
    ],
    keyBenefits: [
      "Higher yields compared to traditional commercial bank savings and standard deposits",
      "Stringent credit rating filters: focus on AAA and AA+ rated corporate issuers",
      "Choice of monthly, quarterly, annual, or cumulative payout frequencies to fund lifestyle expenses",
      "Capital preservation for near-term milestones and emergency liquidity reserves",
    ],
    eligibility: [
      "Individual Indian residents, senior citizens (enjoying special rate markups), and HUFs",
      "NRIs investing through NRE and NRO accounts (subject to specific issuer guidelines)",
      "Corporate entities and educational trusts managing surplus short-term liquidity",
    ],
    processSteps: [
      { title: "Cash Flow Mapping", desc: "Identify upcoming liquidity requirements and required payout schedules." },
      { title: "Credit Quality Screening", desc: "Review credit agency ratings (CRISIL, ICRA, CARE) and issuer balance sheets." },
      { title: "Tenure & Payout Selection", desc: "Select optimal maturity horizons and cumulative vs non-cumulative coupon modes." },
      { title: "Instant Issuance", desc: "Complete digital allocation with direct depository crediting of bond certificates." },
    ],
    regulatoryNote:
      "Corporate deposits and debentures are credit instruments subject to issuer default risk. Moneyfrog exclusively recommends instruments from established, highly rated corporate issuers.",
  },
  {
    id: "insurance",
    slug: "insurance",
    title: "Life and Health Insurance",
    category: "Wealth Protection",
    badge: "Comprehensive Risk Shield",
    shortDesc: "Comprehensive term life insurance, global health coverage, and critical illness safeguards for family security.",
    minInvestment: "Plan Dependent",
    horizon: "Lifelong / Long-term",
    riskProfile: "Risk Elimination",
    iconName: "ShieldCheck",
    imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=85",
    summary:
      "A robust defensive moat for your wealth journey, shielding your family's financial freedom against untimely mortality, critical illness, and hospitalization shocks.",
    overview: [
      "True wealth management begins with wealth protection: ensuring an untimely catastrophe does not derail generational goals.",
      "Pure Term Insurance with high sum assured multiples to replace earning capacity and secure outstanding liabilities.",
      "Comprehensive Family Floater Health Insurance with high restoration limits, zero room-rent capping, and global treatment riders.",
      "Critical Illness and Accidental Disability riders providing lump-sum payouts upon severe diagnosis.",
    ],
    keyBenefits: [
      "Unbiased policy comparison across India's premier life and general insurance companies",
      "Dedicated claim assistance desk to guide families smoothly through medical emergencies",
      "Tax savings under Section 80C (Life Insurance) and Section 80D (Health Insurance) of the Income Tax Act",
      "Specialized NRI insurance plans with tele-medical options and international emergency evacuation",
    ],
    eligibility: [
      "Resident Indians aged 18 to 65 years with medical underwriting compliance",
      "NRIs and OCIs visiting India or applying through authorized international medical centers",
      "Corporate groups and startup founders seeking Keyman insurance and group health covers",
    ],
    processSteps: [
      { title: "Human Life Value (HLV) Audit", desc: "Quantify your family's exact financial liability and future requirement." },
      { title: "Policy Architecture Comparison", desc: "Compare claim settlement ratios, exclusions, and premium competitiveness." },
      { title: "Medical Underwriting", desc: "Coordinate smooth tele-medical or diagnostic checks with chosen insurer." },
      { title: "Lifetime Claims Support", desc: "Family documentation support with 24/7 dedicated claim assistance protocols." },
    ],
    regulatoryNote:
      "Insurance is a subject matter of solicitation. Moneyfrog Financial Services Private Limited is registered with IRDAI as a Corporate Insurance Agent (Registration No.: CA0450).",
  },
  {
    id: "tax-services",
    slug: "tax-services",
    title: "Tax Services",
    category: "Financial Efficiency",
    badge: "Integrated Tax Advisory",
    shortDesc: "Asset-class tax optimization, NRI cross-border tax filing, advance tax planning, and capital gains computations.",
    minInvestment: "Service Dependent",
    horizon: "Annual & Ongoing",
    riskProfile: "Statutory Compliance",
    iconName: "ReceiptText",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=85",
    summary:
      "Strategic tax planning and filing assistance delivered in coordination with experienced Chartered Accountants to minimize leakage and ensure total compliance.",
    overview: [
      "Taxes are the single largest drag on investment compounding. Our tax services align asset allocation with current tax codes.",
      "Comprehensive Capital Gains Computations across equity, mutual funds, real estate, PMS, and foreign assets.",
      "NRI and Cross-Border Taxation: Guidance on Double Taxation Avoidance Agreements (DTAA), TRC certificates, and Form 15CA/15CB filings.",
      "Year-round advance tax scheduling to prevent interest penalties under Section 234B and 234C.",
    ],
    keyBenefits: [
      "Integrated synchronization between your investment portfolio transactions and tax computations",
      "Expert assistance from qualified Chartered Accountants and certified tax professionals",
      "NRI repatriation certificate assistance (Form 15CA/CB) for swift fund movement abroad",
      "Audit-proof documentation and notices handling for income tax scrutiny cases",
    ],
    eligibility: [
      "Salaried professionals, business owners, and independent consultants",
      "High Net Worth Individuals with complex multi-asset investment returns",
      "NRIs having Indian income, property sales, or overseas assets requiring compliance",
    ],
    processSteps: [
      { title: "Transaction Ledger Collation", desc: "Aggregate investment statements, contract notes, and banking data." },
      { title: "Tax Computation & Deductions", desc: "Optimize allowable exemptions, capital loss set-offs, and carry-forward balances." },
      { title: "Chartered Accountant Review", desc: "Detailed review and validation by qualified tax professionals." },
      { title: "E-Filing & Verification", desc: "Digital submission to IT Department and assistance with ITR-V verification." },
    ],
    regulatoryNote:
      "Tax advisory and filing services are facilitated in coordination with qualified Chartered Accountants and tax consultants. Final legal responsibility for tax declarations rests with the assessee.",
  },
];
