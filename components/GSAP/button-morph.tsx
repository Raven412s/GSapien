'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

type ButtonMorphVariant =
    | 'morph'
    | 'scale-pulse'
    | 'tilt'
    | 'bounce'
    | 'rotate'
    | 'glow'
    | 'slide'
    | 'wiggle';

type ButtonStyleVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

const styleVariantMap: Record<ButtonStyleVariant, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400',
    secondary: 'bg-gray-100 text-zinc-900 hover:bg-gray-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 focus:ring-2 focus:ring-blue-400',
    outline: 'border border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-400',
    ghost: 'bg-transparent text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:text-blue-300 dark:hover:bg-blue-900/20 focus:ring-2 focus:ring-blue-400',
};

interface ButtonMorphProps {
    variant?: ButtonMorphVariant;
    styleVariant?: ButtonStyleVariant;
    className?: string;
    children?: React.ReactNode;
}

export function ButtonMorph({
    variant = 'morph',
    styleVariant = 'primary',
    className = '',
    children = 'Hover Me',
}: ButtonMorphProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleHover = () => {
        const el = buttonRef.current;
        if (!el) return;

        switch (variant) {
            case 'morph':
                gsap.to(el, {
                    borderRadius: '50px',
                    scale: 1.1,
                    backgroundColor: '#6366F1',
                    color: '#fff',
                    duration: 0.4,
                    ease: 'power2.out',
                });
                break;

            case 'scale-pulse':
                gsap.to(el, {
                    scale: 1.2,
                    duration: 0.3,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power2.out',
                });
                break;

            case 'tilt':
                gsap.to(el, {
                    rotateZ: 8,
                    skewX: 8,
                    duration: 0.3,
                    ease: 'power2.out',
                });
                break;

            case 'bounce':
                gsap.to(el, {
                    y: -10,
                    duration: 0.3,
                    ease: 'bounce.out',
                });
                break;

            case 'rotate':
                gsap.to(el, {
                    rotate: 360,
                    duration: 0.6,
                    ease: 'power2.out',
                });
                break;

            case 'glow':
                gsap.to(el, {
                    boxShadow: '0 0 20px #3B82F6',
                    duration: 0.3,
                });
                break;

            case 'slide':
                gsap.fromTo(
                    el,
                    { x: -20 },
                    {
                        x: 0,
                        duration: 0.3,
                        ease: 'power2.out',
                    }
                );
                break;

            case 'wiggle':
                gsap.fromTo(
                    el,
                    { rotate: -5 },
                    {
                        rotate: 5,
                        duration: 0.1,
                        repeat: 5,
                        yoyo: true,
                        ease: 'power1.inOut',
                    }
                );
                break;
        }
    };

    const handleLeave = () => {
        const el = buttonRef.current;
        if (!el) return;
        gsap.to(el, {
            scale: 1,
            rotate: 0,
            skewX: 0,
            y: 0,
            boxShadow: 'none',
            borderRadius: '0.5rem',
            backgroundColor: undefined, // Let Tailwind handle it
            color: undefined, // Let Tailwind handle it
            duration: 0.3,
            ease: 'power2.out',
        });
    };

    return (
        <button
            ref={buttonRef}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className={cn(
                'px-6 py-3 rounded-md font-semibold transition-all',
                styleVariantMap[styleVariant],
                className
            )}
        >
            {children}
        </button>
    );
}
