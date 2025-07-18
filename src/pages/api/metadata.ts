import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const metadata = {
        name: "MIYORA",
        version: "0.1.0",
        description: "Your friendly personal AI - A highly customizable 3D character chat application with voice, vision, and emotion capabilities",
        keywords: [
            "ai", "chat", "3d", "vrm", "voice", "vision", "emotion",
            "virtual-character", "conversational-ai", "text-to-speech",
            "speech-to-text", "openai", "llama", "ollama", "threejs",
            "nextjs", "react", "typescript"
        ],
        author: {
            name: "SemperAI",
            url: "https://github.com/semperai"
        },
        license: "MIT",
        repository: {
            type: "git",
            url: "https://github.com/semperai/MIYORA.git"
        },
        homepage: "https://MIYORA.arbius.ai",
        documentation: "https://docs.heyMIYORA.com",
        bugs: {
            url: "https://github.com/semperai/MIYORA/issues"
        },
        engines: {
            node: ">=18.18.0"
        },
        features: {
            "3d-rendering": {
                technology: "three.js",
                description: "3D character rendering and animation"
            },
            "vrm-support": {
                technology: "@pixiv/three-vrm",
                description: "VRM format support for 3D characters"
            },
            "ai-chat": {
                technologies: [
                    "OpenAI ChatGPT API",
                    "Llama.cpp",
                    "Ollama",
                    "KoboldCpp",
                    "OpenRouter",
                    "Window.ai"
                ],
                description: "Multiple AI chat backends supported"
            },
            "text-to-speech": {
                technologies: [
                    "Eleven Labs API",
                    "Speech T5",
                    "OpenAI TTS",
                    "Coqui (Local)",
                    "RVC",
                    "AllTalkTTS"
                ],
                description: "Multiple TTS engines with voice customization"
            },
            "speech-to-text": {
                technologies: [
                    "Whisper",
                    "Silero VAD"
                ],
                description: "Voice recognition and activity detection"
            },
            "vision": {
                technologies: [
                    "Bakllava"
                ],
                description: "Image analysis and understanding"
            },
            "emotion-engine": {
                description: "Dynamic emotional expressions for characters"
            },
            "multilingual": {
                description: "Internationalization support with i18next"
            },
            "desktop-app": {
                technology: "Tauri",
                description: "Cross-platform desktop application"
            },
            "pwa": {
                technology: "@ducanh2912/next-pwa",
                description: "Progressive Web App capabilities"
            }
        },
        platforms: {
            web: {
                url: "https://MIYORA.arbius.ai",
                description: "Web application accessible on mobile, tablet, and desktop"
            },
            desktop: {
                download: "https://github.com/flukexp/llama-piper-go/releases/download/v1.0.0/llama-piper-window.exe",
                description: "Windows desktop application"
            }
        },
        architecture: {
            frontend: {
                framework: "Next.js",
                language: "TypeScript",
                styling: "Tailwind CSS",
                state_management: "React Context"
            },
            backend: {
                type: "API-based",
                supported_apis: [
                    "OpenAI",
                    "Eleven Labs",
                    "Coqui",
                    "Local services"
                ]
            },
            "3d-engine": {
                technology: "Three.js",
                features: [
                    "VRM model loading",
                    "Animation support",
                    "Real-time rendering"
                ]
            }
        },
        deployment: {
            vercel: {
                configuration: "vercel.json",
                output_directory: ".next"
            },
            docker: {
                file: "Dockerfile",
                compose: "docker-compose.yml"
            }
        },
        testing: {
            framework: "Jest",
            coverage: "GitHub Actions",
            scripts: [
                "test",
                "test:ci"
            ]
        },
        monitoring: {
            error_tracking: "Sentry",
            analytics: "Built-in"
        },
        community: {
            contributors: "https://github.com/semperai/MIYORA/graphs/contributors",
            issues: "https://github.com/semperai/MIYORA/issues",
            discussions: "GitHub Discussions",
            twitter: "https://twitter.com/arbius_ai"
        },
        history: {
            origin: "Fork of ChatVRM by Pixiv",
            original_url: "https://pixiv.github.io/ChatVRM"
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
            "desktop-application"
        ],
        status: {
            version: "1.2",
            stage: "active-development",
            last_updated: "2024"
        }
    };

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
    res.status(200).json(metadata);
} 