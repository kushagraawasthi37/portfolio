(() => {
  'use strict';

  /* ═════════ Content ═════════ */

const TOOLKIT = [
  { name: 'Languages', items: ['JavaScript', 'TypeScript', 'C++', 'Python', 'SQL'] },
  { name: 'Frontend', items: ['React', 'Zustand', 'TanStack Query', 'Tailwind CSS'] },
  { name: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'JWT'] },
  { name: 'Databases', items: ['MongoDB', 'PostgreSQL', 'Redis', 'Prisma'] },
  { name: 'System Design', items: ['API Gateways', 'Caching', 'Microservice Backend Architecture', 'Distributed Rate Limiting'] },
  { name: 'AI & ML', items: ['LangGraph', 'LangChain', 'RAG','Agentic RAG'] },
  { name: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Postman'] },
  { name: 'Fundamentals', items: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'] }
];


const PROJECTS = [
  {
    short: 'API Gateway',
    title: 'API Gateway Dashboard',
    cat: 'Backend Engineering / Full Stack',
    img: 'img/projects/api-gateway.webp',
    cap: 'Interface preview · illustrative',
    github: 'https://github.com/kushagraawasthi37/api-gateway-dashboard',
    stack: ['Node.js', 'Express.js', 'React.js', 'PostgreSQL', 'Prisma', 'Redis', 'JWT'],
    overview: 'A centralized API gateway with a React dashboard for managing services, routes, authentication, and traffic policies through a single interface.',
    highlights: [
      'Built a reverse proxy supporting streamed, binary, and multipart requests.',
      'Implemented JWT authentication, API keys, and route-level authorization.',
      'Added SSRF protection and trusted-proxy configuration.',
      'Built Redis-backed distributed rate limiting and response caching.',
      'Isolated cached responses by client to prevent data leakage.',
      'Designed multi-tenant projects, health checks, and circuit breakers.',
      'Managed PostgreSQL data models and JSON-to-database migration.'
    ],
    demo: 'API routing, security, caching, and backend architecture.'
  },
  {
    short: 'NeuralShop',
    title: 'NeuralShop',
    cat: 'Full-Stack Development / E-Commerce',
    img: 'img/projects/neuralshop.webp',
    cap: 'Project screenshot',
    github: 'https://github.com/kushagraawasthi37/neuralshop',
    stack: ['React 19', 'Vite', 'Zustand', 'TanStack Query', 'Node.js', 'MongoDB', 'PostgreSQL'],
    overview: 'A fashion e-commerce platform bringing together a responsive storefront, admin dashboard, product discovery, cart management, and checkout.',
    highlights: [
      'Built storefront and admin experiences for managing the shopping journey.',
      'Implemented protected routes and lazy-loaded pages.',
      'Managed authentication and cart state with Zustand.',
      'Used TanStack Query for server-state caching and synchronization.',
      'Integrated Google sign-in and token-refresh handling.',
      'Built validated checkout flows with React Hook Form, Zod, and Razorpay.'
    ],
    demo: 'E-commerce workflows, frontend state, authentication, and checkout.'
  },
  {
    short: 'VibeHub',
    title: 'VibeHub',
    cat: 'Real-Time Full-Stack Application',
    img: 'img/projects/vibehub.webp',
    cap: 'Interface preview · sample content',
    github: 'https://github.com/kushagraawasthi37/vibehub',
    stack: ['React.js', 'Zustand', 'TanStack Query', 'Socket.IO', 'Node.js', 'MongoDB'],
    overview: 'A social platform built around interactive feeds, real-time conversations, and responsive experiences for connecting with people.',
    highlights: [
      'Built real-time messaging and notifications with Socket.IO.',
      'Implemented infinite feed scrolling with cursor-based pagination.',
      'Added optimistic likes and saves with rollback on failure.',
      'Combined lazy loading and query caching for smoother interactions.'
    ],
    demo: 'Real-time communication, social interactions, and frontend performance.'
  },
  {
    short: 'CodeSync',
    title: 'CodeSync',
    cat: 'Developer Tools / Automation',
    img: 'img/projects/codesync.webp',
    cap: 'Interface preview · illustrative',
    github: 'https://github.com/kushagraawasthi37/codesync',
    stack: ['JavaScript', 'GitHub Git Data API', 'REST APIs', 'Automated Testing'],
    overview: 'A coding-submission tracker that syncs solutions to GitHub and organizes programming practice across platforms, topics, and problems.',
    highlights: [
      'Designed a shared submission format across coding platforms.',
      'Separated platform-specific extraction from GitHub synchronization.',
      'Built repository updates using the GitHub Git Data API.',
      'Added ordered commit processing and rate-limit-aware handling.',
      'Supported backward-compatible state migration.',
      'Covered core workflows with 29 automated tests.'
    ],
    demo: 'Developer automation, API integration, and reliable synchronization.'
  },
  {
    short: 'ResearchBot',
    title: 'ResearchBot',
    cat: 'AI Engineering / Agentic Applications',
    img: 'img/projects/researchbot.webp',
    cap: 'Interface preview · illustrative',
    github: 'https://github.com/kushagraawasthi37/researchbot',
    stack: ['Python', 'LangGraph', 'LangChain', 'ChromaDB', 'Ollama', 'RAGAS', 'Streamlit'],
    overview: 'An AI research assistant that combines document retrieval, database queries, and web search to answer questions using relevant information.',
    highlights: [
      'Built a LangGraph workflow connecting document search, SQLite queries, and web search.',
      'Ran local Qwen2.5 3B models through Ollama.',
      'Added retrieval grading and bounded query-rewrite retries.',
      'Implemented answer-grounding checks to improve response quality.',
      'Evaluated retrieval and generation with RAGAS.',
      'Created a Streamlit interface and CLI for interacting with the assistant.'
    ],
    demo: 'Agent workflows, retrieval, local models, and AI evaluation.'
  },
  {
    short: 'StockSense',
    title: 'StockSense',
    cat: 'Data-Driven Applications / Machine Learning',
    img: 'img/projects/stocksense.webp',
    cap: 'Interface preview · sample data',
    github: 'https://github.com/kushagraawasthi37/stocksense',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Streamlit'],
    overview: 'An inventory-planning application that forecasts product demand and turns predictions into replenishment recommendations.',
    highlights: [
      'Built a Random Forest forecasting pipeline with engineered sales and calendar features.',
      'Used price, promotions, lagged sales, and rolling averages for prediction.',
      'Translated forecasts into safety stock and reorder recommendations.',
      'Added CSV export for inventory-planning workflows.',
      'Built a Streamlit dashboard with inventory KPIs and visualizations.'
    ],
    demo: 'Demand forecasting, feature engineering, and inventory decision support.'
  }
];

  /* ═════════ Config ═════════ */
  const TOTAL = 240;
  const DIR_LG = 'img/lg', DIR_SM = 'img/sm';
  const EASE = 0.085;
  const KEY_STEP = 6;
  const CONCURRENCY = 6;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Subject position inside each source frame (0‥1 across the image)
  const FOCUS = [[1, .50], [50, .50], [61, .53], [85, .42], [109, .45], [121, .55], [145, .60], [240, .64]];
  // Where on screen the subject should sit (landscape). Text lives in the side gutters, so he is
  // pushed right for the hero, centred while About / Toolkit sit either side, then right again
  // once the text moves into the left column for Experience and Work.
  const SCREEN_X = [[1, .63], [14, .63], [30, .50], [100, .50], [121, .52], [140, .61], [152, .66], [240, .66]];

  /* ═════════ Helpers & elements ═════════ */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerpKeys = (keys, x) => {
    if (x <= keys[0][0]) return keys[0][1];
    for (let i = 1; i < keys.length; i++) if (x <= keys[i][0]) {
      const [x0, y0] = keys[i - 1], [x1, y1] = keys[i];
      return y0 + (y1 - y0) * ((x - x0) / (x1 - x0));
    }
    return keys[keys.length - 1][1];
  };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const canvas = $('#bg');
  const ctx = canvas.getContext('2d', { alpha: false });
  const loader = $('#loader'), loaderBar = $('#loader-bar'), loaderPct = $('#loader-pct');
  const loaderRingVal = $('#loader-ring-val'), loaderStatus = $('#loader-status'), loaderGlowBar = $('#loader-glow-bar');
  const progressBar = $('#progress-bar'), frameNo = $('#frame-no'), scrollCue = $('#scrollcue');
  const frametag = $('.frametag'), contactEl = $('#contact');

  /* ═════════ Canvas sequence ═════════ */
  const images = new Array(TOTAL);
  const status = new Uint8Array(TOTAL);
  let useSmall = false, W = 0, H = 0, DPR = 1;
  let anchors = [], maxScroll = 1;
  let target = 0, current = 0, lastDrawn = -1;
  let ready = false, settled = true, lastT = performance.now();

  const url = i => `${useSmall ? DIR_SM : DIR_LG}/f${String(i + 1).padStart(3, '0')}.webp`;

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 1.75);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
    const wantSmall = canvas.width <= 1100;
    if (wantSmall !== useSmall && ready) { useSmall = wantSmall; images.fill(undefined); status.fill(0); loadAll(false); }
    else useSmall = wantSmall;
    ctx.imageSmoothingEnabled = true;
    buildAnchors();
    lastDrawn = -1;
    draw(current);
  }

  function nearest(i) {
    if (status[i] === 2) return images[i];
    for (let d = 1; d < TOTAL; d++) {
      const a = i - d, b = i + d;
      if (a >= 0 && status[a] === 2) return images[a];
      if (b < TOTAL && status[b] === 2) return images[b];
    }
    return null;
  }

  function cover(img, fx, sx, zoom, vb, alpha) {
    const iw = img.naturalWidth, ih = img.naturalHeight;
    const s = Math.max(canvas.width / iw, canvas.height / ih) * zoom;
    const rw = iw * s, rh = ih * s;
    const ox = clamp(sx * canvas.width - fx * rw, canvas.width - rw, 0);
    const oy = (canvas.height - rh) * vb;
    ctx.globalAlpha = alpha;
    ctx.drawImage(img, ox, oy, rw, rh);
  }

  // Draw a fractional frame by cross-fading its two neighbours — no stepping
  function draw(f) {
    f = clamp(f, 0, TOTAL - 1);
    const a = Math.floor(f), b = Math.min(TOTAL - 1, a + 1), t = f - a;
    const imgA = nearest(a);
    if (!imgA) return;
    const aspect = canvas.width / canvas.height;
    const land = aspect > 1.25, wide = aspect > 1.9;
    const fx = lerpKeys(FOCUS, f + 1);
    const sx = land ? lerpKeys(SCREEN_X, f + 1) : 0.5;
    const zoom = wide ? 1.08 : land ? 1.15 : 1;
    const vb = wide ? 0.22 : 0.5;            // on very wide screens keep his head in shot
    cover(imgA, fx, sx, zoom, vb, 1);
    if (t > 0.015 && b !== a) {
      const imgB = nearest(b);
      if (imgB && imgB !== imgA) cover(imgB, fx, sx, zoom, vb, t);
    }
    ctx.globalAlpha = 1;
    lastDrawn = f;
    const n = String(Math.round(f) + 1).padStart(3, '0');
    if (frameNo && frameNo.textContent !== n) frameNo.textContent = n;
  }

  /* scroll → frame map built from section anchors */
  function buildAnchors() {
    const sy = window.scrollY;
    anchors = $$('[data-frame]').map(el => ({ y: el.getBoundingClientRect().top + sy, f: parseFloat(el.dataset.frame) - 1 }));
    maxScroll = Math.max(1, document.documentElement.scrollHeight - H);
    anchors.push({ y: maxScroll, f: TOTAL - 1 });
    anchors.sort((p, q) => p.y - q.y);
    anchors = anchors.filter((a, i) => i === 0 || a.y > anchors[i - 1].y);
  }
  function frameForScroll(y) {
    if (!anchors.length) return 0;
    if (y <= anchors[0].y) return anchors[0].f;
    for (let i = 1; i < anchors.length; i++) if (y <= anchors[i].y) {
      const p = anchors[i - 1], n = anchors[i];
      return p.f + (n.f - p.f) * ((y - p.y) / (n.y - p.y));
    }
    return TOTAL - 1;
  }

  /* ═════════ Loading Engine ═════════ */
  function loadOne(i) {
    if (status[i]) return Promise.resolve();
    status[i] = 1;
    return new Promise(res => {
      const img = new Image();
      img.decoding = 'async';
      img.src = url(i);
      const done = ok => { if (ok) { images[i] = img; status[i] = 2; } else status[i] = 0; res(); };
      img.onload = () => (img.decode ? img.decode().then(() => done(true), () => done(true)) : done(true));
      img.onerror = () => done(false);
    });
  }
  async function pool(list, onEach) {
    let k = 0;
    const worker = async () => { while (k < list.length) { await loadOne(list[k++]); onEach && onEach(); } };
    await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  }

  const RING_CIRCUMFERENCE = 276.46;
  function updateLoaderUI(p) {
    if (!loaderPct) return;
    const val = Math.min(100, Math.max(0, Math.round(p)));
    loaderPct.textContent = String(val).padStart(2, '0');
    if (loaderRingVal) {
      const offset = RING_CIRCUMFERENCE - (p / 100) * RING_CIRCUMFERENCE;
      loaderRingVal.style.strokeDashoffset = offset;
    }
  }

  async function loadAll(gate) {
    const first = [0, 1, 2, 3, 4, 5];
    const keys = []; for (let i = KEY_STEP; i < TOTAL; i += KEY_STEP) keys.push(i); keys.push(TOTAL - 1);
    const gateList = [...new Set([...first, ...keys])];
    let n = 0;
    let targetP = 0;
    let visualP = 0;
    let gateFinished = false;

    // Smooth visual animation frame driver
    if (gate && loader) {
      const startTime = performance.now();
      const minDuration = 1100; // ensures polished cinematic entrance even on cached localhost

      const updateLoop = () => {
        const elapsed = performance.now() - startTime;
        const timeFactor = Math.min(1, elapsed / minDuration);
        const maxAllowed = timeFactor * 100;
        const targetClamped = Math.min(targetP, maxAllowed);

        // Smoothly interpolate towards target
        const diff = targetClamped - visualP;
        if (Math.abs(diff) > 0.05) {
          visualP += diff * 0.14;
        } else {
          visualP = targetClamped;
        }

        updateLoaderUI(visualP);

        if (gateFinished && visualP >= 99.5 && elapsed >= minDuration) {
          updateLoaderUI(100);
          setTimeout(finishLoading, 200);
        } else {
          requestAnimationFrame(updateLoop);
        }
      };
      requestAnimationFrame(updateLoop);
    }

    await pool(gateList, () => {
      n++;
      if (!gate) return;
      targetP = (n / gateList.length) * 100;
    });

    gateFinished = true;
    if (!gate) finishLoading();

    // Background load remaining non-key frames quietly
    const rest = []; for (let i = 0; i < TOTAL; i++) if (!status[i]) rest.push(i);
    const c = Math.round(current);
    rest.sort((a, b) => Math.abs(a - c) - Math.abs(b - c));
    await pool(rest);
  }

  function finishLoading() {
    if (ready) return;
    ready = true; lastDrawn = -1; draw(current);
    document.body.classList.remove('is-loading');
    if (loader) {
      loader.classList.add('is-done');
      document.body.classList.add('is-ready');
      setTimeout(() => loader.remove(), 1600);
    }
    revealObserve();
  }

  /* main loop */
  function tick(now) {
    const dt = Math.min(64, now - lastT); lastT = now;
    const k = reduceMotion ? 1 : 1 - Math.pow(1 - EASE, dt / 16.667);
    const d = target - current;
    const moving = Math.abs(d) > 0.004;
    if (moving) current += d * k; else current = target;
    if (Math.abs(current - lastDrawn) > 0.008 || (!moving && !settled)) {
      ctx.imageSmoothingQuality = moving ? 'low' : 'high';
      draw(current);
      settled = !moving;
    }
    requestAnimationFrame(tick);
  }

  /* ═════════ Toolkit ═════════ */
  const skillSec = $('#skills'), tkList = $('#tk-list'), tkChips = $('#tk-chips');
  const tkTitle = $('#tk-title'), tkCount = $('#tk-count'), tkBar = $('#tk-bar');
  let activeSkill = -1;
  TOOLKIT.forEach((c, i) => {
    const b = document.createElement('button');
    b.className = 'tk-cat'; b.type = 'button'; b.setAttribute('role', 'tab');
    b.innerHTML = `<span>${String(i + 1).padStart(2, '0')}</span>${esc(c.name)}`;
    b.addEventListener('click', () => {
      const span = skillSec.offsetHeight - H;
      const y = skillSec.offsetTop + ((i + 0.5) / TOOLKIT.length) * span * 0.9;
      window.scrollTo({ top: y, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
    tkList.appendChild(b);
  });
  function setSkill(idx) {
    activeSkill = idx;
    const c = TOOLKIT[idx];
    $$('.tk-cat', tkList).forEach((b, i) => {
      b.classList.toggle('is-active', i === idx); b.setAttribute('aria-selected', i === idx);
      if (i === idx && tkList.scrollWidth > tkList.clientWidth) {
        tkList.scrollTo({ left: b.offsetLeft - (tkList.clientWidth - b.offsetWidth) / 2, behavior: 'smooth' });
      }
    });
    tkTitle.textContent = c.name;
    tkCount.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(TOOLKIT.length).padStart(2, '0')} · ${c.items.length} skills`;
    tkChips.innerHTML = c.items.map((s, i) => `<span style="--i:${i}">${esc(s)}</span>`).join('');
    tkBar.style.width = ((idx + 1) / TOOLKIT.length * 100) + '%';
  }
  function updateSkills(y) {
    const span = skillSec.offsetHeight - H;
    const p = clamp((y - skillSec.offsetTop) / Math.max(1, span * 0.9), 0, 0.9999);
    const idx = Math.floor(p * TOOLKIT.length);
    if (idx !== activeSkill) setSkill(idx);
  }

  /* ═════════ Projects ═════════ */
  const cardsEl = $('#cards'), pindex = $('#pindex');
  const arrow = '<svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  PROJECTS.forEach((p, i) => {
    const n = String(i + 1).padStart(2, '0');
    const el = document.createElement('article');
    el.className = 'card reveal'; el.dataset.i = i; el.id = 'proj-' + i;
    el.innerHTML = `
      <button class="card__media" type="button" data-open="${i}" aria-label="Open case study: ${esc(p.title)}">
        <img src="${p.img}" alt="${esc(p.title)} — ${esc(p.cap.toLowerCase())}" width="1280" height="800" loading="lazy" decoding="async" />
        <span class="tag card__cat mono">${esc(p.cat)}</span>
        <span class="card__open">Open case study ${arrow}</span>
      </button>
      <div class="card__body">
        <div class="card__top"><span class="card__idx mono">${n}</span><h3>${esc(p.title)}</h3></div>
        <p class="card__over">${esc(p.overview)}</p>
        <p class="chips">${p.stack.map(s => `<span>${esc(s)}</span>`).join('')}</p>
        <div class="card__act">
          <button class="btn" type="button" data-open="${i}">Case study ${arrow}</button>
          <a class="link" href="${p.github}" target="_blank" rel="noopener">GitHub ${arrow}</a>
        </div>
      </div>`;
    cardsEl.appendChild(el);
    const li = document.createElement('li');
    li.innerHTML = `<button type="button" data-goto="${i}"><span>${n}</span>${esc(p.short)}</button>`;
    pindex.appendChild(li);
  });
  const cards = $$('.card'), pbtns = $$('#pindex button');
  let curCard = -1;
  const projSec = $('#projects');
  function updateProjects(y) {
    const inSec = y + H * 0.5 > projSec.offsetTop && y < projSec.offsetTop + projSec.offsetHeight - H * 0.3;
    let idx = -1;
    if (inSec) { const mid = y + H * 0.5; cards.forEach((c, i) => { if (c.getBoundingClientRect().top + y <= mid) idx = i; }); }
    if (idx !== curCard) { curCard = idx; pbtns.forEach((b, i) => b.classList.toggle('is-active', i === idx)); }
  }
  pindex.addEventListener('click', e => {
    const b = e.target.closest('[data-goto]'); if (!b) return;
    const c = cards[+b.dataset.goto];
    window.scrollTo({ top: c.getBoundingClientRect().top + window.scrollY - H * 0.18, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
  // pointer parallax on card media
  if (window.matchMedia('(hover:hover)').matches && !reduceMotion) {
    cardsEl.addEventListener('pointermove', e => {
      const m = e.target.closest('.card__media'); if (!m) return;
      const r = m.getBoundingClientRect();
      m.style.setProperty('--px', ((e.clientX - r.left) / r.width - .5) * -16 + 'px');
      m.style.setProperty('--py', ((e.clientY - r.top) / r.height - .5) * -12 + 'px');
    });
    cardsEl.addEventListener('pointerout', e => {
      const m = e.target.closest('.card__media'); if (m) { m.style.setProperty('--px', '0px'); m.style.setProperty('--py', '0px'); }
    });
  }

  /* ═════════ Case-study modal ═════════ */
  const modal = $('#modal');
  let openIdx = -1, lastFocus = null;
  function fillModal(i) {
    const p = PROJECTS[i]; openIdx = i;
    $('#m-img').src = p.img; $('#m-img').alt = `${p.title} — ${p.cap.toLowerCase()}`;
    $('#m-cap').textContent = p.cap;
    $('#m-cat').textContent = `${String(i + 1).padStart(2, '0')} · ${p.cat}`;
    $('#m-title').textContent = p.title;
    $('#m-over').textContent = p.overview;
    $('#m-high').innerHTML = p.highlights.map(h => `<li>${esc(h)}</li>`).join('');
    $('#m-demo').textContent = p.demo;
    $('#m-stack').innerHTML = p.stack.map(s => `<span>${esc(s)}</span>`).join('');
    $('#m-gh').href = p.github;
    $('#m-scroll').scrollTop = 0;
  }
  function openModal(i) {
    lastFocus = document.activeElement;
    fillModal(i);
    modal.hidden = false; document.body.classList.add('modal-open');
    $('.modal__close').focus();
  }
  function closeModal() {
    modal.hidden = true; document.body.classList.remove('modal-open');
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  document.addEventListener('click', e => {
    const o = e.target.closest('[data-open]'); if (o) { openModal(+o.dataset.open); return; }
    if (e.target.closest('[data-close]')) closeModal();
  });
  $('#m-prev').addEventListener('click', () => fillModal((openIdx + PROJECTS.length - 1) % PROJECTS.length));
  $('#m-next').addEventListener('click', () => fillModal((openIdx + 1) % PROJECTS.length));
  document.addEventListener('keydown', e => {
    if (modal.hidden) return;
    if (e.key === 'Escape') closeModal();
    else if (e.key === 'ArrowRight') fillModal((openIdx + 1) % PROJECTS.length);
    else if (e.key === 'ArrowLeft') fillModal((openIdx + PROJECTS.length - 1) % PROJECTS.length);
    else if (e.key === 'Tab') {            // keep focus inside the dialog
      const f = $$('button,a[href]', modal).filter(n => n.offsetParent !== null);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ═════════ Nav, reveal, misc UI ═════════ */
  const navLinks = $$('[data-nav]');
  const navSecs = navLinks.map(a => $('#' + a.dataset.nav));
  let activeNav = '';
  function updateNav(y) {
    let cur = ''; const mid = y + H * 0.4;
    navSecs.forEach(s => { if (s && s.offsetTop <= mid) cur = s.id; });
    if (cur === activeNav) return;
    activeNav = cur;
    navLinks.forEach(a => a.classList.toggle('is-active', a.dataset.nav === cur));
  }

  function countUp(el) {
    const end = parseFloat(el.dataset.count), dec = +(el.dataset.dec || 0), suf = el.dataset.suffix || '';
    if (reduceMotion) { el.textContent = end.toFixed(dec) + suf; return; }
    const t0 = performance.now(), dur = 1600;
    const step = now => {
      const p = clamp((now - t0) / dur, 0, 1), e = 1 - Math.pow(1 - p, 4);
      el.textContent = (end * e).toFixed(dec) + suf;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  function revealObserve() {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in'); io.unobserve(e.target);
      $$('[data-count]', e.target).forEach(countUp);
    }), { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
    $$('.reveal').forEach((el, i) => {
      if (el.closest('.hero')) el.style.transitionDelay = (0.35 + i * 0.1) + 's';
      io.observe(el);
    });
  }

  const burger = $('#burger'), pill = $('#nav-pill');
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open); pill.classList.toggle('open', open);
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
  });
  pill.addEventListener('click', e => { if (e.target.closest('a') && burger.getAttribute('aria-expanded') === 'true') burger.click(); });

  const toast = $('#toast');
  $('#copy-mail').addEventListener('click', async () => {
    const mail = 'kushagraawasthi37@gmail.com';
    try { await navigator.clipboard.writeText(mail); }
    catch (_) { const t = document.createElement('textarea'); t.value = mail; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove(); }
    toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 1800);
  });

  function onScroll() {
    const y = window.scrollY;
    target = frameForScroll(y);
    progressBar.style.transform = `scaleX(${clamp(y / maxScroll, 0, 1)})`;
    scrollCue && scrollCue.classList.toggle('is-hidden', y > 60);
    frametag && frametag.classList.toggle('is-hidden', y + H * 0.6 > contactEl.offsetTop);
    updateSkills(y); updateNav(y); updateProjects(y);
  }

  /* ═════════ Init ═════════ */
  document.body.classList.add('is-loading');
  window.addEventListener('scroll', onScroll, { passive: true });
  let rz; window.addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => { resize(); onScroll(); }, 120); }, { passive: true });
  if ('ResizeObserver' in window) new ResizeObserver(() => { buildAnchors(); onScroll(); }).observe(document.body);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { buildAnchors(); onScroll(); });
  window.addEventListener('load', () => { buildAnchors(); onScroll(); });
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  useSmall = Math.round(window.innerWidth * Math.min(window.devicePixelRatio || 1, 1.75)) <= 1100;
  setSkill(0);
  resize();
  onScroll();
  current = target;
  loadAll(true);
  requestAnimationFrame(tick);
})();
