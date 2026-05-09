# Plano de Implementação — Ajustes Teste de Cartela

> Arquivo de execução e tracking dos devs. Marcar `- [ ]` → `- [x]` conforme avançar.
> Stack: **Next.js 15 App Router + TypeScript + Tailwind**.
> **Não tocar**: `lib/token.ts`, `app/api/quiz/complete/route.ts`, `data/results.ts`, `app/resultado/[tipo]/*`.

---

## Status da implementação — 2026-04-28

### ✅ Completos (código)
- **Refator de tipos**: `Question`/`QuestionOption` reescritos em `data/questions.ts` com `block`, `category`, `weight`, `weightMultiplier`, `objectPosition`, `illustrationImage`.
- **11 perguntas reescritas**: Q1–Q7 com `category`, **Q8 nova** (reflexos cabelo, bloco 1), **Q9** (cabelo, 5 opc), **Q10** (olhos, 5 opc), **Q11** (sobrancelhas, 3 opc). Q12–Q14 antigas removidas.
- **`lib/quiz-logic.ts`**: `Answer = string`, `computeTemperature` com regra de dominância, `computeDepth` com fórmula ponderada `(cabelo × 4) + (olhos × 4) + (sobr × 1)`. RESULT_MAP 3×3 inalterado.
- **Bump `STORAGE_KEY` v1→v2** em `context/QuizContext.tsx`.
- **`OptionButton` / `QuestionCard`** adaptados para iterar `QuestionOption[]` e renderizar `illustrationImage` + `objectPosition`.
- **Roteamento** (`app/quiz/[step]/page.tsx`): `total=11`, step=8 → `/quiz/transicao`, step=11 → `/quiz/finalizando`. `transicao` aponta para `/quiz/9`.
- **Home**: novo título; CTA destacado (`text-lg px-10 py-4 animate-pulse-cta`); keyframe `pulse-cta` adicionado em `globals.css`; `PurchaseCta` aceita `className`.
- **Q3/Q4**: `objectPosition: "center top"` aplicado nas 6 opções (refinar valores se necessário ao testar visualmente).
- **Imagens órfãs removidas**: `q9-*`, `q10-*`, `q11-*`, `q12-*`, `q13-*`, `q14-*`.
- **Verificação**: `tsc --noEmit` exit 0 ✓ ; **17 casos de teste de pontuação passaram** (regra de dominância + fórmula + boundaries + 4 combinatórias de slug).

### ✅ Imagens — todas substituídas e adicionadas (2026-04-15)
Convertidas de HEIC/PNG via `Pillow` e salvas em `public/images/`:

| Arquivo | Status | Origem |
|---|---|---|
| `larissa-hero.jpg` | ✅ substituído | `Imagens/P1IMAGEM` (HEIC→JPEG) |
| `q2-b.png` | ✅ substituído | `Imagens/2BV2` (HEIC→PNG) |
| `q7-a.jpg`, `q7-b.jpg`, `q7-c.png` | ✅ substituídos | `Imagens/7AV2.png`, `7BV2.png`, `7CV2.png` |
| `q8-a.jpg`, `q8-b.jpg`, `q8-c.jpg` | ✅ substituídos | `Imagens/8AV2.png`, `8BV2.png`, `8CV2.png` |
| `q9-illustration.jpg` | ✅ novo | `Imagens/9IMAGEM` (HEIC→JPEG) |
| `q10-illustration.jpg` | ✅ novo | `Imagens/10IMAGEM` (HEIC→JPEG) |
| `q11-illustration.jpg` | ✅ novo | `Imagens/11IMAGEM` (HEIC→JPEG) |

Commit `74ed9bb` + deploy produção concluídos.

### 🟡 Pendentes — confirmação Larissa
- Discrepâncias Q9/Q11 (peso vs. opções — recomendado seguir as opções listadas, com weights 0–4 e 0–2; mas a tabela do briefing original tem agrupamentos diferentes).

### 🟡 Pendentes — verificação manual em browser
- Smoke tests (6.1), responsividade (6.5), persistência (6.6) — exigem dev server.

