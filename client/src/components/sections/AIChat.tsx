import { useState, useEffect, useRef } from "react";
import { Send, MessageSquare, X, Minus, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Language } from "@/types";
import { translations } from "@/lib/translations";
import logo from "@assets/SyncTech_LOGO_01_White_1764691366645.png";

interface AIChatProps {
    lang: Language;
}

interface Message {
    role: "ai" | "user";
    content: string;
}

export const AIChat = ({ lang }: AIChatProps) => {
    const t = translations[lang].ai;
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "ai", content: t.welcome }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim() || isTyping) return;

        const userMsg: Message = { role: "user", content: input };
        setMessages(prev => [...prev, userMsg]);
        const currentInput = input;
        setInput("");
        setIsTyping(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: currentInput, lang })
            });

            if (!response.ok) throw new Error("API Error");

            const data = await response.json();
            setMessages(prev => [...prev, { role: "ai", content: data.content }]);
        } catch (error) {
            setMessages(prev => [...prev, {
                role: "ai",
                content: t.error
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center group overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        <motion.div
                            key="icon"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <MessageSquare size={28} />
                        </motion.div>
                    ) : null}
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent group-hover:scale-110 transition-transform duration-500" />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8, transformOrigin: "bottom right" }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        className="fixed bottom-24 right-6 z-50 w-[85vw] md:w-[350px] h-[500px] bg-black/85 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12">
                                    <motion.div
                                        className="absolute inset-0 bg-primary/20 rounded-full blur-md"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <div className="relative w-full h-full bg-primary rounded-full flex items-center justify-center overflow-hidden">
                                        {/* Animated Avatar with Logo */}
                                        <motion.div
                                            animate={{
                                                y: [0, -2, 0],
                                                rotate: [0, 5, -5, 0]
                                            }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                            className="w-7 h-7 flex items-center justify-center"
                                        >
                                            <img src={logo} alt="S" className="w-full h-auto object-contain" />
                                        </motion.div>
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-zinc-950 rounded-full" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold leading-none mb-1">Synctech AI</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{t.online}</span>
                                    </div>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-gray-400 hover:text-white rounded-full bg-white/5"
                                onClick={() => setIsOpen(false)}
                            >
                                <X size={20} />
                            </Button>
                        </div>

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-hide relative"
                        >
                            {/* Animated Mascot Cat */}
                            <AnimatePresence>
                                {messages.length <= 1 && !isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0 }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center opacity-20 pointer-events-none"
                                    >
                                        <motion.div
                                            animate={{
                                                rotate: [0, 10, -10, 0],
                                                y: [0, -10, 0]
                                            }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                            className="text-8xl"
                                        >
                                            🐱
                                        </motion.div>
                                        <span className="text-xs font-bold text-white mt-4 tracking-widest uppercase">{t.mascotMsg}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {messages.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] p-3.5 rounded-2xl text-[13px] ${m.role === 'user'
                                        ? 'bg-primary text-white rounded-tr-none shadow-lg'
                                        : 'bg-white/5 text-gray-200 border border-white/10 rounded-tl-none'
                                        }`}>
                                        {m.content}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10 flex gap-1">
                                        <motion.span
                                            className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                                            animate={{ y: [0, -3, 0] }}
                                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                                        />
                                        <motion.span
                                            className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                                            animate={{ y: [0, -3, 0] }}
                                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                                        />
                                        <motion.span
                                            className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                                            animate={{ y: [0, -3, 0] }}
                                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/10 bg-white/5 backdrop-blur-md">
                            <div className="relative flex items-center gap-2">
                                <Input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder={t.placeholder}
                                    className="bg-white/5 border-white/10 h-11 pl-4 pr-12 rounded-xl focus:border-primary/50 text-white placeholder:text-gray-500 text-sm"
                                />
                                <Button
                                    onClick={handleSend}
                                    disabled={!input.trim() || isTyping}
                                    className="absolute right-1.5 h-8 w-8 p-0 rounded-lg bg-primary hover:bg-primary/90 text-white shadow-lg"
                                >
                                    <Send size={14} />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
