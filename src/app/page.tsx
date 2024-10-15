import LoginButton from "@/components/login-button";

export default function Home() {
  return (
    <div className="p-16">
      <nav className="flex justify-end">
        <LoginButton />
      </nav>
      <h1 className="text-5xl text-blue-700 text-center font-semibold pt-12">
        Homepage
      </h1>
    </div>
  );
}
