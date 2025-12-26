import { useEffect, useState } from "react";
import { useParams, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Language } from "@/types";
import { Navbar } from "@/components/sections/Navbar";
import { PromoBanner } from "@/components/ui/PromoBanner";
import { useSEO } from "@/hooks/useSEO";
import { Footer } from "@/components/sections/Footer";
import { AIChat } from "@/components/sections/AIChat";
import { Calendar, Clock, User, Share2, Code, ChevronRight, Zap, X, Linkedin, Twitter, MessageCircle, Copy, Check, ArrowRight } from "lucide-react";
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

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
                <h1 className="text-3xl font-bold mb-4">{t.notFound}</h1>
                <p className="text-gray-400 mb-8 max-w-sm">{t.notFoundDesc}</p>
                <button
                    onClick={() => setLocation("/blog")}
                    className="px-6 py-2.5 bg-primary text-white rounded-full font-bold text-sm"
                >
                    {t.backToBlog}
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30 dark font-sans overflow-x-hidden">
            <Navbar lang={lang} setLang={setLang} />

            <main className="pt-28 pb-16">
                <article className="container mx-auto px-6 max-w-[1240px]">
                    {/* Header: Centered Title Area */}
                    <div className="max-w-[900px] mx-auto mb-10 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-[9px] text-primary mb-4 uppercase tracking-[0.4em] font-black">
                            <button onClick={() => setLocation("/blog")} className="hover:text-white transition-colors">Insights</button>
                            <ChevronRight size={8} className="text-gray-700" />
                            <span className="text-gray-500">{post.category}</span>
                        </div>
                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-black mb-0 leading-[1.15] tracking-tight"
                        >
                            {post.title}
                        </motion.h1>
                    </div>

                    {/* THREE COLUMN LAYOUT */}
                    <div className="flex flex-col lg:flex-row gap-8 relative items-start">
                        {/* LEFT SIDEBAR: Info & Tags */}
                        <aside className="w-full lg:w-[18%] order-2 lg:order-1">
                            <div className="sticky top-28 space-y-8 p-5 rounded-[2rem] bg-zinc-900/40 border border-white/5 backdrop-blur-md">
                                <div>
                                    <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-primary mb-4">{t.author}</h4>
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-blue-500 p-[1px]">
                                            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                                                <User size={14} className="text-white/70" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-white leading-tight">{post.author}</p>
                                            <p className="text-[9px] text-gray-500 uppercase font-medium">{post.author === "Ganilson Garcia" ? "Founder & CEO" : t.coreTeam}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-white/5 pt-6">
                                    <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-primary mb-4">{t.details}</h4>
                                    <ul className="space-y-3 text-[11px] font-medium text-gray-400">
                                        <li className="flex items-center gap-2.5">
                                            <Calendar size={12} className="text-primary/50" />
                                            {post.date}
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <Clock size={12} className="text-primary/50" />
                                            {post.readTime}
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-t border-white/5 pt-6">
                                    <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-primary mb-4">{t.tags}</h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {post.tags?.map((tag: string) => (
                                            <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[9px] font-bold text-gray-400 hover:border-primary/50 transition-colors cursor-default">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-t border-white/5 pt-6">
                                    <button
                                        onClick={() => setShareModalOpen(true)}
                                        className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-all group w-full p-3 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary shadow-lg"
                                    >
                                        <Share2 size={12} className="group-hover:scale-110 transition-transform" />
                                        {t.share}
                                    </button>
                                </div>
                            </div>
                        </aside>

                        {/* CENTER: Main Content */}
                        <div className="w-full lg:w-[64%] order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="bg-zinc-900/10 rounded-[2.5rem] border border-white/5 overflow-hidden"
                            >
                                <div className="aspect-[21/10] overflow-hidden border-b border-white/5">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-7 md:p-12 lg:p-14">
                                    <div className="prose prose-invert prose-sm md:prose-base max-w-none">
                                        {post.body.map((item, i) => {
                                            if (item.type === "paragraph") {
                                                return <p key={i} className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg font-medium tracking-tight">{item.content}</p>;
                                            }
                                            if (item.type === "heading") {
                                                return <h2 key={i} className="text-xl md:text-2xl font-black mb-6 mt-10 text-white leading-tight tracking-tight">{item.content}</h2>;
                                            }
                                            if (item.type === "image") {
                                                return (
                                                    <figure key={i} className="my-10 -mx-4 md:-mx-8">
                                                        <img src={item.url} alt={item.caption} className="rounded-[2rem] w-full border border-white/10 shadow-xl" />
                                                        <figcaption className="text-center text-[10px] text-gray-500 mt-4 italic font-medium tracking-wide uppercase">{item.caption}</figcaption>
                                                    </figure>
                                                );
                                            }
                                            if (item.type === "code") {
                                                return (
                                                    <div key={i} className="my-8 -mx-2 md:-mx-4 lg:-mx-6">
                                                        <div className="bg-black/60 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm shadow-2xl">
                                                            <div className="px-5 py-2.5 border-b border-white/5 bg-white/5 flex items-center justify-between">
                                                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/80">{item.language || "code"}</span>
                                                                <button
                                                                    onClick={() => navigator.clipboard.writeText(item.content)}
                                                                    className="text-gray-500 hover:text-white transition-colors p-1"
                                                                >
                                                                    <Copy size={12} />
                                                                </button>
                                                            </div>
                                                            <pre className="p-5 overflow-x-auto text-xs font-mono text-gray-300 leading-normal bg-black/20">
                                                                <code>{item.content}</code>
                                                            </pre>
                                                            {item.caption && (
                                                                <div className="px-5 py-1.5 bg-black/40 text-[9px] italic text-gray-500 border-t border-white/5 font-medium">
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

                            {/* Related Posts Section - NEW TECHNICAL ADDITION */}
                            <div className="mt-16 pt-16 border-t border-white/5">
                                <h4 className="text-lg font-black mb-10 tracking-tight uppercase tracking-[0.2em] text-center lg:text-left">{t.relatedPosts}</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {relatedPosts.map((relatedPost) => (
                                        <button
                                            key={relatedPost.id}
                                            onClick={() => setLocation(`/blog/${relatedPost.slug}`)}
                                            className="group text-left"
                                        >
                                            <div className="aspect-video rounded-[1.5rem] overflow-hidden mb-4 border border-white/5">
                                                <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                            </div>
                                            <h5 className="text-sm font-black text-white group-hover:text-primary transition-colors leading-tight mb-2">{relatedPost.title}</h5>
                                            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-gray-500">
                                                {relatedPost.date} • {relatedPost.readTime}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-12 flex justify-between items-center text-[8px] font-black uppercase tracking-[0.4em] text-gray-600 px-8 italic">
                                <span>© {new Date().getFullYear()} Synctech Insights</span>
                                <span>Angola Tech Hub</span>
                            </div>
                        </div>

                        {/* RIGHT SIDEBAR: Banners */}
                        <aside className="w-full lg:w-[18%] order-3">
                            <div className="sticky top-28 space-y-6">
                                <div className="p-6 rounded-[2rem] bg-gradient-to-br from-primary/20 to-zinc-950 border border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-all shadow-lg">
                                    <div className="relative z-10 text-center">
                                        <div className="w-12 h-12 rounded-[1rem] bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                            <Code className="text-primary" size={24} />
                                        </div>
                                        <h4 className="text-base font-black mb-3 leading-tight tracking-tight">{t.banners.elite.title}</h4>
                                        <p className="text-[9px] text-gray-500 mb-6 uppercase font-black tracking-widest leading-relaxed">{t.banners.elite.subtitle}</p>
                                        <button
                                            onClick={() => window.open("https://wa.me/244946808054")}
                                            className="w-full py-3 bg-primary text-white rounded-xl font-black text-[9px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all shadow-md"
                                        >
                                            {t.banners.elite.cta}
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6 rounded-[2rem] bg-zinc-900 border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all">
                                    <div className="relative z-10 text-center">
                                        <div className="w-12 h-12 rounded-[1rem] bg-white/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-95 transition-transform">
                                            <Zap className="text-warm-accent" size={24} />
                                        </div>
                                        <h4 className="text-base font-black mb-3 leading-tight tracking-tight">{t.banners.scale.title}</h4>
                                        <p className="text-[9px] text-gray-500 mb-6 uppercase font-black tracking-widest leading-relaxed">{t.banners.scale.subtitle}</p>
                                        <button
                                            onClick={() => window.open("tel:+244946808054")}
                                            className="w-full py-3 bg-white/10 text-white border border-white/10 rounded-xl font-black text-[9px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all"
                                        >
                                            {t.banners.scale.cta}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </article>
            </main>

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
                            className="relative w-full max-w-sm bg-zinc-950 border border-white/10 rounded-[2rem] p-8 overflow-hidden shadow-2xl"
                        >
                            <div className="absolute top-4 right-4">
                                <button onClick={() => setShareModalOpen(false)} className="text-gray-500 hover:text-white transition-colors p-2">
                                    <X size={20} />
                                </button>
                            </div>

                            <h3 className="text-xl font-black mb-1 text-white">{t.share}</h3>
                            <p className="text-gray-500 text-[9px] mb-8 uppercase font-black tracking-[0.2em]">{t.platform}</p>

                            <div className="grid grid-cols-3 gap-3 mb-8">
                                <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#0077b5]/20 group transition-all">
                                    <Linkedin className="text-gray-400 group-hover:text-[#0077b5]" size={18} />
                                    <span className="text-[8px] font-black uppercase text-gray-500">LinkedIn</span>
                                </a>
                                <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 group transition-all">
                                    <Twitter className="text-gray-400 group-hover:text-white" size={18} />
                                    <span className="text-[8px] font-black uppercase text-gray-500">Twitter</span>
                                </a>
                                <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#25D366]/20 group transition-all">
                                    <MessageCircle className="text-gray-400 group-hover:text-[#25D366]" size={18} />
                                    <span className="text-[8px] font-black uppercase text-gray-500">WhatsApp</span>
                                </a>
                            </div>

                            <div className="relative">
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-black/40 border border-white/5 text-gray-500 text-[9px] font-mono truncate pr-20">
                                    {window.location.href}
                                </div>
                                <button
                                    onClick={handleCopy}
                                    className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-lg bg-white text-black font-black text-[9px] uppercase hover:bg-primary hover:text-white transition-all"
                                >
                                    {copied ? t.copied : t.copy}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <Footer lang={lang} />
            <AIChat lang={lang} />
        </div>
    );
}
