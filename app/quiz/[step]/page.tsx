"use client";

import { useParams, useRouter } from "next/navigation";
import { useQuiz } from "@/context/QuizContext";
import { questions } from "@/data/questions";
import { QuestionCard } from "@/components/QuestionCard";
import { ProgressBar } from "@/components/ProgressBar";

export default function QuizStepPage() {
  const params = useParams<{ step: string }>();
  const router = useRouter();
  const { answers, setAnswer, isHydrated } = useQuiz();

  const step = Number(params.step);
  const question = questions.find((q) => q.number === step);

  if (!question || !isHydrated) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-cta border-t-transparent animate-spin" />
      </main>
    );
  }

  const handleSelect = (answer: string) => {
    setAnswer(step, answer);

    setTimeout(() => {
      if (step === 8) {
        router.push("/quiz/transicao");
      } else if (step === 11) {
        router.push("/quiz/finalizando");
      } else {
        router.push(`/quiz/${step + 1}`);
      }
    }, 350);
  };

  return (
    <main className="min-h-screen bg-background py-8 md:py-16 px-6">
      <div className="mb-10">
        <ProgressBar current={step} total={11} />
      </div>

      <QuestionCard
        question={question}
        selected={answers[step]}
        onSelect={handleSelect}
      />
    </main>
  );
}
