import type { ResultSlug } from "@/lib/quiz-logic";

export interface Result {
  slug: ResultSlug;
  emoji: string;
  title: string;
  subtitle: string;
  seuResultado: string;
  sobreVoce: string[];
  coresFavoraveis: string[];
  coresDesfavoraveis: string[];
  aplicacao: string[];
  insight: string;
}

export const results: Result[] = [
  {
    slug: "clara-iluminada",
    emoji: "🌤️",
    title: "Clara Iluminada",
    subtitle: "Quente Clara",
    seuResultado:
      "Sua cartela revela uma beleza leve, luminosa e naturalmente aquecida. Você tende a ser mais valorizada por cores claras com fundo quente — aquelas que trazem um aspecto mais saudável, iluminado e suave para o seu rosto.",
    sobreVoce: [
      "A sua aparência não pede peso, nem contraste excessivo. Ela pede leveza.",
      "Quando você usa cores muito escuras ou frias, é comum que seu rosto perca vitalidade — como se a cor \"apagasse\" o seu brilho natural.",
      "Por outro lado, quando você usa tons claros e quentes, algo muda imediatamente: sua pele parece mais viva, seu rosto mais descansado, sua beleza aparece com mais naturalidade.",
      "Você não precisa de intensidade para se destacar — você precisa de harmonia.",
    ],
    coresFavoraveis: [
      "Bege quente",
      "Pêssego",
      "Coral claro",
      "Dourado suave",
      "Verde oliva claro",
      "Amarelo suave",
      "Caramelo claro",
    ],
    coresDesfavoraveis: [
      "Preto",
      "Cinza escuro",
      "Branco muito frio",
      "Azul muito fechado",
      "Cores muito intensas ou pesadas",
    ],
    aplicacao: [
      "Prefira looks com pouco contraste",
      "Evite combinações muito fortes (ex: preto + branco)",
      "Use tons claros próximos ao rosto",
      "Dê preferência a acessórios dourados",
      "Na maquiagem, opte por tons quentes e suaves",
    ],
    insight:
      "A sua beleza não precisa ser \"marcante\" para ser percebida. Ela aparece quando você respeita a sua leveza.",
  },
  {
    slug: "clara-delicada",
    emoji: "🌤️",
    title: "Clara Delicada",
    subtitle: "Fria Clara",
    seuResultado:
      "Sua cartela revela uma beleza leve, suave e com fundo frio. Você é valorizada por cores claras e frias, que trazem frescor, delicadeza e uma aparência mais refinada ao seu rosto.",
    sobreVoce: [
      "A sua beleza é naturalmente mais sutil.",
      "Quando você usa cores muito fortes, quentes ou escuras, é comum que seu rosto perca destaque, a cor chame mais atenção do que você, e sua expressão pareça mais pesada.",
      "Mas quando você usa tons claros e frios: sua pele parece mais uniforme, seu rosto fica mais leve, sua aparência transmite elegância natural.",
      "Você não precisa de intensidade — você precisa de suavidade e frescor.",
    ],
    coresFavoraveis: [
      "Rosa claro",
      "Azul bebê",
      "Lavanda",
      "Lilás",
      "Cinza claro",
      "Branco suave",
      "Verde menta",
    ],
    coresDesfavoraveis: [
      "Tons quentes (laranja, amarelo forte)",
      "Cores muito escuras",
      "Preto intenso",
      "Cores vibrantes",
    ],
    aplicacao: [
      "Prefira looks claros e frios",
      "Evite contraste alto",
      "Use maquiagem leve com fundo rosado",
      "Prefira prata ou metais frios",
      "Tons suaves sempre funcionam melhor do que intensos",
    ],
    insight:
      "A sua beleza não está no impacto. Ela está na delicadeza.",
  },
  {
    slug: "clara-equilibrada",
    emoji: "🌤️",
    title: "Clara Equilibrada",
    subtitle: "Neutra Clara",
    seuResultado:
      "Sua cartela revela uma beleza leve, clara e equilibrada. Você não puxa fortemente nem para o quente, nem para o frio — o que te dá mais flexibilidade, mas ainda exige leveza nas escolhas.",
    sobreVoce: [
      "Você tem uma característica muito interessante: você se adapta melhor do que a maioria das pessoas.",
      "Mas isso não significa que tudo funciona. O que realmente te valoriza são cores claras e suaves, independentemente de serem levemente quentes ou frias.",
      "Quando você exagera na intensidade ou no peso das cores: sua aparência perde leveza, seu rosto pode parecer mais apagado.",
      "Mas quando você respeita sua suavidade: sua beleza aparece de forma natural, sua imagem fica mais harmônica.",
    ],
    coresFavoraveis: [
      "Bege claro",
      "Rosé",
      "Azul suave",
      "Cinza claro",
      "Off-white",
      "Verde suave",
      "Nude claro",
    ],
    coresDesfavoraveis: [
      "Cores muito escuras",
      "Tons extremamente vibrantes",
      "Contrastes muito altos",
    ],
    aplicacao: [
      "Mantenha combinações leves",
      "Evite extremos (muito claro ou muito escuro juntos)",
      "Prefira tons neutros claros",
      "Misture quente e frio com equilíbrio",
    ],
    insight:
      "Você não precisa escolher entre quente ou frio. Você precisa manter o equilíbrio.",
  },
  {
    slug: "harmonia-natural",
    emoji: "🌫️",
    title: "Harmonia Natural",
    subtitle: "Quente Média",
    seuResultado:
      "Sua cartela revela uma beleza equilibrada com um fundo quente. Você não precisa de extremos — nem muito claro, nem muito escuro. O que realmente te valoriza são tons médios, com calor, que acompanham a naturalidade da sua coloração.",
    sobreVoce: [
      "A sua beleza não grita — ela se sustenta.",
      "Você provavelmente já percebeu que tons muito claros podem te deixar \"sem presença\" e tons muito escuros podem pesar mais do que deveriam.",
      "Mas quando você usa cores intermediárias, algo se encaixa: seu rosto fica mais harmônico, sua pele parece mais uniforme, sua imagem transmite naturalidade.",
      "Você não precisa chamar atenção pelas cores. Você se destaca quando tudo está em equilíbrio.",
    ],
    coresFavoraveis: [
      "Caramelo",
      "Terracota",
      "Bege médio",
      "Dourado",
      "Verde oliva",
      "Mostarda suave",
      "Marrom médio",
    ],
    coresDesfavoraveis: [
      "Preto muito intenso",
      "Branco muito frio",
      "Cores extremamente vibrantes",
      "Tons muito claros e apagados",
    ],
    aplicacao: [
      "Prefira looks com contraste médio",
      "Evite combinações muito fortes (preto + branco)",
      "Use tons quentes próximos ao rosto",
      "Aposte em dourado nos acessórios",
      "Na maquiagem, escolha tons terrosos e quentes",
    ],
    insight:
      "A sua beleza não precisa de impacto. Ela aparece quando tudo está na medida certa.",
  },
  {
    slug: "elegancia-suave",
    emoji: "🌫️",
    title: "Elegância Suave",
    subtitle: "Fria Média",
    seuResultado:
      "Sua cartela revela uma beleza equilibrada com fundo frio. Você é valorizada por cores médias e frias, que trazem sofisticação, elegância e uma presença mais refinada ao seu rosto.",
    sobreVoce: [
      "Existe algo na sua aparência que é naturalmente elegante. Mas essa elegância se perde quando há exagero.",
      "Você pode já ter percebido que cores muito fortes parecem \"demais\", tons muito claros não te destacam, e cores quentes podem não harmonizar bem.",
      "Mas quando você usa tons médios e frios: sua imagem fica mais sofisticada, seu rosto parece mais definido, tudo parece mais alinhado.",
      "Você não precisa de intensidade — você precisa de coerência.",
    ],
    coresFavoraveis: [
      "Azul acinzentado",
      "Vinho suave",
      "Cinza médio",
      "Rosa frio",
      "Verde frio",
      "Roxo suave",
      "Azul petróleo",
    ],
    coresDesfavoraveis: [
      "Tons quentes (laranja, amarelo forte)",
      "Cores muito vibrantes",
      "Preto muito pesado",
      "Branco muito puro",
    ],
    aplicacao: [
      "Prefira combinações frias e equilibradas",
      "Evite contraste extremo",
      "Use prata ou metais frios",
      "Na maquiagem, prefira tons rosados e frios",
      "Tons médios sempre funcionam melhor que extremos",
    ],
    insight:
      "Você se destaca quando tudo parece sutilmente alinhado. A sua elegância está na harmonia.",
  },
  {
    slug: "equilibrio-sofisticado",
    emoji: "🌫️",
    title: "Equilíbrio Sofisticado",
    subtitle: "Neutra Média",
    seuResultado:
      "Sua cartela revela uma beleza equilibrada e versátil. Você não puxa fortemente nem para o quente, nem para o frio — e isso te dá mais liberdade. Mas o que realmente funciona para você são tons médios, que mantêm o equilíbrio da sua imagem.",
    sobreVoce: [
      "Você provavelmente já percebeu algo interessante: muitas cores funcionam em você… mas nem todas valorizam de verdade.",
      "Quando você exagera em cores muito claras, perde presença; em cores muito escuras, pesa; em cores muito intensas, pode não harmonizar.",
      "Mas quando você usa tons médios: tudo se encaixa, sua imagem fica mais refinada, sua beleza aparece com naturalidade.",
      "Você não precisa escolher entre quente ou frio. Você precisa manter o equilíbrio.",
    ],
    coresFavoraveis: [
      "Taupe",
      "Azul médio",
      "Rosé",
      "Verde médio",
      "Cinza neutro",
      "Marrom médio",
      "Bege médio",
    ],
    coresDesfavoraveis: [
      "Extremos muito claros",
      "Extremos muito escuros",
      "Cores muito vibrantes",
    ],
    aplicacao: [
      "Prefira looks equilibrados",
      "Misture tons quentes e frios com leveza",
      "Evite contraste alto",
      "Aposte em combinações médias",
      "Acessórios podem variar entre dourado e prata",
    ],
    insight:
      "A sua maior força é a versatilidade. Mas o que realmente te valoriza é o equilíbrio.",
  },
  {
    slug: "profunda-radiante",
    emoji: "🌑",
    title: "Profunda Radiante",
    subtitle: "Quente Profunda",
    seuResultado:
      "Sua cartela revela uma beleza de presença, calor e profundidade. Você é naturalmente valorizada por cores mais intensas e quentes — aquelas que acompanham a força da sua coloração e trazem mais definição para o seu rosto.",
    sobreVoce: [
      "Existe uma força na sua aparência que não pode ser ignorada.",
      "Você provavelmente já percebeu que cores muito claras podem te deixar \"sem vida\", tons suaves demais não sustentam sua presença, e looks muito leves parecem incompletos em você.",
      "Mas quando você usa cores mais profundas e quentes: seu rosto ganha definição, sua pele parece mais uniforme, sua imagem transmite mais segurança.",
      "Você não é valorizada pela leveza. Você é valorizada pela presença.",
    ],
    coresFavoraveis: [
      "Marrom",
      "Terracota profundo",
      "Caramelo escuro",
      "Dourado",
      "Verde musgo",
      "Vinho quente",
      "Mostarda escura",
    ],
    coresDesfavoraveis: [
      "Branco puro",
      "Bege muito claro",
      "Tons muito suaves",
      "Cores frias claras",
    ],
    aplicacao: [
      "Prefira looks com mais peso visual",
      "Use cores profundas próximas ao rosto",
      "Aposte em combinações com contraste moderado a alto",
      "Acessórios dourados funcionam melhor",
      "Na maquiagem, escolha tons mais quentes e intensos",
    ],
    insight:
      "A sua beleza não aparece quando você suaviza demais. Ela aparece quando você sustenta a sua intensidade.",
  },
  {
    slug: "profunda-marcante",
    emoji: "🌑",
    title: "Profunda Marcante",
    subtitle: "Fria Profunda",
    seuResultado:
      "Sua cartela revela uma beleza intensa, contrastante e naturalmente marcante. Você é valorizada por cores profundas e frias, que acompanham a força dos seus traços e trazem mais definição para o seu rosto.",
    sobreVoce: [
      "A sua presença não é sutil. E quando você tenta suavizar demais, algo se perde.",
      "Você pode já ter percebido que cores muito claras não te destacam, tons suaves deixam sua imagem apagada, e cores quentes podem não harmonizar bem.",
      "Mas quando você usa tons profundos e frios: seus traços ficam mais definidos, seu olhar ganha destaque, sua imagem transmite mais força e elegância.",
      "Você não precisa diminuir sua intensidade. Você precisa direcioná-la.",
    ],
    coresFavoraveis: [
      "Preto",
      "Azul marinho",
      "Vinho",
      "Roxo profundo",
      "Cinza escuro",
      "Azul petróleo",
      "Verde escuro frio",
    ],
    coresDesfavoraveis: [
      "Bege claro",
      "Tons quentes",
      "Cores suaves",
      "Branco muito leve",
    ],
    aplicacao: [
      "Aposte em cores escuras próximas ao rosto",
      "Use contraste com intenção (ex: preto + branco)",
      "Prefira metais frios (prata, grafite)",
      "Na maquiagem, pode usar mais definição",
      "Evite looks apagados",
    ],
    insight:
      "Você não precisa \"equilibrar\" sua intensidade. Você precisa expressá-la com clareza.",
  },
  {
    slug: "profunda-intensa",
    emoji: "🌑",
    title: "Profunda Intensa",
    subtitle: "Neutra Profunda",
    seuResultado:
      "Sua cartela revela uma beleza forte, profunda e equilibrada. Você sustenta bem cores intensas — tanto quentes quanto frias — desde que tenham profundidade suficiente para acompanhar a sua presença.",
    sobreVoce: [
      "Você tem uma característica rara: força + versatilidade.",
      "Mas isso não significa que tudo funciona. Você pode já ter percebido que cores muito claras não te favorecem, tons suaves parecem fracos em você, mas tanto cores quentes quanto frias podem funcionar.",
      "O ponto não é a temperatura. O ponto é a profundidade. Quando você usa cores intensas: seu rosto ganha presença, sua imagem parece mais forte, sua beleza se sustenta melhor.",
    ],
    coresFavoraveis: [
      "Preto",
      "Marrom escuro",
      "Azul profundo",
      "Vinho",
      "Verde escuro",
      "Cinza grafite",
      "Bordô",
    ],
    coresDesfavoraveis: [
      "Cores muito claras",
      "Tons apagados",
      "Cores muito suaves",
    ],
    aplicacao: [
      "Prefira looks com presença",
      "Use cores profundas próximas ao rosto",
      "Misture quente e frio com liberdade",
      "Aposte em contraste moderado",
      "Acessórios podem variar",
    ],
    insight:
      "A sua beleza não está na delicadeza. Está na força.",
  },
];

export function getResultBySlug(slug: string): Result | undefined {
  return results.find((r) => r.slug === slug);
}
