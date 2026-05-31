import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface SkillBarProps {
    name: string;
    proficiency: number;
    iconName?: string | null;
}

// ---------------------------------------------------------------------------
// Per-language / per-tech color map
// ---------------------------------------------------------------------------
type ColorConfig = {
    bar: string;        // gradient for the fill bar
    glow: string;       // box-shadow glow color
    badge: string;      // background for the icon/label badge
    text: string;       // text color for the badge
    icon: string;       // devicon class suffix
};

const SKILL_COLORS: Record<string, ColorConfig> = {
    // Languages
    javascript: {
        bar: 'linear-gradient(90deg, #f7df1e, #f0a500)',
        glow: 'rgba(247,223,30,0.45)',
        badge: 'rgba(247,223,30,0.12)',
        text: '#b8960c',
        icon: 'devicon-javascript-plain',
    },
    typescript: {
        bar: 'linear-gradient(90deg, #3178c6, #235a97)',
        glow: 'rgba(49,120,198,0.45)',
        badge: 'rgba(49,120,198,0.12)',
        text: '#3178c6',
        icon: 'devicon-typescript-plain',
    },
    python: {
        bar: 'linear-gradient(90deg, #3572A5, #FFD43B)',
        glow: 'rgba(53,114,165,0.4)',
        badge: 'rgba(53,114,165,0.12)',
        text: '#3572A5',
        icon: 'devicon-python-plain',
    },
    php: {
        bar: 'linear-gradient(90deg, #777bb4, #4f5b93)',
        glow: 'rgba(119,123,180,0.45)',
        badge: 'rgba(119,123,180,0.12)',
        text: '#777bb4',
        icon: 'devicon-php-plain',
    },
    rust: {
        bar: 'linear-gradient(90deg, #ce422b, #8b2a18)',
        glow: 'rgba(206,66,43,0.4)',
        badge: 'rgba(206,66,43,0.12)',
        text: '#ce422b',
        icon: 'devicon-rust-plain',
    },
    go: {
        bar: 'linear-gradient(90deg, #00ADD8, #007fa3)',
        glow: 'rgba(0,173,216,0.4)',
        badge: 'rgba(0,173,216,0.12)',
        text: '#00ADD8',
        icon: 'devicon-go-plain',
    },
    // Frontend
    react: {
        bar: 'linear-gradient(90deg, #61DAFB, #21a1c4)',
        glow: 'rgba(97,218,251,0.4)',
        badge: 'rgba(97,218,251,0.12)',
        text: '#21a1c4',
        icon: 'devicon-react-original',
    },
    vue: {
        bar: 'linear-gradient(90deg, #42b883, #2d7a5f)',
        glow: 'rgba(66,184,131,0.4)',
        badge: 'rgba(66,184,131,0.12)',
        text: '#42b883',
        icon: 'devicon-vuejs-plain',
    },
    nextjs: {
        bar: 'linear-gradient(90deg, #888, #333)',
        glow: 'rgba(100,100,100,0.35)',
        badge: 'rgba(120,120,120,0.1)',
        text: '#888',
        icon: 'devicon-nextjs-plain',
    },
    svelte: {
        bar: 'linear-gradient(90deg, #FF3E00, #c73000)',
        glow: 'rgba(255,62,0,0.4)',
        badge: 'rgba(255,62,0,0.1)',
        text: '#FF3E00',
        icon: 'devicon-svelte-plain',
    },
    html: {
        bar: 'linear-gradient(90deg, #e34f26, #b83415)',
        glow: 'rgba(227,79,38,0.4)',
        badge: 'rgba(227,79,38,0.1)',
        text: '#e34f26',
        icon: 'devicon-html5-plain',
    },
    css: {
        bar: 'linear-gradient(90deg, #264de4, #1a35b8)',
        glow: 'rgba(38,77,228,0.4)',
        badge: 'rgba(38,77,228,0.1)',
        text: '#264de4',
        icon: 'devicon-css3-plain',
    },
    tailwind: {
        bar: 'linear-gradient(90deg, #38bdf8, #0ea5e9)',
        glow: 'rgba(56,189,248,0.4)',
        badge: 'rgba(56,189,248,0.1)',
        text: '#0ea5e9',
        icon: 'devicon-tailwindcss-plain',
    },
    // Backend / DB
    nodejs: {
        bar: 'linear-gradient(90deg, #539E43, #3a7030)',
        glow: 'rgba(83,158,67,0.4)',
        badge: 'rgba(83,158,67,0.1)',
        text: '#539E43',
        icon: 'devicon-nodejs-plain',
    },
    laravel: {
        bar: 'linear-gradient(90deg, #FF2D20, #b81e15)',
        glow: 'rgba(255,45,32,0.4)',
        badge: 'rgba(255,45,32,0.1)',
        text: '#FF2D20',
        icon: 'devicon-laravel-plain',
    },
    mysql: {
        bar: 'linear-gradient(90deg, #4479A1, #2d5a80)',
        glow: 'rgba(68,121,161,0.4)',
        badge: 'rgba(68,121,161,0.1)',
        text: '#4479A1',
        icon: 'devicon-mysql-plain',
    },
    postgresql: {
        bar: 'linear-gradient(90deg, #336791, #1e4a6b)',
        glow: 'rgba(51,103,145,0.4)',
        badge: 'rgba(51,103,145,0.1)',
        text: '#336791',
        icon: 'devicon-postgresql-plain',
    },
    mongodb: {
        bar: 'linear-gradient(90deg, #47A248, #2e6e2e)',
        glow: 'rgba(71,162,72,0.4)',
        badge: 'rgba(71,162,72,0.1)',
        text: '#47A248',
        icon: 'devicon-mongodb-plain',
    },
    // DevOps / Tools
    docker: {
        bar: 'linear-gradient(90deg, #2496ED, #1272b8)',
        glow: 'rgba(36,150,237,0.4)',
        badge: 'rgba(36,150,237,0.1)',
        text: '#2496ED',
        icon: 'devicon-docker-plain',
    },
    git: {
        bar: 'linear-gradient(90deg, #F05032, #b83520)',
        glow: 'rgba(240,80,50,0.4)',
        badge: 'rgba(240,80,50,0.1)',
        text: '#F05032',
        icon: 'devicon-git-plain',
    },
    linux: {
        bar: 'linear-gradient(90deg, #FCC624, #d4a010)',
        glow: 'rgba(252,198,36,0.4)',
        badge: 'rgba(252,198,36,0.1)',
        text: '#b8860b',
        icon: 'devicon-linux-plain',
    },
    // Default fallback
    default: {
        bar: 'linear-gradient(90deg, #a855f7, #6366f1)',
        glow: 'rgba(168,85,247,0.4)',
        badge: 'rgba(168,85,247,0.1)',
        text: '#a855f7',
        icon: '',
    },
};

