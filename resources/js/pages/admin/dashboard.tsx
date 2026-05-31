import { useEffect, useRef, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import {
    Briefcase,
    Code2,
    Inbox,
    MessageSquare,
    Plus,
    FileText,
    ArrowRight,
    LayoutDashboard,
    Smartphone,
    Figma,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { AdminStats, ContactMessage, Project } from '@/types/portfolio';

interface DashboardProps {
    stats: AdminStats;
    recentMessages: ContactMessage[];
    recentProjects: Project[];
}

// ---------------------------------------------------------------------------
// Animated counter hook
// ---------------------------------------------------------------------------
function useCountUp(target: number, delay = 500, duration = 900) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let raf: number;
        const timeout = setTimeout(() => {
            const start = performance.now();
            const step = (now: number) => {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3);
                setValue(Math.round(ease * target));
                if (progress < 1) raf = requestAnimationFrame(step);
            };
            raf = requestAnimationFrame(step);
        }, delay);

        return () => {
            clearTimeout(timeout);
            cancelAnimationFrame(raf);
        };
    }, [target, delay, duration]);

    return value;
}

// ---------------------------------------------------------------------------
// Slide-in wrapper — animates children from a given direction
// ---------------------------------------------------------------------------
interface SlideInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: 'up' | 'left' | 'right' | 'down';
    className?: string;
}

function SlideIn({ children, delay = 0, direction = 'up', className = '' }: SlideInProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const translate =
            direction === 'up'
                ? 'translateY(16px)'
                : direction === 'down'
                    ? 'translateY(-12px)'
                    : direction === 'left'
                        ? 'translateX(10px)'
                        : 'translateX(-10px)';

        el.style.opacity = '0';
        el.style.transform = translate;
        el.style.transition = `opacity 0.45s ease ${delay}ms, transform 0.45s ease ${delay}ms`;

        const timeout = setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translate(0, 0)';
        }, 10);

        return () => clearTimeout(timeout);
    }, [delay, direction]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}

