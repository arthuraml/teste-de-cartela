"use client";

import { useState } from "react";

interface PurchaseCtaProps {
  label: string;
}

export function PurchaseCta({ label }: PurchaseCtaProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-block rounded-full px-8 py-3.5 font-body font-semibold text-base tracking-wide transition-all duration-200 cursor-pointer text-center bg-cta text-cta-text shadow-[0_6px_18px_rgba(198,167,123,0.25)] hover:bg-cta-hover hover:shadow-[0_8px_24px_rgba(198,167,123,0.35)]"
      >
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />

          <div
            className="relative bg-background rounded-2xl shadow-xl max-w-md w-full p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-muted hover:text-foreground hover:bg-surface transition-colors cursor-pointer"
            >
              ✕
            </button>

            <span className="text-4xl block mb-4">✨</span>

            <h2 className="font-heading text-xl md:text-2xl font-medium text-foreground">
              Descubra suas cores por apenas
            </h2>

            <p className="mt-2 font-heading text-4xl font-medium text-cta">
              R$ 27,90
            </p>

            <ul className="mt-6 space-y-3 text-left max-w-xs mx-auto">
              <li className="flex items-start gap-2 font-body text-sm text-foreground">
                <span className="text-cta mt-0.5">✓</span>
                Teste completo de cartela de cores
              </li>
              <li className="flex items-start gap-2 font-body text-sm text-foreground">
                <span className="text-cta mt-0.5">✓</span>
                Resultado personalizado com suas cores ideais
              </li>
              <li className="flex items-start gap-2 font-body text-sm text-foreground">
                <span className="text-cta mt-0.5">✓</span>
                Dicas de como aplicar no dia a dia
              </li>
              <li className="flex items-start gap-2 font-body text-sm text-foreground">
                <span className="text-cta mt-0.5">✓</span>
                Resultado enviado para seu e-mail
              </li>
            </ul>

            <a
              href="#"
              className="inline-block mt-8 w-full rounded-full px-8 py-4 font-body font-semibold text-base tracking-wide bg-cta text-cta-text shadow-[0_6px_18px_rgba(198,167,123,0.25)] hover:bg-cta-hover transition-all text-center cursor-pointer"
            >
              Comprar agora
            </a>

            <p className="mt-4 font-body text-xs text-muted">
              Após a compra, você receberá um link exclusivo por e-mail para
              realizar o teste.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
