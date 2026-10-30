import { useEffect, useRef } from 'react';

export default function ThreeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const CELL = 26;
    let cols = Math.ceil(width / CELL);
    let rows = Math.ceil(height / CELL);

    let grid = [];
    let glitchBlocks = [];

    const initGrid = () => {
      cols = Math.ceil(width / CELL);
      rows = Math.ceil(height / CELL);
      grid = [];

      for (let r = 0; r < rows; r++) {
        const row = [];
        for (let c = 0; c < cols; c++) {
          const rand = Math.random();
          let type = 0;
          if (rand < 0.45) type = 0; // small square
          else if (rand < 0.78) type = 1; // empty (more breathing room)
          else if (rand < 0.85) type = 2; // plus
          else if (rand < 0.91) type = 3; // vertical bar
          else if (rand < 0.96) type = 4; // horizontal bar
          else type = 5; // 5-dot cluster

          row.push({
            type,
            phase: Math.random() * Math.PI * 2,
            speed: 0.3 + Math.random() * 0.8,
          });
        }
        grid.push(row);
      }

      // Subtle ambient pixel clusters
      glitchBlocks = Array.from({ length: 6 }, (_, i) => ({
        c: Math.floor(Math.random() * cols),
        r: Math.floor(Math.random() * rows),
        color: i % 2 === 0 ? 'rgba(139, 92, 246, 0.35)' : 'rgba(56, 189, 248, 0.28)',
        timer: Math.random() * 140,
        interval: 140 + Math.random() * 160,
      }));
    };

    initGrid();

    const mouse = { x: -1000, y: -1000 };
    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initGrid();
    };
    window.addEventListener('resize', onResize);

    let animId;
    let time = 0;

    const draw = () => {
      animId = requestAnimationFrame(draw);
      time += 0.018;

      // Calm, deep midnight-violet base (easy on the eyes)
      const grad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.2,
        50,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.85
      );
      grad.addColorStop(0, '#130b24');
      grad.addColorStop(0.55, '#0b0716');
      grad.addColorStop(1, '#07040e');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cell = grid[r][c];
          if (cell.type === 1) continue;

          const x = c * CELL + CELL / 2;
          const y = r * CELL + CELL / 2;

          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseBoost = dist < 170 ? (1 - dist / 170) * 0.35 : 0;

          const pulse = 0.5 + 0.5 * Math.sin(time * cell.speed + cell.phase);
          const alpha = 0.08 + pulse * 0.12 + mouseBoost;

          if (mouseBoost > 0.12) {
            ctx.fillStyle = `rgba(168, 85, 247, ${Math.min(0.6, alpha)})`;
          } else {
            ctx.fillStyle = `rgba(124, 58, 237, ${Math.min(0.32, alpha)})`;
          }

          const s = 4;

          if (cell.type === 0) {
            ctx.fillRect(x - s / 2, y - s / 2, s, s);
          } else if (cell.type === 2) {
            ctx.fillRect(x - s / 2, y - s * 1.5, s, s * 3);
            ctx.fillRect(x - s * 1.5, y - s / 2, s * 3, s);
          } else if (cell.type === 3) {
            ctx.fillRect(x - s / 2, y - s * 1.5, s, s * 3);
          } else if (cell.type === 4) {
            ctx.fillRect(x - s * 1.5, y - s / 2, s * 3, s);
          } else if (cell.type === 5) {
            const d = 3.5;
            ctx.fillRect(x - d / 2, y - d / 2, d, d);
            ctx.fillRect(x - d * 1.6, y - d * 1.6, d, d);
            ctx.fillRect(x + d * 0.6, y - d * 1.6, d, d);
            ctx.fillRect(x - d * 1.6, y + d * 0.6, d, d);
            ctx.fillRect(x + d * 0.6, y + d * 0.6, d, d);
          }
        }
      }

      // Soft ambient pixel blocks
      glitchBlocks.forEach((b) => {
        b.timer += 1;
        if (b.timer > b.interval) {
          b.timer = 0;
          b.c = Math.floor(Math.random() * cols);
          b.r = Math.floor(Math.random() * rows);
        }

        const fade = Math.sin((b.timer / b.interval) * Math.PI);
        ctx.fillStyle = b.color;
        ctx.globalAlpha = Math.max(0, fade);

        const bx = b.c * CELL;
        const by = b.r * CELL;
        const p = 9;

        ctx.fillRect(bx, by, p * 2, p * 1.4);
        ctx.fillRect(bx - p * 0.7, by + p * 0.4, p, p * 0.7);
      });

      ctx.globalAlpha = 1;
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
