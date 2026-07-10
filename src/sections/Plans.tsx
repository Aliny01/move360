import { Check } from "lucide-react";
import Container from "../components/Container";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import { SolidButton, OutlineButton } from "../components/Buttons";

const PLANS = [
  {
    name: "Starter",
    text: "Ideal para empresas que desejam iniciar sua transformação digital, apresentando seus espaços com tecnologia 3D profissional — mais credibilidade e decisões mais rápidas dos seus clientes.",
    featured: false,
  },
  {
    name: "Professional",
    text: "Ideal para empresas que buscam potencializar o marketing, destacar-se da concorrência e oferecer uma experiência digital mais completa, com mais engajamento e conversão.",
    featured: true,
  },
  {
    name: "Business",
    text: "Ideal para empresas que desejam extrair o máximo da tecnologia: recursos avançados, maior personalização, inteligência de dados e uma plataforma completa de vendas e gestão.",
    featured: false,
  },
];

export default function Plans() {
  return (
    <section id="planos" className="scroll-mt-24 border-t border-ink/10 bg-mist/50 py-24 md:py-32">
      <Container>
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graphite">
            Planos
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
            Um projeto para cada momento do seu negócio
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/55">
            Atendimento consultivo e projetos selecionados — condições
            apresentadas sob demanda, conforme o escopo do seu espaço.
          </p>
        </Reveal>

        <Stagger className="mt-16 grid gap-6 md:grid-cols-3" step={0.1}>
          {PLANS.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={`flex h-full flex-col rounded-[24px] border p-8 ${
                  plan.featured
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/10 bg-paper text-ink"
                }`}
              >
                <span
                  className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                    plan.featured ? "text-paper/50" : "text-graphite"
                  }`}
                >
                  {plan.featured ? "Mais procurado" : "Plano"}
                </span>
                <h3 className="mt-3 font-display text-2xl font-medium">
                  {plan.name}
                </h3>
                <p
                  className={`mt-4 flex-1 text-sm leading-relaxed ${
                    plan.featured ? "text-paper/65" : "text-ink/55"
                  }`}
                >
                  {plan.text}
                </p>

                <div
                  className={`mt-6 flex items-center gap-2 text-xs ${
                    plan.featured ? "text-paper/50" : "text-ink/45"
                  }`}
                >
                  <Check className="h-4 w-4" strokeWidth={1.5} />
                  Base tecnológica oficial Matterport
                </div>

                {plan.featured ? (
                  <SolidButton href="#contato" variant="light" className="mt-8 w-full">
                    Solicitar demonstração
                  </SolidButton>
                ) : (
                  <OutlineButton href="#contato" className="mt-8 w-full">
                    Solicitar demonstração
                  </OutlineButton>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
