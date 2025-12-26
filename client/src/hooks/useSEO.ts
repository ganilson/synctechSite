import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
    type?: string;
    image?: string;
}

export const useSEO = ({
    title,
    description,
    keywords,
    canonical,
    type = 'website',
    image = '/og-image.png'
}: SEOProps) => {
    useEffect(() => {
        // Update Title
        const fullTitle = `${title} | Synctech - Inovação e Tecnologia`;
        document.title = fullTitle;

        // Update Meta Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }

        // Update Meta Keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (keywords) {
            if (!metaKeywords) {
                metaKeywords = document.createElement('meta');
                metaKeywords.setAttribute('name', 'keywords');
                document.head.appendChild(metaKeywords);
            }
            metaKeywords.setAttribute('content', keywords);
        }

        // Update Open Graph Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', fullTitle);

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.setAttribute('content', description);

        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) ogImage.setAttribute('content', image);

        const ogType = document.querySelector('meta[property="og:type"]');
        if (ogType) ogType.setAttribute('content', type);

        // Update Canonical
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            if (!linkCanonical) {
                linkCanonical = document.createElement('link');
                linkCanonical.setAttribute('rel', 'canonical');
                document.head.appendChild(linkCanonical);
            }
            linkCanonical.setAttribute('href', canonical);
        }

        // Optional: Reset on unmount if needed, but for SPAs usually just letting the next page override is fine
    }, [title, description, keywords, canonical, type, image]);
};
