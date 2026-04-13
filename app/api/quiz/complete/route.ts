import { NextRequest, NextResponse } from "next/server";
import { completeToken } from "@/lib/token";
import { results } from "@/data/results";

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

  const body = await request.json();
  const { resultSlug } = body;

  const validSlugs = results.map((r) => r.slug);
  if (!validSlugs.includes(resultSlug)) {
    return NextResponse.json({ error: "Invalid result" }, { status: 400 });
  }

  const ok = await completeToken(session.tokenId, session.sessionId, resultSlug);
  if (!ok) {
    return NextResponse.json({ error: "Token already completed or invalid" }, { status: 403 });
  }

  return NextResponse.json({ ok: true, resultSlug });
}
