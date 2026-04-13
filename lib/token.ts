import { redis } from "./redis";

export interface TokenData {
  status: "unused" | "in_progress" | "completed";
  createdAt: number;
  expiresAt: number;
  sessionId: string | null;
  resultSlug: string | null;
  email: string | null;
  emailSentAt: number | null;
}

function tokenKey(id: string) {
  return `token:${id}`;
}

export async function createToken(email?: string): Promise<{ id: string; url: string }> {
  const id = crypto.randomUUID();
  const expiryHours = Number(process.env.TOKEN_EXPIRY_HOURS) || 72;
  const now = Date.now();
  const expiresAt = now + expiryHours * 60 * 60 * 1000;

  const data: TokenData = {
    status: "unused",
    createdAt: now,
    expiresAt,
    sessionId: null,
    resultSlug: null,
    email: email ?? null,
    emailSentAt: null,
  };

  await redis.set(tokenKey(id), JSON.stringify(data), { pxat: expiresAt });

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  return { id, url: `${baseUrl}/?token=${id}` };
}

export async function getToken(id: string): Promise<TokenData | null> {
  const raw = await redis.get<string>(tokenKey(id));
  if (!raw) return null;
  return typeof raw === "string" ? JSON.parse(raw) : raw as unknown as TokenData;
}

export async function activateToken(id: string): Promise<{ sessionId: string } | null> {
  const token = await getToken(id);
  if (!token || token.status !== "unused") return null;

  const sessionId = crypto.randomUUID();
  token.status = "in_progress";
  token.sessionId = sessionId;

  await redis.set(tokenKey(id), JSON.stringify(token), { pxat: token.expiresAt });

  return { sessionId };
}

export async function completeToken(
  id: string,
  sessionId: string,
  resultSlug: string
): Promise<boolean> {
  const token = await getToken(id);
  if (!token) return false;
  if (token.status !== "in_progress") return false;
  if (token.sessionId !== sessionId) return false;

  token.status = "completed";
  token.resultSlug = resultSlug;

  await redis.set(tokenKey(id), JSON.stringify(token), { pxat: token.expiresAt });
  return true;
}

export async function markEmailSent(
  id: string,
  email: string
): Promise<boolean> {
  const token = await getToken(id);
  if (!token) return false;
  if (token.emailSentAt) return false;

  token.email = email;
  token.emailSentAt = Date.now();

  await redis.set(tokenKey(id), JSON.stringify(token), { pxat: token.expiresAt });
  return true;
}

export async function validateSession(
  tokenId: string,
  sessionId: string
): Promise<{ valid: boolean; status: string }> {
  const token = await getToken(tokenId);
  if (!token) return { valid: false, status: "not_found" };
  if (token.sessionId !== sessionId) return { valid: false, status: "session_mismatch" };
  return { valid: true, status: token.status };
}
