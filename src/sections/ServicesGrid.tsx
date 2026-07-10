import { Move3d, Wand2, Box, Camera, Tags, MapPin } from "lucide-react";
import Container from "../components/Container";
import GradedImage from "../components/GradedImage";
import { Stagger, StaggerItem } from "../components/Reveal";
import Reveal from "../components/Reveal";
import { images } from "../data/images";

const SERVICES = [
  {
    icon: Move3d,
    title: "Tour Virtual Imersivo (360° e 3D)",
    text: "Captura do ambiente em altíssima precisão com equipamento Matterport Pro 3. O resultado é uma réplica digital interativa, navegável livremente.",
  },
  {
    icon: Wand2,
    title: "Edição com Inteligência Artificial (Defurnish)",
    text: "Remoção virtual de mobílias e objetos do ambiente capturado — ideal para reformas, projetos arquitetônicos e imóveis a repaginar.",
  },
  {
    icon: Box,
    title: "Mapeamento de Planta 3D (Dollhouse View)",
    text: "Modelo 3D interativo do imóvel, para visualizar de forma clara e intuitiva toda a distribuição da planta e dos ambientes.",
  },
  {
    icon: Camera,
    title: "Fotografia Profissional de Ambientes",
    text: "Extração de imagens estáticas em alta resolução direto do modelo 3D — um pacote pronto para anúncios, redes sociais e materiais comerciais.",
  },
  {
    icon: Tags,
    title: "Personalização Interativa (Tags)",
    text: "Pontos clicáveis pelo ambiente, com sua identidade visual e conteúdos estratégicos: vídeos, links, PDFs e catálogos.",
  },
  {
    icon: MapPin,
    title: "Integração com Google Street View",
    text: "Publicação do tour virtual diretamente no Google Maps e na Busca, otimizando presença digital e visibilidade orgânica.",
  },
];

export default function ServicesGrid() {
  return (
    <section id="servicos" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graphite">
            Serviços
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
            Tudo o que a tecnologia Matterport coloca ao seu alcance
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" step={0.08}>
          {SERVICES.map(({ icon: Icon, title, text }, i) => (
            <StaggerItem key={title}>
              <div className="group h-full overflow-hidden rounded-2xl border border-ink/10">
                <GradedImage
                  src={images.services[i]}
                  alt=""
                  className="aspect-[16/10]"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-6">
                  <Icon className="h-5 w-5 text-ink" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-base font-medium text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">{text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
