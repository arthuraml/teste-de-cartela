import type { ResultSlug } from "@/lib/quiz-logic";

export interface MaquiagemSection {
  pele?: string;
  base?: string;
  blush?: string;
  olhos?: string;
  batom?: string;
  iluminador?: string;
  contorno?: string;
  observacao?: string;
}

export interface ContrasteSection {
  intro: string;
  altoContrasteTitle: string;
  altoContrasteText: string;
  baixoContrasteTitle: string;
  baixoContrasteText: string;
  regraSimples: string;
}

export interface PraticaCard {
  title?: string;
  image: string;
  bullets: string[];
}

export interface ResultImages {
  capa: string;
  sobreVoce?: string[];
  seuResultadoExtra?: string; // só R5
  cores: {
    favoraveis: string;
    aEvitar: string;
    neutras: string;
    maquiagem: string;
  };
  pratica?: string[]; // fotos do bloco "Como aparece na prática" (não usado quando praticaCards está presente)
}

export interface Result {
  slug: ResultSlug;
  emoji: string;
  title: string;
  subtitle: string;
  imagens: ResultImages;
  seuResultado: string;
  sobreVoce: string[];
  comoPraticaIntro?: string;
  comoPraticaPattern?: string[];
  comoPraticaOutro?: string;
  praticaCards?: PraticaCard[]; // só R6 — quando presente, substitui o bloco simples
  coresFavoraveisIntro?: string;
  coresFavoraveis: string[];
  coresFavoraveisOutro?: string;
  coresDesfavoraveisIntro?: string;
  coresDesfavoraveis: string[];
  coresDesfavoraveisOutro?: string;
  coresNeutrasIntro?: string;
  coresNeutras?: string[];
  coresNeutrasOutro?: string;
  contraste?: ContrasteSection;
  maquiagem?: MaquiagemSection;
  aplicacao: string[];
  insight: string;
}

const RESULTS_BASE = "/images/results";

