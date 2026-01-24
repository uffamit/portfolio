'use client';

import { useEffect, useRef, memo } from 'react';
import * as THREE from 'three';

const ParticleBackground = memo(() => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Detect device capabilities
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;
    const isLowEndDevice = navigator.hardwareConcurrency <= 2;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Disable particles on low-end mobile or if user prefers reduced motion
    if (isLowEndDevice && isMobile) {
      return;
    }

    // Adaptive particle count based on device capabilities
    let particleCount = 5000;
    if (isLowEndDevice) particleCount = 1000;
    else if (isMobile) particleCount = 300;
    else if (isTablet) particleCount = 1500;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer with aggressive optimizations
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile && !isLowEndDevice,
      alpha: true,
      powerPreference: isMobile || isLowEndDevice ? 'low-power' : 'high-performance',
      stencil: false,
      precision: isMobile ? 'lowp' : 'mediump',
    });
    
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.sortObjects = false; // Disable sorting for better performance
    currentMount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Particles
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.02 : 0.015,
      color: 0xffffff,
      transparent: true,
      opacity: isMobile ? 0.5 : 0.7,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Mouse interaction (disabled on mobile)
    const mouse = new THREE.Vector2(0.5, 0.5);
    const onMouseMove = (event: MouseEvent) => {
      if (isReducedMotion) return; // Respect user's motion preference
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    if (!isMobile && !isReducedMotion) {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
    }

    // Animation loop with reduced calculations
    const clock = new THREE.Clock();
    const targetFPS = isMobile ? 30 : 60;
    const frameDuration = 1000 / targetFPS;
    let lastFrameTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const deltaTime = now - lastFrameTime;

      // Throttle frame rate on mobile
      if (deltaTime < frameDuration && isMobile) {
        animationIdRef.current = requestAnimationFrame(animate);
        return;
      }

      lastFrameTime = now;
      const elapsedTime = clock.getElapsedTime();

      // Update particles rotation
      particleSystem.rotation.y = elapsedTime * 0.05;
      particleSystem.rotation.x = elapsedTime * 0.02;

      const positions = particleSystem.geometry.attributes.position.array as Float32Array;

      // Only update on desktop and if not reduced motion
      if (!isMobile && !isReducedMotion) {
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);
        const direction = raycaster.ray.direction.multiplyScalar(10);

        // Update only a subset of particles for better performance
        const updateInterval = isLowEndDevice ? 4 : 2;
        for (let i = 0; i < particleCount; i += updateInterval) {
          const i3 = i * 3;
          const particlePosition = new THREE.Vector3(
            positions[i3],
            positions[i3 + 1],
            positions[i3 + 2]
          );
          const distance = particlePosition.distanceTo(direction);

          if (distance < 0.5) {
            const force = (0.5 - distance) * 0.05;
            const repel = particlePosition
              .clone()
              .sub(direction)
              .normalize()
              .multiplyScalar(force);
            positions[i3] += repel.x;
            positions[i3 + 1] += repel.y;
            positions[i3 + 2] += repel.z;
          }
        }
      }

      particleSystem.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };
    animationIdRef.current = requestAnimationFrame(animate);

    // Handle Resize with debouncing
    let resizeTimeout: NodeJS.Timeout;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!currentMount || !rendererRef.current) return;
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        rendererRef.current.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }, 300);
    };

    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', onResize);
      if (!isMobile && !isReducedMotion) {
        window.removeEventListener('mousemove', onMouseMove);
      }

      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      if (currentMount && rendererRef.current?.domElement) {
        currentMount.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
        rendererRef.current = null;
      }

      // Cleanup Three.js resources
      particles.dispose();
      particleMaterial.dispose();
      scene.clear();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
});

ParticleBackground.displayName = 'ParticleBackground';

export default ParticleBackground;
