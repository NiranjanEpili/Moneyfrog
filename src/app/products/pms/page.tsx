import React from "react";
import { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Portfolio Management Services (PMS) | Bespoke HNI Portfolios | Moneyfrog",
  description:
    "Tailored, actively managed discretionary portfolios for eligible investors (minimum ₹50 Lakhs) managed by distinguished fund managers.",
};

export default function PMSPage() {
  const product = PRODUCTS.find((p) => p.slug === "pms")!;
  return <ProductPageTemplate product={product} />;
}
