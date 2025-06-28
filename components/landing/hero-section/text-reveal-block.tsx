'use client';

import { useState, useLayoutEffect, useRef } from 'react';
import AnimatedTextReveal from '@/components/GSAP/animated-text-reveal';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import gsap from 'gsap';

export function TextRevealBlock() {
    const [key, setKey] = useState(0);
    const [animation, setAnimation] = useState<
        'fade-up' | 'fade-down' | 'rotate-in' | 'scale-in' | 'slide-left' | 'slide-right'
    >('fade-up');
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
                { opacity: 0, y: -20, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: 'power2.out' }
            );
        }
    }, [key]);

    return (
        <div ref={outerRef} className="w-full flex flex-col gap-4 items-center justify-center">
            <span className="text-sm text-foreground/95 block text-center mb-2">
                Animated Text Reveal
            </span>

            <div ref={innerRef} className="flex flex-col gap-1 w-full h-32 border border-accent-foreground dark:border-accent rounded-xl bg-accent-foreground/15 dark:bg-accent/15 px-2 py-1.5">
                <div className="flex  w-full items-center justify-center" key={key}>
                    <AnimatedTextReveal
                        size="h5"
                        variant="body"
                        animation={animation}
                        className="text-accent-foreground dark:text-accent tracking-tight"
                    >
                        Choose an animation style and replay the reveal to see GSapien in action.
                    </AnimatedTextReveal>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={() => setKey(prev => prev + 1)}
                    className="px-4 py-1.5 text-sm bg-primary text-primary-foreground rounded-md shadow hover:bg-primary/80 transition"
                >
                    Replay Animation
                </button>

                <Select value={animation} onValueChange={(value) => setAnimation(value as 'fade-up' | 'fade-down' | 'rotate-in' | 'scale-in' | 'slide-left' | 'slide-right')}>
                    <SelectTrigger className="w-[160px]">
                        <SelectValue placeholder="Select animation" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="fade-up">Fade Up</SelectItem>
                        <SelectItem value="fade-down">Fade Down</SelectItem>
                        <SelectItem value="rotate-in">Rotate In</SelectItem>
                        <SelectItem value="scale-in">Scale In</SelectItem>
                        <SelectItem value="slide-left">Slide Left</SelectItem>
                        <SelectItem value="slide-right">Slide Right</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
