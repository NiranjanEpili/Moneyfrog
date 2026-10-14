"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3DScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webGLFailed, setWebGLFailed] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let animId: number;

    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        100
      );
      camera.position.z = 7;

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn("WebGL initialization failed:", e);
      setWebGLFailed(true);
      return;
    }

    // 1. Central Emerald Sculptural Sphere
    const sphereGroup = new THREE.Group();
    scene.add(sphereGroup);

    // Faceted emerald core
    const sphereGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const emeraldMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#0D4E2F"),
      emissive: new THREE.Color("#082A18"),
      emissiveIntensity: 0.3,
      roughness: 0.15,
      metalness: 0.1,
      transmission: 0.6,
      thickness: 1.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
      wireframe: false,
    });
    const emeraldMesh = new THREE.Mesh(sphereGeo, emeraldMat);
    sphereGroup.add(emeraldMesh);

    // Inner glowing golden nucleus
    const innerGeo = new THREE.OctahedronGeometry(0.8, 1);
    const innerMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#D4AF37"),
      emissive: new THREE.Color("#E5C07B"),
      emissiveIntensity: 0.6,
      metalness: 0.8,
      roughness: 0.2,
      wireframe: true,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    sphereGroup.add(innerMesh);

    // 2. Delicate Metallic Orbital Rings
    const ringGroup = new THREE.Group();
    scene.add(ringGroup);

    const createRing = (radius: number, tube: number, color: string, rotX: number, rotY: number) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 100);
      const ringMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        metalness: 0.9,
        roughness: 0.2,
        emissive: new THREE.Color(color),
        emissiveIntensity: 0.15,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = rotX;
      ringMesh.rotation.y = rotY;
      return ringMesh;
    };

    const ring1 = createRing(2.4, 0.018, "#D4AF37", Math.PI / 3, Math.PI / 6);
    const ring2 = createRing(2.8, 0.014, "#4ADE80", -Math.PI / 4, Math.PI / 4);
    const ring3 = createRing(3.2, 0.012, "#E2DEC9", Math.PI / 2.2, -Math.PI / 8);

    ringGroup.add(ring1);
    ringGroup.add(ring2);
    ringGroup.add(ring3);

    // 3. Floating Geometric Particles (Golden Spiral Field)
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color("#22C55E");
    const color2 = new THREE.Color("#D4AF37");
    const color3 = new THREE.Color("#A3E635");

    for (let i = 0; i < particleCount; i++) {
      const theta = i * 0.15;
      const r = 1.8 + Math.random() * 3.2;
      const x = Math.cos(theta) * r + (Math.random() - 0.5) * 0.8;
      const y = (Math.random() - 0.5) * 3.5;
      const z = Math.sin(theta) * r + (Math.random() - 0.5) * 0.8;

      particlePos[i * 3] = x;
      particlePos[i * 3 + 1] = y;
      particlePos[i * 3 + 2] = z;

      const mixedColor = Math.random() > 0.6 ? color2 : Math.random() > 0.5 ? color3 : color1;
      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xd4af37, 2.5);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x22c55e, 3.0);
    fillLight.position.set(-5, -3, 3);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xa3e635, 3.5, 10);
    rimLight.position.set(0, 4, -3);
    scene.add(rimLight);

    // 5. Pointer Tracking with Smooth Lerp
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouse.targetX = x * 1.5;
      mouse.targetY = y * 1.5;
    };

    window.addEventListener("mousemove", handlePointerMove);

    // 6. Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // 7. Render Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth pointer interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Subtle float and rotation
      sphereGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.15;
      sphereGroup.rotation.y = elapsedTime * 0.25 + mouse.x * 0.8;
      sphereGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.1 - mouse.y * 0.6;

      innerMesh.rotation.y = -elapsedTime * 0.5;
      innerMesh.rotation.z = elapsedTime * 0.3;

      // Differential ring rotations
      ring1.rotation.z = elapsedTime * 0.2;
      ring2.rotation.z = -elapsedTime * 0.15;
      ring3.rotation.z = elapsedTime * 0.1;

      ringGroup.rotation.y = mouse.x * 0.4;
      ringGroup.rotation.x = -mouse.y * 0.3;

      // Swirling particles
      particles.rotation.y = elapsedTime * 0.08;
      particles.rotation.z = Math.sin(elapsedTime * 0.1) * 0.05;

      // Camera parallax
      camera.position.x = mouse.x * 0.5;
      camera.position.y = -mouse.y * 0.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // 8. Cleanup
    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);

      sphereGeo.dispose();
      emeraldMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  if (webGLFailed) {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-forest-800 to-forest-500 blur-2xl opacity-60 animate-pulse" />
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] cursor-grab active:cursor-grabbing select-none"
      style={{ touchAction: "none" }}
    />
  );
}
