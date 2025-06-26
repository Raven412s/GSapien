'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function Logo() {
    const logoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(
            logoRef.current,
            { opacity: 0, y: -20, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'elastic.out(1, 0.5)' }
        );
    }, []);

    // Optional: Animate on hover
    const handleMouseEnter = () => {
        gsap.to(logoRef.current, { scale: 1.08, duration: 0.3, ease: 'power1.out' });
    };
    const handleMouseLeave = () => {
        gsap.to(logoRef.current, { scale: 1, duration: 0.3, ease: 'power1.out' });
    };

    return (
        <div
            ref={logoRef}
            className="inline-block cursor-pointer dark:invert relative h-[30px] w-20"
            role="img"
            aria-label="GSAP 101 Logo"
            title="GSAP 101"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                src="/logo.png"
                alt="GSAP 101 Logo"
                fill
                priority
                className="object-cover "
            />
        </div>
    );
}
