import { NextRequest, NextResponse } from "next/server";
import { createToken } from "@/lib/token";

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const expected = `Bearer ${process.env.ADMIN_API_KEY}`;

  if (!authHeader || authHeader !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let email: string | undefined;
  try {
    const body = await request.json();
    email = body.email;
  } catch {}

  const result = await createToken(email);

  return NextResponse.json(result, { status: 201 });
}
