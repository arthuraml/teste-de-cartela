interface HeroSectionProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function HeroSection({ title, subtitle, children }: HeroSectionProps) {
  return (
    <section className="bg-primary py-16 md:py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-heading text-3xl md:text-[40px] font-medium leading-[1.2] tracking-wide text-background">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 font-body text-base md:text-lg text-surface leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
