import { motion } from 'framer-motion';

interface AnimatedTextProps {
    text: string;
    className?: string;
    once?: boolean;
    delay?: number;
    variant?: 'words' | 'chars' | 'fade';
}

export default function AnimatedText({
    text,
    className = '',
    once = true,
    delay = 0,
    variant = 'words',
}: AnimatedTextProps) {
    const words = text.split(' ');

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: delay,
            },
        },
    };

    const wordVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
            },
        },
    };

    if (variant === 'fade') {
        return (
            <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once }}
                transition={{ duration: 0.6, delay, ease: 'easeOut' }}
                className={className}
            >
                {text}
            </motion.span>
        );
    }

    return (
        <motion.span
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: '-20px' }}
            className={`inline-block flex-wrap ${className}`}
        >
            {words.map((word, idx) => (
                <span key={idx} className="inline-block overflow-hidden mr-[0.25em] last:mr-0 py-[0.1em]">
                    <motion.span variants={wordVariants} className="inline-block">
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.span>
    );
}
