import { useState, type FormEvent } from "react";
import { Mail, MessageCircle } from "lucide-react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import { SolidSubmitButton } from "../components/Buttons";
import { WHATSAPP_DISPLAY, WHATSAPP_LINK, EMAIL, EMAIL_LINK } from "../data/contact";

// Endpoint AJAX do FormSubmit — responde em JSON (sem redirecionar a
// página), o que permite manter a tela de confirmação própria do site.
// No primeiro envio, o FormSubmit manda um e-mail de confirmação para
// o endereço abaixo — é preciso clicar no link desse e-mail uma única
// vez para ativar o recebimento dos formulários seguintes.
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      const data = await res.json();
      // FormSubmit responde 200 mesmo quando o formulário ainda não foi
      // ativado (primeiro envio) — só "success: true" é entrega real.
      if (!res.ok || data.success !== "true") throw new Error("Falha no envio");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
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

            <ul className="mt-10 space-y-4">
              <li className="flex items-center gap-3 text-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mist text-ink/70">
                  <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-medium text-ink/70 hover:text-ink">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mist text-ink/70">
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <a href={EMAIL_LINK} className="font-medium text-ink/70 hover:text-ink">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            {status === "sent" ? (
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
                <input type="hidden" name="_subject" value="Novo contato — Move Tour 360°" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />

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

                {status === "error" && (
                  <p className="rounded-xl border border-ink/15 bg-paper px-4 py-3 text-xs text-ink/70">
                    Não foi possível enviar agora. Tente novamente em instantes
                    ou fale direto pelo WhatsApp acima.
                  </p>
                )}

                <SolidSubmitButton type="submit" disabled={status === "sending"} className="w-full disabled:opacity-60">
                  {status === "sending" ? "Enviando..." : "Solicitar demonstração"}
                </SolidSubmitButton>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
