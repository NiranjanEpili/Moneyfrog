"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Globe2, ArrowRight, ShieldCheck, Clock, MapPin, Sparkles } from "lucide-react";

interface MarketNode {
  name: string;
  shortName: string;
  flag: string;
  lat: number;
  lng: number;
  role: string;
  crossBorderCapabilities: string;
  utcOffset: string;
}

const GLOBAL_MARKETS: MarketNode[] = [
  {
    name: "India (Headquarters)",
    shortName: "India HQ",
    flag: "🇮🇳",
    lat: 19.076,
    lng: 72.8777,
    role: "Central Advisory, AMFI ARN-94798 & IRDAI Corporate Agency",
    crossBorderCapabilities: "Direct equities, domestic mutual funds, AAA fixed income, statutory compliance",
    utcOffset: "IST (UTC+5:30)",
  },
  {
    name: "United States",
    shortName: "USA",
    flag: "🇺🇸",
    lat: 40.7128,
    lng: -74.006,
    role: "NRI & Global Indian Wealth Corridor",
    crossBorderCapabilities: "US-India DTAA tax alignment, FATCA compliance, NRE/NRO repatriation accounts",
    utcOffset: "EST / PST",
  },
  {
    name: "United Arab Emirates & GCC",
    shortName: "UAE & GCC",
    flag: "🇦🇪",
    lat: 25.2048,
    lng: 55.2708,
    role: "Gulf Cross-Border & NRI Wealth Gateway",
    crossBorderCapabilities: "Tax-free remittance channeling, GIFT City USD investments, FEMA compliance",
    utcOffset: "GST (UTC+4)",
  },
  {
    name: "Singapore",
    shortName: "Singapore",
    flag: "🇸🇬",
    lat: 1.3521,
    lng: 103.8198,
    role: "Asia-Pacific Family Office Hub",
    crossBorderCapabilities: "Cross-border capital flow structuring, Singapore-India treaty harmonization",
    utcOffset: "SGT (UTC+8)",
  },
  {
    name: "Hong Kong",
    shortName: "Hong Kong",
    flag: "🇭🇰",
    lat: 22.3193,
    lng: 114.1694,
    role: "East Asia Financial Corridor",
    crossBorderCapabilities: "International portfolio diversification and offshore institutional access",
    utcOffset: "HKT (UTC+8)",
  },
  {
    name: "Malaysia",
    shortName: "Malaysia",
    flag: "🇲🇾",
    lat: 3.139,
    lng: 101.6869,
    role: "Southeast Asian Diaspora Desk",
    crossBorderCapabilities: "NRI property sale proceeds repatriation, Form 15CA/CB documentation",
    utcOffset: "MYT (UTC+8)",
  },
];

