/**
 * app.js — Main application logic
 * Handles: canvas animation, login/logout, page transitions, content rendering, scroll reveal
 */

/* ================================================================
   CANVAS — Falling Leaves / Particles
================================================================ */
(function initCanvas() {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function randomBetween(a, b) { return a + Math.random() * (b - a); }

  class Particle {
    constructor() { this.reset(true); }

    reset(initial = false) {
      this.x    = randomBetween(0, W);
      this.y    = initial ? randomBetween(-H, H) : -20;
      this.size = randomBetween(1.5, 4);
      this.speedY = randomBetween(0.3, 0.9);
      this.speedX = randomBetween(-0.3, 0.3);
      this.opacity = randomBetween(0.04, 0.18);
      this.wobble  = randomBetween(0, Math.PI * 2);
      this.wobbleSpeed = randomBetween(0.008, 0.02);
      this.type = Math.random() < 0.3 ? 'circle' : 'leaf'; // leaf-like or dot
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
        ctx.fillStyle = `hsl(${randomBetween(20, 40)}, 55%, 62%)`;
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

  function initParticles() {
    particles = [];
    const count = Math.min(Math.floor(W * H / 14000), 70);
    for (let i = 0; i < count; i++) particles.push(new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', () => { resize(); initParticles(); });
  resize();
  initParticles();
  loop();
})();


/* ================================================================
   UTILITY
================================================================ */
function $(id) { return document.getElementById(id); }

function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => {
    p.classList.remove('active', 'visible');
    p.style.display = 'none';
  });

  const target = $(pageId);
  target.style.display = pageId === 'loginPage' ? 'flex' : 'block';
  target.classList.add('active');
  // Trigger transition
  requestAnimationFrame(() => {
    requestAnimationFrame(() => target.classList.add('visible'));
  });
}

function formatDate() {
  const d = new Date();
  const months = ['Januari','Februari','Maret','April','Mei','Juni',
                  'Juli','Agustus','September','Oktober','November','Desember'];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}


/* ================================================================
   LOGIN LOGIC
================================================================ */
let currentMember = null;

$('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = $('usernameInput').value.trim().toLowerCase();
  const password = $('passwordInput').value.trim();
  const errorEl  = $('loginError');

  errorEl.textContent = '';

  if (!username || !password) {
    errorEl.textContent = 'Username dan password tidak boleh kosong.';
    return;
  }

  const member = MEMBERS.find(m => m.username === username && m.password === password);

  if (!member) {
    errorEl.textContent = 'Username atau password salah. Coba lagi.';
    $('usernameInput').focus();
    return;
  }

  currentMember = member;
  renderMessage(member);
  showPage('messagePage');
  window.scrollTo(0, 0);
});

$('logoutBtn').addEventListener('click', function() {
  currentMember = null;
  $('usernameInput').value = '';
  $('passwordInput').value = '';
  $('loginError').textContent = '';
  showPage('loginPage');
  window.scrollTo(0, 0);
});


/* ================================================================
   RENDER MESSAGE PAGE
================================================================ */
function renderMessage(member) {
  // Hero
  $('heroName').textContent = member.name;
  $('heroNickname').textContent = member.nickname;
  $('footerName').textContent = member.name;

  // Letter
  $('letterSalutation').textContent = member.salutation;
  const bodyEl = $('letterBody');
  bodyEl.innerHTML = '';
  member.letterBody.forEach((para, i) => {
    const p = document.createElement('p');
    p.textContent = para;
    // Only first paragraph gets drop cap
    if (i > 0) p.style.cssText = '';
    bodyEl.appendChild(p);
  });
  $('letterDate').textContent = formatDate();

  // Memories
  const cardsEl = $('memoryCards');
  cardsEl.innerHTML = '';
  member.memories.forEach(mem => {
    const card = document.createElement('div');
    card.className = 'memory-card reveal';
    card.innerHTML = `
      <div class="memory-icon">${mem.icon}</div>
      <p class="memory-text">${mem.text}</p>
    `;
    cardsEl.appendChild(card);
  });

  // Quote
  $('msgQuote').textContent = member.quote;

  // Trigger scroll reveal after render
  setTimeout(setupScrollReveal, 100);
}


/* ================================================================
   SCROLL REVEAL
================================================================ */
function setupScrollReveal() {
  const revealEls = document.querySelectorAll('#messagePage .reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('shown');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));
}

// Add reveal class to major sections
document.addEventListener('DOMContentLoaded', () => {
  ['.msg-hero', '.msg-letter', '.msg-memories', '.msg-quote', '.msg-footer'].forEach(sel => {
    const el = document.querySelector(sel);
    if (el) el.classList.add('reveal');
  });

  // Init login page
  showPage('loginPage');
});
