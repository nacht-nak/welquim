import { Link } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';
import { motion } from 'framer-motion';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-background p-6 md:p-10">
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Neon Purple Orb */}
                <motion.div
                    className="absolute -top-[10%] -right-[10%] w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full blur-[100px] md:blur-[130px] opacity-40 dark:opacity-30"
                    style={{ backgroundColor: 'var(--neon-purple)' }}
                    animate={{
                        x: [0, -30, 20, 0],
                        y: [0, 40, -20, 0],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                
                {/* Neon Cyan/Blue Orb */}
                <motion.div
                    className="absolute -bottom-[10%] -left-[10%] w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full blur-[100px] md:blur-[130px] opacity-40 dark:opacity-25"
                    style={{ backgroundColor: 'var(--neon-cyan)' }}
                    animate={{
                        x: [0, 40, -30, 0],
                        y: [0, -20, 30, 0],
                        scale: [1, 0.9, 1.1, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />

                {/* Neon Pink Subtle Orb */}
                <motion.div
                    className="absolute top-[30%] left-[25%] w-[250px] h-[250px] rounded-full blur-[90px] opacity-20 dark:opacity-15"
                    style={{ backgroundColor: 'var(--neon-pink)' }}
                    animate={{
                        y: [0, 50, -40, 0],
                        scale: [1, 1.2, 0.8, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
                
                {/* Tech Grid Pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0/_0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/_0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,oklch(1_0_0/_0.015)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/_0.015)_1px,transparent_1px)]" />
            </div>

            {/* Glowing Aura for the card */}
            <motion.div 
                className="w-full max-w-md relative z-10"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Glass Card Container */}
                <div className="glass-strong relative overflow-hidden rounded-2xl p-8 md:p-10 shadow-2xl border-white/10 dark:border-white/5">
                    {/* Glowing Top-Line Indicator */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-pink)] opacity-80" />

                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col items-center gap-4">
                            <motion.div
                                whileHover={{ scale: 1.08, rotate: [0, -5, 5, 0] }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            >
                                <Link
                                    href={home()}
                                    className="flex flex-col items-center gap-2 font-medium"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900/60 dark:bg-black/40 border border-white/10 dark:border-white/5 shadow-inner">
                                        <AppLogoIcon className="size-8 fill-current text-[var(--neon-blue)]" />
                                    </div>
                                    <span className="sr-only">{title}</span>
                                </Link>
                            </motion.div>

                            <div className="space-y-2 text-center">
                                <motion.h1 
                                    className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-[var(--neon-purple)]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {title}
                                </motion.h1>
                                <motion.p 
                                    className="text-center text-sm text-muted-foreground"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {description}
                                </motion.p>
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
