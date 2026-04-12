# Plano de Implementação — Teste de Cartela

> Baseia-se em `identidade-visual.md`, `paginas.md` e na imagem de referência
> enviada pela cliente para inspirar o hero da home.

---

## 1. Contexto

O produto **Teste de Cartela** é um quiz web criado por Larissa que ajuda mulheres
a descobrirem qual cartela de cores mais valoriza sua beleza. O quiz coleta 14
respostas (A/B/C) divididas em dois blocos — **temperatura** (1–7) e **profundidade**
(8–14) — e retorna um entre 9 perfis possíveis, cada um com uma página de
resultado rica em recomendações.

Hoje existem apenas dois documentos de referência em `teste-de-cartela/docs/`:
`identidade-visual.md` (paleta, tipografia, regras de espaçamento) e
`paginas.md` (copy de todas as 27 páginas + lógica do quiz). A pasta do projeto
está vazia — vamos criar a aplicação do zero.

**Resultado esperado:** um site web elegante, mobile-first, fiel à identidade
visual, implementando todo o fluxo do quiz e as 9 páginas de resultado, pronto
para deploy.

---

## 2. Inspiração Visual (Referência do Hero)

A cliente compartilhou uma referência visual que define o tom da landing. Ela traz
decisões de layout importantes que o plano incorpora:

- **Hero dividido em 2 colunas** (desktop): texto à esquerda, foto à direita,
  com fundo bordô (`--color-primary`) no topo que se funde suavemente com o
  fundo claro (`--color-bg`) via gradiente radial/linear.
- **H1 com ênfase tipográfica mista**: parte em roman, parte em *itálico* no
  termo-chave (ex.: "Descubra Sua *Cartela de Cores Ideal*"). Isso reforça o
  ar editorial/revista que Playfair Display pede.
- **Subtítulo direto**: "Saiba quais cores mais valorizam a sua beleza e fazem
  você brilhar." — mais curto e conversivo do que o monólogo pessoal da Larissa.
- **Lista de 3 benefícios** antes do CTA, cada um com ícone dourado:
  1. ✓ Rápido e fácil
  2. ♥ Respostas personalizadas
  3. ★ Entenda o que mais te valoriza
- **CTA dourado em formato pill** com leve profundidade (shadow/gradient muito
  sutil) e rótulo curto: **"Iniciar o Teste"**.
- **Microcopy de garantia** abaixo do CTA em cor `--color-muted`:
  "Leva menos de 2 minutos para descobrir a sua cartela ideal."
- **Strip de 4 color swatches** (bege, nude rosé, bordô, dourado) como preview
  visual da cartela — funciona como prova visual silenciosa.
- **Props decorativos** (vaso com pampas grass / ramos secos) dando ar editorial
  — serão imagens PNG opcionais ou SVGs leves; não podem dominar o layout.
- **Modelo à direita**: foto em vestido metálico, iluminação soft, posicionada
  contra o fundo bordô com glow radial atrás dela. Essa foto é o ativo visual
  mais importante — tratamento idêntico ao do mockup (fade suave nas bordas).

Mobile: hero empilha (imagem acima, texto abaixo, ou vice-versa), mas preserva
benefits + CTA + microcopy + swatches.

> ⚠️ **Conflito de copy a resolver**: `paginas.md` página 1 traz uma mensagem
> pessoal longa da Larissa ("Eu, Larissa, acredito…"). A referência visual é
> mais direta e conversiva. **Proposta**: usar a estrutura visual da referência
> (landing marketing) e mover a mensagem pessoal da Larissa para um bloco
> secundário **abaixo do hero** (fundo claro, retrato menor) — mantendo o valor
> emocional sem sacrificar a conversão. Confirmar com a cliente (ver §15).

---

## 3. Stack Técnico Recomendado

**Next.js 16 (App Router) + TypeScript + Tailwind CSS + next/font (Google Fonts)**

Por quê:
- **Component reuse**: 27 páginas compartilham layouts, tipografia e botões — um
  framework com componentes evita copiar/colar HTML.
