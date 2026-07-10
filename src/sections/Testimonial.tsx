import Container from "../components/Container";
import Reveal from "../components/Reveal";

export default function Testimonial() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl rounded-[28px] border border-dashed border-ink/20 px-8 py-14 text-center">
          <p className="font-display text-xl italic leading-relaxed text-ink/40 md:text-2xl">
            "Espaço reservado para depoimento de cliente early adopter — a
            preencher quando o primeiro case for aprovado para publicação."
          </p>
          <div className="mx-auto mt-8 h-px w-12 bg-ink/15" />
          <p className="mt-8 text-sm leading-relaxed text-ink/55">
            Atendimento consultivo e projetos selecionados — cada tour é
            conduzido de forma personalizada, do escaneamento à publicação.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
