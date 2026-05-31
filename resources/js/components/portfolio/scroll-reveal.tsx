import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'none';

interface ScrollRevealProps {
    children: ReactNode;
    direction?: RevealDirection;
    duration?: number;
    delay?: number;
    once?: boolean;
    className?: string;
    distance?: number;
}

export default function ScrollReveal({
    children,
    direction = 'up',
    duration = 0.6,
    delay = 0,
    once = true,
    className = '',
    distance = 40,
}: ScrollRevealProps) {
    const getDirectionVariants = () => {
        switch (direction) {
            case 'up':
                return {
                    hidden: { opacity: 0, y: distance },
                    visible: { opacity: 1, y: 0 },
                };
            case 'down':
                return {
                    hidden: { opacity: 0, y: -distance },
                    visible: { opacity: 1, y: 0 },
                };
            case 'left':
                return {
                    hidden: { opacity: 0, x: distance },
                    visible: { opacity: 1, x: 0 },
                };
            case 'right':
                return {
                    hidden: { opacity: 0, x: -distance },
                    visible: { opacity: 1, x: 0 },
                };
            case 'zoom':
                return {
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                };
            default:
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                };
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: '-60px' }}
            variants={getDirectionVariants()}
            transition={{
                duration,
                delay,
                ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
