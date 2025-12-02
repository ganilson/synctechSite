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

// Gallery Images
import gallery1 from "@assets/WhatsApp_Image_2025-11-03_at_16.28.08_1764691437358.jpeg";
import gallery2 from "@assets/487705912_2402136696790237_1568879427472810476_n_1764691437360.jpg";
import gallery3 from "@assets/506052695_2472076559796250_2786976113178499270_n_1764691437362.jpg";
import gallery4 from "@assets/WhatsApp_Image_2025-11-03_at_16.17.29_(1)_1764691437364.jpeg";
import gallery5 from "@assets/WhatsApp_Image_2025-11-03_at_16.17.29_1764691437366.jpeg";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                 Services
                 <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-warm transition-all group-hover:w-full"></span>
               </a></li>
               <li><a href="#gallery" className="hover:text-white transition-colors relative group">
                 Gallery
                 <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-warm transition-all group-hover:w-full"></span>
               </a></li>
               <li><a href="#partners" className="hover:text-white transition-colors relative group">
                 Partners
                 <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-warm transition-all group-hover:w-full"></span>
               </a></li>
               <li><a href="#contact" className="hover:text-white transition-colors relative group">
                 Contact
                 <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-warm transition-all group-hover:w-full"></span>
               </a></li>
             </ul>

             <div className={`overflow-hidden transition-all duration-500 ${scrolled ? "w-auto opacity-100 border-l border-white/10 pl-2" : "w-0 opacity-0"}`}>
               <QuoteButton size="sm" className="h-8 text-xs" />
             </div>
          </div>
        </nav>

        {/* CTA - Floating Right */}
        <div className={`pointer-events-auto transition-all duration-300 ${scrolled ? "opacity-0 -translate-y-4" : "opacity-100"}`}>
          <QuoteButton />
        </div>
      </header>

      {/* Mobile Nav */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-2">
           <img src={logo} alt="Synctech" className="h-8 w-auto" />
        </div>
        <button 
          className="pointer-events-auto text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 md:hidden animate-in fade-in zoom-in-95 duration-300">
          <a href="#services" className="text-2xl font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#gallery" className="text-2xl font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
          <a href="#partners" className="text-2xl font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Partners</a>
          <a href="#contact" className="text-2xl font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <QuoteButton size="lg" className="px-8 py-6 text-lg" />
        </div>
      )}
    </>
  );
};

