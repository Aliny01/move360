import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../data/contact";

export default function FloatingWhatsapp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-paper shadow-[0_8px_24px_rgba(17,17,17,0.25)] transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.5} />
    </a>
  );
}
