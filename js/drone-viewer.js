import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/* ---------- helpers ---------- */
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const M = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: .5, metalness: .2, ...o });
const box = (w, h, d, m) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
const cyl = (rt, rb, h, m, s = 28) => new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, s), m);

function mats() {
  return {
    white: M(0xf1f3f4, { roughness: .32 }), cream: M(0xe9e4d6, { roughness: .4 }), red: M(0xc0392b),
    steel: M(0xcfd4d9, { metalness: .9, roughness: .22 }), carbon: M(0x16191c, { roughness: .35, metalness: .4 }),
    dark: M(0x2b3035, { roughness: .45, metalness: .5 }), grey: M(0x8b9096, { roughness: .55, metalness: .15 }),
    blue: M(0x3b82b6, { roughness: .4 }), black: M(0x0e0f10, { roughness: .5 }),
    glass: M(0xbfe3ea, { transparent: true, opacity: .3, roughness: .05, metalness: .1 }),
    lens: M(0x040506, { roughness: .1, metalness: .8 }),
    redLens: M(0xff4d4d, { emissive: 0xaa1111, roughness: .2 })
  };
}

function tube(a, b, r, m) {
  const dir = new THREE.Vector3().subVectors(b, a), len = dir.length();
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 18), m);
  mesh.position.copy(a).addScaledVector(dir, .5);
  mesh.quaternion.setFromUnitVectors(V(0, 1, 0), dir.normalize());
  return mesh;
}

function prop(radius, m, rotors) {
  const g = new THREE.Group();
  g.add(cyl(.07, .07, .07, m.dark, 16));
  [1, -1].forEach(s => { const b = box(radius, .014, .1, m.carbon); b.position.x = s * radius / 2; b.rotation.x = s * .12; g.add(b); });
  const disc = new THREE.Mesh(new THREE.CircleGeometry(radius, 48), new THREE.MeshBasicMaterial({ color: 0x9fe9cf, transparent: true, opacity: .07, side: THREE.DoubleSide, depthWrite: false }));
  disc.rotation.x = -Math.PI / 2; g.add(disc);
  rotors.push(g); return g;
}

function rotorUnit(g, pos, m, rotors, radius) {
  const mo = cyl(.15, .17, .28, m.dark); mo.position.copy(pos); g.add(mo);
  const p = prop(radius, m, rotors); p.position.set(pos.x, pos.y + .2, pos.z); g.add(p);
}

/* ---------- procedural models (stylised from the three designs) ---------- */
function buildShyena(m, rotors) {
  const g = new THREE.Group();
  g.add(box(3.1, .55, 1.0, m.white));
  const stripe = box(3.0, .14, 1.02, m.red); stripe.position.y = -.32; g.add(stripe);
  [-.95, 0, .95].forEach((x, i) => { const b = box(.7, .28, .7, m.steel); b.position.set(x, .42, 0); b.rotation.y = (i - 1) * .04; g.add(b); });
  [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(([sx, sz]) => {
    const a = V(sx * 1.4, .05, sz * .42), b = V(sx * 3.2, .12, sz * 2.0);
    g.add(tube(a, b, .075, m.carbon));
    rotorUnit(g, V(b.x, b.y + .14, b.z), m, rotors, 1.15);
  });
  return g;
}

function buildBajra(m, rotors) {
  const g = new THREE.Group();
  g.add(cyl(.62, .62, 2.3, m.grey, 40));
  const low = cyl(.62, .46, .8, m.grey, 40); low.position.y = -1.55; g.add(low);
  const seam = cyl(.635, .635, .04, m.dark, 40); seam.position.y = -.2; g.add(seam);
  const ring = cyl(.58, .64, .16, m.dark, 40); ring.position.y = 1.22; g.add(ring);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(.56, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2), m.glass); dome.scale.y = 1.25; dome.position.y = 1.3; g.add(dome);
  const l1 = new THREE.Mesh(new THREE.SphereGeometry(.17, 24, 16), m.lens); l1.position.set(-.1, 1.45, .36); g.add(l1);
  const l2 = new THREE.Mesh(new THREE.SphereGeometry(.09, 20, 14), m.lens); l2.position.set(.2, 1.52, .34); g.add(l2);
  const l3 = new THREE.Mesh(new THREE.SphereGeometry(.08, 20, 14), m.redLens); l3.position.set(.14, 1.34, .42); g.add(l3);
  const label = box(.28, .1, .02, m.black); label.position.set(.1, .3, .63); g.add(label);
  for (let i = 0; i < 4; i++) {
    const a = i * Math.PI / 2 + Math.PI / 4, dx = Math.cos(a), dz = Math.sin(a);
    const f = box(.05, .9, .6, m.grey); f.position.set(dx * .7, -1.85, dz * .7); f.rotation.y = Math.PI / 2 - a; g.add(f);
    const s = V(dx * .5, .1, dz * .5), e = V(dx * 1.95, .1, dz * 1.95);
    g.add(tube(s, e, .15, m.grey));
    const pod = cyl(.2, .2, .7, m.grey, 24); pod.position.copy(e); g.add(pod);
    const p1 = prop(.85, m, rotors); p1.position.set(e.x, e.y + .42, e.z); g.add(p1);
    const p2 = prop(.85, m, rotors); p2.position.set(e.x, e.y - .42, e.z); g.add(p2);
  }
  return g;
}

