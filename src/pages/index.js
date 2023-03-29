import Head from "next/head";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>EcoGrow</title>
      </Head>
      <main className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-green-400 to-green-100">
        Home Page
      </main>
    </>
  );
}
