'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { cn } from '@/lib/utils';

gsap.registerPlugin(SplitText);

type FontVariant = 'sans' | 'serif' | 'mono' | 'body' | 'subtitle';
type TextSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body';
type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'rotate-in'
  | 'scale-in'
  | 'slide-left'
  | 'slide-right';

interface AnimatedTextProps {
  children: string;
  size?: TextSize;
  variant?: FontVariant;
  className?: string;
  stagger?: number;
  delay?: number;
  animation?: AnimationType;
}


const sizeMap: Record<TextSize, string> = {
  h1: 'text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight',
  h2: 'text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight',
  h3: 'text-2xl sm:text-3xl lg:text-4xl font-semibold',
  h4: 'text-xl sm:text-2xl font-semibold',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
  subtitle: 'text-base sm:text-lg text-muted-foreground',
  body: 'text-base sm:text-lg',
};

const variantMap: Record<FontVariant, string> = {
  sans: 'font-sans',
  serif: 'font-serif',
  mono: 'font-mono',
  body: 'font-body text-foreground',
  subtitle: 'font-sans text-foreground',
};


function getAnimationProps(type: AnimationType) {
    switch (type) {
      case 'fade-down':
        return { opacity: 0, y: -40 };
      case 'rotate-in':
        return { opacity: 0, rotation: -90, transformOrigin: 'left bottom' };
      case 'scale-in':
        return { opacity: 0, scale: 0.5 };
      case 'slide-left':
        return { opacity: 0, x: 60 };
      case 'slide-right':
        return { opacity: 0, x: -60 };
      case 'fade-up':
      default:
        return { opacity: 0, y: 40 };
    }
  }

export default function AnimatedTextReveal({
    children,
    size = 'h2',
    variant = 'body',
    className = '',
    stagger = 0.04,
    delay = 0,
    animation = 'fade-up',
  }: AnimatedTextProps) {
    const textRef = useRef<HTMLSpanElement>(null);

    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        if (textRef.current) {
          const split = new SplitText(textRef.current, {
            type: 'chars',
          });

          gsap.from(split.chars, {
            ...getAnimationProps(animation),
            stagger,
            delay,
            duration: 1.2,
            ease: 'power4.out',
          });
        }
      });

      return () => ctx.revert();
    }, [stagger, delay, animation]);

    return (
      <span
        ref={textRef}
        className={cn(
          'inline-block',
          sizeMap[size],
          variantMap[variant],
          className
        )}
      >
        {children}
      </span>
    );
  }
