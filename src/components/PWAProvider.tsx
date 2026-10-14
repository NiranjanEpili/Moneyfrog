"use client";

import { useEffect } from "react";

export default function PWAProvider() {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          console.log("Moneyfrog PWA Service Worker registered:", reg.scope);
        })
        .catch((err) => {
          console.warn("Service worker registration skipped:", err);
        });
    }
  }, []);

  return null;
}
