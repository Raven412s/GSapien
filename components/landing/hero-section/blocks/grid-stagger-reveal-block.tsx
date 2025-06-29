'use client';

import { useState, useLayoutEffect, useRef } from 'react';
import { GridStaggerReveal } from '@/components/GSAP/grid-stagger-reveal';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import gsap from 'gsap';
import { Sparkles } from 'lucide-react';

const animationVariants = [
    'fade',
    'slide',
    'scale',
    'rotate',
    'skew',
    'flip',
    'blur',
    'zoom',
] as const;

type Variant = (typeof animationVariants)[number];

export function GridStaggerRevealBlock() {
    const [key, setKey] = useState(0);
    const [variant, setVariant] = useState<Variant>('fade');
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (outerRef.current) {
            gsap.fromTo(
                outerRef.current,
                { opacity: 0, y: -20, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out' }
            );
        }
    }, [key]);
    useLayoutEffect(() => {
        if (innerRef.current) {
            gsap.fromTo(
                innerRef.current,
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
            );
        }
    }, [key]);

    return (
        <div ref={outerRef} className="w-full flex flex-col gap-4 sm:gap-6 items-center justify-center">
            <div className="text-xs sm:text-sm text-muted-foreground">Grid Stagger Reveal</div>

            <div ref={innerRef} key={key} className="w-full max-w-5xl">
                <GridStaggerReveal
                    variant={variant}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6"
                >
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div
                            key={i}
                            className="reveal-item group relative p-0.5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/40 via-purple-400/30 to-pink-400/40 shadow-xl overflow-hidden hover:scale-[1.03] transition-transform duration-200"
                        >
                            <div className="flex flex-col items-center justify-center h-full w-full rounded-xl sm:rounded-2xl bg-white/90 dark:bg-zinc-900/90 px-4 sm:px-6 py-6 sm:py-8 min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] border border-muted/40">
                                <div className="mb-3 sm:mb-4 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 shadow-lg">
                                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                                </div>
                                <div className="text-sm sm:text-base lg:text-lg font-bold text-zinc-900 dark:text-white mb-1 text-center">Modern Card {i + 1}</div>
                                <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mb-2 text-center">Beautiful, animated, and responsive</div>
                                <button className="mt-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold shadow transition-all focus:outline-none focus:ring-2 focus:ring-blue-400">Learn More</button>
                                <div className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none group-hover:ring-2 group-hover:ring-blue-400/40 transition-all"></div>
                            </div>
                        </div>
                    ))}
                </GridStaggerReveal>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center w-full">
                <button
                    onClick={() => setKey(prev => prev + 1)}
                    className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm bg-primary text-primary-foreground rounded-md shadow hover:bg-primary/80 transition w-full sm:w-auto"
                >
                    Replay Animation
                </button>

                <Select value={variant} onValueChange={(value) => setVariant(value as Variant)}>
                    <SelectTrigger className="w-full sm:w-[160px] text-xs sm:text-sm">
                        <SelectValue placeholder="Animation variant" />
                    </SelectTrigger>
                    <SelectContent>
                        {animationVariants.map(v => (
                            <SelectItem key={v} value={v}>
                                {v.charAt(0).toUpperCase() + v.slice(1)}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
