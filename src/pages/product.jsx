import Head from "next/head";
import ProductDetails from "@/components/ProductDetails";

export default function Home() {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <main className="w-full h-screen flex flex-col justify-center items-center bg-green-100">
        <ProductDetails />
      </main>
    </>
  );
}
