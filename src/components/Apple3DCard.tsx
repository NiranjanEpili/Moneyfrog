"use client";

import React, { useRef, useState } from "react";

interface Apple3DCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
}

export default function Apple3DCard({
  children,
  className = "",
  maxTilt = 8,
  glowColor = "rgba(34, 197, 94, 0.12)",
}: Apple3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`);
    setGlareStyle({
      opacity: 1,
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: transformStyle ? "transform 0.15s ease-out" : "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
      }}
      className={`relative rounded-2xl sm:rounded-[2rem] preserve-3d will-change-transform ${className}`}
    >
      {/* Dynamic Apple-style specular glare */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-[2rem] transition-opacity duration-300 z-20"
        style={{
          opacity: glareStyle.opacity,
          background: `radial-gradient(circle 320px at ${glareStyle.x}% ${glareStyle.y}%, ${glowColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
}
