'use client';

import { ButtonMorph } from '@/components/GSAP/button-morph';
import { motion as m } from 'framer-motion';

export function ButtonMorphBlock() {
    return (
        <m.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center justify-center gap-4 sm:gap-6"
        >
            <span className="text-xs sm:text-sm text-muted-foreground text-center">
                Button morph on hover using GSAP
            </span>

            <div className="flex flex-col gap-3 sm:gap-4 w-full items-center">
                <ButtonMorph variant="morph" styleVariant='primary' className="w-full sm:w-48 text-sm sm:text-base">Morph</ButtonMorph>
                <ButtonMorph variant="scale-pulse" styleVariant='outline' className="w-full sm:w-48 text-sm sm:text-base">Scale Pulse</ButtonMorph>
                <ButtonMorph variant="tilt" styleVariant='primary' className="w-full sm:w-48 text-sm sm:text-base">Tilt</ButtonMorph>
                <ButtonMorph variant="bounce" styleVariant='secondary' className="w-full sm:w-48 text-sm sm:text-base">Bounce</ButtonMorph>
            </div>
        </m.div>
    );
}
