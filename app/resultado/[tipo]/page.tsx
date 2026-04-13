import { results, getResultBySlug } from "@/data/results";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { EmailResultForm } from "@/components/EmailResultForm";

export function generateStaticParams() {
  return results.map((r) => ({ tipo: r.slug }));
}

export default async function ResultadoPage(
  props: { params: Promise<{ tipo: string }> }
) {
  const { tipo } = await props.params;
  const result = getResultBySlug(tipo);

  if (!result) notFound();

  return (
    <main className="min-h-screen bg-background">
      <section className="bg-primary py-16 md:py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-4xl block mb-4">{result.emoji}</span>
          <p className="font-body text-sm text-surface/80 uppercase tracking-widest mb-2">
            Seu resultado
          </p>
          <h1 className="font-heading text-3xl md:text-[44px] font-medium leading-[1.2] tracking-wide text-background">
            {result.title}
          </h1>
          <p className="mt-2 font-body text-base text-surface">
            ({result.subtitle})
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="font-body text-base text-foreground leading-relaxed">
            {result.seuResultado}
          </p>
        </div>
      </section>

      <section className="bg-surface/40 py-12 md:py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-xl md:text-2xl font-medium text-foreground mb-6">
            Sobre você
          </h2>
          {result.sobreVoce.map((p, i) => (
            <p
              key={i}
              className="font-body text-base text-foreground leading-relaxed mb-4"
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-xl md:text-2xl font-medium text-foreground mb-6">
            Cores que mais te valorizam
          </h2>
          <div className="flex flex-wrap gap-3">
            {result.coresFavoraveis.map((cor) => (
              <span
                key={cor}
                className="font-body text-sm bg-surface px-4 py-2 rounded-full text-foreground"
              >
                {cor}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface/40 py-12 md:py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-xl md:text-2xl font-medium text-foreground mb-6">
            Cores que podem te desfavorecer
          </h2>
          <div className="flex flex-wrap gap-3">
            {result.coresDesfavoraveis.map((cor) => (
              <span
                key={cor}
                className="font-body text-sm border border-muted/30 px-4 py-2 rounded-full text-muted"
              >
                {cor}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-xl md:text-2xl font-medium text-foreground mb-6">
            Como aplicar no seu dia a dia
          </h2>
          <ul className="space-y-3">
            {result.aplicacao.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-body text-base text-foreground"
              >
                <span className="text-cta mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <EmailResultForm resultSlug={result.slug} resultTitle={result.title} />
        </div>
      </section>

      <section className="bg-primary py-12 md:py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-heading text-lg md:text-xl font-medium text-background italic leading-relaxed">
            {result.insight}
          </p>
        </div>
      </section>
    </main>
  );
}
