import Scene from "../components/Scene";
import { images } from "../data/images";

export default function Scenes() {
  return (
    <>
      <Scene
        eyebrow="Imóveis"
        title="Decisão sem deslocamento"
        text="Um comprador entra num apartamento que fica a 400km de distância. Caminha até a varanda, olha a vista, sente a proporção da sala — e decide, ali, sem sair de casa. Não é uma planta. É a experiência de estar dentro do imóvel, antes da primeira visita presencial."
        image={images.scene01Comprador}
        imageAlt="Living room amplo com luz natural quente e vista"
      />
      <Scene
        eyebrow="Arquitetura"
        title="A obra pronta, a qualquer distância"
        text="Um escritório de arquitetura apresenta um projeto já concluído a um cliente que mora em outro estado. Ele percorre cada ambiente, percebe a proporção de um corredor, repara no acabamento de um detalhe — sem pisar na obra. A mesma precisão de estar lá, guardada para sempre."
        image={images.scene02Arquiteto}
        imageAlt="Arquiteto analisando maquete e modelo de projeto"
        reverse
      />
      <Scene
        eyebrow="Hospedagem"
        title="Um espaço, sempre acessível"
        text="Um hóspede em potencial percorre a suíte antes de reservar. Já sabe exatamente onde vai acordar, o que vai ver da janela — a decisão já está tomada antes mesmo do check-in."
        image={images.scene03Hospede}
        imageAlt="Suíte de hotel em tons dourados ao pôr do sol"
      />
    </>
  );
}
