import React from "react";
import { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Fixed Income, Corporate FDs & NCDs | Capital Preservation | Moneyfrog",
  description:
    "Predictable cash-flow and capital preservation solutions: AAA-rated corporate deposits, listed NCDs, and structured debt yields.",
};

export default function FixedIncomePage() {
  const product = PRODUCTS.find((p) => p.slug === "fixed-income")!;
  return <ProductPageTemplate product={product} />;
}
