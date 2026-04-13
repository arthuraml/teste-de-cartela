"use client";

import Image from "next/image";
import type { Answer } from "@/lib/quiz-logic";

interface OptionButtonProps {
  label: string;
  option: Answer;
  text: string;
  selected: boolean;
  onSelect: (option: Answer) => void;
  image?: string;
}

export function OptionButton({
  label,
  option,
  text,
  selected,
  onSelect,
  image,
}: OptionButtonProps) {
  return (
    <button
      onClick={() => onSelect(option)}
      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer font-body ${
        selected
          ? "border-cta bg-cta/10 shadow-[0_2px_8px_rgba(198,167,123,0.2)]"
          : "border-surface bg-white hover:border-cta/50 hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
      }`}
    >
      {image && (
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-3">
          <Image
            src={image}
            alt={text}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="flex items-center">
        <span
          className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-semibold mr-3 flex-shrink-0 ${
            selected
              ? "bg-cta text-cta-text"
              : "bg-surface text-foreground"
          }`}
        >
          {label}
        </span>
        <span className="text-foreground">{text}</span>
      </div>
    </button>
  );
}
