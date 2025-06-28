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

    if (!container || !follower) return;


    const followerSize = size;

    const moveHandler = (e: MouseEvent) => {
        if (!container || !follower) return;

        const bounds = container.getBoundingClientRect();
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



    const leaveHandler = () => {
      gsap.to(follower, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    container.addEventListener('mousemove', moveHandler);
    container.addEventListener('mouseleave', leaveHandler);

    return () => {
      container.removeEventListener('mousemove', moveHandler);
      container.removeEventListener('mouseleave', leaveHandler);
    };
  }, [size]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
    >
      <div
        ref={followerRef}
        className={`pointer-events-none absolute top-0 left-0 w-[${size}px] h-[${size}px] rounded-full bg-accent opacity-0 z-50 ${className}`}
        style={{
          width: size,
          height: size,
        }}
      />
    </div>
  );
};

export default CursorFollower;
