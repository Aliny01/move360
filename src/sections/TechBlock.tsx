import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";

export default function TechBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax mais acentuado — transição para a interação real (briefing, seção 4)
  const panelY = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);
  const glowX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graphite">
            Tecnologia &amp; diferencial
          </p>
          <p className="mt-5 text-sm font-normal leading-relaxed text-graphite md:text-lg">
            Por trás de cada tour está a mesma tecnologia usada pelas
            maiores operações imobiliárias e arquitetônicas do mundo —
            captura de altíssima precisão, replicando cada centímetro do
            ambiente com fidelidade que nenhuma fotografia alcança.
          </p>
          <p className="mt-6 font-display text-2xl font-semibold leading-[1.3] tracking-tight text-ink md:text-3xl">
            Não é uma demonstração. É uma réplica.
          </p>
          <p className="mt-6 text-sm font-medium text-graphite">
            Tecnologia oficial Matterport.
          </p>
        </Reveal>

        <div ref={ref} id="virtual-experience" className="relative mt-20 scroll-mt-28">
          <motion.div
            style={{ x: glowX }}
            aria-hidden
            className="pointer-events-none absolute -inset-x-10 -inset-y-16 -z-10 bg-[radial-gradient(50%_60%_at_50%_50%,rgba(196,164,90,0.14),transparent_70%)]"
          />
          <motion.div
            style={{ y: panelY }}
            className="relative mx-auto aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-[28px] bg-ink"
          >
            <div className="absolute inset-0 bg-[radial-gradient(80%_100%_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-paper">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-paper/25">
                <MoveHorizontal className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <div className="text-center">
                <p className="font-display text-lg font-medium">Virtual Experience</p>
                <p className="mt-1 text-sm text-paper/50">
                  Arraste para explorar o espaço em 360°
                </p>
              </div>
            </div>
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-paper/40">
              <span className="h-1.5 w-1.5 rounded-full bg-paper/40" />
              Powered by Matterport
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
