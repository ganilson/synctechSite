import { TranslationData, Language } from "../types";

export const translations: Record<Language, TranslationData> = {
    en: {
        nav: {
            services: "Services",
            portfolio: "Portfolio",
            gallery: "Gallery",
            partners: "Partners",
            blog: "Blog",
            contact: "Contact",
            quote: "Get a Quote",
            callNow: "Call Now"
        },
        portfolio: {
            title: "Our Work",
            subtitle: "High-impact digital solutions that transform businesses and lives.",
            viewProject: "View Live Project",
            techStack: "Technologies Used",
            close: "Close",
            projects: [
                {
                    title: "Praça Digital",
                    subtitle: "Full-Scale Ecosystem",
                    description: "A revolutionary multi-vendor e-commerce ecosystem where everyone can trade. Features a high-performance backend with TabernacleORM for lightning-fast database operations and a reactive Vue.js interface for a seamless shopping experience."
                },
                {
                    title: "Syncmenu",
                    subtitle: "Real-time Operations",
                    description: "Cutting-edge real-time order management system. Eliminates delays in high-traffic restaurants through instant synchronization between kitchen, waitstaff, and customers using high-concurrency Node.js architecture."
                },
                {
                    title: "Camara do Comercio e Industria do Cunene",
                    subtitle: "Bussiness Controll",
                    description: "Sophisticated digital presence for the Cunene Chamber of Commerce, designed to strengthen institutional engagement, foster business growth, and enhance regional economic connectivity. Showcasing leadership, innovation, and strategic partnerships through a secure, high-performance, and scalable digital platform."
                },
                {
                    title: "Talagás",
                    subtitle: "Energy on Demand",
                    description: "Strategic gas delivery application that optimizes urban logistics. Uses real-time tracking and automated dispatching to ensure households never run out of energy, powered by a scalable MongoDB/Node.js stack."
                },
                {
                    title: "RealezaOral",
                    subtitle: "Clinical Excellence",
                    description: "Advanced healthcare management and digital patient engagement platform for a premier dental clinic. Focused on accessibility, security, and a premium patient experience through modern web technologies."
                }
            ]
        },
        hero: {
            tagline: "Innovation • Support • Infrastructure",
            title1: "Transforming",
            title2: "Ideas Into Code",
            subtitle: "Software House specialized in developing high-impact digital solutions.",
            cta: "Let's talk?"
        },
        quote: {
            title: "Request Quote",
            desc: "Tell us about your project and we will contact you via WhatsApp.",
            type: "Project Type",
            details: "Project Details",
            placeholder: "Describe your main features, ideal deadline, or references...",
            submit: "Send via WhatsApp",
            types: {
                mobile: "Mobile App",
                web: "Website / WebApp",
                hybrid: "Hybrid System",
                consulting: "IT Consulting"
            }
        },
        gallery: {
            title: "Our Culture",
            desc: "An inside look at Synctech. Innovation happens when passionate people work together.",
            viewAll: "View All",
            events: "Events"
        },
        partners: {
            title: "Trusted by Industry Leaders",
            desc: "Partnering with innovative companies to deliver exceptional solutions"
        },
        newsletter: {
            badge: "Stay Connected",
            title: "Stay Updated",
            desc: "Subscribe to our newsletter to receive the latest news about technology, innovation, and Synctech updates.",
            placeholder: "Enter your email",
            button: "Subscribe"
        },
        footer: {
            desc: "Innovation, Support and Infrastructure. Building the digital future of Angola and the world.",
            services: "Services",
            servicesList: {
                web: "Web Development",
                mobile: "Mobile Apps",
                consulting: "IT Consulting",
                infra: "Infrastructure"
            },
            legal: "Legal",
            privacy: "Privacy",
            terms: "Terms",
            rights: "All rights reserved.",
            madeIn: "Made with ❤️ in Huila"
        },
        ai: {
            powered: "POWERED BY GEMINI 2.5",
            title: "Intelligence that understands your business",
            desc: "Our AI is not just a chatbot. It understands the context of Synctech, our infrastructure, and can guide you to the ideal solution even before talking to a human.",
            questions: [
                "What technologies does Synctech use?",
                "I need a Mobile App, how does it work?",
                "Do you provide support after launch?"
            ],
            placeholder: "Ask about our services...",
            assistantName: "Synctech AI",
            online: "Online",
            mascotMsg: "Meow! Ready to help.",
            welcome: "Hello! I'm Synctech AI. How can I help you today?",
            error: "Sorry, I'm having trouble connecting right now."
        },
        blog: {
            title: "Our Blog & Insight",
            description: "Deep dives into technology, software development trends in Angola, and best practices for modern infrastructure.",
            all: "All",
            filterBy: "Filter by Category",
            readMore: "Read Full Article",
            viewAll: "View Full Blog",
            ceoChoice: "CEO's Choice"
        },
        promo: {
            badge: "Black Sync Special 🎅",
            title: "Transform your business with",
            titleAccent: "Professional Websites",
            from: "starting from 230,000 KZ",
            cta: "View Plans & Offers",
            expiry: "Valid until January 15"
        },
        blogIndex: {
            featuredBadge: "Featured",
            coreTeam: "Core Team",
            readNow: "Read Now",
            themes: {
                software: {
                    title: "Modern Software",
                    desc: "React, Node.js and high-level architectures for the world."
                },
                innovation: {
                    title: "Global Innovation",
                    desc: "Digital strategies for successful businesses."
                },
                performance: {
                    title: "Performance Pro",
                    desc: "Maximum optimization for scale and low latency."
                },
                explore: "Explore Themes"
            }
        },
        blogPost: {
            backToBlog: "Back to Blog",
            notFound: "Article not found",
            notFoundDesc: "The article you are looking for might have been removed or the link is incorrect.",
            author: "Author",
            details: "Details",
            tags: "Tags",
            share: "Share",
            relatedPosts: "Related Articles",
            copy: "Copy",
            copied: "Copied",
            platform: "Synctech Insight Platform",
            error: "Error loading article",
            banners: {
                elite: {
                    title: "Elite Software",
                    subtitle: "Luanda & World.",
                    cta: "Consulting"
                },
                scale: {
                    title: "Scale & Dev",
                    subtitle: "Maximum Performance.",
                    cta: "Call Now"
                }
            }
        }
    },
    pt: {
        nav: {
            services: "Serviços",
            portfolio: "Portfólio",
            gallery: "Galeria",
            partners: "Parceiros",
            blog: "Blog",
            contact: "Contacto",
            quote: "Solicitar Orçamento",
            callNow: "Ligar Agora"
        },
        portfolio: {
            title: "Nossos Trabalhos",
            subtitle: "Soluções digitais de alto impacto que transformam negócios e vidas.",
            viewProject: "Ver Projeto ao Vivo",
            techStack: "Tecnologias Utilizadas",
            close: "Fechar",
            projects: [
                {
                    title: "Praça Digital",
                    subtitle: "Ecossistema Completo",
                    description: "Um ecossistema revolucionário de e-commerce multi-vendedor onde todos podem vender. Possui um backend de alta performance com TabernacleORM para operações de banco de dados ultrarrápidas e uma interface Vue.js reativa para uma experiência de compra contínua."
                },
                {
                    title: "Syncmenu",
                    subtitle: "Operações em Tempo Real",
                    description: "Sistema de gestão de pedidos em tempo real de última geração. Elimina atrasos em restaurantes de alto tráfego através da sincronização instantânea entre a cozinha, os garçons e os clientes usando uma arquitetura Node.js de alta concorrência."
                },
                {
                    title: "CCAPIC",
                    subtitle: "Instituição Estatál",
                    description: "Presença digital sofisticada para a Câmara do Comércio do Cunene, concebida para fortalecer o relacionamento institucional, impulsionar o crescimento empresarial e promover a dinamização económica da região. Destacando liderança, inovação e parcerias estratégicas através de uma plataforma digital segura, robusta, escalável e de alto desempenho."
                },
                {
                    title: "Talagás",
                    subtitle: "Energia Sob Demanda",
                    description: "Aplicação estratégica de entrega de gás que otimiza a logística urbana. Utiliza rastreamento em tempo real e despacho automatizado para garantir que as residências nunca fiquem sem energia, alimentado por um stack escalável MongoDB/Node.js."
                },
                {
                    title: "RealezaOral",
                    subtitle: "Excelência Clínica",
                    description: "Plataforma avançada de gestão de saúde e engajamento digital de pacientes para uma clínica odontológica de elite. Focada em acessibilidade, segurança e uma experiência premium para o paciente através de tecnologias web modernas."
                }
            ]
        },
        hero: {
            tagline: "Inovação • Suporte • Infraestrutura",
            title1: "Transformando",
            title2: "Ideias em Código",
            subtitle: "Software House especializada no desenvolvimento de soluções digitais de alto impacto.",
            cta: "Vamos conversar?"
        },
        quote: {
            title: "Solicitar Orçamento",
            desc: "Conte-nos sobre o seu projeto e entraremos em contacto via WhatsApp.",
            type: "Tipo de Projeto",
            details: "Detalhes do Projeto",
            placeholder: "Descreva suas funcionalidades principais, prazo ideal, ou referências...",
            submit: "Enviar no WhatsApp",
            types: {
                mobile: "App Mobile",
                web: "Website / WebApp",
                hybrid: "Sistema Híbrido",
                consulting: "Consultoria TI"
            }
        },
        gallery: {
            title: "Nossa Cultura",
            desc: "Um olhar por dentro da Synctech. Inovação acontece quando pessoas apaixonadas trabalham juntas.",
            viewAll: "Ver tudo",
            events: "Eventos"
        },
        partners: {
            title: "Líderes que Confiam em Nós",
            desc: "Parcerias com empresas inovadoras para entregar soluções excepcionais"
        },
        newsletter: {
            badge: "Fique Conectado",
            title: "Fique Atualizado",
            desc: "Assine nossa newsletter para receber as últimas novidades sobre tecnologia, inovação e atualizações da Synctech.",
            placeholder: "Digite seu e-mail",
            button: "Inscrever-se"
        },
        footer: {
            desc: "Inovação, Suporte e Infraestrutura. Construindo o futuro digital de Angola e do mundo.",
            services: "Serviços",
            servicesList: {
                web: "Desenvolvimento Web",
                mobile: "Apps Mobile",
                consulting: "Consultoria TI",
                infra: "Infraestrutura"
            },
            legal: "Legal",
            privacy: "Privacidade",
            terms: "Termos",
            rights: "Todos os direitos reservados.",
            madeIn: "Feito com ❤️ na Huíla"
        },
        ai: {
            powered: "POWERED BY GEMINI 2.5",
            title: "Inteligência que entende o seu negócio",
            desc: "Nossa IA não é apenas um chatbot. Ela entende o contexto da Synctech, nossa infraestrutura e pode guiar você para a solução ideal antes mesmo de falar com um humano.",
            questions: [
                "Quais tecnologias a Synctech usa?",
                "Preciso de um App Mobile, como funciona?",
                "Vocês dão suporte após o lançamento?"
            ],
            placeholder: "Pergunte sobre nossos serviços...",
            assistantName: "Synctech AI",
            online: "Online",
            mascotMsg: "Miau! Pronto para ajudar.",
            welcome: "Olá! Sou a IA da Synctech. Como posso ajudar-vos hoje?",
            error: "Desculpe, estou com dificuldades de conexão no momento."
        },
        blog: {
            title: "Nosso Blog & Insights",
            description: "Análises profundas sobre tecnologia, tendências de desenvolvimento de software em Angola e infraestrutura moderna.",
            all: "Tudo",
            filterBy: "Filtrar por Categoria",
            readMore: "Ler Artigo Completo",
            viewAll: "Ver Todo o Blog",
            ceoChoice: "Destaque do CEO"
        },
        promo: {
            badge: "Black Sync Especial 🎅",
            title: "Transforme o seu negócio com",
            titleAccent: "Sites Profissionais",
            from: "a partir de 230.000 KZ",
            cta: "Ver Planos & Ofertas",
            expiry: "Válido até 15 de Janeiro"
        },
        blogIndex: {
            featuredBadge: "Destaque",
            coreTeam: "Equipa Principal",
            readNow: "Ler Agora",
            themes: {
                software: {
                    title: "Software Moderno",
                    desc: "React, Node.js e arquiteturas de alto nível para o mundo."
                },
                innovation: {
                    title: "Inovação Global",
                    desc: "Estratégias digitais para empresas de sucesso."
                },
                performance: {
                    title: "Performance Pro",
                    desc: "Otimização máxima para escala e baixa latência."
                },
                explore: "Explorar Temas"
            }
        },
        blogPost: {
            backToBlog: "Voltar ao Blog",
            notFound: "Artigo não encontrado",
            notFoundDesc: "O artigo que procura pode ter sido removido ou o link está incorreto.",
            author: "Autor",
            details: "Detalhes",
            tags: "Tags",
            share: "Partilhar",
            relatedPosts: "Artigos Relacionados",
            copy: "Copiar",
            copied: "Copiado",
            platform: "Synctech Insight Platform",
            error: "Erro ao carregar artigo",
            banners: {
                elite: {
                    title: "Software de Elite",
                    subtitle: "Luanda & Mundo.",
                    cta: "Consultoria"
                },
                scale: {
                    title: "Escala & Dev",
                    subtitle: "Performance Máxima.",
                    cta: "Falar Agora"
                }
            }
        }
    }
};
