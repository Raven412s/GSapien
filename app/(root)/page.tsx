'use client';


import { ScrollMarquee } from '@/components/GSAP/scroll-marquee';
import { GridStaggerReveal } from '@/components/GSAP/grid-stagger-reveal';
import CursorFollower from '@/components/GSAP/cursor-follower';


import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Move, Sparkles, Zap } from 'lucide-react';
import { HeroSection } from '@/components/landing/hero-section/hero-section';
import { TextRevealBlock } from '@/components/landing/hero-section/blocks/text-reveal-block';
import { ButtonMorphBlock } from '@/components/landing/hero-section/blocks/button-morph-block';
import { AccordionRevealBlock } from '@/components/landing/hero-section/blocks/accordion-reveal-block';
import { CardRevealBlock } from '@/components/landing/hero-section/blocks/card-reveal-block';
import { GridStaggerRevealBlock } from '@/components/landing/hero-section/blocks/grid-stagger-reveal-block';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    return (
        <main className="bg-background/90 dark:bg-background/15 overflow-x-hidden w-full">
            <div className="grid grid-rows-[auto_auto_1fr_auto]  min-h-screen px-4 sm:px-6 lg:px-8 gap-4 sm:gap-8 lg:gap-12 w-full place-items-center justify-items-center">
                <div className="">
                    <HeroSection />
                </div>
            </div>
            <ScrollMarquee
                    baseSpeed={150}
                    className="text-4xl sm:text-6xl lg:text-8xl font-bold italic !h-[120px] sm:!h-[160px] lg:!h-[200px] w-screen bg-gradient-to-r from-muted/50 via-muted to-muted/50 border-y border-border/50"
                >
                    <span className="px-2 sm:px-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">GSAP</span>
                    <span className="px-2 sm:px-4 text-muted-foreground">&</span>
                    <span className="px-2 sm:px-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">GSapien</span>
                    <span className="px-2 sm:px-4 text-muted-foreground">—</span>
                    <span className="px-2 sm:px-4 text-foreground/80">for “Humans who Animate”</span>
                    <span className="px-2 sm:px-4 min-h-[110%] min-w-[1px] bg-gradient-to-b from-foreground/20 to-transparent"></span>
                </ScrollMarquee>

                <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-8 sm:space-y-12 lg:space-y-16">
                    <div className="text-center space-y-3 sm:space-y-4 max-w-4xl mx-auto px-4">
                        <Badge variant="secondary" className="px-2 sm:px-3 py-1 text-xs sm:text-sm">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Interactive Demos
                        </Badge>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
                            Animation Showcase
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Explore the power of GSAP animations with these interactive components. Each demo showcases different animation techniques and capabilities.
                        </p>
                    </div>

                    <GridStaggerReveal
                        variant="fade"
                        stagger={0.1}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl mx-auto px-4"
                    >
                        <TextRevealBlock />
                        <ButtonMorphBlock />
                        <AccordionRevealBlock />
                        <CardRevealBlock />
                    </GridStaggerReveal>

                    <div className="w-full max-w-7xl mx-auto px-4">
                        <Card className="border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="pb-4 sm:pb-6">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600">
                                        <Move className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-base sm:text-lg">Cursor Follower</CardTitle>
                                        <CardDescription className="text-xs sm:text-sm">Interactive cursor following with GSAP animations</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-3 sm:p-6">
                                <div className="w-full h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-muted/30 to-muted/10 relative overflow-hidden rounded-xl sm:rounded-2xl border border-muted-foreground/10">
                                    <CursorFollower size={28} className="bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg" />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-4 text-center space-y-2">
                                        <p className="text-sm sm:text-base lg:text-lg font-semibold text-foreground/80">Move your cursor over this area</p>
                                        <p className="text-xs sm:text-sm text-muted-foreground">Watch the animated cursor follower in action</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="w-full max-w-7xl mx-auto px-4">
                        <Card className="border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="pb-4 sm:pb-6">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-600">
                                        <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-base sm:text-lg">Grid Stagger Effects</CardTitle>
                                        <CardDescription className="text-xs sm:text-sm">Staggered grid animations with multiple variants</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-3 sm:p-6">
                                <GridStaggerRevealBlock />
                            </CardContent>
                        </Card>
                    </div>
                </section>
        </main>
    );
}
