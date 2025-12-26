import { motion } from "framer-motion";
import { Language } from "@/types";
import { translations } from "@/lib/translations";
import { QuoteButton } from "./QuoteButton";
import heroBg from "@assets/generated_images/dark_fluid_organic_blobs_with_rim_lighting.png";

interface HeroProps {
    lang: Language;
}

export const Hero = ({ lang }: HeroProps) => {
    const t = translations[lang].hero;
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center pt-12 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <img
                    src={heroBg}
                    alt="Background"
                    className="w-full h-full object-cover opacity-80"
                    loading="eager"
                    fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-5xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        <span className="text-xs font-medium tracking-wide uppercase text-gray-300">{t.tagline}</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">{t.title1}</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/30 italic">{t.title2}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                        {t.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                        <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full p-2 pr-6">
                            <div className="h-10 px-6 rounded-full bg-white/5 flex items-center justify-center text-sm text-gray-400 border border-white/5">
                                {t.cta}
                            </div>
                            <QuoteButton className="bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 border-0 px-8 h-10 text-white" lang={lang} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
