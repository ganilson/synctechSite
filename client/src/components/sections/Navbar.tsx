import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Language } from "@/types";
import { translations } from "@/lib/translations";
import { QuoteButton } from "./QuoteButton";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import logo from "@assets/SyncTech_LOGO_01_White_1764691366645.png";

interface NavbarProps {
    lang: Language;
    setLang: (l: Language) => void;
}

export const Navbar = ({ lang, setLang }: NavbarProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [location] = useLocation();
    const isHome = location === "/";
    const t = translations[lang].nav;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Navigation Layout */}
            <header className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 hidden md:flex items-center justify-between pointer-events-none">
                {/* Logo - Floating Left */}
                <div className={`pointer-events-auto transition-all duration-300 ${scrolled ? "opacity-0 -translate-y-4" : "opacity-100"}`}>
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Synctech Logo" className="h-10 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                    </div>
                </div>

                {/* Central Floating Pill Nav - Always Visible */}
                <nav className="pointer-events-auto absolute left-1/2 top-6 -translate-x-1/2">
                    <div className={`
            flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500
            bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.2)]
            ${scrolled ? "scale-90 translate-y-[-10px] bg-black/40" : "scale-100"}
          `}>
                        {/* If scrolled, show mini logo inside pill */}
                        <div className={`overflow-hidden transition-all duration-500 ${scrolled ? "w-8 opacity-100 ml-2" : "w-0 opacity-0"}`}>
                            <img src={logo} alt="S" className="h-6 w-auto" />
                        </div>

                        <ul className="flex items-center px-4 gap-6 text-sm font-medium text-gray-300">
                            <li><a href={isHome ? "#services" : "/#services"} className="hover:text-white transition-colors relative group">
                                {t.services}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-warm transition-all group-hover:w-full"></span>
                            </a></li>
                            <li><a href={isHome ? "#portfolio" : "/#portfolio"} className="hover:text-white transition-colors relative group">
                                {t.portfolio}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-warm transition-all group-hover:w-full"></span>
                            </a></li>
                            <li><a href={isHome ? "#gallery" : "/#gallery"} className="hover:text-white transition-colors relative group">
                                {t.gallery}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-warm transition-all group-hover:w-full"></span>
                            </a></li>
                            <li><a href={isHome ? "#partners" : "/#partners"} className="hover:text-white transition-colors relative group">
                                {t.partners}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-warm transition-all group-hover:w-full"></span>
                            </a></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors relative group">
                                {t.blog}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-warm transition-all group-hover:w-full"></span>
                            </Link></li>
                            <li><a href={isHome ? "#contact" : "/#contact"} className="hover:text-white transition-colors relative group">
                                {t.contact}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-warm transition-all group-hover:w-full"></span>
                            </a></li>
                        </ul>

                        {/* Language Switcher in Pill */}
                        <div className="flex items-center border-l border-white/10 pl-4 ml-2 gap-2">
                            <button
                                onClick={() => setLang('en')}
                                className={`text-xs font-bold px-2 py-1 rounded ${lang === 'en' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => setLang('pt')}
                                className={`text-xs font-bold px-2 py-1 rounded ${lang === 'pt' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
                            >
                                PT
                            </button>
                        </div>

                        <div className={`overflow-hidden transition-all duration-500 flex items-center gap-2 ${scrolled ? "w-auto opacity-100 border-l border-white/10 pl-2" : "w-0 opacity-0"}`}>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 text-[10px] font-bold text-gray-400 hover:text-white gap-1.5"
                                onClick={() => window.open("tel:+244946808054")}
                            >
                                <Phone size={12} className="text-primary" />
                                {t.callNow}
                            </Button>
                            <QuoteButton size="sm" className="h-8 text-xs" lang={lang} />
                        </div>
                    </div>
                </nav>

                {/* CTA - Floating Right */}
                <div className={`pointer-events-auto flex items-center gap-3 transition-all duration-300 ${scrolled ? "opacity-0 -translate-y-4" : "opacity-100"}`}>
                    <Button
                        variant="link"
                        className="text-white hover:text-primary gap-2 font-semibold"
                        onClick={() => window.open("tel:+244946808054")}
                    >
                        <Phone size={18} />
                        {t.callNow}
                    </Button>
                    <QuoteButton lang={lang} />
                </div>
            </header>

            {/* Mobile Nav */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                <div className="pointer-events-auto flex items-center gap-2">
                    <img src={logo} alt="Synctech" className="h-8 w-auto" />
                </div>
                <div className="pointer-events-auto flex gap-2">
                    <button onClick={() => setLang(lang === 'en' ? 'pt' : 'en')} className="w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-xs font-bold border border-white/10">
                        {lang.toUpperCase()}
                    </button>
                    <button
                        className="text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 md:hidden animate-in fade-in zoom-in-95 duration-300">
                    <a href={isHome ? "#services" : "/#services"} className="text-2xl font-medium text-white" onClick={() => setMobileMenuOpen(false)}>{t.services}</a>
                    <a href={isHome ? "#portfolio" : "/#portfolio"} className="text-2xl font-medium text-white" onClick={() => setMobileMenuOpen(false)}>{t.portfolio}</a>
                    <a href={isHome ? "#gallery" : "/#gallery"} className="text-2xl font-medium text-white" onClick={() => setMobileMenuOpen(false)}>{t.gallery}</a>
                    <a href={isHome ? "#partners" : "/#partners"} className="text-2xl font-medium text-white" onClick={() => setMobileMenuOpen(false)}>{t.partners}</a>
                    <Link href="/blog" className="text-2xl font-medium text-white" onClick={() => setMobileMenuOpen(false)}>{t.blog}</Link>
                    <a href={isHome ? "#contact" : "/#contact"} className="text-2xl font-medium text-white" onClick={() => setMobileMenuOpen(false)}>{t.contact}</a>
                    <div className="flex flex-col gap-4 w-full px-12">
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full h-14 rounded-2xl border-white/10 bg-white/5 text-white font-bold gap-3"
                            onClick={() => window.open("tel:+244946808054")}
                        >
                            <Phone size={20} />
                            {t.callNow}
                        </Button>
                        <QuoteButton size="lg" className="h-14 w-full text-lg" lang={lang} />
                    </div>
                </div>
            )}
        </>
    );
};
