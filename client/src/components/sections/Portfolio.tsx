import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChromaGrid } from "../ui/ChromaGrid";
import { useIsMobile } from "@/hooks/use-mobile";
import { Language } from "@/types";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ExternalLink, ArrowRight } from "lucide-react";

import { ProjectPreview } from "../ui/ProjectPreview";
import { ModalProjectPreview } from "../ui/ModalProjectPreview";

// Assets (Keep some placeholders for the thumbnails)
import eduportalImg from "@assets/generated_images/eduportal.png";
import syncTechLogo from "@assets/SyncTech_LOGO_01_White_1764691366645.png";

import { translations } from "@/lib/translations";

interface PortfolioProps {
    lang: Language;
}

interface Project {
    image: string;
    title: string;
    subtitle: string;
    handle: string;
    borderColor: string;
    gradient: string;
    description: string;
    tags: string[];
    url: string;
    logo?: string;
}

export const Portfolio = ({ lang }: PortfolioProps) => {
    const isMobile = useIsMobile();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const t = translations[lang].portfolio;

    const projects: Project[] = [
        {
            image: eduportalImg, // Using existing placeholder for grid thumbnail
            ...t.projects[0],
            handle: "Praça Digital",
            borderColor: "#FF7A3A",
            gradient: "linear-gradient(145deg, rgba(255, 122, 58, 0.2), #000)",
            tags: ["FastAPI", "VueJs", "Postgresql", "TabernacleORM", "asyncio"],
            url: "https://pracadgt.com",
            logo: syncTechLogo
        },
        {
            image: eduportalImg,
            ...t.projects[1],
            handle: "Syncmenu",
            borderColor: "#3B82F6",
            gradient: "linear-gradient(180deg, rgba(59, 130, 246, 0.2), #000)",
            tags: ["Node.js", "MongoDB", "React", "TypeScript"],
            url: "https://syncmenu.ao",
            logo: syncTechLogo
        },
        {
            image: eduportalImg,
            ...t.projects[2],
            handle: "FISARQ",
            borderColor: "#10B981",
            gradient: "linear-gradient(165deg, rgba(16, 185, 129, 0.2), #000)",
            tags: ["Node.js", "MongoDB", "React", "TypeScript"],
            url: "https://fisarq.com",
            logo: syncTechLogo
        },
        {
            image: eduportalImg,
            ...t.projects[3],
            handle: "Talagás",
            borderColor: "#8B5CF6",
            gradient: "linear-gradient(195deg, rgba(139, 92, 246, 0.2), #000)",
            tags: ["Node.js", "MongoDB", "React", "TypeScript"],
            url: "https://talagas.com",
            logo: syncTechLogo
        },
        {
            image: eduportalImg,
            ...t.projects[4],
            handle: "RealezaOral",
            borderColor: "#06B6D4",
            gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.2), #000)",
            tags: ["Node.js", "MongoDB", "React", "TypeScript"],
            url: "https://realezaoral.net",
            logo: syncTechLogo
        }
    ];

    return (
        <section id="portfolio" className="pt-12 pb-0 relative z-20 overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                        {t.title}
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>
                </motion.div>
            </div>

            <div className="relative w-full min-h-[700px]">
                <ChromaGrid
                    items={projects}
                    onItemClick={(item) => setSelectedProject(item as Project)}
                    radius={350}
                    damping={0.4}
                    fadeOut={0.6}
                    ease="power3.out"
                    columns={isMobile ? 1 : 4}
                />
            </div>

            <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
                <DialogContent className="max-w-[95vw] md:max-w-7xl bg-black/95 backdrop-blur-3xl border-white/10 p-0 overflow-hidden rounded-[2.5rem] gap-0">
                    <div className="flex flex-col md:flex-row h-full max-h-[95vh] md:max-h-[85vh] overflow-y-auto md:overflow-hidden">
                        {/* Left Column: WebView Preview (Cinematic 21:9) */}
                        <div className="w-full md:w-3/4 relative aspect-video md:aspect-auto bg-zinc-950 md:min-h-[600px] border-r border-white/5">
                            {selectedProject && (
                                <ModalProjectPreview
                                    url={selectedProject.url}
                                    title={selectedProject.title}
                                />
                            )}
                        </div>

                        {/* Right Column: Content */}
                        <div className="w-full md:w-1/4 h-full flex flex-col bg-zinc-950/90 relative">
                            {/* Scrollable Content Area */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar p-10 md:p-8 pb-32 md:pb-32">
                                <DialogHeader className="mb-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-primary">
                                            {selectedProject?.handle}
                                        </span>
                                    </div>
                                    <DialogTitle className="text-3xl md:text-4xl font-bold text-white mb-4">
                                        {selectedProject?.title}
                                    </DialogTitle>
                                    <DialogDescription className="text-gray-400 text-base leading-relaxed">
                                        {selectedProject?.description}
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">
                                            {t.techStack}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject?.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] text-gray-300 font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Fixed Footer Area */}
                            <div className="absolute bottom-0 inset-x-0 p-8 md:p-6 bg-gradient-to-t from-black via-black/95 to-transparent pt-12">
                                <div className="flex flex-col gap-3">
                                    <Button className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold gap-2 shadow-lg shadow-primary/20">
                                        {t.viewProject}
                                        <ExternalLink size={18} />
                                    </Button>
                                    <DialogClose asChild>
                                        <Button variant="outline" className="w-full h-14 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold transition-all">
                                            {t.close}
                                        </Button>
                                    </DialogClose>
                                </div>
                            </div>
                        </div>
                    </div>

                    <DialogClose className="absolute right-6 top-6 rounded-full p-2 bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-colors">
                        <X size={20} />
                    </DialogClose>
                </DialogContent>
            </Dialog>
        </section>
    );
};
