'use client';

import AnimatedTextReveal from '@/components/GSAP/animated-text-reveal';
import CursorFollower from '@/components/GSAP/cursor-follower';
import { BrowseBlocksButton, BrowseComponentsButton } from '@/components/ui/browse-button';
import gsap from 'gsap';
import { Sparkles } from 'lucide-react';
import { motion as m } from "motion/react";
import { useLayoutEffect, useRef } from 'react';
import { SiTailwindcss } from 'react-icons/si';
import { Technologies } from '../technologies';
import { CardRevealBlock } from './card-reveal-block';
import './hero-section.css';
import { TextRevealBlock } from './text-reveal-block';
import { AnimatedCard } from '@/components/GSAP/animated-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Star } from 'lucide-react';
export function HeroSection() {
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const infoBlockRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (paragraphRef.current) {
                gsap.from(paragraphRef.current, {
                    opacity: 0,
                    y: 30,
                    delay: 0.6,
                    duration: 1,
                    ease: 'power2.out',
                });
            }

            if (infoBlockRef.current) {
                gsap.from(infoBlockRef.current, {
                    opacity: 0,
                    y: 20,
                    delay: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 px-4 sm:px-6 md:py-20 lg:py-24">
            {/* Left Side */}
            <aside className="w-full lg:w-[48%] flex flex-col items-start text-left space-y-10 pt-8 lg:pt-12">
                <div className="space-y-6">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[0.9] tracking-tighter">
                        <AnimatedTextReveal size="h1" variant="body">
                            GSapien:
                        </AnimatedTextReveal>{' '}
                        <AnimatedTextReveal size="h2" variant="body">
                            for
                        </AnimatedTextReveal>
                        <br />
                        <AnimatedTextReveal size="h2" variant="body" delay={0.2} stagger={0.09}>
                            &quot;Humans who
                        </AnimatedTextReveal>{' '}
                        <AnimatedTextReveal
                            size="h2"
                            variant="body"
                            delay={0.2}
                            stagger={0.09}
                            className="text-accent-foreground/70 dark:text-accent/95"
                        >
                            Animate
                        </AnimatedTextReveal>
                        <AnimatedTextReveal size="h2" variant="body" delay={0.2} stagger={0.09}>
                            &quot;
                        </AnimatedTextReveal>
                    </h1>

                    <p
                        ref={paragraphRef}
                        className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xl font-medium leading-relaxed"
                    >
                        A curated collection of <span className="font-bold text-foreground">100+</span>{' '}
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                            Premium
                        </span>{' '}
                        UI components, crafted with{' '}
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                            Tailwind CSS
                        </span>{' '}
                        and{' '}
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                            Shadcn UI
                        </span>{' '}
                        — animated to perfection with{' '}
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                            GSAP
                        </span>{' '}
                        for modern React and Next.js apps.
                    </p>
                </div>

                <div ref={infoBlockRef} className="flex flex-col w-full space-y-6">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full border border-purple-200 dark:border-purple-800 w-fit">
                        <SiTailwindcss className="size-5 text-[#00BCFF]" />
                        <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                            Now Updated for Tailwind CSS 4.0!
                        </span>
                        <span className="inline-flex items-center rounded-full bg-purple-600 dark:bg-purple-400 px-2 py-1 text-xs font-bold text-white dark:text-purple-900">
                            <Sparkles className="size-3 mr-1" />
                            New
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4">
                        <BrowseComponentsButton />
                        <BrowseBlocksButton />
                    </div>

                    <div className="inline-flex items-start">
                        <Technologies />
                    </div>
                </div>
            </aside>

            {/* Right Side */}
            <aside className="w-full lg:w-[52%] flex flex-col justify-start gap-8 lg:pl-8 pt-8 lg:pt-12">
                {/* Top Row: Cards + Action Search Bar */}
                <m.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-center'
                >
                    {/* Card Component */}
                    <div className="w-full flex flex-col items-center justify-center">
                        <span className="text-sm font-medium text-muted-foreground block text-center mb-4 tracking-wide uppercase">
                            Interactive Card
                        </span>
                        <AnimatedCard className="w-full">
                            <Card className="w-max border-1 border-muted shadow-xl bg-gradient-to-br from-background via-background to-muted/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
                                <CardHeader className="pb-4">
                                    <div className="flex flex-col items-center justify-between gap-1.5">
                                        <div className="flex items-center gap-3">
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-lg">
                                                <Star className="h-5 w-5 text-white" />
                                            </div>
                                            <div className="flex flex-col gap-1 items-start justify-center">
                                                <CardTitle className="text-base font-bold w-max">Premium Component</CardTitle>
                                                <div className="flex items-center gap-1 text-yellow-500">
                                                    <Star className="h-4 w-4 fill-current" />
                                                    <Star className="h-4 w-4 fill-current" />
                                                    <Star className="h-4 w-4 fill-current" />
                                                    <Star className="h-4 w-4 fill-current" />
                                                    <Star className="h-4 w-4 fill-current" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <CardDescription className="text-base text-muted-foreground leading-relaxed mt-2">
                                        Beautiful, accessible, and customizable UI components with smooth animations
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-5">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground font-medium">Downloads</span>
                                        <span className="font-bold text-lg">10.2k</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground font-medium">Rating</span>
                                        <span className="font-bold text-lg">4.9/5</span>
                                    </div>
                                    <div className="pt-3">
                                        <button className=" flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] w-max">
                                            Explore Component
                                            <ArrowRight className="h-5 w-5" />
                                        </button>
                                    </div>
                                </CardContent>
                            </Card>
                        </AnimatedCard>
                    </div>

                    {/* Action Search Bar */}
                    <div className="w-full flex flex-col items-center justify-center">
                        <span className="text-sm font-medium text-muted-foreground block text-center mb-4 tracking-wide uppercase">
                            Component Library
                        </span>
                        <div className="w-full h-48 bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                            <div className="text-center space-y-2">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto flex items-center justify-center">
                                    <Sparkles className="h-6 w-6 text-white" />
                                </div>
                                <p className="text-sm font-medium text-muted-foreground">Component Search</p>
                                <p className="text-xs text-muted-foreground/70">Coming Soon</p>
                            </div>
                        </div>
                    </div>
                </m.div>

                {/* Middle Row: Animated Text Reveal */}
                <TextRevealBlock />

                {/* Cursor Follower Demo */}
                <m.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className='w-full'
                >
                    <div className="w-full flex flex-col items-center justify-center">
                        <span className="text-sm font-medium text-muted-foreground block text-center mb-4 tracking-wide uppercase">
                            Interactive Cursor
                        </span>

                        <div className="w-full h-48 bg-gradient-to-br from-muted/30 to-muted/10 relative overflow-hidden rounded-2xl border border-muted-foreground/10">
                            <CursorFollower size={24} className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg" />

                            {/* Text layered above bg but behind cursor */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                                <p className="text-center text-lg font-semibold text-foreground/80">
                                    Hover over this section to see the cursor follower
                                </p>
                            </div>
                        </div>
                    </div>
                </m.div>

                {/* Card Reveal Demo */}
                <m.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className='w-full'
                >
                    <div className="w-full flex flex-col items-center justify-center">
                        <span className="text-sm font-medium text-muted-foreground block text-center mb-4 tracking-wide uppercase">
                            Animation Controls
                        </span>
                        <CardRevealBlock />
                    </div>
                </m.div>
            </aside>
        </div>
    );
}
