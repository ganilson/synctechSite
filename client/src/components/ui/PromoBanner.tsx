import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight, Gift } from "lucide-react";
import { useLocation } from "wouter";

export const PromoBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [_, setLocation] = useLocation();

    useEffect(() => {
        // Expiry logic: Show only until January 15, 2026
        const expiryDate = new Date("2026-01-16T00:00:00");
        const now = new Date();

        if (now < expiryDate) {
            // Only show if not dismissed in the last 24h
            const dismissedAt = localStorage.getItem("black_sync_dismissed");
            if (!dismissedAt || (now.getTime() - parseInt(dismissedAt)) > 86400000) {
                setTimeout(() => setIsVisible(true), 2000);
            }
        }
    }, []);

    const dismiss = () => {
        setIsVisible(false);
        localStorage.setItem("black_sync_dismissed", new Date().getTime().toString());
    };

    const handleClick = () => {
        setLocation("/blog/black-sync-natal-tech-synctech");
        window.scrollTo(0, 0);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    className="fixed top-24 left-1/2 -translate-x-1/2 z-[80] w-[95%] max-w-2xl"
                >
                    <div className="relative group overflow-hidden rounded-2xl border border-primary/30 bg-black/80 backdrop-blur-xl p-4 md:p-5 shadow-2xl shadow-primary/20">
                        {/* Animated background glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 animate-pulse" />

                        <div className="relative flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                                    <Gift size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Black Sync Especial 🎅</span>
                                        <Sparkles size={10} className="text-warm-accent animate-bounce" />
                                    </div>
                                    <h4 className="text-sm font-black text-white leading-tight">Sites Profissionais a partir de 230.000 KZ</h4>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handleClick}
                                    className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                                >
                                    Ver Oferta
                                    <ArrowRight size={12} />
                                </button>
                                <button
                                    onClick={dismiss}
                                    className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Mobile tap area */}
                        <div
                            className="absolute inset-0 md:hidden cursor-pointer"
                            onClick={handleClick}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
