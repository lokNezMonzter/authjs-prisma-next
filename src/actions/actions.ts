"use server";

import { signIn, signOut, auth } from "@/auth";
import { UpdateProfileValues, updateProfileSchema } from "@/schemas/schemas";
import { prisma } from "@/db/prisma";
import { revalidatePath } from "next/cache";

export async function handleSignIn() {
  await signIn();
}

export async function handleGoogleSignIn() {
  await signIn("google", { redirectTo: "/" });
}

export async function handleGithubSignIn() {
  await signIn("github");
}

export async function handleSignOut() {
  await signOut({ redirectTo: "/" });
}

export async function updateProfile(values: UpdateProfileValues) {
  // Get the currently authenticated user
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    throw Error("Unauthorized action");
  }

  const { name } = updateProfileSchema.parse(values);
  console.log(name);

  // Update user
  await prisma.user.update({
    where: { id: userId },
    data: { name },
  });

  revalidatePath("/");
}
