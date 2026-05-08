import { questions } from "@/data/questions";

export type Answer = string;
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

export function computeTemperature(answers: Record<number, Answer>): Temperature {
  const counts: Record<Temperature, number> = { QUENTE: 0, FRIA: 0, NEUTRA: 0 };

  for (const q of questions) {
    if (q.block !== 1) continue;
    const ans = answers[q.number];
    if (!ans) continue;
    const opt = q.options.find((o) => o.id === ans);
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

export function computeDepth(answers: Record<number, Answer>): Depth {
  let total = 0;

  for (const q of questions) {
    if (q.block !== 2) continue;
    const ans = answers[q.number];
    if (!ans) continue;
    const opt = q.options.find((o) => o.id === ans);
    const weight = opt?.weight ?? 0;
    const multiplier = q.weightMultiplier ?? 1;
    total += weight * multiplier;
  }

  if (total <= 10) return "CLARA";
  if (total <= 24) return "MEDIA";
  return "PROFUNDA";
}

export function computeResult(answers: Record<number, Answer>): ResultSlug {
  const temperature = computeTemperature(answers);
  const depth = computeDepth(answers);
  return RESULT_MAP[temperature][depth];
}
