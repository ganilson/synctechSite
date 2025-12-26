import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface ProjectPreviewProps {
    url: string;
    title: string;
}

export const ProjectPreview = ({ url, title }: ProjectPreviewProps) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="relative w-full h-full bg-zinc-900 overflow-hidden preview-container" style={{ containerType: 'inline-size' }}>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 backdrop-blur-xl"
                    >
                        <div className="relative">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="w-16 h-16 border-t-2 border-r-2 border-primary rounded-full blur-sm absolute inset-0"
                            />
                            <Loader2 className="w-16 h-16 text-primary animate-spin" />
                        </div>
                        <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-4 text-white/70 font-medium tracking-widest uppercase text-xs"
                        >
                            Loading Experience
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mock Browser Header */}
            <div className="absolute top-0 inset-x-0 h-8 bg-zinc-900/90 backdrop-blur-md z-30 flex items-center px-4 gap-2 border-b border-white/10">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="ml-6 flex-1 max-w-[400px]">
                    <div className="w-full h-4 rounded-md bg-white/5 border border-white/5" />
                </div>
            </div>

            <div className={`w-full h-full transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'} pointer-events-none select-none overflow-hidden relative flex items-center justify-center pt-8 bg-black`}>
                <div
                    className="preview-content-wrapper"
                    style={{
                        width: '2000px',
                        height: '1000px',
                        transform: 'scale(var(--preview-scale, 0.2))',
                        transformOrigin: 'center center',
                        flexShrink: 0,
                    }}
                >
                    <iframe
                        src={url}
                        title={title}
                        width="1440"
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
                .preview-container {
                    container-type: size;
                }
                :root {
                    --preview-scale: 0.15;
                }
                @container (min-width: 0px) {
                    .preview-container {
                        --preview-scale: min(calc(100cqw / 1440), calc((100cqh - 32px) / 900));
                    }
                }
            `}} />

            {/* Soft overlay gradient for integration */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
    );
};
