import { useState, useEffect, useRef } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Trash2, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { Skill } from '@/types/portfolio';

interface IndexProps {
    skills: Skill[];
}

// ---------------------------------------------------------------------------
// Per-language color map
// ---------------------------------------------------------------------------
type ColorConfig = {
    bar: string;
    glow: string;
    badge: string;
    text: string;
    icon: string;         // devicon class
    thumb: string;        // solid bg for the thumbnail box
};

const SKILL_COLORS: Record<string, ColorConfig> = {
    javascript: { bar: 'linear-gradient(90deg,#f7df1e,#f0a500)', glow: 'rgba(247,223,30,0.5)', badge: 'rgba(247,223,30,0.12)', text: '#c9a000', thumb: '#2a2400', icon: 'devicon-javascript-plain' },
    typescript: { bar: 'linear-gradient(90deg,#3178c6,#235a97)', glow: 'rgba(49,120,198,0.5)', badge: 'rgba(49,120,198,0.12)', text: '#3178c6', thumb: '#0d1e33', icon: 'devicon-typescript-plain' },
    python: { bar: 'linear-gradient(90deg,#3572A5,#FFD43B)', glow: 'rgba(53,114,165,0.4)', badge: 'rgba(53,114,165,0.12)', text: '#3572A5', thumb: '#0f1e2e', icon: 'devicon-python-plain' },
    php: { bar: 'linear-gradient(90deg,#777bb4,#4f5b93)', glow: 'rgba(119,123,180,0.45)', badge: 'rgba(119,123,180,0.12)', text: '#9b9fce', thumb: '#1a1a2e', icon: 'devicon-php-plain' },
    rust: { bar: 'linear-gradient(90deg,#ce422b,#8b2a18)', glow: 'rgba(206,66,43,0.4)', badge: 'rgba(206,66,43,0.12)', text: '#ce422b', thumb: '#2a0e09', icon: 'devicon-rust-plain' },
    go: { bar: 'linear-gradient(90deg,#00ADD8,#007fa3)', glow: 'rgba(0,173,216,0.4)', badge: 'rgba(0,173,216,0.12)', text: '#00ADD8', thumb: '#002830', icon: 'devicon-go-plain' },
    react: { bar: 'linear-gradient(90deg,#61DAFB,#21a1c4)', glow: 'rgba(97,218,251,0.4)', badge: 'rgba(97,218,251,0.12)', text: '#21a1c4', thumb: '#001e2a', icon: 'devicon-react-original' },
    vue: { bar: 'linear-gradient(90deg,#42b883,#2d7a5f)', glow: 'rgba(66,184,131,0.4)', badge: 'rgba(66,184,131,0.12)', text: '#42b883', thumb: '#0b2218', icon: 'devicon-vuejs-plain' },
    nextjs: { bar: 'linear-gradient(90deg,#aaa,#555)', glow: 'rgba(150,150,150,0.3)', badge: 'rgba(150,150,150,0.1)', text: '#aaa', thumb: '#1a1a1a', icon: 'devicon-nextjs-plain' },
    svelte: { bar: 'linear-gradient(90deg,#FF3E00,#c73000)', glow: 'rgba(255,62,0,0.4)', badge: 'rgba(255,62,0,0.12)', text: '#FF3E00', thumb: '#2a0900', icon: 'devicon-svelte-plain' },
    html: { bar: 'linear-gradient(90deg,#e34f26,#b83415)', glow: 'rgba(227,79,38,0.4)', badge: 'rgba(227,79,38,0.12)', text: '#e34f26', thumb: '#2a0f06', icon: 'devicon-html5-plain' },
    css: { bar: 'linear-gradient(90deg,#264de4,#1a35b8)', glow: 'rgba(38,77,228,0.4)', badge: 'rgba(38,77,228,0.12)', text: '#5b7df0', thumb: '#080f33', icon: 'devicon-css3-plain' },
    tailwind: { bar: 'linear-gradient(90deg,#38bdf8,#0ea5e9)', glow: 'rgba(56,189,248,0.4)', badge: 'rgba(56,189,248,0.12)', text: '#38bdf8', thumb: '#00212e', icon: 'devicon-tailwindcss-plain' },
    nodejs: { bar: 'linear-gradient(90deg,#539E43,#3a7030)', glow: 'rgba(83,158,67,0.4)', badge: 'rgba(83,158,67,0.12)', text: '#539E43', thumb: '#0e2009', icon: 'devicon-nodejs-plain' },
    laravel: { bar: 'linear-gradient(90deg,#FF2D20,#b81e15)', glow: 'rgba(255,45,32,0.4)', badge: 'rgba(255,45,32,0.12)', text: '#FF2D20', thumb: '#2a0400', icon: 'devicon-laravel-plain' },
    mysql: { bar: 'linear-gradient(90deg,#4479A1,#2d5a80)', glow: 'rgba(68,121,161,0.4)', badge: 'rgba(68,121,161,0.12)', text: '#4479A1', thumb: '#0d1c28', icon: 'devicon-mysql-plain' },
    postgresql: { bar: 'linear-gradient(90deg,#336791,#1e4a6b)', glow: 'rgba(51,103,145,0.4)', badge: 'rgba(51,103,145,0.12)', text: '#4a8ab5', thumb: '#0a1820', icon: 'devicon-postgresql-plain' },
    mongodb: { bar: 'linear-gradient(90deg,#47A248,#2e6e2e)', glow: 'rgba(71,162,72,0.4)', badge: 'rgba(71,162,72,0.12)', text: '#47A248', thumb: '#0b2009', icon: 'devicon-mongodb-plain' },
    docker: { bar: 'linear-gradient(90deg,#2496ED,#1272b8)', glow: 'rgba(36,150,237,0.4)', badge: 'rgba(36,150,237,0.12)', text: '#2496ED', thumb: '#001e38', icon: 'devicon-docker-plain' },
    git: { bar: 'linear-gradient(90deg,#F05032,#b83520)', glow: 'rgba(240,80,50,0.4)', badge: 'rgba(240,80,50,0.12)', text: '#F05032', thumb: '#2a0c06', icon: 'devicon-git-plain' },
    linux: { bar: 'linear-gradient(90deg,#FCC624,#d4a010)', glow: 'rgba(252,198,36,0.4)', badge: 'rgba(252,198,36,0.12)', text: '#c9990a', thumb: '#231b00', icon: 'devicon-linux-plain' },
    default: { bar: 'linear-gradient(90deg,#a855f7,#6366f1)', glow: 'rgba(168,85,247,0.4)', badge: 'rgba(168,85,247,0.12)', text: '#a855f7', thumb: '#1a0a2e', icon: '' },
};