- **Rotas dinâmicas**: `/quiz/[step]` e `/resultado/[tipo]` reduzem drasticamente
  o boilerplate.
- **next/font**: carrega Playfair Display + Inter sem layout shift, auto-hospedado,
  sem requisições ao Google em runtime.
- **next/image**: otimiza automaticamente a foto hero (a maior imagem da home).
- **Prerender estático**: todas as páginas podem ser estáticas (SSG) — rápidas e
  baratas em qualquer host.
- **Deploy trivial na Vercel** — compatível com futuras features (Analytics,
  captura de e-mail, server actions) sem trocar de stack.

Alternativas consideradas:
- **Astro** — ainda mais leve (HTML estático + islands). Boa opção se o time não
  quiser React. Mais simples, porém menos ergonômico para o estado do quiz.
- **HTML + CSS + JS puro** — viável mas repetitivo (27 arquivos HTML) e frágil à
  medida que a copy evoluir.

---

## 4. Sistema de Design

### 4.1 Tokens de cor (CSS variables em `globals.css`)

```css
:root {
  --color-primary: #2B0F14;   /* bordô — hero, header, faixas premium */
  --color-bg:      #F7F7FA;   /* branco frio — fundo principal */
  --color-surface: #E9DADA;   /* nude rosé — cards, blocos suaves */
  --color-text:    #3A2E2A;   /* marrom profundo — títulos/corpo em fundo claro */
  --color-muted:   #7A6A5F;   /* taupe acinzentado — textos secundários */
  --color-cta:     #C6A77B;   /* dourado — botões */
  --color-cta-hover: #B89566; /* hover do CTA */
  --color-cta-text:  #FFFFFF; /* texto do botão (branco puro só aqui) */
  --shadow-soft: 0 2px 8px rgba(0,0,0,0.05);
  --shadow-cta:  0 6px 18px rgba(198,167,123,0.25); /* leve glow dourado no CTA */
}
```

Regras não-negociáveis (de `identidade-visual.md`):
- **Nunca** usar preto puro nem branco puro (exceto texto do CTA).
- Sombras sempre suaves.

### 4.2 Tipografia

- **Playfair Display** (`next/font/google`, weights 400 regular + 500 + 500 italic) → títulos
- **Inter** (`next/font/google`, weights 400, 500, 600) → corpo e UI

> O 500-italic é necessário para a ênfase mista no H1 do hero
> ("Descubra Sua *Cartela de Cores Ideal*").

Hierarquia (desktop → mobile):

| Elemento | Fonte              | Peso    | Tamanho         | Line-height | Cor                            |
|----------|--------------------|---------|-----------------|-------------|--------------------------------|
| H1       | Playfair Display   | 500     | 40–48px → 28–32px | 120%      | `--color-bg` no hero, senão `--color-text` |
| H2       | Inter              | 400     | 18px → 16px     | 150%        | `--color-surface` no hero, senão `--color-muted` |
| H3       | Inter              | 500     | 16px            | 150%        | `--color-text`                 |
| Corpo    | Inter              | 400     | 15–16px → 14–15px | 150%      | `--color-text`                 |
| Small    | Inter              | 400     | 14px            | 150%        | `--color-muted`                |
| CTA      | Inter              | 600     | 16px            | —           | `--color-cta-text`             |

- Títulos com `letter-spacing: 0.5px`.
- **Alinhamento padrão: esquerda** (evitar centralizar blocos longos).

### 4.3 Espaçamento

- Título → subtítulo: 12–16px
- Entre blocos: 24–32px
- Muito respiro (whitespace é sinal de elegância)
- Container max-width: ~1120px no hero, ~680px em páginas de texto, ~920px em resultados

### 4.4 Componentes base (em `components/`)