// ---------------------------------------------------------------------------
// Unread dot
// ---------------------------------------------------------------------------
function UnreadDot() {
    return (
        <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400 mr-1.5 align-middle"
            style={{ animation: 'blink 2s ease-in-out infinite' }}
        />
    );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export default function Dashboard({ stats, recentMessages, recentProjects }: DashboardProps) {
    // Counters — each tied to a specific stat
    const activeCount = useCountUp(stats.active_projects, 500);
    const totalCount = useCountUp(stats.total_projects, 500);
    const skillsCount = useCountUp(stats.total_skills, 600);
    const testimonialCount = useCountUp(stats.total_testimonials, 700);
    const unreadCount = useCountUp(stats.unread_messages, 800);

    const statCards = [
        {
            title: 'Active Projects',
            value: `${activeCount} / ${totalCount}`,
            icon: Briefcase,
            description: 'Showcased on live site',
            iconClass: 'text-blue-500 bg-blue-500/10',
        },
        {
            title: 'Skills & Techs',
            value: skillsCount,
            icon: Code2,
            description: 'Proficiency indicators',
            iconClass: 'text-purple-500 bg-purple-500/10',
        },
        {
            title: 'Testimonials',
            value: testimonialCount,
            icon: MessageSquare,
            description: 'Customer success reviews',
            iconClass: 'text-pink-500 bg-pink-500/10',
        },
        {
            title: 'Unread Messages',
            value: unreadCount,
            icon: Inbox,
            description: `Out of ${stats.total_messages} total messages`,
            iconClass:
                stats.unread_messages > 0
                    ? 'text-amber-500 bg-amber-500/10'
                    : 'text-neutral-500 bg-neutral-500/10',
            iconAnimate: stats.unread_messages > 0,
        },
    ];

    // Fallback icon map for projects without images
    const projectIcons: Record<string, React.ElementType> = {
        'web app': LayoutDashboard,
        mobile: Smartphone,
        design: Figma,
    };

    return (
        <>
            <Head title="Portfolio Admin Dashboard" />

            {/* Global keyframes injected once */}
            <style>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50%       { opacity: 0.25; }
                }
                @keyframes pulseIcon {
                    0%, 100% { opacity: 1; }
                    50%       { opacity: 0.4; }
                }
            `}</style>

            <div className="space-y-8 p-6 md:p-8 max-w-7xl mx-auto">

                {/* Header */}
                <SlideIn direction="down" delay={0}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Welcome sir</h1>
                            <p className="text-muted-foreground text-sm mt-1">
                                Manage your portfolio website contents and view performance.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="/admin/projects/create">
                                <Button size="sm" className="cursor-pointer">
                                    <Plus className="mr-2 h-4 w-4" /> New Project
                                </Button>
                            </Link>
                        </div>
                    </div>
                </SlideIn>

                {/* Stats grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {statCards.map((card, i) => (
                        <SlideIn key={card.title} delay={100 + i * 100} direction="up">
                            <Card className="border-white/5 bg-neutral-900/40 backdrop-blur-md h-full">
                                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                    <CardTitle className="text-sm font-medium text-muted-foreground">
                                        {card.title}
                                    </CardTitle>
                                    <div
                                        className={`p-2 rounded-lg ${card.iconClass}`}
                                        style={
                                            card.iconAnimate
                                                ? { animation: 'pulseIcon 1.4s ease-in-out infinite' }
                                                : undefined
                                        }
                                    >
                                        <card.icon className="h-4 w-4" />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold font-mono">{card.value}</div>
                                    <p className="text-xs text-muted-foreground mt-1">{card.description}</p>
                                </CardContent>
                            </Card>
                        </SlideIn>
                    ))}
                </div>

                {/* Main panels */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Recent Messages */}
                    <SlideIn delay={550} direction="left" className="lg:col-span-7">
                        <Card className="border-white/5 bg-neutral-900/40 h-full">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="text-lg">Recent Messages</CardTitle>
                                <Link
                                    href="/admin/messages"
                                    className="text-xs text-primary hover:underline flex items-center gap-1"
                                >
                                    View all <ArrowRight className="h-3 w-3" />
                                </Link>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {recentMessages.length > 0 ? (
                                    <div className="divide-y divide-white/5">
                                        {recentMessages.map((msg, i) => (
                                            <SlideIn
                                                key={msg.id}
                                                delay={750 + i * 100}
                                                direction="right"
                                            >
                                                <div className="py-3 first:pt-0 last:pb-0 flex flex-col gap-1">
                                                    <div className="flex items-center justify-between">
                                                        <span
                                                            className={`text-sm font-semibold ${msg.is_read
                                                                    ? 'text-muted-foreground'
                                                                    : 'text-foreground'
                                                                }`}
                                                        >
                                                            {!msg.is_read && <UnreadDot />}
                                                            {msg.name}
                                                        </span>
                                                        <span className="text-xs text-muted-foreground font-mono">
                                                            {new Date(msg.created_at).toLocaleDateString()}
                                                        </span>
                                                    </div>
                                                    <span className="text-xs font-medium text-primary">
                                                        {msg.subject || 'No Subject'}
                                                    </span>
                                                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                                                        {msg.message}
                                                    </p>
                                                </div>
                                            </SlideIn>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8 text-muted-foreground text-sm">
                                        No messages received yet.
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </SlideIn>

                    {/* Recent Projects */}
                    <SlideIn delay={650} direction="right" className="lg:col-span-5">
                        <Card className="border-white/5 bg-neutral-900/40 h-full">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="text-lg">Recent Projects</CardTitle>
                                <Link
                                    href="/admin/projects"
                                    className="text-xs text-primary hover:underline flex items-center gap-1"
                                >
                                    Manage <ArrowRight className="h-3 w-3" />
                                </Link>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {recentProjects.length > 0 ? (
                                    <div className="space-y-3">
                                        {recentProjects.map((project, i) => {
                                            const FallbackIcon =
                                                projectIcons[project.category] ?? FileText;
                                            return (
                                                <SlideIn
                                                    key={project.id}
                                                    delay={750 + i * 120}
                                                    direction="left"
                                                >
                                                    <div className="flex items-center justify-between border-b border-white/5 pb-2 last:border-none last:pb-0">
                                                        <div className="flex items-center gap-3">
                                                            {project.image ? (
                                                                <img
                                                                    src={`/storage/${project.image}`}
                                                                    alt={project.title}
                                                                    className="w-10 h-10 object-cover rounded-lg border border-white/10"
                                                                />
                                                            ) : (
                                                                <div className="w-10 h-10 bg-neutral-950 border border-white/5 rounded-lg flex items-center justify-center">
                                                                    <FallbackIcon className="h-5 w-5 text-muted-foreground" />
                                                                </div>
                                                            )}
                                                            <div>
                                                                <h4 className="text-sm font-semibold text-foreground">
                                                                    {project.title}
                                                                </h4>
                                                                <span className="text-xs text-muted-foreground capitalize">
                                                                    {project.category}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <span
                                                            className={`text-xs px-2.5 py-0.5 rounded-full ${project.is_active
                                                                    ? 'bg-emerald-500/10 text-emerald-400'
                                                                    : 'bg-red-500/10 text-red-400'
                                                                }`}
                                                        >
                                                            {project.is_active ? 'Active' : 'Draft'}
                                                        </span>
                                                    </div>
                                                </SlideIn>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <div className="text-center py-8 text-muted-foreground text-sm">
                                        No projects created yet.
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </SlideIn>
                </div>
            </div>
        </>
    );
}