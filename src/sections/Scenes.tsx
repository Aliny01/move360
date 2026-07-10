import Scene from "../components/Scene";
import { images } from "../data/images";

export default function Scenes() {
  return (
    <>
      <Scene
        eyebrow="Cena 01 — Comprador"
        title="Decisão sem deslocamento"
        text="Um comprador entra num apartamento que fica a 400km de distância. Caminha até a varanda, olha a vista, sente a proporção da sala — e decide, ali, sem sair de casa. Não é uma planta. É a experiência de estar dentro do imóvel, antes da primeira visita presencial."
        image={images.scene01Comprador}
        imageAlt="Living room amplo com luz natural quente e vista"
      />
      <Scene
        eyebrow="Cena 02 — Arquiteto"
        title="O projeto antes de existir"
        text="Um arquiteto entra no próprio projeto meses antes da primeira fundação ser lançada. Caminha pelos ambientes, percebe a proporção de um corredor, ajusta o que só se percebe estando dentro — não em uma planta, em uma tela."
        image={images.scene02Arquiteto}
        imageAlt="Arquiteto analisando maquete e modelo de projeto"
        reverse
      />
      <Scene
        eyebrow="Cena 03 — Hóspede"
        title="Um espaço, sempre acessível"
        text="Um hóspede em potencial percorre a suíte antes de reservar. Já sabe exatamente onde vai acordar, o que vai ver da janela — a decisão já está tomada antes mesmo do check-in."
        image={images.scene03Hospede}
        imageAlt="Suíte de hotel em tons dourados ao pôr do sol"
      />
    </>
  );
}
