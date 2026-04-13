import { cookies } from "next/headers";
import { SplitHero } from "@/components/SplitHero";
import { validateSession } from "@/lib/token";

export const dynamic = "force-dynamic";

export default async function Home() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("quiz_session");

  let hasSession = false;
  if (sessionCookie?.value) {
    try {
      const { tokenId, sessionId } = JSON.parse(sessionCookie.value);
      const result = await validateSession(tokenId, sessionId);
      hasSession = result.valid && result.status === "in_progress";
    } catch {}
  }

  return (
    <main>
      <SplitHero hasSession={hasSession} />
    </main>
  );
}
