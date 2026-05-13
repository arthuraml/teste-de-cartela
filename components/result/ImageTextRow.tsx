import Image from "next/image";

interface ImageTextRowProps {
  image: string;
  imageAlt?: string;
  reverse?: boolean;
  bg?: "light" | "surface" | "primary";
  title?: string;
  children: React.ReactNode;
  imageAspect?: string;
}

const BG_CLASSES: Record<NonNullable<ImageTextRowProps["bg"]>, string> = {
  light: "bg-background",
  surface: "bg-surface/30",
  primary: "bg-primary text-background",
};

export function ImageTextRow({
  image,
  imageAlt = "",
  reverse = false,
  bg = "light",
  title,
  children,
  imageAspect = "4/5",
}: ImageTextRowProps) {
  return (
    <section className={`${BG_CLASSES[bg]} py-12 md:py-16 px-6`}>
      <div
        className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
          reverse ? "md:[&>div:first-child]:order-2" : ""
        }`}
      >
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-surface/40"
          style={{ aspectRatio: imageAspect }}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 480px"
          />
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
