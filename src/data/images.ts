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
    // Tour Virtual Imersivo — mantida (já representa bem "imersão").
    unsplash("1759782526827-5fecfb5f2d9c"),
    // Defurnish — ambiente vazio, sugere "espaço sem mobília".
    unsplash("1646592474103-cfd22d1d9e34"),
    // Screenshot real do Dollhouse View — mesmo projeto (Jardim Versailles).
    "/photos/dollhouse-jardim-versailles.jpg",
    // Foto real da cozinha — mesmo projeto (Jardim Versailles).
    "/photos/jardim-versailles-cozinha.jpg",
    // Tags — estante estilizada com múltiplos objetos/pontos de interesse.
    unsplash("1765371512974-6fa510537d21"),
    // Google Street View — fachada real, identificável, de rua.
    pexels("7587880"),
  ],
};
