import Image from "next/image";
import { imageDims } from "@/data/result-image-dims";

interface ResultImageProps {
  src: string;
  alt?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Tailwind max-width class. Default: max-w-2xl. */
  maxWidth?: string;
}

/**
 * Renderiza uma imagem dos resultados respeitando suas dimensões naturais
 * (sem crop, sem zoom, sem stretching). Usa as dimensões reais geradas em
 * data/result-image-dims.ts.
 */
export function ResultImage({
  src,
  alt = "",
  className = "",
  sizes = "(max-width: 768px) 100vw, 720px",
  priority,
  maxWidth = "max-w-2xl",
}: ResultImageProps) {
  const dims = imageDims[src] ?? { width: 1200, height: 1600 };
  return (
    <div className={`mx-auto ${maxWidth} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={dims.width}
        height={dims.height}
        className="w-full h-auto rounded-2xl"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
