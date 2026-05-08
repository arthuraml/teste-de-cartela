export interface QuestionOption {
  id: string;
  label: string;
  image?: string;
  category?: "QUENTE" | "FRIA" | "NEUTRA";
  weight?: number;
  objectPosition?: string;
}

export interface Question {
  number: number;
  block: 1 | 2;
  emoji: string;
  title: string;
  text: string;
  options: QuestionOption[];
  illustrationImage?: string;
  weightMultiplier?: number;
}

export const questions: Question[] = [
  {
    number: 1,
    block: 1,
    emoji: "🌞",
    title: "Pergunta 1",
    text: "Quando você se expõe ao sol, sua pele costuma:",
    options: [
      { id: "A", label: "Bronzear com facilidade", image: "/images/q1-a.jpg", category: "QUENTE" },
      { id: "B", label: "Ficar vermelha ou queimar com facilidade", image: "/images/q1-b.jpg", category: "FRIA" },
      { id: "C", label: "Depende / acontece dos dois", image: "/images/q1-c.jpg", category: "NEUTRA" },
    ],
  },
  {
    number: 2,
    block: 1,
    emoji: "🖐️",
    title: "Pergunta 2",
    text: "Observe as veias do seu pulso. Qual opção mais se aproxima?",
    options: [
      { id: "A", label: "Veias com aparência esverdeada", image: "/images/q2-a.png", category: "QUENTE" },
      { id: "B", label: "Veias com aparência azulada ou arroxeada", image: "/images/q2-b.png", category: "FRIA" },
      { id: "C", label: "Não consigo identificar claramente / parece misto", image: "/images/q2-c.png", category: "NEUTRA" },
    ],
  },
  {
    number: 3,
    block: 1,
    emoji: "💍",
    title: "Pergunta 3",
    text: "Qual tipo de tom de jóia parece valorizar mais a sua pele?",
    options: [
      { id: "A", label: "Dourado", image: "/images/q3-a.png", category: "QUENTE", objectPosition: "center top" },
      { id: "B", label: "Prata", image: "/images/q3-b.jpg", category: "FRIA", objectPosition: "center top" },
      { id: "C", label: "Os dois ficam bem em mim", image: "/images/q3-c.jpg", category: "NEUTRA", objectPosition: "center top" },
    ],
  },
  {
    number: 4,
    block: 1,
    emoji: "🤍",
    title: "Pergunta 4",
    text: "Qual tom de branco parece valorizar mais o seu rosto?",
    options: [
      { id: "A", label: "Off-white / creme (mais quente, levemente amarelado)", image: "/images/q4-a.jpg", category: "QUENTE", objectPosition: "center top" },
      { id: "B", label: "Branco puro (mais frio, bem branco)", image: "/images/q4-b.jpg", category: "FRIA", objectPosition: "center top" },
      { id: "C", label: "Não percebo muita diferença", image: "/images/q4-c.jpg", category: "NEUTRA", objectPosition: "center top" },
    ],
  },
  {
    number: 5,
    block: 1,
    emoji: "💄",
    title: "Pergunta 5",
    text: "Quando você usa base de maquiagem, qual tipo costuma se adaptar melhor ao seu tom de pele?",
    options: [
      { id: "A", label: "Bases com fundo amarelado ou dourado", image: "/images/q5-a.png", category: "QUENTE" },
      { id: "B", label: "Bases com fundo rosado ou frio", image: "/images/q5-b.png", category: "FRIA" },
      { id: "C", label: "Bases neutras / nunca percebi diferença", image: "/images/q5-c.jpg", category: "NEUTRA" },
    ],
  },
  {
    number: 6,
    block: 1,
    emoji: "💋",
    title: "Pergunta 6",
    text: "A cor natural dos seus lábios tende mais para:",
    options: [
      { id: "A", label: "Tons mais quentes (pêssego, coral, levemente alaranjado)", image: "/images/q6-a.jpg", category: "QUENTE" },
      { id: "B", label: "Tons mais frios (rosado, arroxeado)", image: "/images/q6-b.jpg", category: "FRIA" },
      { id: "C", label: "Difícil identificar / parece neutro", image: "/images/q6-c.jpg", category: "NEUTRA" },
    ],
  },
  {
    number: 7,
    block: 1,
    emoji: "🌈",
    title: "Pergunta 7",
    text: "Pensando nas cores que você já usou, quais parecem te valorizar mais naturalmente?",
    options: [
      { id: "A", label: "Tons mais quentes (bege, dourado, terracota, verde oliva)", image: "/images/q7-a.jpg", category: "QUENTE" },
      { id: "B", label: "Tons mais frios (cinza, azul acinzentado, rosa frio, vinho)", image: "/images/q7-b.jpg", category: "FRIA" },
      { id: "C", label: "Sinto que vários tons funcionam", image: "/images/q7-c.png", category: "NEUTRA" },
    ],
  },
  {
    number: 8,
    block: 1,
    emoji: "🟡",
    title: "Pergunta 8",
    text: "Na luz natural, qual desses reflexos aparece com mais frequência no seu cabelo natural?",
    options: [
      { id: "A", label: "Percebo reflexos dourados, acobreados ou levemente avermelhados", image: "/images/q8-a.jpg", category: "QUENTE" },
      { id: "B", label: "Percebo reflexos acinzentados, mais opacos ou puxados para o frio", image: "/images/q8-b.jpg", category: "FRIA" },
      { id: "C", label: "Não percebo um reflexo claro — nem dourado nem acinzentado, parece equilibrado", image: "/images/q8-c.jpg", category: "NEUTRA" },
    ],
  },
  {
    number: 9,
    block: 2,
    emoji: "🔹",
    title: "Pergunta 9",
    text: "Qual é a cor natural do seu cabelo? (Considere a cor da raiz, mesmo que hoje esteja pintado ou grisalho)",
    illustrationImage: "/images/q9-illustration.jpg",
    weightMultiplier: 4,
    options: [
      { id: "A", label: "Loiro claro / loiro médio", weight: 0 },
      { id: "B", label: "Loiro escuro / ruivo", weight: 1 },
      { id: "C", label: "Castanho claro", weight: 2 },
      { id: "D", label: "Castanho escuro", weight: 3 },
      { id: "E", label: "Preto", weight: 4 },
    ],
  },
  {
    number: 10,
    block: 2,
    emoji: "🔹",
    title: "Pergunta 10",
    text: "Qual é a cor natural dos seus olhos?",
    illustrationImage: "/images/q10-illustration.jpg",
    weightMultiplier: 4,
    options: [
      { id: "A", label: "Muito claro (azul claro ou verde claro)", weight: 0 },
      { id: "B", label: "Claro (azul médio ou verde médio)", weight: 1 },
      { id: "C", label: "Médio (azul escuro, verde escuro, mel ou castanho claro)", weight: 2 },
      { id: "D", label: "Escuro (castanho)", weight: 3 },
      { id: "E", label: "Quase preto (castanho bem escuro - quase preto)", weight: 4 },
    ],
  },
  {
    number: 11,
    block: 2,
    emoji: "🔹",
    title: "Pergunta 11",
    text: "Qual é a tonalidade natural das suas sobrancelhas?",
    illustrationImage: "/images/q11-illustration.jpg",
    weightMultiplier: 1,
    options: [
      { id: "A", label: "Claras (loiro claro, loiro médio, ruivo)", weight: 0 },
      { id: "B", label: "Médias (castanho claro, castanho escuro)", weight: 1 },
      { id: "C", label: "Escuras (preto)", weight: 2 },
    ],
  },
];
