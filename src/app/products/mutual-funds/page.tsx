import React from "react";
import { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Mutual Funds | Systematic Investment Strategies | Moneyfrog",
  description:
    "Disciplined SIP and lump-sum mutual fund portfolios tailored for goal-based wealth compounding. AMFI Registered Distributor ARN-94798.",
};

export default function MutualFundsPage() {
  const product = PRODUCTS.find((p) => p.slug === "mutual-funds")!;
  return <ProductPageTemplate product={product} />;
}
