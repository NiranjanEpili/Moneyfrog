import React from "react";
import { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "GIFT City IFSC Investments | Cross-Border & USD Wealth | Moneyfrog",
  description:
    "Offshore financial solutions regulated by IFSCA. Dollar-denominated investments, tax efficiency, and global family wealth structuring.",
};

export default function GiftCityPage() {
  const product = PRODUCTS.find((p) => p.slug === "gift-city")!;
  return <ProductPageTemplate product={product} />;
}
