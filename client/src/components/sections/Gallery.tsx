import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Language } from "@/types";
import { translations } from "@/lib/translations";
// import Lanyard from "@/components/ui/Lanyard";
import logo from "@assets/SyncTech_LOGO_01_White_1764691366645.png";
import gallery1 from "@assets/WhatsApp_Image_2025-11-03_at_16.28.08_1764691437358.jpeg";
import gallery2 from "@assets/487705912_2402136696790237_1568879427472810476_n_1764691437360.jpg";
import gallery3 from "@assets/506052695_2472076559796250_2786976113178499270_n_1764691437362.jpg";
import gallery4 from "@assets/WhatsApp_Image_2025-11-03_at_16.17.29_(1)_1764691437364.jpeg";
import gallery5 from "@assets/WhatsApp_Image_2025-11-03_at_16.17.29_1764691437366.jpeg";

interface GalleryProps {
    lang: Language;
}

export const Gallery = ({ lang }: GalleryProps) => {
    const images = [gallery1, gallery2, gallery3, gallery4, gallery5];
    const t = translations[lang].gallery;

    return (
        <section id="gallery" className="py-12 relative z-20 bg-black/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.title}</h2>
                        <p className="text-muted-foreground max-w-md">
                            {t.desc}
                        </p>
                    </div>
                    <Button variant="outline" className="rounded-full border-white/10">{t.viewAll}</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
                    {/* Bento Grid Layout */}
                    <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group">
                        <img src={images[1]} alt="Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                        {/* Logo Watermark */}
                        <div className="absolute top-6 right-6 opacity-30">
                            <img src={logo} className="h-8 w-auto" />
                        </div>

                        <div className="absolute bottom-6 left-6">
                            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs border border-white/10 mb-2 inline-block">{t.events}</span>
                            <h3 className="text-xl font-bold">ANGOLA ICT FORUM 2024</h3>
                        </div>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden group">
                        <img src={images[0]} alt="Office" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    </div>

                    <div className="relative rounded-3xl overflow-hidden group">
                        <img src={images[2]} alt="Innovation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    </div>
                </div>
            </div>
        </section>
    );
};
