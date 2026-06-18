"use client";

import React, { useEffect, useRef, useState } from 'react';

// Classic Konami code, ending b → a. Change this array to rebind the trigger.
const KONAMI = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

const BOOT_LINES = [
  'neXuz-dev // bootloader v4.8',
  '',
  '[ OK ] mounting /dev/portfolio',
  '[ OK ] loading modules: ue5  rust  asm  c++',
  '[ OK ] spawning 59 project daemons',
  '[ OK ] indexing ~450,000 lines of code',
  '[ OK ] uplink -> qanga.io  (2,400+ commits)',
  '[WARN] reality.exe not responding - using simulation',
  '[ OK ] decrypting world records...',
  '',
  '> ACCESS GRANTED. welcome, operator.',
  '> press [esc] or click to disconnect',
];

function lineClass(line) {
  if (line.startsWith('[WARN]')) return 'text-warn';
  if (line.startsWith('[ OK ]')) return 'text-fg/75';
  if (line.startsWith('>')) return 'text-accent';
  return 'text-dim';
}

export default function BootSequence() {
  const [active, setActive] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const seq = useRef([]);
  const canvasRef = useRef(null);

  // Konami listener
  useEffect(() => {
    const onKey = (e) => {
      if (active) {
        if (e.key === 'Escape') setActive(false);
        return;
      }
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      seq.current = [...seq.current, key].slice(-KONAMI.length);
      if (seq.current.length === KONAMI.length && KONAMI.every((k, i) => seq.current[i] === k)) {
        seq.current = [];
        setActive(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  // Reveal boot lines + lock scroll
  useEffect(() => {
    if (!active) {
      setVisibleCount(0);
      return;
    }
    document.body.style.overflow = 'hidden';
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setVisibleCount(i);
      if (i >= BOOT_LINES.length) clearInterval(id);
    }, 240);
    return () => {
      clearInterval(id);
      document.body.style.overflow = 'auto';
    };
  }, [active]);

  // Matrix rain (blue, not green - opt-in, runs only while active)
  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const glyphs = 'アカサタナハマヤラワ0123456789<>/\\[]{}=+*#'.split('');
    const fontSize = 16;
    const drops = Array(Math.floor(canvas.width / fontSize))
      .fill(0)
      .map(() => Math.random() * -50);

    const draw = () => {
      ctx.fillStyle = 'rgba(5,7,13,0.18)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      for (let x = 0; x < drops.length; x++) {
        const ch = glyphs[Math.floor(Math.random() * glyphs.length)];
        const y = drops[x] * fontSize;
        ctx.fillStyle = Math.random() > 0.975 ? '#c5cede' : '#4a7cf0';
        ctx.fillText(ch, x * fontSize, y);
        if (y > canvas.height && Math.random() > 0.97) drops[x] = 0;
        drops[x] += 1;
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-void"
      onClick={() => setActive(false)}
      role="dialog"
      aria-label="easter egg terminal"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-40" />
      <div className="relative z-10 w-full max-w-2xl px-6">
        <div className="border border-edge bg-void/85 p-6 text-sm leading-relaxed">
          {BOOT_LINES.slice(0, visibleCount).map((line, i) => (
            <div key={i} className={lineClass(line)}>
              {line || ' '}
            </div>
          ))}
          {visibleCount >= BOOT_LINES.length && <span className="caret align-middle" />}
        </div>
      </div>
    </div>
  );
}
