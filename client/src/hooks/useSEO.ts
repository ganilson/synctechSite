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
    const baseUrl = 'https://synctech.ao';
    const currentUrl = typeof window !== 'undefined' ? window.location.href : baseUrl;

    // Ensure absolute image URL
    const absoluteImage = image.startsWith('http')
        ? image
        : `${baseUrl}${image.startsWith('/') ? '' : '/'}${image}`;

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
        updateMeta('property', 'og:title', fullTitle);
        updateMeta('property', 'og:description', description);
        updateMeta('property', 'og:image', absoluteImage);
        updateMeta('property', 'og:type', type);
        updateMeta('property', 'og:url', currentUrl);

        // Update Twitter Tags
        updateMeta('name', 'twitter:title', fullTitle);
        updateMeta('name', 'twitter:description', description);
        updateMeta('name', 'twitter:image', absoluteImage);
        updateMeta('name', 'twitter:url', currentUrl);

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

function updateMeta(attr: 'name' | 'property', key: string, content: string) {
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}
