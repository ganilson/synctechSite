import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, Filter } from "lucide-react";
import { Language } from "@/types";
import { translations } from "@/lib/translations";
import { Link } from "wouter";
import blogData from "@/lib/blog.json";

interface BlogProps {
    lang: Language;
}

export const Blog = ({ lang }: BlogProps) => {
    const t = translations[lang].blog;
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", ...new Set(blogData.map(post => post.category))];

    const filteredPosts = activeCategory === "All"
        ? blogData
        : blogData.filter(post => post.category === activeCategory);

    return (
        <section id="blog" className="py-20 bg-background relative overflow-hidden">
            {/* Background elements for depth */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight tracking-tight"
                    >
                        {t.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base text-gray-500 leading-relaxed max-w-xl font-medium"
                    >
                        {t.description}
                    </motion.p>
                </div>

                {/* Filter Bar - Tightened */}
                <div className="flex flex-wrap items-center gap-2 mb-10">
                    {categories.map((cat, i) => (
                        <motion.button
                            key={cat}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.03 }}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border ${activeCategory === cat
                                ? "bg-primary border-primary text-white shadow-lg shadow-primary/25 translate-y-[-2px]"
                                : "bg-white/5 border-white/10 text-gray-500 hover:bg-white/10 hover:border-white/20"
                                }`}
                        >
                            {cat === "All" ? t.all : cat}
                        </motion.button>
                    ))}
                    <div className="ml-auto hidden md:flex items-center gap-2 text-gray-600 text-[9px] font-black tracking-widest uppercase">
                        <Filter size={12} className="text-primary/60" />
                        {t.filterBy}
                    </div>
                </div>

                {/* Grid - Tightened spacing and card size */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.map((post, i) => (
                            <motion.article
                                key={post.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="group bg-zinc-900/30 border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/10 transition-all hover:bg-zinc-900/50 flex flex-col h-full shadow-lg"
                            >
                                <div className="aspect-[16/10] overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/90">
                                            {post.category}
                                        </span>
                                        {post.featured && (
                                            <span className="px-2.5 py-1 rounded-lg bg-primary/80 backdrop-blur-md border border-primary/20 text-[9px] font-black uppercase tracking-widest text-white">
                                                Destaque do CEO
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="p-7 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-[10px] text-gray-500 mb-4 font-black uppercase tracking-widest opacity-80">
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock size={12} className="text-primary/70" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-black text-white mb-3 group-hover:text-primary transition-colors leading-tight tracking-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-2 font-medium">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto">
                                        <Link href={`/blog/${post.slug}`} className="cursor-pointer inline-block">
                                            <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-[0.2em] transform transition-all group-hover:translate-x-1.5 hover:text-white">
                                                {t.readMore}
                                                <ArrowRight size={14} />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Structured Data for SEO */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Blog",
                    "name": "Synctech Blog",
                    "description": "Insights sobre tecnologia, desenvolvimento de software e transformação digital em Angola.",
                    "publisher": {
                        "@type": "Organization",
                        "name": "Synctech",
                        "logo": "https://synctech.co.ao/logo.png"
                    },
                    "blogPost": blogData.map(post => ({
                        "@type": "BlogPosting",
                        "headline": post.title,
                        "description": post.excerpt,
                        "image": post.image,
                        "datePublished": post.date,
                        "author": {
                            "@type": "Organization",
                            "name": "Synctech"
                        }
                    }))
                })}
            </script>
        </section>
    );
};
