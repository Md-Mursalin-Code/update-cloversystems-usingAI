(function () {
  'use strict';
  const D = window.DRONES || {};
  const drones = Object.values(D);
  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const fleetPages = drones.map(d => d.page).concat('fleet.html');
  const NAV = [['Home', 'index.html'], ['About', 'about.html'], ['Fleet', 'fleet.html'], ['Contact', 'contact.html']];
  const isActive = h => h === page || (h === 'fleet.html' && fleetPages.includes(page));
  const $ = s => document.querySelector(s);

  /* ---------- shared svg defs + logo ---------- */
  const defs = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#34d399"/><stop offset="1" stop-color="#059669"/></linearGradient>
    <path id="petal" d="M-14,-12 C-40,-70 -72,-120 -72,-165 C-72,-225 -38,-270 0,-306 C38,-270 72,-225 72,-165 C72,-120 40,-70 14,-12 Z"/>
  </defs></svg>`;
  const logo = (s = 42, fill = 'url(#lg)') => `<svg width="${s}" height="${s}" viewBox="-310 -310 620 620" aria-hidden="true"><g fill="${fill}"><use href="#petal"/><use href="#petal" transform="rotate(90)"/><use href="#petal" transform="rotate(180)"/><use href="#petal" transform="rotate(270)"/></g></svg>`;

  /* ---------- header ---------- */
  const header = $('#site-header');
  if (header) {
    const dd = drones.map(d => `<a href="${d.page}" class="block px-4 py-2 hover:bg-clover-500/10"><span class="font-display text-lg text-white">${d.name}</span><span class="block text-[11px] uppercase tracking-widest text-gray-500">${d.role}</span></a>`).join('');
    const link = (t, h) => `<a href="${h}" class="hover:text-clover-400 transition ${isActive(h) ? 'text-clover-400' : ''}">${t}</a>`;
    const desktop = NAV.map(([t, h]) => {
      if (t === 'Fleet') return `<div class="relative group"><a href="${h}" class="hover:text-clover-400 transition ${isActive(h) ? 'text-clover-400' : ''}">Fleet ▾</a><div class="absolute left-1/2 -translate-x-1/2 top-full pt-4 hidden group-hover:block"><div class="glass rounded-lg w-60 py-2 normal-case tracking-normal">${dd}</div></div></div>`;
      if (t === 'Contact') return `<a href="${h}" class="px-5 py-2 rounded bg-clover-500 text-ink font-semibold hover:bg-clover-400 transition">Contact</a>`;
      return link(t, h);
    }).join('');
    const mobile = NAV.map(([t, h]) => `<a href="${h}" class="block py-1 ${isActive(h) ? 'text-clover-400' : ''}">${t}</a>`).join('') +
      drones.map(d => `<a href="${d.page}" class="block py-1 pl-4 text-gray-400">↳ ${d.name}</a>`).join('');
    header.innerHTML = defs + `<header id="nav" class="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        <a href="index.html" class="flex items-center gap-3 group">
          <span class="transition-transform duration-700 group-hover:rotate-90">${logo(42)}</span>
          <span class="font-display text-2xl font-bold tracking-widest text-white">CLOVER <span class="text-clover-400">SYSTEMS</span></span>
        </a>
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">${desktop}</nav>
        <button id="menuBtn" class="md:hidden text-white" aria-label="Menu"><svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h20M4 14h20M4 21h20"/></svg></button>
      </div>
      <div id="mobileMenu" class="hidden md:hidden glass px-5 py-4 text-sm uppercase tracking-wider">${mobile}</div>
    </header><div id="progress" class="fixed top-0 left-0 h-[3px] bg-clover-400 z-[60]" style="width:0"></div>`;
    $('#menuBtn').onclick = () => $('#mobileMenu').classList.toggle('hidden');
  }

  /* ---------- footer ---------- */
  const footer = $('#site-footer');
  if (footer) {
    footer.innerHTML = `<footer class="border-t border-clover-500/15 bg-panel mt-24">
      <div class="max-w-7xl mx-auto px-5 py-14 grid md:grid-cols-4 gap-10 text-sm">
        <div class="md:col-span-2">
          <div class="flex items-center gap-3 mb-4">${logo(40)}<span class="font-display text-2xl font-bold tracking-widest text-white">CLOVER <span class="text-clover-400">SYSTEMS</span></span></div>
          <p class="text-gray-500 max-w-sm">Bangladesh-based drone defence company building man-portable surveillance and interceptor drones.</p>
        </div>
        <div><h4 class="font-display text-lg text-white mb-3 tracking-wider">Pages</h4><div class="space-y-2">${NAV.map(([t, h]) => `<a href="${h}" class="block hover:text-clover-400">${t}</a>`).join('')}</div></div>
        <div><h4 class="font-display text-lg text-white mb-3 tracking-wider">Fleet</h4><div class="space-y-2">${drones.map(d => `<a href="${d.page}" class="block hover:text-clover-400">${d.name}</a>`).join('')}</div></div>
      </div>
      <div class="border-t border-white/5 py-5 text-center text-xs text-gray-500">© ${new Date().getFullYear()} Clover Systems. All rights reserved.</div>
    </footer>`;
  }

  /* ---------- CTA banner ---------- */
  const cta = $('#site-cta');
  if (cta) cta.innerHTML = `<section class="max-w-5xl mx-auto px-5 mt-24"><div class="reveal glass rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
    <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-clover-500/20 blur-3xl rounded-full"></div>
    <div class="relative"><h2 class="font-display text-4xl md:text-5xl font-bold text-white">Ready to see the fleet in action?</h2>
    <p class="text-gray-400 mt-3 max-w-xl mx-auto">Talk to our team about the platform that fits your mission.</p>
    <a href="contact.html" class="inline-block mt-8 px-8 py-3 rounded bg-clover-500 text-ink font-semibold hover:bg-clover-400 hover:-translate-y-0.5 transition">Request a briefing</a></div></div></section>`;

  /* ---------- fleet cards (home) ---------- */
  const cards = $('#fleet-cards');
  if (cards) cards.innerHTML = drones.map((d, i) => `<div class="reveal glass rounded-2xl overflow-hidden card-glow flex flex-col" style="transition-delay:${i * .1}s">
      <div class="h-72 relative bg-gradient-to-b from-clover-500/5 to-transparent"><div class="drone-viewer" data-model="${d.key}" data-ui="none"></div></div>
      <div class="p-6 flex-1 flex flex-col">
        <span class="text-xs uppercase tracking-[.25em] text-clover-400">${d.role}</span>
        <h3 class="font-display text-3xl text-white font-bold mt-1">${d.name}</h3>
        <p class="text-sm text-gray-400 mt-2 flex-1">${d.tagline}</p>
        <div class="flex flex-wrap gap-2 mt-4">${d.chips.map(c => `<span class="px-3 py-1 rounded-full bg-clover-500/10 border border-clover-500/30 text-xs text-clover-400">${c}</span>`).join('')}</div>
        <a href="${d.page}" class="mt-6 inline-flex items-center gap-2 text-clover-400 font-semibold hover:gap-3 transition-all">View details <span>→</span></a>
      </div></div>`).join('');

  /* ---------- fleet list + compare table (fleet page) ---------- */
  const list = $('#fleet-list');
  if (list) list.innerHTML = drones.map((d, i) => `<section class="py-14 border-t border-white/5"><div class="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center">
      <div class="reveal ${i % 2 ? 'lg:order-2' : ''}"><div class="relative h-[360px] md:h-[460px]"><div class="absolute inset-0 bg-clover-500/10 blur-3xl rounded-full"></div><div class="drone-viewer" data-model="${d.key}" data-ui="hint"></div></div></div>
      <div class="reveal">
        <span class="text-xs uppercase tracking-[.3em] text-clover-400">${d.role}</span>
        <h2 class="font-display text-5xl md:text-6xl font-bold text-white mt-1">${d.name}</h2>
        <p class="text-clover-400 mt-1 mb-4">${d.tagline}</p>
        <p class="text-gray-400 leading-relaxed mb-6">${d.desc}</p>
        <div class="grid grid-cols-2 gap-3 mb-7">${d.specs.slice(0, 4).map(s => `<div class="glass rounded-lg p-4"><div class="text-[11px] uppercase tracking-widest text-gray-500">${s[0]}</div><div class="font-display text-2xl text-white">${s[1]}</div></div>`).join('')}</div>
        <a href="${d.page}" class="inline-block px-7 py-3 rounded bg-clover-500 text-ink font-semibold hover:bg-clover-400 transition">Full details →</a>
      </div></div></section>`).join('');
  const tb = $('#compare-body');
  if (tb) tb.innerHTML = drones.map(d => `<tr class="hover:bg-clover-500/5"><td class="p-4"><a href="${d.page}" class="font-display text-lg text-white hover:text-clover-400">${d.name}</a></td><td class="p-4">${d.role}</td><td class="p-4">${d.table.weight}</td><td class="p-4">${d.table.payload}</td><td class="p-4">${d.table.endurance}</td><td class="p-4">${d.table.range}</td></tr>`).join('');

  /* ---------- scroll: reveal, progress, nav, counters ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } }), { threshold: .12 });
  window.initReveal = () => document.querySelectorAll('.reveal:not(.show)').forEach(el => io.observe(el));
  window.initReveal();
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, to = +el.dataset.to; let n = 0; const step = Math.max(1, Math.ceil(to / 50));
    const t = setInterval(() => { n += step; if (n >= to) { n = to; clearInterval(t); } el.textContent = n; }, 30);
    cio.unobserve(el);
  }), { threshold: .6 });
  document.querySelectorAll('.count').forEach(el => cio.observe(el));
  addEventListener('scroll', () => {
    const h = document.documentElement, p = $('#progress');
    if (p) p.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
    const nav = $('#nav'); if (nav) nav.classList.toggle('glass', scrollY > 40);
  }, { passive: true });

  /* ---------- typed headline ---------- */
  const typed = $('#typed');
  if (typed) {
    const words = JSON.parse(typed.dataset.words || '[]'); let w = 0, c = 0, del = false;
    (function type() {
      const word = words[w]; typed.textContent = word.slice(0, c);
      if (!del && c < word.length) { c++; return setTimeout(type, 90); }
      if (!del) { del = true; return setTimeout(type, 1400); }
      if (c > 0) { c--; return setTimeout(type, 45); }
      del = false; w = (w + 1) % words.length; setTimeout(type, 300);
    })();
  }

  /* ---------- particle network ---------- */
  const cv = $('#particles');
  if (cv) {
    const ctx = cv.getContext('2d'); let P = [];
    const size = () => { cv.width = cv.offsetWidth; cv.height = cv.offsetHeight; P = Array.from({ length: Math.min(80, Math.floor(cv.width / 16)) }, () => ({ x: Math.random() * cv.width, y: Math.random() * cv.height, vx: (Math.random() - .5) * .5, vy: (Math.random() - .5) * .5 })); };
    size(); addEventListener('resize', size);
    (function draw() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      P.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > cv.width) p.vx *= -1; if (p.y < 0 || p.y > cv.height) p.vy *= -1;
        ctx.fillStyle = 'rgba(52,211,153,.7)'; ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, 6.3); ctx.fill();
        for (let j = i + 1; j < P.length; j++) { const q = P[j], d = Math.hypot(p.x - q.x, p.y - q.y); if (d < 130) { ctx.strokeStyle = `rgba(16,185,129,${.18 * (1 - d / 130)})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); } }
      });
      requestAnimationFrame(draw);
    })();
  }

  /* ---------- contact form ---------- */
  const form = $('#form');
  if (form) form.addEventListener('submit', e => { e.preventDefault(); $('#ok').classList.remove('hidden'); form.reset(); });
  const sel = $('#drone-select');
  if (sel) { const q = new URLSearchParams(location.search).get('drone'); if (q) [...sel.options].forEach(o => { if (o.textContent.includes(q)) sel.value = o.value; }); }
})();
