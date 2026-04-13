"use client";

import { useState } from "react";

export default function AdminPage() {
  const [apiKey, setApiKey] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) setAuthenticated(true);
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setLink("");
    setCopied(false);

    try {
      const res = await fetch("/api/tokens", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email ? { email } : {}),
      });

      if (res.status === 401) {
        setError("Chave inválida.");
        setAuthenticated(false);
        return;
      }
      if (!res.ok) throw new Error();

      const data = await res.json();
      setLink(data.url);
      setEmail("");
    } catch {
      setError("Erro ao gerar link.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-6">
        <form onSubmit={handleLogin} className="w-full max-w-sm">
          <h1 className="font-heading text-2xl font-medium text-foreground mb-6 text-center">
            Admin
          </h1>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Chave de acesso"
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-surface bg-white font-body text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-cta"
          />
          <button
            type="submit"
            className="w-full mt-4 px-6 py-3 rounded-full bg-cta text-cta-text font-body font-semibold cursor-pointer hover:bg-cta-hover transition-colors"
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-lg mx-auto">
        <h1 className="font-heading text-2xl font-medium text-foreground mb-2">
          Gerar Link do Teste
        </h1>
        <p className="font-body text-sm text-muted mb-8">
          Cada link gerado é válido por 72h e funciona apenas uma vez.
        </p>

        <form onSubmit={handleGenerate} className="space-y-4">
          <div>
            <label className="font-body text-sm text-foreground block mb-1">
              Email da cliente (opcional)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="cliente@email.com"
              className="w-full px-4 py-3 rounded-xl border-2 border-surface bg-white font-body text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-cta"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 rounded-full bg-cta text-cta-text font-body font-semibold cursor-pointer hover:bg-cta-hover transition-colors disabled:opacity-60"
          >
            {loading ? "Gerando..." : "Gerar Link"}
          </button>
        </form>

        {error && (
          <p className="mt-4 font-body text-sm text-red-600">{error}</p>
        )}

        {link && (
          <div className="mt-6 p-4 bg-surface/60 rounded-xl">
            <p className="font-body text-xs text-muted mb-2">
              Link gerado — envie para a cliente:
            </p>
            <div className="flex gap-2">
              <input
                readOnly
                value={link}
                className="flex-1 px-3 py-2 rounded-lg bg-white border border-surface font-body text-sm text-foreground"
              />
              <button
                onClick={handleCopy}
                className="px-4 py-2 rounded-lg bg-cta text-cta-text font-body text-sm font-semibold cursor-pointer hover:bg-cta-hover transition-colors"
              >
                {copied ? "Copiado!" : "Copiar"}
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
