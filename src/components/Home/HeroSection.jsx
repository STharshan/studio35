import { useEffect, useRef } from "react";
import * as THREE from "three";

const VERT_SHADER = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAG_SHADER = `
  uniform sampler2D uTexture;
  uniform sampler2D uDataTexture;
  uniform vec2 uResolution;
  varying vec2 vUv;

  void main() {
    vec4 offset = texture2D(uDataTexture, vUv);
    vec2 distorted = vUv + offset.rg * 0.035;
    gl_FragColor = texture2D(uTexture, distorted);
  }
`;

export default function FungibleLove() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const stateRef = useRef({});

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const GRID = 607;
    const MOUSE_STRENGTH = 0.11;
    const STRENGTH = 0.36;
    const RELAXATION = 0.95;

    // --- Three.js setup ---
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.1, 10);
    camera.position.z = 1;

    // Data texture for mouse distortion
    const size = GRID;
    const data = new Float32Array(4 * size * size);
    const dataTexture = new THREE.DataTexture(
      data, size, size,
      THREE.RGBAFormat, THREE.FloatType
    );
    dataTexture.needsUpdate = true;

    // Load background image
    const loader = new THREE.TextureLoader();
    loader.crossOrigin = "anonymous";
    const texture = loader.load(
      "https://cdn.prod.website-files.com/62b33683f2661c88002d3c47/62b350de9fb55e556af92bfc_2.jpg"
    );
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: texture },
        uDataTexture: { value: dataTexture },
        uResolution: { value: new THREE.Vector2() },
      },
      vertexShader: VERT_SHADER,
      fragmentShader: FRAG_SHADER,
    });

    const geo = new THREE.PlaneGeometry(1, 1, 1, 1);
    const mesh = new THREE.Mesh(geo, material);
    scene.add(mesh);

    // Mouse state
    const mouse = { x: 0, y: 0, px: 0, py: 0, vx: 0, vy: 0 };

    function resize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      material.uniforms.uResolution.value.set(w, h);

      // Fix aspect ratio for plane
      const imageAspect = 1366 / 768;
      const containerAspect = w / h;
      if (containerAspect > imageAspect) {
        mesh.scale.set(1, imageAspect / containerAspect, 1);
      } else {
        mesh.scale.set(containerAspect / imageAspect, 1, 1);
      }
    }

    function updateDataTexture() {
      const gridMouseX = size * mouse.x;
      const gridMouseY = size * (1 - mouse.y);
      const maxDist = size * MOUSE_STRENGTH;
      const aspect = container.clientHeight / container.clientWidth;

      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const distance = Math.pow(
            (gridMouseX - i) * aspect, 2
          ) + Math.pow(gridMouseY - j, 2);
          const maxDistSq = maxDist * maxDist;

          if (distance < maxDistSq) {
            const index = 4 * (i + size * j);
            let power = maxDist / Math.sqrt(distance);
            power = Math.min(power, 10);
            data[index] += STRENGTH * 100 * mouse.vx * power;
            data[index + 1] -= STRENGTH * 100 * mouse.vy * power;
          }
        }
      }

      // Relaxation
      for (let i = 0; i < data.length; i += 4) {
        data[i] *= RELAXATION;
        data[i + 1] *= RELAXATION;
      }

      dataTexture.needsUpdate = true;
    }

    function onMouseMove(e) {
      const rect = container.getBoundingClientRect();
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      mouse.x = (e.clientX - rect.left) / rect.width;
      mouse.y = (e.clientY - rect.top) / rect.height;
      mouse.vx = mouse.x - mouse.px;
      mouse.vy = mouse.y - mouse.py;
    }

    function onTouchMove(e) {
      if (e.touches.length === 0) return;
      const t = e.touches[0];
      const rect = container.getBoundingClientRect();
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      mouse.x = (t.clientX - rect.left) / rect.width;
      mouse.y = (t.clientY - rect.top) / rect.height;
      mouse.vx = mouse.x - mouse.px;
      mouse.vy = mouse.y - mouse.py;
    }

    let raf;
    function animate() {
      raf = requestAnimationFrame(animate);
      updateDataTexture();
      renderer.render(scene, camera);
      mouse.vx *= 0.9;
      mouse.vy *= 0.9;
    }

    resize();
    animate();

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("touchmove", onTouchMove, { passive: true });

    stateRef.current = { renderer, raf, ro };

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("touchmove", onTouchMove);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black font-sans">
      {/* Canvas container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-none">
        <canvas
          ref={canvasRef}
          className="block w-full h-full"
        />
      </div>

      {/* Hero text */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="px-8 sm:px-14 md:px-20 pb-12 sm:pb-16 md:pb-20">
          <h1
            className="
              text-white text-center leading-none font-black uppercase
              text-8xl
              tracking-tight
            "
            style={{
              textShadow: "0 4px 40px rgba(0,0,0,0.35)",
            }}
          >
            Fungible
            <br />
            Love
          </h1>
        </div>
      </div>

      {/* Subtle vignette overlay */}
      <div
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}