import React, { useState, useEffect } from 'react';

interface MetadataInfoProps {
    className?: string;
}

interface ProjectMetadata {
    name: string;
    version: string;
    description: string;
    author: {
        name: string;
        url: string;
    };
    homepage: string;
    documentation: string;
    features: Record<string, any>;
    platforms: Record<string, any>;
    status: {
        version: string;
        stage: string;
        last_updated: string;
    };
}

export const MetadataInfo: React.FC<MetadataInfoProps> = ({ className = '' }) => {
    const [metadata, setMetadata] = useState<ProjectMetadata | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMetadata = async () => {
            try {
                const response = await fetch('/api/metadata');
                if (!response.ok) {
                    throw new Error('Failed to fetch metadata');
                }
                const data = await response.json();
                setMetadata(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchMetadata();
    }, []);

    if (loading) {
        return (
            <div className={`p-4 bg-gray-50 rounded-lg ${className}`}>
                <div className="animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
            </div>
        );
    }

    if (error || !metadata) {
        return (
            <div className={`p-4 bg-red-50 border border-red-200 rounded-lg ${className}`}>
                <p className="text-red-600">Failed to load project information</p>
            </div>
        );
    }

    return (
        <div className={`bg-white border border-gray-200 rounded-lg shadow-sm ${className}`}>
            <div className="p-6">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {metadata.name} v{metadata.version}
                    </h2>
                    <p className="text-gray-600 mb-4">{metadata.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {metadata.status.stage}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            v{metadata.status.version}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {metadata.status.last_updated}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Author & Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Info</h3>
                        <div className="space-y-2 text-sm">
                            <div>
                                <span className="font-medium text-gray-700">Author:</span>
                                <a
                                    href={metadata.author.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-2 text-blue-600 hover:text-blue-800"
                                >
                                    {metadata.author.name}
                                </a>
                            </div>
                            <div>
                                <span className="font-medium text-gray-700">Homepage:</span>
                                <a
                                    href={metadata.homepage}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-2 text-blue-600 hover:text-blue-800"
                                >
                                    {metadata.homepage}
                                </a>
                            </div>
                            <div>
                                <span className="font-medium text-gray-700">Documentation:</span>
                                <a
                                    href={metadata.documentation}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-2 text-blue-600 hover:text-blue-800"
                                >
                                    {metadata.documentation}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Platforms */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Platforms</h3>
                        <div className="space-y-2 text-sm">
                            {Object.entries(metadata.platforms).map(([key, platform]: [string, any]) => (
                                <div key={key}>
                                    <span className="font-medium text-gray-700 capitalize">{key}:</span>
                                    <span className="ml-2 text-gray-600">{platform.description}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {Object.entries(metadata.features).map(([key, feature]: [string, any]) => (
                            <div key={key} className="p-3 bg-gray-50 rounded-md">
                                <h4 className="font-medium text-gray-900 capitalize mb-1">
                                    {key.replace('-', ' ')}
                                </h4>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                                {feature.technology && (
                                    <p className="text-xs text-gray-500 mt-1">
                                        Tech: {feature.technology}
                                    </p>
                                )}
                                {feature.technologies && (
                                    <p className="text-xs text-gray-500 mt-1">
                                        Tech: {feature.technologies.slice(0, 2).join(', ')}
                                        {feature.technologies.length > 2 && '...'}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}; 