import type { ReactNode } from 'react';
import TiltCard from './tilt-card';

interface GlassmorphismCardProps {
    children: ReactNode;
    className?: string;
    glowColor?: 'purple' | 'blue' | 'cyan' | 'pink' | 'none';
    useTilt?: boolean;
    onClick?: () => void;
}

export default function GlassmorphismCard({
    children,
    className = '',
    glowColor = 'none',
    useTilt = false,
    onClick,
}: GlassmorphismCardProps) {
    const glowClasses = {
        purple: 'shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
        blue: 'shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
        cyan: 'shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]',
        pink: 'shadow-[0_0_20px_rgba(236,72,153,0.15)] hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]',
        none: '',
    };

    const cardContent = (
        <div
            onClick={onClick}
            className={`glass rounded-2xl p-6 md:p-8 transition-all duration-300 ${onClick ? 'cursor-pointer hover:border-primary/50' : ''} ${glowClasses[glowColor]} ${className}`}
        >
            {children}
        </div>
    );

    if (useTilt) {
        return (
            <TiltCard maxTilt={8}>
                {cardContent}
            </TiltCard>
        );
    }

    return cardContent;
}
