'use client';

import { CardReveal } from '@/components/GSAP/card-reveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import gsap from 'gsap';
import { ArrowRight, Star } from 'lucide-react';
import { useLayoutEffect, useRef, useState } from 'react';

const animationVariants = [
    'fade',
    'slide',
    'scale',
    'rotate',
    'skew',
    'flip',
    'blur',
    'bounce',
    'clip',
    'wipe',
] as const;

const directions = ['up', 'down', 'left', 'right'] as const;

type Variant = (typeof animationVariants)[number];
type Direction = (typeof directions)[number];

export function CardRevealBlock() {
    const [key, setKey] = useState(0);
    const [variant, setVariant] = useState<Variant>('slide');
    const [direction, setDirection] = useState<Direction>('up');
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
        <div ref={outerRef} className="w-full flex flex-col gap-3 sm:gap-4 items-center justify-center">
            <div ref={innerRef} key={key} className="w-full max-w-sm sm:max-w-md">
                <CardReveal
                    variant={variant}
                    direction={direction}
                    className=""
                >
                    <Card className="w-full border border-muted shadow-lg bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-sm">
                        <CardHeader className="pb-2 sm:pb-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                                        <Star className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                                    </div>
                                    <CardTitle className="text-sm sm:text-base lg:text-lg font-semibold">Premium Component</CardTitle>
                                </div>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <Star className="h-2 w-2 sm:h-3 sm:w-3 fill-current" />
                                    <Star className="h-2 w-2 sm:h-3 sm:w-3 fill-current" />
                                    <Star className="h-2 w-2 sm:h-3 sm:w-3 fill-current" />
                                    <Star className="h-2 w-2 sm:h-3 sm:w-3 fill-current" />
                                    <Star className="h-2 w-2 sm:h-3 sm:w-3 fill-current" />
                                </div>
                            </div>
                            <CardDescription className="text-xs sm:text-sm text-muted-foreground">
                                Beautiful, accessible, and customizable UI components
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3 sm:space-y-4">
                            <div className="flex items-center justify-between text-xs sm:text-sm">
                                <span className="text-muted-foreground">Downloads</span>
                                <span className="font-medium">10.2k</span>
                            </div>
                            <div className="flex items-center justify-between text-xs sm:text-sm">
                                <span className="text-muted-foreground">Rating</span>
                                <span className="font-medium">4.9/5</span>
                            </div>
                            <div className="pt-1 sm:pt-2">
                                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
                                    Explore Component
                                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                </CardReveal>
            </div>

            <div className="flex flex-col sm:flex-row items-center w-full gap-3 sm:gap-4 justify-center">
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

                <Select
                    value={direction}
                    onValueChange={(value) => setDirection(value as Direction)}
                    disabled={!['slide', 'rotate', 'skew', 'bounce', 'wipe'].includes(variant)}
                >
                    <SelectTrigger className="w-full sm:w-[140px] text-xs sm:text-sm">
                        <SelectValue
                            placeholder="Direction"
                            defaultValue={direction}
                        />
                    </SelectTrigger>
                    <SelectContent>
                        {directions.map((d) => (
                            <SelectItem key={d} value={d}>
                                {d.charAt(0).toUpperCase() + d.slice(1)}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
