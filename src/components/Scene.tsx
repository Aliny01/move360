import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "./Container";
import GradedImage from "./GradedImage";
import Reveal from "./Reveal";

export default function Scene({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Foto e texto em camadas de velocidades diferentes — profundidade literal (briefing, seção 4)
  const photoY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section ref={ref} className="py-16 md:py-24">
      <Container>
        <div
          className={`grid items-center gap-12 md:grid-cols-2 md:gap-16 ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
            <motion.div style={{ y: photoY }} className="absolute inset-0 -top-[8%] h-[116%]">
              <GradedImage src={image} alt={imageAlt} className="h-full w-full" />
            </motion.div>
          </div>

          <motion.div style={{ y: textY }}>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graphite">
                {eyebrow}
              </p>
              <h3 className="mt-4 font-display text-2xl font-medium leading-tight text-ink md:text-3xl">
                {title}
              </h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink/60">
                {text}
              </p>
            </Reveal>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
