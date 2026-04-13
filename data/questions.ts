export interface Question {
  number: number;
  emoji: string;
  title: string;
  text: string;
  options: { A: string; B: string; C: string };
  optionImages?: { A: string; B: string; C: string };
  image?: string;
}

export const questions: Question[] = [
  {
    number: 1,
    emoji: "🌞",
    title: "Pergunta 1",
    text: "Quando você se expõe ao sol, sua pele costuma:",
    options: {
      A: "Bronzear com facilidade",
      B: "Ficar vermelha ou queimar com facilidade",
      C: "Depende / acontece dos dois",
    },
    optionImages: {
      A: "/images/q1-a.jpg",
      B: "/images/q1-b.jpg",
      C: "/images/q1-c.jpg",
    },
  },
  {
    number: 2,
    emoji: "🖐️",
    title: "Pergunta 2",
    text: "Observe as veias do seu pulso. Qual opção mais se aproxima?",
    options: {
      A: "Veias com aparência esverdeada",
      B: "Veias com aparência azulada ou arroxeada",
      C: "Não consigo identificar claramente / parece misto",
    },
    optionImages: {
      A: "/images/q2-a.png",
      B: "/images/q2-b.png",
      C: "/images/q2-c.png",
    },
  },
  {
    number: 3,
    emoji: "💍",
    title: "Pergunta 3",
    text: "Qual tipo de tom de jóia parece valorizar mais a sua pele?",
    options: {
      A: "Dourado",
      B: "Prata",
      C: "Os dois ficam bem em mim",
    },
  },
  {
    number: 4,
    emoji: "🤍",
    title: "Pergunta 4",
    text: "Qual tom de branco parece valorizar mais o seu rosto?",
    options: {
      A: "Off-white / creme (mais quente, levemente amarelado)",
      B: "Branco puro (mais frio, bem branco)",
      C: "Não percebo muita diferença",
    },
  },
  {
    number: 5,
    emoji: "💄",
    title: "Pergunta 5",
    text: "Quando você usa base de maquiagem, qual tipo costuma se adaptar melhor ao seu tom de pele?",
    options: {
      A: "Bases com fundo amarelado ou dourado",
      B: "Bases com fundo rosado ou frio",
      C: "Bases neutras / nunca percebi diferença",
    },
  },
  {
    number: 6,
    emoji: "💋",
    title: "Pergunta 6",
    text: "A cor natural dos seus lábios tende mais para:",
    options: {
      A: "Tons mais quentes (pêssego, coral, levemente alaranjado)",
      B: "Tons mais frios (rosado, arroxeado)",
      C: "Difícil identificar / parece neutro",
    },
  },
  {
    number: 7,
    emoji: "🌈",
    title: "Pergunta 7",
    text: "Pensando nas cores que você já usou, quais parecem te valorizar mais naturalmente?",
    options: {
      A: "Tons mais quentes (bege, dourado, terracota, verde oliva)",
      B: "Tons mais frios (cinza, azul acinzentado, rosa frio, vinho)",
      C: "Sinto que vários tons funcionam",
    },
  },
  {
    number: 8,
    emoji: "⚖️",
    title: "Pergunta 8",
    text: "O contraste entre a sua pele e o seu cabelo natural é:",
    options: {
      A: "Baixo contraste — pele e cabelo têm tons próximos",
      B: "Contraste médio — existe diferença, mas não muito marcada",
      C: "Alto contraste — diferença bem visível (ex: pele clara + cabelo escuro)",
    },
    image: "contraste.jpg",
  },
  {
    number: 9,
    emoji: "🖤",
    title: "Pergunta 9",
    text: "Quando você usa roupas escuras (como preto ou marinho), o efeito no seu rosto costuma ser:",
    options: {
      A: "Fica pesado, endurece ou evidencia marcas",
      B: "Fica equilibrado",
      C: "Me valoriza e deixa meus traços mais definidos",
    },
    image: "roupa-escura.jpg",
  },
  {
    number: 10,
    emoji: "🤍",
    title: "Pergunta 10",
    text: "Quando você usa roupas muito claras (como branco ou azul bebê), o efeito costuma ser:",
    options: {
      A: "Me ilumina e valoriza bastante",
      B: "Fica equilibrado",
      C: "Me deixa apagada ou sem definição",
    },
    image: "roupa-clara.jpg",
  },
  {
    number: 11,
    emoji: "👀",
    title: "Pergunta 11",
    text: "Em fotos sem maquiagem, seus traços (olhos, boca, sobrancelha) parecem:",
    options: {
      A: "Mais suaves e pouco contrastantes",
      B: "Moderadamente definidos",
      C: "Bem definidos e marcantes",
    },
    image: "tracos.jpg",
  },
  {
    number: 12,
    emoji: "🎨",
    title: "Pergunta 12",
    text: "Quando você usa cores escuras, o que acontece?",
    options: {
      A: "A cor chama mais atenção que eu",
      B: "Fica equilibrado",
      C: "Eu sustento bem a cor",
    },
    image: "cores-escuras.jpg",
  },
  {
    number: 13,
    emoji: "⚖️",
    title: "Pergunta 13",
    text: "Pensando no seu rosto, o que parece mais equilibrado?",
    options: {
      A: "Cores claras deixam meu rosto mais proporcional",
      B: "Cores médias equilibram melhor",
      C: "Cores escuras deixam meu rosto mais equilibrado",
    },
    image: "cores-por-tom.jpg",
  },
  {
    number: 14,
    emoji: "👤",
    title: "Pergunta 14",
    text: "Pensando no efeito geral da sua aparência, você sente que:",
    options: {
      A: "Tons claros realçam mais sua beleza",
      B: "Tons médios funcionam melhor na maioria das vezes",
      C: "Tons escuros realçam mais sua presença",
    },
    image: "impacto-visual.jpg",
  },
];
