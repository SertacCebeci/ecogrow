/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>EcoGrow</title>
      </Head>
      <main className="w-full h-screen flex flex-col justify-center items-center bg-green-100">
        <div className="md:w-2/6 w-4/6 h-3/6  flex flex-col items-center justify-start rounded-md  border-black">
          <div
            id="header"
            className="flex items-start justify-center w-full h-1/6 mb-2"
          >
            <p className="text-4xl font-bold md:text-6xl">EcoGrow</p>
          </div>

          <div className="flex flex-col items-center justify-center w-full h-1/6  mb-10">
            <p className="text-2xl md:text-3xl mb-e2 font-semibold">
              Let's Grow Together
            </p>
            <p className="text-normal text-center md:text-xl font-normal">
              Enjoy the best product you have ever had.
            </p>
          </div>
          <div className="w-full h-1/6 flex items-center justify-evenly flex-col">
            <div className="w-2/3 h-1/3 flex flex-col items-center justify-evenly">
              <Link
                className="block border-none w-64 text-center py-2 rounded-md bg-[#00543E] text-gray-100 text-xl"
                href="/login"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
