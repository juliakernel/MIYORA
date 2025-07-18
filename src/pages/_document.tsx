import { useEffect, useState } from "react";
import { buildUrl } from "@/utils/buildUrl";
import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script'

export default function Document() {
  const title = "MIYORA - Your Friendly Personal AI";
  const description = "Converse with highly customizable 3D characters that can communicate via natural voice chat and vision, with an emotion engine that allows MIYORA to express feelings and more.";
  const imageUrl = "https://MIYORA.arbius.ai/ogp.png";
  const keywords = "AI, chat, 3D, VRM, voice, vision, emotion, virtual character, conversational AI, text-to-speech, speech-to-text, OpenAI, Llama, Ollama, Three.js, Next.js, React, TypeScript";

  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="SemperAI" />
        <meta name="creator" content="SemperAI" />
        <meta name="publisher" content="SemperAI" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content="https://MIYORA.arbius.ai" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MIYORA" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@arbius_ai" />
        <meta name="twitter:creator" content="@arbius_ai" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="apple-mobile-web-app-title" content={title} />
        <meta name="application-name" content={title} />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+2&family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <Script
          src="/debugLogger.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/ammo.wasm.js"
          strategy="beforeInteractive"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
      )}
    </Html>
  );
}
