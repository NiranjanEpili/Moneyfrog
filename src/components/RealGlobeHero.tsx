"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { ShieldCheck, TrendingUp, Globe2, Sparkles, MapPin } from "lucide-react";
import { COMPANY } from "@/data/company";

interface CityPoint {
  name: string;
  lat: number;
  lng: number;
  isHQ?: boolean;
}

const CITIES: CityPoint[] = [
  { name: "Mumbai (HQ)", lat: 19.076, lng: 72.8777, isHQ: true },
  { name: "Dubai (GCC)", lat: 25.2048, lng: 55.2708 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "London", lat: 51.5074, lng: -0.1278 },
  { name: "New York", lat: 40.7128, lng: -74.006 },
];

export default function RealGlobeHero() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeCity, setActiveCity] = useState("Mumbai (HQ)");
  const targetRotationRef = useRef<{ x: number; y: number } | null>(null);

  // Lat/Lng to Vector3 on sphere
  const calcCoords = (lat: number, lng: number, radius: number): THREE.Vector3 => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  };

  const focusCity = (cityName: string) => {
    setActiveCity(cityName);
    const city = CITIES.find((c) => c.name === cityName);
    if (!city) return;
    const targetY = -(city.lng * (Math.PI / 180)) - Math.PI / 2;
    const targetX = city.lat * (Math.PI / 180) * 0.4;
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
      console.warn("WebGL not supported:", e);
      return;
    }

    const globeRadius = 1.7;
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Initial tilt to feature India & Middle East prominently
    globeGroup.rotation.x = 0.35;
    globeGroup.rotation.y = -1.35;

    // 1. Texture Loading for Realistic Vibrant Earth
    const textureLoader = new THREE.TextureLoader();
    const earthMap = textureLoader.load("/textures/earth_atmos.jpg");
    const earthNormal = textureLoader.load("/textures/earth_normal.jpg");
    const earthLights = textureLoader.load("/textures/earth_lights.png");

    // Earth Sphere Mesh with enhanced deep ocean contrast and radiant city lights
    const earthGeo = new THREE.SphereGeometry(globeRadius, 64, 64);
    const earthMat = new THREE.MeshStandardMaterial({
      map: earthMap,
      normalMap: earthNormal,
      normalScale: new THREE.Vector2(1.2, 1.2),
      color: new THREE.Color("#dbeafe"), // Rich oceanic sapphire vibrancy
      emissiveMap: earthLights,
      emissive: new THREE.Color("#F59E0B"), // Brilliant warm amber-gold city lights
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

    // 3. City Beacons & Flight Arcs from Mumbai
    const mumbaiPos = calcCoords(CITIES[0].lat, CITIES[0].lng, globeRadius);
    const pulseBeads: { mesh: THREE.Mesh; curve: THREE.QuadraticBezierCurve3; offset: number }[] = [];

    CITIES.forEach((city, idx) => {
      const pos = calcCoords(city.lat, city.lng, globeRadius);

      // Marker sphere
      const markerGeo = new THREE.SphereGeometry(city.isHQ ? 0.055 : 0.035, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({
        color: city.isHQ ? new THREE.Color("#34D399") : new THREE.Color("#FBBF24"),
      });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      marker.position.copy(pos);
      globeGroup.add(marker);

      // Pulsing Halo Ring for HQ
      if (city.isHQ) {
        const ringGeo = new THREE.RingGeometry(0.065, 0.095, 32);
        const ringMat = new THREE.MeshBasicMaterial({
          color: new THREE.Color("#10B981"),
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.9,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.copy(pos.clone().multiplyScalar(1.01));
        ring.lookAt(new THREE.Vector3(0, 0, 0));
        globeGroup.add(ring);
      }

      // 3D Parabolic Curved Arcs connecting Mumbai to Global Corridors
      if (!city.isHQ) {
        const midPoint = new THREE.Vector3().addVectors(mumbaiPos, pos).multiplyScalar(0.5);
        const distance = mumbaiPos.distanceTo(pos);
        midPoint.normalize().multiplyScalar(globeRadius + distance * 0.32);

        const curve = new THREE.QuadraticBezierCurve3(mumbaiPos, midPoint, pos);
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
        pulseBeads.push({ mesh: bead, curve, offset: idx * 0.25 });
      }
    });

    // 4. Elegant Orbital Metallic Ring around Equator
    const ringGeo = new THREE.TorusGeometry(globeRadius * 1.35, 0.009, 16, 100);
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

    // 6. Interactive Drag & Mouse/Touch Rotation
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

    // Touch Support for Mobile with non-blocking vertical scroll
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

    // Resize
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop with Visibility Caching (60/120 FPS optimization)
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Skip render if off-screen to preserve battery and 120fps page scrolling
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Target rotation (when city chip clicked) or atmospheric auto-rotation & inertia
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
    <div className="relative w-full flex flex-col items-center">
      {/* Mobile-Only Top Telemetry & Regulatory Bar (Prevents Canvas Overlap on Mobile) */}
      <div className="w-full flex sm:hidden flex-col gap-1.5 mb-2.5">
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/95 backdrop-blur-xl border border-black/[0.08] shadow-apple-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-forest-600 animate-pulse" />
            <div>
              <div className="text-[9px] font-bold text-forest-950 uppercase tracking-wider">Active Portfolio</div>
              <div className="text-xs font-serif font-bold text-forest-950">₹2,48,50,000</div>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[8px] text-forest-700 bg-forest-50 px-2 py-0.5 rounded-full font-bold border border-forest-200">
              +14.8% CAGR
            </span>
            <div className="text-[8px] text-charcoal-500 mt-0.5">Equities, PMS, GIFT City</div>
          </div>
        </div>

        <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-forest-950/90 text-white text-[9px] border border-forest-800">
          <div className="flex items-center gap-1.5 text-forest-300">
            <ShieldCheck className="w-3 h-3 text-forest-400 shrink-0" />
            <span className="font-semibold">AMFI ARN-94798</span>
          </div>
          <span className="text-ivory-400/80">IRDAI CA0450 • ₹1,700+ Cr AUM</span>
        </div>
      </div>

      {/* Main 3D Canvas Container */}
      <div className="relative w-full h-[240px] xs:h-[280px] sm:h-[460px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center">
        {/* 3D WebGL Earth Canvas */}
        <div
          ref={mountRef}
          className="w-full h-full cursor-grab active:cursor-grabbing select-none touch-pan-y"
          title="Interactive 3D Earth Globe - Drag horizontally to rotate"
        />

        {/* Floating Apple-Tier Live Financial Telemetry Card (Tablet & Desktop Only) */}
        <div className="hidden sm:block absolute top-4 left-4 max-w-[260px] lg:max-w-[280px] p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-black/[0.08] shadow-apple-md pointer-events-auto transform hover:scale-[1.02] transition-transform duration-300 z-10">
          <div className="flex items-center justify-between pb-2 border-b border-black/[0.05]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-forest-600 animate-pulse" />
              <span className="text-[11px] font-bold text-forest-950 uppercase tracking-wider">Active Portfolio</span>
            </div>
            <span className="text-[10px] text-forest-700 bg-forest-50 px-2 py-0.5 rounded-full font-semibold border border-forest-200">
              +14.8% CAGR
            </span>
          </div>
          <div className="pt-2">
            <div className="text-[10px] text-charcoal-500">Asset Balance</div>
            <div className="text-xl font-serif font-bold text-forest-950">₹2,48,50,000</div>
          </div>
          <div className="mt-2 flex items-center gap-1 text-[10px] text-charcoal-600 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-500 shrink-0" />
            <span className="truncate">Equities, PMS, GIFT City USD</span>
          </div>
        </div>

        {/* Floating Apple-Tier Live Regulatory Badge Card (Tablet & Desktop Only) */}
        <div className="hidden sm:block absolute bottom-14 right-4 max-w-[280px] lg:max-w-[300px] p-4 rounded-2xl bg-forest-950/95 text-white backdrop-blur-xl border border-forest-800 shadow-glass-emerald pointer-events-auto transform hover:scale-[1.02] transition-transform duration-300 z-10">
          <div className="flex items-center gap-2 pb-2 border-b border-forest-800">
            <ShieldCheck className="w-4 h-4 text-forest-400 shrink-0" />
            <div className="text-xs font-bold text-white">Statutory Fiduciary Standard</div>
          </div>
          <div className="pt-2 space-y-1 text-[11px] text-ivory-300/80">
            <div className="flex justify-between">
              <span>AMFI Mutual Funds</span>
              <strong className="text-forest-300">{COMPANY.amfiArn}</strong>
            </div>
            <div className="flex justify-between">
              <span>IRDAI Insurance</span>
              <strong className="text-forest-300">{COMPANY.irdaiLicense}</strong>
            </div>
            <div className="flex justify-between">
              <span>Managed Assets</span>
              <strong className="text-white">₹1,700+ Cr</strong>
            </div>
          </div>
        </div>

        {/* Floating City Corridor Selector Chips (Tablet & Desktop: Floating on Canvas; Mobile: Below) */}
        <div className="hidden sm:flex absolute bottom-3 left-1/2 -translate-x-1/2 items-center gap-1.5 p-1.5 rounded-full bg-forest-950/90 backdrop-blur-md border border-forest-800 shadow-apple-md max-w-[95%] overflow-x-auto no-scrollbar pointer-events-auto z-10">
          <span className="text-[10px] font-semibold text-ivory-300/70 pl-2 pr-1 flex items-center gap-1">
            <Globe2 className="w-3 h-3 text-forest-400" /> Corridors:
          </span>
          {CITIES.map((city) => (
            <button
              key={city.name}
              type="button"
              onClick={() => focusCity(city.name)}
              className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                activeCity === city.name
                  ? "bg-forest-600 text-white shadow-sm font-semibold"
                  : "text-ivory-300/80 hover:text-white hover:bg-forest-900/60"
              }`}
            >
              {city.isHQ ? (
                <span className="w-1.5 h-1.5 rounded-full bg-forest-300 animate-pulse" />
              ) : (
                <span className="w-1 h-1 rounded-full bg-yellow-400/80" />
              )}
              {city.name}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile-Only City Corridor Chips Bar (Safely Below the Canvas with Zero Overlap) */}
      <div className="w-full flex sm:hidden items-center gap-1.5 mt-3 p-1.5 rounded-2xl bg-forest-950/90 backdrop-blur-md border border-forest-800 shadow-apple-sm overflow-x-auto no-scrollbar">
        <span className="text-[10px] font-semibold text-ivory-300/70 pl-1 shrink-0 flex items-center gap-1">
          <Globe2 className="w-3 h-3 text-forest-400" /> Corridors:
        </span>
        {CITIES.map((city) => (
          <button
            key={city.name}
            type="button"
            onClick={() => focusCity(city.name)}
            className={`px-2.5 py-1 rounded-full text-[10px] font-medium transition-all shrink-0 flex items-center gap-1 ${
              activeCity === city.name
                ? "bg-forest-600 text-white shadow-sm font-semibold"
                : "text-ivory-300/80 hover:text-white hover:bg-forest-900/60"
            }`}
          >
            {city.isHQ ? (
              <span className="w-1.5 h-1.5 rounded-full bg-forest-300 animate-pulse" />
            ) : (
              <span className="w-1 h-1 rounded-full bg-yellow-400/80" />
            )}
            {city.name}
          </button>
        ))}
      </div>
    </div>
  );
}
