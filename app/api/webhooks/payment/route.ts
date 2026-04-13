import { NextRequest, NextResponse } from "next/server";
import { createToken } from "@/lib/token";

export async function POST(request: NextRequest) {
  // TODO: Implementar validação de assinatura do webhook
  // Hotmart: header "hottok" + secret
  // Kiwify: header "x-kiwify-signature"
  // Stripe: header "stripe-signature"

  const body = await request.json();

  // TODO: Extrair email do payload conforme plataforma
  const email = body?.data?.buyer?.email || body?.email;

  if (!email) {
    return NextResponse.json({ error: "No email in payload" }, { status: 400 });
  }

  const result = await createToken(email);

  // TODO: Enviar email com o link para a cliente
  // Por enquanto, apenas retorna o token/URL

  return NextResponse.json({ ok: true, url: result.url }, { status: 200 });
}
