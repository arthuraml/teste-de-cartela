import Image from "next/image";
import { notFound } from "next/navigation";
import { results, getResultBySlug } from "@/data/results";
import { Button } from "@/components/Button";
import { EmailResultForm } from "@/components/EmailResultForm";
import { ResultHero } from "@/components/result/ResultHero";
import { ImageTextRow } from "@/components/result/ImageTextRow";
import { ImageGrid } from "@/components/result/ImageGrid";
import { PraticaCard } from "@/components/result/PraticaCard";
import { ContrasteCard } from "@/components/result/ContrasteCard";
import { MaquiagemCard } from "@/components/result/MaquiagemCard";

const GOLD = "#D9B889";

export function generateStaticParams() {
  return results.map((r) => ({ tipo: r.slug }));
}

export default async function ResultadoPage(props: {
  params: Promise<{ tipo: string }>;
}) {
  const { tipo } = await props.params;
  const result = getResultBySlug(tipo);

  if (!result) notFound();

  const hasPraticaSimple =
    result.imagens.pratica && result.imagens.pratica.length > 0;
  const hasPraticaCards =
    result.praticaCards && result.praticaCards.length > 0;

  return (
    <main className="min-h-screen bg-background">
      {/* 1. Hero */}
      <ResultHero
        image={result.imagens.capa}
        emoji={result.emoji}
        title={result.title}
        subtitle={result.subtitle}
      />

      {/* 2. Seu resultado */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="font-heading text-lg md:text-xl italic text-foreground leading-relaxed">
            {result.seuResultado}
          </p>
        </div>
      </section>

      {/* 3. (R5) Foto extra após "Seu resultado" */}
      {result.imagens.seuResultadoExtra && (
        <section className="px-6 pb-4">
          <div className="max-w-3xl mx-auto">
            <div
              className="relative w-full rounded-2xl overflow-hidden bg-surface/40"
              style={{ aspectRatio: "16/10" }}
            >
              <Image
                src={result.imagens.seuResultadoExtra}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 720px"
              />
            </div>
          </div>
        </section>
      )}

      {/* 4. Sobre você */}
      <section className="bg-surface/30 py-12 md:py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-medium text-foreground mb-8 tracking-wide">
            💬 Sobre você
          </h2>
          {result.imagens.sobreVoce && result.imagens.sobreVoce.length > 0 && (
            <div className="mb-8">
              <ImageGrid
                images={result.imagens.sobreVoce}
                aspect={
                  result.imagens.sobreVoce.length === 1 ? "16/10" : "3/4"
                }
              />
            </div>
          )}
          <div className="max-w-2xl space-y-4">
            {result.sobreVoce.map((p, i) => (
              <p
                key={i}
                className="font-body text-base md:text-[17px] text-foreground leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Como isso aparece na prática */}
      {(hasPraticaSimple || hasPraticaCards) && (
        <section className="py-12 md:py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-foreground mb-8 tracking-wide">
              👗 Como isso aparece na prática
            </h2>

            {/* Caso simples (1 bloco): grid de fotos + texto */}
            {hasPraticaSimple && !hasPraticaCards && (
              <>
                <ImageGrid
                  images={result.imagens.pratica!}
                  aspect="3/4"
                />
                <div className="mt-8 max-w-2xl space-y-4">
                  {result.comoPraticaIntro && (
                    <p className="font-body text-base md:text-[17px] text-foreground leading-relaxed">
                      {result.comoPraticaIntro}
                    </p>
                  )}
                  {result.comoPraticaPattern && (
                    <ul className="space-y-2 mt-3">
                      {result.comoPraticaPattern.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 font-body text-base text-foreground"
                        >
                          <span
                            style={{ color: GOLD }}
                            className="mt-1 flex-shrink-0"
                          >
                            ✓
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {result.comoPraticaOutro && (
                    <p className="font-heading text-base md:text-lg italic text-foreground leading-relaxed mt-4">
                      {result.comoPraticaOutro}
                    </p>
                  )}
                </div>
              </>
            )}

            {/* Caso R6: 4 cards distintos */}
            {hasPraticaCards && (
              <div className="grid md:grid-cols-2 gap-6">
                {result.praticaCards!.map((card, i) => (
                  <PraticaCard
                    key={i}
                    title={card.title}
                    image={card.image}
                    bullets={card.bullets}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 6. Cores que mais te valorizam */}
      <ImageTextRow
        image={result.imagens.cores.favoraveis}
        imageAlt="Cores favoráveis"
        title="🎨 Cores que mais te valorizam"
        bg="surface"
        imageAspect="4/3"
      >
        {result.coresFavoraveisIntro && (
          <p className="font-body text-base text-foreground leading-relaxed mb-4">
            {result.coresFavoraveisIntro}
          </p>
        )}
        <div className="flex flex-wrap gap-2 mb-4">
          {result.coresFavoraveis.map((cor) => (
            <span
              key={cor}
              className="font-body text-sm bg-white px-4 py-2 rounded-full text-foreground border border-cta/20"
            >
              {cor}
            </span>
          ))}
        </div>
        {result.coresFavoraveisOutro && (
          <p className="font-body text-sm text-muted leading-relaxed mt-3">
            {result.coresFavoraveisOutro}
          </p>
        )}
      </ImageTextRow>

      {/* 7. Cores que podem te desfavorecer */}
      <ImageTextRow
        image={result.imagens.cores.aEvitar}
        imageAlt="Cores a evitar"
        title="⚠️ Cores que podem te desfavorecer"
        bg="light"
        reverse
        imageAspect="4/3"
      >
        {result.coresDesfavoraveisIntro && (
          <p className="font-body text-base text-foreground leading-relaxed mb-4">
            {result.coresDesfavoraveisIntro}
          </p>
        )}
        <div className="flex flex-wrap gap-2 mb-4">
          {result.coresDesfavoraveis.map((cor) => (
            <span
              key={cor}
              className="font-body text-sm border border-muted/30 px-4 py-2 rounded-full text-muted"
            >
              {cor}
            </span>
          ))}
        </div>
        {result.coresDesfavoraveisOutro && (
          <p className="font-body text-sm text-muted leading-relaxed mt-3">
            {result.coresDesfavoraveisOutro}
          </p>
        )}
      </ImageTextRow>

      {/* 8. Cores neutras (uso estratégico) */}
      <ImageTextRow
        image={result.imagens.cores.neutras}
        imageAlt="Cores neutras"
        title="⚖️ Cores neutras (uso estratégico)"
        bg="surface"
        imageAspect="4/3"
      >
        {result.coresNeutrasIntro && (
          <p className="font-body text-base text-foreground leading-relaxed mb-4">
            {result.coresNeutrasIntro}
          </p>
        )}
        {result.coresNeutras && result.coresNeutras.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {result.coresNeutras.map((cor) => (
              <span
                key={cor}
                className="font-body text-sm bg-white px-4 py-2 rounded-full text-foreground border border-muted/20"
              >
                {cor}
              </span>
            ))}
          </div>
        )}
        {result.coresNeutrasOutro && (
          <p className="font-body text-sm text-muted leading-relaxed mt-3">
            {result.coresNeutrasOutro}
          </p>
        )}
      </ImageTextRow>

      {/* 9. Entenda seu contraste (R4, R5, R6, R8, R9) */}
      {result.contraste && <ContrasteCard data={result.contraste} />}

      {/* 10. Maquiagem ideal */}
      {result.maquiagem && (
        <MaquiagemCard
          data={result.maquiagem}
          image={result.imagens.cores.maquiagem}
        />
      )}

      {/* 11. Como aplicar no seu dia a dia */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-medium text-foreground mb-6 tracking-wide">
            👗 Como aplicar no seu dia a dia
          </h2>
          <ul className="space-y-3">
            {result.aplicacao.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-body text-base md:text-[17px] text-foreground"
              >
                <span style={{ color: GOLD }} className="mt-1 flex-shrink-0">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 12. Insight importante */}
      <section className="bg-primary py-14 md:py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-xs md:text-sm uppercase tracking-[0.2em] text-background/70 mb-4">
            💡 Insight importante
          </p>
          <p
            className="font-heading text-xl md:text-2xl italic leading-relaxed"
            style={{ color: GOLD }}
          >
            {result.insight}
          </p>
        </div>
      </section>

      {/* 13. EmailResultForm */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <EmailResultForm
            resultSlug={result.slug}
            resultTitle={result.title}
          />
        </div>
      </section>

      {/* 14. CTA Refazer (mantém) */}
      <section className="bg-surface/40 py-10 px-6">
        <div className="max-w-md mx-auto text-center">
          <Button href="/" variant="ghost" className="text-xs uppercase tracking-[0.18em]">
            Refazer o teste
          </Button>
        </div>
      </section>
    </main>
  );
}
