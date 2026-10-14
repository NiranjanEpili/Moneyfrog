import React from "react";
import { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Alternative Investment Funds (AIFs) | Private Capital & Alpha | Moneyfrog",
  description:
    "Institutional alternative assets: Category I, II, and III AIFs covering private equity, venture debt, and market-neutral strategies for accredited investors (minimum ₹1 Crore).",
};

export default function AIFsPage() {
  const product = PRODUCTS.find((p) => p.slug === "aifs")!;
  return <ProductPageTemplate product={product} />;
}
