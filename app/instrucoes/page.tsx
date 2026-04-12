import { instrucoes } from "@/data/pages";
import { Button } from "@/components/Button";
import { HeroSection } from "@/components/HeroSection";

export default function InstrucoesPage() {
  return (
    <main>
      <HeroSection title={instrucoes.title} />

      <section className="bg-background py-12 md:py-16 px-6">
        <div className="max-w-xl mx-auto">
          {instrucoes.paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-body text-base text-foreground leading-relaxed mb-4"
            >
              {p}
            </p>
          ))}

          <div className="mt-8 text-center">
            <Button href="/quiz/1">{instrucoes.cta}</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
