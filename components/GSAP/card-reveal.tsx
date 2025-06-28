'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

type RevealDirection = 'up' | 'down' | 'left' | 'right';
type RevealVariant =
  | 'fade'
  | 'slide'
  | 'scale'
  | 'rotate'
  | 'skew'
  | 'flip'
  | 'blur'
  | 'bounce'
  | 'clip'
  | 'wipe';

interface CardRevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
}

export function CardReveal({
  children,
  direction = 'up',
  variant = 'slide',
  delay = 0,
  duration = 0.8,
  className = '',
}: CardRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const x = direction === 'left' ? 100 : direction === 'right' ? -100 : 0;
    const y = direction === 'up' ? 100 : direction === 'down' ? -100 : 0;

    const fromVars: gsap.TweenVars = { opacity: 0 };
    const toVars: gsap.TweenVars = {
      opacity: 1,
      duration,
      delay,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reset',
      },
    };

    switch (variant) {
      case 'fade':
        break;

      case 'slide':
        fromVars.x = x;
        fromVars.y = y;
        toVars.x = 0;
        toVars.y = 0;
        break;

      case 'scale':
        fromVars.scale = 0.85;
        toVars.scale = 1;
        break;

      case 'rotate':
        fromVars.rotate = direction === 'left' ? -15 : direction === 'right' ? 15 : 10;
        toVars.rotate = 0;
        break;

      case 'skew':
        fromVars.skewY = direction === 'up' || direction === 'down' ? 10 : 0;
        fromVars.skewX = direction === 'left' || direction === 'right' ? 10 : 0;
        toVars.skewY = 0;
        toVars.skewX = 0;
        break;

      case 'flip':
        fromVars.rotateY = 90;
        toVars.rotateY = 0;
        break;

      case 'blur':
        fromVars.filter = 'blur(10px)';
        toVars.filter = 'blur(0px)';
        break;

      case 'bounce':
        fromVars.y = 60;
        toVars.y = 0;
        toVars.ease = 'bounce.out';
        break;

      case 'clip':
        fromVars.clipPath = 'inset(0% 100% 0% 0%)';
        toVars.clipPath = 'inset(0% 0% 0% 0%)';
        break;

      case 'wipe':
        fromVars.scaleX = 0;
        toVars.scaleX = 1;
        toVars.transformOrigin =
          direction === 'left'
            ? 'left center'
            : direction === 'right'
            ? 'right center'
            : 'center center';
        break;

      default:
        break;
    }

    gsap.fromTo(el, fromVars, toVars);

    return () => gsap.killTweensOf(el);
  }, [direction, variant, delay, duration]);

  return (
    <div ref={ref} className={cn('will-change-transform', className)}>
      {children}
    </div>
  );
}