### Fora do escopo desta entrega
- **Vídeo de inspiração da home** (instrução marcada como "se for possível e for rápido"): não consigo acessar Drive nem processar vídeo. Se a Larissa quiser ajuste de layout, descrever em texto o que mudar.

---

## Contexto

A Larissa enviou um briefing detalhado de ajustes ao quiz "Teste de Cartela". As mudanças combinam:

1. **Visuais**: novo título da home, nova imagem hero, CTA mais chamativo, novas/substituídas imagens em Q2, Q3, Q4, Q7, Q8.
2. **Estruturais**: o quiz passa de **14 → 11 perguntas**. Q8 atual é **substituída** por uma nova pergunta de reflexos do cabelo (parte do Bloco 1 — temperatura). Q9–Q14 atuais são **substituídas** por 3 novas perguntas (cabelo, olhos, sobrancelhas) com **número variável de opções** (3 ou 5).
3. **Lógicas**: o cálculo da temperatura ganha **regra de dominância** (≥ 2 de diferença, senão NEUTRO). O cálculo de profundidade vira uma **fórmula ponderada** sobre Q9/Q10/Q11.
4. **Comerciais**: a Página 1 passa a funcionar também como **página de vendas**.

**Resultado final** (mapeamento 3×3 → 9 slugs em `data/results.ts`) **não muda**.

---

## 0. Visão geral

| Área | Antes | Depois |
|---|---|---|
| Total perguntas | 14 | **11** |
| Bloco 1 — Temperatura | Q1–Q7 (A/B/C) | **Q1–Q8 (A/B/C)** + regra de dominância |
| Bloco 2 — Profundidade | Q8–Q14 (A/B/C, 7 perguntas) | **Q9–Q11 (3 ou 5 opções, 3 perguntas)** + fórmula ponderada |
| `Question.options` | `{A,B,C}` fixo | **Array `QuestionOption[]`** (3 ou 5 itens) |
| `Answer` type | `"A" \| "B" \| "C"` | **`string`** (id da opção) |
| Roteamento | `/quiz/7 → transicao → /quiz/8`; `/quiz/14 → finalizando` | **`/quiz/8 → transicao → /quiz/9`; `/quiz/11 → finalizando`** |
| `STORAGE_KEY` | `teste-cartela-quiz-v1` | **`teste-cartela-quiz-v2`** (invalida progresso antigo) |
| Hero/Home | Título atual + `larissa-hero.jpg` | **Novo título + nova imagem + CTA destacado + seções de vendas** |

---

## 1. Refator de tipos (PRÉ-REQUISITO — bloqueia todo o resto)

### 1.1 — `data/questions.ts` — interface generalizada

**Antes**:
```ts
export interface Question {
  number: number;
  emoji: string;
  title: string;
  text: string;
  options: { A: string; B: string; C: string };
  optionImages?: { A: string; B: string; C: string };
  image?: string;
}
```

**Depois (recomendado — array tipado)**:
```ts
export interface QuestionOption {
  id: string;                 // "A" | "B" | "C" | "D" | "E"
  label: string;
  image?: string;             // imagem por opção (Bloco 1)
  category?: "QUENTE" | "FRIA" | "NEUTRA";  // Bloco 1
  weight?: number;            // Bloco 2 (0..4 / 0..2)
  objectPosition?: string;    // p/ ajuste de enquadramento (Q3/Q4)
}

export interface Question {
  number: number;
  block: 1 | 2;
  emoji: string;
  title: string;
  text: string;
  options: QuestionOption[];
  illustrationImage?: string;  // imagem ÚNICA ilustrativa (Q9/Q10/Q11)
}
```

- [x] Atualizar interfaces.
- [x] Migrar Q1–Q7 (cada `A`→`category: "QUENTE"`, `B`→`"FRIA"`, `C`→`"NEUTRA"`).
- [x] Adicionar **Q8 nova** (reflexos do cabelo) com 3 opções, `block: 1`.
- [x] Substituir **Q9 nova** (cabelo natural, 5 opções, `block: 2`, pesos 0–4).
- [x] Substituir **Q10 nova** (olhos, 5 opções, `block: 2`, pesos 0–4).
- [x] Substituir **Q11 nova** (sobrancelhas, 3 opções, `block: 2`, pesos 0–2).
- [x] **Remover** Q12/Q13/Q14 antigas.

