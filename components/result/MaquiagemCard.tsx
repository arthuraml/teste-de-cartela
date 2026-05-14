import { ResultImage } from "./ResultImage";
import type { MaquiagemSection } from "@/data/results";

interface MaquiagemCardProps {
  data: MaquiagemSection;
  image: string;
}

const FIELD_LABELS: Record<keyof MaquiagemSection, string> = {
  pele: "Pele",
  base: "Base",
  blush: "Blush",
  olhos: "Olhos",
  batom: "Batom",
  iluminador: "Iluminador",
  contorno: "Contorno",
  observacao: "",
};

export function MaquiagemCard({ data, image }: MaquiagemCardProps) {
  const fields: Array<keyof MaquiagemSection> = [
    "pele",
    "base",
    "blush",
    "olhos",
    "batom",
    "iluminador",
    "contorno",
  ];
  const visibleFields = fields.filter((f) => data[f]);

  return (
    <section className="bg-surface/30 py-12 md:py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-medium text-foreground mb-8 tracking-wide">
          💄 Maquiagem ideal
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <ResultImage
            src={image}
            alt="Maquiagem ideal"
            maxWidth="max-w-md"
          />
          <div>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              {visibleFields.map((field) => (
                <div key={field}>
                  <dt className="font-body text-xs uppercase tracking-wider text-muted mb-1">
                    {FIELD_LABELS[field]}
                  </dt>
                  <dd className="font-body text-sm md:text-[15px] text-foreground leading-relaxed">
                    {data[field]}
                  </dd>
                </div>
              ))}
            </dl>
            {data.observacao && (
              <p className="mt-6 font-heading text-base italic text-foreground leading-relaxed">
                {data.observacao}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
