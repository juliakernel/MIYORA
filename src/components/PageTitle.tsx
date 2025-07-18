import Head from 'next/head';
import { useEffect } from 'react';

interface PageTitleProps {
    title?: string;
    description?: string;
    children?: React.ReactNode;
}

export const PageTitle: React.FC<PageTitleProps> = ({
    title = "MIYORA - Your Friendly Personal AI",
    description = "Converse with highly customizable 3D characters that can communicate via natural voice chat and vision, with an emotion engine that allows MIYORA to express feelings and more.",
    children
}) => {
    useEffect(() => {
        // Update document title
        document.title = title;
    }, [title]);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
            </Head>
            {children}
        </>
    );
}; 