### 1.2 — `lib/quiz-logic.ts` — reescrever pontuação

- [x] `Answer` → `export type Answer = string;`
- [x] `computeTemperature` (Bloco 1, 8 respostas, regra de dominância):

```ts
// pseudocódigo
function computeTemperature(b1: { question: Question; answerId: string }[]): Temperature {
  const counts: Record<Temperature, number> = { QUENTE: 0, FRIA: 0, NEUTRA: 0 };
  for (const { question, answerId } of b1) {
    const opt = question.options.find((o) => o.id === answerId);
    if (opt?.category) counts[opt.category]++;
  }
  const sorted = (Object.entries(counts) as [Temperature, number][]).sort(
    (a, b) => b[1] - a[1],
  );
  const [topCat, topCount] = sorted[0];
  const [, secondCount] = sorted[1];
  if (topCount - secondCount >= 2) return topCat;
  return "NEUTRA";
}
```

- [x] `computeDepth` (Bloco 2, fórmula ponderada):

```ts
const cabelo = q9opt.weight ?? 0;
const olhos  = q10opt.weight ?? 0;
const sobr   = q11opt.weight ?? 0;
const total = cabelo * 4 + olhos * 4 + sobr * 1;
if (total <= 10) return "CLARA";
if (total <= 24) return "MEDIA";
return "PROFUNDA"; // 25..34
```

- [x] `computeResult(answers)` itera `questions.ts`, agrupa por `block`, chama as duas funções, retorna slug. **`RESULT_MAP` (3×3) NÃO muda**.

### 1.3 — `context/QuizContext.tsx`

- [x] **Bump** `STORAGE_KEY = "teste-cartela-quiz-v1"` → `"teste-cartela-quiz-v2"`.

### 1.4 — `components/QuestionCard.tsx`

- [x] Remover hard-code `(["A","B","C"] as const).map(...)`.
- [x] Iterar `question.options` (array).
- [x] Renderizar `question.illustrationImage` (imagem grande única) acima das opções, quando existir.

### 1.5 — `components/OptionButton.tsx`

- [x] `option: QuestionOption` (recebe objeto inteiro).
- [x] `label` no badge: `option.id` (A/B/C/D/E continua).
- [x] Aplicar `style={{ objectPosition: option.objectPosition ?? "center" }}` na `<Image>`.

### 1.6 — `app/quiz/[step]/page.tsx`

- [x] `total = 11`.
- [x] Roteamento:
  - `step === 8` → `router.push("/quiz/transicao")`
  - `step === 11` → `router.push("/quiz/finalizando")`
  - else → `step + 1`
- [x] `<ProgressBar current={step} total={11} />`.

### 1.7 — `app/quiz/transicao/page.tsx`

- [x] `<Button href="/quiz/9">…</Button>` (era `/quiz/8`).

### 1.8 — `app/quiz/finalizando/page.tsx`

- [x] Sem mudança estrutural. Só validar que `computeResult` lida com novos ids.

---

## 2. Mudanças por página

### Página 1 — Home (`/`)

Arquivos: `data/pages.ts`, `components/SplitHero.tsx`, `app/page.tsx`, `public/images/larissa-hero.jpg`.

#### 2.1 Conteúdo
- [x] `homeHero.title` → `"VOCÊ ESTÁ PRESTES A DESCOBRIR AS CORES QUE TE DEIXAM MAIS BONITA…"`
- [ ] **Confirmar com Larissa**: manter as `paragraphs` atuais ou reescrever?

#### 2.2 Imagem hero
- [ ] Substituir `public/images/larissa-hero.jpg` pela nova imagem (Drive). Mesmo nome de arquivo → zero mudança em `homeHero.heroImage`.

