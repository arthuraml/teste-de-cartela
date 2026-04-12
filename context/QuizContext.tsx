"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Answer } from "@/lib/quiz-logic";

const STORAGE_KEY = "teste-cartela-quiz-v1";

interface QuizState {
  answers: Partial<Record<number, Answer>>;
  setAnswer: (q: number, a: Answer) => void;
  reset: () => void;
  isHydrated: boolean;
}

const QuizContext = createContext<QuizState | null>(null);

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [answers, setAnswers] = useState<Partial<Record<number, Answer>>>({});
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setAnswers(JSON.parse(stored));
    } catch {}
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    }
  }, [answers, isHydrated]);

  const setAnswer = useCallback((q: number, a: Answer) => {
    setAnswers((prev) => ({ ...prev, [q]: a }));
  }, []);

  const reset = useCallback(() => {
    setAnswers({});
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <QuizContext.Provider value={{ answers, setAnswer, reset, isHydrated }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz must be used within QuizProvider");
  return ctx;
}
