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
        <div className="space-y-4">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white/70">Contract Address:</span>
                    <button
                        onClick={() => handleCopyAddress(contractAddress, 'main')}
                        data-network="main"
                        className="text-blue-400 hover:text-blue-300 text-xs transition-colors px-2 py-1 rounded-md hover:bg-white/10"
                    >
                        Copy
                    </button>
                </div>
                <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                    <span className="font-mono text-sm text-white/90 break-all select-all">
                        {contractAddress}
                    </span>
                </div>
            </div>
        </div>
    );
}; 