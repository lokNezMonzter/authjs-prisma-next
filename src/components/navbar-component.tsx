import Link from "next/link";

import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import UserButton from "@/components/user-button";
import LoginButton from "@/components/login-button";

export default async function NavbarComponent() {
  const session = await auth();
  const user = session?.user;

  console.log(session);

  if (!session || !user) return;

  return (
    <main className="flex justify-between py-8 px-12">
      <h1 className="text-violet-900 text-3xl font-semibold">Auth.js v5</h1>
      <nav>
        {session ? (
          <UserButton user={user} />
        ) : (
          <LoginButton />
          // <Button
          //   className="px-6 py-2 min-w-[120px] text-center text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none"
          //   size="lg"
          //   variant="outline"
          //   asChild
          // >
          //   <Link href="/auth/signin" className="text-base font-semibold">
          //     Sign In
          //   </Link>
          // </Button>
        )}
      </nav>
    </main>
  );
}
