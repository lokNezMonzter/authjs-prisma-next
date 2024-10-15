import { prisma } from "@/db/prisma";
import Link from "next/link";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <main className="flex flex-col items-center gap-6 px-3 py-10">
      <h1 className="text-5xl text-blue-700 text-center font-semibold pt-12">
        Homepage
      </h1>
      <h2 className="text-center text-2xl font-semibold">Users</h2>
      <ul className="list-inside list-disc">
        {users.map((user) => (
          <li key={user.id}>
            <Link href="#">{user.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
