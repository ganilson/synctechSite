
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Language } from "@/types";
import { translations } from "@/lib/translations";
import { useState } from "react";

// Mock data based on gallery_data.json
const galleryItems = [
    {
        "id": "angotic-2026",
        "title": "ANGOTIC 2026: Rota da Transformação Digital",
        "description": "Participação estratégica da Synctech no maior fórum de TIC de Angola. Apresentação de soluções de IA e Cibersegurança.",
        "details": {
            "date": "11-13 Junho 2026",
            "location": "CCTA, Talatona, Luanda",
            "focus": ["IA Generativa", "Transformação Digital", "Conectividade"],
            "stats": "Aumento de 88% no interesse por soluções locais comparado a 2025."
        },
        "image": "/assets/Angotic.jpeg",
        "category": "Eventos"
    },
    {
        "id": "tabernacle-orm",
        "title": "TabernacleORM v3.0",
        "description": "O motor de base de dados open-source criado pela Synctech para unificar SQL e NoSQL com performance de elite.",
        "details": {
            "tech_stack": ["Python", "PostgreSQL", "MongoDB", "AsyncIO"],
            "performance": "Redução de 40% no overhead de serialização.",
            "status": "Versão 3.0 Lançada"
        },
        "image": "/assets/tabernacle_logo.jpg",
        "category": "Inovação"
    },
   
   
    {
        "id": "cybersecurity-solutions",
        "title": "Segurança de Dados para Startups",
        "description": "Proteção robusta contra ameaças cibernéticas, garantindo a resiliência de negócios digitais angolanos.",
        "details": {
            "features": ["Encryption", "Threat Detection", "24/7 Monitoring"],
            "target": "Startups e PMEs",
            "standard": "ISO 27001 Aligned"
        },
        "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
        "category": "Segurança"
    },
     {
        "id": "team-collaboration",
        "title": "Synctech Angola",
        "description": "Nossa equipa de engenheiros e designers focados em resolver problemas locais com tecnologia global.",
        "details": {
            "team_size": "25+ Especialistas",
            "values": ["Inovação", "Segurança", "Escalabilidade"],
            "office": "Luanda, Angola"
        },
        "image": "/assets/foto_sync.jpeg",
        "category": "Equipa"
    }
];

interface GalleryProps {
    lang: Language;
}

export const Gallery = ({ lang }: GalleryProps) => {
    const t = translations[lang].gallery;
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <section id="gallery" className="py-20 relative z-20 bg-black/40">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold mb-6 text-white"
                        >
                            {t.title}
                        </motion.h2>
                        <p className="text-gray-400 text-lg">
                            Explore o impacto da Synctech em Angola: desde eventos globais como o ANGOTIC até soluções técnicas que estão a redefinir o mercado de software.
                        </p>
                    </div>
                    <Button variant="outline" className="rounded-full border-white/10 hover:bg-white/5 transition-all">
                        {t.viewAll}
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
                    {/* Main Strategic Item (ANGOTIC) */}
                    <motion.div 
                        whileHover={{ scale: 0.99 }}
                        className="md:col-span-8 md:row-span-2 relative rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/5"
                    >
                        <img src={galleryItems[0].image} alt={galleryItems[0].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                        
                        <div className="absolute bottom-10 left-10 right-10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-4 py-1.5 rounded-full bg-lilac-500/20 backdrop-blur-md text-lilac-400 text-sm font-medium border border-lilac-500/30">
                                    {galleryItems[0].category}
                                </span>
                                <span className="text-gray-400 text-sm">{galleryItems[0].details.date}</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{galleryItems[0].title}</h3>
                            <p className="text-gray-300 text-lg max-w-xl mb-6 line-clamp-2">
                                {galleryItems[0].description}
                            </p>
                            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                                <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Localização</p>
                                    <p className="text-white text-sm font-medium">{galleryItems[0].details.location}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Impacto</p>
                                    <p className="text-lilac-400 text-sm font-medium">{galleryItems[0].details.stats}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Innovation Item (TabernacleORM) */}
                    <motion.div 
                        whileHover={{ scale: 0.98 }}
                        className="md:col-span-4 relative rounded-[2rem] overflow-hidden group cursor-pointer border border-white/5"
                    >
                        <img src={galleryItems[1].image} alt={galleryItems[1].title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">{galleryItems[1].category}</span>
                            <h3 className="text-xl font-bold text-white mb-2">{galleryItems[1].title}</h3>
                            <p className="text-gray-400 text-sm line-clamp-2 mb-4">{galleryItems[1].description}</p>
                            <div className="flex flex-wrap gap-2">
                                {galleryItems[1].details.tech_stack.map(tech => (
                                    <span key={tech} className="text-[10px] px-2 py-0.5 bg-white/5 rounded border border-white/10 text-gray-300">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Promo/Team Item */}
                    <motion.div 
                        whileHover={{ scale: 0.98 }}
                        className="md:col-span-4 relative rounded-[2rem] overflow-hidden group cursor-pointer border border-white/5"
                    >
                        <img src={galleryItems[3].image} alt={galleryItems[3].title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <span className="text-lilac-400 text-xs font-bold uppercase tracking-widest mb-2">{galleryItems[3].category}</span>
                            <h3 className="text-xl font-bold text-white mb-2">{galleryItems[3].title}</h3>
                            <p className="text-gray-400 text-sm">{galleryItems[3].details.team_size} em {galleryItems[3].details.office}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
