import { useCallback, useRef, useState, type PointerEvent } from "react";
import { ArrowLeftRight } from "lucide-react";
import clsx from "clsx";
import GradedImage from "./GradedImage";

/**
 * Comparador de antes/depois com arraste (mouse e touque, via Pointer
 * Events). "Antes" fica por cima, recortado via clip-path na posição do
 * traço — "depois" fica por baixo, cheio. Nenhuma das duas imagens é
 * redimensionada, só a área visível muda, pra não distorcer nada.
 */
export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  className,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  function handlePointerDown(e: PointerEvent<HTMLDivElement>) {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  }
  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  }
  function handlePointerUp(e: PointerEvent<HTMLDivElement>) {
    draggingRef.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  }

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className={clsx(
        "relative aspect-[16/10] w-full touch-none select-none overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0">
        <GradedImage src={after} alt={afterAlt} className="h-full w-full" />
      </div>

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <GradedImage src={before} alt={beforeAlt} className="h-full w-full" />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-paper">
        Antes
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-paper">
        Depois
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-paper shadow-[0_0_0_1px_rgba(17,17,17,0.15)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-ink shadow-[0_2px_10px_rgba(17,17,17,0.25)]">
          <ArrowLeftRight className="h-4 w-4" strokeWidth={1.75} />
        </div>
      </div>
    </div>
  );
}
