import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Redis } from "@upstash/redis";

interface TokenData {
  status: "unused" | "in_progress" | "completed";
  createdAt: number;
  expiresAt: number;
  sessionId: string | null;
  resultSlug: string | null;
  email: string | null;
  emailSentAt: number | null;
}

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

function tokenKey(id: string) {
  return `token:${id}`;
}

async function getTokenData(id: string): Promise<TokenData | null> {
  const raw = await redis.get<string>(tokenKey(id));
  if (!raw) return null;
  return typeof raw === "string" ? JSON.parse(raw) : (raw as unknown as TokenData);
}

function parseSessionCookie(
  request: NextRequest
): { tokenId: string; sessionId: string } | null {
  const cookie = request.cookies.get("quiz_session");
  if (!cookie?.value) return null;
  try {
    return JSON.parse(cookie.value);
  } catch {
    return null;
  }
}

function setSessionCookie(
  response: NextResponse,
  tokenId: string,
  sessionId: string
) {
  response.cookies.set(
    "quiz_session",
    JSON.stringify({ tokenId, sessionId }),
    {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    }
  );
}

export async function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname === "/") {
    const tokenParam = searchParams.get("token");
    if (!tokenParam) return NextResponse.next();

    const token = await getTokenData(tokenParam);
    if (!token || token.status !== "unused") {
      return NextResponse.redirect(new URL("/acesso-negado", request.url));
    }

    const sessionId = crypto.randomUUID();
    token.status = "in_progress";
    token.sessionId = sessionId;
    await redis.set(tokenKey(tokenParam), JSON.stringify(token), {
      pxat: token.expiresAt,
    });

    const response = NextResponse.redirect(
      new URL("/instrucoes", request.url)
    );
    setSessionCookie(response, tokenParam, sessionId);
    return response;
  }

  const session = parseSessionCookie(request);
  if (!session) {
    return NextResponse.redirect(new URL("/acesso-negado", request.url));
  }

  const token = await getTokenData(session.tokenId);
  if (!token || token.sessionId !== session.sessionId) {
    return NextResponse.redirect(new URL("/acesso-negado", request.url));
  }

  if (token.status === "completed" && pathname.startsWith("/resultado")) {
    return NextResponse.next();
  }

  if (token.status === "completed") {
    return NextResponse.redirect(new URL("/acesso-negado", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/instrucoes", "/quiz/:path*", "/resultado/:path*"],
};
