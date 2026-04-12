"use client";

import type { Question } from "@/data/questions";
import type { Answer } from "@/lib/quiz-logic";
import { OptionButton } from "./OptionButton";

interface QuestionCardProps {
  question: Question;
  selected?: Answer;
  onSelect: (answer: Answer) => void;
}

export function QuestionCard({
  question,
  selected,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="text-center mb-8">
        <span className="text-4xl mb-3 block">{question.emoji}</span>
        <h2 className="font-heading text-2xl md:text-3xl font-medium text-foreground tracking-wide">
          {question.title}
        </h2>
        <p className="mt-3 font-body text-base text-muted leading-relaxed">
          {question.text}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {(["A", "B", "C"] as const).map((opt) => (
          <OptionButton
            key={opt}
            label={opt}
            option={opt}
            text={question.options[opt]}
            selected={selected === opt}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
