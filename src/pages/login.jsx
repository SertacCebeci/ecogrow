import Login from "@/components/Login";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-green-400 to-green-100">
        <Login />
      </main>
    </>
  );
}
