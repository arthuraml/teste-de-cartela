"use client";

import Image from "next/image";
import type { Question } from "@/data/questions";
import { OptionButton } from "./OptionButton";

interface QuestionCardProps {
  question: Question;
  selected?: string;
  onSelect: (id: string) => void;
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

      {question.illustrationImage && (
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
          <Image
            src={question.illustrationImage}
            alt={question.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="flex flex-col gap-3">
        {question.options.map((opt) => (
          <OptionButton
            key={opt.id}
            option={opt}
            selected={selected === opt.id}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
