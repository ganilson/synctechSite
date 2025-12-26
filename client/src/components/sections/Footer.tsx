import logo from "@assets/SyncTech_LOGO_01_White_1764691366645.png";
import { Language } from "@/types";
import { translations } from "@/lib/translations";

interface FooterProps {
    lang: Language;
}

export const Footer = ({ lang }: FooterProps) => {
    const t = translations[lang].footer;
    return (
        <footer id="contact" className="py-12 border-t border-white/5 bg-black/40 relative z-20">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img src={logo} alt="Synctech" className="h-8 w-auto" />
                        </div>
                        <p className="text-muted-foreground max-w-xs mb-6">
                            {t.desc}
                        </p>
                        <div className="space-y-2 text-sm text-gray-400">
                            <p className="flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[10px]">📞</span> 946808054</p>
                            <p className="flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[10px]">✉️</span> contacto@synctech.ao</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">{t.services}</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">{t.servicesList.web}</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">{t.servicesList.mobile}</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">{t.servicesList.consulting}</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">{t.servicesList.infra}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">{t.legal}</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">{t.privacy}</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">{t.terms}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; 2025 Synctech. {t.rights}</p>
                    <p className="text-xs">{t.madeIn}</p>
                </div>
            </div>
        </footer>
    );
};
