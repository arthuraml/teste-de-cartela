import { cookies } from "next/headers";
import { SplitHero } from "@/components/SplitHero";

export default async function Home() {
  const cookieStore = await cookies();
  const hasSession = cookieStore.has("quiz_session");

  return (
    <main>
      <SplitHero hasSession={hasSession} />
    </main>
  );
}