export default function GlobalGlobe3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeMarket, setActiveMarket] = useState<MarketNode>(GLOBAL_MARKETS[0]);
  const targetRotationRef = useRef<{ x: number; y: number } | null>(null);

  // Lat/Lng to Vector3 on sphere of radius R
  const latLngToVector3 = (lat: number, lng: number, radius: number): THREE.Vector3 => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  };

  const focusMarket = (market: MarketNode) => {
    setActiveMarket(market);
    // Smoothly rotate globe to face selected market
    const targetY = -(market.lng * (Math.PI / 180)) - Math.PI / 2;
    const targetX = market.lat * (Math.PI / 180) * 0.45;
    targetRotationRef.current = { x: targetX, y: targetY };
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let animId: number;

    const width = container.clientWidth;
    const height = container.clientHeight;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5.2;

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setSize(width, height);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.35;
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn("GlobalGlobe3D WebGL init failed", e);
      return;
    }

    const globeRadius = 1.75;
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Initial orientation focusing India
    globeGroup.rotation.x = 0.32;
    globeGroup.rotation.y = -1.35;

    // 1. Photorealistic Earth Textures
    const textureLoader = new THREE.TextureLoader();
    const earthMap = textureLoader.load("/textures/earth_atmos.jpg");
    const earthNormal = textureLoader.load("/textures/earth_normal.jpg");
    const earthLights = textureLoader.load("/textures/earth_lights.png");

    const earthGeo = new THREE.SphereGeometry(globeRadius, 64, 64);
    const earthMat = new THREE.MeshStandardMaterial({
      map: earthMap,
      normalMap: earthNormal,
      normalScale: new THREE.Vector2(1.2, 1.2),
      color: new THREE.Color("#dbeafe"), // Oceanic sapphire richness
      emissiveMap: earthLights,
      emissive: new THREE.Color("#F59E0B"), // Golden city night lights
      emissiveIntensity: 1.25,
      roughness: 0.44,
      metalness: 0.18,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    globeGroup.add(earthMesh);

    // 2. Multi-Layer Atmospheric Sheen & Radiant Emerald Glow
    const innerAtmosGeo = new THREE.SphereGeometry(globeRadius * 1.012, 48, 48);
    const innerAtmosMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#38BDF8"),
      transparent: true,
      opacity: 0.12,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
    });
    const innerAtmosMesh = new THREE.Mesh(innerAtmosGeo, innerAtmosMat);
    globeGroup.add(innerAtmosMesh);

    const atmosGeo = new THREE.SphereGeometry(globeRadius * 1.036, 48, 48);
    const atmosMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#10B981"),
      transparent: true,
      opacity: 0.22,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
    });
    const atmosMesh = new THREE.Mesh(atmosGeo, atmosMat);
    globeGroup.add(atmosMesh);

    // 3. Orbital Metallic Gold Ring
    const ringGeo = new THREE.TorusGeometry(globeRadius * 1.34, 0.009, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#F59E0B"),
      metalness: 0.9,
      roughness: 0.15,
      emissive: new THREE.Color("#D97706"),
      emissiveIntensity: 0.35,
    });
    const orbitalRing = new THREE.Mesh(ringGeo, ringMat);
    orbitalRing.rotation.x = Math.PI / 2.3;
    globeGroup.add(orbitalRing);

    // 4. Geographic Markers & Cross-Border Bezier Arcs from India
    const indiaPos = latLngToVector3(GLOBAL_MARKETS[0].lat, GLOBAL_MARKETS[0].lng, globeRadius);
    const pulseBeads: { mesh: THREE.Mesh; curve: THREE.QuadraticBezierCurve3; offset: number }[] = [];

    GLOBAL_MARKETS.forEach((market, idx) => {
      const pos = latLngToVector3(market.lat, market.lng, globeRadius);
      const isHQ = idx === 0;

      // Marker sphere
      const dotGeo = new THREE.SphereGeometry(isHQ ? 0.055 : 0.035, 16, 16);
      const dotMat = new THREE.MeshBasicMaterial({
        color: isHQ ? new THREE.Color("#34D399") : new THREE.Color("#FBBF24"),
      });
      const dotMesh = new THREE.Mesh(dotGeo, dotMat);
      dotMesh.position.copy(pos);
      globeGroup.add(dotMesh);

      // India HQ Pulsing Ring
      if (isHQ) {
        const ringGeoHQ = new THREE.RingGeometry(0.065, 0.095, 32);
        const ringMatHQ = new THREE.MeshBasicMaterial({
          color: new THREE.Color("#10B981"),
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.9,
        });
        const ringMeshHQ = new THREE.Mesh(ringGeoHQ, ringMatHQ);
        ringMeshHQ.position.copy(pos.clone().multiplyScalar(1.01));
        ringMeshHQ.lookAt(new THREE.Vector3(0, 0, 0));
        globeGroup.add(ringMeshHQ);
      }

      // Connecting Parabolic Flight Conduits from Mumbai to International Hubs
      if (!isHQ) {
        const midPoint = new THREE.Vector3().addVectors(indiaPos, pos).multiplyScalar(0.5);
        const distance = indiaPos.distanceTo(pos);
        midPoint.normalize().multiplyScalar(globeRadius + distance * 0.32);

        const curve = new THREE.QuadraticBezierCurve3(indiaPos, midPoint, pos);
        const points = curve.getPoints(60);
        const arcGeo = new THREE.BufferGeometry().setFromPoints(points);
        const arcMat = new THREE.LineBasicMaterial({
          color: new THREE.Color("#F59E0B"),
          transparent: true,
          opacity: 0.8,
        });
        const arcLine = new THREE.Line(arcGeo, arcMat);
        globeGroup.add(arcLine);

        // Traveling Golden Telemetry Bead
        const beadGeo = new THREE.SphereGeometry(0.024, 12, 12);
        const beadMat = new THREE.MeshBasicMaterial({
          color: new THREE.Color("#FFFBEB"),
        });
        const bead = new THREE.Mesh(beadGeo, beadMat);
        globeGroup.add(bead);
        pulseBeads.push({ mesh: bead, curve, offset: idx * 0.22 });
      }
    });

    // 5. Lighting Setup with High-End Color Grading
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0x7dd3fc, 0x064e3b, 0.75);
    scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight(0xfff7ed, 3.3);
    sunLight.position.set(5, 3.5, 4.5);
    scene.add(sunLight);

    const emeraldRim = new THREE.PointLight(0x10b981, 2.8, 12);
    emeraldRim.position.set(-4.5, -2, -3);
    scene.add(emeraldRim);

    // 6. Interactive Drag & Touch Gestures
    let isDragging = false;
    let prevPos = { x: 0, y: 0 };
    let dragVelocity = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevPos = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevPos.x;
      const deltaY = e.clientY - prevPos.y;
      dragVelocity.x = deltaX * 0.005;
      dragVelocity.y = deltaY * 0.005;
      globeGroup.rotation.y += dragVelocity.x;
      globeGroup.rotation.x += dragVelocity.y;
      prevPos = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Mobile Touch Handlers with smooth page scrolling
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevPos.x;
      const deltaY = e.touches[0].clientY - prevPos.y;
      dragVelocity.x = deltaX * 0.005;
      dragVelocity.y = deltaY * 0.005;
      globeGroup.rotation.y += dragVelocity.x;
      globeGroup.rotation.x += dragVelocity.y;
      prevPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // 7. Render Loop with Visibility Caching (60/120 FPS optimization)
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Skip render when off-screen to preserve battery and 120fps scrolling
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Smooth target interpolation when user taps a market
      if (targetRotationRef.current) {
        globeGroup.rotation.y += (targetRotationRef.current.y - globeGroup.rotation.y) * 0.06;
        globeGroup.rotation.x += (targetRotationRef.current.x - globeGroup.rotation.x) * 0.06;
        if (
          Math.abs(targetRotationRef.current.y - globeGroup.rotation.y) < 0.005 &&
          Math.abs(targetRotationRef.current.x - globeGroup.rotation.x) < 0.005
        ) {
          targetRotationRef.current = null;
        }
      } else if (!isDragging) {
        globeGroup.rotation.y += 0.0016;
      } else {
        globeGroup.rotation.y += dragVelocity.x * 0.95;
        globeGroup.rotation.x += dragVelocity.y * 0.95;
        dragVelocity.x *= 0.92;
        dragVelocity.y *= 0.92;
      }

      // Animate Traveling Golden Telemetry Beads
      pulseBeads.forEach((item) => {
        const progress = (elapsed * 0.35 + item.offset) % 1;
        const pos = item.curve.getPoint(progress);
        item.mesh.position.copy(pos);
      });

      orbitalRing.rotation.z = elapsed * 0.08;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", handleResize);

      earthGeo.dispose();
      earthMat.dispose();
      innerAtmosGeo.dispose();
      innerAtmosMat.dispose();
      atmosGeo.dispose();
      atmosMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      earthMap.dispose();
      earthNormal.dispose();
      earthLights.dispose();

      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div className="relative w-full rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-gradient-to-br from-forest-950 via-[#061D12] to-forest-950 text-white p-4 sm:p-8 lg:p-12 border border-forest-800 shadow-2xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
        {/* Left: 3D Interactive Photorealistic Earth Globe */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="relative w-full max-w-[480px] h-[250px] xs:h-[300px] sm:h-[400px] lg:h-[480px]">
            <div
              ref={mountRef}
              className="w-full h-full cursor-grab active:cursor-grabbing select-none touch-pan-y"
              title="Interactive 3D Earth Globe - Drag to rotate or click a market to inspect"
            />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-forest-900/90 backdrop-blur-md text-[9px] sm:text-[11px] text-ivory-300/80 border border-forest-800 pointer-events-none text-center max-w-[90%] truncate shadow-md">
              <span className="text-forest-400 font-semibold">Interactive:</span> Drag to spin <span className="hidden xs:inline">• Select market to focus</span>
            </div>
          </div>
        </div>

        {/* Right: Global Market Capabilities & Interactive Inspector */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-900 border border-forest-700 text-forest-300 text-xs font-semibold">
              <Globe2 className="w-3.5 h-3.5 text-forest-400" />
              <span>Cross-Border Wealth Mobility</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Global Wealth, Anchored in India
            </h2>
            <p className="text-xs sm:text-sm text-ivory-300/80 leading-relaxed">
              Serving Non-Resident Indians and cross-border families across key international hubs with verified FEMA,
              DTAA, and GIFT City regulatory support.
            </p>
          </div>

          {/* Quick Market Selector Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
            {GLOBAL_MARKETS.map((m) => {
              const isActive = activeMarket.name === m.name;
              return (
                <button
                  key={m.name}
                  type="button"
                  onClick={() => focusMarket(m)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    isActive
                      ? "bg-forest-400 text-forest-950 shadow-md font-bold scale-[1.02]"
                      : "bg-forest-900/80 text-ivory-200 border border-forest-800 hover:bg-forest-800/80 hover:text-white"
                  }`}
                >
                  <span>{m.flag}</span>
                  <span>{m.shortName}</span>
                </button>
              );
            })}
          </div>

          {/* Active Market Focus Card */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-forest-900/80 border border-forest-700/80 backdrop-blur-md space-y-3 sm:space-y-4 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-forest-800 gap-2">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl sm:text-3xl shrink-0">{activeMarket.flag}</span>
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white">{activeMarket.name}</h3>
                  <div className="text-[11px] text-forest-400 font-semibold">{activeMarket.role}</div>
                </div>
              </div>
              <div className="text-[10px] sm:text-[11px] text-ivory-400 flex items-center gap-1 shrink-0 bg-forest-950/60 px-2.5 py-1 rounded-full border border-forest-800 self-start sm:self-auto">
                <Clock className="w-3 h-3 text-forest-400" />
                <span>{activeMarket.utcOffset}</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-ivory-400/80">
                Core Cross-Border Capabilities:
              </span>
              <p className="text-xs sm:text-sm text-ivory-200 leading-relaxed">{activeMarket.crossBorderCapabilities}</p>
            </div>

            <div className="pt-2 flex items-center gap-2 text-[10px] sm:text-[11px] text-ivory-400/80 border-t border-forest-800">
              <ShieldCheck className="w-3.5 h-3.5 text-forest-400 shrink-0" />
              <span>Compliant with RBI FEMA, IFSCA GIFT City frameworks, and statutory DTAA treaty relief.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
