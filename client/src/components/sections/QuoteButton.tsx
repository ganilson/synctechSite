import { useState } from "react";
import { Smartphone, Globe, Cpu, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Language } from "@/types";
import { translations } from "@/lib/translations";
import logo from "@assets/SyncTech_LOGO_01_White_1764691366645.png";

interface QuoteButtonProps {
    className?: string;
    size?: "default" | "sm" | "lg";
    lang: Language;
}

export const QuoteButton = ({ className = "", size = "default", lang = "en" }: QuoteButtonProps) => {
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
