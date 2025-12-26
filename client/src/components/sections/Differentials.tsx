import { motion } from "framer-motion";
import { Zap, Server, Cpu, Globe } from "lucide-react";
import { Language } from "@/types";

interface DifferentialsProps {
    lang: Language;
}

export const Differentials = ({ lang }: DifferentialsProps) => {
    const t = {
        en: {
            title: "Why Synctech?",
            subtitle: "We combine technical excellence with strategic vision to deliver results that matter.",
            items: [
                {
                    title: "Total Agility",
                    desc: "We use modern methodologies to deliver high-quality software in record time.",
                    icon: <Zap className="w-10 h-10 text-orange-500" />,
                    color: "bg-orange-500/10 border-orange-500/20"
                },
                {
                    title: "Infrastructure",
                    desc: "Cloud solutions designed for high availability and security.",
                    icon: <Server className="w-10 h-10 text-blue-500" />,
                    color: "bg-blue-500/10 border-blue-500/20"
                },
                {
                    title: "AI & Automation",
                    desc: "We leverage Artificial Intelligence to automate processes and generate insights.",
                    icon: <Cpu className="w-10 h-10 text-purple-500" />,
                    color: "bg-purple-500/10 border-purple-500/20"
                },
                {
                    title: "Global Vision",
                    desc: "Based in Angola with a global perspective, understand your challenges.",
                    icon: <Globe className="w-10 h-10 text-green-500" />,
                    color: "bg-green-500/10 border-green-500/20"
                }
            ]
        },
        pt: {
            title: "Porquê a Synctech?",
            subtitle: "Combinamos excelência técnica com visão estratégica para entregar resultados que importam.",
            items: [
                {
                    title: "Agilidade Total",
                    desc: "Utilizamos metodologias modernas para entregar software de alta qualidade em tempo recorde.",
                    icon: <Zap className="w-10 h-10 text-orange-500" />,
                    color: "bg-orange-500/10 border-orange-500/20"
                },
                {
                    title: "Infraestrutura",
                    desc: "Soluções Cloud desenhadas para alta disponibilidade e segurança, garantindo que seu negócio nunca pare.",
                    icon: <Server className="w-10 h-10 text-blue-500" />,
                    color: "bg-blue-500/10 border-blue-500/20"
                },
                {
                    title: "IA & Automação",
                    desc: "Aproveitamos o poder da Inteligência Artificial para automatizar processos e gerar insights valiosos.",
                    icon: <Cpu className="w-10 h-10 text-purple-500" />,
                    color: "bg-purple-500/10 border-purple-500/20"
                },
                {
                    title: "Visão Global",
                    desc: "Sediados em Angola com perspectiva global, entendemos seus desafios e falamos sua língua.",
                    icon: <Globe className="w-10 h-10 text-green-500" />,
                    color: "bg-green-500/10 border-green-500/20"
                }
            ]
        }
    }[lang];

    return (
        <section id="services" className="py-32 relative overflow-hidden bg-black/40">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {t.items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`p-8 rounded-3xl border ${item.color} backdrop-blur-sm group hover:scale-105 transition-all duration-300`}
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-black/40 border border-white/5 w-fit group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed font-light">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
