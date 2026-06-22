import { motion, AnimatePresence } from "framer-motion";
import { Language } from "@/types";
import { translations } from "@/lib/translations";
import { useState } from "react";
import {
    Code2,
    Zap,
    Shield,
    Smartphone,
    Cloud,
    BarChart3,
    CheckCircle2,
    ArrowRight,
    Users,
    Lightbulb,
    Rocket,
    Lock,
    GitBranch,
    Cpu,
} from "lucide-react";

interface ServicePhase {
    title: string;
    description: string;
    icon: React.ReactNode;
    duration: string;
    deliverables: string[];
}

interface Service {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    features: string[];
    phases: ServicePhase[];
    technologies: string[];
    cta: string;
}

interface ServicesProps {
    lang: Language;
}

const services: Service[] = [
    {
        id: "custom-development",
        title: "Desenvolvimento Customizado",
        subtitle: "Soluções à medida do seu negócio",
        description:
            "Desenvolvemos aplicações web e mobile escaláveis, otimizadas e prontas para o futuro do seu negócio.",
        icon: <Code2 size={24} />,
        color: "from-blue-500 to-cyan-500",
        features: [
            "Arquitetura moderna",
            "Performance otimizada",
            "Código limpo e documentado",
            "Testes automatizados",
        ],
        phases: [
            {
                title: "Discovery & Planning",
                description: "Análise profunda do seu negócio, objetivos e requisitos técnicos",
                icon: <Lightbulb size={16} />,
                duration: "1-2 semanas",
                deliverables: [
                    "Documento de requisitos",
                    "Arquitetura proposta",
                    "Timeline e orçamento",
                    "Plano de risco",
                ],
            },
            {
                title: "Design & Prototipagem",
                description: "Criação de wireframes, protótipos interativos e design system",
                icon: <Zap size={16} />,
                duration: "2-3 semanas",
                deliverables: [
                    "UI/UX Design",
                    "Protótipos interativos",
                    "Design tokens",
                    "Guia de estilo",
                ],
            },
            {
                title: "Desenvolvimento",
                description: "Implementação seguindo best practices e padrões de código",
                icon: <Code2 size={16} />,
                duration: "4-12 semanas",
                deliverables: [
                    "Código fonte",
                    "API documentation",
                    "CI/CD pipeline",
                    "Testes unitários",
                ],
            },
            {
                title: "Deploy & Suporte",
                description: "Lançamento em produção, monitoramento e suporte técnico",
                icon: <Rocket size={16} />,
                duration: "Contínuo",
                deliverables: [
                    "Deploy automatizado",
                    "Monitoramento 24/7",
                    "Suporte técnico",
                    "Otimizações",
                ],
            },
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
        cta: "Iniciar Projeto",
    },
    
    {
        id: "cloud-infrastructure",
        title: "Cloud & Infraestrutura",
        subtitle: "Migração e otimização em nuvem",
        description:
            "Migramos sua infraestrutura para a nuvem com zero downtime, otimizando custos e escalabilidade.",
        icon: <Cloud size={24} />,
        color: "from-purple-500 to-pink-500",
        features: [
            "Migração zero downtime",
            "Otimização de custos",
            "Auto-scaling",
            "Disaster recovery",
        ],
        phases: [
            {
                title: "Planejamento",
                description: "Estratégia de migração e arquitetura cloud",
                icon: <Lightbulb size={16} />,
                duration: "1-2 semanas",
                deliverables: [
                    "Cloud architecture",
                    "Migration plan",
                    "Cost estimation",
                    "Risk assessment",
                ],
            },
            {
                title: "Preparação",
                description: "Setup inicial e configuração de infraestrutura",
                icon: <Zap size={16} />,
                duration: "2-3 semanas",
                deliverables: [
                    "VPC/Network setup",
                    "Database replication",
                    "Load balancers",
                    "Backup systems",
                ],
            },
            {
                title: "Migração",
                description: "Transferência de dados e aplicações com zero downtime",
                icon: <Cloud size={16} />,
                duration: "2-4 semanas",
                deliverables: [
                    "Data migration",
                    "Application deployment",
                    "DNS cutover",
                    "Validation tests",
                ],
            },
            {
                title: "Otimização",
                description: "Monitoramento, scaling e otimização de custos",
                icon: <BarChart3 size={16} />,
                duration: "Contínuo",
                deliverables: [
                    "Performance tuning",
                    "Cost optimization",
                    "Auto-scaling setup",
                    "Monitoring dashboards",
                ],
            },
        ],
        technologies: ["AWS", "Azure", "Kubernetes", "Terraform", "CloudFormation"],
        cta: "Migrar para Cloud",
    },
    {
        id: "mobile-apps",
        title: "Aplicações Mobile",
        subtitle: "iOS e Android com experiência premium",
        description:
            "Desenvolvemos aplicações mobile nativas e cross-platform com performance excepcional e UX intuitiva.",
        icon: <Smartphone size={24} />,
        color: "from-green-500 to-emerald-500",
        features: [
            "Nativo e cross-platform",
            "Offline-first architecture",
            "Push notifications",
            "Analytics integrado",
        ],
        phases: [
            {
                title: "Conceito & Design",
                description: "Definição de funcionalidades e design mobile-first",
                icon: <Lightbulb size={16} />,
                duration: "2-3 semanas",
                deliverables: [
                    "User flows",
                    "Mobile wireframes",
                    "UI design system",
                    "Protótipo funcional",
                ],
            },
            {
                title: "Desenvolvimento",
                description: "Implementação em React Native ou nativo",
                icon: <Code2 size={16} />,
                duration: "6-12 semanas",
                deliverables: [
                    "App source code",
                    "API integration",
                    "Local storage",
                    "Push notifications",
                ],
            },
            {
                title: "Testes & QA",
                description: "Testes em múltiplos dispositivos e cenários",
                icon: <CheckCircle2 size={16} />,
                duration: "2-3 semanas",
                deliverables: [
                    "Test reports",
                    "Performance metrics",
                    "Bug fixes",
                    "Security audit",
                ],
            },
            {
                title: "App Store & Suporte",
                description: "Publicação nas lojas e suporte pós-lançamento",
                icon: <Rocket size={16} />,
                duration: "Contínuo",
                deliverables: [
                    "App Store submission",
                    "Play Store listing",
                    "Update management",
                    "User support",
                ],
            },
        ],
        technologies: ["React Native", "Swift", "Kotlin", "Firebase", "Expo"],
        cta: "Criar App",
    },

];

export const Services = ({ lang }: ServicesProps) => {
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

    const activeService = services.find((s) => s.id === selectedService);

    return (
        <section className="min-h-screen bg-background text-white py-12 px-6">
            <style>{`
                ::-webkit-scrollbar {
                    width: 4px;
                }
                ::-webkit-scrollbar-track {
                    background: transparent;
                }
                ::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: 2px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.25);
                }
            `}</style>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-3xl md:text-4xl font-black mb-3 tracking-tight">
                            Nossos Serviços
                        </h1>
                        <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
                            Soluções end-to-end que transformam ideias em produtos de classe mundial.
                            Cada projeto é desenvolvido com metodologia ágil, qualidade rigorosa e
                            suporte contínuo.
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                    {services.map((service, idx) => (
                        <motion.button
                            key={service.id}
                            onClick={() => {
                                setSelectedService(selectedService === service.id ? null : service.id);
                                setExpandedPhase(null);
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4 }}
                            className={`relative p-5 rounded-xl border transition-all duration-300 text-left group overflow-hidden ${
                                selectedService === service.id
                                    ? "border-primary/50 bg-primary/10"
                                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                            }`}
                        >
                            {/* Background gradient */}
                            <div
                                className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-gradient-to-br ${service.color}`}
                            />

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="mb-3 text-primary">{service.icon}</div>

                                {/* Title */}
                                <h3 className="text-sm font-black mb-1 text-white group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>

                                {/* Subtitle */}
                                <p className="text-xs text-gray-400 mb-3 leading-relaxed">
                                    {service.subtitle}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-1">
                                    {service.features.slice(0, 2).map((feature) => (
                                        <span
                                            key={feature}
                                            className="text-[7px] px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-400"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                    {service.features.length > 2 && (
                                        <span className="text-[7px] px-1.5 py-0.5 text-gray-500">
                                            +{service.features.length - 2}
                                        </span>
                                    )}
                                </div>

                                {/* Arrow indicator */}
                                <div className="mt-3 flex items-center gap-1 text-primary text-xs font-black opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span>Ver detalhes</span>
                                    <ArrowRight size={12} />
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>

                {/* Detailed View */}
                <AnimatePresence>
                    {activeService && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm p-6 mb-12"
                        >
                            {/* Service Header */}
                            <div className="mb-8">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="text-primary">{activeService.icon}</div>
                                            <h2 className="text-2xl font-black">{activeService.title}</h2>
                                        </div>
                                        <p className="text-gray-400 text-sm max-w-2xl">
                                            {activeService.description}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedService(null)}
                                        className="text-gray-500 hover:text-white transition-colors"
                                    >
                                        ✕
                                    </button>
                                </div>

                                {/* Technologies */}
                                <div className="border-t border-white/5 pt-4">
                                    <p className="text-[8px] font-black uppercase tracking-[0.2em] text-primary mb-2">
                                        Stack Tecnológico
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {activeService.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/30 text-primary font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Phases Timeline */}
                            <div>
                                <h3 className="text-lg font-black mb-4">Fases do Projeto</h3>
                                <div className="space-y-3">
                                    {activeService.phases.map((phase, idx) => (
                                        <motion.button
                                            key={idx}
                                            onClick={() =>
                                                setExpandedPhase(expandedPhase === idx ? null : idx)
                                            }
                                            className="w-full text-left p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all group"
                                        >
                                            {/* Phase Header */}
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-start gap-3 flex-1">
                                                    <div className="text-primary mt-0.5">{phase.icon}</div>
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <h4 className="text-sm font-black text-white">
                                                                {phase.title}
                                                            </h4>
                                                            <span className="text-[7px] px-1.5 py-0.5 rounded-md bg-primary/20 text-primary font-bold">
                                                                {phase.duration}
                                                            </span>
                                                        </div>
                                                        <p className="text-xs text-gray-400">
                                                            {phase.description}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div
                                                    className={`text-primary transition-transform ${
                                                        expandedPhase === idx ? "rotate-180" : ""
                                                    }`}
                                                >
                                                    <ArrowRight size={14} />
                                                </div>
                                            </div>

                                            {/* Phase Deliverables */}
                                            <AnimatePresence>
                                                {expandedPhase === idx && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="mt-4 pt-4 border-t border-white/5"
                                                    >
                                                        <p className="text-[8px] font-black uppercase tracking-[0.2em] text-primary mb-2">
                                                            Entregáveis
                                                        </p>
                                                        <ul className="space-y-1.5">
                                                            {phase.deliverables.map((deliverable) => (
                                                                <li
                                                                    key={deliverable}
                                                                    className="flex items-center gap-2 text-xs text-gray-300"
                                                                >
                                                                    <CheckCircle2 size={12} className="text-primary flex-shrink-0" />
                                                                    {deliverable}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full mt-6 py-3 bg-gradient-to-r from-primary to-blue-text-white font-black text-sm rounded-lg "
                            >
                                {activeService.cta}
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Process Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm p-6"
                >
                    <h3 className="text-lg font-black mb-6">Nosso Processo</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            {
                                step: "01",
                                title: "Consultoria",
                                description: "Entendemos seus objetivos e desafios",
                                icon: <Users size={18} />,
                            },
                            {
                                step: "02",
                                title: "Planejamento",
                                description: "Definimos estratégia e roadmap",
                                icon: <Lightbulb size={18} />,
                            },
                            {
                                step: "03",
                                title: "Execução",
                                description: "Desenvolvemos com qualidade premium",
                                icon: <Rocket size={18} />,
                            },
                            {
                                step: "04",
                                title: "Suporte",
                                description: "Acompanhamento contínuo pós-lançamento",
                                icon: <CheckCircle2 size={18} />,
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <span className="text-xs font-black text-primary">{item.step}</span>
                                    <div className="text-primary">{item.icon}</div>
                                </div>
                                <h4 className="text-sm font-black mb-1">{item.title}</h4>
                                <p className="text-xs text-gray-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
