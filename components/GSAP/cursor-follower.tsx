'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface CursorFollowerProps {
    size?: number; // Diameter in px
    className?: string;
}

const CursorFollower: React.FC<CursorFollowerProps> = ({ size = 24, className }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const follower = followerRef.current;

        if (!container || !follower) {
            console.warn('CursorFollower: Container or follower ref not found');
            return;
        }

        const followerSize = size;

        const moveHandler = (e: MouseEvent) => {
            if (!container || !follower) return;

            const bounds = container.getBoundingClientRect();

            // Check if mouse is within the container bounds
            if (bounds.width === 0 || bounds.height === 0) {
                console.warn('CursorFollower: Container has no dimensions');
                return;
            }

            const x = e.clientX - bounds.left - followerSize / 2;
            const y = e.clientY - bounds.top - followerSize / 2;

            const clampedX = Math.max(0, Math.min(x, bounds.width - followerSize));
            const clampedY = Math.max(0, Math.min(y, bounds.height - followerSize));

            gsap.to(follower, {
                x: clampedX,
                y: clampedY,
                opacity: 1,
                duration: 0.2,
                ease: 'power2.out',
            });
        };

        const enterHandler = () => {
            if (!follower) return;

            gsap.to(follower, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        const leaveHandler = () => {
            if (!follower) return;

            gsap.to(follower, {
                opacity: 0,
                scale: 0.8,
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        // Add event listeners
        container.addEventListener('mousemove', moveHandler);
        container.addEventListener('mouseenter', enterHandler);
        container.addEventListener('mouseleave', leaveHandler);

        // Initialize follower position
        gsap.set(follower, {
            opacity: 0,
            scale: 0.8,
            x: 0,
            y: 0,
        });

        return () => {
            container.removeEventListener('mousemove', moveHandler);
            container.removeEventListener('mouseenter', enterHandler);
            container.removeEventListener('mouseleave', leaveHandler);
        };
    }, [size]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full cursor-none"
            style={{ minHeight: '100px' }} // Ensure minimum height for interaction
        >
            <div
                ref={followerRef}
                className={`pointer-events-none absolute top-0 left-0 rounded-full bg-accent z-50 ${className}`}
                style={{
                    width: size,
                    height: size,
                    transform: 'translate(0, 0)',
                }}
            />
        </div>
    );
};

export default CursorFollower;