#### 2.3 CTA "mais chamativo"
- [x] Variação de estilo só na Home (sem afetar outros botões):
  - tamanho maior (`text-lg px-10 py-4`) ✓
  - micro-animação `animate-pulse-cta` (keyframe `pulse-cta` em `globals.css`) ✓
  - `PurchaseCta` agora aceita prop `className` para receber a mesma variação ✓
- [x] Aplicar via `className` direto no `<Button>` e `<PurchaseCta>` do `SplitHero`.

#### 2.4 Página como landing de vendas
> "Vamos usar essa página como página de vendas também."

A página atual já cumpre essa função: usuários **sem sessão** veem o `<PurchaseCta>` que abre o modal de compra com preço R$ 27,90. Usuários **com sessão** veem o link `/instrucoes`. **Nenhum componente novo necessário** — a afirmação descreve o uso, não pede seções extras.

#### 2.5 [OPCIONAL] Inspiração de layout (vídeo Drive)
- [ ] Larissa: descrever em texto o que mudar de layout (não consigo processar o vídeo).

---

### Página 2 — Instruções (`/instrucoes`) — SEM ALTERAÇÃO
- [x] Nada a fazer.

---

### Páginas 3–9 — Q1–Q7 (Bloco 1, ajustes pontuais)

| Página | # | Pergunta | Ação |
|---|---|---|---|
| 3 | Q1 | sol/bronzeado | OK |
| 4 | Q2 | veias | **Substituir `q2-b.png`** (Drive) |
| 5 | Q3 | jóias | **Ajustar enquadramento** (rosto cortado no topo) |
| 6 | Q4 | brancos | **Ajustar enquadramento** |
| 7 | Q5 | base | OK |
| 8 | Q6 | lábios | OK |
| 9 | Q7 | cores valorizam | **Substituir as 3 imagens** `q7-a`, `q7-b`, `q7-c` (Drive) |

#### Estratégia de "ajustar enquadramento" Q3/Q4

- [x] **Opção A — `objectPosition` em runtime** (recomendado):
  - Adicionar `objectPosition?: string` em `QuestionOption` ✓ (em 1.1)
  - Aplicar em Q3/Q4: defaults `"center top"` aplicados nas 6 opções. **Refinar valores** se ao testar visualmente o rosto ainda ficar cortado.
- [ ] **Opção B — recortar imagens** (fallback): só se A não resolver.

---

### Página 10 — Q8 NOVA (reflexos do cabelo, Bloco 1)

> Substitui Q8 atual (contraste pele/cabelo). Faz parte do Bloco 1 (temperatura).

- [x] Adicionar em `data/questions.ts`:
```ts
{
  number: 8, block: 1,
  emoji: "🟡",
  title: "Pergunta 8",
  text: "Na luz natural, qual desses reflexos aparece com mais frequência no seu cabelo natural?",
  options: [
    { id: "A", label: "Percebo reflexos dourados, acobreados ou levemente avermelhados", image: "/images/q8-a.jpg", category: "QUENTE" },
    { id: "B", label: "Percebo reflexos acinzentados, mais opacos ou puxados para o frio", image: "/images/q8-b.jpg", category: "FRIA" },
    { id: "C", label: "Não percebo um reflexo claro — nem dourado nem acinzentado, parece equilibrado", image: "/images/q8-c.jpg", category: "NEUTRA" },
  ],
}
```
- [ ] **Substituir** `public/images/q8-a.jpg`, `q8-b.jpg`, `q8-c.jpg` pelos novos do Drive (mesmos nomes).

---

### Página 11 — Transição (`/quiz/transicao`) — MANTER

- [x] Trocar **apenas** o href: `<Button href="/quiz/9">` (era `/quiz/8`).

---

### Página 12 — Q9 NOVA (Cabelo, 5 opções, Bloco 2)

