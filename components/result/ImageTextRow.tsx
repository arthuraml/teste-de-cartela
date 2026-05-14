import { ResultImage } from "./ResultImage";

interface ImageTextRowProps {
  image: string;
  imageAlt?: string;
  reverse?: boolean;
  bg?: "light" | "surface" | "primary";
  title?: string;
  children: React.ReactNode;
}

const BG_CLASSES: Record<NonNullable<ImageTextRowProps["bg"]>, string> = {
  light: "bg-background",
  surface: "bg-surface/30",
  primary: "bg-primary text-background",
};

/**
 * Seção com imagem + texto lado a lado (em desktop) ou empilhada (em mobile).
 * A imagem aparece sempre completa, respeitando proporção natural.
 */
export function ImageTextRow({
  image,
  imageAlt = "",
  reverse = false,
  bg = "light",
  title,
  children,
}: ImageTextRowProps) {
  return (
    <section className={`${BG_CLASSES[bg]} py-12 md:py-16 px-6`}>
      <div
        className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start ${
          reverse ? "md:[&>div:first-child]:order-2" : ""
        }`}
      >
        <div>
          <ResultImage src={image} alt={imageAlt} maxWidth="max-w-md" />
        </div>
        <div>
          {title && (
            <h2
              className={`font-heading text-2xl md:text-3xl font-medium mb-4 tracking-wide ${
                bg === "primary" ? "text-background" : "text-foreground"
              }`}
            >
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
