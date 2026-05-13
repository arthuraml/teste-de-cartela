import Image from "next/image";

interface ImageGridProps {
  images: string[];
  aspect?: string;
}

export function ImageGrid({ images, aspect = "3/4" }: ImageGridProps) {
  if (!images.length) return null;

  // Layout responsivo conforme o número de imagens
  const cols =
    images.length === 1
      ? "grid-cols-1 max-w-md mx-auto"
      : images.length === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${cols} gap-4 md:gap-6`}>
      {images.map((src, i) => (
        <div
          key={src + i}
          className="relative w-full rounded-2xl overflow-hidden bg-surface/40"
          style={{ aspectRatio: aspect }}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