function buildChokh(m, rotors) {
  const g = new THREE.Group();
  g.add(box(2.5, .62, .95, m.cream));
  const plate = box(2.52, .07, .98, m.dark); plate.position.y = .35; g.add(plate);
  const under = box(.6, .5, .95, m.black); under.position.set(-1.0, -.5, 0); g.add(under);
  const oct = (x, mat) => { const o = cyl(.46, .46, .5, mat, 8); o.position.set(x, .65, 0); o.rotation.y = Math.PI / 8; return o; };
  g.add(oct(-.6, m.blue)); g.add(oct(.55, m.black));
  [-.28, 0, .28].forEach(z => { const t = new THREE.Mesh(new THREE.TorusGeometry(.06, .02, 8, 20), m.steel); t.rotation.x = Math.PI / 2; t.position.set(1.02, .4, z); g.add(t); });
  [1, -1].forEach(s => { const f = box(.05, .5, .45, m.dark); f.position.set(1.3, 0, s * .55); g.add(f); });
  [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(([sx, sz]) => {
    const a = V(sx * 1.15, .1, sz * .45), b = V(sx * 2.6, .12, sz * 1.75);
    g.add(tube(a, b, .08, m.black));
    rotorUnit(g, V(b.x, b.y + .14, b.z), m, rotors, .95);
  });
  return g;
}

const MODELS = {
  shyena: { build: buildShyena, cam: [6.5, 4.8, 10.5], ty: 0, floor: -1.4, ring: 3.8, size: 9, min: 7, max: 22 },
  bajra: { build: buildBajra, cam: [5.2, 2.4, 7.6], ty: -.25, floor: -2.55, ring: 2.4, size: 5.5, min: 5, max: 16 },
  chokh: { build: buildChokh, cam: [6, 4, 9], ty: 0, floor: -1.2, ring: 3.3, size: 7.5, min: 6, max: 20 }
};

/* ---------- viewer ---------- */
function initViewer(el) {
  if (el.dataset.ready) return; el.dataset.ready = '1';
  const cfg = MODELS[el.dataset.model] || MODELS.shyena;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  } catch (e) {
    if (el.dataset.photo) el.innerHTML = `<img src="${el.dataset.photo}" class="photo-fade w-full h-full object-contain" alt="">`;
    return;
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  el.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), .04).texture;
  const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(5, 8, 5); scene.add(key);
  const rim = new THREE.DirectionalLight(0x34d399, 1.6); rim.position.set(-6, 3, -5); scene.add(rim);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x0a1a14, .6));

  const camera = new THREE.PerspectiveCamera(38, 1, .1, 100);
  const home = V(...cfg.cam); camera.position.copy(home);
  const dist = home.length();
  const controls = new OrbitControls(camera, renderer.domElement);
  Object.assign(controls, { enableDamping: true, dampingFactor: .07, enablePan: false, minDistance: cfg.min, maxDistance: cfg.max, autoRotate: true, autoRotateSpeed: 1.4 });
  controls.target.set(0, cfg.ty, 0);
  renderer.domElement.style.touchAction = 'pan-y';   // vertical swipe still scrolls the page on phones

  const rotors = [];
  const holder = new THREE.Group(); scene.add(holder);
  let model = cfg.build(mats(), rotors); holder.add(model);

  /* soft ground glow + ring (keeps the drone grounded without a background box) */
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const x = c.getContext('2d'), gr = x.createRadialGradient(128, 128, 0, 128, 128, 128);
  gr.addColorStop(0, 'rgba(52,211,153,.45)'); gr.addColorStop(1, 'rgba(52,211,153,0)');
  x.fillStyle = gr; x.fillRect(0, 0, 256, 256);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(cfg.ring * 2.6, cfg.ring * 2.6), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }));
  glow.rotation.x = -Math.PI / 2; glow.position.y = cfg.floor; scene.add(glow);
  const ringMesh = new THREE.Mesh(new THREE.RingGeometry(cfg.ring, cfg.ring + .03, 96), new THREE.MeshBasicMaterial({ color: 0x34d399, transparent: true, opacity: .35, side: THREE.DoubleSide }));
  ringMesh.rotation.x = -Math.PI / 2; ringMesh.position.y = cfg.floor + .01; scene.add(ringMesh);

  /* optional: real model. Add data-glb="models/your-drone.glb" to use an exported CAD file */
  if (el.dataset.glb) {
    new GLTFLoader().load(el.dataset.glb, gltf => {
      const obj = gltf.scene, bb = new THREE.Box3().setFromObject(obj);
      const pivot = new THREE.Group(); obj.position.sub(bb.getCenter(V(0, 0, 0)));
      pivot.add(obj); pivot.scale.setScalar(cfg.size / bb.getSize(V(0, 0, 0)).length());
      holder.remove(model); rotors.length = 0; model = pivot; holder.add(model);
    }, undefined, () => console.warn('Could not load', el.dataset.glb, '- using built-in model'));
  }

  /* camera presets + UI */
  let goal = null, autoWanted = true, resumeT;
  const go = v => { goal = v; controls.autoRotate = false; };
  const api = {
    auto(btn) { autoWanted = !autoWanted; controls.autoRotate = autoWanted; btn.classList.toggle('on', autoWanted); },
    front() { go(V(0, dist * .12, dist)); }, side() { go(V(dist, dist * .12, 0)); },
    top() { go(V(0, dist * 1.02, .01)); }, reset() { go(home.clone()); }
  };
  const mode = el.dataset.ui || 'full';
  if (mode !== 'none') {
    const hint = document.createElement('div'); hint.className = 'dv-hint'; hint.textContent = 'Drag to rotate 360° · Scroll to zoom'; el.appendChild(hint);
  }
  if (mode === 'full') {
    const bar = document.createElement('div'); bar.className = 'dv-toolbar';
    [['Auto-rotate', 'auto'], ['Front', 'front'], ['Side', 'side'], ['Top', 'top'], ['Reset', 'reset']].forEach(([label, act]) => {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'dv-btn' + (act === 'auto' ? ' on' : ''); b.textContent = label;
      b.onclick = () => api[act](b); bar.appendChild(b);
    });
    el.appendChild(bar);
  }
  controls.addEventListener('start', () => { goal = null; controls.autoRotate = false; clearTimeout(resumeT); });
  controls.addEventListener('end', () => { resumeT = setTimeout(() => { if (autoWanted) controls.autoRotate = true; }, 3000); });

  /* sizing + render loop (pauses off-screen) */
  const resize = () => {
    const w = el.clientWidth, h = el.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(el); resize();
  let visible = true; new IntersectionObserver(e => { visible = e[0].isIntersecting; }).observe(el);
  const clock = new THREE.Clock();
  (function loop() {
    requestAnimationFrame(loop);
    if (!visible || document.hidden) return;
    const dt = Math.min(clock.getDelta(), .05), t = clock.elapsedTime;
    rotors.forEach((r, i) => { r.rotation.y += dt * 22 * (i % 2 ? -1 : 1); });
    holder.position.y = Math.sin(t * 1.4) * .07;
    if (goal) { camera.position.lerp(goal, .08); if (camera.position.distanceTo(goal) < .02) goal = null; }
    controls.update();
    renderer.render(scene, camera);
  })();
}

const start = () => document.querySelectorAll('.drone-viewer').forEach(initViewer);
window.initDroneViewers = start;
start();
