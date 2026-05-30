import { Link } from '@inertiajs/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import GlassmorphismCard from './glassmorphism-card';
import { Project } from '@/types/portfolio';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const defaultImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100%25' height='100%25' fill='%23121212'/%3E%3Cpath d='M30,30 L70,70 M70,30 L30,70' stroke='%23333' stroke-width='2'/%3E%3C/svg%3E";

    return (
        <GlassmorphismCard useTilt glowColor="purple" className="flex flex-col h-full overflow-hidden p-0! border border-white/5 bg-neutral-900/40">
            {/* Project Image */}
            <div className="relative group overflow-hidden aspect-video w-full">
                <img
                    src={project.image ? `/storage/${project.image}` : defaultImage}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                />
                
                {/* Glowing Overlay */}
                <div className="absolute inset-0 bg-neutral-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.live_url && (
                        <a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-colors"
                            title="Live Demo"
                        >
                            <ExternalLink className="h-5 w-5" />
                        </a>
                    )}
                    {project.github_url && (
                        <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-colors"
                            title="GitHub Repo"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                    )}
                </div>
            </div>

            {/* Project Body */}
            <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase text-primary tracking-wider bg-primary/10 px-2.5 py-1 rounded-full">
                        {project.category}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                        {project.title}
                    </Link>
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.short_description}
                </p>

                {/* Technology Badges */}
                {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                            <span
                                key={tech}
                                className="text-[10px] font-mono text-muted-foreground bg-neutral-950 px-2 py-0.5 rounded border border-white/5"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 4 && (
                            <span className="text-[10px] font-mono text-muted-foreground bg-neutral-950 px-2 py-0.5 rounded border border-white/5">
                                +{project.technologies.length - 4}
                            </span>
                        )}
                    </div>
                )}

                {/* Link to detail page */}
                <div className="pt-4 mt-auto">
                    <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-foreground group"
                    >
                        Learn More 
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                </div>
            </div>
        </GlassmorphismCard>
    );
}
