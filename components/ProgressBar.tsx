"use client";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between mb-2 font-body text-sm text-muted">
        <span>Pergunta {current} de {total}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-2 rounded-full bg-surface overflow-hidden">
        <div
          className="h-full rounded-full bg-cta transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
