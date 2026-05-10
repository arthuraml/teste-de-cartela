import Image from "next/image";
import { Button } from "./Button";
import { PurchaseCta } from "./PurchaseCta";
import { homeHero } from "@/data/pages";

interface SplitHeroProps {
  hasSession: boolean;
}

const GOLD = "#D9B889";

interface HeroTextProps {
  hasSession: boolean;
  hideCta?: boolean;
}

function HeroText({ hasSession, hideCta = false }: HeroTextProps) {
  return (
    <>
      <h1 className="font-heading">
        <span className="block text-base md:text-lg font-normal text-background lowercase">
          {homeHero.titleSmall}
        </span>
        <span
          className="block mt-2 text-3xl md:text-[44px] lg:text-[52px] font-medium italic leading-[1.05] lowercase"
          style={{ color: GOLD }}
        >
          {homeHero.titleLarge}
        </span>
      </h1>

      <div
        className="mt-5 w-20 h-px"
        style={{ backgroundColor: GOLD, opacity: 0.6 }}
      />

      <div className="mt-5 space-y-3">
        {homeHero.paragraphs.map((p, i) => (
          <p
            key={i}
            className="font-body text-sm md:text-[15px] lg:text-base text-background/90 leading-relaxed"
          >
            {p}
          </p>
        ))}
      </div>

      <p className="mt-5 font-body text-sm md:text-[15px] lg:text-base leading-relaxed font-semibold text-background">
        {homeHero.closingPrefix}
        <span style={{ color: GOLD }}>{homeHero.closingHighlight}</span>
        {homeHero.closingSuffix}
      </p>

      <p
        className="mt-3 font-body text-sm md:text-[15px] lg:text-base leading-relaxed font-semibold"
        style={{ color: GOLD }}
      >
        {homeHero.closingQuestion}
      </p>

      {!hideCta && (
        <div className="mt-7">
          {hasSession ? (
            <Button
              href="/instrucoes"
              className="text-xs md:text-sm uppercase tracking-[0.18em] px-8 py-4 animate-pulse-cta"
            >
              {homeHero.cta}
            </Button>
          ) : (
            <PurchaseCta
              label={homeHero.cta}
              className="text-xs md:text-sm uppercase tracking-[0.18em] px-8 py-4 animate-pulse-cta"
            />
          )}
        </div>
      )}
    </>
  );
}

export function SplitHero({ hasSession }: SplitHeroProps) {
  return (
    <>
      {/* Desktop / tablet: full image as hero with text overlay on dark left portion */}
      <section
        className="hidden md:block relative w-full bg-primary overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <Image
          src={homeHero.heroImage}
          alt="Larissa Alencar"
          fill
          className="object-contain object-right"
          sizes="100vw"
          priority
        />
        {/* Dark gradient on the left — solid bordô fading to transparent for text legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(43,15,20,1) 0%, rgba(43,15,20,1) 32%, rgba(43,15,20,0.85) 42%, rgba(43,15,20,0.4) 55%, rgba(43,15,20,0) 70%)",
          }}
        />
        <div className="absolute inset-0">
          <div className="max-w-[1400px] mx-auto h-full flex flex-col justify-center py-[5vh] px-8 lg:px-14">
            <div className="w-full max-w-[540px] lg:max-w-[600px]">
              <HeroText hasSession={hasSession} />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile: image on top + text content + sticky bottom CTA bar */}
      <section className="md:hidden bg-primary">
        <div className="relative w-full" style={{ aspectRatio: "3/2" }}>
          <Image
            src={homeHero.heroImage}
            alt="Larissa Alencar"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
        <div className="px-6 pt-8 pb-32">
          <HeroText hasSession={hasSession} hideCta />
        </div>
      </section>

      {/* Mobile sticky CTA bar — always visible above the fold */}
      <div
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-primary/95 backdrop-blur-md border-t border-cta/30 px-4 pt-4"
        style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      >
        {hasSession ? (
          <Button
            href="/instrucoes"
            className="block w-full text-sm uppercase tracking-[0.18em] py-4"
          >
            {homeHero.cta}
          </Button>
        ) : (
          <PurchaseCta
            label={homeHero.cta}
            className="block w-full text-sm uppercase tracking-[0.18em] py-4"
          />
        )}
      </div>
    </>
  );
}
