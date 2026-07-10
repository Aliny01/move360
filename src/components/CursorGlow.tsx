import { useEffect, useRef } from "react";

/**
 * Glow branco/dourado muito sutil (baixa opacidade) seguindo o cursor.
 * Briefing, seção 4: "não usar gradiente colorido" — apenas um halo
 * quase imperceptível que reforça o movimento contido da marca.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let frame: number;

    function onMove(e: PointerEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
    }

    function tick() {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      frame = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", onMove);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] mix-blend-multiply md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(196,164,90,1) 0%, rgba(196,164,90,0) 70%)",
      }}
    />
  );
}
