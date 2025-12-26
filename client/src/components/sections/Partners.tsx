import { motion } from "framer-motion";

import { Language } from "@/types";
import { translations } from "@/lib/translations";

interface PartnersProps {
  lang: Language;
}

export const Partners = ({ lang }: PartnersProps) => {
  const t = translations[lang].partners;
  const partners = [
    "BITECH",
    "SIIA",
    "HOWZIT",
    "360TECH",
    "7DEV",
    "PRAÇA DIGITAL",
    "PAY PAY",
    "SMS HUB"
  ];

  return (
    <section id="partners" className="py-16 container mx-auto px-6 relative z-20">
      <div className="relative w-full rounded-[3rem] overflow-hidden bg-[#F5F5F7] dark:bg-[#070607] min-h-[600px] flex flex-col items-center justify-center p-12 md:p-16">

        {/* Subtle Ambient Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-r from-orange-500/5 to-pink-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-black dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {t.desc}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="relative z-10 w-full max-w-5xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-32 rounded-2xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-sm flex items-center justify-center p-6 transition-all duration-500 hover:scale-105 hover:bg-white dark:hover:bg-white/10 hover:shadow-2xl hover:shadow-orange-500/10 dark:hover:shadow-orange-500/20 cursor-default overflow-hidden">

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/10 dark:from-orange-500/20 dark:to-pink-500/20" />
                </div>

                {/* Partner Name */}
                <span className="relative z-10 text-lg md:text-xl font-black text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-all duration-500 text-center tracking-wider uppercase leading-tight">
                  {partner}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
