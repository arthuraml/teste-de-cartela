# Atualizações no Teste de Cartela

Oi Larissa! Aqui está um resumo de tudo que foi implementado nesta rodada de ajustes. Tudo já está no ar em **https://testedecartela.com.br** — é só você abrir e conferir.

---

## 1. Página inicial (home)

### Novo título
A frase principal mudou para:

> **"VOCÊ ESTÁ PRESTES A DESCOBRIR AS CORES QUE TE DEIXAM MAIS BONITA…"**

### Nova foto sua na home
A foto antiga foi substituída pela nova que você mandou.

### Botão mais chamativo
O botão **"Quero conhecer minhas cores"** ficou:
- **Maior** (mais espaçamento, fonte maior)
- **Pulsando** suavemente, com uma animação dourada que chama o olhar
- Mantém o mesmo comportamento de antes:
  - Quem **não tem o link de compra** → vê o pop-up oferecendo o teste por R$ 27,90
  - Quem **veio pelo link de compra** → vai direto para começar o teste

---

## 2. O quiz ficou mais enxuto

Antes eram **14 perguntas**. Agora são **11 perguntas**, divididas em dois blocos:

### 🌞 Bloco 1 — Temperatura (8 perguntas)
São as perguntas que descobrem se você é **quente, fria ou neutra**:

| # | Pergunta |
|---|---|
| 1 | Sol/bronzeado |
| 2 | Veias do pulso |
| 3 | Joias (dourado vs prata) |
| 4 | Branco que mais valoriza |
| 5 | Base de maquiagem |
| 6 | Cor natural dos lábios |
| 7 | Cores que mais valorizam |
| 8 | **NOVA** — Reflexos do cabelo na luz natural |

A pergunta **8 antiga** (sobre contraste pele/cabelo) foi **removida** e trocada por essa nova de reflexos.

### Pausa de transição

Depois da pergunta 8, aparece a tela de transição (com sua foto) explicando que agora vamos descobrir a profundidade.

### 🌑 Bloco 2 — Profundidade (3 perguntas)
São as 3 perguntas novas que descobrem se você é **clara, média ou profunda**:

| # | Pergunta | Opções |
|---|---|---|
| 9 | Cor natural do cabelo | Loiro claro / Loiro escuro / Castanho claro / Castanho escuro / Preto |
| 10 | Cor natural dos olhos | Muito claro / Claro / Médio / Escuro / Quase preto |
| 11 | Tonalidade das sobrancelhas | Claras / Médias / Escuras |

> **Importante**: as antigas perguntas 9 a 14 foram **removidas**. Agora são essas 3 novas, mais diretas.

---

## 3. Como o cálculo do resultado mudou

O sistema continua entregando os **mesmos 9 resultados** (Clara Iluminada, Clara Delicada, etc.), mas o cálculo ficou mais inteligente:

### Temperatura (Bloco 1)
Antes era simples maioria. Agora tem uma **regra de dominância**: para você ser classificada como QUENTE ou FRIA, precisa ter pelo menos **2 respostas a mais** desse tipo. Se for empate ou diferença pequena, classifica como NEUTRA.

**Exemplo**:
- 5 quentes vs 2 frias → **QUENTE** (diferença de 3, classifica como quente)
- 4 quentes vs 3 frias → **NEUTRA** (diferença de 1, fica neutra)

### Profundidade (Bloco 2)
O cálculo virou uma fórmula que dá **mais peso ao cabelo e aos olhos** (que são mais visíveis) e **menos peso às sobrancelhas**:

```
Pontuação = (cabelo × 4) + (olhos × 4) + (sobrancelhas × 1)
```

- Total **0 a 10** → **CLARA**
- Total **11 a 24** → **MÉDIA**
- Total **25 a 34** → **PROFUNDA**

---

## 4. Imagens novas em todo o site

Foram trocadas/adicionadas no total **11 imagens novas**:

- ✅ Foto da home
- ✅ Pergunta 2 (opção B — veias)
- ✅ Pergunta 7 (todas as 3 opções — cores que valorizam)
- ✅ Pergunta 8 (todas as 3 opções — reflexos do cabelo, perguntas novas)
- ✅ Ilustração das perguntas 9, 10 e 11

---

## 5. Outros pequenos ajustes

- **Perguntas 3 e 4**: o enquadramento das fotos foi corrigido para o rosto não ficar mais cortado no topo
- **Progresso do quiz**: agora mostra "Pergunta X de 11" em todas as etapas
- **Quem já estava no meio do teste antigo**: o progresso é resetado automaticamente (porque o quiz mudou de estrutura)

---

## ❓ Pendências — preciso da sua opinião

### 1. Texto da home
Hoje, abaixo do título novo, ainda estão os 4 parágrafos antigos com o texto pessoal seu. Você quer:
- (a) **Manter** os parágrafos atuais?
- (b) **Reescrever** para um tom mais comercial/vendas?
- (c) **Remover** e deixar só o título + botão?

### 2. Pesos das opções nas perguntas 9 e 11
Na pergunta **9 (cabelo)**, eu segui exatamente as 5 opções que você listou (Loiro claro = 0, Loiro escuro = 1, Castanho claro = 2, Castanho escuro = 3, Preto = 4).

Na pergunta **11 (sobrancelhas)**, segui também as 3 opções listadas (Claras = 0, Médias = 1 — que inclui castanho escuro, Escuras = 2 — só preto).

Mas no briefing original tinha uma tabela diferente que separava "castanho escuro" como **escuro** (peso 2) em vez de **médio** (peso 1). **Você confirma que está correto seguir as opções que listou** (e não a tabela)?

### 3. Imagem da pergunta 9
Você mandou várias imagens de cabelo na pasta. Eu usei **uma única imagem** como ilustração da pergunta. Se preferir um **grid com várias** (mostrando cada tom), me avise que eu monto.

---

## 🧪 Para você testar tudo

1. Acesse **https://testedecartela.com.br/admin**
2. Cole a chave de acesso (a mesma de antes)
3. Clique em **"Gerar Link"**
4. Copie o link e abra em uma **aba anônima**
5. Faça o teste do início ao fim, conferindo:
   - O título novo na home aparece corretamente
   - O botão dourado pulsa
   - Todas as imagens carregam (especialmente as novas das perguntas 7, 8, 9, 10, 11)
   - Em cada pergunta o número aparece como "X de 11"
   - O resultado no final é coerente

Se algo parecer estranho ou quiser ajustar, é só me avisar.

---

**Pronto pra produção** ✨ Tudo já está no ar em https://testedecartela.com.br
