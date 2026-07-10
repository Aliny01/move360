# Move Tour 360° — Site institucional

Site institucional construído a partir de `../docs/briefing-consolidado.md`
(fonte da verdade do projeto — ver `../LEIA-PRIMEIRO.md`).

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion (reveals, parallax, tilt 3D)
- Lenis (smooth scroll)

## Rodando localmente

```bash
npm install
npm run dev
```

## Estrutura

- `src/sections/` — uma seção do site por arquivo, na ordem do briefing (seção 8)
- `src/components/` — peças reutilizáveis (Header, Footer, botões, cards, imagem com grade de cor)
- `src/data/images.ts` — URLs das fotos placeholder (Unsplash/Pexels, licença livre)

## Pendências (herdadas do briefing)

Ver `../docs/briefing-consolidado.md`, seção 7. Ainda faltam do cliente:

- Fotos reais de antes/depois (Defurnish) e de projetos — as fotos atuais
  em `src/data/images.ts` são placeholders de banco de imagem, com grade
  de cor quente aplicada via `GradedImage`. Basta trocar as URLs quando o
  material real chegar; o tratamento de cor é aplicado automaticamente.
- Link de tour real no Matterport, para embed no lugar do placeholder
  "Virtual Experience" em `src/sections/TechBlock.tsx`.
- WhatsApp, e-mail, endereço, Instagram e horário — hoje marcados "Em
  breve" em `src/sections/Contact.tsx`, `src/components/Footer.tsx` e
  `src/components/FloatingWhatsapp.tsx`.
- Depoimento de cliente early adopter, para substituir o placeholder em
  `src/sections/Testimonial.tsx`.
- Licença web das fontes oficiais (Arista Pro Alternate / Neulis Neue).
  Hoje o site usa Space Grotesk e Inter como substitutas, conforme
  definido no briefing.
- Formulário de contato envia para o estado local (mostra confirmação na
  tela) mas ainda não está conectado a e-mail/CRM — falta decidir o
  destino real dos leads.
