'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

export function BrowseComponentsButton() {
    const btnRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (btnRef.current) {
                gsap.fromTo(
                    btnRef.current,
                    { x: 200, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.4,
                        ease: 'power2.out',
                    }
                );

                btnRef.current.addEventListener('mouseenter', () => {
                    gsap.to(btnRef.current, {
                        x: 5,
                        duration: 0.2,
                        ease: 'power2.out',
                    });
                });

                btnRef.current.addEventListener('mouseleave', () => {
                    gsap.to(btnRef.current, {
                        x: 0,
                        duration: 0.2,
                        ease: 'power2.out',
                    });
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <Link href="#" className="flex items-center gap-8">
            <div ref={btnRef}>
                <Button
                    className={cn(
                        'relative inline-flex items-center justify-center gap-4 rounded-xl font-medium',
                        'relative h-12 px-6 min-w-72 md:min-w-56',
                        'bg-neutral-950 dark:bg-foreground',
                        'hover:bg-neutral-900/90 dark:hover:bg-white',
                        'text-white dark:text-black',
                        'border-2 border-orange-500/20 dark:border-orange-400/20',
                        'shadow-[0_15px_30px_-6px_rgba(251,113,133,0.4),0_0px_30px_-6px_rgba(168,85,247,0.4)]',
                        'dark:shadow-[0_15px_30px_-6px_rgba(251,113,133,0.3),0_0px_30px_-6px_rgba(168,85,247,0.3)]',
                        'backdrop-blur-xs font-sans'
                    )}
                >
                    <span className="font-medium">Browse Components</span>
                    <ArrowUpRight className="size-5" />
                </Button>
            </div>
        </Link>
    );
}

export function BrowseBlocksButton() {
    const btnRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (btnRef.current) {
                gsap.fromTo(
                    btnRef.current,
                    { x: 200, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.4,
                        ease: 'power2.out',
                    }
                );

                btnRef.current.addEventListener('mouseenter', () => {
                    gsap.to(btnRef.current, {
                        x: 5,
                        duration: 0.2,
                        ease: 'power2.out',
                    });
                });

                btnRef.current.addEventListener('mouseleave', () => {
                    gsap.to(btnRef.current, {
                        x: 0,
                        duration: 0.2,
                        ease: 'power2.out',
                    });
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <Link href="#" className="flex items-center gap-8">
            <div ref={btnRef}>
                <Button
                    className={cn(
                        'relative inline-flex items-center justify-center gap-4 rounded-xl font-medium',
                        'relative h-12 px-6 min-w-72 md:min-w-56',
                        'bg-neutral-900/5 dark:bg-background/10',
                        'hover:bg-neutral-300/5 dark:hover:bg-black',
                        'text-black dark:text-white',
                        'border-2 border-orange-500/20 dark:border-orange-400/20',
                        'shadow-[0_15px_30px_-6px_rgba(251,113,133,0.4),0_0px_30px_-6px_rgba(168,85,247,0.4)]',
                        'dark:shadow-[0_15px_30px_-6px_rgba(251,113,133,0.3),0_0px_30px_-6px_rgba(168,85,247,0.3)]',
                        'backdrop-blur-xs font-sans'
                    )}
                >
                    <span className="font-medium">Browse Blocks</span>
                    <ArrowUpRight className="size-5" />
                </Button>
            </div>
        </Link>
    );
}
