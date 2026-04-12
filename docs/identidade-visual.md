Orientações para Desenvolvedor



Identidade Visual 




🟣 1. COR PRINCIPAL (TOPO / HERO)
👉 Bordô profundo elegante
#2B0F14
Usar em:
faixa superior da página
fundo do header
áreas de destaque premium

🤍 2. FUNDO PRINCIPAL
👉 Branco frio sofisticado
#F7F7FA
Usar em:
fundo da página
áreas de leitura
blocos principais

🌸 3. FUNDO SECUNDÁRIO (blocos suaves)
👉 Nude rosé frio
#E9DADA
Usar em:
cards
seções leves
divisões visuais

🟫 4. TEXTO PRINCIPAL
👉 Marrom profundo elegante
#3A2E2A
Usar em:
títulos
textos principais

🤎 5. TEXTO SECUNDÁRIO
👉 Taupe acinzentado
#7A6A5F
Usar em:
subtítulos
descrições
textos menores

🟡 6. BOTÃO (CTA)
👉 Dourado sofisticado
#C6A77B

Hover (importante)
👉 versão mais escura:
#B89566

Texto do botão:
👉 branco quente:
#FFFFFF

🎯 APLICAÇÃO NA PÁGINA (EXATO)

🔝 TOPO (Hero)
fundo → #2B0F14
título → #F7F7FA
subtítulo → #E9DADA

📄 CORPO
fundo → #F7F7FA
textos → #3A2E2A
subtítulos → #7A6A5F

🧾 BLOCOS / CARDS
fundo → #E9DADA
texto → #3A2E2A

🔘 BOTÃO
fundo → #C6A77B
texto → branco
hover → #B89566

🧠 DETALHES QUE FAZEM DIFERENÇA

✔ NÃO usar preto puro
👉 use sempre #3A2E2A

✔ NÃO usar branco puro puro
👉 prefira #F7F7FA

✔ Espaçamento
👉 muito espaço em branco = mais elegância

✔ Sombras (se usar)
bem leve:
 rgba(0,0,0,0.05)

🏆 RESUMO RÁPIDO PRO DEV
Bordô → destaque / topo
Branco frio → base
Nude → suavização
Marrom → texto
Dourado → ação 

TIPOGRAFIA

🔤 TIPOGRAFIA — GUIA COMPLETO

🎯 CONCEITO
Você quer transmitir:
👉 elegância + feminilidade + autoridade
Então:
títulos → mais sofisticados (serifados)
textos → mais limpos (sem serifa)

🥇 1. FONTES
✨ TÍTULOS (principal)
👉 Playfair Display
 (alternativa: Cormorant Garamond)
Por quê:
elegante
feminino
editorial (nível revista de luxo)

✨ TEXTOS (corpo)
👉 Inter
 (alternativa: Open Sans)
Por quê:
extremamente legível
moderno
limpa o visual

🎯 COMBINAÇÃO FINAL
👉 Playfair Display + Inter

🔠 HIERARQUIA TIPOGRÁFICA

