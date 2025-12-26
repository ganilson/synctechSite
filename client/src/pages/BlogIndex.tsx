import { useEffect } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { Navbar } from "@/components/sections/Navbar";
import { PromoBanner } from "@/components/ui/PromoBanner";
import { Blog as BlogSection } from "@/components/sections/Blog";
import { Footer } from "@/components/sections/Footer";
import { AIChat } from "@/components/sections/AIChat";
import { ArrowRight, Code, Globe, Zap } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import blogData from "@/lib/blog.json";

interface BlogIndexProps {
    lang: Language;
    setLang: (l: Language) => void;
}

export default function BlogIndex({ lang, setLang }: BlogIndexProps) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useSEO({
        title: "Blog Synctech | Insights sobre Tecnologia e Inovação em Angola",
        description: "Explore os últimos artigos sobre desenvolvimento de software, ORMs, transformação digital e o mercado tecnológico em Luanda. O conhecimento que move Angola.",
        keywords: "blog tecnologia angola, tech insights luanda, desenvolvimento de software angola, inovação tech"
    });

    const featuredPost = blogData.find(p => p.featured) || blogData[0];

    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30 dark font-sans overflow-x-hidden">
            <Navbar lang={lang} setLang={setLang} />
            <PromoBanner />

            <main className="pt-28 pb-16">
                {/* Hero / Cover Area - More Compact */}
                <section className="container mx-auto px-6 mb-16">
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5 min-h-[400px] flex flex-col md:flex-row items-stretch">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

                        <div className="w-full md:w-1/2 p-10 lg:p-14 relative z-10 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 mb-5"
                            >
                                <span className="px-2.5 py-1 rounded-lg bg-primary/20 text-primary text-[9px] font-black uppercase tracking-widest border border-primary/20">
                                    Destaque
                                </span>
                                <span className="text-gray-500 text-[9px] font-black uppercase tracking-widest italic">
                                    • {featuredPost.category}
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-[1.1] tracking-tighter"
                            >
                                {featuredPost.title}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-400 text-base mb-8 max-w-lg leading-relaxed font-medium"
                            >
                                {featuredPost.excerpt}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <a
                                    href={`/blog/${featuredPost.slug}`}
                                    className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all group shadow-xl"
                                >
                                    Ler Agora
                                    <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                                </a>
                            </motion.div>
                        </div>

                        <div className="w-full md:w-1/2 h-full min-h-[300px] relative">
                            <motion.img
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                src={featuredPost.image}
                                alt="Featured"
                                className="w-full h-full object-cover absolute inset-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/40 to-transparent md:block hidden" />
                        </div>
                    </div>
                </section>

                {/* Popular Themes - Tightened */}
                <section className="container mx-auto px-6 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="p-7 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:border-primary/30 transition-all group backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform">
                                <Code className="text-primary" size={20} />
                            </div>
                            <h3 className="text-base font-black mb-3 text-white uppercase tracking-tight">Software Moderno</h3>
                            <p className="text-[11px] text-gray-500 mb-6 leading-relaxed font-medium italic">React, Node.js e arquiteturas de alto nível para Angola.</p>
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                                Explorar Temas <ArrowRight size={12} />
                            </span>
                        </div>
                        <div className="p-7 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:border-blue-500/30 transition-all group backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5 group-hover:-rotate-6 transition-transform">
                                <Globe className="text-blue-500" size={20} />
                            </div>
                            <h3 className="text-base font-black mb-3 text-white uppercase tracking-tight">Inovação Luanda</h3>
                            <p className="text-[11px] text-gray-500 mb-6 leading-relaxed font-medium italic">Estratégias digitais para empresas locais de sucesso.</p>
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-500 flex items-center gap-2 group-hover:gap-3 transition-all">
                                Explorar Temas <ArrowRight size={12} />
                            </span>
                        </div>
                        <div className="p-7 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:border-warm-accent/30 transition-all group backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-xl bg-warm-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                <Zap className="text-warm-accent" size={20} />
                            </div>
                            <h3 className="text-base font-black mb-3 text-white uppercase tracking-tight">Performance Pro</h3>
                            <p className="text-[11px] text-gray-500 mb-6 leading-relaxed font-medium italic">Otimização máxima para escala e baixa latência.</p>
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-warm-accent flex items-center gap-2 group-hover:gap-3 transition-all">
                                Explorar Temas <ArrowRight size={12} />
                            </span>
                        </div>
                    </div>
                </section>

                {/* Main List */}
                <BlogSection lang={lang} />
            </main>

            <Footer lang={lang} />
            <AIChat lang={lang} />
        </div>
    );
}
