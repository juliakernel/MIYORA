import '@/i18n';

import "@/styles/globals.css";
import "@charcoal-ui/icons";
import type { AppProps } from "next/app";
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MIYORA - Your Friendly Personal AI</title>
        <meta name="description" content="Converse with highly customizable 3D characters that can communicate via natural voice chat and vision, with an emotion engine that allows MIYORA to express feelings and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
