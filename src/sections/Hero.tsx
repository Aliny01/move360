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
      {/*
        Mobile: título → vídeo → descrição (ordem natural do DOM).
        Desktop (md:): os wrappers "md:contents" se dissolvem e os itens
        passam a ocupar a coluna 1 via col-start/row-start, com o vídeo
        ocupando a coluna 2 inteira — layout original lado a lado.
      */}
      <Container className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-x-10 md:gap-y-0">
        <div className="md:contents">
          <motion.p
            style={{ y: textY }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative z-10 mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-graphite md:col-start-1 md:row-start-1"
          >
            Tecnologia oficial Matterport
          </motion.p>

          <motion.h1
            style={{ y: textY }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 font-display text-[2.5rem] font-medium leading-[1.08] tracking-tight text-ink md:col-start-1 md:row-start-2 md:text-[3.4rem]"
          >
            Existe uma forma de estar em um espaço sem sair de onde você está.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-video w-full overflow-hidden rounded-[28px] md:col-start-2 md:row-start-1 md:row-span-4 md:self-center"
        >
          <HeroVideo />
        </motion.div>

        <div className="md:contents">
          <motion.p
            style={{ y: textY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 max-w-lg text-base leading-relaxed text-ink/60 md:col-start-1 md:row-start-3 md:mt-6 md:text-lg"
          >
            Do imóvel ao evento, da loja ao hotel — qualquer espaço já
            existente pode ser revivido, apresentado ou decidido com a mesma
            profundidade de estar lá.
          </motion.p>

          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="relative z-10 mt-10 flex flex-wrap items-center gap-4 md:col-start-1 md:row-start-4"
          >
            <SolidButton href="#contato">Solicitar demonstração</SolidButton>
            <OutlineButton href="#virtual-experience">Ver experiência virtual</OutlineButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