- [x] Adicionar em `data/questions.ts`:
```ts
{
  number: 9, block: 2,
  emoji: "🔹",
  title: "Pergunta 9",
  text: "Qual é a cor natural do seu cabelo? (Considere a cor da raiz, mesmo que hoje esteja pintado ou grisalho)",
  illustrationImage: "/images/q9-illustration.jpg",
  options: [
    { id: "A", label: "Loiro claro / loiro médio", weight: 0 },
    { id: "B", label: "Loiro escuro / ruivo",      weight: 1 },
    { id: "C", label: "Castanho claro",            weight: 2 },
    { id: "D", label: "Castanho escuro",           weight: 3 },
    { id: "E", label: "Preto",                     weight: 4 },
  ],
}
```
- [ ] Asset: `public/images/q9-illustration.jpg` (escolher 1 imagem da pasta Drive ou montar grid).
- [x] **Apagar** `q9-a.jpg`, `q9-b.jpg`, `q9-c.jpg` (não usados mais).

---

### Página 13 — Q10 NOVA (Olhos, 5 opções, Bloco 2)

- [x] Adicionar em `data/questions.ts`:
```ts
{
  number: 10, block: 2,
  emoji: "🔹",
  title: "Pergunta 10",
  text: "Qual é a cor natural dos seus olhos?",
  illustrationImage: "/images/q10-illustration.jpg",
  options: [
    { id: "A", label: "Muito claro (azul claro ou verde claro)",                  weight: 0 },
    { id: "B", label: "Claro (azul médio ou verde médio)",                        weight: 1 },
    { id: "C", label: "Médio (azul escuro, verde escuro, mel ou castanho claro)", weight: 2 },
    { id: "D", label: "Escuro (castanho)",                                        weight: 3 },
    { id: "E", label: "Quase preto (castanho bem escuro - quase preto)",          weight: 4 },
  ],
}
```
- [ ] Asset: `public/images/q10-illustration.jpg`.
- [x] **Apagar** `q10-a.png`, `q10-b.jpg`, `q10-c.png`.

---

### Página 14 — Q11 NOVA (Sobrancelhas, 3 opções, Bloco 2)

- [x] Adicionar em `data/questions.ts`:
```ts
{
  number: 11, block: 2,
  emoji: "🔹",
  title: "Pergunta 11",
  text: "Qual é a tonalidade natural das suas sobrancelhas?",
  illustrationImage: "/images/q11-illustration.jpg",
  options: [
    { id: "A", label: "Claras (loiro claro, loiro médio, ruivo)", weight: 0 },
    { id: "B", label: "Médias (castanho claro, castanho escuro)", weight: 1 },
    { id: "C", label: "Escuras (preto)",                          weight: 2 },
  ],
}
```
- [ ] Asset: `public/images/q11-illustration.jpg`.
- [x] **Apagar** `q11-a.png`, `q11-b.png`, `q11-c.png`.

---

### Página 15 — Pré-resultado (`/quiz/finalizando`) — MANTER

- [x] Sem mudança visual. `computeResult(answers)` continua válido (RESULT_MAP 3×3 inalterado).

---

## 3. Inventário de assets `public/images/`

### Substituir (mesmo nome de arquivo)
- [ ] `larissa-hero.jpg` → nova hero (Drive)
- [ ] `q2-b.png` → Drive
- [ ] `q7-a.jpg` → Drive
- [ ] `q7-b.jpg` → Drive
- [ ] `q7-c.png` → Drive (manter `.png` ou unificar para `.jpg`? Atualizar `data/questions.ts` se mudar)
- [ ] `q8-a.jpg` → nova Q8 reflexos cabelo (Drive)
- [ ] `q8-b.jpg` → idem
- [ ] `q8-c.jpg` → idem

### Adicionar
- [ ] `q9-illustration.jpg`
- [ ] `q10-illustration.jpg`
- [ ] `q11-illustration.jpg`

### Remover (órfãos)
- [x] `q9-a.jpg`, `q9-b.jpg`, `q9-c.jpg`
- [x] `q10-a.png`, `q10-b.jpg`, `q10-c.png`
- [x] `q11-a.png`, `q11-b.png`, `q11-c.png`
- [x] `q12-a.jpg`, `q12-b.jpg`, `q12-c.jpg`
- [x] `q13-a.jpg`, `q13-b.jpg`, `q13-c.jpg`
- [x] `q14-a.png`, `q14-b.jpg`, `q14-c.jpg`