| Componente          | Função                                                      |
|---------------------|-------------------------------------------------------------|
| `<Button>`          | CTA dourado (primary) e ghost. Pill radius, `--shadow-cta` no primary. Hover `--color-cta-hover`. |
| `<SplitHero>`       | Layout de 2 colunas para a home: texto + foto. Gradiente radial atrás da foto. Responsivo (stack mobile). |
| `<HeroSection>`     | Variante simples usada em páginas internas que precisam de topo bordô (ex.: finalização).  |
| `<PageSection>`     | Wrapper claro com padding + max-width.                       |
| `<Card>`            | Fundo `--color-surface`, `--shadow-soft`, radius suave.      |
| `<BenefitList>`     | Lista de 3 itens com ícone dourado + label. Usada no hero e reaproveitável em outras páginas de confiança. |
| `<ColorSwatchStrip>`| Row horizontal de color swatches (cor + label opcional). Na home mostra 4; nas páginas de resultado mostra 7+. |
| `<QuestionCard>`    | Pergunta + 3 opções A/B/C.                                   |
| `<OptionButton>`    | Botão grande e clicável, estado selecionado.                 |
| `<ProgressBar>`     | Indicador 1..14 (não está no copy original, mas é boa UX).  |
| `<ResultBlock>`     | Seção tipada para renderizar cada parte do resultado.        |
| `<LarissaNote>`     | Bloco secundário com foto redonda + citação — veículo para a mensagem pessoal da Larissa abaixo do hero. |

---

## 5. Estrutura de Rotas (App Router)

```
app/
├── layout.tsx              # fontes, metadados, providers globais
├── globals.css             # tokens de cor, reset, base typography
├── page.tsx                # PÁGINA 1  — home / landing (hero split)
├── instrucoes/
│   └── page.tsx            # PÁGINA 2  — atenção / instruções
├── quiz/
│   ├── layout.tsx          # progress bar + QuizProvider
│   ├── [step]/
│   │   └── page.tsx        # PÁGINAS 3–9 e 11–17 (step = 1..14)
│   ├── transicao/
│   │   └── page.tsx        # PÁGINA 10 — transição entre blocos
│   └── finalizando/
│       └── page.tsx        # PÁGINA 18 — CTA "Quero ver meu resultado"
└── resultado/
    └── [tipo]/
        └── page.tsx        # 9 resultados (rota dinâmica, SSG por slug)
```

**Slugs dos resultados** (kebab-case, sem acentos):

| Slug                     | Temperatura + Profundidade | Título exibido         |
|--------------------------|----------------------------|------------------------|
| `clara-iluminada`        | QUENTE + CLARA             | Clara Iluminada        |
| `clara-delicada`         | FRIA + CLARA               | Clara Delicada         |
| `clara-equilibrada`      | NEUTRA + CLARA             | Clara Equilibrada      |
| `harmonia-natural`       | QUENTE + MEDIA             | Harmonia Natural       |
| `elegancia-suave`        | FRIA + MEDIA               | Elegância Suave        |
| `equilibrio-sofisticado` | NEUTRA + MEDIA             | Equilíbrio Sofisticado |
| `profunda-radiante`      | QUENTE + PROFUNDA          | Profunda Radiante      |
| `profunda-marcante`      | FRIA + PROFUNDA            | Profunda Marcante      |
| `profunda-intensa`       | NEUTRA + PROFUNDA          | Profunda Intensa       |

`generateStaticParams` em `/resultado/[tipo]` pré-renderiza as 9 páginas.

---

## 6. Detalhamento da Página 1 (Home) — estrutura visual

```
┌──────────────────────────────────────────────────────────┐
│  HEADER (transparente)      logo Teste de Cartela        │
├──────────────────────────────────────────────────────────┤
│  ░░░░░░░░ BORDÔ (#2B0F14) — fade suave para BG ░░░░░░░░  │
│                                                          │
│  ┌───────────────────────┐    ┌──────────────────┐      │
│  │ H1 "Descubra Sua      │    │                  │      │
│  │     *Cartela de Cores*│    │     foto hero    │      │
│  │     *Ideal*"          │    │   (modelo Larissa│      │
│  │                       │    │    ou pessoa     │      │
│  │ H2 subtítulo          │    │    representando │      │
│  │                       │    │    o público)    │      │
│  │ ✓ Rápido e fácil      │    │                  │      │
│  │ ♥ Respostas personali │    │ glow radial atrás│      │
│  │ ★ Entenda o que mais  │    │                  │      │
│  │                       │    └──────────────────┘      │
│  │ [  Iniciar o Teste  ] │                              │
│  │                       │                              │
│  │ small: Leva menos de  │                              │
│  │   2 minutos...        │                              │
│  │                       │                              │
│  │ ■ ■ ■ ■  (swatches)   │                              │
│  └───────────────────────┘                              │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  [OPCIONAL] Bloco LarissaNote — foto + mensagem pessoal  │
│  da Larissa em fundo claro (respeita copy de paginas.md) │
└──────────────────────────────────────────────────────────┘
```

