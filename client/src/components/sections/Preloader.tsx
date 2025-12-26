import { motion } from "framer-motion";
import logo from "@assets/SyncTech_LOGO_01_White_1764691366645.png";

interface PreloaderProps {
    progress: number;
}

export const Preloader = ({ progress }: PreloaderProps) => {
    return (
        <div className="fixed inset-0 z-[100] bg-[#070607] flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative mb-8"
            >
                <div className="absolute inset-0 bg-primary/20 blur-[50px] rounded-full animate-pulse" />
                <img src={logo} alt="Synctech" className="h-16 w-auto relative z-10" />
            </motion.div>

            <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden relative">
                <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 to-pink-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>
            <div className="mt-4 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                Inovação em Carregamento {Math.round(progress)}%
            </div>
        </div>
    );
};
