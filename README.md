# Moneyfrog — Institutional-Grade Wealth Management Platform

> An ultra-premium, mobile-first wealth advisory and investment platform built with **Next.js 15**, **Three.js**, and modern web engineering.

---

## 🌟 Key Features

- **🌍 Interactive 3D Real Earth Globe**:
  - Photorealistic atmospheric scattering, realistic specular sun reflection, rotating city clusters (Mumbai, GIFT City, Singapore, Dubai, London, New York), and live telemetry.
- **✨ 3D Wealth Universe & Constellations**:
  - Interactive orbital nodes representing Mutual Funds, PMS, AIFs, Fixed Income, and Global Advisory with detailed capability breakdowns.
- **📈 Real-Time Wealth Growth Simulator**:
  - Dynamic SIP and lumpsum compounding projections with interactive sliders, tenure adjustments, and projected wealth multipliers.
- **📱 Ultra-Responsive Mobile Design**:
  - Handcrafted responsive layout curves across all screen sizes (from compact 360px phones to 4K ultra-wide displays) with zero component overlaps.
- **⚡ PWA Ready (Progressive Web App)**:
  - Custom Service Worker, offline caching, and native web app install capability with custom home screen icons.
- **🔒 SEBI & Regulatory Disclosures**:
  - Integrated compliance architecture with SEBI RIA disclosure, grievance escalation matrix, and regulatory data.
- **💼 Interactive Wealth Consultation**:
  - Seamless appointment booking modal with dynamic validation and direct lead generation API.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router, Turbopack) |
| **Language** | TypeScript 5 (Strict Mode) |
| **Styling** | Tailwind CSS 3.4 & Apple-inspired Custom Glassmorphism System |
| **3D Graphics** | Three.js with hardware-accelerated WebGL rendering |
| **Icons** | Lucide React |
| **PWA** | Custom Service Worker + Manifest v2 |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm or yarn or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NiranjanEpili/Moneyfrog.git
   cd Moneyfrog
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the live platform.

---

## 📁 Project Structure

```
moneyfrog/
├── public/                 # Static assets, textures & PWA icons
│   ├── icons/              # PWA app icons (192, 512, apple-touch)
│   ├── textures/           # High-resolution photorealistic Earth textures
│   ├── manifest.json       # Web App Manifest
│   └── sw.js               # Service Worker
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── about/          # Leadership, journey & principles
│   │   ├── contact/        # Office coordinates & consultation form
│   │   ├── disclosures/    # Regulatory & SEBI compliance
│   │   ├── insights/       # Market research & thought leadership
│   │   ├── privacy-policy/ # Privacy and data protection
│   │   ├── products/       # Investment product categories (AIF, PMS, etc.)
│   │   ├── solutions/      # HNIs, NRIs, and Family Office solutions
│   │   ├── terms/          # Terms of service
│   │   ├── layout.tsx      # Root layout with PWA provider
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable UI & 3D WebGL modules
│   │   ├── Apple3DCard.tsx # 3D perspective glare card
│   │   ├── ConsultationModal.tsx # Booking modal
│   │   ├── RealGlobeHero.tsx # Interactive 3D Earth
│   │   ├── WealthGrowthSimulator.tsx # Compounding simulator
│   │   ├── WealthUniverse3D.tsx # Orbital product constellation
│   │   └── Header.tsx / Footer.tsx
│   └── data/               # Structured data schemas & company info
└── tailwind.config.ts      # Custom theme tokens & design system
```

---

## 📄 License & Compliance

© 2026 Moneyfrog Financial Services Private Limited. All rights reserved.  
Mutual fund investments are subject to market risks. Read all scheme related documents carefully before investing.
