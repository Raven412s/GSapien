// components/GSAP/accordion-reveal.tsx
'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface AccordionRevealProps {
    title: string;
    content: string;
    className?: string;
    isOpen?: boolean;
    onToggle?: () => void;
    index?: number;
}

export function AccordionReveal({
    title,
    content,
    className,
    isOpen = false,
    onToggle,
    index = 0
}: AccordionRevealProps) {
    const contentRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                },
            }
        );
    }, [index]);

    useEffect(() => {
        if (!contentRef.current || !iconRef.current) return;

        if (isOpen) {
            // Animate content opening
            gsap.to(contentRef.current, {
                height: 'auto',
                duration: 0.5,
                ease: 'power2.out',
            });

            // Animate icon rotation
            gsap.to(iconRef.current, {
                rotation: 180,
                duration: 0.3,
                ease: 'power2.out',
            });
        } else {
            // Animate content closing
            gsap.to(contentRef.current, {
                height: 0,
                duration: 0.4,
                ease: 'power2.in',
            });

            // Animate icon rotation back
            gsap.to(iconRef.current, {
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out',
            });
        }
    }, [isOpen]);

    return (
        <div
            ref={wrapperRef}
            className={cn(
                'border border-border/50 rounded-lg sm:rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md',
                isOpen && 'shadow-lg ring-1 ring-primary/20',
                className
            )}
        >
            <button
                onClick={onToggle}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-muted/50 to-muted/30 text-left font-semibold flex items-center justify-between hover:from-muted/70 hover:to-muted/50 transition-all duration-200"
            >
                <span className="text-sm sm:text-base text-foreground/90 font-medium pr-2">{title}</span>
                <div
                    ref={iconRef}
                    className="flex-shrink-0 transition-transform duration-200"
                >
                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                </div>
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden"
                style={{ height: 0 }}
            >
                <div className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {content}
                </div>
            </div>
        </div>
    );
}