### Manter
- [ ] `larissa-transicao.jpg`, `larissa-finalizando.jpg`
- [ ] `q1-*`, `q2-a.png`, `q2-c.png`
- [ ] `q3-*` e `q4-*` (com `objectPosition` ajustado)
- [ ] `q5-*`, `q6-*`

---

## 4. Sub-tarefas (atribuíveis em paralelo)

### Sub-tarefa A — Refator de tipos (BLOQUEIA TUDO)
- [x] 1.1 Interface `Question` / `QuestionOption`
- [x] 1.4 `QuestionCard` itera array
- [x] 1.5 `OptionButton` aceita `QuestionOption` + `objectPosition`

### Sub-tarefa B — Lógica de pontuação (depende de A)
- [x] 1.2 `lib/quiz-logic.ts` reescrito
- [x] 1.3 `STORAGE_KEY` v2

### Sub-tarefa C — Conteúdo das perguntas (depende de A)
- [x] Migração Q1–Q7 (adiciona `category`)
- [x] Q8 nova (reflexos)
- [x] Q9, Q10, Q11 novas
- [x] Remoção Q12–Q14

### Sub-tarefa D — Roteamento (depende de A)
- [x] 1.6 `app/quiz/[step]/page.tsx` total=11 + roteamento
- [x] 1.7 `transicao` href `/quiz/9`

### Sub-tarefa E — Página inicial (paralela)
- [x] Título novo
- [x] CTA destacado
- [ ] [OPC] inspiração layout (Larissa descrever em texto)

### Sub-tarefa F — Assets (paralela)
- [ ] Substituir imagens flagged (aguardando Drive)
- [ ] Adicionar 3 ilustrações Bloco 2 (aguardando Drive)
- [x] Apagar imagens órfãs

### Sub-tarefa G — Enquadramento Q3/Q4 (paralela)
- [x] Aplicar `objectPosition` em Q3 e Q4 nas opções (default `"center top"` — refinar valores em testes visuais)

---

## 5. Pendências para confirmação com a Larissa

- [ ] **Q9 — pesos vs opções**: o briefing tem 5 opções, mas a tabela de pesos mistura "Loiro claro→0, Loiro médio/escuro/ruivo→1". **Recomendado**: seguir as 5 opções listadas (pesos 0–4). Confirmar.
- [ ] **Q11 — castanho escuro**: opção lista "castanho escuro" como **Médias** (peso 1), mas a tabela de pesos do briefing coloca em **Escuras** (peso 2). **Recomendado**: seguir a opção (Médias = peso 1). Confirmar.
- [ ] **Range PROFUNDA**: máximo real possível com a fórmula é **34** (briefing diz 25–36; cobertura ok, só registrar).
- [ ] **`homeHero.paragraphs`**: manter os 4 parágrafos atuais ou reescrever para tom mais comercial?
- [ ] **Imagem ilustrativa Q9**: a pasta Drive tem várias imagens — usar uma só, ou montar grid? **Recomendado**: grid único (`q9-illustration.jpg`).
- [ ] **`q7-c.png`**: substituir mantendo `.png` ou unificar para `.jpg`?

---

## 6. Verificação end-to-end

### 6.1 Smoke tests
- [ ] Home renderiza com novo título e nova hero.
- [ ] CTA `Quero conhecer minhas cores` → `/instrucoes` (com sessão) ou modal de compra (sem sessão).
- [ ] `/instrucoes` → `/quiz/1`.
- [ ] Sequência `/quiz/1` … `/quiz/8` → após Q8 vai para `/quiz/transicao`.
- [ ] `/quiz/transicao` → `/quiz/9`.
- [ ] `/quiz/9` (5 opções), `/quiz/10` (5 opções), `/quiz/11` (3 opções).
- [ ] Após Q11 → `/quiz/finalizando`.
- [ ] "Quero ver meu resultado" → POST `/api/quiz/complete` 200 → `/resultado/<slug>`.
- [ ] `ProgressBar`: "Pergunta X de 11" em todas as etapas.
- [ ] Reload no meio do quiz preserva respostas (localStorage v2).

