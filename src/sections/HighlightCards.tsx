import { Move3d, Wand2, Box, MapPin, RulerDimensionLine } from "lucide-react";
import Container from "../components/Container";
import TiltCard from "../components/TiltCard";
import { Stagger, StaggerItem } from "../components/Reveal";

// Os 4 serviços que o próprio cliente definiu como destaque principal no
// briefing original, mais a ferramenta de medição (pedida depois, na
// revisão do site) — todos com o mesmo peso visual.
const HIGHLIGHTS = [
  {
    icon: Move3d,
    title: "Tour virtual — navegação livre",
    text: "O destaque principal: o visitante caminha pelo espaço em 360°, sem sair de casa.",
  },
  {
    icon: Wand2,
    title: "Defurnish — IA remove a mobília",
    text: "Remoção virtual de móveis do ambiente capturado. Forte apelo para reformas e projetos.",
  },
  {
    icon: Box,
    title: "Dollhouse View — modelo 3D",
    text: "Visão interativa da planta completa, o recurso que mais encanta no primeiro contato.",
  },
  {
    icon: RulerDimensionLine,
    title: "Medição de ambientes",
    text: "Meça portas, móveis e distâncias reais direto no tour virtual, sem voltar ao local.",
  },
  {
    icon: MapPin,
    title: "Google Street View",
    text: "Publicação do tour direto no Google Maps e Busca — visibilidade orgânica garantida.",
  },
];

export default function HighlightCards() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <Stagger className="flex flex-wrap justify-center gap-5" step={0.08}>
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <StaggerItem
              key={title}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
            >
              <TiltCard className="h-full rounded-2xl border border-ink/10 bg-mist/60 p-7 transition-colors duration-300 hover:bg-mist">
                <Icon className="h-6 w-6 text-ink" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-base font-medium text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{text}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
