import React from "react";
import { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Tax Services & NRI Tax Planning | Financial Efficiency | Moneyfrog",
  description:
    "Integrated tax planning, capital gains computations, Form 15CA/CB certifications, and NRI tax filing facilitated with qualified Chartered Accountants.",
};

export default function TaxServicesPage() {
  const product = PRODUCTS.find((p) => p.slug === "tax-services")!;
  return <ProductPageTemplate product={product} />;
}