const QuoteButton = ({ className = "", size = "default" }: { className?: string, size?: "default" | "sm" | "lg" }) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState("mobile");
  const [details, setDetails] = useState("");

  const handleWhatsApp = () => {
    const message = `Olá, gostaria de solicitar um orçamento para: *${projectType}*.\nDetalhes: ${details}`;
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
        Solicitar Orçamento
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-[#0F1218] border-white/10 text-white sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Solicitar Orçamento</DialogTitle>
            <DialogDescription className="text-gray-400">
              Conte-nos sobre o seu projeto e entraremos em contacto via WhatsApp.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label>Tipo de Projeto</Label>
              <RadioGroup defaultValue="mobile" onValueChange={setProjectType} className="grid grid-cols-2 gap-2">
                <div>
                  <RadioGroupItem value="mobile" id="mobile" className="peer sr-only" />
                  <Label
                    htmlFor="mobile"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Smartphone className="mb-2 h-6 w-6" />
                    App Mobile
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="web" id="web" className="peer sr-only" />
                  <Label
                    htmlFor="web"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Globe className="mb-2 h-6 w-6" />
                    Website/Web App
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="hybrid" id="hybrid" className="peer sr-only" />
                  <Label
                    htmlFor="hybrid"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Cpu className="mb-2 h-6 w-6" />
                    Híbrido
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="other" id="other" className="peer sr-only" />
                  <Label
                    htmlFor="other"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Server className="mb-2 h-6 w-6" />
                    Outro
                  </Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="details">Breve Descrição</Label>
              <Textarea 
                id="details" 
                placeholder="Descreva brevemente o que precisa..." 
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="bg-black/20 border-white/10"
              />
            </div>
          </div>
          
          <Button onClick={handleWhatsApp} className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold">
            <MessageSquare className="mr-2 h-4 w-4" />
            Enviar no WhatsApp
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Optimized image loading with priority hint via component structure (React handles this mostly, but explicit preload link in head helps too) */}
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
            <span className="text-xs font-medium tracking-wide uppercase text-gray-300">Inovação • Suporte • Infraestrutura</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">Transforming</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/30 italic">Ideas Into Code</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Software House especializada no desenvolvimento de soluções digitais de alto impacto.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
             <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full p-2 pr-6">
                <div className="h-10 px-6 rounded-full bg-white/5 flex items-center justify-center text-sm text-gray-400 border border-white/5">
                  Vamos conversar?
                </div>
                <QuoteButton className="bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 border-0 px-8 h-10 text-white" />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const techs = [
    { name: "Java", icon: Code },
    { name: "Python", icon: Code },
    { name: "TypeScript", icon: Code },
    { name: "JavaScript", icon: Code },
    { name: "NodeJS", icon: Server },
    { name: "Azure", icon: Database },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-black/40 backdrop-blur-sm overflow-hidden relative z-20">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {[...techs, ...techs, ...techs, ...techs].map((t, i) => (
           <div key={i} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity">
             <t.icon className="w-6 h-6 text-primary" />
             <span className="text-lg font-semibold text-white/80">{t.name}</span>
           </div>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

const Partners = () => {
  // Mock partners for now, repeating the name as placeholder
  const partners = ["UNITEL", "BAI", "SONANGOL", "MININT", "AGT", "NCR", "Movicel"];

  return (
    <section id="partners" className="py-24 relative z-20 bg-background">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-2xl font-bold text-muted-foreground uppercase tracking-widest">Parceiros de Confiança</h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex gap-20 animate-marquee-rtl whitespace-nowrap py-8">
          {[...partners, ...partners, ...partners].map((p, i) => (
             <span key={i} className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 hover:from-white/40 hover:to-white/10 transition-all cursor-default select-none">
               {p}
             </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-rtl {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

const Gallery = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5];
  
  return (
    <section id="gallery" className="py-32 relative z-20 bg-black/20">
       <div className="container mx-auto px-6">
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossa Cultura</h2>
              <p className="text-muted-foreground max-w-md">
                Um olhar por dentro da Synctech. Inovação acontece quando pessoas apaixonadas trabalham juntas.
              </p>
            </div>
            <Button variant="outline" className="rounded-full border-white/10">Ver tudo</Button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
            {/* Bento Grid Layout */}
            <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group">
               <img src={images[1]} alt="Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
               <div className="absolute bottom-6 left-6">
                 <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs border border-white/10 mb-2 inline-block">Eventos</span>
                 <h3 className="text-xl font-bold">Angola Tech Summit</h3>
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

const AIChat = () => {
  const [messages, setMessages] = useState([
    { role: "ai", content: "Olá! Sou a IA da Synctech. Como posso ajudar a transformar o seu negócio hoje?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response for mockup purposes (would connect to Gemini API here)
    setTimeout(() => {
      let response = "Posso fornecer mais detalhes sobre nossos serviços de desenvolvimento de software, infraestrutura de TI ou consultoria tecnológica.";
      if (input.toLowerCase().includes("preço") || input.toLowerCase().includes("orçamento")) {
        response = "Para orçamentos precisos, recomendo usar nosso botão 'Solicitar Orçamento' no topo da página. Desenvolvemos soluções personalizadas para cada necessidade.";
      } else if (input.toLowerCase().includes("contato") || input.toLowerCase().includes("email")) {
        response = "Você pode entrar em contato pelo telefone 946808054 ou email contacto@synctech.ao.";
      }
      
      setMessages(prev => [...prev, { role: "ai", content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section className="py-24 border-t border-white/5 bg-[#0F1218]/50">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold mb-6">
            <Zap size={12} /> POWERED BY GEMINI 2.5
          </div>
          <h2 className="text-4xl font-bold mb-6">Converse com nossa Inteligência</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Nossa IA foi treinada com todo o contexto da Synctech para tirar suas dúvidas instantaneamente.
            Experimente perguntar sobre nossos serviços, tecnologias ou cultura.
          </p>
          
          <div className="space-y-4">
            {["Quais tecnologias vocês usam?", "Como solicito um orçamento?", "Fazem manutenção de servidores?"].map((q, i) => (
              <button 
                key={i}
                onClick={() => setInput(q)}
                className="block w-full text-left p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-sm"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-black border border-white/10 rounded-2xl overflow-hidden h-[500px] flex flex-col shadow-2xl">
          <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center">
              <Cpu size={16} className="text-white" />
            </div>
            <div>
              <div className="font-bold text-sm">Synctech AI</div>
              <div className="text-xs text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Online
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-primary text-primary-foreground rounded-tr-none' 
                    : 'bg-white/10 text-white rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1">
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce delay-75" />
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce delay-150" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-white/5">
            <div className="relative">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Digite sua mensagem..."
                className="w-full bg-black/50 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button 
                onClick={handleSend}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Send size={14} className="text-white ml-0.5" />
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
          <p className="text-xs">Feito com ❤️ em Luanda</p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 dark font-sans">
      <Navbar />
      <Hero />
      <TechStack />
      <Gallery />
      <Partners />
      <AIChat />
      <Footer />
    </div>
  );
}
