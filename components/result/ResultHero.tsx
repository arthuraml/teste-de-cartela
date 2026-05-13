import Image from "next/image";

interface ResultHeroProps {
  image: string;
  emoji: string;
  title: string;
  subtitle: string;
}

export function ResultHero({ image, emoji, title, subtitle }: ResultHeroProps) {
  return (
    <section className="relative w-full bg-primary overflow-hidden">
      <div className="relative w-full" style={{ aspectRatio: "3/2" }}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(43,15,20,0.15) 0%, rgba(43,15,20,0.55) 65%, rgba(43,15,20,0.92) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 px-6 md:px-12 pb-10 md:pb-14 max-w-[1200px] mx-auto">
          <p className="font-body text-xs md:text-sm uppercase tracking-[0.18em] text-background/85 mb-2">
            Seu resultado
          </p>
          <div className="flex items-center gap-3">
            <span className="text-3xl md:text-4xl">{emoji}</span>
            <h1 className="font-heading text-3xl md:text-[44px] font-medium leading-[1.05] tracking-wide text-background">
              {title}
            </h1>
          </div>
          <p className="mt-1 font-body text-sm md:text-base italic text-[#D9B889]">
            ({subtitle})
          </p>
        </div>
      </div>
    </section>
  );
}
