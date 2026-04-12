export type Answer = "A" | "B" | "C";
export type Temperature = "QUENTE" | "FRIA" | "NEUTRA";
export type Depth = "CLARA" | "MEDIA" | "PROFUNDA";
export type ResultSlug =
  | "clara-iluminada"
  | "clara-delicada"
  | "clara-equilibrada"
  | "harmonia-natural"
  | "elegancia-suave"
  | "equilibrio-sofisticado"
  | "profunda-radiante"
  | "profunda-marcante"
  | "profunda-intensa";

const RESULT_MAP: Record<Temperature, Record<Depth, ResultSlug>> = {
  QUENTE: {
    CLARA: "clara-iluminada",
    MEDIA: "harmonia-natural",
    PROFUNDA: "profunda-radiante",
  },
  FRIA: {
    CLARA: "clara-delicada",
    MEDIA: "elegancia-suave",
    PROFUNDA: "profunda-marcante",
  },
  NEUTRA: {
    CLARA: "clara-equilibrada",
    MEDIA: "equilibrio-sofisticado",
    PROFUNDA: "profunda-intensa",
  },
};

export function computeTemperature(answers: Answer[]): Temperature {
  let quente = 0;
  let fria = 0;
  let neutra = 0;

  for (const a of answers) {
    if (a === "A") quente++;
    else if (a === "B") fria++;
    else neutra++;
  }

  if (neutra >= 4) return "NEUTRA";

  if (quente > fria && quente > neutra) return "QUENTE";
  if (fria > quente && fria > neutra) return "FRIA";
  if (neutra > quente && neutra > fria) return "NEUTRA";

  if (quente === fria) return "NEUTRA";
  if (quente === neutra) return "QUENTE";
  if (fria === neutra) return "FRIA";

  return "NEUTRA";
}

export function computeDepth(answers: Answer[]): Depth {
  let clara = 0;
  let media = 0;
  let profunda = 0;

  for (const a of answers) {
    if (a === "A") clara++;
    else if (a === "B") media++;
    else profunda++;
  }

  if (clara > media && clara > profunda) return "CLARA";
  if (profunda > clara && profunda > media) return "PROFUNDA";
  if (media > clara && media > profunda) return "MEDIA";

  return "MEDIA";
}

export function computeResult(
  answers: Record<number, Answer>
): ResultSlug {
  const tempAnswers = Array.from({ length: 7 }, (_, i) => answers[i + 1]);
  const depthAnswers = Array.from({ length: 7 }, (_, i) => answers[i + 8]);

  const temperature = computeTemperature(tempAnswers);
  const depth = computeDepth(depthAnswers);

  return RESULT_MAP[temperature][depth];
}