**Composição do hero** (`<SplitHero>`):
- Grid 2 colunas, gap ~48px, max-width 1120px, padding vertical 80–120px
- Coluna esquerda: H1, H2, `<BenefitList>`, `<Button>`, microcopy, `<ColorSwatchStrip>`
- Coluna direita: `<Image>` com priority, borda suave, `fade-mask` via CSS
- Fundo: gradiente `linear-gradient(180deg, #2B0F14 0%, #2B0F14 60%, #F7F7FA 100%)`
- Glow radial atrás da foto: `radial-gradient(circle, rgba(198,167,123,0.15) 0%, transparent 70%)`

**Mobile (<768px)**: vira 1 coluna, foto primeiro (aspect-ratio 4/5, max 360px),
depois bloco de texto. Swatches ocupam linha inteira.

**Bloco LarissaNote** (opcional, abaixo do hero):
- Fundo `--color-bg`
- Retrato redondo pequeno da Larissa à esquerda (120px)
- Citação em Playfair Display 500, cor `--color-text`
- Assinatura em Inter, cor `--color-muted`
- Usa trechos-chave da copy original (parafraseada para caber no formato)

---

## 7. Fluxo do Usuário

1. `/` → Hero split + LarissaNote. CTA "Iniciar o Teste".
2. `/instrucoes` → página 2 (copy de atenção + CTA "Começar agora!")
3. `/quiz/1` … `/quiz/7` → perguntas 1–7 (bloco temperatura)
4. `/quiz/transicao` → texto ponte ("Agora vamos entender a profundidade…")
5. `/quiz/8` … `/quiz/14` → perguntas 8–14 (bloco profundidade)
6. `/quiz/finalizando` → copy final + CTA "Quero ver meu resultado"
   - Ao clicar: `computeResult(answers)` + `router.push('/resultado/' + slug)`
7. `/resultado/[slug]` → renderiza o resultado completo

A `layout.tsx` de `/quiz` mostra o progresso e bloqueia navegação direta para um
step cujas respostas anteriores estão em branco (redireciona para o primeiro
step não respondido).

---

## 8. Gestão de Estado do Quiz

React Context + `localStorage` (chave `teste-cartela-quiz-v1`).

```ts
// context/QuizContext.tsx
type Answer = 'A' | 'B' | 'C';
type QuizState = {
  answers: Partial<Record<number, Answer>>; // question number 1..14
  setAnswer: (q: number, a: Answer) => void;
  reset: () => void;
};
```

- Hidratação em `useEffect` (evitar mismatch SSR).
- Ao responder, `setAnswer` atualiza o context **e** persiste em `localStorage`.
- `reset()` chamado ao chegar em `/resultado/[slug]` (opcional: manter p/ refresh).

---

## 9. Lógica do Quiz (`lib/quiz-logic.ts`)

Módulo **puro e testável**, sem dependências de React.

```ts
export type Answer = 'A' | 'B' | 'C';
export type Temperature = 'QUENTE' | 'FRIA' | 'NEUTRA';
export type Depth = 'CLARA' | 'MEDIA' | 'PROFUNDA';
export type ResultSlug =
  | 'clara-iluminada' | 'clara-delicada' | 'clara-equilibrada'
  | 'harmonia-natural' | 'elegancia-suave' | 'equilibrio-sofisticado'
  | 'profunda-radiante' | 'profunda-marcante' | 'profunda-intensa';

export function computeTemperature(answers: Answer[]): Temperature;
export function computeDepth(answers: Answer[]): Depth;
export function computeResult(all: Record<number, Answer>): ResultSlug;
```

