(function () {
  const D = window.DRONES, key = document.body.dataset.drone, d = D && D[key];
  if (!d) return;
  document.title = d.name + ' | Clover Systems';
  const others = Object.values(D).filter(x => x.key !== key);
  const on = 'bg-clover-500 text-ink', off = 'border border-clover-500/40 text-clover-400';
  const eyebrow = t => `<p class="text-clover-400 uppercase tracking-[.3em] text-xs mb-3">${t}</p>`;
  const SECTIONS = [['overview', 'Overview'], ['how', 'How it works'], ['areas', 'Where it\'s used'], ['why', 'Why you need it'], ['specs', 'Specs & features']];

  document.getElementById('drone-root').innerHTML = `
  <!-- HERO -->
  <section class="relative pt-32 pb-16 grid-bg overflow-hidden">
    <canvas id="particles" class="absolute inset-0 w-full h-full"></canvas>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-ink"></div>
    <div class="relative max-w-7xl mx-auto px-5">
      <nav class="text-xs uppercase tracking-widest text-gray-500 mb-6"><a href="index.html" class="hover:text-clover-400">Home</a> / <a href="fleet.html" class="hover:text-clover-400">Fleet</a> / <span class="text-clover-400">${d.name}</span></nav>
      <div class="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div class="flex gap-2 mb-3" id="viewTabs">
            <button data-v="3d" class="px-4 py-1.5 rounded text-xs uppercase tracking-widest font-semibold transition ${on}">3D · 360°</button>
            <button data-v="photo" class="px-4 py-1.5 rounded text-xs uppercase tracking-widest font-semibold transition ${off}">Photo</button>
          </div>
          <div class="relative h-[420px] md:h-[540px]">
            <div class="absolute inset-0 bg-clover-500/10 blur-3xl rounded-full"></div>
            <div id="v3d" class="absolute inset-0"><div class="drone-viewer" data-model="${d.key}" data-ui="full" data-photo="${d.photo}"></div></div>
            <div id="vphoto" class="absolute inset-0 hidden flex items-center justify-center">
              <img src="${d.photo}" alt="${d.name}" class="photo-fade w-full h-full object-contain"
                   onerror="this.replaceWith(Object.assign(document.createElement('p'),{className:'text-center text-gray-500 text-sm',textContent:'Add your photo at ${d.photo}'}))">
            </div>
          </div>
        </div>
        <div>
          <span class="inline-block px-3 py-1 rounded bg-clover-500 text-ink text-xs font-mono uppercase tracking-widest">${d.role}</span>
          <h1 class="font-display text-6xl md:text-7xl font-bold text-white mt-3">${d.name}</h1>
          <p class="text-clover-400 mt-1 mb-5 font-medium">${d.tagline}</p>
          <p class="text-gray-400 leading-relaxed mb-7">${d.desc}</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">${d.specs.map(s => `<div class="glass rounded-lg p-4"><div class="text-[11px] uppercase tracking-widest text-gray-500">${s[0]}</div><div class="font-display text-2xl text-white">${s[1]}</div></div>`).join('')}</div>
          <div class="flex flex-wrap gap-4">
            <a href="contact.html?drone=${encodeURIComponent(d.name)}" class="px-7 py-3 rounded bg-clover-500 text-ink font-semibold hover:bg-clover-400 hover:-translate-y-0.5 transition">Request a briefing</a>
            <a href="fleet.html" class="px-7 py-3 rounded border border-clover-500/60 text-clover-400 hover:bg-clover-500/10 transition">← All platforms</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION NAV -->
  <div id="secNav" class="sticky top-[68px] z-40 border-y border-clover-500/15 bg-ink/85 backdrop-blur">
    <div class="max-w-7xl mx-auto px-5 flex gap-1 overflow-x-auto text-xs uppercase tracking-widest whitespace-nowrap">
      ${SECTIONS.map(([id, t]) => `<a href="#${id}" data-sec="${id}" class="px-4 py-4 text-gray-400 border-b-2 border-transparent hover:text-clover-400 transition">${t}</a>`).join('')}
    </div>
  </div>

  <!-- OVERVIEW -->
  <section id="overview" class="scroll-mt-32 max-w-7xl mx-auto px-5 pt-24">
    <div class="grid lg:grid-cols-5 gap-12">
      <div class="lg:col-span-3 reveal">
        ${eyebrow('Mission overview')}
        <h2 class="font-display text-4xl md:text-5xl font-bold text-white mb-6">${d.missionTitle}</h2>
        ${d.mission.map(p => `<p class="text-gray-400 leading-relaxed mb-4 text-[17px]">${p}</p>`).join('')}
      </div>
      <div class="lg:col-span-2 reveal">
        <div class="glass rounded-2xl p-7 h-full">
          <h3 class="font-display text-2xl text-white mb-5">What it does</h3>
          <ul class="space-y-3">${d.does.map(x => `<li class="flex gap-3"><span class="text-clover-400 mt-0.5">▸</span><span>${x}</span></li>`).join('')}</ul>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section id="how" class="scroll-mt-32 max-w-7xl mx-auto px-5 pt-24">
    <div class="reveal mb-12 max-w-2xl">
      ${eyebrow('How it works')}
      <h2 class="font-display text-4xl md:text-5xl font-bold text-white">${d.howTitle}</h2>
    </div>
    <div class="relative">
      <div class="hidden md:block absolute top-6 left-6 right-6 h-px bg-gradient-to-r from-clover-500/60 via-clover-500/30 to-transparent"></div>
      <div class="grid md:grid-cols-5 gap-6">
        ${d.how.map((s, i) => `<div class="reveal relative" style="transition-delay:${i * .1}s">
          <div class="relative z-10 w-12 h-12 rounded-full bg-ink border-2 border-clover-400 text-clover-400 font-display text-xl font-bold flex items-center justify-center mb-4 shadow-[0_0_20px_-4px_rgba(52,211,153,.7)]">${i + 1}</div>
          <h3 class="font-display text-xl text-white mb-2">${s[0]}</h3>
          <p class="text-sm text-gray-400 leading-relaxed">${s[1]}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- AREAS -->
  <section id="areas" class="scroll-mt-32 mt-24 bg-panel border-y border-clover-500/10 py-20">
    <div class="max-w-7xl mx-auto px-5">
      <div class="reveal mb-12 max-w-2xl">
        ${eyebrow('Applications')}
        <h2 class="font-display text-4xl md:text-5xl font-bold text-white">${d.areasTitle}</h2>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        ${d.areas.map((a, i) => `<div class="reveal glass rounded-xl p-6 card-glow" style="transition-delay:${(i % 4) * .08}s">
          <div class="text-3xl mb-3">${a[0]}</div>
          <h3 class="font-display text-xl text-white font-semibold mb-2">${a[1]}</h3>
          <p class="text-sm text-gray-400 leading-relaxed">${a[2]}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- WHY -->
  <section id="why" class="scroll-mt-32 max-w-7xl mx-auto px-5 pt-24">
    <div class="grid lg:grid-cols-5 gap-12">
      <div class="lg:col-span-2 reveal lg:sticky lg:top-40 self-start">
        ${eyebrow('The need')}
        <h2 class="font-display text-4xl md:text-5xl font-bold text-white mb-5">${d.whyTitle}</h2>
        <p class="text-gray-400 leading-relaxed">The ${d.name} exists to close a specific gap in today's operations. These are the reasons it matters.</p>
      </div>
      <div class="lg:col-span-3 space-y-4">
        ${d.why.map((w, i) => `<div class="reveal glass rounded-xl p-6 flex gap-5 card-glow" style="transition-delay:${i * .06}s">
          <div class="font-display text-4xl text-clover-400/80 leading-none">${String(i + 1).padStart(2, '0')}</div>
          <div><h3 class="font-display text-xl text-white mb-1">${w[0]}</h3><p class="text-sm text-gray-400 leading-relaxed">${w[1]}</p></div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- SPECS -->
  <section id="specs" class="scroll-mt-32 max-w-7xl mx-auto px-5 pt-24">
    <div class="grid lg:grid-cols-2 gap-12">
      <div class="reveal">
        ${eyebrow('Capability profile')}
        <h2 class="font-display text-4xl font-bold text-white mb-8">Performance at a glance</h2>
        <div class="space-y-5" id="bars">${d.bars.map(b => `<div><div class="flex justify-between text-xs uppercase tracking-widest mb-1"><span>${b[0]}</span><span class="text-clover-400">${b[1]}%</span></div><div class="bar h-2 bg-white/10 rounded"><span data-w="${b[1]}"></span></div></div>`).join('')}</div>
        <p class="text-xs text-gray-600 mt-4">Relative comparison across the Clover fleet.</p>
      </div>
      <div class="reveal">
        ${eyebrow('Key features')}
        <h2 class="font-display text-4xl font-bold text-white mb-8">What it delivers</h2>
        <ul class="space-y-3">${d.highlights.map(h => `<li class="glass rounded-lg px-5 py-4 flex gap-3 items-start"><span class="text-clover-400 mt-0.5">✔</span><span>${h}</span></li>`).join('')}</ul>
      </div>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-14">
      ${d.advantages.map((a, i) => `<div class="reveal text-center glass rounded-xl p-5 card-glow" style="transition-delay:${i * .06}s"><div class="text-3xl mb-2">${a[0]}</div><div class="font-display text-lg text-white">${a[1]}</div><div class="text-xs text-gray-500 mt-1">${a[2]}</div></div>`).join('')}
    </div>
  </section>

  <!-- OTHERS -->
  <section class="mt-24 bg-panel border-y border-clover-500/10 py-20">
    <div class="max-w-7xl mx-auto px-5">
      <div class="text-center mb-10 reveal">${eyebrow('Explore more')}<h2 class="font-display text-4xl font-bold text-white">Other Clover platforms</h2></div>
      <div class="grid md:grid-cols-2 gap-6">${others.map(o => `<div class="reveal glass rounded-2xl overflow-hidden card-glow flex flex-col sm:flex-row">
        <div class="sm:w-1/2 h-60"><div class="drone-viewer" data-model="${o.key}" data-ui="none"></div></div>
        <div class="p-6 sm:w-1/2 flex flex-col"><span class="text-xs uppercase tracking-[.25em] text-clover-400">${o.role}</span><h3 class="font-display text-3xl text-white font-bold mt-1">${o.name}</h3><p class="text-sm text-gray-400 mt-2 flex-1">${o.tagline}</p><a href="${o.page}" class="mt-4 text-clover-400 font-semibold">View details →</a></div></div>`).join('')}</div>
    </div>
  </section>`;

  /* 3D / photo tabs */
  document.querySelectorAll('#viewTabs button').forEach(b => b.addEventListener('click', () => {
    const photo = b.dataset.v === 'photo';
    document.getElementById('v3d').classList.toggle('hidden', photo);
    document.getElementById('vphoto').classList.toggle('hidden', !photo);
    document.querySelectorAll('#viewTabs button').forEach(x => { x.className = 'px-4 py-1.5 rounded text-xs uppercase tracking-widest font-semibold transition ' + (x === b ? on : off); });
  }));

  /* animate bars when visible */
  const bio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('.bar > span').forEach(s => s.style.width = s.dataset.w + '%'); bio.unobserve(e.target); } }), { threshold: .3 });
  bio.observe(document.getElementById('bars'));

  /* highlight the current section in the sticky nav */
  const links = [...document.querySelectorAll('#secNav a')];
  const setActive = () => {
    let cur = SECTIONS[0][0];
    SECTIONS.forEach(([id]) => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < 200) cur = id; });
    links.forEach(a => {
      const act = a.dataset.sec === cur;
      a.classList.toggle('text-clover-400', act); a.classList.toggle('border-clover-400', act);
      a.classList.toggle('text-gray-400', !act); a.classList.toggle('border-transparent', !act);
    });
  };
  addEventListener('scroll', setActive, { passive: true }); setActive();

  if (window.initReveal) window.initReveal();
  if (window.initDroneViewers) window.initDroneViewers();
})();
