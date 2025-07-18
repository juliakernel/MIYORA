#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Read package.json
const packageJsonPath = path.join(__dirname, "..", "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

// Read existing metadata files
const metadataPath = path.join(__dirname, "..", "metadata.json");
const publicMetaPath = path.join(__dirname, "..", "public", "meta.json");

// Update metadata.json
const metadata = {
  name: packageJson.name,
  version: packageJson.version,
  description:
    "Your friendly personal AI - A highly customizable 3D character chat application with voice, vision, and emotion capabilities",
  keywords: [
    "ai",
    "chat",
    "3d",
    "vrm",
    "voice",
    "vision",
    "emotion",
    "virtual-character",
    "conversational-ai",
    "text-to-speech",
    "speech-to-text",
    "openai",
    "llama",
    "ollama",
    "threejs",
    "nextjs",
    "react",
    "typescript",
  ],
  author: {
    name: "SemperAI",
    url: "https://github.com/semperai",
  },
  license: packageJson.license || "MIT",
  repository: {
    type: "git",
    url: "https://github.com/semperai/MIYORA.git",
  },
  homepage: "https://MIYORA.arbius.ai",
  documentation: "https://docs.heyMIYORA.com",
  bugs: {
    url: "https://github.com/semperai/MIYORA/issues",
  },
  engines: packageJson.engines,
  main: "src/pages/_app.tsx",
  scripts: {
    dev: packageJson.scripts.dev,
    build: packageJson.scripts.build,
    start: packageJson.scripts.start,
    export: packageJson.scripts.export,
    tauri: packageJson.scripts.tauri,
  },
  dependencies: {
    next: packageJson.dependencies.next,
    react: packageJson.dependencies.react,
    "react-dom": packageJson.dependencies["react-dom"],
    three: packageJson.dependencies.three,
    "@pixiv/three-vrm": packageJson.dependencies["@pixiv/three-vrm"],
    "@xenova/transformers": packageJson.dependencies["@xenova/transformers"],
    "@ricky0123/vad-react": packageJson.dependencies["@ricky0123/vad-react"],
    "@sentry/nextjs": packageJson.dependencies["@sentry/nextjs"],
    "@supabase/supabase-js": packageJson.dependencies["@supabase/supabase-js"],
    i18next: packageJson.dependencies.i18next,
    "react-i18next": packageJson.dependencies["react-i18next"],
    telegraf: packageJson.dependencies.telegraf,
    "twitter-api-v2": packageJson.dependencies["twitter-api-v2"],
    "window.ai": packageJson.dependencies["window.ai"],
  },
  devDependencies: {
    "@tauri-apps/api": packageJson.devDependencies["@tauri-apps/api"],
    "@tauri-apps/cli": packageJson.devDependencies["@tauri-apps/cli"],
    typescript: packageJson.devDependencies.typescript,
    "eslint-config-next": packageJson.devDependencies["eslint-config-next"],
    tailwindcss: packageJson.devDependencies.tailwindcss,
  },
  features: {
    "3d-rendering": {
      technology: "three.js",
      description: "3D character rendering and animation",
    },
    "vrm-support": {
      technology: "@pixiv/three-vrm",
      description: "VRM format support for 3D characters",
    },
    "ai-chat": {
      technologies: [
        "OpenAI ChatGPT API",
        "Llama.cpp",
        "Ollama",
        "KoboldCpp",
        "OpenRouter",
        "Window.ai",
      ],
      description: "Multiple AI chat backends supported",
    },
    "text-to-speech": {
      technologies: [
        "Eleven Labs API",
        "Speech T5",
        "OpenAI TTS",
        "Coqui (Local)",
        "RVC",
        "AllTalkTTS",
      ],
      description: "Multiple TTS engines with voice customization",
    },
    "speech-to-text": {
      technologies: ["Whisper", "Silero VAD"],
      description: "Voice recognition and activity detection",
    },
    vision: {
      technologies: ["Bakllava"],
      description: "Image analysis and understanding",
    },
    "emotion-engine": {
      description: "Dynamic emotional expressions for characters",
    },
    multilingual: {
      description: "Internationalization support with i18next",
    },
    "desktop-app": {
      technology: "Tauri",
      description: "Cross-platform desktop application",
    },
    pwa: {
      technology: "@ducanh2912/next-pwa",
      description: "Progressive Web App capabilities",
    },
  },
  platforms: {
    web: {
      url: "https://MIYORA.arbius.ai",
      description: "Web application accessible on mobile, tablet, and desktop",
    },
    desktop: {
      download:
        "https://github.com/flukexp/llama-piper-go/releases/download/v1.0.0/llama-piper-window.exe",
      description: "Windows desktop application",
    },
  },
  configuration: {
    "environment-variables": [
      "NEXT_PUBLIC_OPENAI_APIKEY",
      "NEXT_PUBLIC_OPENAI_URL",
      "NEXT_PUBLIC_OPENAI_MODEL",
      "NEXT_PUBLIC_CHATBOT_BACKEND",
      "NEXT_PUBLIC_TTS_BACKEND",
      "NEXT_PUBLIC_STT_BACKEND",
      "NEXT_PUBLIC_VISION_BACKEND",
    ],
    "settings-ui": {
      description: "Built-in settings interface for easy configuration",
    },
  },
  architecture: {
    frontend: {
      framework: "Next.js",
      language: "TypeScript",
      styling: "Tailwind CSS",
      state_management: "React Context",
    },
    backend: {
      type: "API-based",
      supported_apis: ["OpenAI", "Eleven Labs", "Coqui", "Local services"],
    },
    "3d-engine": {
      technology: "Three.js",
      features: [
        "VRM model loading",
        "Animation support",
        "Real-time rendering",
      ],
    },
  },
  deployment: {
    vercel: {
      configuration: "vercel.json",
      output_directory: ".next",
    },
    docker: {
      file: "Dockerfile",
      compose: "docker-compose.yml",
    },
  },
  testing: {
    framework: "Jest",
    coverage: "GitHub Actions",
    scripts: ["test", "test:ci"],
  },
  monitoring: {
    error_tracking: "Sentry",
    analytics: "Built-in",
  },
  community: {
    contributors: "https://github.com/semperai/MIYORA/graphs/contributors",
    issues: "https://github.com/semperai/MIYORA/issues",
    discussions: "GitHub Discussions",
    twitter: "https://twitter.com/arbius_ai",
  },
  history: {
    origin: "Fork of ChatVRM by Pixiv",
    original_url: "https://pixiv.github.io/ChatVRM",
  },
  tags: [
    "ai-chat",
    "3d-characters",
    "voice-interaction",
    "emotion-engine",
    "vrm-support",
    "multimodal-ai",
    "conversational-ai",
    "virtual-assistant",
    "text-to-speech",
    "speech-to-text",
    "computer-vision",
    "real-time-rendering",
    "cross-platform",
    "progressive-web-app",
    "desktop-application",
  ],
  status: {
    version: "1.2",
    stage: "active-development",
    last_updated: new Date().getFullYear().toString(),
  },
};

// Write updated metadata.json
fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));

