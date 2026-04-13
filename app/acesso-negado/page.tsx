import { Button } from "@/components/Button";

export default function AcessoNegadoPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <span className="text-5xl block mb-6">🔒</span>
        <h1 className="font-heading text-2xl md:text-3xl font-medium text-foreground tracking-wide">
          Acesso indisponível
        </h1>
        <p className="mt-4 font-body text-base text-muted leading-relaxed">
          Este link já foi utilizado ou expirou. Cada link do Teste de Cartela é
          válido para um único acesso.
        </p>
        <p className="mt-2 font-body text-sm text-muted">
          Se você acredita que isso é um erro, entre em contato conosco.
        </p>
        <div className="mt-8">
          <Button href="/" variant="ghost">
            Voltar para o início
          </Button>
        </div>
      </div>
    </main>
  );
}
