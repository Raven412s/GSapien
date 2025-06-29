'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

type Variant =
  | 'fade'
  | 'slide'
  | 'scale'
  | 'rotate'
  | 'skew'
  | 'flip'
  | 'blur'
  | 'zoom';

interface GridStaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
}

export function GridStaggerReveal({
  children,
  className = '',
  variant = 'fade',
  delay = 0,
  duration = 0.6,
  stagger = 0.15,
  once = true,
}: GridStaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!ref.current) return;
      const elements = ref.current.querySelectorAll('.reveal-item');

      const fromVars: gsap.TweenVars = { opacity: 0 };
      const toVars: gsap.TweenVars = {
        opacity: 1,
        stagger,
        delay,
        duration,
        ease: 'power3.out',
      };

      switch (variant) {
        case 'slide':
          fromVars.y = 40;
          toVars.y = 0;
          break;

        case 'scale':
          fromVars.scale = 0.85;
          toVars.scale = 1;
          break;

        case 'rotate':
          fromVars.rotate = 10;
          toVars.rotate = 0;
          break;

        case 'skew':
          fromVars.skewY = 8;
          toVars.skewY = 0;
          break;

        case 'flip':
          fromVars.rotateY = 90;
          toVars.rotateY = 0;
          break;

        case 'blur':
          fromVars.filter = 'blur(12px)';
          toVars.filter = 'blur(0px)';
          break;

        case 'zoom':
          fromVars.scale = 0.6;
          fromVars.y = 20;
          toVars.scale = 1;
          toVars.y = 0;
          break;

        case 'fade':
        default:
          // Only opacity handled above
          break;
      }

      gsap.fromTo(elements, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: once ? 'play none none none' : 'play reverse play reverse',
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [variant, delay, duration, stagger, once]);

  return (
    <div ref={ref} className={cn('grid-stagger-reveal', className)}>
      {children}
    </div>
  );
}
