# MIYORA - Project Metadata

## 📋 Project Overview

**Name:** MIYORA  
**Version:** 0.1.0  
**Description:** Your friendly personal AI - A highly customizable 3D character chat application with voice, vision, and emotion capabilities

## 🏷️ Key Information

- **Author:** SemperAI
- **License:** MIT
- **Homepage:** https://MIYORA.arbius.ai
- **Documentation:** https://docs.heyMIYORA.com
- **Repository:** https://github.com/semperai/MIYORA
- **Status:** Active Development (v1.2)

## 🚀 Core Features

### 🤖 AI Chat

- **OpenAI ChatGPT API** - Official OpenAI integration
- **Llama.cpp** - Local AI processing
- **Ollama** - Easy local model management
- **KoboldCpp** - Advanced local AI
- **OpenRouter** - Access to multiple AI models
- **Window.ai** - Browser-based AI

### 🎤 Voice Interaction

- **Text-to-Speech:** Eleven Labs, Speech T5, OpenAI TTS, Coqui, RVC, AllTalkTTS
- **Speech-to-Text:** Whisper, Silero VAD
- **Voice Activity Detection:** Real-time voice detection

### 👁️ Vision Capabilities

- **Image Analysis:** Bakllava integration
- **Computer Vision:** Image understanding and processing

### 🎭 Emotion Engine

- **Dynamic Expressions:** Real-time emotional responses
- **Character Personality:** Customizable character traits
- **Emotion Tags:** 14 different emotional states

### 🎮 3D Rendering

- **Three.js:** Real-time 3D rendering
- **VRM Support:** @pixiv/three-vrm integration
- **Animation:** Character animations and movements
- **Custom Models:** Import your own VRM files

## 🛠️ Technology Stack

### Frontend

- **Framework:** Next.js 14.2.13
- **Language:** TypeScript 5.6.2
- **UI Library:** React 18.3.1
- **Styling:** Tailwind CSS 3.4.13
- **State Management:** React Context

### 3D Engine

- **Core:** Three.js 0.169.0
- **VRM:** @pixiv/three-vrm 3.1.2
- **Physics:** Ammo.js (WASM)

### AI & ML

- **Transformers:** @xenova/transformers 2.17.2
- **Voice Detection:** @ricky0123/vad-react 0.0.24
- **Internationalization:** i18next 23.15.1

### Desktop & PWA

- **Desktop:** Tauri (Rust + Web Technologies)
- **PWA:** @ducanh2912/next-pwa 10.2.9

## 🌐 Platforms

### Web Application

- **URL:** https://MIYORA.arbius.ai
- **Access:** Mobile, tablet, desktop browsers
- **Features:** Full feature set with PWA capabilities

### Desktop Application

- **Platform:** Windows
- **Download:** [Windows Executable](https://github.com/flukexp/llama-piper-go/releases/download/v1.0.0/llama-piper-window.exe)
- **Technology:** Tauri framework

## ⚙️ Configuration

### Environment Variables

```bash
# OpenAI Configuration
NEXT_PUBLIC_OPENAI_APIKEY=your_api_key
NEXT_PUBLIC_OPENAI_URL=https://api.openai.com
NEXT_PUBLIC_OPENAI_MODEL=gpt-3.5-turbo

# Backend Selection
NEXT_PUBLIC_CHATBOT_BACKEND=openai
NEXT_PUBLIC_TTS_BACKEND=openai_tts
NEXT_PUBLIC_STT_BACKEND=whisper_openai
NEXT_PUBLIC_VISION_BACKEND=vision_openai
```

### Settings UI

Built-in configuration interface for easy setup without editing files.

## 🚀 Deployment

### Vercel

- **Configuration:** `vercel.json`
- **Output Directory:** `.next`
- **Framework:** Next.js

### Docker

- **Dockerfile:** Available
- **Docker Compose:** `docker-compose.yml`

## 🧪 Testing & Quality

### Testing Framework

- **Jest:** Unit and integration testing
- **GitHub Actions:** CI/CD pipeline
- **Coverage:** Automated test coverage

### Monitoring

- **Error Tracking:** Sentry integration
- **Analytics:** Built-in analytics

## 👥 Community

### Links

- **GitHub:** https://github.com/semperai/MIYORA
- **Issues:** https://github.com/semperai/MIYORA/issues
- **Twitter:** https://twitter.com/arbius_ai
- **Documentation:** https://docs.heyMIYORA.com

### Contributing

- **Contributors:** [View Contributors](https://github.com/semperai/MIYORA/graphs/contributors)
- **License:** MIT License
- **Origin:** Fork of ChatVRM by Pixiv

## 📊 Project Status

- **Current Version:** 1.2
- **Development Stage:** Active Development
- **Last Updated:** 2024
- **Node.js Requirement:** >=18.18.0

## 🏷️ Tags & Keywords

AI Chat, 3D Characters, Voice Interaction, Emotion Engine, VRM Support, Multimodal AI, Conversational AI, Virtual Assistant, Text-to-Speech, Speech-to-Text, Computer Vision, Real-time Rendering, Cross-platform, Progressive Web App, Desktop Application

---

_This metadata is automatically generated and maintained for the MIYORA project._
