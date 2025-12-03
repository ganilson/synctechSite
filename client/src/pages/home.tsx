import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Shield, Users, Zap, ArrowRight, Send, MessageSquare,
  Code, Database, Smartphone, Globe, Server, Cpu, CheckCircle
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

// Assets
import heroBg from "@assets/generated_images/dark_fluid_organic_blobs_with_rim_lighting.png";
import logo from "@assets/SyncTech_LOGO_01_White_1764691366645.png";

import react from "@assets/java-4.svg";

// Gallery Images
import gallery1 from "@assets/WhatsApp_Image_2025-11-03_at_16.28.08_1764691437358.jpeg";
import gallery2 from "@assets/487705912_2402136696790237_1568879427472810476_n_1764691437360.jpg";
import gallery3 from "@assets/506052695_2472076559796250_2786976113178499270_n_1764691437362.jpg";
import gallery4 from "@assets/WhatsApp_Image_2025-11-03_at_16.17.29_(1)_1764691437364.jpeg";
import gallery5 from "@assets/WhatsApp_Image_2025-11-03_at_16.17.29_1764691437366.jpeg";

// Neon Gradient Background
import neonGradient from "@assets/neon_gradient.png";

// Tech Stack Logos
import reactLogo from "@assets/react_logo.png";
import javaLogo from "@assets/java_logo.png";
import nodejsLogo from "@assets/nodejs_logo.png";
import typescriptLogo from "@assets/typescript_logo.png";
import javascriptLogo from "@assets/javascript_logo.png";
import pythonLogo from "@assets/python_logo.png";
import dockerLogo from "@assets/docker_logo.png";
import mongodbLogo from "@assets/mongodb_logo.png";
import strapiLogo from "@assets/strapi_logo.png";
import gitlabLogo from "@assets/gitlab_logo.png";

// --- Translation Data ---
const translations = {
  en: {
    nav: {
      services: "Services",
      gallery: "Gallery",
      partners: "Partners",
      contact: "Contact",
      quote: "Get a Quote"
    },
    hero: {
      tagline: "Innovation • Support • Infrastructure",
      title1: "Transforming",
      title2: "Ideas Into Code",
      subtitle: "Software House specialized in developing high-impact digital solutions.",
      cta: "Let's talk?"
    },
    quote: {
      title: "Request Quote",
      desc: "Tell us about your project and we will contact you via WhatsApp.",
      type: "Project Type",
      details: "Project Details",
      placeholder: "Describe your main features, ideal deadline, or references...",
      submit: "Send via WhatsApp",
      types: {
        mobile: "Mobile App",
        web: "Website / WebApp",
        hybrid: "Hybrid System",
        consulting: "IT Consulting"
      }
    },
    gallery: {
      title: "Our Culture",
      desc: "An inside look at Synctech. Innovation happens when passionate people work together.",
      viewAll: "View All",
      events: "Events"
    },
    ai: {
      powered: "POWERED BY GEMINI 2.5",
      title: "Intelligence that understands your business",
      desc: "Our AI is not just a chatbot. It understands the context of Synctech, our infrastructure, and can guide you to the ideal solution even before talking to a human.",
      questions: [
        "What technologies does Synctech use?",
        "I need a Mobile App, how does it work?",
        "Do you provide support after launch?"
      ],
      placeholder: "Ask about our services...",
      assistantName: "Synctech Assistant"
    }
  },
  pt: {
    nav: {
      services: "Serviços",
      gallery: "Galeria",
      partners: "Parceiros",
      contact: "Contacto",
      quote: "Solicitar Orçamento"
    },
    hero: {
      tagline: "Inovação • Suporte • Infraestrutura",
      title1: "Transformando",
      title2: "Ideias em Código",
      subtitle: "Software House especializada no desenvolvimento de soluções digitais de alto impacto.",
      cta: "Vamos conversar?"
    },
    quote: {
      title: "Solicitar Orçamento",
      desc: "Conte-nos sobre o seu projeto e entraremos em contacto via WhatsApp.",
      type: "Tipo de Projeto",
      details: "Detalhes do Projeto",
      placeholder: "Descreva suas funcionalidades principais, prazo ideal, ou referências...",
      submit: "Enviar no WhatsApp",
      types: {
        mobile: "App Mobile",
        web: "Website / WebApp",
        hybrid: "Sistema Híbrido",
        consulting: "Consultoria TI"
      }
    },
    gallery: {
      title: "Nossa Cultura",
      desc: "Um olhar por dentro da Synctech. Inovação acontece quando pessoas apaixonadas trabalham juntas.",
      viewAll: "Ver tudo",
      events: "Eventos"
    },
    ai: {
      powered: "POWERED BY GEMINI 2.5",
      title: "Inteligência que entende o seu negócio",
      desc: "Nossa IA não é apenas um chatbot. Ela entende o contexto da Synctech, nossa infraestrutura e pode guiar você para a solução ideal antes mesmo de falar com um humano.",
      questions: [
        "Quais tecnologias a Synctech usa?",
        "Preciso de um App Mobile, como funciona?",
        "Vocês dão suporte após o lançamento?"
      ],
      placeholder: "Pergunte sobre nossos serviços...",
      assistantName: "Assistente Synctech"
    }
  }
};

