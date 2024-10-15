import { handleSignIn } from "@/actions/actions";

export default function LoginButton() {
  return (
    <form action={handleSignIn}>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
      >
        Sign In
      </button>
    </form>
  );
}
