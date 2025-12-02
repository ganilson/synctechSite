import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Shield, BarChart3, Users, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";

// Assets
import heroBg from "@assets/generated_images/abstract_hero_background_with_gradients.png";
import appMockup from "@assets/generated_images/mobile_app_interface_mockup.png";

// UI Components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-warm flex items-center justify-center">
            <span className="font-bold text-white">S</span>
          </div>
          <span className="text-xl font-bold tracking-tight">Synctech</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#solutions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Solutions</a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="rounded-full hover:bg-white/5">Sign In</Button>
          <Button className="rounded-full bg-gradient-warm hover:opacity-90 hover:scale-105 transition-all shadow-[0_8px_30px_rgba(255,120,80,0.2)] border-0">
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-white/10 p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
          <a href="#features" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#solutions" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
          <Button className="w-full rounded-full bg-gradient-warm mt-4">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs/Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/20 via-secondary/20 to-transparent rounded-full blur-[100px] opacity-50 animate-float" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/10 via-primary/10 to-transparent rounded-full blur-[80px] opacity-30" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground">New Version 2.0 Live</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight"
          >
            Sync your <br />
            <span className="text-gradient-warm">Digital Future</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-lg leading-relaxed"
          >
            Synctech provides the infrastructure for high-scale software development. 
            Seamlessly integrate, deploy, and scale with our next-gen platform.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="h-14 px-8 rounded-full bg-gradient-warm hover:opacity-90 transition-all text-lg font-semibold shadow-[0_8px_30px_rgba(255,120,80,0.2)] border-0">
              Start Building Free
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-white/10 hover:bg-white/5 text-lg bg-transparent">
              Schedule Demo
            </Button>
          </motion.div>

          <div className="pt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-white/10 border border-background flex items-center justify-center text-[10px]">
                  <Users size={12} />
                </div>
              ))}
            </div>
            <p>Trusted by 10,000+ developers</p>
          </div>
        </div>

        {/* Right Side Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
           {/* Abstract BG for the phone */}
           <img 
             src={heroBg} 
             alt="Abstract Gradient" 
             className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-60 mix-blend-screen" 
           />
           
           {/* Phone Mockup */}
           <div className="relative z-10 transform rotate-[-6deg] hover:rotate-0 transition-transform duration-700 ease-out">
             <div className="relative mx-auto border-gray-800 bg-gray-900 border-[8px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden">
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[285px] h-[584px] bg-white dark:bg-gray-800">
                  <img src={appMockup} className="w-full h-full object-cover" alt="App Screen" />
                </div>
             </div>
             
             {/* Floating Elements */}
             <div className="absolute top-20 -right-12 p-4 glass-card rounded-2xl animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <BarChart3 size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Revenue</p>
                    <p className="font-bold text-lg">+$12,450</p>
                  </div>
                </div>
             </div>

             <div className="absolute bottom-32 -left-12 p-4 glass-card rounded-2xl animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Performance</p>
                    <p className="font-bold text-lg">99.9%</p>
                  </div>
                </div>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { title: "Real-time Sync", desc: "Data updates instantly across all connected devices.", icon: Zap },
    { title: "Bank-grade Security", desc: "End-to-end encryption for all your sensitive data.", icon: Shield },
    { title: "Team Collaboration", desc: "Work together in real-time with advanced permissions.", icon: Users },
    { title: "Advanced Analytics", desc: "Gain insights with powerful built-in dashboarding tools.", icon: BarChart3 },
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Powering the next generation</h2>
          <p className="text-muted-foreground">
            Everything you need to build faster, scale better, and secure your future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Card key={i} className="glass-card glass-card-hover border-white/5 bg-white/[0.02]">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/5">
                  <f.icon className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </CardContent>
            </Card>
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
