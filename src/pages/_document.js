import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/components/Navbar";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/ico.png" />
      </Head>
      <body>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
