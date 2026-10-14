import React from "react";
import { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Life and Health Insurance | Defensive Wealth Shield | Moneyfrog",
  description:
    "High-sum-assured term insurance and comprehensive global health coverage for family protection. IRDAI Corporate Agent CA0450.",
};

export default function InsurancePage() {
  const product = PRODUCTS.find((p) => p.slug === "insurance")!;
  return <ProductPageTemplate product={product} />;
}
