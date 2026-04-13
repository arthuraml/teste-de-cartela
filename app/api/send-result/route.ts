import { NextRequest, NextResponse } from "next/server";
import { getToken, markEmailSent } from "@/lib/token";
import { getResultBySlug } from "@/data/results";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const cookie = request.cookies.get("quiz_session");
  if (!cookie?.value) {
    return NextResponse.json({ error: "No session" }, { status: 401 });
  }

  let session: { tokenId: string; sessionId: string };
  try {
    session = JSON.parse(cookie.value);
  } catch {
    return NextResponse.json({ error: "Invalid session" }, { status: 401 });
  }

  const token = await getToken(session.tokenId);
  if (!token || token.sessionId !== session.sessionId) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  if (token.status !== "completed") {
    return NextResponse.json({ error: "Quiz not completed" }, { status: 400 });
  }

  if (token.emailSentAt) {
    return NextResponse.json({ error: "Email already sent" }, { status: 409 });
  }

  const body = await request.json();
  const { email, resultSlug } = body;

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const result = getResultBySlug(resultSlug);
  if (!result || result.slug !== token.resultSlug) {
    return NextResponse.json({ error: "Result mismatch" }, { status: 400 });
  }

  const htmlContent = buildResultEmail(result);

  const fromEmail = process.env.EMAIL_FROM || "Teste de Cartela <onboarding@resend.dev>";
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: fromEmail,
    to: email,
    subject: `Seu resultado: ${result.title} — Teste de Cartela`,
    html: htmlContent,
  });

  await markEmailSent(session.tokenId, email);

  return NextResponse.json({ ok: true });
}

function buildResultEmail(result: {
  title: string;
  subtitle: string;
  seuResultado: string;
  sobreVoce: string[];
  coresFavoraveis: string[];
  coresDesfavoraveis: string[];
  aplicacao: string[];
  insight: string;
}): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: 'Helvetica Neue', Arial, sans-serif; background: #F7F7FA; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff;">
    <div style="background: #2B0F14; padding: 40px 32px; text-align: center;">
      <h1 style="color: #F7F7FA; font-size: 28px; margin: 0;">${result.title}</h1>
      <p style="color: #E9DADA; font-size: 16px; margin: 8px 0 0;">(${result.subtitle})</p>
    </div>

    <div style="padding: 32px;">
      <p style="color: #3A2E2A; font-size: 15px; line-height: 1.6;">${result.seuResultado}</p>

      <h2 style="color: #3A2E2A; font-size: 18px; margin-top: 32px;">Sobre você</h2>
      ${result.sobreVoce.map((p) => `<p style="color: #3A2E2A; font-size: 15px; line-height: 1.6;">${p}</p>`).join("")}

      <h2 style="color: #3A2E2A; font-size: 18px; margin-top: 32px;">Cores que te valorizam</h2>
      <p style="color: #3A2E2A; font-size: 15px;">${result.coresFavoraveis.join(" · ")}</p>

      <h2 style="color: #3A2E2A; font-size: 18px; margin-top: 32px;">Cores para evitar</h2>
      <p style="color: #7A6A5F; font-size: 15px;">${result.coresDesfavoraveis.join(" · ")}</p>

      <h2 style="color: #3A2E2A; font-size: 18px; margin-top: 32px;">Como aplicar</h2>
      <ul style="color: #3A2E2A; font-size: 15px; line-height: 1.8; padding-left: 20px;">
        ${result.aplicacao.map((tip) => `<li>${tip}</li>`).join("")}
      </ul>

      <div style="background: #2B0F14; padding: 24px; border-radius: 12px; margin-top: 32px; text-align: center;">
        <p style="color: #F7F7FA; font-size: 16px; font-style: italic; margin: 0;">${result.insight}</p>
      </div>
    </div>

    <div style="padding: 24px 32px; text-align: center; border-top: 1px solid #E9DADA;">
      <p style="color: #7A6A5F; font-size: 13px;">Teste de Cartela — por Larissa Alencar</p>
    </div>
  </div>
</body>
</html>`;
}
