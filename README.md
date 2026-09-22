# Evolution — Academia

Landing page institucional para uma academia premium no Rio de Janeiro, construída em
**React + Vite + TypeScript**. Identidade visual em preto azulado, texturas de rocha e
névoa, acento lavanda e tipografia grotesca em caixa alta com wordmark gigante sangrando
na borda.

---

## Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento em http://localhost:5173
npm run build    # gera a pasta dist/ pronta para publicar
npm run preview  # serve a build local para conferência
```

Requer Node 18 ou superior.

---

## Stack

| Camada | Ferramenta | Para quê |
|---|---|---|
| Build | **Vite 6** | dev server instantâneo, build com code-splitting |
| UI | **React 18 + TypeScript** (strict) | componentes tipados |
| Estilo | **Tailwind CSS 3** | design tokens, utilitários e responsividade |
| Estilo | **Sass (SCSS)** | camada global, `@layer` e classes de textura |
| Estilo | **tailwindcss-animate** + **@tailwindcss/typography** | keyframes e leitura longa |
| Animação | **Framer Motion** | revelação ao rolar, parallax, acordeão, menu |
| Rolagem | **Lenis** | rolagem suave, desligada com `prefers-reduced-motion` |
| Carrossel | **Embla Carousel** (+ autoplay) | depoimentos |
| Ícones | **lucide-react** | setas, menu, check |
| Utilitários | **clsx** + **tailwind-merge** | função `cn()` para compor classes sem conflito |

---

## Estrutura

```
src/
├─ components/
│  ├─ layout/     Navbar (menu pílula desktop + sheet fullscreen mobile), Footer
│  ├─ sections/   Heroi, Manifesto, Numeros, Metodo, Modalidades,
│  │              Professores, Horarios, Outdoor, Depoimentos,
│  │              Planos, Duvidas, Visita
│  └─ ui/         Botao, Seta, Etiqueta, Secao, Revelar, Foto, Marquee
├─ data/site.ts   todo o conteúdo do site em um arquivo só
├─ hooks/         useLenis, useContagem
├─ lib/           utils (cn, brl), images (fotos + texturas)
└─ styles/        global.scss (tokens, grão, classes de textura)
```

**Todo o texto e os preços ficam em `src/data/site.ts`.** Para adaptar o site a outra
academia, normalmente basta editar esse arquivo e `src/lib/images.ts`.

---

## Navegação e agendamento de visita

- **Desktop**: menu em pílula fixo no topo, com item ativo sincronizado por
  `IntersectionObserver` conforme a rolagem.
- **Mobile**: botão de menu abre um sheet fullscreen com os mesmos links em tipografia
  grande, e trava a rolagem do body enquanto está aberto.
- O CTA **"Agendar visita"** aparece na navbar (desktop e mobile) e na seção `#visita`,
  abrindo um `mailto:` direto para o e-mail configurado em `src/data/site.ts`.

---

## Imagens

Duas camadas trabalham juntas:

1. **Texturas** (`public/img/*.jpg`) — rocha, névoa, atmosfera, metal escovado e grão de
   filme, geradas proceduralmente para este projeto. Entram como fundo de seções e cartões
   e são aplicadas pelas classes `.textura-pedra`, `.textura-nevoa`, `.textura-atmosfera`,
   `.textura-metal` e `.grain`.
2. **Fotografias** (Unsplash, uso livre) — carregadas por URL já otimizada em
   `src/lib/images.ts`, em preto e branco, sobre a textura, em `mix-blend-luminosity`.

Para usar fotos próprias, coloque os arquivos em `public/img/` e troque os valores em
`src/lib/images.ts`:

```ts
export const imagens = {
  heroi: '/img/minha-foto.jpg',
  // ...
}
```

O componente `<Foto>` esconde a imagem se ela falhar ao carregar, deixando a textura no
lugar — nenhum bloco quebra por causa de uma URL fora do ar.

---

## Acessibilidade e desempenho

- Link "pular para o conteúdo", foco visível e navegação por teclado no acordeão e no carrossel.
- `prefers-reduced-motion` desliga rolagem suave, parallax, contadores e revelações.
- Tabela de horários com `<th scope="row">` e legenda.
- Imagens com `loading="lazy"` (exceto o herói, com `fetchPriority="high"`), `preconnect`
  para fontes e CDN de imagens, e JS separado em blocos (app, motion, carrossel) para
  reduzir o bundle inicial.
- Layout responsivo de 360 px a telas largas, com margem lateral fluida (`px-gut`) e
  escala tipográfica em `clamp()`.

---

## Personalização rápida

**Cores** — `tailwind.config.ts`, em `theme.extend.colors`:

```ts
void: '#04050A',  coal: '#090C14',  slab: '#0E121C',
bone: '#EDF0F7',  ash:  '#7A8296',  lav: { DEFAULT: '#8E9FDA', deep: '#5E6CA6' },
haze: '#C2CADE',
```

**Tipografia** — `Archivo` (títulos) e `Barlow` (texto), carregadas no `index.html`.

**Escala de títulos** — `theme.extend.fontSize`: `d1`, `d2`, `d3` e `mark` (wordmark),
todas em `clamp()`, então o tipo escala sozinho entre celular e desktop.

---

## Convenção de commits

Este repositório segue [Conventional Commits](https://www.conventionalcommits.org/):
`feat`, `fix`, `style`, `docs`, `refactor`, `perf`, `chore`, entre outros, sempre com um
escopo claro do que mudou.
