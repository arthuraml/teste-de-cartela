import Image from "next/image";
import { Button } from "./Button";
import { PurchaseCta } from "./PurchaseCta";
import { homeHero } from "@/data/pages";

interface SplitHeroProps {
  hasSession: boolean;
}

export function SplitHero({ hasSession }: SplitHeroProps) {
  return (
    <section className="relative w-full min-h-[680px] md:min-h-[760px] overflow-hidden bg-primary">
      <Image
        src={homeHero.heroImage}
        alt="Larissa Alencar"
        fill
        className="object-cover object-[70%_top] md:object-top"
        priority
      />

      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(43,15,20,0.92) 0%, rgba(43,15,20,0.78) 28%, rgba(43,15,20,0.25) 55%, rgba(43,15,20,0) 75%)",
        }}
      />

      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(43,15,20,0.92) 0%, rgba(43,15,20,0.55) 35%, rgba(43,15,20,0.85) 80%, rgba(43,15,20,0.95) 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 min-h-[680px] md:min-h-[760px] flex items-center">
        <div className="max-w-md">
          <h1 className="font-heading">
            <span className="block text-base md:text-lg font-normal text-background/95 lowercase">
              {homeHero.titleSmall}
            </span>
            <span
              className="block mt-2 text-3xl md:text-5xl font-medium italic leading-[1.1] lowercase"
              style={{ color: "#D9B889" }}
            >
              {homeHero.titleLarge}
            </span>
          </h1>

          <div className="mt-7 space-y-4">
            {homeHero.paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-body text-[14px] md:text-[15px] text-background/90 leading-relaxed"
              >
                {p}
              </p>
            ))}
            <p className="font-body text-[14px] md:text-[15px] font-semibold text-background leading-relaxed">
              {homeHero.paragraphHighlighted}
            </p>
          </div>

          <div className="mt-8">
            {hasSession ? (
              <Button
                href="/instrucoes"
                className="text-sm uppercase tracking-wider px-8 py-4 animate-pulse-cta"
              >
                {homeHero.cta}
              </Button>
            ) : (
              <PurchaseCta
                label={homeHero.cta}
                className="text-sm uppercase tracking-wider px-8 py-4 animate-pulse-cta"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
