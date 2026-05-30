import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
    to: number;
    duration?: number; // in seconds
    className?: string;
    suffix?: string;
}

export default function AnimatedCounter({
    to,
    duration = 1.5,
    className = '',
    suffix = '',
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: '-20px' });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            
            // Ease out quad formula
            const easeProgress = progress * (2 - progress);
            
            setCount(Math.floor(easeProgress * to));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, to, duration]);

    return (
        <span ref={ref} className={className}>
            {count}
            {suffix}
        </span>
    );
}
