/**
 * app.js — Main application logic
 * Flow:
 *  1. Landing page (general) → ucapan umum + 19 kartu anggota
 *  2. Klik kartu  → modal password muncul
 *  3. Password benar → halaman pesan personal (placeholder "tunggu ya jir")
 *  4. Tombol kembali → general page
 */

/* ================================================================
   CANVAS — Falling Leaves / Particles
================================================================ */
(function initCanvas() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function rand(a, b) { return a + Math.random() * (b - a); }

  class Particle {
    constructor() { this.reset(true); }
    reset(initial = false) {
      this.x           = rand(0, W);
      this.y           = initial ? rand(-H, H) : -20;
      this.size        = rand(1.5, 4);
      this.speedY      = rand(0.3, 0.9);
      this.speedX      = rand(-0.3, 0.3);
      this.opacity     = rand(0.04, 0.18);
      this.wobble      = rand(0, Math.PI * 2);
      this.wobbleSpeed = rand(0.008, 0.02);
      this.type        = Math.random() < 0.3 ? 'dot' : 'leaf';
    }
    update() {
      this.wobble += this.wobbleSpeed;
      this.x += this.speedX + Math.sin(this.wobble) * 0.4;
      this.y += this.speedY;
      if (this.y > H + 20) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      if (this.type === 'leaf') {
        ctx.fillStyle = `hsl(${rand(20, 40)}, 55%, 62%)`;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.wobble);
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 2, this.size * 0.8, 0, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = `hsl(355, 45%, 60%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  function init() {
    particles = [];
    const count = Math.min(Math.floor(W * H / 14000), 70);
    for (let i = 0; i < count; i++) particles.push(new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', () => { resize(); init(); });
  resize(); init(); loop();
})();


/* ================================================================
   UTILITIES
================================================================ */
const $ = id => document.getElementById(id);
const formatDate = () => {
  const d = new Date();
  const months = ['Januari','Februari','Maret','April','Mei','Juni',
                  'Juli','Agustus','September','Oktober','November','Desember'];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
};


/* ================================================================
   PAGE MANAGER
================================================================ */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active', 'visible');
    p.style.display = 'none';
  });
  const target = $(pageId);
  if (!target) { console.warn('showPage: element not found:', pageId); return; }
  target.style.display = 'block';
  target.classList.add('active');
  requestAnimationFrame(() => requestAnimationFrame(() => target.classList.add('visible')));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


/* ================================================================
   RENDER HELPERS
================================================================ */
function renderLetter(bodyEl, dateEl, paragraphs) {
  bodyEl.innerHTML = '';
  paragraphs.forEach(text => {
    const p = document.createElement('p');
    p.textContent = text;
    bodyEl.appendChild(p);
  });
  dateEl.textContent = formatDate();
}

function renderMemories(container, memories) {
  container.innerHTML = '';
  memories.forEach(mem => {
    const card = document.createElement('div');
    card.className = 'memory-card reveal';
    card.innerHTML = `<div class="memory-icon">${mem.icon}</div><p class="memory-text">${mem.text}</p>`;
    container.appendChild(card);
  });
}

function setupScrollReveal(page) {
  const els = page.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('shown'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => { el.classList.remove('shown'); observer.observe(el); });
}


/* ================================================================
   RENDER GENERAL PAGE
================================================================ */
function renderGeneralPage() {
  renderLetter($('generalLetterBody'), $('generalLetterDate'), GENERAL.letterBody);
  renderMemories($('generalMemoryCards'), GENERAL.memories);
  $('generalQuote').textContent = GENERAL.quote;
  buildMemberGrid();
  setTimeout(() => setupScrollReveal($('generalPage')), 150);
}

let quoteInterval = null;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildMemberGrid() {
  const grid = $('memberGrid');
  grid.innerHTML = '';

  const shuffled = shuffle(MEMBERS);

  shuffled.forEach((member, idx) => {
    const card = document.createElement('button');
    card.className = 'member-card reveal';
    card.setAttribute('aria-label', `Buka pesan untuk ${member.name}`);
    card.dataset.id = member.id;
    card.innerHTML = `
      <span class="member-card-number">${String(idx + 1).padStart(2, '0')}</span>
      <span class="member-card-name">${member.name}</span>
      <span class="member-card-lock">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        Password
      </span>
    `;
    card.addEventListener('click', () => openModal(member));
    grid.appendChild(card);
  });

  // Kartu ke-20 — kutipan bergilir
  const specialCard = document.createElement('div');
  specialCard.className = 'member-card-special reveal';
  const dotsHTML = ROTATING_QUOTES
    .map((_, i) => `<div class="card-special-dot${i === 0 ? ' active' : ''}"></div>`)
    .join('');
  specialCard.innerHTML = `
    <span class="card-special-label">· Dari Hati ·</span>
    <p class="card-special-quote fade-in">${ROTATING_QUOTES[0]}</p>
    <div class="card-special-dots">${dotsHTML}</div>
  `;
  grid.appendChild(specialCard);
  startQuoteCycle(specialCard);
}

function startQuoteCycle(card) {
  if (quoteInterval) clearInterval(quoteInterval);
  let current = 0;
  const quoteEl = card.querySelector('.card-special-quote');
  const dots    = card.querySelectorAll('.card-special-dot');
  const total   = ROTATING_QUOTES.length;

  quoteInterval = setInterval(() => {
    quoteEl.classList.add('fade-out');
    quoteEl.classList.remove('fade-in');
    setTimeout(() => {
      current = (current + 1) % total;
      quoteEl.textContent = ROTATING_QUOTES[current];
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
      quoteEl.classList.remove('fade-out');
      quoteEl.classList.add('fade-in');
    }, 520);
  }, 4000);
}


/* ================================================================
   MODAL — Password per member
================================================================ */
let pendingMember = null;

function openModal(member) {
  pendingMember = member;
  $('modalName').textContent      = member.name;
  $('modalPasswordInput').value   = '';
  $('modalError').textContent     = '';
  $('passwordModal').style.display = 'flex';
  $('passwordModal').classList.add('open');
  setTimeout(() => $('modalPasswordInput').focus(), 150);
}

function closeModal() {
  $('passwordModal').classList.remove('open');
  $('passwordModal').style.display = 'none';
  pendingMember = null;
}


/* ================================================================
   RENDER PERSONAL PAGE — Full message with letter, memories & quote
================================================================ */
function renderPersonalPage(member) {
  // Hero
  $('personalHeroName').textContent     = member.name;
  $('personalHeroNickname').textContent = member.nickname;

  // Letter
  $('personalSalutation').textContent = member.salutation;
  renderLetter($('personalLetterBody'), $('personalLetterDate'), member.letterBody);

  // Memories
  renderMemories($('personalMemoryCards'), member.memories);

  // Quote & footer
  $('personalQuote').textContent      = member.quote;
  $('personalFooterName').textContent = member.name;

  // Trigger scroll reveal after paint
  setTimeout(() => setupScrollReveal($('personalPage')), 150);
}


/* ================================================================
   INIT — semua event listener & inisialisasi di dalam DOMContentLoaded
================================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ----- Modal events ----- */
  $('modalClose').addEventListener('click', closeModal);

  $('passwordModal').addEventListener('click', e => {
    if (e.target === $('passwordModal')) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  $('modalForm').addEventListener('submit', e => {
    e.preventDefault();
    if (!pendingMember) return;

    const entered = $('modalPasswordInput').value.trim();
    if (entered === pendingMember.password) {
      const member = pendingMember;  // simpan dulu sebelum closeModal() null-kan pendingMember
      closeModal();
      renderPersonalPage(member);
      showPage('personalPage');
    } else {
      $('modalError').textContent = 'Password salah. Coba lagi.';
      $('modalPasswordInput').select();
    }
  });

  /* ----- Back button ----- */
  $('backToGeneral').addEventListener('click', () => {
    showPage('generalPage');
    setTimeout(() => setupScrollReveal($('generalPage')), 200);
  });

  /* ----- Render & show landing page ----- */
  renderGeneralPage();
  showPage('generalPage');
});
