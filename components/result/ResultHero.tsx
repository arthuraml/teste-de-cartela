interface ResultHeroProps {
  emoji: string;
  title: string;
  subtitle: string;
}

const GOLD = "#D9B889";

/**
 * Faixa Bordeaux compacta com "Seu Resultado" + nome da cartela.
 * Sem imagem — a imagem principal é renderizada logo abaixo na page.
 */
export function ResultHero({ emoji, title, subtitle }: ResultHeroProps) {
  return (
    <section className="bg-primary px-6 py-10 md:py-14">
      <div className="max-w-3xl mx-auto text-center">
        <p
          className="font-body text-xs md:text-sm uppercase tracking-[0.22em] text-background/85"
          style={{ letterSpacing: "0.22em" }}
        >
          Seu Resultado
        </p>
        <div className="mt-3 flex items-center justify-center gap-3">
          <span className="text-3xl md:text-4xl">{emoji}</span>
          <h1 className="font-heading text-3xl md:text-[44px] font-medium leading-[1.05] tracking-wide text-background">
            {title}
          </h1>
        </div>
        <p
          className="mt-2 font-body text-sm md:text-base italic"
          style={{ color: GOLD }}
        >
          ({subtitle})
        </p>
      </div>
    </section>
  );
}