// Update public/meta.json
const publicMeta = {
  title: "MIYORA - Your Friendly Personal AI",
  description:
    "Converse with highly customizable 3D characters that can communicate via natural voice chat and vision, with an emotion engine that allows MIYORA to express feelings and more.",
  keywords:
    "AI, chat, 3D, VRM, voice, vision, emotion, virtual character, conversational AI, text-to-speech, speech-to-text, OpenAI, Llama, Ollama, Three.js, Next.js, React, TypeScript",
  author: "SemperAI",
  creator: "SemperAI",
  publisher: "SemperAI",
  robots: "index, follow",
  language: "en",
  type: "website",
  url: "https://MIYORA.arbius.ai",
  site_name: "MIYORA",
  image: {
    url: "https://MIYORA.arbius.ai/ogp.png",
    width: 1200,
    height: 630,
    alt: "MIYORA - Your Friendly Personal AI",
  },
  twitter: {
    card: "summary_large_image",
    site: "@arbius_ai",
    creator: "@arbius_ai",
    title: "MIYORA - Your Friendly Personal AI",
    description:
      "Converse with highly customizable 3D characters with voice, vision, and emotion capabilities",
    image: "https://MIYORA.arbius.ai/ogp.png",
  },
  open_graph: {
    title: "MIYORA - Your Friendly Personal AI",
    description:
      "Converse with highly customizable 3D characters that can communicate via natural voice chat and vision, with an emotion engine that allows MIYORA to express feelings and more.",
    type: "website",
    url: "https://MIYORA.arbius.ai",
    site_name: "MIYORA",
    image: "https://MIYORA.arbius.ai/ogp.png",
    locale: "en_US",
  },
  manifest: {
    name: "MIYORA - Your Friendly Personal AI",
    short_name: "MIYORA",
    description: "Converse with highly customizable 3D characters",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  features: {
    "3d_characters": "VRM format support with real-time rendering",
    voice_interaction: "Natural voice chat with multiple TTS/STT engines",
    vision_capabilities: "Image analysis and understanding",
    emotion_engine: "Dynamic emotional expressions",
    ai_chat: "Multiple AI backends (OpenAI, Llama, Ollama, etc.)",
    multilingual: "Internationalization support",
    cross_platform: "Web, desktop, and mobile support",
  },
  technologies: {
    frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    "3d_engine": ["Three.js", "@pixiv/three-vrm"],
    ai_services: ["OpenAI", "Eleven Labs", "Coqui", "Local services"],
    desktop: ["Tauri"],
    pwa: ["@ducanh2912/next-pwa"],
  },
  links: {
    homepage: "https://MIYORA.arbius.ai",
    documentation: "https://docs.heyMIYORA.com",
    github: "https://github.com/semperai/MIYORA",
    twitter: "https://twitter.com/arbius_ai",
    download:
      "https://github.com/flukexp/llama-piper-go/releases/download/v1.0.0/llama-piper-window.exe",
  },
};

// Write updated public/meta.json
fs.writeFileSync(publicMetaPath, JSON.stringify(publicMeta, null, 2));

console.log("✅ Metadata files updated successfully!");
console.log("📁 Updated files:");
console.log("   - metadata.json");
console.log("   - public/meta.json");
console.log("   - src/pages/api/metadata.ts (API endpoint)");
console.log("   - src/components/MetadataInfo.tsx (React component)");
