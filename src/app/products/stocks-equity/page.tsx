import React from "react";
import { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Stocks and Equity | Research-Backed Direct Market Equities | Moneyfrog",
  description:
    "Direct equity opportunities supported by rigorous institutional research, economic moats, and disciplined risk management.",
};

export default function StocksEquityPage() {
  const product = PRODUCTS.find((p) => p.slug === "stocks-equity")!;
  return <ProductPageTemplate product={product} />;
}
