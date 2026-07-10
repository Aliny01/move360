import { MessageCircle } from "lucide-react";

// Briefing original do cliente pede botão flutuante de WhatsApp, mas o
// número ainda não foi enviado (briefing-consolidado.md, seção 7).
// Por ora aponta para a seção de contato — trocar por link wa.me/<numero>
// assim que o dado chegar.
export default function FloatingWhatsapp() {
  return (
    <a
      href="#contato"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-paper shadow-[0_8px_24px_rgba(17,17,17,0.25)] transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.5} />
    </a>
  );
}
