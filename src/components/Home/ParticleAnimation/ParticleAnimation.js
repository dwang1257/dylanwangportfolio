import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleAnimation = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    
    // Set size to match container
    const size = 500;
    renderer.setSize(size, size);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Particle system
    const particleCount = 1000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Positions - create a sphere-like distribution
      const radius = Math.random() * 8 + 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      // Velocities
      velocities[i3] = (Math.random() - 0.5) * 0.1;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.05;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.03;
      
      // Colors - gradient from your theme color #9C9C6E with higher intensity
      const intensity = Math.random() * 0.3 + 0.8;
      colors[i3] = 0.65 * intensity;     // R
      colors[i3 + 1] = 0.65 * intensity; // G
      colors[i3 + 2] = 0.45 * intensity; // B
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle material
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x9C9C6E, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x9C9C6E, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Camera position
    camera.position.z = 15;
    camera.position.y = 2;
    camera.lookAt(0, 0, 0);


    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.01;
      
      // Update particle positions
      const positions = particleSystem.geometry.attributes.position.array;
      const colors = particleSystem.geometry.attributes.color.array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Wave motion
        const wave = Math.sin(time + i * 0.01) * 0.5;
        positions[i3] += velocities[i3] + wave * 0.001;
        positions[i3 + 1] += velocities[i3 + 1] + Math.cos(time + i * 0.02) * 0.001;
        positions[i3 + 2] += velocities[i3 + 2] + wave * 0.001;
        
        // Boundary check - reset particles that go too far
        const distance = Math.sqrt(
          positions[i3] ** 2 + 
          positions[i3 + 1] ** 2 + 
          positions[i3 + 2] ** 2
        );
        
        if (distance > 15) {
          const radius = Math.random() * 2 + 1;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          
          positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
          positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
          positions[i3 + 2] = radius * Math.cos(phi);
        }
        
        // Color pulsing with brighter values
        const pulse = Math.sin(time * 2 + i * 0.1) * 0.2 + 0.9;
        colors[i3] = 0.65 * pulse;
        colors[i3 + 1] = 0.65 * pulse;
        colors[i3 + 2] = 0.45 * pulse;
      }
      
      particleSystem.geometry.attributes.position.needsUpdate = true;
      particleSystem.geometry.attributes.color.needsUpdate = true;
      
      // Rotate the entire system
      particleSystem.rotation.x += 0.002;
      particleSystem.rotation.y += 0.003;
      
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    sceneRef.current = { scene, camera, renderer, particleSystem };

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      // Dispose of Three.js resources
      if (particles) particles.dispose();
      if (particleMaterial) particleMaterial.dispose();
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{
        width: '500px',
        height: '500px',
        position: 'absolute',
        top: '0',
        right: '10%',
        bottom: '0',
        left: '850px',
        margin: 'auto',
        zIndex: 0,
        opacity: 1,
        animation: 'fadeInUp 1.5s ease-out'
      }}
    />
  );
};

export default ParticleAnimation;