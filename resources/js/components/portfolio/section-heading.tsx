import AnimatedText from './animated-text';
import ScrollReveal from './scroll-reveal';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    alignment?: 'left' | 'center' | 'right';
    className?: string;
}

export default function SectionHeading({
    title,
    subtitle,
    alignment = 'center',
    className = '',
}: SectionHeadingProps) {
    const alignmentClasses = {
        left: 'text-left items-start',
        center: 'text-center items-center',
        right: 'text-right items-end',
    };

    const underlineClasses = {
        left: 'left-0 origin-left',
        center: 'left-1/2 -translate-x-1/2 origin-center',
        right: 'right-0 origin-right',
    };

    return (
        <div className={`flex flex-col mb-12 md:mb-16 ${alignmentClasses[alignment]} ${className}`}>
            {subtitle && (
                <ScrollReveal direction="up" delay={0.1} once>
                    <span className="text-xs uppercase tracking-widest text-primary font-mono mb-2 inline-block">
                        {subtitle}
                    </span>
                </ScrollReveal>
            )}
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground relative pb-4">
                <AnimatedText text={title} variant="words" once />
                <span 
                    className={`absolute bottom-0 h-[3px] w-20 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-full ${underlineClasses[alignment]}`}
                />
            </h2>
        </div>
    );
}
