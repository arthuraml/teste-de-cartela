import Image from "next/image";

interface PraticaCardProps {
  title?: string;
  image: string;
  bullets: string[];
}

export function PraticaCard({ title, image, bullets }: PraticaCardProps) {
  return (
    <div className="bg-background rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] overflow-hidden">
      <div
        className="relative w-full bg-surface/40"
        style={{ aspectRatio: "4/3" }}
      >
        <Image
          src={image}
          alt={title || ""}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 480px"
        />
      </div>
      <div className="p-6 md:p-7">
        {title && (
          <h3 className="font-heading text-lg md:text-xl font-medium text-foreground mb-3 tracking-wide">
            {title}
          </h3>
        )}
        <ul className="space-y-2">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-2 font-body text-sm md:text-[15px] text-foreground leading-relaxed"
            >
              <span className="text-cta mt-1 flex-shrink-0">✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
