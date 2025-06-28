'use client';

import { useState } from 'react';
import { CardReveal } from '@/components/GSAP/card-reveal';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { motion as m } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Star } from 'lucide-react';

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

    return (
        <m.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col gap-4 items-center justify-center"
        >
            <m.div
                key={key}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="w-full max-w-md"
            >
                <CardReveal
                    variant={variant}
                    direction={direction}
                    className=""
                >
                                     <Card className="w-full max-w-sm border border-muted shadow-lg bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-sm">
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                                                <Star className="h-4 w-4 text-white" />
                                            </div>
                                            <CardTitle className="text-lg font-semibold">Premium Component</CardTitle>
                                        </div>
                                        <div className="flex items-center gap-1 text-yellow-500">
                                            <Star className="h-3 w-3 fill-current" />
                                            <Star className="h-3 w-3 fill-current" />
                                            <Star className="h-3 w-3 fill-current" />
                                            <Star className="h-3 w-3 fill-current" />
                                            <Star className="h-3 w-3 fill-current" />
                                        </div>
                                    </div>
                                    <CardDescription className="text-sm text-muted-foreground">
                                        Beautiful, accessible, and customizable UI components
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">Downloads</span>
                                        <span className="font-medium">10.2k</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">Rating</span>
                                        <span className="font-medium">4.9/5</span>
                                    </div>
                                    <div className="pt-2">
                                        <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
                                            Explore Component
                                            <ArrowRight className="h-4 w-4" />
                                        </button>
                                    </div>
                                </CardContent>
                            </Card>
                </CardReveal>
            </m.div>

            <div className="flex items-center w-full gap-4 justify-center ">
                <button
                    onClick={() => setKey(prev => prev + 1)}
                    className="px-4 py-1.5 text-sm bg-primary text-primary-foreground rounded-md shadow hover:bg-primary/80 transition w-full"
                >
                    Replay Animation
                </button>

                    <Select value={variant} onValueChange={(value) => setVariant(value as Variant)}>
                        <SelectTrigger className="w-[160px]">
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
                        <SelectTrigger className="w-[140px]">
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
        </m.div>
    );
}
