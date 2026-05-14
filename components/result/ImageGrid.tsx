import { ResultImage } from "./ResultImage";

interface ImageGridProps {
  images: string[];
}

/**
 * Grid responsivo de imagens. Cada imagem aparece completa (sem crop),
 * mantendo sua proporção natural. Layout adapta-se ao número de imagens.
 */
export function ImageGrid({ images }: ImageGridProps) {
  if (!images.length) return null;

  const cols =
    images.length === 1
      ? "grid-cols-1"
      : images.length === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  const maxWidth = images.length === 1 ? "max-w-2xl" : "max-w-md";

  return (
    <div className={`grid ${cols} gap-4 md:gap-6 items-start`}>
      {images.map((src, i) => (
        <ResultImage
          key={src + i}
          src={src}
          maxWidth={maxWidth}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ))}
    </div>
  );
}