function getColor(name: string, iconName?: string | null): ColorConfig {
    const key = (iconName ?? name).toLowerCase().replace(/[^a-z]/g, '');
    return (
        SKILL_COLORS[key] ??
        // partial match (e.g. "reactjs" → "react")
        Object.entries(SKILL_COLORS).find(([k]) => key.includes(k))?.[1] ??
        SKILL_COLORS.default
    );
}

// ---------------------------------------------------------------------------
// Animated counter for the percentage
// ---------------------------------------------------------------------------
function AnimatedPercent({ target, color }: { target: number; color: string }) {
    const motionVal = useMotionValue(0);
    const rounded = useTransform(motionVal, (v) => `${Math.round(v)}%`);
    const [display, setDisplay] = useState('0%');

    useEffect(() => {
        const unsub = rounded.on('change', setDisplay);
        const ctrl = animate(motionVal, target, { duration: 1.2, ease: 'easeOut', delay: 0.2 });
        return () => { ctrl.stop(); unsub(); };
    }, [target]);

    return (
        <span className="font-mono text-sm font-semibold tabular-nums" style={{ color }}>
            {display}
        </span>
    );
}

// ---------------------------------------------------------------------------
// Shimmer overlay that sweeps once across the filled bar
// ---------------------------------------------------------------------------
function Shimmer() {
    return (
        <motion.span
            className="absolute inset-0 rounded-full"
            style={{
                background:
                    'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
                backgroundSize: '200% 100%',
            }}
            initial={{ backgroundPosition: '-100% 0' }}
            animate={{ backgroundPosition: '200% 0' }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.8 }}
        />
    );
}

// ---------------------------------------------------------------------------
// SkillBar
// ---------------------------------------------------------------------------
export default function SkillBar({ name, proficiency, iconName }: SkillBarProps) {
    const colors = getColor(name, iconName);
    const hasDevicon = colors.icon !== '';
    const clampedPct = Math.min(100, Math.max(0, proficiency));

    // Track whether bar entered viewport
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
            { threshold: 0.3 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="space-y-2 group">
            {/* Label row */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Icon badge */}
                    <motion.span
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-semibold"
                        style={{ background: colors.badge, color: colors.text }}
                        initial={{ opacity: 0, x: -8 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        {hasDevicon && (
                            <i className={`${colors.icon} text-sm`} aria-hidden="true" />
                        )}
                        {name}
                    </motion.span>
                </div>

                {/* Animated percent counter */}
                {inView && <AnimatedPercent target={clampedPct} color={colors.text} />}
            </div>

            {/* Track */}
            <div className="relative h-2.5 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                {/* Fill */}
                <motion.div
                    className="absolute inset-y-0 left-0 rounded-full overflow-hidden"
                    style={{ background: colors.bar }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${clampedPct}%` } : {}}
                    transition={{ duration: 1.1, ease: [0.34, 1.56, 0.64, 1] }}
                >
                    {/* Shimmer sweep */}
                    <Shimmer />

                    {/* Pulsing glow on the leading edge */}
                    <motion.span
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                        style={{ background: colors.text, boxShadow: `0 0 8px 3px ${colors.glow}` }}
                        animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                    />
                </motion.div>
            </div>
        </div>
    );
}