import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Language } from "@/types";
import { translations } from "@/lib/translations";
import neonGradient from "@assets/neon_gradient.png";

interface NewsletterProps {
    lang: Language;
}

export const Newsletter = ({ lang }: NewsletterProps) => {
    const t = translations[lang].newsletter;
    return (
        <section className="py-12 container mx-auto px-6 relative z-20">
            <div className="relative rounded-[3rem] overflow-hidden min-h-[500px] flex items-center justify-center p-12 md:p-16">

                {/* Neon Gradient Background */}
                <div className="absolute inset-0">
                    <img
                        src={neonGradient}
                        alt="Neon Background"
                        className="w-full h-full object-cover scale-110 animate-pulse-slow"
                        style={{ animationDuration: '8s' }}
                    />
                    {/* Dark overlay for better text contrast */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                    {/* Gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
                </div>

                {/* Glassmorphic Content Container */}
                <div className="relative z-10 max-w-3xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
                        <div className="text-center space-y-6">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-wider text-white">{t.badge}</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                {t.title}
                            </h2>
                            <p className="text-white/90 text-lg max-w-lg mx-auto leading-relaxed">
                                {t.desc}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
                                <Input
                                    placeholder={t.placeholder}
                                    className="bg-white/20 backdrop-blur-md border-white/30 h-14 text-base text-white placeholder:text-white/60 focus:bg-white/30 focus:border-white/50 transition-all"
                                />
                                <Button className="h-14 px-8 bg-white text-black hover:bg-white/90 font-bold text-base shadow-xl shadow-black/20 transition-all hover:scale-105">
                                    {t.button}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1.1); }
          50% { opacity: 0.95; transform: scale(1.15); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
};
