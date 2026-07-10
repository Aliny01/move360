import { useState, type FormEvent } from "react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import { SolidSubmitButton } from "../components/Buttons";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // Dados de contato (WhatsApp, e-mail) ainda pendentes do cliente — ver
  // briefing-consolidado.md, seção 7. Conectar este handler a um serviço
  // de e-mail/CRM assim que os dados chegarem.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contato" className="scroll-mt-24 border-t border-ink/10 py-24 md:py-32">
      <Container>
        <div className="grid gap-16 md:grid-cols-2 md:gap-12">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graphite">
              Contato
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.15] tracking-tight text-ink md:text-4xl">
              Solicite uma demonstração exclusiva.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/60">
              Um espaço, uma vez visto assim, muda a forma como se decide
              sobre ele.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            {sent ? (
              <div className="flex h-full min-h-[360px] flex-col items-center justify-center rounded-[24px] bg-mist/60 px-8 text-center">
                <p className="font-display text-lg font-medium text-ink">
                  Recebemos sua solicitação.
                </p>
                <p className="mt-2 max-w-xs text-sm text-ink/55">
                  Nosso time entra em contato para combinar a sua
                  demonstração exclusiva.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 rounded-[24px] bg-mist/60 p-8">
                <div>
                  <label htmlFor="nome" className="text-xs font-medium text-ink/60">
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    required
                    type="text"
                    className="mt-2 w-full rounded-xl border border-ink/10 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink/40"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-medium text-ink/60">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    className="mt-2 w-full rounded-xl border border-ink/10 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink/40"
                    placeholder="voce@empresa.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="text-xs font-medium text-ink/60">
                    Telefone / WhatsApp
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    className="mt-2 w-full rounded-xl border border-ink/10 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink/40"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="text-xs font-medium text-ink/60">
                    Conte um pouco sobre o espaço
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    className="mt-2 w-full resize-none rounded-xl border border-ink/10 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink/40"
                    placeholder="Tipo de espaço, localização, prazo..."
                  />
                </div>
                <SolidSubmitButton type="submit" className="w-full">
                  Solicitar demonstração
                </SolidSubmitButton>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