🟣 H1 — Título principal
Ex: “Descubra o que valoriza sua beleza”
Fonte: Playfair Display
Peso: 500 (Medium)
Tamanho: 40px
Line-height: 120%
Cor: branco (#F7F7FA) no fundo bordô

🟤 H2 — Subtítulo
Ex: “Saiba quais cores mais valorizam você”
Fonte: Inter
Peso: 400
Tamanho: 18px
Line-height: 150%
Cor: #E9DADA (se estiver no bordô)
 ou #7A6A5F (se estiver no fundo claro)

🟫 H3 — Seções / blocos
Ex: “Rápido e fácil”
Fonte: Inter
Peso: 500
Tamanho: 16px
Cor: #3A2E2A

📝 TEXTO NORMAL (parágrafo)
Fonte: Inter
Peso: 400
Tamanho: 15px – 16px
Line-height: 150%
Cor: #3A2E2A

🔍 TEXTO SECUNDÁRIO
Fonte: Inter
Peso: 400
Tamanho: 14px
Cor: #7A6A5F

🔘 BOTÃO (CTA)
Fonte: Inter
Peso: 600 (SemiBold)
Tamanho: 16px
Cor: branco (#FFFFFF)
👉 Texto curto e direto

📱 RESPONSIVO (IMPORTANTE)

Mobile
H1 → 28–32px
H2 → 16px
texto → 14–15px

⚠️ REGRAS IMPORTANTES (NÃO NEGOCIÁVEIS)

❌ Não usar:
muitas fontes
fontes decorativas
texto fino demais

✔ Sempre manter:
contraste alto
espaçamento confortável
poucas variações de peso

🧠 DETALHES DE SOFISTICAÇÃO

✔ Espaçamento entre letras (tracking)
Para títulos:
👉 leve aumento:
 letter-spacing: 0.5px

✔ Espaçamento vertical
👉 use respiro (muito importante)
entre título e subtítulo → 12–16px
entre blocos → 24–32px

✔ Alinhamento
👉 preferencial: esquerda
 👉 evite centralizar tudo

🏆 RESUMO FINAL PRO DEV
Título → Playfair Display
Corpo → Inter
H1 grande, elegante
texto simples e limpo
botão forte e direto 


🧠 ESTRUTURA GERAL DO QUIZ
Você tem dois blocos:
BLOCO 1 → TEMPERATURA (Perguntas 1–7)
BLOCO 2 → PROFUNDIDADE (Perguntas 8–14)

🟡 LÓGICA — TEMPERATURA
Inicializar contadores:
quente = 0
fria = 0
neutra = 0

Regras por pergunta (1 a 7)
Para TODAS as perguntas:
Se resposta == A → quente++
Se resposta == B → fria++
Se resposta == C → neutra++

Resultado final de temperatura
Se quente > fria E quente > neutra → resultado = QUENTE

Se fria > quente E fria > neutra → resultado = FRIA

Se neutra for maior OU houver empate → resultado = NEUTRA

⚠️ REGRA DE DESEMPATE (IMPORTANTE)
Se houver empate:
Caso 1:
quente == fria → resultado = NEUTRA
Caso 2:
quente == neutra → resultado = QUENTE
Caso 3:
fria == neutra → resultado = FRIA
👉 Isso evita excesso de “neutra” sem necessidade.

🔵 LÓGICA — PROFUNDIDADE
Inicializar:
clara = 0
media = 0
profunda = 0

Regras por pergunta (8 a 14)
Para TODAS:
Se resposta == A → clara++
Se resposta == B → media++
Se resposta == C → profunda++

Resultado final de profundidade
Se clara > media E clara > profunda → CLARA

Se profunda > clara E profunda > media → PROFUNDA

Se media for maior → MÉDIA

⚠️ REGRA DE DESEMPATE (ESSENCIAL)
Caso 1:
clara == profunda → resultado = MÉDIA
👉 porque isso indica equilíbrio

Caso 2:
clara == media → resultado = MÉDIA

Caso 3:
media == profunda → resultado = MÉDIA

👉 Ou seja:
🔥 QUALQUER EMPATE → MÉDIA

🎯 RESULTADO FINAL (COMBINAÇÃO)
Depois você cruza:
resultado_final = TEMPERATURA + PROFUNDIDADE

Exemplos:
QUENTE + CLARA → Clara Iluminada
FRIA + MÉDIA → Elegância Suave
NEUTRA + PROFUNDA → Profunda Intensa

🧠 MAPEAMENTO FINAL (IMPORTANTE PRO DEV)
QUENTE + CLARA → Clara Iluminada
FRIA + CLARA → Clara Delicada
NEUTRA + CLARA → Clara Equilibrada

QUENTE + MÉDIA → Harmonia Natural
FRIA + MÉDIA → Elegância Suave
NEUTRA + MÉDIA → Equilíbrio Sofisticado

QUENTE + PROFUNDA → Profunda Radiante
FRIA + PROFUNDA → Profunda Marcante
NEUTRA + PROFUNDA → Profunda Intensa

⚠️ DETALHE MUITO IMPORTANTE (QUALIDADE DO RESULTADO)
Regra de segurança:
Se neutra >= 4 (no bloco de temperatura):
👉 força resultado = NEUTRA

Por quê?
👉 evita erro quando a pessoa realmente não tem definição clara

🧠 OUTRA REGRA AVANÇADA (OPCIONAL, MAS MUITO BOA)
Se diferença entre dois resultados for pequena:
diferença ≤ 1 ponto
👉 você pode marcar como:
“tendência a X”
Ex:
👉 “Neutra com tendência ao quente”

