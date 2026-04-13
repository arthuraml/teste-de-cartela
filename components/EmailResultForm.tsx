"use client";

import { useState } from "react";

interface EmailResultFormProps {
  resultSlug: string;
  resultTitle: string;
}

export function EmailResultForm({ resultSlug, resultTitle }: EmailResultFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    try {
      const res = await fetch("/api/send-result", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, resultSlug }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-surface/60 rounded-2xl p-8 text-center">
        <span className="text-3xl block mb-3">✉️</span>
        <p className="font-heading text-lg font-medium text-foreground">
          Resultado enviado!
        </p>
        <p className="mt-2 font-body text-sm text-muted">
          Verifique sua caixa de entrada para o resultado completo de &ldquo;{resultTitle}&rdquo;.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface/40 rounded-2xl p-8">
      <h3 className="font-heading text-lg font-medium text-foreground text-center mb-2">
        Receba seu resultado por e-mail
      </h3>
      <p className="font-body text-sm text-muted text-center mb-6">
        Guarde suas cores e dicas para consultar quando quiser.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu melhor e-mail"
          required
          className="flex-1 px-4 py-3 rounded-full border-2 border-surface bg-white font-body text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-cta transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 rounded-full bg-cta text-cta-text font-body font-semibold text-sm shadow-[0_6px_18px_rgba(198,167,123,0.25)] hover:bg-cta-hover transition-all cursor-pointer disabled:opacity-60"
        >
          {status === "loading" ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-3 font-body text-sm text-red-600 text-center">
          Erro ao enviar. Tente novamente.
        </p>
      )}
    </div>
  );
}