type Language = 'en' | 'pt';

// --- Components ---

const Navbar = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation Layout */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 hidden md:flex items-center justify-between pointer-events-none">
        {/* Logo - Floating Left */}
        <div className={`pointer-events-auto transition-all duration-300 ${scrolled ? "opacity-0 -translate-y-4" : "opacity-100"}`}>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Synctech Logo" className="h-10 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
          </div>
        </div>

        {/* Central Floating Pill Nav - Always Visible */}
        <nav className="pointer-events-auto absolute left-1/2 top-6 -translate-x-1/2">
          <div className={`
            flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500
            bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.2)]
            ${scrolled ? "scale-90 translate-y-[-10px] bg-black/40" : "scale-100"}
          `}>
            {/* If scrolled, show mini logo inside pill */}
            <div className={`overflow-hidden transition-all duration-500 ${scrolled ? "w-8 opacity-100 ml-2" : "w-0 opacity-0"}`}>
              <img src={logo} alt="S" className="h-6 w-auto" />
            </div>

            <ul className="flex items-center px-4 gap-6 text-sm font-medium text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors relative group">
                {t.services}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-warm transition-all group-hover:w-full"></span>
              </a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors relative group">
                {t.gallery}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-warm transition-all group-hover:w-full"></span>
              </a></li>
              <li><a href="#partners" className="hover:text-white transition-colors relative group">
                {t.partners}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-warm transition-all group-hover:w-full"></span>
              </a></li>
              <li><a href="#contact" className="hover:text-white transition-colors relative group">
                {t.contact}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-warm transition-all group-hover:w-full"></span>
              </a></li>
            </ul>

            {/* Language Switcher in Pill */}
            <div className="flex items-center border-l border-white/10 pl-4 ml-2 gap-2">
              <button
                onClick={() => setLang('en')}
                className={`text-xs font-bold px-2 py-1 rounded ${lang === 'en' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('pt')}
                className={`text-xs font-bold px-2 py-1 rounded ${lang === 'pt' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
              >
                PT
              </button>
            </div>

            <div className={`overflow-hidden transition-all duration-500 ${scrolled ? "w-auto opacity-100 border-l border-white/10 pl-2" : "w-0 opacity-0"}`}>
              <QuoteButton size="sm" className="h-8 text-xs" lang={lang} />
            </div>
          </div>
        </nav>

        {/* CTA - Floating Right */}
        <div className={`pointer-events-auto transition-all duration-300 ${scrolled ? "opacity-0 -translate-y-4" : "opacity-100"}`}>
          <QuoteButton lang={lang} />
        </div>
      </header>

      {/* Mobile Nav */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-2">
          <img src={logo} alt="Synctech" className="h-8 w-auto" />
        </div>
        <div className="pointer-events-auto flex gap-2">
          <button onClick={() => setLang(lang === 'en' ? 'pt' : 'en')} className="w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-xs font-bold border border-white/10">
            {lang.toUpperCase()}
          </button>
          <button
            className="text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 md:hidden animate-in fade-in zoom-in-95 duration-300">
          <a href="#services" className="text-2xl font-medium text-white" onClick={() => setMobileMenuOpen(false)}>{t.services}</a>
          <a href="#gallery" className="text-2xl font-medium text-white" onClick={() => setMobileMenuOpen(false)}>{t.gallery}</a>
          <a href="#partners" className="text-2xl font-medium text-white" onClick={() => setMobileMenuOpen(false)}>{t.partners}</a>
          <a href="#contact" className="text-2xl font-medium text-white" onClick={() => setMobileMenuOpen(false)}>{t.contact}</a>
          <QuoteButton size="lg" className="px-8 py-6 text-lg" lang={lang} />
        </div>
      )}
    </>
  );
};