### 6.2 Bloco 1 — regra de dominância (8 respostas) — verificado via sanity test
- [x] 5 quente / 2 frio / 1 neutro → **QUENTE** (5−2=3 ≥ 2)
- [x] 6 frio / 1 quente / 1 neutro → **FRIA**
- [x] 4 quente / 3 frio / 1 neutro → **NEUTRA** (diff=1 < 2)
- [x] 3 quente / 3 frio / 2 neutro → **NEUTRA** (empate)
- [x] 4 neutro / 2 quente / 2 frio → **NEUTRA** (top neutro, 4−2=2)
- [x] 8 quente → **QUENTE**

### 6.3 Bloco 2 — fórmula ponderada — verificado via sanity test
- [x] Cabelo (0) + Olhos (0) + Sobr (0) → **0** → **CLARA**
- [x] Cabelo (2) + Olhos (2) + Sobr (1) → 8+8+1=**17** → **MEDIA**
- [x] Cabelo (4) + Olhos (4) + Sobr (2) → 16+16+2=**34** → **PROFUNDA**
- [x] Boundary 10: 1+1+2 → 4+4+2=**10** → **CLARA**
- [x] Boundary 11: 1+2+0 → 4+8+0=**12** → **MEDIA**
- [x] Boundary 24: 3+3+0 → 12+12+0=**24** → **MEDIA**
- [x] Boundary 25: 3+3+1 → 12+12+1=**25** → **PROFUNDA**

### 6.4 Resultado final (combinatório) — verificado via sanity test
- [x] QUENTE × CLARA → `clara-iluminada`
- [x] QUENTE × PROFUNDA → `profunda-radiante`
- [x] FRIA × MEDIA → `elegancia-suave`
- [x] NEUTRA × PROFUNDA → `profunda-intensa`

### 6.5 UI / responsividade
- [ ] Q9 e Q10 (5 opções): scroll OK em mobile, sem layout shift.
- [ ] Q3 e Q4: rosto não é mais cortado no topo.
- [ ] Hero: novo título cabe sem overflow em viewport 360px.

### 6.6 Persistência
- [ ] `localStorage` chave `teste-cartela-quiz-v2` é gravada.
- [ ] Cookie `quiz_session` continua válido durante o quiz.
- [ ] Reset apaga a chave v2.

---

## 7. Sequência de execução sugerida

1. **Sub-tarefa A** (refator de tipos) → tudo continua compilando
2. **Sub-tarefa C** (conteúdo) → quiz roda com novas perguntas
3. **Sub-tarefa B** (lógica) → rodar 6.2 e 6.3
4. **Sub-tarefa D** (roteamento) → rodar 6.1
5. **Sub-tarefa F** (assets) → smoke visual
6. **Sub-tarefa G** (enquadramento) → ajuste fino Q3/Q4
7. **Sub-tarefa E** (home/vendas) → pode rodar em paralelo desde o passo 1
8. Bump `STORAGE_KEY` v2 (último, antes de deploy)
9. Verificação completa em preview
10. Deploy produção

---

## 8. Riscos

- **localStorage quebrado** → mitigado pelo bump v1→v2.
- **Sessão Redis** (`/lib/token.ts`) intocada — testar sessão criada antes do deploy.
- **404 de imagens** → manter exatamente as extensões referenciadas.
- **Slugs de resultado inalterados** → 9 slugs continuam servindo as mesmas páginas.

---

## Arquivos críticos

- `data/questions.ts`
- `lib/quiz-logic.ts`
- `context/QuizContext.tsx`
- `components/QuestionCard.tsx`
- `components/OptionButton.tsx`
- `app/quiz/[step]/page.tsx`
- `app/quiz/transicao/page.tsx`
- `data/pages.ts`
- `components/SplitHero.tsx`
- `components/PurchaseCta.tsx` *(adicionou prop `className`)*
- `app/globals.css` *(keyframe `pulse-cta`)*
- `public/images/*` (substituições/remoções)
