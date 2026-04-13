"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/context/QuizContext";
import { computeResult } from "@/lib/quiz-logic";
import { finalizando } from "@/data/pages";
import { Button } from "@/components/Button";
import type { Answer } from "@/lib/quiz-logic";

export default function FinalizandoPage() {
  const router = useRouter();
  const { answers } = useQuiz();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleResult = async () => {
    setLoading(true);
    setError(false);

    const complete = answers as Record<number, Answer>;
    const slug = computeResult(complete);

    try {
      const res = await fetch("/api/quiz/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resultSlug: slug }),
      });
      if (!res.ok) throw new Error();
      router.push(`/resultado/${slug}`);
    } catch {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
      <div className="max-w-xl text-center">
        <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-8 rounded-full overflow-hidden">
          <Image
            src="/images/larissa-finalizando.jpg"
            alt="Larissa Alencar"
            fill
            className="object-cover object-top"
          />
        </div>

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
          <Button onClick={handleResult}>
            {loading ? "Carregando..." : finalizando.cta}
          </Button>
          {error && (
            <p className="mt-3 font-body text-sm text-red-600">
              Erro ao processar. Tente novamente.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
