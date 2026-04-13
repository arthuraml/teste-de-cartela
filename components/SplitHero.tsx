import Image from "next/image";
import { Button } from "./Button";
import { PurchaseCta } from "./PurchaseCta";
import { homeHero } from "@/data/pages";

interface SplitHeroProps {
  hasSession: boolean;
}

export function SplitHero({ hasSession }: SplitHeroProps) {
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
          <h1 className="font-heading text-2xl md:text-[36px] font-medium leading-[1.2] tracking-wide text-background">
            {homeHero.title}
          </h1>

          {homeHero.paragraphs.map((p, i) => (
            <p
              key={i}
              className="mt-4 font-body text-[15px] md:text-base text-surface/90 leading-relaxed"
            >
              {p}
            </p>
          ))}

          <div className="mt-8">
            {hasSession ? (
              <Button href="/instrucoes">{homeHero.cta}</Button>
            ) : (
              <PurchaseCta label={homeHero.cta} />
            )}
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
          <div className="relative w-64 h-80 md:w-80 md:h-[480px] rounded-2xl overflow-hidden">
            <Image
              src={homeHero.heroImage}
              alt="Larissa Alencar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
