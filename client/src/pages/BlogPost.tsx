import { useEffect, useState } from "react";
import { useParams, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Language } from "@/types";
import { Navbar } from "@/components/sections/Navbar";
import { PromoBanner } from "@/components/ui/PromoBanner";
import { useSEO } from "@/hooks/useSEO";
import { Footer } from "@/components/sections/Footer";
import { AIChat } from "@/components/sections/AIChat";
import { Calendar, Clock, User, Share2, Code, ChevronRight, Zap, X, Linkedin, Twitter, MessageCircle, Copy, Check, ArrowRight, Eye } from "lucide-react";
import blogData from "@/lib/blog.json";
import { translations } from "@/lib/translations";

interface BlogPostProps {
    lang: Language;
    setLang: (l: Language) => void;
}

export default function BlogPost({ lang, setLang }: BlogPostProps) {
    const t = translations[lang].blogPost;
    const { slug } = useParams();
    const [_, setLocation] = useLocation();
    const [shareModalOpen, setShareModalOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setScrollProgress(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const post = blogData.find(p => p.slug === slug);
    const relatedPosts = blogData.filter(p => p.slug !== slug).slice(0, 2);

    useSEO({
        title: post?.seo?.title || post?.title || (lang === 'en' ? "Article" : "Artigo"),
        description: post?.seo?.description || post?.excerpt || "",
        keywords: post?.seo?.keywords,
        image: post?.image || '/og-image.png',
        type: 'article'
    });

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shareLinks = {
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post?.title || "")}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent((post?.title || "") + " " + window.location.href)}`
    };

    if (!post) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-2xl font-bold mb-4">{t.notFound}</h1>
                <p className="text-gray-400 mb-6 max-w-sm text-sm">{t.notFoundDesc}</p>
                <button
                    onClick={() => setLocation("/blog")}
                    className="px-5 py-2 bg-primary text-white rounded-lg font-bold text-xs hover:bg-primary/80 transition-all"
                >
                    {t.backToBlog}
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30 dark font-sans overflow-x-hidden">
            <style>{`
                /* Custom scrollbar - invisible but functional */
                ::-webkit-scrollbar {
                    width: 4px;
                }
                ::-webkit-scrollbar-track {
                    background: transparent;
                }
                ::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: 2px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.25);
                }
                /* Firefox scrollbar */
                * {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(255, 255, 255, 0.15) transparent;
                }
            `}</style>

            {/* FIXED NAVBAR */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
                <Navbar lang={lang} setLang={setLang} />
                {/* Reading Progress Bar */}
                <div className="h-0.5 bg-white/5">
                    <motion.div
                        className="h-full bg-gradient-to-r from-primary to-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${scrollProgress}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            {/* MAIN LAYOUT: Fixed Sidebars + Scrollable Center */}
            <div className="flex h-screen pt-20 overflow-hidden">
                {/* LEFT SIDEBAR: Fixed */}
                <aside className="hidden lg:flex lg:w-[15%] flex-col border-r border-white/5 bg-background/40 backdrop-blur-sm overflow-y-auto sticky top-20 max-h-[calc(100vh-5rem)]">
                    <style>{`
                        aside::-webkit-scrollbar {
                            width: 3px;
                        }
                        aside::-webkit-scrollbar-thumb {
                            background: rgba(255, 255, 255, 0.1);
                        }
                        aside::-webkit-scrollbar-thumb:hover {
                            background: rgba(255, 255, 255, 0.2);
                        }
                    `}</style>
                    <div className="p-4 space-y-5">
                        {/* Author Section */}
                        <div className="space-y-2.5">
                            <h4 className="text-[8px] font-black uppercase tracking-[0.25em] text-primary">{t.author}</h4>
                            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-blue-500 p-[1px] flex-shrink-0">
                                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                                        <User size={14} className="text-white/70" />
                                    </div>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] font-bold text-white leading-tight truncate">{post.author}</p>
                                    <p className="text-[8px] text-gray-500 uppercase font-medium truncate">{post.author === "Ganilson Garcia" ? "Founder" : t.coreTeam}</p>
                                </div>
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="border-t border-white/5 pt-3">
                            <h4 className="text-[8px] font-black uppercase tracking-[0.25em] text-primary mb-2.5">{t.details}</h4>
                            <ul className="space-y-1.5 text-[10px] font-medium text-gray-400">
                                <li className="flex items-center gap-2 p-1.5 rounded hover:bg-white/5 transition-colors">
                                    <Calendar size={10} className="text-primary/60 flex-shrink-0" />
                                    <span className="truncate">{post.date}</span>
                                </li>
                                <li className="flex items-center gap-2 p-1.5 rounded hover:bg-white/5 transition-colors">
                                    <Clock size={10} className="text-primary/60 flex-shrink-0" />
                                    <span className="truncate">{post.readTime}</span>
                                </li>
                                <li className="flex items-center gap-2 p-1.5 rounded hover:bg-white/5 transition-colors">
                                    <Eye size={10} className="text-primary/60 flex-shrink-0" />
                                    <span className="truncate">~{Math.floor(Math.random() * 5000) + 1000}</span>
                                </li>
                            </ul>
                        </div>

                        {/* Tags Section */}
                        <div className="border-t border-white/5 pt-3">
                            <h4 className="text-[8px] font-black uppercase tracking-[0.25em] text-primary mb-2">{t.tags}</h4>
                            <div className="flex flex-wrap gap-1">
                                {post.tags?.map((tag: string) => (
                                    <span key={tag} className="px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[7px] font-bold text-gray-400 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Share Button */}
                        <div className="border-t border-white/5 pt-3">
                            <button
                                onClick={() => setShareModalOpen(true)}
                                className="flex items-center justify-center gap-1.5 text-[8px] font-black uppercase tracking-widest text-primary hover:text-white transition-all group w-full p-2.5 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/50"
                            >
                                <Share2 size={10} className="group-hover:scale-110 transition-transform" />
                                {t.share}
                            </button>
                        </div>
                    </div>
                </aside>

                {/* CENTER: Scrollable Content */}
                <main className="flex-1 overflow-y-auto">
                    <style>{`
                        main::-webkit-scrollbar {
                            width: 4px;
                        }
                        main::-webkit-scrollbar-track {
                            background: transparent;
                        }
                        main::-webkit-scrollbar-thumb {
                            background: rgba(255, 255, 255, 0.12);
                            border-radius: 2px;
                        }
                        main::-webkit-scrollbar-thumb:hover {
                            background: rgba(255, 255, 255, 0.2);
                        }
                    `}</style>
                    <article className="max-w-3xl mx-auto px-6 md:px-8 py-8">
                        {/* Header: Title Area */}
                        <div className="mb-8">
                            <div className="flex items-center gap-2 text-[8px] text-primary mb-3 uppercase tracking-[0.3em] font-black">
                                <button onClick={() => setLocation("/blog")} className="hover:text-white transition-colors">Insights</button>
                                <ChevronRight size={7} className="text-gray-700" />
                                <span className="text-gray-500">{post.category}</span>
                            </div>
                            <motion.h1
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-2xl md:text-3xl font-black mb-3 leading-[1.2] tracking-tight"
                            >
                                {post.title}
                            </motion.h1>
                            <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
                                {post.excerpt}
                            </p>
                        </div>

                        {/* Main Content */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="bg-zinc-900/30 rounded-2xl border border-white/5 overflow-hidden mb-8"
                        >
                            <div className="aspect-video overflow-hidden border-b border-white/5">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="prose prose-invert prose-sm max-w-none">
                                    {post.body.map((item, i) => {
                                        if (item.type === "paragraph") {
                                            return (
                                                <p key={i} className="text-gray-300 leading-relaxed mb-5 text-sm md:text-base font-medium tracking-tight">
                                                    {item.content}
                                                </p>
                                            );
                                        }
                                        if (item.type === "heading") {
                                            return (
                                                <h2 key={i} className="text-lg md:text-xl font-black mb-4 mt-7 text-white leading-tight tracking-tight">
                                                    {item.content}
                                                </h2>
                                            );
                                        }
                                        if (item.type === "image") {
                                            return (
                                                <figure key={i} className="my-7 -mx-3 md:-mx-6">
                                                    <img src={item.url} alt={item.caption} className="rounded-xl w-full border border-white/10 shadow-lg hover:shadow-xl transition-shadow" />
                                                    <figcaption className="text-center text-[9px] text-gray-500 mt-3 italic font-medium tracking-wide uppercase">
                                                        {item.caption}
                                                    </figcaption>
                                                </figure>
                                            );
                                        }
                                        if (item.type === "code") {
                                            return (
                                                <div key={i} className="my-6 -mx-2 md:-mx-4">
                                                    <div className="bg-black/80 rounded-lg border border-white/10 overflow-hidden backdrop-blur-sm shadow-lg hover:border-white/20 transition-all">
                                                        <div className="px-4 py-2 border-b border-white/5 bg-white/5 flex items-center justify-between">
                                                            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-primary/80">{item.language || "code"}</span>
                                                            <button
                                                                onClick={() => navigator.clipboard.writeText(item.content)}
                                                                className="text-gray-500 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
                                                            >
                                                                <Copy size={12} />
                                                            </button>
                                                        </div>
                                                        <pre className="p-4 overflow-x-auto text-xs font-mono text-gray-300 leading-relaxed bg-black/40 max-h-80">
                                                            <code>{item.content}</code>
                                                        </pre>
                                                        {item.caption && (
                                                            <div className="px-4 py-1.5 bg-black/40 text-[8px] italic text-gray-500 border-t border-white/5 font-medium">
                                                                {item.caption}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>
                        </motion.div>

                        {/* Related Posts Section */}
                        <div className="mt-12 pt-8 border-t border-white/5">
                            <h3 className="text-lg font-black mb-6 tracking-tight uppercase tracking-[0.2em]">{t.relatedPosts}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {relatedPosts.map((relatedPost) => (
                                    <motion.button
                                        key={relatedPost.id}
                                        onClick={() => setLocation(`/blog/${relatedPost.slug}`)}
                                        className="group text-left"
                                        whileHover={{ y: -2 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="aspect-video rounded-lg overflow-hidden mb-3 border border-white/5 group-hover:border-white/20 transition-all">
                                            <img
                                                src={relatedPost.image}
                                                alt={relatedPost.title}
                                                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                                            />
                                        </div>
                                        <h4 className="text-sm font-black text-white group-hover:text-primary transition-colors leading-tight mb-1.5">
                                            {relatedPost.title}
                                        </h4>
                                        <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-gray-500 group-hover:text-gray-400">
                                            {relatedPost.date} • {relatedPost.readTime}
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Footer Info */}
                        <div className="mt-10 pt-6 border-t border-white/5 flex justify-between items-center text-[7px] font-black uppercase tracking-[0.3em] text-gray-600 italic">
                            <span>© {new Date().getFullYear()} Synctech Insights</span>
                            <span>Angola Tech Hub</span>
                        </div>
                    </article>
                </main>

                {/* RIGHT SIDEBAR: Fixed */}
                <aside className="hidden lg:flex lg:w-[15%] flex-col border-l border-white/5 bg-background/40 backdrop-blur-sm overflow-y-auto sticky top-20 max-h-[calc(100vh-5rem)]">
                    <style>{`
                        aside::-webkit-scrollbar {
                            width: 3px;
                        }
                        aside::-webkit-scrollbar-thumb {
                            background: rgba(255, 255, 255, 0.1);
                        }
                        aside::-webkit-scrollbar-thumb:hover {
                            background: rgba(255, 255, 255, 0.2);
                        }
                    `}</style>
                    <div className="p-4 space-y-3">
                        {/* Elite Banner */}
                        <motion.div
                            className="p-4 rounded-lg bg-gradient-to-br from-primary/20 to-zinc-950 border border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-all shadow-md hover:shadow-lg"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="relative z-10 text-center">
                                <div className="w-8 h-8 rounded-md bg-primary/20 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                                    <Code className="text-primary" size={16} />
                                </div>
                                <h4 className="text-xs font-black mb-1.5 leading-tight tracking-tight">{t.banners.elite.title}</h4>
                                <p className="text-[7px] text-gray-500 mb-3 uppercase font-black tracking-widest leading-relaxed">
                                    {t.banners.elite.subtitle}
                                </p>
                                <button
                                    onClick={() => window.open("https://wa.me/244946808054")}
                                    className="w-full py-2 bg-primary text-white rounded-md font-black text-[7px] tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all shadow-md hover:shadow-lg"
                                >
                                    {t.banners.elite.cta}
                                </button>
                            </div>
                        </motion.div>

                        {/* Scale Banner */}
                        <motion.div
                            className="p-4 rounded-lg bg-zinc-900/50 border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="relative z-10 text-center">
                                <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center mx-auto mb-2 group-hover:scale-95 transition-transform">
                                    <Zap className="text-warm-accent" size={16} />
                                </div>
                                <h4 className="text-xs font-black mb-1.5 leading-tight tracking-tight">{t.banners.scale.title}</h4>
                                <p className="text-[7px] text-gray-500 mb-3 uppercase font-black tracking-widest leading-relaxed">
                                    {t.banners.scale.subtitle}
                                </p>
                                <button
                                    onClick={() => window.open("tel:+244946808054")}
                                    className="w-full py-2 bg-white/10 text-white border border-white/10 rounded-md font-black text-[7px] tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all"
                                >
                                    {t.banners.scale.cta}
                                </button>
                            </div>
                        </motion.div>

                        {/* Newsletter CTA */}
                        <div className="border-t border-white/5 pt-3">
                            <h4 className="text-[8px] font-black uppercase tracking-[0.25em] text-primary mb-2">Newsletter</h4>
                            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                                <p className="text-[7px] text-gray-400 mb-2.5 leading-relaxed">
                                    Receba os melhores insights.
                                </p>
                                <button className="w-full py-1.5 bg-primary/20 text-primary text-[7px] font-black rounded-md hover:bg-primary hover:text-white transition-all">
                                    Inscrever
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            {/* SHARE MODAL */}
            <AnimatePresence>
                {shareModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShareModalOpen(false)}
                            className="absolute inset-0"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="relative w-full max-w-sm bg-zinc-950 border border-white/10 rounded-xl p-6 overflow-hidden shadow-2xl"
                        >
                            <div className="absolute top-3 right-3">
                                <button onClick={() => setShareModalOpen(false)} className="text-gray-500 hover:text-white transition-colors p-1.5">
                                    <X size={18} />
                                </button>
                            </div>

                            <h3 className="text-lg font-black mb-1 text-white">{t.share}</h3>
                            <p className="text-gray-500 text-[8px] mb-5 uppercase font-black tracking-[0.2em]">{t.platform}</p>

                            <div className="grid grid-cols-3 gap-2.5 mb-5">
                                <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-[#0077b5]/20 group transition-all">
                                    <Linkedin className="text-gray-400 group-hover:text-[#0077b5]" size={16} />
                                    <span className="text-[7px] font-black uppercase text-gray-500">LinkedIn</span>
                                </a>
                                <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 group transition-all">
                                    <Twitter className="text-gray-400 group-hover:text-white" size={16} />
                                    <span className="text-[7px] font-black uppercase text-gray-500">Twitter</span>
                                </a>
                                <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-[#25D366]/20 group transition-all">
                                    <MessageCircle className="text-gray-400 group-hover:text-[#25D366]" size={16} />
                                    <span className="text-[7px] font-black uppercase text-gray-500">WhatsApp</span>
                                </a>
                            </div>

                            <div className="relative">
                                <div className="flex items-center gap-2 p-3 rounded-lg bg-black/40 border border-white/5 text-gray-500 text-[8px] font-mono truncate pr-16">
                                    {window.location.href}
                                </div>
                                <button
                                    onClick={handleCopy}
                                    className="absolute right-1 top-1 bottom-1 px-3 rounded-md bg-white text-black font-black text-[7px] uppercase hover:bg-primary hover:text-white transition-all"
                                >
                                    {copied ? t.copied : t.copy}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
