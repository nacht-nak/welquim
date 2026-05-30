import { Head, Link } from '@inertiajs/react';
import { Briefcase, Code2, Inbox, MessageSquare, Plus, FileText, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AdminStats, ContactMessage, Project } from '@/types/portfolio';

interface DashboardProps {
    stats: AdminStats;
    recentMessages: ContactMessage[];
    recentProjects: Project[];
}

export default function Dashboard({ stats, recentMessages, recentProjects }: DashboardProps) {
    const statCards = [
        {
            title: 'Active Projects',
            value: `${stats.active_projects} / ${stats.total_projects}`,
            icon: Briefcase,
            description: 'Showcased on live site',
            color: 'text-blue-500 bg-blue-500/10',
        },
        {
            title: 'Skills & Techs',
            value: stats.total_skills,
            icon: Code2,
            description: 'Proficiency indicators',
            color: 'text-purple-500 bg-purple-500/10',
        },
        {
            title: 'Testimonials',
            value: stats.total_testimonials,
            icon: MessageSquare,
            description: 'Customer success reviews',
            color: 'text-pink-500 bg-pink-500/10',
        },
        {
            title: 'Unread Messages',
            value: stats.unread_messages,
            icon: Inbox,
            description: `Out of ${stats.total_messages} total messages`,
            color: stats.unread_messages > 0 ? 'text-amber-500 bg-amber-500/10 animate-pulse' : 'text-neutral-500 bg-neutral-500/10',
        },
    ];

    return (
        <>
            <Head title="Portfolio Admin Dashboard" />

            <div className="space-y-8 p-6 md:p-8 max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
                        <p className="text-muted-foreground text-sm mt-1">Manage your portfolio website contents and view performance.</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Link href="/admin/projects/create">
                            <Button size="sm" className="cursor-pointer">
                                <Plus className="mr-2 h-4 w-4" /> New Project
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {statCards.map((card) => (
                        <Card key={card.title} className="border-white/5 bg-neutral-900/40 backdrop-blur-md">
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium text-muted-foreground">{card.title}</CardTitle>
                                <div className={`p-2 rounded-lg ${card.color}`}>
                                    <card.icon className="h-4 w-4" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold font-mono">{card.value}</div>
                                <p className="text-xs text-muted-foreground mt-1">{card.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Main Dashboard Panel Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Recent Messages */}
                    <Card className="lg:col-span-7 border-white/5 bg-neutral-900/40">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-lg">Recent Messages</CardTitle>
                            <Link href="/admin/messages" className="text-xs text-primary hover:underline flex items-center gap-1">
                                View all <ArrowRight className="h-3 w-3" />
                            </Link>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {recentMessages.length > 0 ? (
                                <div className="divide-y divide-white/5">
                                    {recentMessages.map((msg) => (
                                        <div key={msg.id} className="py-3 first:pt-0 last:pb-0 flex flex-col gap-1">
                                            <div className="flex items-center justify-between">
                                                <span className={`text-sm font-semibold ${msg.is_read ? 'text-muted-foreground' : 'text-foreground'}`}>
                                                    {msg.name}
                                                </span>
                                                <span className="text-xs text-muted-foreground font-mono">
                                                    {new Date(msg.created_at).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <span className="text-xs font-medium text-primary">{msg.subject || 'No Subject'}</span>
                                            <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{msg.message}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-muted-foreground text-sm">No messages received yet.</div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Recent Projects */}
                    <Card className="lg:col-span-5 border-white/5 bg-neutral-900/40">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-lg">Recent Projects</CardTitle>
                            <Link href="/admin/projects" className="text-xs text-primary hover:underline flex items-center gap-1">
                                Manage <ArrowRight className="h-3 w-3" />
                            </Link>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {recentProjects.length > 0 ? (
                                <div className="space-y-3">
                                    {recentProjects.map((project) => (
                                        <div key={project.id} className="flex items-center justify-between border-b border-white/5 pb-2 last:border-none last:pb-0">
                                            <div className="flex items-center gap-3">
                                                {project.image ? (
                                                    <img
                                                        src={`/storage/${project.image}`}
                                                        alt={project.title}
                                                        className="w-10 h-10 object-cover rounded-lg border border-white/10"
                                                    />
                                                ) : (
                                                    <div className="w-10 h-10 bg-neutral-950 border border-white/5 rounded-lg flex items-center justify-center">
                                                        <FileText className="h-5 w-5 text-muted-foreground" />
                                                    </div>
                                                )}
                                                <div>
                                                    <h4 className="text-sm font-semibold text-foreground">{project.title}</h4>
                                                    <span className="text-xs text-muted-foreground capitalize">{project.category}</span>
                                                </div>
                                            </div>
                                            <span className={`text-xs px-2.5 py-0.5 rounded-full ${project.is_active ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                                                {project.is_active ? 'Active' : 'Draft'}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-muted-foreground text-sm">No projects created yet.</div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}
