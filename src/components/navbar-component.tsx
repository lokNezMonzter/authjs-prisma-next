import { auth } from "@/auth";

import UserButton from "@/components/user-button";
import LoginButton from "@/components/login-button";
import Link from "next/link";
import { HomeIcon } from "@radix-ui/react-icons";

export default async function NavbarComponent() {
  const session = await auth();
  const user = session?.user;

  console.log(session);

  return (
    <main className="flex justify-between py-8 px-12">
      <Link href="/">
        <HomeIcon height={40} width={40} />
      </Link>
      <nav>{user ? <UserButton user={user} /> : <LoginButton />}</nav>
    </main>
  );
}