### 9.1 Temperatura (perguntas 1–7)

1. Contar: A → `quente++`, B → `fria++`, C → `neutra++`.
2. **Regra de segurança**: se `neutra >= 4`, retornar `NEUTRA` imediatamente.
3. Caso contrário:
   - `quente > fria && quente > neutra` → `QUENTE`
   - `fria > quente && fria > neutra` → `FRIA`
4. Desempate (conforme `identidade-visual.md` linhas 248–256):
   - `quente == fria` → `NEUTRA`
   - `quente == neutra` → `QUENTE`
   - `fria == neutra` → `FRIA`
5. Fallback: `NEUTRA`.

### 9.2 Profundidade (perguntas 8–14)

1. Contar: A → `clara++`, B → `media++`, C → `profunda++`.
2. `clara > media && clara > profunda` → `CLARA`
3. `profunda > clara && profunda > media` → `PROFUNDA`
4. `media > clara && media > profunda` → `MEDIA`
5. **Qualquer empate** → `MEDIA` (regra universal do doc, linhas 277–289).

### 9.3 Cruzamento (3 × 3 → 9)

```ts
const RESULT_MAP: Record<Temperature, Record<Depth, ResultSlug>> = {
  QUENTE: { CLARA: 'clara-iluminada',   MEDIA: 'harmonia-natural',       PROFUNDA: 'profunda-radiante' },
  FRIA:   { CLARA: 'clara-delicada',    MEDIA: 'elegancia-suave',        PROFUNDA: 'profunda-marcante' },
  NEUTRA: { CLARA: 'clara-equilibrada', MEDIA: 'equilibrio-sofisticado', PROFUNDA: 'profunda-intensa' },
};
```

---

## 10. Conteúdo como Dados Tipados

Toda a copy vem de `data/` para manter a UI desacoplada do texto.

```
data/
├── pages.ts       # home (hero + larissaNote), instruções, transição, finalização
├── questions.ts   # 14 perguntas × { emoji, titulo, enunciado, opcoes:{A,B,C}, imagem? }
└── results.ts     # 9 resultados × { slug, titulo, subtitulo, seuResultado, sobreVoce,
                   #                   coresFavoraveis[], coresDesfavoraveis[], aplicacao[], insight }
```

Benefícios:
- A cliente pode pedir ajustes de copy sem tocar em JSX.
- Tipagem garante que nenhum campo falte nos 9 resultados.
- Testes automáticos ficam triviais.

---

## 11. Imagens / Assets

### 11.1 Inventário de imagens necessárias

**Home (prioridade alta — define o impacto visual):**
- `home-hero.jpg` — modelo em vestido metálico, fundo neutro, formato retrato
- `home-vase.png` (opcional) — prop decorativo de pampas grass no canto esquerdo
- `larissa-retrato.jpg` — retrato pequeno para o bloco LarissaNote

**Páginas do quiz (média prioridade):**
- `atencao.jpg` — página 2
- `contraste.jpg` — pergunta 8
- `roupa-escura.jpg` — pergunta 9
- `roupa-clara.jpg` — pergunta 10
- `tracos.jpg` — pergunta 11
- `cores-escuras.jpg` — pergunta 12
- `cores-por-tom.jpg` — pergunta 13
- `impacto-visual.jpg` — pergunta 14

**Resultados (baixa prioridade — podem ficar só com color strip no MVP):**
- 9 imagens hero opcionais, uma por resultado.

### 11.2 Estratégia MVP

- Criar `public/images/` vazio.
- Onde a imagem ainda não existe, renderizar **placeholder elegante** (bloco
  `--color-surface` com pequena legenda "imagem: descrição").
- Tudo via `next/image` para otimização e layout shift zero.
- A imagem hero da home é a primeira a conseguir/produzir — é o ativo mais visível.

---

## 12. Estrutura de Arquivos Final

