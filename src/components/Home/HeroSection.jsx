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

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.1, 10);
    camera.position.z = 1;

    const size = GRID;
    const data = new Float32Array(4 * size * size);
    const dataTexture = new THREE.DataTexture(
      data, size, size,
      THREE.RGBAFormat, THREE.FloatType
    );
    dataTexture.needsUpdate = true;

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

    const mouse = { x: 0, y: 0, px: 0, py: 0, vx: 0, vy: 0 };

    function resize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      material.uniforms.uResolution.value.set(w, h);

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
    <div
      className="relative w-full h-screen overflow-hidden"
   
    >
      {/* Canvas container */}
      <div
        ref={containerRef}
        className="absolute inset-0 md:w-full w-170 md:mx-0 -mx-35 h-full cursor-none"
      >
        <canvas
          ref={canvasRef}
          className="block w-180 h-full"
        />
      </div>

      {/* Hero text */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="px-4 sm:px-8 md:px-14 lg:px-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20 w-full">
          <h1
            className="text-center leading-none font-black uppercase tracking-tight"
            style={{
              fontSize: "clamp(2.5rem, 12vw, 7rem)",
              background: "linear-gradient(90deg, #E8382A 0%, #CC1E1E 45%, #A8A9AD 75%, #2A1E1A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 4px 40px rgba(13, 11, 11, 0.8)",
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
            "radial-gradient(ellipse at center, transparent 40%, #0D0B0B 100%)",
        }}
      />
    </div>
  );
}