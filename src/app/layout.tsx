import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PWAProvider from "@/components/PWAProvider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#062013",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://moneyfrog.in"),
  title: "Moneyfrog | Your Wealth. Your Goals. One Trusted Partner.",
  description:
    "Discover a more considered approach to wealth management with personalized investment solutions, expert guidance, and portfolio insights tailored to your financial journey.",
  keywords: [
    "wealth management India",
    "financial planning for HNIs",
    "NRI investment solutions",
    "Mutual funds SIP India",
    "PMS and AIF investments",
    "GIFT City IFSC investments",
    "Fixed income corporate deposits",
    "NRI taxation services Mumbai",
  ],
  authors: [{ name: "Moneyfrog Financial Services Private Limited" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Moneyfrog",
  },
  icons: {
    icon: "/icons/icon-192.png",
    shortcut: "/icons/icon-192.png",
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    title: "Moneyfrog | Premier Wealth Solutions & Financial Services",
    description:
      "Disciplined wealth compounding, PMS, AIFs, GIFT City, Mutual Funds, and tax planning for discerning families and global Indians.",
    url: "https://moneyfrog.in",
    siteName: "Moneyfrog Financial Services",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moneyfrog | Wealth Management & Financial Services",
    description: "Your partner in building, managing, protecting, and growing wealth.",
    creator: "@moneyfrog_in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#062013" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-ivory-100 text-charcoal-900 font-sans selection:bg-forest-800 selection:text-white">
        <PWAProvider />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
