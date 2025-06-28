'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import TailwindCSS from '../icons/tailwindcss';
import Nextjs from '../icons/nextjs';
import ShadcnIcon from '../icons/shadcn';
import ReactIcon from '../icons/react'; // You forgot this one

const technologies = [
  {
    name: 'GSAP',
    logo: '/logos/gsap.png',
    href: 'https://gsap.com/',
    isImage: true,
  },
  {
    name: 'TailwindCSS',
    logo: TailwindCSS,
    href: 'https://tailwindcss.com/',
    isImage: false,
  },
  {
    name: 'shadcn/ui',
    logo: ShadcnIcon,
    href: 'https://ui.shadcn.dev/',
    isImage: false,
  },
  {
    name: 'Next.js',
    logo: Nextjs,
    href: 'https://nextjs.org/',
    isImage: false,
  },
  {
    name: 'React',
    logo: ReactIcon,
    href: 'https://reactjs.org/',
    isImage: false,
  },
];

export const Technologies = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tech-item', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.15,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full inline-flex flex-wrap items-center  gap-6 py-6"
    >
      {technologies.map((tech) => (
        <Link
          key={tech.name}
          href={tech.href}
          target="_blank"
          rel="noopener noreferrer"
          className="tech-item flex flex-col items-center space-y-2 group"
        >
          <div
            className={cn(
              'w-14 h-14 rounded-full bg-black flex items-center justify-center relative overflow-hidden p-0.5',
              'border border-border shadow-sm transition-transform duration-200 ease-out hover:scale-95'
            )}
          >
            {tech.isImage ? (
              <Image
                src={tech.logo as string}
                alt={tech.name}
                fill
                className="object-contain rounded-full brightness-125"
              />
            ) : (
              <tech.logo className="w-8 h-8 text-white dark:text-white" />
            )}
          </div>
          <span className="text-xs font-sans text-muted-foreground group-hover:text-foreground group-hover:scale-105 transition-all font-medium">
            {tech.name}
          </span>
        </Link>
      ))}
    </div>
  );
};
