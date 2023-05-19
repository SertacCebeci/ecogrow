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
        <div className="md:w-2/6 w-4/6 h-5/6  flex flex-col items-center justify-start rounded-md  border-black">
          <div
            id="header"
            className="flex items-end justify-center w-full h-1/6 "
          >
            <p className="text-6xl font-bold">EcoGrow</p>
          </div>

          <div className="flex flex-col items-center justify-center w-full h-2/6 ">
            <p className="text-3xl mb-2 font-semibold">Let's Grow Together</p>
            <p className="text-xl font-normal">
              Enjoy the best product you have ever had.
            </p>
          </div>
          <div className="w-full h-3/6 flex items-center justify-evenly flex-col">
            <div className="w-2/3 h-1/3 flex flex-col items-center justify-evenly">
              <Link
                className="block border-none w-64 text-center py-2 rounded-md bg-[#00543E] text-gray-100 text-xl"
                href="/signup"
              >
                New User
              </Link>
              <Link
                className="block border-none w-64 text-center py-2 rounded-md bg-[#00543E] text-gray-100 text-xl"
                href="/login"
              >
                Existing User
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
