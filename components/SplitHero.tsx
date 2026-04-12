import { Button } from "./Button";
import { BenefitList } from "./BenefitList";
import { ColorSwatchStrip } from "./ColorSwatchStrip";
import { homeHero } from "@/data/pages";

export function SplitHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #2B0F14 0%, #2B0F14 60%, #F7F7FA 100%)",
      }}
    >
      <div className="max-w-[1120px] mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10 order-2 md:order-1">
          <h1 className="font-heading text-3xl md:text-[44px] font-medium leading-[1.2] tracking-wide text-background">
            {homeHero.title}{" "}
            <em className="italic">{homeHero.titleEmphasis}</em>
          </h1>

          <p className="mt-4 font-body text-base md:text-lg text-surface leading-relaxed">
            {homeHero.subtitle}
          </p>

          <div className="mt-8">
            <BenefitList items={homeHero.benefits} dark />
          </div>

          <div className="mt-8">
            <Button href="/instrucoes">{homeHero.cta}</Button>
          </div>

          <p className="mt-4 font-body text-sm text-muted">
            {homeHero.microcopy}
          </p>

          <div className="mt-6">
            <ColorSwatchStrip colors={homeHero.swatches} />
          </div>
        </div>

        <div className="relative order-1 md:order-2 flex justify-center">
          <div
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(198,167,123,0.15) 0%, transparent 70%)",
            }}
          />
          <div className="relative w-64 h-80 md:w-80 md:h-[440px] rounded-2xl bg-surface/20 flex items-center justify-center">
            <span className="font-body text-sm text-background/60">
              Foto hero
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
