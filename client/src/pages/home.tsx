import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Shield, BarChart3, Users, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";

// Assets
import heroBg from "@assets/generated_images/dark_fluid_organic_blobs_with_rim_lighting.png";

// UI Components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
            <div className="w-8 h-8 rounded-lg bg-gradient-warm flex items-center justify-center shadow-[0_0_15px_rgba(255,120,80,0.5)]">
              <span className="font-bold text-white">S</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white mix-blend-difference">Synctech</span>
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
                <div className="w-6 h-6 rounded bg-gradient-warm flex items-center justify-center text-[10px] font-bold">S</div>
             </div>

             <ul className="flex items-center px-4 gap-6 text-sm font-medium text-gray-300">
               <li><a href="#features" className="hover:text-white transition-colors relative group">
                 Platform
                 <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-warm transition-all group-hover:w-full"></span>
               </a></li>
               <li><a href="#solutions" className="hover:text-white transition-colors relative group">
                 Solutions
                 <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-warm transition-all group-hover:w-full"></span>
               </a></li>
               <li><a href="#pricing" className="hover:text-white transition-colors relative group">
                 Company
                 <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-warm transition-all group-hover:w-full"></span>
               </a></li>
               <li><a href="#about" className="hover:text-white transition-colors relative group">
                 Support
                 <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-warm transition-all group-hover:w-full"></span>
               </a></li>
             </ul>

             <div className={`overflow-hidden transition-all duration-500 ${scrolled ? "w-24 opacity-100 border-l border-white/10 pl-2" : "w-0 opacity-0"}`}>
               <Button size="sm" className="h-8 rounded-full bg-white text-black hover:bg-gray-200 text-xs font-bold w-full">
                 Get Started
               </Button>
             </div>
          </div>
        </nav>

        {/* CTA - Floating Right */}
        <div className={`pointer-events-auto transition-all duration-300 ${scrolled ? "opacity-0 -translate-y-4" : "opacity-100"}`}>
          <Button className="rounded-full bg-white text-black hover:bg-gray-200 font-semibold px-6 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Get Started
          </Button>
        </div>
      </header>

      {/* Mobile Nav */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-2">
           <div className="w-8 h-8 rounded-lg bg-gradient-warm flex items-center justify-center">
              <span className="font-bold text-white">S</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Synctech</span>
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
          <a href="#features" className="text-2xl font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Platform</a>
          <a href="#solutions" className="text-2xl font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
          <a href="#company" className="text-2xl font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Company</a>
          <Button className="rounded-full bg-gradient-warm text-white px-8 py-6 text-lg">Get Started</Button>
        </div>
      )}
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-80" />
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
            <span className="text-xs font-medium tracking-wide uppercase text-gray-300">+65k startups use Synctech</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">Protect</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/30 italic">Your Data</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            We guard your data with utmost care, empowering you with privacy everywhere.
            Partnering with security providers to enhance protection.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
             <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full p-2 pr-6">
                <div className="h-10 px-6 rounded-full bg-white/5 flex items-center justify-center text-sm text-gray-400 border border-white/5">
                  Verify you're human
                </div>
                <Button className="rounded-full bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 border-0 px-8 h-10">
                  Try Demo
                </Button>
             </div>
          </div>
        </motion.div>

        {/* Floating stats similar to reference */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="absolute top-1/4 left-10 hidden lg:block"
        >
           <p className="text-4xl font-bold text-white">+1.5b</p>
           <p className="text-xs text-gray-500 uppercase tracking-widest">GB Data Protected</p>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.2, duration: 1 }}
           className="absolute bottom-1/3 right-10 hidden lg:block text-right"
        >
           <p className="text-4xl font-bold text-white">+300k</p>
           <p className="text-xs text-gray-500 uppercase tracking-widest">Downloads</p>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { 
      title: "Proactive Threat Detection", 
      desc: "Security providers continuously monitor network traffic to identify suspicious patterns.", 
      icon: Shield,
      color: "from-blue-500/20 to-purple-500/20"
    },
    { 
      title: "Expertise and Knowledge", 
      desc: "Gain access to a global network of security experts monitoring your infrastructure 24/7.", 
      icon: Users,
      color: "from-orange-500/20 to-red-500/20"
    },
    { 
      title: "Incident Response", 
      desc: "Rapid automated response systems that neutralize threats before they impact your data.", 
      icon: Zap,
      color: "from-green-500/20 to-emerald-500/20"
    },
  ];

  return (
    <section id="features" className="py-32 relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Benefits</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group relative h-[400px] rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2">
              {/* Glass Background */}
              <div className="absolute inset-0 bg-[#0F1218]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] z-0" />
              
              {/* Glowing Blob Effect inside card */}
              <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br ${f.color} blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
              
              <div className="relative z-10 h-full flex flex-col justify-between p-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4 leading-tight">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed opacity-80">{f.desc}</p>
                </div>
                
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                   <f.icon className="text-white/80" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ChatDemo = () => {
  return (
    <section className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Intelligent <span className="text-gradient-cool">AI Assistant</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our integrated AI helps you manage your workflow, analyze data, and make decisions faster than ever.
            </p>
            
            <div className="space-y-4">
              {[
                "Natural language processing",
                "Automated reporting workflows",
                "Context-aware suggestions"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-secondary w-5 h-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button className="rounded-full mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Explore AI Features <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Chat Interface Mockup from design.json */}
          <div className="bg-[#0F172A] rounded-2xl p-6 border border-white/10 shadow-2xl max-w-md mx-auto w-full relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary/50 to-primary/50 rounded-3xl blur-lg opacity-20 -z-10" />
            
            <div className="space-y-4">
              <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-black">AI</div>
                 <div className="bg-white/10 rounded-2xl rounded-tl-none p-3 text-sm max-w-[80%]">
                   Hello! How can I help optimize your workflow today?
                 </div>
              </div>

              <div className="flex gap-3 flex-row-reverse">
                 <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold">Me</div>
                 <div className="bg-primary rounded-2xl rounded-tr-none p-3 text-sm max-w-[80%]">
                   Show me the performance metrics for Q3.
                 </div>
              </div>

              <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-black">AI</div>
                 <div className="bg-white/10 rounded-2xl rounded-tl-none p-3 text-sm max-w-[80%] space-y-2">
                   <p>Here are the Q3 metrics:</p>
                   <div className="h-24 bg-black/20 rounded-lg p-2 flex items-end gap-1">
                      {[40, 60, 45, 70, 85, 60, 75].map((h, i) => (
                        <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-gradient-to-t from-secondary/50 to-secondary rounded-sm" />
                      ))}
                   </div>
                 </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {["Analyze Users", "Generate Report", "Export Data"].map((s, i) => (
                  <button key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs hover:bg-white/10 whitespace-nowrap">
                    {s}
                  </button>
                ))}
              </div>
              <div className="relative mt-2">
                <input type="text" placeholder="Type a message..." className="w-full bg-black/20 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-secondary/50" />
                <div className="absolute right-2 top-1.5 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-black">
                  <ArrowRight size={12} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-gradient-warm flex items-center justify-center">
                <span className="font-bold text-white text-xs">S</span>
              </div>
              <span className="text-lg font-bold">Synctech</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Building the digital infrastructure for the next generation of innovative companies.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Features</a></li>
              <li><a href="#" className="hover:text-primary">Integrations</a></li>
              <li><a href="#" className="hover:text-primary">Enterprise</a></li>
              <li><a href="#" className="hover:text-primary">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-white/5 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 Synctech Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 dark">
      <Navbar />
      <Hero />
      <Features />
      <ChatDemo />
      
      {/* Big CTA */}
      <section className="py-32 container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden p-12 md:p-24 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-3xl" />
          <div className="absolute inset-0 bg-black/40" /> {/* Overlay for contrast */}
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold">Ready to get started?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Join thousands of developers building the future with Synctech.
            </p>
            <div className="pt-4">
              <Button size="lg" className="h-14 px-10 rounded-full bg-white text-black hover:bg-white/90 font-bold text-lg border-0">
                Create Free Account
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
