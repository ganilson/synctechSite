import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ProjectPreview } from './ProjectPreview';
import { useIsMobile } from '@/hooks/use-mobile';
import './ChromaGrid.css';

interface ChromaGridItem {
    image: string;
    title: string;
    subtitle: string;
    handle?: string;
    borderColor?: string;
    gradient: string;
    url?: string;
    location?: string;
    logo?: string;
}

interface ChromaGridProps {
    items?: ChromaGridItem[];
    className?: string;
    radius?: number;
    columns?: number;
    rows?: number;
    damping?: number;
    fadeOut?: number;
    ease?: string;
    onItemClick?: (item: ChromaGridItem) => void;
}

export const ChromaGrid = ({
    items,
    className = '',
    radius = 300,
    columns = 3,
    rows = 2,
    damping = 0.45,
    fadeOut = 0.6,
    ease = 'power3.out',
    onItemClick
}: ChromaGridProps) => {
    const isMobile = useIsMobile();
    const rootRef = useRef<HTMLDivElement>(null);
    const fadeRef = useRef<HTMLDivElement>(null);
    const setX = useRef<any>(null);
    const setY = useRef<any>(null);
    const pos = useRef({ x: 0, y: 0 });

    const demo: ChromaGridItem[] = [
        {
            image: 'https://i.pravatar.cc/300?img=8',
            title: 'Alex Rivera',
            subtitle: 'Full Stack Developer',
            handle: '@alexrivera',
            borderColor: '#4F46E5',
            gradient: 'linear-gradient(145deg, #4F46E5, #000)',
            url: 'https://github.com/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=11',
            title: 'Jordan Chen',
            subtitle: 'DevOps Engineer',
            handle: '@jordanchen',
            borderColor: '#10B981',
            gradient: 'linear-gradient(210deg, #10B981, #000)',
            url: 'https://linkedin.com/in/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=3',
            title: 'Morgan Blake',
            subtitle: 'UI/UX Designer',
            handle: '@morganblake',
            borderColor: '#F59E0B',
            gradient: 'linear-gradient(165deg, #F59E0B, #000)',
            url: 'https://dribbble.com/'
        }
    ];
    const data = items?.length ? items : demo;

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, '--x', 'px');
        setY.current = gsap.quickSetter(el, '--y', 'px');
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
    }, []);

    const moveTo = (x: number, y: number) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                setX.current?.(pos.current.x);
                setY.current?.(pos.current.y);
            },
            overwrite: true
        });
    };

    const handleMove = (e: React.PointerEvent) => {
        if (!rootRef.current) return;
        const r = rootRef.current.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        if (fadeRef.current) {
            gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
        }
    };

    const handleLeave = () => {
        if (fadeRef.current) {
            gsap.to(fadeRef.current, {
                opacity: 1,
                duration: fadeOut,
                overwrite: true
            });
        }
    };

    const handleCardClick = (item: ChromaGridItem) => {
        if (onItemClick) {
            onItemClick(item);
        } else if (item.url) {
            window.open(item.url, '_blank', 'noopener,noreferrer');
        }
    };

    const handleCardMove = (e: React.MouseEvent<HTMLElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <div
            ref={rootRef}
            className={`chroma-grid ${className}`}
            style={{
                '--r': `${radius}px`,
                '--cols': columns,
                '--rows': rows
            } as React.CSSProperties}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
        >
            {data.map((c, i) => (
                <article
                    key={i}
                    className="chroma-card"
                    onMouseMove={handleCardMove}
                    onClick={() => handleCardClick(c)}
                    style={{
                        '--card-border': c.borderColor || 'transparent',
                        '--card-gradient': c.gradient,
                        cursor: c.url ? 'pointer' : 'default'
                    } as React.CSSProperties}
                >
                    <div className="chroma-img-wrapper">
                        {c.url && !isMobile ? (
                            <div className="card-webview-wrapper">
                                <ProjectPreview url={c.url} title={c.title} />
                                <div className="card-webview-overlay" />
                                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold text-primary z-50">
                                    LIVE
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-[200px] w-full bg-zinc-900 overflow-hidden relative group">
                                <img
                                    src={isMobile && c.logo ? c.logo : c.image}
                                    alt={c.title}
                                    loading="lazy"
                                    className={`w-full h-full p-8 transition-all duration-700 ease-out group-hover:scale-110 ${isMobile && c.logo ? 'object-contain' : 'object-cover p-0'}`}
                                />
                                {isMobile && (
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                                )}
                            </div>
                        )}
                    </div>
                    <footer className="chroma-info">
                        <div className="flex justify-between items-start w-full">
                            <h3 className="name text-sm font-bold text-white tracking-tight leading-none">{c.title}</h3>
                            <span className="text-[10px] text-gray-500 font-medium uppercase tracking-tighter">{c.handle}</span>
                        </div>
                        <p className="role text-xs text-gray-400 mt-1">{c.subtitle}</p>
                    </footer>
                </article>
            ))}
            <div className="chroma-overlay" />
            <div ref={fadeRef} className="chroma-fade" />
        </div>
    );
};

export default ChromaGrid;
