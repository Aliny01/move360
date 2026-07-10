import Container from "./Container";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-paper/70">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <img
              src="/logo/logotipo-completo-branco.png"
              alt="Move Tour 360°"
              className="h-9 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/55">
              Digitalização de espaços físicos com tecnologia Matterport —
              tours virtuais 360°, gêmeos digitais e captura Laser Scan.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-paper/40">
              Navegação
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="#servicos" className="hover:text-paper">Serviços</a></li>
              <li><a href="#como-funciona" className="hover:text-paper">Como funciona</a></li>
              <li><a href="#planos" className="hover:text-paper">Planos</a></li>
              <li><a href="#contato" className="hover:text-paper">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-paper/40">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-paper/55">
              <li>WhatsApp — em breve</li>
              <li>E-mail — em breve</li>
              <li>Instagram — em breve</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-paper/40">
              Atendimento
            </h4>
            <p className="mt-4 text-sm text-paper/55">
              Consultivo e por projetos selecionados. Horário — em breve.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-paper/10 pt-6 text-xs text-paper/40 md:flex-row md:items-center md:justify-between">
          <p>© {YEAR} Move Tour 360°. Todos os direitos reservados.</p>
          <p>Tecnologia oficial Matterport.</p>
        </div>
      </Container>
    </footer>
  );
}