const QuoteButton = ({ className = "", size = "default", lang = "en" }: { className?: string, size?: "default" | "sm" | "lg", lang: Language }) => {
  const [open, setOpen] = useState(false);
  const [projectType, setProjectType] = useState("mobile");
  const [details, setDetails] = useState("");
  const t = translations[lang].quote;

  const handleWhatsApp = () => {
    const message = `Hi Synctech! 👋\nI'd like to request a quote.\n\n🚀 *Project Type:* ${projectType.toUpperCase()}\n📝 *Details:* ${details}\n\nLooking forward to hearing from you!`;
    const url = `https://wa.me/244946808054?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className={`rounded-full bg-white text-black hover:bg-gray-200 font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)] ${className}`}
        size={size}
      >
        {t.title}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-[#0F1218] border-white/10 text-white sm:max-w-[500px] p-0 overflow-hidden gap-0">
          <div className="relative h-32 bg-gradient-to-r from-[#FF7A3A] to-[#FF4E8B] p-6 flex flex-col justify-end">
            <div className="absolute top-4 right-4 opacity-20">
              <img src={logo} className="h-24 w-auto" />
            </div>
            <DialogTitle className="text-2xl font-bold text-white z-10">{t.title}</DialogTitle>
            <DialogDescription className="text-white/80 z-10">
              {t.desc}
            </DialogDescription>
          </div>

          <div className="p-6 grid gap-6">
            <div className="space-y-3">
              <Label className="text-xs font-bold uppercase tracking-wider text-gray-400">{t.type}</Label>
              <RadioGroup defaultValue="mobile" onValueChange={setProjectType} className="grid grid-cols-2 gap-3">
                {[
                  { id: "mobile", icon: Smartphone, label: t.types.mobile },
                  { id: "web", icon: Globe, label: t.types.web },
                  { id: "hybrid", icon: Cpu, label: t.types.hybrid },
                  { id: "consulting", icon: Users, label: t.types.consulting }
                ].map((item) => (
                  <div key={item.id}>
                    <RadioGroupItem value={item.id} id={item.id} className="peer sr-only" />
                    <Label
                      htmlFor={item.id}
                      className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 hover:border-primary/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 transition-all cursor-pointer h-24 text-center"
                    >
                      <item.icon className="h-6 w-6 text-gray-300 peer-data-[state=checked]:text-primary" />
                      <span className="text-xs font-medium">{item.label}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label htmlFor="details" className="text-xs font-bold uppercase tracking-wider text-gray-400">{t.details}</Label>
              <Textarea
                id="details"
                placeholder={t.placeholder}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="bg-black/20 border-white/10 min-h-[100px] focus:border-primary/50 resize-none"
              />
            </div>

            <Button onClick={handleWhatsApp} className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-12 rounded-xl text-base shadow-lg shadow-green-900/20">
              <MessageSquare className="mr-2 h-5 w-5" />
              {t.submit}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const Hero = ({ lang }: { lang: Language }) => {
  const t = translations[lang].hero;
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-80"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-medium tracking-wide uppercase text-gray-300">{t.tagline}</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">{t.title1}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/30 italic">{t.title2}</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full p-2 pr-6">
              <div className="h-10 px-6 rounded-full bg-white/5 flex items-center justify-center text-sm text-gray-400 border border-white/5">
                {t.cta}
              </div>
              <QuoteButton className="bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 border-0 px-8 h-10 text-white" lang={lang} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const stack = [
    { name: "React", img: reactLogo },
    { name: "Java", img: javaLogo },
    { name: "Node.js", img: nodejsLogo },
    { name: "TypeScript", img: typescriptLogo },
    { name: "JavaScript", img: javascriptLogo },
    { name: "Python", img: pythonLogo },
    { name: "Docker", img: dockerLogo },
    { name: "MongoDB", img: mongodbLogo },
    { name: "Strapi", img: strapiLogo },
    { name: "RabbitMQ", img: gitlabLogo },
  ];

  return (
    <section className="py-16 border-y border-white/5 bg-black/40 backdrop-blur-sm overflow-hidden relative z-20">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />

      <div className="flex gap-16 animate-marquee whitespace-nowrap items-center">
        {[...stack, ...stack, ...stack, ...stack].map((tech, i) => (
          <div key={i} className="flex items-center gap-3 group cursor-default">

            {/* LOGO COM IMAGEM */}
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors shadow-lg">
              <img
                src={tech.img}
                alt={tech.name}
                className="w-8 h-8 object-contain"
              />
            </div>

            <span className="text-xl font-bold text-white/40 group-hover:text-white/90 transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>


      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

const Partners = () => {
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
    <section id="partners" className="py-32 container mx-auto px-6 relative z-20">
      <div className="relative w-full rounded-[3rem] overflow-hidden bg-[#F5F5F7] dark:bg-[#070607] min-h-[600px] flex flex-col items-center justify-center p-12 md:p-16">

        {/* Subtle Ambient Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-orange-500/5 to-pink-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-black dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Partnering with innovative companies to deliver exceptional solutions
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

const Newsletter = () => {
  return (
    <section className="py-32 container mx-auto px-6 relative z-20">
      <div className="relative rounded-[3rem] overflow-hidden min-h-[500px] flex items-center justify-center p-12 md:p-16">

        {/* Neon Gradient Background */}
        <div className="absolute inset-0">
          <img
            src={neonGradient}
            alt="Neon Background"
            className="w-full h-full object-cover scale-110 animate-pulse-slow"
            style={{ animationDuration: '8s' }}
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>

        {/* Glassmorphic Content Container */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
            <div className="text-center space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Stay Connected</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Stay Updated
              </h2>

              <p className="text-white/90 text-lg max-w-lg mx-auto leading-relaxed">
                Subscribe to our newsletter to receive the latest news about technology, innovation, and Synctech updates.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/20 backdrop-blur-md border-white/30 h-14 text-base text-white placeholder:text-white/60 focus:bg-white/30 focus:border-white/50 transition-all"
                />
                <Button className="h-14 px-8 bg-white text-black hover:bg-white/90 font-bold text-base shadow-xl shadow-black/20 transition-all hover:scale-105">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1.1); }
          50% { opacity: 0.95; transform: scale(1.15); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

const Gallery = ({ lang }: { lang: Language }) => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5];
  const t = translations[lang].gallery;

  return (
    <section id="gallery" className="py-32 relative z-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
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
            <img src={images[3]} alt="Field Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

const AIChat = ({ lang }: { lang: Language }) => {
  const t = translations[lang].ai;
  const [messages, setMessages] = useState([
    { role: "ai", content: lang === 'en' ? "Hello! I'm Synctech AI. I'm connected to our knowledge base. I can help with quotes, portfolio, or technical details of our stack." : "Olá! Sou a Synctech AI. Estou conectada a nossa base de conhecimento. Posso ajudar com orçamentos, portfólio ou detalhes técnicos da nossa stack." }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Effect to reset chat when language changes
  useEffect(() => {
    setMessages([
      { role: "ai", content: lang === 'en' ? "Hello! I'm Synctech AI. I'm connected to our knowledge base. I can help with quotes, portfolio, or technical details of our stack." : "Olá! Sou a Synctech AI. Estou conectada a nossa base de conhecimento. Posso ajudar com orçamentos, portfólio ou detalhes técnicos da nossa stack." }
    ]);
  }, [lang]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput("");
    setIsTyping(true);

    // Comprehensive Knowledge Base System
    setTimeout(() => {
      let response = "";
      const lowerInput = currentInput.toLowerCase();

      // Knowledge Base - Detailed Responses
      const knowledgeBase = lang === 'en' ? {
        // Services
        mobile: {
          keywords: ["mobile", "app", "ios", "android", "flutter", "react native", "aplicativo", "aplicação móvel"],
          response: `📱 **Mobile App Development**\n\nWe create native and cross-platform mobile applications:\n\n✓ **Platforms**: iOS, Android, Cross-platform\n✓ **Technologies**: React Native, Flutter, Native (Swift/Kotlin)\n✓ **Features**: Push notifications, offline mode, real-time sync, payment integration\n✓ **Timeline**: 2-6 months depending on complexity\n✓ **Post-launch**: Continuous support and updates\n\nWould you like to discuss your mobile app idea?`
        },
        web: {
          keywords: ["web", "website", "webapp", "site", "portal", "landing", "e-commerce", "loja"],
          response: `🌐 **Web Development**\n\nWe build modern, scalable web applications:\n\n✓ **Types**: Corporate websites, web apps, e-commerce, dashboards\n✓ **Technologies**: React, Next.js, Node.js, TypeScript\n✓ **Features**: SEO optimization, responsive design, PWA, CMS integration\n✓ **Performance**: Fast loading, secure, scalable architecture\n✓ **Timeline**: 1-4 months\n\nLet's create your digital presence!`
        },
        infrastructure: {
          keywords: ["infrastructure", "infraestrutura", "cloud", "server", "servidor", "hosting", "deploy", "devops", "kubernetes"],
          response: `☁️ **IT Infrastructure & Cloud**\n\nComplete infrastructure solutions:\n\n✓ **Cloud Services**: AWS, Azure, Google Cloud setup and management\n✓ **DevOps**: CI/CD pipelines, automated deployments\n✓ **Containers**: Docker, Kubernetes orchestration\n✓ **Monitoring**: 24/7 system monitoring and alerts\n✓ **Security**: Firewall, SSL, backup strategies\n✓ **Support**: Technical support and maintenance\n\nNeed help with your infrastructure?`
        },
        consulting: {
          keywords: ["consulting", "consultoria", "advice", "help", "ajuda", "recommendation", "recomendação"],
          response: `💡 **IT Consulting**\n\nExpert guidance for your technology needs:\n\n✓ **Technology Assessment**: Evaluate current systems\n✓ **Digital Transformation**: Modernize your processes\n✓ **Architecture Design**: Scalable solutions planning\n✓ **Team Training**: Upskill your developers\n✓ **Best Practices**: Industry standards implementation\n\nLet's discuss your challenges!`
        },
        // Technologies
        stack: {
          keywords: ["technology", "tech", "stack", "tecnologia", "tools", "ferramentas", "languages", "linguagens"],
          response: `⚡ **Our Technology Stack**\n\n**Frontend**:\n• React, TypeScript, JavaScript\n• Modern UI frameworks and libraries\n\n**Backend**:\n• Node.js, Java, Python\n• RESTful APIs, GraphQL\n\n**Databases**:\n• MongoDB, PostgreSQL, MySQL\n\n**DevOps & Tools**:\n• Docker, GitLab CI/CD\n• Strapi CMS\n\nWe choose the best tech for each project!`
        },
        // Pricing
        pricing: {
          keywords: ["price", "cost", "quanto custa", "valor", "preço", "orçamento", "budget", "payment", "pagamento"],
          response: `💰 **Pricing & Budget**\n\nOur prices are tailored to your needs:\n\n📊 **Project Ranges**:\n• Simple Landing Page: Starting from consultation\n• Mobile App (MVP): Contact for quote\n• Full Web Application: Custom pricing\n• Infrastructure Setup: Monthly plans available\n\n💡 **Factors**:\n✓ Project complexity\n✓ Timeline requirements\n✓ Features and integrations\n✓ Ongoing support needs\n\n**Click 'Get a Quote' above for a detailed proposal!**`
        },
        // Timeline
        timeline: {
          keywords: ["how long", "quanto tempo", "timeline", "prazo", "duration", "duração", "when", "quando"],
          response: `⏱️ **Project Timeline**\n\n**Typical Durations**:\n• Landing Page: 1-2 weeks\n• Corporate Website: 3-6 weeks\n• Mobile App (MVP): 2-3 months\n• Full Web Application: 3-6 months\n• Custom Enterprise Solution: 6+ months\n\n**Our Process**:\n1️⃣ Discovery & Planning (1 week)\n2️⃣ Design & Prototyping (1-2 weeks)\n3️⃣ Development & Testing (varies)\n4️⃣ Deployment & Training (1 week)\n\nTimelines can be adjusted to your needs!`
        },
        // Support
        support: {
          keywords: ["support", "suporte", "maintenance", "manutenção", "update", "atualização", "help", "after"],
          response: `🛠️ **Support & Maintenance**\n\n**Post-Launch Services**:\n✓ Bug fixes and technical support\n✓ Regular updates and improvements\n✓ Security patches\n✓ Performance optimization\n✓ Feature additions\n\n**Support Plans**:\n• Basic: Bug fixes (Mon-Fri)\n• Professional: + Updates (24/5)\n• Enterprise: + Priority support (24/7)\n\n**We don't just build it, we maintain it!**`
        },
        // Location & Contact
        location: {
          keywords: ["where", "onde", "location", "localização", "address", "endereço", "huila", "angola"],
          response: `📍 **Synctech Location**\n\nBased in Huila, Angola 🇦🇴\n\n**Contact Us**:\n📞 Phone: +244 946 808 054\n📧 Email: contacto@synctech.ao\n💬 WhatsApp: Available via 'Get Quote' button\n\n**Working Hours**:\nMon-Fri: 8:00 AM - 6:00 PM WAT\n\nWe're here to help!`
        }
      } : {
        // Portuguese Knowledge Base
        mobile: {
          keywords: ["mobile", "app", "ios", "android", "flutter", "react native", "aplicativo", "aplicação móvel"],
          response: `📱 **Desenvolvimento de Apps Mobile**\n\nCriamos aplicações móveis nativas e multiplataforma:\n\n✓ **Plataformas**: iOS, Android, Cross-platform\n✓ **Tecnologias**: React Native, Flutter, Native (Swift/Kotlin)\n✓ **Recursos**: Notificações push, modo offline, sync em tempo real, integração de pagamentos\n✓ **Prazo**: 2-6 meses dependendo da complexidade\n✓ **Pós-lançamento**: Suporte contínuo e atualizações\n\nGostaria de discutir a sua ideia de app?`
        },
        web: {
          keywords: ["web", "website", "webapp", "site", "portal", "landing", "e-commerce", "loja"],
          response: `🌐 **Desenvolvimento Web**\n\nConstruímos aplicações web modernas e escaláveis:\n\n✓ **Tipos**: Sites corporativos, web apps, e-commerce, dashboards\n✓ **Tecnologias**: React, Next.js, Node.js, TypeScript\n✓ **Recursos**: Otimização SEO, design responsivo, PWA, integração CMS\n✓ **Performance**: Carregamento rápido, seguro, arquitetura escalável\n✓ **Prazo**: 1-4 meses\n\nVamos criar a sua presença digital!`
        },
        infrastructure: {
          keywords: ["infrastructure", "infraestrutura", "cloud", "server", "servidor", "hosting", "deploy", "devops", "kubernetes"],
          response: `☁️ **Infraestrutura de TI & Cloud**\n\nSoluções completas de infraestrutura:\n\n✓ **Serviços Cloud**: Setup e gestão AWS, Azure, Google Cloud\n✓ **DevOps**: Pipelines CI/CD, deployments automatizados\n✓ **Containers**: Orquestração Docker, Kubernetes\n✓ **Monitoramento**: 24/7 monitoring e alertas\n✓ **Segurança**: Firewall, SSL, estratégias de backup\n✓ **Suporte**: Suporte técnico e manutenção\n\nPrecisa de ajuda com infraestrutura?`
        },
        consulting: {
          keywords: ["consulting", "consultoria", "advice", "help", "ajuda", "recommendation", "recomendação"],
          response: `💡 **Consultoria em TI**\n\nOrientação especializada para suas necessidades tecnológicas:\n\n✓ **Avaliação Tecnológica**: Avaliar sistemas atuais\n✓ **Transformação Digital**: Modernizar processos\n✓ **Design de Arquitetura**: Planejamento de soluções escaláveis\n✓ **Formação de Equipes**: Capacitação de desenvolvedores\n✓ **Melhores Práticas**: Implementação de padrões da indústria\n\nVamos discutir seus desafios!`
        },
        stack: {
          keywords: ["technology", "tech", "stack", "tecnologia", "tools", "ferramentas", "languages", "linguagens"],
          response: `⚡ **Nossa Stack Tecnológica**\n\n**Frontend**:\n• React, TypeScript, JavaScript\n• Frameworks e bibliotecas modernas\n\n**Backend**:\n• Node.js, Java, Python\n• APIs RESTful, GraphQL\n\n**Bases de Dados**:\n• MongoDB, PostgreSQL, MySQL\n\n**DevOps & Ferramentas**:\n• Docker, GitLab CI/CD\n• Strapi CMS\n\nEscolhemos a melhor tech para cada projeto!`
        },
        pricing: {
          keywords: ["price", "cost", "quanto custa", "valor", "preço", "orçamento", "budget", "payment", "pagamento"],
          response: `💰 **Preços & Orçamento**\n\nNossos preços são adaptados às suas necessidades:\n\n📊 **Faixas de Projeto**:\n• Landing Page Simples: A partir de consulta\n• App Mobile (MVP): Contacte para orçamento\n• Aplicação Web Completa: Preço personalizado\n• Setup de Infraestrutura: Planos mensais disponíveis\n\n💡 **Fatores**:\n✓ Complexidade do projeto\n✓ Requisitos de prazo\n✓ Recursos e integrações\n✓ Necessidades de suporte contínuo\n\n**Clique 'Solicitar Orçamento' acima para proposta detalhada!**`
        },
        timeline: {
          keywords: ["how long", "quanto tempo", "timeline", "prazo", "duration", "duração", "when", "quando"],
          response: `⏱️ **Prazos de Projeto**\n\n**Durações Típicas**:\n• Landing Page: 1-2 semanas\n• Site Corporativo: 3-6 semanas\n• App Mobile (MVP): 2-3 meses\n• Aplicação Web Completa: 3-6 meses\n• Solução Enterprise Personalizada: 6+ meses\n\n**Nosso Processo**:\n1️⃣ Descoberta & Planejamento (1 semana)\n2️⃣ Design & Prototipagem (1-2 semanas)\n3️⃣ Desenvolvimento & Testes (varia)\n4️⃣ Deploy & Formação (1 semana)\n\nPrazos podem ser ajustados às suas necessidades!`
        },
        support: {
          keywords: ["support", "suporte", "maintenance", "manutenção", "update", "atualização", "help", "after"],
          response: `🛠️ **Suporte & Manutenção**\n\n**Serviços Pós-Lançamento**:\n✓ Correção de bugs e suporte técnico\n✓ Atualizações regulares e melhorias\n✓ Patches de segurança\n✓ Otimização de performance\n✓ Adição de novos recursos\n\n**Planos de Suporte**:\n• Básico: Correção de bugs (Seg-Sex)\n• Profissional: + Atualizações (24/5)\n• Enterprise: + Suporte prioritário (24/7)\n\n**Não apenas construímos, mantemos!**`
        },
        location: {
          keywords: ["where", "onde", "location", "localização", "address", "endereço", "huila", "angola"],
          response: `📍 **Localização da Synctech**\n\nSediados na Huíla, Angola 🇦🇴\n\n**Contacte-nos**:\n📞 Telefone: +244 946 808 054\n📧 Email: contacto@synctech.ao\n💬 WhatsApp: Disponível via botão 'Solicitar Orçamento'\n\n**Horário de Trabalho**:\nSeg-Sex: 8:00 - 18:00 WAT\n\nEstamos aqui para ajudar!`
        }
      };

      // Multi-topic detection
      let matchedTopics = [];
      for (const [topic, data] of Object.entries(knowledgeBase)) {
        if (data.keywords.some(keyword => lowerInput.includes(keyword))) {
          matchedTopics.push(data.response);
        }
      }

      // Generate response
      if (matchedTopics.length > 0) {
        // If multiple topics matched, combine them
        response = matchedTopics.join("\n\n---\n\n");
      } else {
        // Default fallback for unrecognized queries
        response = lang === 'en' ?
          `I'd be happy to help! I can provide detailed information about:\n\n📱 Mobile App Development\n🌐 Web Development\n☁️ IT Infrastructure & Cloud\n💡 IT Consulting\n⚡ Our Technology Stack\n💰 Pricing & Budget\n⏱️ Project Timelines\n🛠️ Support & Maintenance\n📍 Location & Contact\n\nWhat would you like to know more about?` :
          `Terei prazer em ajudar! Posso fornecer informações detalhadas sobre:\n\n📱 Desenvolvimento de Apps Mobile\n🌐 Desenvolvimento Web\n☁️ Infraestrutura de TI & Cloud\n💡 Consultoria em TI\n⚡ Nossa Stack Tecnológica\n💰 Preços & Orçamento\n⏱️ Prazos de Projeto\n🛠️ Suporte & Manutenção\n📍 Localização & Contacto\n\nSobre o que gostaria de saber mais?`;
      }

      setMessages(prev => [...prev, { role: "ai", content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section className="py-24 border-t border-white/5 bg-[#0F1218]/50 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>

          <h2 className="text-4xl font-bold mb-6 whitespace-pre-line">{t.title}</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            {t.desc}
          </p>

          <div className="space-y-4">
            {t.questions.map((q, i) => (
              <button
                key={i}
                onClick={() => { setInput(q); handleSend(); }}
                className="flex items-center justify-between w-full text-left p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all group"
              >
                <span className="text-sm font-medium">{q}</span>
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-purple-400" />
              </button>
            ))}
          </div>
        </div>

        <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden h-[600px] flex flex-col shadow-2xl ring-1 ring-white/5">
          <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <Cpu size={18} className="text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full"></span>
              </div>
              <div>
                <div className="font-bold text-sm">{t.assistantName}</div>
                <div className="text-xs text-purple-300/80">Online</div>
              </div>
            </div>
            <div className="p-2 hover:bg-white/5 rounded-full cursor-pointer">
              <img src={logo} className="h-4 w-auto opacity-50" />
            </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${m.role === 'user'
                  ? 'bg-gradient-to-br from-primary to-orange-600 text-white rounded-tr-none shadow-orange-500/10'
                  : 'bg-[#1A1D24] border border-white/5 text-gray-200 rounded-tl-none'
                  }`}>
                  <p className="whitespace-pre-line">{m.content}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#1A1D24] border border-white/5 p-4 rounded-2xl rounded-tl-none flex gap-1.5 items-center h-12">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75" />
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-[#0F1218]">
            <div className="relative">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.placeholder}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-4 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all text-white placeholder:text-gray-500"
              />
              <button
                onClick={handleSend}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:opacity-90 transition-all shadow-lg shadow-orange-500/20"
              >
                <Send size={16} className="text-white ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="py-20 border-t border-white/5 bg-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Synctech" className="h-8 w-auto" />
            </div>
            <p className="text-muted-foreground max-w-xs mb-6">
              Inovação, Suporte e Infraestrutura. Construindo o futuro digital de Angola e do mundo.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[10px]">📞</span> 946808054</p>
              <p className="flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[10px]">✉️</span> contacto@synctech.ao</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Apps Mobile</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consultoria TI</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Infraestrutura</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 Synctech. Todos os direitos reservados.</p>
          <p className="text-xs">Feito com ❤️ Huila</p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  const [lang, setLang] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 dark font-sans">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <TechStack />
      <Gallery lang={lang} />
      <Partners />
      <Newsletter />
      <AIChat lang={lang} />
      <Footer />
    </div>
  );
}
