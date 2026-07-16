# Move Tour 360° — Site institucional

Site institucional construído a partir de `../docs/briefing-consolidado.md`
(fonte da verdade do projeto — ver `../LEIA-PRIMEIRO.md`).

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion (reveals, parallax, tilt 3D)
- Lenis (smooth scroll)

Site de página única (sem React Router) — a navegação usa âncoras internas
(`#servicos`, `#planos`, `#contato`). O build (`npm run build`) gera
arquivos 100% estáticos em `dist/`, sem nenhuma dependência de servidor,
função serverless ou API route — funciona tanto na Vercel quanto em
hospedagem tradicional (HostGator, cPanel, etc.).

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build      # gera dist/
npm run preview    # serve dist/ localmente pra conferir antes de publicar
```

## Publicando em hospedagem tradicional (HostGator / cPanel)

1. Rode `npm run build`.
2. Suba **todo o conteúdo** de `dist/` (incluindo o arquivo `.htaccess`,
   que já vai junto) para a pasta pública do domínio (`public_html/` ou
   equivalente).
3. Não precisa de configuração de rotas — o site é de página única. O
   `.htaccess` incluído cuida só de compressão e cache de assets.

## Formulário de contato — FormSubmit

O formulário (`src/sections/Contact.tsx`) envia via
[FormSubmit](https://formsubmit.co), sem backend próprio, direto para o
e-mail em `src/data/contact.ts`.

**Ativação obrigatória (só uma vez):** no primeiro envio, o FormSubmit
manda um e-mail para `comercial@movetour360.com.br` com um link
"Activate Form". É preciso clicar nesse link para que os próximos envios
cheguem de verdade — sem isso, o formulário sempre mostra a mensagem de
erro ("Não foi possível enviar agora..."), mesmo com a integração
funcionando corretamente do lado do site.

## Estrutura

- `src/sections/` — uma seção do site por arquivo, na ordem do briefing (seção 8)
- `src/components/` — peças reutilizáveis (Header, Footer, botões, cards, imagem com grade de cor)
- `src/data/images.ts` — fotos do site (mistura de material real do cliente em `public/photos/` e placeholders Unsplash/Pexels)
- `src/data/contact.ts` — WhatsApp e e-mail reais do cliente

## Pendências (herdadas do briefing)

Ver `../docs/briefing-consolidado.md`, seção 7.

- Endereço, Instagram e horário de atendimento — ainda não recebidos do cliente.
- Depoimento de cliente early adopter, para a seção de prova social (removida por ora — ver histórico do git).
- Licença web das fontes oficiais (Arista Pro Alternate / Neulis Neue).
  Hoje o site usa Space Grotesk e Inter como substitutas, conforme
  definido no briefing.
- Ativar o formulário no FormSubmit (ver seção acima).
