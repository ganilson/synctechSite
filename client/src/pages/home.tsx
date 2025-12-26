import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Language } from "@/types";

// Section Components
import { Preloader } from "@/components/sections/Preloader";
import { Navbar } from "@/components/sections/Navbar";
import { PromoBanner } from "@/components/ui/PromoBanner";
import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Differentials } from "@/components/sections/Differentials";
import { Portfolio } from "@/components/sections/Portfolio";
import { Gallery } from "@/components/sections/Gallery";
import { Blog } from "@/components/sections/Blog";
import { Partners } from "@/components/sections/Partners";
import { Newsletter } from "@/components/sections/Newsletter";
import { AIChat } from "@/components/sections/AIChat";
import { Footer } from "@/components/sections/Footer";
import { useSEO } from "@/hooks/useSEO";

// Assets for loading
import heroBg from "@assets/generated_images/dark_fluid_organic_blobs_with_rim_lighting.png";
import logo from "@assets/SyncTech_LOGO_01_White_1764691366645.png";
import neonGradient from "@assets/neon_gradient.png";

const CRITICAL_ASSETS = [heroBg, logo, neonGradient];

interface HomeProps {
  lang: Language;
  setLang: (l: Language) => void;
}

export default function Home({ lang, setLang }: HomeProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const loadAssets = async () => {
      let loadedCount = 0;
      const totalAssets = CRITICAL_ASSETS.length;

      const promises = CRITICAL_ASSETS.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            loadedCount++;
            setLoadingProgress((loadedCount / totalAssets) * 100);
            resolve(src);
          };
          img.onerror = () => {
            loadedCount++;
            setLoadingProgress((loadedCount / totalAssets) * 100);
            resolve(src);
          };
        });
      });

      await Promise.all(promises);
      setTimeout(() => setIsLoading(false), 800);
    };

    loadAssets();
  }, []);

  useSEO({
    title: "Synctech - Soluções Tech & Software House Angola",
    description: "Synctech é a Software House líder em Luanda. Especialistas em Apps, Web, Infraestrutura e Consultoria de TI. Transformamos ideias em código de alta performance.",
    keywords: "software house angola, desenvolvimento de apps luanda, web design angola, infraestrutura ti luanda, consultoria tecnológica"
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 dark font-sans overflow-x-hidden">
      <AnimatePresence>
        {isLoading && <Preloader progress={loadingProgress} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Navbar lang={lang} setLang={setLang} />
        <Hero lang={lang} />
        <TechStack />
        <Portfolio lang={lang} />
        <PromoBanner />
        <Blog lang={lang} />
        <Gallery lang={lang} />
        <Partners lang={lang} />
        <Newsletter lang={lang} />
        <Footer lang={lang} />
        <AIChat lang={lang} />
      </motion.div>
    </div>
  );
}
