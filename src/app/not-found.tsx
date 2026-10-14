import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-forest-50 text-forest-800 flex items-center justify-center mx-auto border border-forest-200 shadow-inner">
          <Compass className="w-8 h-8 text-forest-700 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-forest-700">404 • Page Not Found</span>
          <h1 className="text-3xl font-serif font-bold text-forest-950">Navigating Uncharted Territory</h1>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            The page or financial resource you requested could not be located. It may have been moved or updated.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-900 text-white text-xs font-semibold hover:bg-forest-800 transition-colors shadow-apple-sm"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-forest-950 text-xs font-semibold border border-black/[0.08] hover:bg-ivory-100 transition-colors shadow-apple-sm"
          >
            <span>Explore Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
