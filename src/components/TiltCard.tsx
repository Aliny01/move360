import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import clsx from "clsx";
import type { ReactNode } from "react";

// Tilt 3D discreto no hover — máx. 6-8°, nunca "gamer" (briefing, seção 4)
const MAX_TILT = 7;

export default function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const springX = useSpring(mx, { stiffness: 180, damping: 20 });
  const springY = useSpring(my, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(springY, [0, 1], [MAX_TILT, -MAX_TILT]);
  const rotateY = useTransform(springX, [0, 1], [-MAX_TILT, MAX_TILT]);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function onMouseLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={clsx("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
