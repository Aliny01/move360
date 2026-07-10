import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import { SolidButton, OutlineButton } from "./Buttons";

const NAV = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/90 shadow-[0_1px_0_0_rgba(17,17,17,0.08)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img
            src="/logo/logotipo-completo-preto.png"
            alt="Move Tour 360°"
            className="h-9 w-auto md:h-9"
          />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <OutlineButton href="#contato" className="px-5 py-2.5 text-xs">
            Falar com um consultor
          </OutlineButton>
          <SolidButton href="#contato" className="px-5 py-2.5 text-xs">
            Solicitar demonstração
          </SolidButton>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </Container>

      {open && (
        <div className="border-t border-ink/10 bg-paper md:hidden">
          <Container className="flex flex-col gap-5 py-6">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3">
              <OutlineButton href="#contato" onClick={() => setOpen(false)}>
                Falar com um consultor
              </OutlineButton>
              <SolidButton href="#contato" onClick={() => setOpen(false)}>
                Solicitar demonstração
              </SolidButton>
            </div>
          </Container>
        </div>
      )}
    </motion.header>
  );
}
