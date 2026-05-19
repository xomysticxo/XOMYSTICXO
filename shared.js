// ── STAR GENERATOR ────────────────────────────────────────────────────
function makeStars(containerId, count) {
  const el = document.getElementById(containerId);
  if (!el) return;
  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 2.8 + 0.4;
    const bright = Math.random();
    s.style.cssText = `
      left:${Math.random()*100}%;top:${Math.random()*100}%;
      width:${size}px;height:${size}px;
      --td:${(Math.random()*3+1.5).toFixed(1)}s;
      --td2:${(Math.random()*5).toFixed(1)}s;
      box-shadow:${bright>.8
        ? `0 0 ${size*4}px rgba(255,255,255,.9),0 0 ${size*8}px rgba(168,85,247,.5)`
        : `0 0 ${size*2}px rgba(255,255,255,.5)`};
    `;
    el.appendChild(s);
  }
  const sparkleCount = Math.max(4, Math.floor(count / 12));
  for (let i = 0; i < sparkleCount; i++) {
    const sp = document.createElement('div');
    sp.className = 'sparkle';
    sp.textContent = '✦';
    sp.style.cssText = `
      left:${Math.random()*100}%;top:${Math.random()*100}%;
      --td:${(Math.random()*3+2).toFixed(1)}s;
      --td2:${(Math.random()*4).toFixed(1)}s;
      --sf:${(Math.random()*10+7).toFixed(0)}px;
    `;
    el.appendChild(sp);
  }
}

// ── WAVEFORM BARS ─────────────────────────────────────────────────────
function makeWaveform(id) {
  const el = document.getElementById(id);
  if (!el) return;
  for (let i = 0; i < 30; i++) {
    const bar = document.createElement('div');
    bar.className = 'wv';
    bar.style.cssText = `
      --wd:${(0.4+Math.random()*0.9).toFixed(2)}s;
      --wdl:${(i*0.04).toFixed(2)}s;
    `;
    el.appendChild(bar);
  }
}

// ── NAV SCROLL ────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ── PLAY TOGGLE ───────────────────────────────────────────────────────
function togglePlay(btn) {
  const isPlaying = btn.textContent === '⏸';
  document.querySelectorAll('.play-btn').forEach(b => b.textContent = '▶');
  btn.textContent = isPlaying ? '▶' : '⏸';
}
