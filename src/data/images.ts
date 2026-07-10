// Fotos placeholder — licença livre para uso comercial (Unsplash / Pexels).
// Ver docs/fotos-placeholder-referencia.md no pacote de entrega.
// Trocar por material real do cliente quando disponível (ver briefing-consolidado.md, seção 7).

const unsplash = (id: string, w = 2400) =>
  `https://images.unsplash.com/photo-${id}?fm=jpg&q=80&w=${w}&auto=format&fit=crop`;

const pexels = (id: string, w = 2400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const images = {
  // Hero agora usa vídeo de fundo (ver src/components/HeroVideo.tsx) em vez de foto.
  // Sala de estar aconchegante, sofá bege, luz de luminária quente, plantas —
  // critério pedido para a Cena 1 (comprador). Fonte: Pexels, foto 7851906.
  scene01Comprador: pexels("7851906"),
  scene02Arquiteto: pexels("6285152"),
  scene03Hospede: unsplash("1764694875730-69b2cbf434b5"),
  services: [
    unsplash("1759782526827-5fecfb5f2d9c"),
    unsplash("1774249415644-276c3ac1bfaa"),
    unsplash("1755556090828-bdd1070bea0a"),
    unsplash("1481114536533-b80e3d4eb1d4"),
    unsplash("1576762846960-c6f1dcffade1"),
    unsplash("1760868718218-ff73db4518fd"),
  ],
};
