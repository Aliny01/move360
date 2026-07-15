import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import TourPreviewVideo from "../components/TourPreviewVideo";

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
            <TourPreviewVideo />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-6 py-5 text-paper">
              <div>
                <p className="font-display text-lg font-medium">Virtual Experience</p>
                <p className="mt-1 text-sm text-paper/60">
                  Navegação real de um tour Matterport
                </p>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-paper/50">
                <span className="h-1.5 w-1.5 rounded-full bg-paper/50" />
                Powered by Matterport
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
