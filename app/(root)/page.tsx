// app/page.js
'use client'
import { ScrollMarquee } from '@/components/GSAP/scroll-marquee'
import { HeroSection } from '@/components/landing/hero-section/hero-section'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    return (
        <main className="bg-background/90 dark:bg-background/15 overflow-x-hidden w-full">
            <div className="grid grid-rows-[auto_1fr_auto] min-h-screen px-6 lg:px-4 gap-4 sm:gap-12 w-full ">
                <HeroSection />
                <ScrollMarquee
                    baseSpeed={150}
                    className="text-8xl font-bold italic !h-[200px] w-screen bg-muted"
                >
                    <span className="px-4">GSAP</span>
                    <span className="px-4">&</span>
                    <span className="px-4">GSapien</span>
                    <span className="px-4">—</span>
                    <span className="px-4">for &quot;Humans who Animate&quot;</span>
                    <span className="px-4 min-h-[110%] min-w-[1px] bg-foreground"></span>
                </ScrollMarquee>


                <section className="min-h-screen"></section>
            </div>
        </main>
    )
}
