"use client";

import Image from "next/image";
import type { QuestionOption } from "@/data/questions";

interface OptionButtonProps {
  option: QuestionOption;
  selected: boolean;
  onSelect: (id: string) => void;
}

export function OptionButton({ option, selected, onSelect }: OptionButtonProps) {
  return (
    <button
      onClick={() => onSelect(option.id)}
      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer font-body ${
        selected
          ? "border-cta bg-cta/10 shadow-[0_2px_8px_rgba(198,167,123,0.2)]"
          : "border-surface bg-white hover:border-cta/50 hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
      }`}
    >
      {option.image && (
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-3">
          <Image
            src={option.image}
            alt={option.label}
            fill
            className="object-cover"
            style={{ objectPosition: option.objectPosition ?? "center" }}
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
          {option.id}
        </span>
        <span className="text-foreground">{option.label}</span>
      </div>
    </button>
  );
}
