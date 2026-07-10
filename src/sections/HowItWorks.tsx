import Container from "../components/Container";
import Reveal from "../components/Reveal";
import { Stagger, StaggerItem } from "../components/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Agendamos a captura",
    text: "Levamos o equipamento Matterport Pro 3 até o seu espaço e escaneamos cada ambiente com altíssima precisão.",
  },
  {
    n: "02",
    title: "Processamos e refinamos",
    text: "Geramos a réplica digital e aplicamos os recursos do seu projeto — Defurnish, Dollhouse View, Tags interativas.",
  },
  {
    n: "03",
    title: "Você recebe pronto para publicar",
    text: "Link exclusivo, hospedado nos servidores oficiais Matterport — pronto para o site, WhatsApp e Google.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-24 border-t border-ink/10 py-24 md:py-32">
      <Container>
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graphite">
            Como funciona
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
            Da captura à publicação, em três passos
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8" step={0.1}>
          {STEPS.map((step) => (
            <StaggerItem key={step.n} className="relative">
              <span className="font-display text-5xl font-medium text-ink/10">
                {step.n}
              </span>
              <h3 className="mt-4 font-display text-lg font-medium text-ink">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink/55">
                {step.text}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
