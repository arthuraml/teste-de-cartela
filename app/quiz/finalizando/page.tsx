"use client";

import { useRouter } from "next/navigation";
import { useQuiz } from "@/context/QuizContext";
import { computeResult } from "@/lib/quiz-logic";
import { finalizando } from "@/data/pages";
import { Button } from "@/components/Button";
import type { Answer } from "@/lib/quiz-logic";

export default function FinalizandoPage() {
  const router = useRouter();
  const { answers } = useQuiz();

  const handleResult = () => {
    const complete = answers as Record<number, Answer>;
    const slug = computeResult(complete);
    router.push(`/resultado/${slug}`);
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-medium text-foreground tracking-wide leading-tight">
          {finalizando.title}
        </h2>

        {finalizando.paragraphs.map((p, i) => (
          <p
            key={i}
            className="mt-4 font-body text-base text-muted leading-relaxed"
          >
            {p}
          </p>
        ))}

        <p className="mt-6 font-heading text-lg md:text-xl font-medium text-foreground italic">
          {finalizando.highlight}
        </p>

        <div className="mt-8">
          <Button onClick={handleResult}>{finalizando.cta}</Button>
        </div>
      </div>
    </main>
  );
}
