import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../components/Container";
import { SolidButton, OutlineButton } from "../components/Buttons";
import HeroVideo from "../components/HeroVideo";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <Container className="grid items-center gap-14 md:grid-cols-[1fr_1.4fr] md:gap-10">
        <motion.div style={{ y: textY }} className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-graphite"
          >
            Tecnologia oficial Matterport
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[2.5rem] font-medium leading-[1.08] tracking-tight text-ink md:text-[3.4rem]"
          >
            Existe uma forma de ver um espaço antes mesmo dele existir.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-ink/60 md:text-lg"
          >
            Da planta ao produto pronto, do imóvel ao evento — qualquer
            espaço, em qualquer momento da sua história, pode ser revivido,
            apresentado ou decidido com a mesma profundidade de estar lá.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <SolidButton href="#contato">Solicitar demonstração</SolidButton>
            <OutlineButton href="#virtual-experience">Ver experiência virtual</OutlineButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-video w-full overflow-hidden rounded-[28px]"
        >
          <HeroVideo />
        </motion.div>
      </Container>
    </section>
  );
}
