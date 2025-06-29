'use client';

import { useState } from 'react';
import { AccordionReveal } from '@/components/GSAP/accordion-reveal';
import { motion as m } from 'framer-motion';

export function AccordionRevealBlock() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const accordionData = [
        {
            title: "What is GSapien?",
            content: "GSapien is a comprehensive animation library and design system built on top of GSAP (GreenSock Animation Platform). It provides pre-built, customizable animation components that make it easy for developers to create stunning, performant animations without deep GSAP knowledge. Think of it as 'GSAP for Humans' - simplifying complex animations into reusable, beautiful components."
        },
        {
            title: "Why Choose GSapien?",
            content: "GSapien combines the raw power of GSAP with modern React patterns and beautiful design. It offers: • Pre-built animation components • TypeScript support • Accessibility features • Performance optimizations • Easy customization • Modern design system integration • Cross-browser compatibility • Mobile-responsive animations"
        },
        {
            title: "Key Features & Capabilities",
            content: "GSapien provides a rich set of animation capabilities: • Text reveal animations with multiple variants • Button morphing and interaction effects • Card reveal animations with 10+ variants • Accordion animations with smooth transitions • Grid stagger effects for lists and galleries • Scroll-triggered animations • Hover and interaction animations • Custom easing and timing functions • Responsive animation scaling"
        },
        {
            title: "Getting Started with GSapien",
            content: "Getting started is simple: 1. Install GSapien and its dependencies 2. Import the components you need 3. Customize props and variants 4. Add your content and watch the magic happen! GSapien handles all the complex GSAP configurations behind the scenes, so you can focus on creating beautiful user experiences. Perfect for landing pages, portfolios, dashboards, and any project that needs engaging animations."
        }
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <m.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col gap-3 sm:gap-4 items-center justify-center"
        >
            {/* <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">About GSapien</h3>
                <p className="text-sm text-muted-foreground">
                    Learn more about the animation library that makes GSAP accessible to everyone
                </p>
            </div> */}

            <div className="w-full space-y-2 sm:space-y-3">
                {accordionData.map((item, index) => (
                    <AccordionReveal
                        key={index}
                        title={item.title}
                        content={item.content}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                        index={index}
                        className="max-w-2xl w-full"
                    />
                ))}
            </div>

            {/* <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl border border-blue-200/50 dark:border-blue-800/50">
                <p className="text-sm text-blue-800 dark:text-blue-200 text-center">
                    <strong>Pro Tip:</strong> GSapien components are fully customizable and can be extended with your own GSAP animations for even more creative possibilities.
                </p>
            </div> */}
        </m.div>
    );
}
