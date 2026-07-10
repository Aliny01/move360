import { Move3d, Wand2, Box, MapPin } from "lucide-react";
import Container from "../components/Container";
import TiltCard from "../components/TiltCard";
import { Stagger, StaggerItem } from "../components/Reveal";

// Os 4 serviços que o próprio cliente definiu como destaque principal
// no briefing original (seção "Quais serviços devem receber maior
// destaque"), nesta ordem de prioridade.
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
    icon: MapPin,
    title: "Google Street View",
    text: "Publicação do tour direto no Google Maps e Busca — visibilidade orgânica garantida.",
  },
];

export default function HighlightCards() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" step={0.08}>
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <StaggerItem key={title}>
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
