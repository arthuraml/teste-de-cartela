import type { ContrasteSection } from "@/data/results";

const GOLD = "#D9B889";

interface ContrasteCardProps {
  data: ContrasteSection;
}

export function ContrasteCard({ data }: ContrasteCardProps) {
  return (
    <section className="bg-primary py-14 md:py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p
          className="font-body text-xs md:text-sm uppercase tracking-[0.2em] mb-3"
          style={{ color: GOLD }}
        >
          Entenda seu contraste
        </p>
        <p className="font-body text-base md:text-lg text-background/90 leading-relaxed">
          {data.intro}
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-background/5 border border-background/10 rounded-2xl p-6">
            <h3
              className="font-heading text-base md:text-lg font-medium mb-3 leading-snug"
              style={{ color: GOLD }}
            >
              {data.altoContrasteTitle}
            </h3>
            <p className="font-body text-sm text-background/90 leading-relaxed">
              {data.altoContrasteText}
            </p>
          </div>
          <div className="bg-background/5 border border-background/10 rounded-2xl p-6">
            <h3
              className="font-heading text-base md:text-lg font-medium mb-3 leading-snug"
              style={{ color: GOLD }}
            >
              {data.baixoContrasteTitle}
            </h3>
            <p className="font-body text-sm text-background/90 leading-relaxed">
              {data.baixoContrasteText}
            </p>
          </div>
        </div>

        <p
          className="mt-8 font-heading text-base md:text-lg italic text-center leading-relaxed"
          style={{ color: GOLD }}
        >
          {data.regraSimples}
        </p>
      </div>
    </section>
  );
}
