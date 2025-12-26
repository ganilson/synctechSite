import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface ModalProjectPreviewProps {
    url: string;
    title: string;
}

export const ModalProjectPreview = ({ url, title }: ModalProjectPreviewProps) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="relative w-full h-full bg-zinc-950 overflow-hidden modal-preview-container" style={{ containerType: 'size' }}>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/80 backdrop-blur-3xl"
                    >
                        <div className="relative">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="w-20 h-20 border-t-2 border-r-2 border-primary rounded-full blur-sm absolute inset-0"
                            />
                            <Loader2 className="w-20 h-20 text-primary animate-spin" />
                        </div>
                        <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 text-white/50 font-bold tracking-[0.3em] uppercase text-[10px]"
                        >
                            Iniciando Experiência Imersiva
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Premium Browser Header Mock */}
            <div className="absolute top-0 inset-x-0 h-10 bg-zinc-900/95 backdrop-blur-xl z-30 flex items-center px-6 gap-3 border-b border-white/5 shadow-2xl">
                <div className="flex gap-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-inner" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-inner" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-inner" />
                </div>
                <div className="ml-8 flex-1 max-w-[600px]">
                    <div className="w-full h-5 rounded-lg bg-white/5 border border-white/5 flex items-center px-3">
                        <div className="w-full h-1.5 rounded-full bg-white/10" />
                    </div>
                </div>
            </div>

            {/* The Site Snapshot */}
            <div className={`w-full h-full transition-all duration-1000 ${isLoading ? 'opacity-0 scale-95 blur-md' : 'opacity-100 scale-100 blur-0'} pointer-events-none select-none overflow-hidden relative flex items-center justify-center pt-10 bg-black`}>
                <div
                    className="modal-preview-content-wrapper"
                    style={{
                        width: '2500px',
                        height: '1300px',
                        transform: 'scale(var(--modal-preview-scale, 0.9))',
                        transformOrigin: 'center center',
                        flexShrink: 0,
                    }}
                >
                    <iframe
                        src={url}
                        title={title}
                        width="2100"
                        height="900"
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                        }}
                        onLoad={() => setIsLoading(false)}
                        tabIndex={-1}
                        scrolling="no"
                    />
                </div>
                {/* Absolute overlay to fully prevent interactions */}
                <div className="absolute inset-0 z-20" />
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .modal-preview-container {
                    container-type: size;
                }
                :root {
                    --modal-preview-scale: 0.4;
                }
                @container (min-width: 0px) {
                    .modal-preview-container {
                        /* Aggressive scaling: fill snapshot */
                        --modal-preview-scale: min(calc(100cqw / 2100), calc((100cqh - 40px) / 900));
                    }
                }
                /* Mobile specific tweaks */
                @media (max-width: 768px) {
                    :root {
                        --modal-preview-scale: 0.25;
                    }
                    .modal-preview-content-wrapper {
                        width: 1800px !important;
                        height: 1200px !important;
                    }
                }
                /* Focus on width if the aspect ratio allows it to be taller */
                @container (min-aspect-ratio: 21/9) {
                     .modal-preview-container {
                        --modal-preview-scale: calc((100cqh - 40px) / 900);
                    }
                }
            `}} />

            {/* Cinematic subtle vignette */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
            <div className="absolute inset-x-0 top-10 h-20 bg-gradient-to-b from-black/30 to-transparent pointer-events-none z-10" />
        </div>
    );
};
