import React, { useState } from 'react';
import { ClipboardDocumentIcon, CheckIcon } from '@heroicons/react/24/outline';

interface CAPanelProps {
    className?: string;
}

export const CAPanel: React.FC<CAPanelProps> = ({ className = '' }) => {
    const [copied, setCopied] = useState(false);

    const contractAddress = "COMING SOON";

    const caText = `MIYORA Token Contract Address:

${contractAddress}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(caText);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const handleCopyAddress = async (address: string, network: string) => {
        try {
            await navigator.clipboard.writeText(address);
            // Show temporary feedback
            const button = document.querySelector(`[data-network="${network}"]`) as HTMLButtonElement;
            if (button) {
                const originalText = button.textContent;
                button.textContent = 'Copied!';
                button.classList.add('text-green-400');
                setTimeout(() => {
                    button.textContent = originalText;
                    button.classList.remove('text-green-400');
                }, 1000);
            }
        } catch (err) {
            console.error('Failed to copy address: ', err);
        }
    };

    return (
        <div className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-4 w-fit ${className}`}>
            <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                <span className="font-mono text-sm text-white/90 select-all">
                    CA: {contractAddress}
                </span>
                <button
                    onClick={() => handleCopyAddress(contractAddress, 'main')}
                    data-network="main"
                    className="text-blue-400 hover:text-blue-300 text-xs transition-colors px-2 py-1 rounded-md hover:bg-white/10 flex items-center gap-1"
                >
                    <span>Copy</span>
                    <ClipboardDocumentIcon className="w-4 h-4" />
                </button>
                <button
                    onClick={() => window.open('https://x.com/MiyoraAI', '_blank')}
                    className="text-white/70 hover:text-white text-xs transition-colors px-2 py-1 rounded-md hover:bg-white/10 flex items-center gap-1"
                    title="Follow us on X"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}; 