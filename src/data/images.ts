// Fotos placeholder — licença livre para uso comercial (Unsplash / Pexels).
// Ver docs/fotos-placeholder-referencia.md no pacote de entrega.
// Trocar por material real do cliente quando disponível (ver briefing-consolidado.md, seção 7).

const unsplash = (id: string, w = 2400) =>
  `https://images.unsplash.com/photo-${id}?fm=jpg&q=80&w=${w}&auto=format&fit=crop`;

const pexels = (id: string, w = 2400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const images = {
  // Hero agora usa vídeo de fundo (ver src/components/HeroVideo.tsx) em vez de foto.
  // Foto real (sala/TV, ampliada com IA pra caber no formato retrato) —
  // Residência Condomínio Jardim Versailles, Alameda Boulevard Croisette.
  scene01Comprador: "/photos/jardim-versailles-sala-tv.jpg",
  // Screenshot real da ferramenta de medição — mesmo projeto (Jardim Versailles).
  scene02Arquiteto: "/photos/jardim-versailles-medidas.jpg",
  // Sala de estudo/lounge — Liderança Projetos. Placeholder até termos
  // material real de hospedagem/hotelaria (nenhuma foto do cliente é
  // desse segmento ainda).
  scene03Hospede: "/photos/lideranca-projetos-lounge.jpg",
  services: [
    // Tour Virtual Imersivo — foto real do próprio tour (Florindo's Bar).
    "/photos/tour-virtual-imersivo.jpg",
    // Defurnish — não usada: o card renderiza defurnishBeforeAfter (slider)
    // no lugar dessa imagem. Mantida só pra não deslocar os índices abaixo.
    unsplash("1646592474103-cfd22d1d9e34"),
    // Screenshot real do Dollhouse View — mesmo projeto (Jardim Versailles).
    "/photos/dollhouse-jardim-versailles.jpg",
    // Foto real da cozinha — mesmo projeto (Jardim Versailles).
    "/photos/jardim-versailles-cozinha.jpg",
    // Tags — screenshot real de uma Tag ativa (Jardim Versailles).
    "/photos/jardim-versailles-tag.jpg",
    // Google Street View — fachada real, identificável, de rua.
    pexels("7587880"),
  ],
  // Antes/depois reais do Defurnish — mesmo ambiente (Jardim Versailles),
  // recortadas no mesmo enquadramento pra alinhar certinho no slider.
  defurnishBeforeAfter: {
    before: "/photos/defurnish-antes.jpg",
    after: "/photos/defurnish-depois.jpg",
  },
};
