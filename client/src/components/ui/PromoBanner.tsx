import { translations } from "@/lib/translations";
import { Language } from "@/types";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Gift, Sparkles } from "lucide-react";

interface PromoBannerProps {
    lang: Language;
}

export const PromoBanner = ({ lang }: PromoBannerProps) => {
    const t = translations[lang].promo;
    const [isVisible, setIsVisible] = useState(false);
    const [_, setLocation] = useLocation();

    useEffect(() => {
        // Expiry logic: Show only until January 15, 2026
        const expiryDate = new Date("2026-01-16T00:00:00");
        const now = new Date();

        if (now < expiryDate) {
            setIsVisible(true);
        }
    }, []);

    const handleClick = () => {
        setLocation("/blog/black-sync-natal-tech-synctech");
        window.scrollTo(0, 0);
    };

    if (!isVisible) return null;

    return (
        <section className="pb-12 pt-4 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group overflow-hidden rounded-[2.5rem] border border-primary/30 bg-zinc-900/40 backdrop-blur-xl p-8 md:p-10 shadow-2xl shadow-primary/10"
                >
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 animate-pulse" />

                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/20">
                                <Gift size={32} />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[12px] font-black uppercase tracking-[0.3em] text-primary">{t.badge}</span>
                                    <Sparkles size={14} className="text-warm-accent animate-bounce" />
                                </div>
                                <h4 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">
                                    {t.title} <br className="hidden md:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-warm">{t.titleAccent}</span> {t.from}
                                </h4>
                            </div>
                        </div>

                        <div className="flex flex-col items-center md:items-end gap-4 min-w-[200px]">
                            <button
                                onClick={handleClick}
                                className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-xl shadow-primary/30 group/btn"
                            >
                                {t.cta}
                                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 opacity-60">{t.expiry}</span>
                        </div>
                    </div>

                    {/* Mobile/Desktop card interactive layer */}
                    <div
                        className="absolute inset-0 cursor-pointer z-10 opacity-0"
                        onClick={handleClick}
                    />
                </motion.div>
            </div>
        </section>
    );
};