function getColor(name: string, iconName?: string | null): ColorConfig {
    const key = (iconName ?? name).toLowerCase().replace(/[^a-z]/g, '');
    return (
        SKILL_COLORS[key] ??
        Object.entries(SKILL_COLORS).find(([k]) => key.includes(k))?.[1] ??
        SKILL_COLORS.default
    );
}

// ---------------------------------------------------------------------------
// Thumbnail box — matches the project table style in the screenshot
// ---------------------------------------------------------------------------
function SkillThumb({ name, colors }: { name: string; colors: ColorConfig }) {
    const hasIcon = colors.icon !== '';
    return (
        <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border border-white/5"
            style={{ background: colors.thumb }}
        >
            {hasIcon ? (
                <i className={`${colors.icon} text-xl`} style={{ color: colors.text }} aria-hidden="true" />
            ) : (
                <Code2 className="h-5 w-5" style={{ color: colors.text }} />
            )}
        </div>
    );
}

// ---------------------------------------------------------------------------
// Animated proficiency bar
// ---------------------------------------------------------------------------
function MiniBar({ proficiency, colors }: { proficiency: number; colors: ColorConfig }) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
            { threshold: 0.4 },
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div className="flex items-center gap-3 min-w-[160px]">
            <div ref={ref} className="relative h-1.5 flex-1 bg-neutral-800 rounded-full overflow-hidden">
                <motion.div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{ background: colors.bar, boxShadow: `0 0 8px ${colors.glow}` }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${proficiency}%` } : {}}
                    transition={{ duration: 1.1, ease: [0.34, 1.56, 0.64, 1], delay: 0.1 }}
                />
            </div>
            <motion.span
                className="text-xs font-mono font-semibold tabular-nums w-8 text-right shrink-0"
                style={{ color: colors.text }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
            >
                {proficiency}%
            </motion.span>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Category badge — matches the screenshot pill style
// ---------------------------------------------------------------------------
const CATEGORY_STYLE: Record<string, { bg: string; text: string }> = {
    frontend: { bg: 'rgba(59,130,246,0.12)', text: '#60a5fa' },
    backend: { bg: 'rgba(34,197,94,0.12)', text: '#4ade80' },
    database: { bg: 'rgba(251,191,36,0.12)', text: '#fbbf24' },
    devops: { bg: 'rgba(168,85,247,0.12)', text: '#c084fc' },
    mobile: { bg: 'rgba(236,72,153,0.12)', text: '#f472b6' },
    tooling: { bg: 'rgba(148,163,184,0.1)', text: '#94a3b8' },
    tools: { bg: 'rgba(148,163,184,0.1)', text: '#94a3b8' },
    language: { bg: 'rgba(251,146,60,0.12)', text: '#fb923c' },
    design: { bg: 'rgba(244,114,182,0.12)', text: '#f472b6' },
};

function CategoryBadge({ category }: { category: string }) {
    const style = CATEGORY_STYLE[category.toLowerCase()] ?? { bg: 'rgba(148,163,184,0.1)', text: '#94a3b8' };
    return (
        <span
            className="text-xs font-medium px-2.5 py-1 rounded-md capitalize"
            style={{ background: style.bg, color: style.text }}
        >
            {category}
        </span>
    );
}

// ---------------------------------------------------------------------------
// Delete confirmation modal
// ---------------------------------------------------------------------------
interface ConfirmDialogProps {
    skillName: string;
    onConfirm: () => void;
    onCancel: () => void;
}

function ConfirmDialog({ skillName, onConfirm, onCancel }: ConfirmDialogProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCancel}
        >
            <motion.div
                className="bg-neutral-900 border border-white/10 rounded-2xl p-6 w-80 shadow-2xl"
                initial={{ scale: 0.88, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.88, y: 20, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                        <Trash2 className="h-5 w-5 text-red-400" />
                    </div>
                    <h2 className="text-base font-semibold">Delete skill?</h2>
                    <p className="text-sm text-muted-foreground">
                        <span className="text-foreground font-medium">"{skillName}"</span> will be permanently removed from your stack.
                    </p>
                </div>
                <div className="flex gap-2 mt-5">
                    <Button variant="ghost" className="flex-1 border border-white/10 cursor-pointer" onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button className="flex-1 bg-red-600 hover:bg-red-500 text-white cursor-pointer" onClick={onConfirm}>
                        Delete
                    </Button>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function SkillsIndex({ skills }: IndexProps) {
    const [deleteTarget, setDeleteTarget] = useState<Skill | null>(null);

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/admin/skills/${deleteTarget.id}`);
        setDeleteTarget(null);
    };

    return (
        <>
            <Head title="Manage Skills - Portfolio Admin" />

            <AnimatePresence>
                {deleteTarget && (
                    <ConfirmDialog
                        skillName={deleteTarget.name}
                        onConfirm={confirmDelete}
                        onCancel={() => setDeleteTarget(null)}
                    />
                )}
            </AnimatePresence>

            <div className="space-y-6">

                {/* Header */}
                <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Skills & Tech Stack</h1>
                        <p className="text-muted-foreground text-sm mt-1">
                            Manage your front-end, back-end, and tooling expertises.
                        </p>
                    </div>
                    <Link href="/admin/skills/create">
                        <Button className="cursor-pointer">
                            <Plus className="mr-2 h-4 w-4" /> Add Skill
                        </Button>
                    </Link>
                </motion.div>

                {/* Table card */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                >
                    <Card className="border-white/5 bg-neutral-900/40">
                        <CardContent className="p-0">
                            {skills.length > 0 ? (
                                <Table>
                                    <TableHeader>
                                        <TableRow className="border-white/5 hover:bg-transparent">
                                            <TableHead className="w-14 pl-5">Icon</TableHead>
                                            <TableHead>Skill Name</TableHead>
                                            <TableHead className="w-[130px]">Category</TableHead>
                                            <TableHead className="w-[220px]">Proficiency</TableHead>
                                            <TableHead className="text-right pr-5 w-[100px]">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <AnimatePresence initial={false}>
                                            {skills.map((skill, i) => {
                                                const colors = getColor(skill.name, skill.icon_name ?? null);
                                                return (
                                                    <motion.tr
                                                        key={skill.id}
                                                        className="border-b border-white/5 last:border-none hover:bg-white/[0.03] transition-colors"
                                                        initial={{ opacity: 0, x: -14 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: 14, transition: { duration: 0.18 } }}
                                                        transition={{ duration: 0.32, delay: i * 0.05 }}
                                                    >
                                                        {/* Thumbnail */}
                                                        <TableCell className="pl-5 py-3">
                                                            <SkillThumb name={skill.name} colors={colors} />
                                                        </TableCell>

                                                        {/* Skill name */}
                                                        <TableCell className="font-semibold text-foreground py-3">
                                                            {skill.name}
                                                        </TableCell>

                                                        {/* Category */}
                                                        <TableCell className="py-3">
                                                            <CategoryBadge category={skill.category} />
                                                        </TableCell>

                                                        {/* Proficiency bar */}
                                                        <TableCell className="py-3">
                                                            <MiniBar proficiency={skill.proficiency} colors={colors} />
                                                        </TableCell>

                                                        {/* Actions */}
                                                        <TableCell className="text-right pr-5 py-3">
                                                            <div className="flex items-center justify-end gap-0.5">
                                                                <Link href={`/admin/skills/${skill.id}/edit`}>
                                                                    <Button
                                                                        size="icon"
                                                                        variant="ghost"
                                                                        className="h-8 w-8 cursor-pointer group/edit rounded-lg"
                                                                    >
                                                                        <Edit2 className="h-4 w-4 text-neutral-500 group-hover/edit:text-white transition-colors" />
                                                                    </Button>
                                                                </Link>
                                                                <Button
                                                                    size="icon"
                                                                    variant="ghost"
                                                                    onClick={() => setDeleteTarget(skill)}
                                                                    className="h-8 w-8 cursor-pointer group/del rounded-lg hover:bg-red-500/10"
                                                                >
                                                                    <Trash2 className="h-4 w-4 text-red-500 group-hover/del:text-red-400 transition-colors" />
                                                                </Button>
                                                            </div>
                                                        </TableCell>
                                                    </motion.tr>
                                                );
                                            })}
                                        </AnimatePresence>
                                    </TableBody>
                                </Table>
                            ) : (
                                <motion.div
                                    className="flex flex-col items-center justify-center py-20 text-muted-foreground gap-3"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <Code2 className="h-10 w-10 opacity-20" />
                                    <p className="text-sm">No skills registered yet.</p>
                                    <Link href="/admin/skills/create">
                                        <Button variant="outline" size="sm" className="mt-1 cursor-pointer">
                                            <Plus className="mr-2 h-3.5 w-3.5" /> Add your first skill
                                        </Button>
                                    </Link>
                                </motion.div>
                            )}
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </>
    );
}