export const results: Result[] = [
  // =================================================================
  // R1 — CLARA ILUMINADA (Quente Clara)
  // =================================================================
  {
    slug: "clara-iluminada",
    emoji: "🌤️",
    title: "Clara Iluminada",
    subtitle: "Quente Clara",
    imagens: {
      capa: `${RESULTS_BASE}/clara-iluminada__capa.jpg`,
      sobreVoce: [`${RESULTS_BASE}/clara-iluminada__sobre-voce.jpg`],
      pratica: [
        `${RESULTS_BASE}/clara-iluminada__pratica-01.jpg`,
        `${RESULTS_BASE}/clara-iluminada__pratica-02.jpg`,
      ],
      cores: {
        favoraveis: `${RESULTS_BASE}/clara-iluminada__cores-favoraveis-paleta.jpg`,
        aEvitar: `${RESULTS_BASE}/clara-iluminada__cores-a-evitar-paleta.jpg`,
        neutras: `${RESULTS_BASE}/clara-iluminada__cores-neutras-paleta.jpg`,
        maquiagem: `${RESULTS_BASE}/clara-iluminada__maquiagem-paleta.jpg`,
      },
    },
    seuResultado:
      "Sua cartela revela uma beleza leve, luminosa e naturalmente aquecida. Você é valorizada por cores claras com fundo quente — aquelas que trazem um aspecto mais saudável, iluminado e suave para o seu rosto.",
    sobreVoce: [
      "A sua aparência não pede peso, nem contraste excessivo. Ela pede leveza.",
      "Quando você usa cores muito escuras ou frias, seu rosto pode perder vitalidade — como se a cor “apagasse” o seu brilho natural.",
      "Por outro lado, quando você usa tons claros e quentes, algo muda imediatamente: 👉 sua pele parece mais viva 👉 seu rosto mais descansado 👉 sua beleza aparece com mais naturalidade",
      "Você não precisa de intensidade para se destacar — você precisa de harmonia.",
    ],
    comoPraticaIntro: "Perceba como os looks acima seguem um padrão:",
    comoPraticaPattern: [
      "cores claras e quentes",
      "baixo contraste",
      "aparência leve e sofisticada",
      "nada pesa — tudo ilumina",
    ],
    comoPraticaOutro: "Esse é o efeito que você deve buscar.",
    coresFavoraveisIntro: "Prefira tons claros com fundo quente:",
    coresFavoraveis: [
      "Bege quente",
      "Pêssego",
      "Coral claro",
      "Dourado suave",
      "Verde oliva claro",
      "Amarelo suave",
      "Caramelo claro",
    ],
    coresFavoraveisOutro:
      "Essas cores refletem melhor na sua pele e criam uma aparência mais leve e iluminada.",
    coresDesfavoraveisIntro: "Evite, principalmente próximo ao rosto:",
    coresDesfavoraveis: [
      "Preto",
      "Cinza escuro",
      "Branco muito frio",
      "Azul muito fechado",
      "Cores muito intensas ou pesadas",
    ],
    coresDesfavoraveisOutro:
      "Essas cores tendem a endurecer sua expressão ou tirar sua leveza natural.",
    coresNeutrasIntro:
      "Essas cores não prejudicam, mas também não iluminam. Use como base de look — e combine com cores mais favoráveis perto do rosto.",
    maquiagem: {
      pele: "Leve, luminosa (evite matte pesado)",
      blush: "Pêssego, coral claro, rosado quente suave",
      olhos: "Bege quente, dourado suave, marrom claro",
      batom: "Nude quente, pêssego, coral",
      iluminador: "Dourado suave ou champagne",
      contorno: "Leve e quente",
      observacao: "Sua maquiagem deve iluminar — nunca pesar.",
    },
    aplicacao: [
      "Prefira looks com pouco contraste",
      "Evite combinações muito fortes (ex: preto + branco)",
      "Use tons claros próximos ao rosto",
      "Dê preferência a acessórios dourados",
      "Priorize leveza em tudo (roupa, maquiagem, cabelo)",
    ],
    insight:
      "A sua beleza não precisa ser “marcante” para ser percebida. 👉 Ela aparece quando você respeita a sua leveza.",
  },

  // =================================================================
  // R2 — CLARA DELICADA (Fria Clara)
  // =================================================================
  {
    slug: "clara-delicada",
    emoji: "❄️",
    title: "Clara Delicada",
    subtitle: "Fria Clara",
    imagens: {
      capa: `${RESULTS_BASE}/clara-delicada__capa.jpg`,
      sobreVoce: [`${RESULTS_BASE}/clara-delicada__sobre-voce.jpg`],
      pratica: [
        `${RESULTS_BASE}/clara-delicada__pratica-01.jpg`,
        `${RESULTS_BASE}/clara-delicada__pratica-02.jpg`,
      ],
      cores: {
        favoraveis: `${RESULTS_BASE}/clara-delicada__cores-favoraveis-paleta.jpg`,
        aEvitar: `${RESULTS_BASE}/clara-delicada__cores-a-evitar-paleta.jpg`,
        neutras: `${RESULTS_BASE}/clara-delicada__cores-neutras-paleta.jpg`,
        maquiagem: `${RESULTS_BASE}/clara-delicada__maquiagem-paleta.jpg`,
      },
    },
    seuResultado:
      "Sua cartela revela uma beleza leve, suave e com fundo frio. Você é valorizada por cores claras e frias, que trazem frescor, delicadeza e uma aparência mais refinada ao seu rosto.",
    sobreVoce: [
      "A sua beleza é naturalmente mais sutil.",
      "Quando você usa cores muito fortes, quentes ou escuras, é comum que: 👉 seu rosto perca destaque 👉 a cor chame mais atenção do que você 👉 sua expressão pareça mais pesada",
      "Mas quando você usa tons claros e frios: 👉 sua pele parece mais uniforme 👉 seu rosto fica mais leve 👉 sua aparência transmite elegância natural",
      "Você não precisa de intensidade — você precisa de suavidade e frescor.",
    ],
    comoPraticaIntro: "Perceba o padrão:",
    comoPraticaPattern: [
      "cores claras e frias",
      "baixa intensidade",
      "contraste suave",
      "aparência leve e refinada",
    ],
    comoPraticaOutro: "Nada é chamativo demais — tudo é delicado e harmônico.",
    coresFavoraveisIntro: "Prefira tons claros e frios:",
    coresFavoraveis: [
      "Rosa claro",
      "Azul bebê",
      "Lavanda",
      "Lilás",
      "Cinza claro",
      "Branco suave",
      "Verde menta",
    ],
    coresFavoraveisOutro:
      "Essas cores criam harmonia com sua pele e deixam sua aparência mais leve, fresca e elegante.",
    coresDesfavoraveisIntro: "Evite principalmente:",
    coresDesfavoraveis: [
      "Tons quentes (laranja, amarelo forte)",
      "Cores muito escuras",
      "Preto intenso",
      "Cores vibrantes",
    ],
    coresDesfavoraveisOutro:
      "Essas cores podem pesar, endurecer sua expressão e tirar a delicadeza da sua beleza.",
    coresNeutrasIntro:
      "Essas cores não prejudicam, mas também não valorizam ao máximo. Use como base do look — e combine com cores frias e claras perto do rosto.",
    maquiagem: {
      pele: "Leve, natural, com fundo rosado ou neutro frio",
      blush: "Rosa claro, rosé frio, malva suave",
      olhos: "Tons frios e suaves (acinzentados, rosados, lilás)",
      batom: "Nude rosado, rosa claro, malva",
      iluminador: "Perolado (evite dourado)",
      contorno: "Leve, sem aquecer demais",
      observacao: "Sua maquiagem deve trazer frescor — nunca pesar.",
    },
    aplicacao: [
      "Prefira looks claros e frios",
      "Evite contraste alto",
      "Use cores suaves próximas ao rosto",
      "Prefira prata ou metais frios",
      "Evite excesso de informação visual",
      "Quanto mais leve e suave, melhor.",
    ],
    insight: "A sua beleza não está no impacto. 👉 Ela está na delicadeza.",
  },

  // =================================================================
  // R3 — CLARA EQUILIBRADA (Neutra Clara)
  // =================================================================
  {
    slug: "clara-equilibrada",
    emoji: "⚖️",
    title: "Clara Equilibrada",
    subtitle: "Neutra Clara",
    imagens: {
      capa: `${RESULTS_BASE}/clara-equilibrada__capa.jpg`,
      sobreVoce: [`${RESULTS_BASE}/clara-equilibrada__sobre-voce.jpg`],
      pratica: [
        `${RESULTS_BASE}/clara-equilibrada__pratica-01.jpg`,
        `${RESULTS_BASE}/clara-equilibrada__pratica-02.jpg`,
      ],
      cores: {
        favoraveis: `${RESULTS_BASE}/clara-equilibrada__cores-favoraveis-paleta.jpg`,
        aEvitar: `${RESULTS_BASE}/clara-equilibrada__cores-a-evitar-paleta.jpg`,
        neutras: `${RESULTS_BASE}/clara-equilibrada__cores-neutras-paleta.jpg`,
        maquiagem: `${RESULTS_BASE}/clara-equilibrada__maquiagem-paleta.jpg`,
      },
    },
    seuResultado:
      "Sua cartela revela uma beleza leve, clara e equilibrada. Você não puxa fortemente nem para o quente, nem para o frio — o que te dá mais flexibilidade, mas ainda exige leveza nas escolhas.",
    sobreVoce: [
      "Você tem uma característica muito interessante: 👉 você se adapta melhor do que a maioria das pessoas",
      "Mas isso não significa que tudo funciona.",
      "O que realmente te valoriza são cores claras e suaves, independentemente de serem levemente quentes ou frias.",
      "Quando você exagera na intensidade ou no peso das cores: 👉 sua aparência perde leveza 👉 seu rosto pode parecer mais apagado",
      "Mas quando você respeita sua suavidade: 👉 sua beleza aparece de forma natural 👉 sua imagem fica mais harmônica",
    ],
    comoPraticaIntro: "Perceba o padrão:",
    comoPraticaPattern: [
      "cores claras e suaves",
      "equilíbrio entre quente e frio",
      "baixo contraste",
      "aparência leve e natural",
    ],
    comoPraticaOutro: "Nada pesa ou domina — tudo se equilibra.",
    coresFavoraveisIntro: "Prefira tons claros e equilibrados:",
    coresFavoraveis: [
      "Bege claro",
      "Rosé",
      "Azul suave",
      "Cinza claro",
      "Off-white",
      "Verde suave",
      "Nude claro",
    ],
    coresFavoraveisOutro:
      "Essas cores mantêm a harmonia da sua pele e valorizam sua leveza natural.",
    coresDesfavoraveisIntro: "Evite principalmente:",
    coresDesfavoraveis: [
      "Cores muito escuras",
      "Tons extremamente vibrantes",
      "Contrastes muito altos",
    ],
    coresDesfavoraveisOutro:
      "Esses elementos quebram o equilíbrio da sua beleza e podem endurecer sua imagem.",
    coresNeutrasIntro:
      "Essas cores funcionam bem para você — especialmente como base. Mas o segredo está em manter a leveza e não pesar nas combinações.",
    maquiagem: {
      pele: "Leve e natural (nem muito quente, nem muito rosada)",
      blush: "Rosé suave, pêssego leve",
      olhos: "Tons neutros claros (bege, taupe, rosado suave)",
      batom: "Nude, rosé, tons equilibrados",
      iluminador: "Suave (sem dourado intenso ou prata forte)",
      contorno: "Leve e neutro",
      observacao:
        "O objetivo é manter equilíbrio — sem puxar demais para nenhum lado.",
    },
    aplicacao: [
      "Mantenha combinações leves",
      "Evite extremos (muito claro ou muito escuro juntos)",
      "Prefira tons neutros claros",
      "Misture quente e frio com equilíbrio",
      "Evite excesso de contraste",
    ],
    insight:
      "Você não precisa escolher entre quente ou frio. 👉 Você precisa manter o equilíbrio.",
  },

  // =================================================================
  // R4 — HARMONIA NATURAL (Quente Média)
  // =================================================================
  {
    slug: "harmonia-natural",
    emoji: "🌫️",
    title: "Harmonia Natural",
    subtitle: "Quente Média",
    imagens: {
      capa: `${RESULTS_BASE}/harmonia-natural__capa.jpg`,
      sobreVoce: [
        `${RESULTS_BASE}/harmonia-natural__sobre-voce-01.jpg`,
        `${RESULTS_BASE}/harmonia-natural__sobre-voce-02.jpg`,
      ],
      pratica: [
        `${RESULTS_BASE}/harmonia-natural__pratica-01.jpg`,
        `${RESULTS_BASE}/harmonia-natural__pratica-02.jpg`,
        `${RESULTS_BASE}/harmonia-natural__pratica-03.jpg`,
      ],
      cores: {
        favoraveis: `${RESULTS_BASE}/harmonia-natural__cores-favoraveis-foto.jpg`,
        aEvitar: `${RESULTS_BASE}/harmonia-natural__cores-a-evitar-foto.jpg`,
        neutras: `${RESULTS_BASE}/harmonia-natural__cores-neutras-foto.jpg`,
        maquiagem: `${RESULTS_BASE}/harmonia-natural__maquiagem-foto.jpg`,
      },
    },
    seuResultado:
      "Sua cartela revela uma beleza equilibrada, quente e naturalmente sofisticada. Você não precisa de extremos para se destacar. 👉 O que realmente valoriza você são cores médias com fundo quente, que acompanham a sua coloração de forma fluida e coerente. Sua beleza não chama atenção pelo excesso. Ela chama atenção pela harmonia.",
    sobreVoce: [
      "Existe um padrão muito claro na sua imagem — mesmo que você nunca tenha percebido conscientemente: 👉 quando você exagera, algo “sai do lugar” 👉 quando você equilibra, tudo funciona",
      "Provavelmente você já notou que: – cores muito claras → te deixam mais apagada – cores muito escuras → pesam e endurecem sua imagem – cores frias → criam um contraste estranho com a sua pele",
      "Mas quando você usa tons médios e quentes: 👉 seu rosto ganha definição 👉 sua pele parece mais uniforme 👉 sua imagem transmite elegância com naturalidade",
      "Você não precisa chamar atenção pelas cores. 👉 Você se destaca quando tudo está na medida certa.",
    ],
    contraste: {
      intro:
        "Esse é um ponto essencial — e quase ninguém te explica isso direito. Contraste é a diferença entre as cores naturais do seu rosto (por exemplo: pele, cabelo, olhos, sobrancelha).",
      altoContrasteTitle: "Se você tem contraste mais alto",
      altoContrasteText:
        "👉 pode usar cores um pouco mais intensas dentro da sua cartela (ex: terracota mais fechado, verde oliva mais profundo, vermelho telha mais marcante).",
      baixoContrasteTitle: "Se você tem contraste mais baixo",
      baixoContrasteText:
        "👉 fica melhor com cores mais suaves e equilibradas (ex: rosé queimado mais claro, bege quente, verde oliva mais leve).",
      regraSimples:
        "👉 Regra simples: quanto maior o seu contraste, mais intensidade você sustenta. Quanto menor o contraste, mais suavidade te valoriza.",
    },
    comoPraticaIntro: "No seu dia a dia, isso se traduz em:",
    comoPraticaPattern: [
      "looks com contraste médio",
      "combinações em tons terrosos",
      "cores quentes próximas ao rosto",
      "tecidos com aparência natural e elegante",
    ],
    comoPraticaOutro:
      "Acessórios: 👉 dourado funciona melhor que prata (porque acompanha o calor da sua pele).",
    coresFavoraveisIntro: "Prefira tons médios e quentes, como:",
    coresFavoraveis: [
      "Terracota",
      "Vermelho telha",
      "Rosé queimado",
      "Dourado ocre",
      "Verde oliva",
      "Verde quente",
      "Marrom cacau",
    ],
    coresFavoraveisOutro:
      "👉 Essas cores acompanham sua profundidade natural e criam uma imagem sofisticada sem esforço.",
    coresDesfavoraveisIntro: "Evite principalmente perto do rosto:",
    coresDesfavoraveis: [
      "Preto muito intenso",
      "Branco frio (branco óptico)",
      "Azul muito frio/azulado",
      "Rosa frio (puxado pro pink)",
      "Roxo frio",
      "Cinzas muito frios",
    ],
    coresDesfavoraveisOutro:
      "👉 Essas cores quebram o calor natural da sua pele e criam um contraste que não conversa com você.",
    coresNeutrasIntro:
      "Essas cores não destacam nem prejudicam — 👉 elas mantêm a harmonia:",
    coresNeutras: [
      "Bege médio",
      "Taupe",
      "Cinza neutro médio",
      "Azul suavizado",
      "Verde médio neutro",
      "Rosa antigo",
      "Vinho suave",
    ],
    coresNeutrasOutro: "👉 Perfeitas para base de looks elegantes e versáteis.",
    maquiagem: {
      base: "Subtom quente ou neutro quente",
      blush: "Pêssego, coral ou terracota",
      olhos: "Sombras douradas, cobre, bronze e oliva",
      batom: "Nude caramelo, coral, terracota, vermelho quente",
      observacao:
        "👉 Evite tons frios ou acinzentados. Eles tiram o viço natural da sua pele.",
    },
    aplicacao: [
      "Prefira looks com contraste médio",
      "Combinações em tons terrosos",
      "Cores quentes próximas ao rosto",
      "Tecidos com aparência natural e elegante",
      "Acessórios dourados ao invés de prata",
    ],
    insight:
      "A sua beleza não depende de impacto. 👉 Ela aparece quando existe coerência. Quando você respeita isso: sua imagem transmite elegância natural, sua presença parece mais segura, e tudo em você parece bem resolvido sem esforço.",
  },

  // =================================================================
  // R5 — ELEGÂNCIA SUAVE (Fria Média)
  // =================================================================
  {
    slug: "elegancia-suave",
    emoji: "🌫️",
    title: "Elegância Suave",
    subtitle: "Fria Média",
    imagens: {
      capa: `${RESULTS_BASE}/elegancia-suave__capa.jpg`,
      seuResultadoExtra: `${RESULTS_BASE}/elegancia-suave__seu-resultado.jpg`,
      sobreVoce: [
        `${RESULTS_BASE}/elegancia-suave__sobre-voce-01.jpg`,
        `${RESULTS_BASE}/elegancia-suave__sobre-voce-02.jpg`,
        `${RESULTS_BASE}/elegancia-suave__sobre-voce-03.jpg`,
      ],
      cores: {
        favoraveis: `${RESULTS_BASE}/elegancia-suave__cores-favoraveis-foto.jpg`,
        aEvitar: `${RESULTS_BASE}/elegancia-suave__cores-a-evitar-foto.jpg`,
        neutras: `${RESULTS_BASE}/elegancia-suave__cores-neutras-foto.jpg`,
        maquiagem: `${RESULTS_BASE}/elegancia-suave__maquiagem-foto.jpg`,
      },
    },
    seuResultado:
      "Sua cartela revela uma beleza equilibrada com fundo frio. Você é valorizada por cores médias e frias, que trazem sofisticação, elegância e uma presença naturalmente refinada ao seu rosto.",
    sobreVoce: [
      "Existe algo na sua aparência que é naturalmente elegante. Mas essa elegância se perde quando há exagero.",
      "Você pode já ter percebido que: cores muito fortes parecem “demais”, tons muito claros não te destacam, cores quentes não harmonizam com facilidade.",
      "Mas quando você usa tons médios e frios: 👉 seu rosto fica mais definido 👉 sua imagem ganha sofisticação 👉 tudo parece mais coerente",
      "Você não precisa de intensidade. 👉 Você precisa de harmonia.",
    ],
    coresFavoraveisIntro: "Prefira tons médios e frios, como:",
    coresFavoraveis: [
      "Azul acinzentado",
      "Vinho frio",
      "Cinza médio",
      "Rosa frio",
      "Verde frio",
      "Roxo ameixa",
      "Azul petróleo",
    ],
    coresFavoraveisOutro:
      "Essas cores trazem profundidade na medida certa — sem pesar e sem apagar.",
    coresDesfavoraveisIntro: "Evite principalmente:",
    coresDesfavoraveis: [
      "Tons quentes (laranja, amarelo, coral)",
      "Cores muito vibrantes",
      "Tons amarelados",
      "Contrastes muito fortes",
    ],
    coresDesfavoraveisOutro:
      "Essas cores quebram a suavidade natural da sua imagem e geram desarmonia.",
    contraste: {
      intro:
        "Aqui está um ponto que muda completamente o resultado final: 👉 o seu contraste natural importa tanto quanto sua cartela.",
      altoContrasteTitle:
        "Se você tem ALTO contraste (ex: pele clara + cabelo escuro)",
      altoContrasteText:
        "Você pode — e deve — usar tons mais profundos da sua cartela e cores mais intensas dentro do frio. Exemplos: 👉 vinho mais fechado 👉 verde petróleo 👉 azul mais escuro. Isso acontece porque o seu próprio contraste já sustenta mais intensidade.",
      baixoContrasteTitle:
        "Se você tem BAIXO ou MÉDIO contraste (ex: pele morena + cabelo castanho claro)",
      baixoContrasteText:
        "Você vai ficar melhor com tons mais suaves da cartela e cores mais claras e equilibradas. Exemplos: 👉 rosa frio suave 👉 azul acinzentado claro 👉 cinza médio. 👉 Aqui, suavidade gera mais harmonia do que intensidade.",
      regraSimples:
        "💡 Regra simples: quanto maior seu contraste → mais profundidade você sustenta. Quanto menor seu contraste → mais suavidade te valoriza.",
    },
    coresNeutrasIntro:
      "Essas cores não favorecem nem desfavorecem — 👉 mantêm equilíbrio e funcionam como base do seu guarda-roupa.",
    aplicacao: [
      "Prefira looks com contraste médio",
      "Evite preto + branco muito marcado",
      "Combine tons frios entre si",
      "Use prata ou metais frios",
      "Aposte em tecidos com caimento suave (reforça sua elegância natural)",
    ],
    maquiagem: {
      base: "Neutra a fria, acabamento natural",
      blush: "Rosa frio, malva",
      olhos: "Taupe, cinza, marrom frio, rosé",
      batom: "Nude rosado, rosa queimado, vinho suave",
      observacao: "👉 O objetivo não é pesar — é refinar.",
    },
    insight:
      "A sua beleza não aparece quando você exagera. 👉 Ela aparece quando tudo parece naturalmente alinhado. A sua elegância está na suavidade, no equilíbrio e na coerência.",
  },

  // =================================================================
  // R6 — EQUILÍBRIO SOFISTICADO (Neutra Média)
  // =================================================================
  {
    slug: "equilibrio-sofisticado",
    emoji: "🌫️",
    title: "Equilíbrio Sofisticado",
    subtitle: "Neutra Média",
    imagens: {
      capa: `${RESULTS_BASE}/equilibrio-sofisticado__capa.jpg`,
      sobreVoce: [`${RESULTS_BASE}/equilibrio-sofisticado__sobre-voce.jpg`],
      cores: {
        favoraveis: `${RESULTS_BASE}/equilibrio-sofisticado__cores-favoraveis-foto.jpg`,
        aEvitar: `${RESULTS_BASE}/equilibrio-sofisticado__cores-a-evitar-foto.jpg`,
        neutras: `${RESULTS_BASE}/equilibrio-sofisticado__cores-neutras-foto.jpg`,
        maquiagem: `${RESULTS_BASE}/equilibrio-sofisticado__maquiagem-foto.jpg`,
      },
    },
    seuResultado:
      "Sua cartela revela uma beleza equilibrada e versátil. Isso significa que você não puxa fortemente nem para o quente, nem para o frio — e isso te dá mais liberdade do que a maioria das pessoas. Mas atenção: 👉 liberdade não significa que tudo funciona igual. O que realmente valoriza você são os tons médios e equilibrados, que mantêm a harmonia da sua imagem.",
    sobreVoce: [
      "Existe um padrão muito claro na sua beleza — mesmo que você ainda não tenha percebido totalmente.",
      "Você provavelmente já sentiu que: 👉 muitas cores ficam “ok” em você… 👉 mas poucas realmente te deixam mais bonita.",
      "Isso acontece porque sua beleza não depende de extremos.",
      "Quando você exagera: em cores muito claras → você perde presença; em cores muito escuras → sua imagem pesa; em cores muito vibrantes → a cor aparece mais que você.",
      "Mas quando você acerta: 👉 tudo se encaixa 👉 seu rosto parece mais harmônico 👉 sua imagem fica naturalmente sofisticada",
      "Você não precisa escolher entre quente ou frio. 👉 Você precisa manter o equilíbrio.",
    ],
    coresFavoraveisIntro:
      "Prefira tons médios, neutros e levemente equilibrados:",
    coresFavoraveis: [
      "Malva médio",
      "Rosa queimado neutro",
      "Vinho suave",
      "Verde acinzentado",
      "Azul petróleo equilibrado",
      "Cinza médio",
      "Taupe (marrom acinzentado)",
    ],
    coresFavoraveisOutro:
      "Essas cores funcionam porque: ✔ não pesam ✔ não apagam ✔ não brigam com sua pele. Elas simplesmente harmonizam.",
    coresDesfavoraveisIntro: "Evite principalmente:",
    coresDesfavoraveis: [
      "Cores muito vibrantes (ex: pink, azul royal, laranja vivo)",
      "Tons muito quentes (amarelados ou alaranjados demais)",
      "Extremos muito claros ou muito escuros",
    ],
    coresDesfavoraveisOutro:
      "Essas cores quebram o seu equilíbrio natural e fazem sua imagem perder sofisticação.",
    coresNeutrasIntro:
      "Essas cores não valorizam nem prejudicam — são seguras:",
    coresNeutras: [
      "Roxo profundo neutro",
      "Azul marinho",
      "Verde pinho",
      "Vinho intenso",
      "Terracota",
      "Branco",
      "Amarelo manteiga",
    ],
    coresNeutrasOutro: "Use quando quiser discrição ou um visual mais neutro.",
    praticaCards: [
      {
        title: "No dia a dia",
        image: `${RESULTS_BASE}/equilibrio-sofisticado__pratica-01.jpg`,
        bullets: [
          "Prefira combinações equilibradas",
          "Evite contraste muito alto",
          "Misture tons com suavidade",
        ],
      },
      {
        title: "Para um visual mais elegante",
        image: `${RESULTS_BASE}/equilibrio-sofisticado__pratica-02.jpg`,
        bullets: [
          "Aposte em looks monocromáticos ou próximos",
          "Escolha tecidos mais estruturados",
          "Mantenha harmonia entre as peças",
        ],
      },
      {
        title: "Para ambientes sofisticados",
        image: `${RESULTS_BASE}/equilibrio-sofisticado__pratica-03.jpg`,
        bullets: [
          "Use contraste moderado",
          "Mantenha cores neutras como base",
          "Aposte em elegância silenciosa",
        ],
      },
      {
        title: "Misturando neutros e cor",
        image: `${RESULTS_BASE}/equilibrio-sofisticado__pratica-04.jpg`,
        bullets: [
          "Misturar neutros com cor funciona muito bem em você — desde que o equilíbrio seja mantido.",
        ],
      },
    ],
    maquiagem: {
      base: "Natural e luminosa",
      blush: "Rosado ou pêssego neutro",
      olhos: "Sombras neutras e sofisticadas",
      batom: "Equilibrados (nem muito vibrantes, nem apagados)",
      observacao: "👉 A ideia não é pesar — é harmonizar.",
    },
    contraste: {
      intro:
        "Isso aqui muda completamente o resultado final — e quase ninguém explica. 👉 O que é contraste? É a diferença entre as cores naturais do seu rosto: pele, cabelo, olhos.",
      altoContrasteTitle:
        "🔹 CONTRASTE ALTO — pele clara + cabelo escuro",
      altoContrasteText:
        "👉 Nesse caso: você aguenta mais intensidade. ✔ pode usar tons mais profundos da sua cartela ✔ vinho, azul petróleo, verde mais fechado funcionam muito bem. 👉 porque você já tem contraste natural.",
      baixoContrasteTitle:
        "🔹 CONTRASTE BAIXO — pele morena + cabelo castanho claro",
      baixoContrasteText:
        "👉 Nesse caso: você fica melhor com suavidade. ✔ prefira tons médios e mais claros da cartela ✔ evite os mais escuros. 👉 porque contraste demais pesa em você.",
      regraSimples:
        "✔ Resumindo: muito contraste no rosto → pode usar cores mais fortes. Pouco contraste no rosto → use cores mais suaves.",
    },
    aplicacao: [
      "Combinações equilibradas",
      "Sem contraste muito alto",
      "Mistura suave de quente e frio",
      "Tecidos estruturados em looks elegantes",
      "Cores neutras como base",
    ],
    insight:
      "Sua maior força não está na intensidade. 👉 Está no equilíbrio. Quando você tenta chamar atenção com excesso, perde sofisticação. Quando você respeita sua harmonia, sua beleza aparece naturalmente.",
  },

  // =================================================================
  // R7 — PROFUNDA RADIANTE (Quente Profunda)
  // =================================================================
  {
    slug: "profunda-radiante",
    emoji: "🌑",
    title: "Profunda Radiante",
    subtitle: "Quente Profunda",
    imagens: {
      capa: `${RESULTS_BASE}/profunda-radiante__capa.jpg`,
      sobreVoce: [`${RESULTS_BASE}/profunda-radiante__sobre-voce.jpg`],
      pratica: [
        `${RESULTS_BASE}/profunda-radiante__pratica-01.jpg`,
        `${RESULTS_BASE}/profunda-radiante__pratica-02.jpg`,
      ],
      cores: {
        favoraveis: `${RESULTS_BASE}/profunda-radiante__cores-favoraveis-foto.jpg`,
        aEvitar: `${RESULTS_BASE}/profunda-radiante__cores-a-evitar-foto.jpg`,
        neutras: `${RESULTS_BASE}/profunda-radiante__cores-neutras-foto.jpg`,
        maquiagem: `${RESULTS_BASE}/profunda-radiante__maquiagem-foto.jpg`,
      },
    },
    seuResultado:
      "Sua cartela revela uma beleza de presença marcante, calor e profundidade natural. Isso significa que a sua imagem é valorizada quando existe densidade visual — ou seja, quando as cores acompanham a intensidade natural da sua pele, cabelo e olhos. Você não é favorecida por leveza ou suavidade. 👉 O que realmente te valoriza são cores quentes, profundas e encorpadas, que sustentam a sua presença com elegância.",
    sobreVoce: [
      "Existe uma força na sua aparência que não depende de esforço — ela já está ali.",
      "Mas ela só aparece completamente quando as cores que você usa têm estrutura suficiente para acompanhar essa intensidade.",
      "Você provavelmente já percebeu que: – cores claras demais deixam sua imagem apagada – tons suaves parecem “fracos” em você – looks leves demais não traduzem quem você é",
      "Por outro lado, quando você usa cores mais profundas: 👉 seu rosto ganha definição 👉 sua pele parece mais uniforme e iluminada 👉 sua imagem transmite mais segurança e sofisticação",
      "Isso acontece porque a sua beleza não é construída pela delicadeza — 👉 ela é construída pela presença.",
    ],
    coresFavoraveisIntro: "Prefira tons profundos com fundo quente, como:",
    coresFavoraveis: [
      "Terracota profundo",
      "Vermelho tomate",
      "Laranja queimado",
      "Dourado envelhecido",
      "Verde oliva escuro",
      "Verde musgo quente",
      "Marrom chocolate",
    ],
    coresFavoraveisOutro:
      "👉 Essas cores acompanham a sua profundidade natural e criam uma imagem forte, elegante e coerente.",
    coresDesfavoraveisIntro: "Evite principalmente:",
    coresDesfavoraveis: [
      "Tons muito claros",
      "Cores frias e azuladas",
      "Tons pastéis",
      "Cores acinzentadas suaves",
    ],
    coresDesfavoraveisOutro:
      "👉 Essas cores reduzem a intensidade da sua imagem e fazem com que sua presença visual perca força.",
    coresNeutrasIntro:
      "Essas cores não valorizam nem prejudicam — elas mantêm equilíbrio. Use quando quiser discrição, neutralidade ou composições mais básicas. Mas atenção: 👉 em excesso, elas podem deixar sua imagem sem expressão, porque não acompanham totalmente sua profundidade natural.",
    comoPraticaIntro: "No seu dia a dia, isso se traduz em:",
    comoPraticaPattern: [
      "looks com mais peso visual",
      "cores profundas próximas ao rosto",
      "combinações com cores intensas e quentes",
      "tecidos que trazem estrutura (não muito leves ou apagados)",
    ],
    comoPraticaOutro:
      "Acessórios: 👉 dourado, ouro envelhecido e tons quentes funcionam melhor que prata fria.",
    maquiagem: {
      base: "Fundo quente e acabamento luminoso",
      blush: "Terracota, coral queimado ou tijolo",
      olhos: "Marrom, cobre, dourado, vinho e verde escuro",
      batom: "Intensos: terracota, vermelho quente, vinho, marrom",
      observacao:
        "👉 Evite tons claros ou acinzentados — eles tiram profundidade do rosto.",
    },
    aplicacao: [
      "Prefira looks com mais peso visual",
      "Use cores profundas próximas ao rosto",
      "Aposte em combinações com contraste moderado a alto",
      "Acessórios dourados funcionam melhor",
      "Na maquiagem, escolha tons mais quentes e intensos",
    ],
    insight:
      "A sua beleza não aparece quando você suaviza quem você é. 👉 Ela aparece quando você sustenta a sua intensidade natural. Quando você respeita isso: sua imagem ganha força, sua presença se torna mais marcante, e você transmite elegância sem esforço.",
  },

  // =================================================================
  // R8 — PROFUNDA MARCANTE (Fria Profunda)
  // =================================================================
  {
    slug: "profunda-marcante",
    emoji: "🌑",
    title: "Profunda Marcante",
    subtitle: "Fria Profunda",
    imagens: {
      capa: `${RESULTS_BASE}/profunda-marcante__capa.jpg`,
      sobreVoce: [`${RESULTS_BASE}/profunda-marcante__sobre-voce.jpg`],
      pratica: [
        `${RESULTS_BASE}/profunda-marcante__pratica-01.jpg`,
        `${RESULTS_BASE}/profunda-marcante__pratica-02.jpg`,
        `${RESULTS_BASE}/profunda-marcante__pratica-03.jpg`,
      ],
      cores: {
        favoraveis: `${RESULTS_BASE}/profunda-marcante__cores-favoraveis-foto.jpg`,
        aEvitar: `${RESULTS_BASE}/profunda-marcante__cores-a-evitar-foto.jpg`,
        neutras: `${RESULTS_BASE}/profunda-marcante__cores-neutras-foto.jpg`,
        maquiagem: `${RESULTS_BASE}/profunda-marcante__maquiagem-foto.jpg`,
      },
    },
    seuResultado:
      "Sua cartela revela uma beleza intensa, profunda e naturalmente marcante. Existe uma força visual na sua aparência que vem da combinação entre: profundidade (cabelos, olhos ou traços escuros) e um subtom frio (pele rosada ou neutra fria). Você é valorizada por cores frias e profundas, que acompanham essa intensidade natural e trazem definição, contraste e sofisticação ao seu rosto.",
    sobreVoce: [
      "A sua presença não é sutil. Ela é estruturada, firme e visualmente impactante.",
      "E por isso, quando você tenta suavizar demais, algo se perde.",
      "Você pode já ter percebido que: cores muito claras não te destacam, tons suaves deixam sua imagem apagada, cores quentes criam um leve “desencaixe” no seu visual.",
      "Mas quando você usa tons profundos e frios: 👉 seus traços ficam mais definidos 👉 seu olhar ganha destaque imediato 👉 sua imagem transmite força, elegância e sofisticação",
      "Você não precisa diminuir sua intensidade. 👉 Você precisa direcioná-la.",
    ],
    contraste: {
      intro:
        "Aqui está um ponto que muda completamente o resultado final da sua imagem — e que a maioria das pessoas ignora: profundidade e contraste não são a mesma coisa. Você já tem profundidade. Mas o contraste pode variar.",
      altoContrasteTitle:
        "👉 Se você tem ALTO CONTRASTE — pele clara + cabelo preto + olhos escuros",
      altoContrasteText:
        "Você sustenta melhor combinações mais marcantes. Ex: preto + branco, vinho + pele clara, azul marinho + contraste forte. Looks com claro + escuro funcionam MUITO bem. 👉 Isso cria uma imagem mais impactante e sofisticada.",
      baixoContrasteTitle:
        "👉 Se você tem BAIXO ou MÉDIO CONTRASTE — pele morena ou negra + cabelo escuro + olhos escuros",
      baixoContrasteText:
        "O seu visual já é naturalmente uniforme. Você fica melhor com looks mais profundos e contínuos. Ex: vinho + vinho, preto + grafite, azul marinho + azul profundo. 👉 Muito contraste (tipo preto + branco) pode “quebrar” sua harmonia.",
      regraSimples:
        "✔️ Regra simples: quanto mais contraste natural você tem → mais contraste pode usar. Quanto menos contraste → mais monocromia te valoriza.",
    },
    coresFavoraveisIntro: "Prefira tons profundos e frios:",
    coresFavoraveis: [
      "Preto",
      "Azul marinho",
      "Vinho",
      "Roxo profundo",
      "Cinza escuro",
      "Azul petróleo",
      "Verde escuro frio",
    ],
    coresFavoraveisOutro:
      "Essas cores acompanham sua intensidade natural e trazem elegância imediata.",
    coresDesfavoraveisIntro: "Evite:",
    coresDesfavoraveis: [
      "Bege claro",
      "Tons quentes (alaranjados/amarelados)",
      "Cores suaves",
      "Branco muito leve",
    ],
    coresDesfavoraveisOutro:
      "Essas cores reduzem a força da sua imagem e podem te deixar apagada.",
    coresNeutrasIntro:
      "Essas cores não te valorizam nem te prejudicam. Use quando quiser discrição, equilíbrio, base para combinações. Mas lembre-se: 👉 elas não entregam o seu máximo potencial.",
    comoPraticaIntro: "✔️ Como aplicar na prática:",
    comoPraticaPattern: [
      "Prefira cores escuras próximas ao rosto",
      "Evite looks “lavados”",
      "Alto contraste → claro + escuro; baixo contraste → looks contínuos",
      "Acessórios: metais frios funcionam melhor (prata, grafite, ônix)",
    ],
    maquiagem: {
      base: "Fundo neutro ou frio",
      blush: "Rosa queimado, ameixa ou vinho suave",
      olhos: "Com profundidade (cinza, grafite, marrom frio, preto)",
      batom: "Tons frios e intensos",
      observacao: "👉 Evite maquiagem quente ou alaranjada.",
    },
    aplicacao: [
      "Aposte em cores escuras próximas ao rosto",
      "Use contraste com intenção (ex: preto + branco)",
      "Prefira metais frios (prata, grafite)",
      "Na maquiagem, pode usar mais definição",
      "Evite looks apagados",
    ],
    insight:
      "Você não precisa “equilibrar” sua intensidade. 👉 Você precisa expressá-la com clareza. A sua beleza não aparece quando você suaviza. Ela aparece quando você assume a sua profundidade.",
  },

  // =================================================================
  // R9 — PROFUNDA INTENSA (Neutra Profunda)
  // =================================================================
  {
    slug: "profunda-intensa",
    emoji: "🌑",
    title: "Profunda Intensa",
    subtitle: "Neutra Profunda",
    imagens: {
      capa: `${RESULTS_BASE}/profunda-intensa__capa.jpg`,
      sobreVoce: [
        `${RESULTS_BASE}/profunda-intensa__sobre-voce-01.jpg`,
        `${RESULTS_BASE}/profunda-intensa__sobre-voce-02.jpg`,
      ],
      pratica: [
        `${RESULTS_BASE}/profunda-intensa__pratica-01.jpg`,
        `${RESULTS_BASE}/profunda-intensa__pratica-02.jpg`,
      ],
      cores: {
        favoraveis: `${RESULTS_BASE}/profunda-intensa__cores-favoraveis-foto.jpg`,
        aEvitar: `${RESULTS_BASE}/profunda-intensa__cores-a-evitar-foto.jpg`,
        neutras: `${RESULTS_BASE}/profunda-intensa__cores-neutras-foto.jpg`,
        maquiagem: `${RESULTS_BASE}/profunda-intensa__maquiagem-foto.jpg`,
      },
    },
    seuResultado:
      "Sua cartela revela uma beleza forte, profunda e naturalmente equilibrada. Você sustenta cores intensas com facilidade — sejam elas mais quentes ou mais frias — porque o seu ponto central não está na temperatura. 👉 Está na profundidade e na presença. Sua imagem pede densidade, peso visual e sofisticação.",
    sobreVoce: [
      "Você tem uma característica rara: 👉 força + versatilidade real",
      "Mas aqui existe um erro comum que pode te confundir: você pode achar que, por ser neutra, qualquer cor funciona. E não funciona.",
      "Você provavelmente já percebeu que: cores muito claras te enfraquecem, tons suaves deixam sua imagem sem presença, cores “bonitinhas” não se sustentam em você.",
      "Por outro lado: tanto cores quentes quanto frias funcionam, desde que sejam profundas. 👉 O seu critério não é temperatura. É intensidade.",
      "Quando você usa cores profundas: seu rosto ganha estrutura, sua imagem transmite autoridade, sua beleza se sustenta sem esforço.",
    ],
    contraste: {
      intro:
        "Aqui está o ponto que refina completamente o seu resultado: 👉 você é profunda. Mas o seu contraste pode variar.",
      altoContrasteTitle:
        "Se você tem alto contraste (ex: pele clara + cabelo escuro)",
      altoContrasteText:
        "Você sustenta melhor combinações mais marcadas. Ex: preto + off-white, vinho + pele clara, contrastes visíveis. Sua imagem aceita contraste mais evidente sem pesar.",
      baixoContrasteTitle:
        "Se você tem contraste médio ou baixo (ex: pele, cabelo e olhos mais próximos)",
      baixoContrasteText:
        "O ideal é manter looks mais contínuos. Ex: combinações de tons profundos próximos entre si. Menos quebra, mais fluidez.",
      regraSimples:
        "👉 Resumo prático: alto contraste → pode brincar com contraste. Baixo contraste → melhor manter profundidade com suavidade de transição.",
    },
    coresFavoraveisIntro: "Prefira tons profundos, sofisticados e equilibrados:",
    coresFavoraveis: [
      "Preto",
      "Marrom escuro",
      "Azul profundo",
      "Vinho",
      "Verde escuro",
      "Cinza grafite",
      "Bordô",
      "Oliva escuro",
      "Petróleo",
    ],
    coresFavoraveisOutro: "👉 Essas cores sustentam a sua presença sem te apagar.",
    coresDesfavoraveisIntro: "Evite:",
    coresDesfavoraveis: [
      "Cores muito claras",
      "Tons muito vibrantes (puros demais)",
      "Cores extremamente frias ou extremamente quentes",
      "Tons suaves e apagados",
    ],
    coresDesfavoraveisOutro:
      "👉 Essas cores quebram o equilíbrio da sua imagem ou tiram a profundidade que te valoriza.",
    coresNeutrasIntro: "Essas cores não te prejudicam — mas também não destacam:",
    coresNeutras: [
      "Off-white neutro",
      "Marrom médio",
      "Azul médio neutro",
      "Oliva médio",
      "Rosé neutro",
    ],
    coresNeutrasOutro:
      "👉 Use quando quiser discrição, mas não como base principal de imagem.",
    comoPraticaIntro: "Aplicações práticas:",
    comoPraticaPattern: [
      "Priorize cores profundas próximas ao rosto",
      "Misture quente e frio com liberdade (desde que sejam intensos)",
      "Evite looks muito claros ou lavados",
      "Prefira composições que tenham peso visual",
      "Ajuste o contraste de acordo com seu nível pessoal",
    ],
    comoPraticaOutro: "👉 Sua imagem precisa parecer estruturada, não suave.",
    maquiagem: {
      base: "Neutra (nem muito amarelada, nem rosada demais)",
      blush: "Tons queimados ou profundos",
      olhos: "Marrons, ameixa, vinho, oliva",
      batom: "Intensos (nude profundo, vinho, rosado escuro)",
      observacao: "👉 Evite maquiagem leve demais — ela some em você.",
    },
    aplicacao: [
      "Prefira looks com presença",
      "Use cores profundas próximas ao rosto",
      "Misture quente e frio com liberdade",
      "Aposte em contraste moderado",
      "Acessórios podem variar",
    ],
    insight:
      "A sua beleza não está na delicadeza. 👉 Está na presença que se sustenta. E isso muda tudo. Você não precisa suavizar quem você é para se encaixar. 👉 Você precisa assumir a profundidade que já existe em você.",
  },
];

export function getResultBySlug(slug: string): Result | undefined {
  return results.find((r) => r.slug === slug);
}
