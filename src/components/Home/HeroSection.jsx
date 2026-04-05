import { useEffect, useRef } from "react";
import * as THREE from "three";

const VERT_SHADER = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const FRAG_SHADER = `
  uniform sampler2D uTexture;
  uniform sampler2D uDataTexture;
  uniform vec2 uResolution;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;

    // Distortion from data texture
    vec4 offset = texture2D(uDataTexture, uv);
    uv += offset.rg * 0.04;

    gl_FragColor = texture2D(uTexture, uv);
  }
`;

export default function HeroSection() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const GRID = 256;
    const MOUSE_STRENGTH = 0.15;
    const STRENGTH = 0.4;
    const RELAXATION = 0.95;

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    /* ---------------- Data Texture ---------------- */
    const size = GRID;
    const data = new Float32Array(4 * size * size);

    const dataTexture = new THREE.DataTexture(
      data,
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    dataTexture.needsUpdate = true;

    /* ---------------- Image ---------------- */
    const texture = new THREE.TextureLoader().load(
      "https://cdn.prod.website-files.com/62b33683f2661c88002d3c47/62b350de9fb55e556af92bfc_2.jpg"
    );

    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;

    /* ---------------- Material ---------------- */
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: texture },
        uDataTexture: { value: dataTexture },
        uResolution: { value: new THREE.Vector2() },
      },
      vertexShader: VERT_SHADER,
      fragmentShader: FRAG_SHADER,
    });

    // FULLSCREEN PLANE (always fills screen)
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    /* ---------------- Mouse ---------------- */
    const mouse = { x: 0.5, y: 0.5, px: 0.5, py: 0.5, vx: 0, vy: 0 };

    function resize() {
      const w = container.clientWidth;
      const h = container.clientHeight;

      renderer.setSize(w, h);
      material.uniforms.uResolution.value.set(w, h);
    }

    function updateDataTexture() {
      const gridMouseX = size * mouse.x;
      const gridMouseY = size * (1 - mouse.y);
      const maxDist = size * MOUSE_STRENGTH;

      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const dx = gridMouseX - i;
          const dy = gridMouseY - j;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDist * maxDist) {
            const index = 4 * (i + size * j);
            const power = maxDist / Math.sqrt(distSq + 0.0001);

            data[index] += STRENGTH * mouse.vx * power * 50;
            data[index + 1] -= STRENGTH * mouse.vy * power * 50;
          }
        }
      }

      for (let i = 0; i < data.length; i += 4) {
        data[i] *= RELAXATION;
        data[i + 1] *= RELAXATION;
      }

      dataTexture.needsUpdate = true;
    }

    function updateMouse(x, y) {
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      mouse.x = x;
      mouse.y = y;
      mouse.vx = mouse.x - mouse.px;
      mouse.vy = mouse.y - mouse.py;
    }

    function onMouseMove(e) {
      const rect = container.getBoundingClientRect();
      updateMouse(
        (e.clientX - rect.left) / rect.width,
        (e.clientY - rect.top) / rect.height
      );
    }

    function onTouchMove(e) {
      const t = e.touches[0];
      const rect = container.getBoundingClientRect();
      updateMouse(
        (t.clientX - rect.left) / rect.width,
        (t.clientY - rect.top) / rect.height
      );
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

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("touchmove", onTouchMove);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Canvas */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Text */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <h1
          className="text-center font-black uppercase"
          style={{
            fontSize: "clamp(2.5rem, 12vw, 7rem)",
            background:
              "linear-gradient(90deg, #E8382A 0%, #CC1E1E 45%, #A8A9AD 75%, #2A1E1A 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Studio <br /> 35
        </h1>
      </div>
    </div>
  );
}