```
teste-de-cartela/
├── docs/
│   ├── identidade-visual.md
│   ├── paginas.md
│   └── plan.md                     ← ESTE DOCUMENTO
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx                    # Home (SplitHero + LarissaNote)
│   ├── instrucoes/page.tsx
│   ├── quiz/
│   │   ├── layout.tsx
│   │   ├── [step]/page.tsx
│   │   ├── transicao/page.tsx
│   │   └── finalizando/page.tsx
│   └── resultado/[tipo]/page.tsx
├── components/
│   ├── Button.tsx
│   ├── SplitHero.tsx
│   ├── HeroSection.tsx
│   ├── PageSection.tsx
│   ├── Card.tsx
│   ├── BenefitList.tsx
│   ├── ColorSwatchStrip.tsx
│   ├── QuestionCard.tsx
│   ├── OptionButton.tsx
│   ├── ProgressBar.tsx
│   ├── ResultBlock.tsx
│   └── LarissaNote.tsx
├── context/
│   └── QuizContext.tsx
├── data/
│   ├── pages.ts
│   ├── questions.ts
│   └── results.ts
├── lib/
│   └── quiz-logic.ts
├── public/
│   └── images/
├── tests/
│   └── quiz-logic.test.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 13. Passos de Implementação

1. ~~**Bootstrap**~~ ✅ Next.js 16.2.3 + Tailwind v4 + TypeScript
2. ~~**Tokens + fontes**~~ ✅ Tailwind v4 `@theme inline` em globals.css; Playfair Display + Inter via next/font/google em layout.tsx
3. ~~**Componentes base**~~ ✅ Button, SplitHero, HeroSection, BenefitList, ColorSwatchStrip, OptionButton, QuestionCard, ProgressBar, LarissaNote (12 componentes)
4. ~~**Dados estáticos**~~ ✅ data/questions.ts (14 perguntas), data/results.ts (9 resultados), data/pages.ts (home, instrucoes, transicao, finalizando)
5. ~~**Página 1**~~ ✅ app/page.tsx (SplitHero + LarissaNote)
6. ~~**Página 2**~~ ✅ app/instrucoes/page.tsx
7. ~~**QuizProvider + layout**~~ ✅ context/QuizContext.tsx + app/quiz/layout.tsx
8. ~~**Rota dinâmica quiz**~~ ✅ app/quiz/[step]/page.tsx
9. ~~**Página de transição**~~ ✅ app/quiz/transicao/page.tsx
10. ~~**Página finalizando**~~ ✅ app/quiz/finalizando/page.tsx
11. ~~**Rota resultado**~~ ✅ app/resultado/[tipo]/page.tsx com generateStaticParams (9 slugs)
12. **Testes unitários** — pendente
13. **Responsividade** — pendente (verificação visual)
14. **Deploy Vercel** — pendente

**Build status**: ✅ Compilação limpa (0 erros TypeScript, 16 rotas geradas)

---

## 14. Verificação / Testes

### 14.1 Testes unitários (`lib/quiz-logic.ts`)

Casos obrigatórios:
- Todas A → `QUENTE + CLARA` → `clara-iluminada`
- Todas B → `FRIA + MEDIA` → `elegancia-suave`
- Todas C → `NEUTRA + PROFUNDA` → `profunda-intensa`
  - (temperatura: `neutra=7 ≥ 4` → NEUTRA; profundidade: `profunda=7` → PROFUNDA)
- **Regra de segurança**: 4×C + 3×A em temperatura → `NEUTRA`
- **Desempates temperatura**: cobrir cada um dos 3 casos
- **Desempates profundidade**: qualquer empate → `MEDIA` (testar 3 cenários)
- **Mapeamento 3×3**: 9 combinações explícitas retornam o slug correto

### 14.2 Teste manual do golden path

- [ ] `/` carrega com hero split, H1 com italic funcionando, foto à direita e
  benefícios + CTA + swatches à esquerda
- [ ] Em mobile (375px), o hero empilha corretamente e o CTA fica 100% clicável
- [ ] Clicar CTA leva a `/instrucoes`
- [ ] `/instrucoes` → CTA leva a `/quiz/1`
- [ ] Em cada pergunta: selecionar opção avança (automaticamente ou via CTA)
- [ ] Refresh no meio do quiz mantém respostas (localStorage)
- [ ] Após pergunta 7: vê `/quiz/transicao`
- [ ] Após pergunta 14: vê `/quiz/finalizando`
- [ ] CTA final leva ao slug correto (validar com 3 conjuntos de respostas diferentes)
- [ ] As 9 páginas de resultado renderizam todas as seções
- [ ] Contraste WCAG AA em todas as combinações fundo/texto
- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 90, Best Practices ≥ 90

### 14.3 Verificação visual no navegador

Rodar `npm run dev` e percorrer o fluxo completo pelo menos uma vez em
mobile (DevTools 375px) e desktop (1280px). Conferir:
- Gradiente do hero dissolve suavemente entre bordô e claro
- H1 tem italic aplicado somente na parte correta
- Botão dourado tem hover perceptível e o glow do `--shadow-cta`
- Alinhamento à esquerda (não centralizar blocos grandes)
- Respiro entre seções (≥ 24px)

---

## 15. Dúvidas em Aberto (confirmar antes/durante a implementação)

1. **Copy do Hero**: seguir a referência visual ("Descubra Sua *Cartela de Cores
   Ideal*") e mover a mensagem pessoal da Larissa para um bloco secundário
   (`LarissaNote`)? Ou manter 100% do texto de `paginas.md` página 1 no hero?
   — **Recomendação**: seguir a referência e reaproveitar a mensagem pessoal
   no bloco LarissaNote logo abaixo.
2. **Foto hero**: a Larissa vai fornecer a foto da modelo em vestido metálico?
   A cliente aparece na foto ou é uma modelo anônima representando o público?
3. **Props decorativos** (vaso/pampas grass): usar ou não? Adiciona personalidade
   mas aumenta peso visual. Podem ser adicionados em uma iteração posterior.
4. **Stack**: confirmar Next.js. Se preferir Astro/HTML puro, o plano se
   mantém conceitualmente.
5. **Imagens do quiz** (8 imagens para perguntas 8–14 + finalização): quem produz?
   MVP sobe com placeholders elegantes.
6. **Captura de e-mail** antes do resultado (monetização/CRM)? Fora do escopo
   atual, mas o fluxo suporta adicionar um step extra depois.
7. **Analytics**: Vercel Analytics (1-click) ou GA4?
8. **Compartilhamento do resultado**: adicionar Open Graph dinâmico por resultado?
   Trivial e recomendado.
9. **CTA pós-resultado**: a Larissa quer oferecer consultoria/produto pago?
   `ResultBlock` já prevê uma seção livre ao final.
10. **Domínio**: usar `teste-de-cartela.vercel.app` no MVP ou já conectar custom?

---

## 16. Arquivos críticos a serem criados (referência rápida)

- `teste-de-cartela/app/layout.tsx`
- `teste-de-cartela/app/globals.css`
- `teste-de-cartela/app/page.tsx` (home com SplitHero + LarissaNote)
- `teste-de-cartela/app/instrucoes/page.tsx`
- `teste-de-cartela/app/quiz/layout.tsx`
- `teste-de-cartela/app/quiz/[step]/page.tsx`
- `teste-de-cartela/app/quiz/transicao/page.tsx`
- `teste-de-cartela/app/quiz/finalizando/page.tsx`
- `teste-de-cartela/app/resultado/[tipo]/page.tsx`
- `teste-de-cartela/context/QuizContext.tsx`
- `teste-de-cartela/lib/quiz-logic.ts`
- `teste-de-cartela/data/pages.ts`
- `teste-de-cartela/data/questions.ts`
- `teste-de-cartela/data/results.ts`
- `teste-de-cartela/components/SplitHero.tsx` + `BenefitList.tsx` + `ColorSwatchStrip.tsx` + `LarissaNote.tsx` + `Button.tsx` + demais componentes
- `teste-de-cartela/tailwind.config.ts`
- `teste-de-cartela/tests/quiz-logic.test.ts`
