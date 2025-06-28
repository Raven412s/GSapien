// components/GSAP/AnimatedCard.tsx
'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

type AnimatedCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedCard({ children, className = '' }: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        'transition-all duration-300 hover:scale-[1.03] hover:shadow-lg will-change-transform cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}
