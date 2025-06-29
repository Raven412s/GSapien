'use client';

import AnimatedTextReveal from '@/components/GSAP/animated-text-reveal';
import CursorFollower from '@/components/GSAP/cursor-follower';
import { BrowseBlocksButton, BrowseComponentsButton } from '@/components/ui/browse-button';
import gsap from 'gsap';
import { Sparkles } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import { SiTailwindcss } from 'react-icons/si';
import { Technologies } from '../technologies';
import { CardRevealBlock } from './blocks/card-reveal-block';
import './hero-section.css';
import { TextRevealBlock } from './blocks/text-reveal-block';
import { AnimatedCard } from '@/components/GSAP/animated-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Star } from 'lucide-react';
import { GridStaggerRevealBlock } from './blocks/grid-stagger-reveal-block';
export function HeroSection() {
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const infoBlockRef = useRef<HTMLDivElement>(null);
    const topRowRef = useRef<HTMLDivElement>(null);
    const cursorDemoRef = useRef<HTMLDivElement>(null);
    const cardRevealDemoRef = useRef<HTMLDivElement>(null);

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
            if (topRowRef.current) {
                gsap.from(topRowRef.current, {
                    opacity: 0,
                    y: -20,
                    scale: 0.95,
                    duration: 0.6,
                    ease: 'power2.out',
                    delay: 0.2,
                });
            }
            if (cursorDemoRef.current) {
                gsap.from(cursorDemoRef.current, {
                    opacity: 0,
                    y: -20,
                    scale: 0.95,
                    duration: 0.6,
                    ease: 'power2.out',
                    delay: 0.3,
                });
            }
            if (cardRevealDemoRef.current) {
                gsap.from(cardRevealDemoRef.current, {
                    opacity: 0,
                    y: -20,
                    scale: 0.95,
                    duration: 0.6,
                    ease: 'power2.out',
                    delay: 0.4,
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full lg:max-w-7xl min-h-screen flex flex-col lg:flex-row  gap-8 sm:gap-12 lg:gap-16  md:py-16 lg:py-20 xl:py-24 ">
            {/* Left Side */}
            <aside className="w-full lg:w-1/2 flex-1/2 flex flex-col items-center  text-left space-y-6 sm:space-y-8 lg:space-y-10 pt-4 sm:pt-8 lg:pt-12 mx-auto ">
                <div className="space-y-4 sm:space-y-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[0.9] tracking-tighter">
                        <AnimatedTextReveal size="h1" variant="body">
                            GSapien:
                        </AnimatedTextReveal>{' '}
                        <AnimatedTextReveal size="h2" variant="body">
                            for
                        </AnimatedTextReveal>{" "}
                        <br className='hidden lg:block ' />
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
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground  font-medium leading-relaxed"
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
                        <br className='sm:hidden' />
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                            GSAP
                        </span>{' '}
                        for modern React and Next.js apps.
                    </p>
                </div>

                <div ref={infoBlockRef} className="flex flex-col w-full space-y-4 sm:space-y-6">
                    <div className="inline-flex items-center gap-2 sm:gap-3 px-3 :px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full border border-purple-200 dark:border-purple-800 w-fit">
                        <SiTailwindcss className="size-4 sm:size-5 text-[#00BCFF]" />
                        <span className="text-xs sm:text-sm font-medium text-purple-700 dark:text-purple-300">
                            Now Updated for Tailwind CSS 4.0!
                        </span>
                        <span className="inline-flex items-center rounded-full bg-purple-600 dark:bg-purple-400 px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-bold text-white dark:text-purple-900">
                            <Sparkles className="size-2 sm:size-3 mr-1" />
                            New
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3 sm:gap-4">
                        <BrowseComponentsButton />
                        <BrowseBlocksButton />
                    </div>

                    <div className="inline-flex items-start">
                        <Technologies />
                    </div>
                </div>

                <div className="!p-0 !m-0 ">
                    <GridStaggerRevealBlock />
                </div>
            </aside>

            {/* Right Side */}
            <aside className="w-full lg:w-1/2 flex-1/2 flex flex-col justify-start gap-6 sm:gap-8 lg:pl-8 pt-4 sm:pt-8 lg:pt-12  mx-auto px-8">
                {/* Top Row: Cards + Action Search Bar (GSAP animated) */}
                <div ref={topRowRef} className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start justify-center'>
                    {/* Card Component */}
                    <div className="w-full flex flex-col items-center justify-center">
                        <span className="text-xs sm:text-sm font-medium text-muted-foreground block text-center mb-3 sm:mb-4 tracking-wide uppercase">
                            Interactive Card
                        </span>
                        <AnimatedCard className="w-full max-w-2xs mx-auto ">
                            <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm border-1 border-muted shadow-xl bg-gradient-to-br from-foreground/5 via-background to-muted/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
                                <CardHeader className="pb-2 sm:pb-3 md:pb-4 px-3 sm:px-4 md:px-6">
                                    <div className="flex flex-col items-center justify-between gap-1 sm:gap-1.5">
                                        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                                            <div className="p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-lg">
                                                <Star className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                                            </div>
                                            <div className="flex flex-col gap-0.5 sm:gap-1 items-start justify-center">
                                                <CardTitle className="text-xs sm:text-sm md:text-base font-bold w-max">Premium Component</CardTitle>
                                                <div className="flex items-center gap-0.5 sm:gap-1 text-yellow-500">
                                                    <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 fill-current" />
                                                    <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 fill-current" />
                                                    <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 fill-current" />
                                                    <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 fill-current" />
                                                    <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 fill-current" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <CardDescription className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mt-1.5 sm:mt-2 text-center">
                                        Beautiful, accessible, and customizable UI components with smooth animations
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3 sm:space-y-4 md:space-y-5 px-3 sm:px-4 md:px-6">
                                    <div className="flex items-center justify-between text-xs sm:text-sm">
                                        <span className="text-muted-foreground font-medium">Downloads</span>
                                        <span className="font-bold text-sm sm:text-base md:text-lg">10.2k</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs sm:text-sm">
                                        <span className="text-muted-foreground font-medium">Rating</span>
                                        <span className="font-bold text-sm sm:text-base md:text-lg">4.9/5</span>
                                    </div>
                                    <div className="pt-1.5 sm:pt-2 md:pt-3">
                                        <button className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] w-full">
                                            Explore Component
                                            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                                        </button>
                                    </div>
                                </CardContent>
                            </Card>
                        </AnimatedCard>
                    </div>

                    {/* Action Search Bar */}
                    <div className="w-full flex flex-col items-center justify-center">
                        <span className="text-xs sm:text-sm font-medium text-muted-foreground block text-center mb-3 sm:mb-4 tracking-wide uppercase">
                            Component Library
                        </span>
                        <div className="w-full h-36 sm:h-40 lg:h-48 bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl sm:rounded-2xl border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                            <div className="text-center space-y-1 sm:space-y-2">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl mx-auto flex items-center justify-center">
                                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                                </div>
                                <p className="text-xs sm:text-sm font-medium text-muted-foreground">Component Search</p>
                                <p className="text-xs text-muted-foreground/70">Coming Soon</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Row: Animated Text Reveal */}
                <TextRevealBlock />

                {/* Cursor Follower Demo (GSAP animated) */}
                <div ref={cursorDemoRef} className='w-full'>
                    <div className="w-full flex flex-col items-center justify-center">
                        <span className="text-xs sm:text-sm font-medium text-muted-foreground block text-center mb-3 sm:mb-4 tracking-wide uppercase">
                            Interactive Cursor
                        </span>

                        <div className="w-full h-36 sm:h-40 lg:h-48 bg-gradient-to-br from-muted/30 to-muted/10 relative overflow-hidden rounded-xl sm:rounded-2xl border border-muted-foreground/10">
                            <CursorFollower size={22} className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg" />

                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-4">
                                <p className="text-center text-sm sm:text-base lg:text-lg font-semibold text-foreground/80">
                                    Hover over this section to see the cursor follower
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card Reveal Demo (GSAP animated) */}
                <div ref={cardRevealDemoRef} className='w-full'>
                    <div className="w-full flex flex-col items-center justify-center">
                        <span className="text-xs sm:text-sm font-medium text-muted-foreground block text-center mb-3 sm:mb-4 tracking-wide uppercase">
                            Animation Controls
                        </span>
                        <CardRevealBlock />
                    </div>
                </div>
            </aside>
        </div>
    );
}
