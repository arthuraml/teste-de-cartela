import { larissaNote } from "@/data/pages";

export function LarissaNote() {
  return (
    <section className="bg-background py-16 px-6">
      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-28 h-28 rounded-full bg-surface flex-shrink-0 flex items-center justify-center">
          <span className="font-body text-xs text-muted">Foto</span>
        </div>

        <div>
          <blockquote className="font-heading text-lg md:text-xl font-medium text-foreground leading-relaxed italic">
            &ldquo;{larissaNote.quote}&rdquo;
          </blockquote>
          <p className="mt-3 font-body text-sm text-muted">
            — {larissaNote.author}
          </p>
        </div>
      </div>
    </section>
  );
}
