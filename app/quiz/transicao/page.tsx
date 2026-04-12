import { transicao } from "@/data/pages";
import { Button } from "@/components/Button";

export default function TransicaoPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-medium text-foreground tracking-wide leading-tight">
          {transicao.title}
        </h2>

        {transicao.paragraphs.map((p, i) => (
          <p
            key={i}
            className="mt-4 font-body text-base text-muted leading-relaxed"
          >
            {p}
          </p>
        ))}

        <div className="mt-8">
          <Button href="/quiz/8">{transicao.cta}</Button>
        </div>
      </div>
    </main>
  );
}
