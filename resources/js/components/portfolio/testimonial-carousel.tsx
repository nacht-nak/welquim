import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { Testimonial } from '@/types/portfolio';

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    useEffect(() => {
        if (testimonials.length <= 1) {
return;
}

        const timer = setInterval(() => {
            handleNext();
        }, 6000);

        return () => clearInterval(timer);
    }, [index, testimonials.length]);

    if (!testimonials || testimonials.length === 0) {
return null;
}

    const handleNext = () => {
        setDirection(1);
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const activeTestimonial = testimonials[index];

    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: 'spring' as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
            },
        },
        exit: (dir: number) => ({
            x: dir < 0 ? 100 : -100,
            opacity: 0,
            transition: {
                x: { type: 'spring' as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
            },
        }),
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto py-8">
            <Quote className="absolute -top-4 -left-4 md:-left-8 h-12 w-12 text-primary/10 rotate-180 z-0 pointer-events-none" />

            <div className="overflow-hidden min-h-[250px] relative z-10 px-4">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={index}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="flex flex-col items-center text-center space-y-6"
                    >
                        {/* Rating stars */}
                        <div className="flex items-center gap-1 justify-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-5 w-5 ${
                                        i < activeTestimonial.rating
                                            ? 'fill-amber-400 text-amber-400'
                                            : 'text-neutral-600'
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Content */}
                        <p className="text-lg md:text-xl font-medium text-foreground max-w-2xl italic leading-relaxed">
                            "{activeTestimonial.content}"
                        </p>

                        {/* Client details */}
                        <div className="space-y-1">
                            <h4 className="font-bold text-foreground text-base">
                                {activeTestimonial.name}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                                {activeTestimonial.position}
                                {activeTestimonial.company && ` at ${activeTestimonial.company}`}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Slider Dots */}
            {testimonials.length > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8 z-20">
                    <button
                        onClick={handlePrev}
                        className="p-1.5 rounded-full border border-border bg-neutral-950 text-muted-foreground hover:text-white hover:border-primary/50 transition-all cursor-pointer"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > index ? 1 : -1);
                                setIndex(i);
                            }}
                            className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                                i === index
                                    ? 'bg-primary w-6'
                                    : 'bg-neutral-600 hover:bg-neutral-400'
                            }`}
                        />
                    ))}
                    <button
                        onClick={handleNext}
                        className="p-1.5 rounded-full border border-border bg-neutral-950 text-muted-foreground hover:text-white hover:border-primary/50 transition-all cursor-pointer"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            )}
        </div>
    );
}
