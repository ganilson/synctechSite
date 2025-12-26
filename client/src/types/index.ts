export type Language = 'en' | 'pt';

export interface TranslationData {
    nav: {
        services: string;
        portfolio: string;
        gallery: string;
        partners: string;
        blog: string;
        contact: string;
        quote: string;
        callNow: string;
    };
    hero: {
        tagline: string;
        title1: string;
        title2: string;
        subtitle: string;
        cta: string;
    };
    quote: {
        title: string;
        desc: string;
        type: string;
        details: string;
        placeholder: string;
        submit: string;
        types: {
            mobile: string;
            web: string;
            hybrid: string;
            consulting: string;
        };
    };
    gallery: {
        title: string;
        desc: string;
        viewAll: string;
        events: string;
    };
    portfolio: {
        title: string;
        subtitle: string;
        viewProject: string;
        techStack: string;
        close: string;
        projects: Array<{
            title: string;
            subtitle: string;
            description: string;
        }>;
    };
    partners: {
        title: string;
        desc: string;
    };
    newsletter: {
        badge: string;
        title: string;
        desc: string;
        placeholder: string;
        button: string;
    };
    footer: {
        desc: string;
        services: string;
        servicesList: {
            web: string;
            mobile: string;
            consulting: string;
            infra: string;
        };
        legal: string;
        privacy: string;
        terms: string;
        rights: string;
        madeIn: string;
    };
    ai: {
        powered: string;
        title: string;
        desc: string;
        questions: string[];
        placeholder: string;
        assistantName: string;
        online: string;
        mascotMsg: string;
        welcome: string;
        error: string;
    };
    blog: {
        title: string;
        description: string;
        all: string;
        filterBy: string;
        readMore: string;
    };
}
