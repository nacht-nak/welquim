import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, ExternalLink, Github, Globe } from 'lucide-react';
import GlassmorphismCard from '@/components/portfolio/glassmorphism-card';
import ProjectCard from '@/components/portfolio/project-card';
import ScrollReveal from '@/components/portfolio/scroll-reveal';
import SectionHeading from '@/components/portfolio/section-heading';
import { Button } from '@/components/ui/button';
import PortfolioLayout from '@/layouts/portfolio-layout';
import type { Project } from '@/types/portfolio';

interface ProjectDetailProps {
    project: Project;
    relatedProjects: Project[];
}

export default function ProjectDetail({ project, relatedProjects }: ProjectDetailProps) {
    const defaultImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100%25' height='100%25' fill='%23121212'/%3E%3Cpath d='M30,30 L70,70 M70,30 L30,70' stroke='%23333' stroke-width='2'/%3E%3C/svg%3E";

    return (
        <PortfolioLayout>
            <Head title={`${project.title} - Project Details`} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Back button */}
                <ScrollReveal direction="left" className="mb-8">
                    <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Projects
                    </Link>
                </ScrollReveal>

                {/* Hero Banner */}
                <ScrollReveal direction="up" className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl mb-12">
                    <img
                        src={project.image ? `/storage/${project.image}` : defaultImage}
                        alt={project.title}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent flex items-end p-6 md:p-12">
                        <div className="space-y-4">
                            <span className="text-xs font-mono uppercase text-primary tracking-wider bg-primary/10 px-3 py-1.5 rounded-full">
                                {project.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground">{project.title}</h1>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Grid Split Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    {/* Left details */}
                    <div className="lg:col-span-8 space-y-8">
                        <ScrollReveal direction="up" className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Project Overview</h2>
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-lg">
                                {project.description || project.short_description}
                            </p>
                        </ScrollReveal>

                        {/* Image Gallery */}
                        {project.gallery && project.gallery.length > 0 && (
                            <ScrollReveal direction="up" className="space-y-4 pt-6">
                                <h3 className="text-xl font-bold text-foreground">Gallery</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {project.gallery.map((img, idx) => (
                                        <div key={idx} className="rounded-xl overflow-hidden border border-white/5 aspect-video bg-neutral-900">
                                            <img
                                                src={`/storage/${img}`}
                                                alt={`Gallery ${idx}`}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        )}
                    </div>

                    {/* Right Info pane */}
                    <div className="lg:col-span-4 space-y-6">
                        <ScrollReveal direction="right">
                            <GlassmorphismCard glowColor="purple" className="bg-neutral-900/40 space-y-6">
                                <h3 className="text-lg font-bold text-foreground border-b border-white/5 pb-3">Project Details</h3>

                                <div className="space-y-4">
                                    {/* Action Links */}
                                    <div className="flex flex-col gap-3">
                                        {project.live_url && (
                                            <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                                                <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg cursor-pointer">
                                                    <Globe className="mr-2 h-4 w-4" /> Live Preview <ExternalLink className="ml-1 h-3.5 w-3.5" />
                                                </Button>
                                            </a>
                                        )}
                                        {project.github_url && (
                                            <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                                                <Button variant="outline" className="w-full hover:bg-neutral-800 cursor-pointer">
                                                    <Github className="mr-2 h-4 w-4" /> GitHub Repository <ExternalLink className="ml-1 h-3.5 w-3.5" />
                                                </Button>
                                            </a>
                                        )}
                                    </div>

                                    {/* Tech details */}
                                    {project.technologies && project.technologies.length > 0 && (
                                        <div className="space-y-2 pt-4 border-t border-white/5">
                                            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider font-mono">Technologies Used</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="text-xs font-mono text-foreground bg-neutral-950 px-3 py-1 rounded-full border border-white/5"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </GlassmorphismCard>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Related Projects */}
                {relatedProjects.length > 0 && (
                    <div className="space-y-8 pt-12 border-t border-white/5">
                        <SectionHeading title="Related Projects" alignment="left" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedProjects.map((proj) => (
                                <ScrollReveal key={proj.id} direction="up">
                                    <ProjectCard project={proj} />
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </PortfolioLayout>
    );
}
