import Container from "../components/Container";
import Reveal from "../components/Reveal";

export default function IntroBlock() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-2xl font-semibold leading-[1.3] tracking-tight text-ink md:text-3xl">
            Há uma diferença entre ver uma foto e estar num lugar.
          </p>
          <p className="mt-6 text-sm font-normal leading-relaxed text-graphite md:text-lg">
            É a diferença entre imaginar um espaço e caminhar por ele. A Move
            Tour 360° existe nesse intervalo — transformando ambientes
            físicos em experiências que se navegam, se sentem, se percorrem.
            Não é uma imagem do espaço. É o espaço.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
