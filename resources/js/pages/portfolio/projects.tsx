import { useState, useEffect } from 'react';
import { Head, router } from '@inertiajs/react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PortfolioLayout from '@/layouts/portfolio-layout';
import SectionHeading from '@/components/portfolio/section-heading';
import ScrollReveal from '@/components/portfolio/scroll-reveal';
import ProjectCard from '@/components/portfolio/project-card';
import { Project } from '@/types/portfolio';

interface ProjectsProps {
    projects: Project[];
    categories: string[];
    filters: {
        category?: string;
        search?: string;
    };
}

export default function Projects({ projects, categories, filters }: ProjectsProps) {
    const [search, setSearch] = useState(filters.search || '');
    const [selectedCategory, setSelectedCategory] = useState(filters.category || 'all');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            handleSearchAndFilter();
        }, 400);

        return () => clearTimeout(delayDebounceFn);
    }, [search, selectedCategory]);

    const handleSearchAndFilter = () => {
        router.get(
            '/projects',
            {
                search: search || undefined,
                category: selectedCategory === 'all' ? undefined : selectedCategory,
            },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            }
        );
    };

    return (
        <PortfolioLayout>
            <Head title="Projects Showcase - Portfolio" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <SectionHeading
                    title="Projects Portfolio"
                    subtitle="Showcase of my builds"
                    alignment="center"
                />

                {/* Filters and Search toolbar */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
                    {/* Categories Tabs */}
                    <ScrollReveal direction="left" className="flex flex-wrap items-center gap-2">
                        <Button
                            variant={selectedCategory === 'all' ? 'default' : 'outline'}
                            onClick={() => setSelectedCategory('all')}
                            className="rounded-full cursor-pointer"
                            size="sm"
                        >
                            All Projects
                        </Button>
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                variant={selectedCategory === cat ? 'default' : 'outline'}
                                onClick={() => setSelectedCategory(cat)}
                                className="rounded-full capitalize cursor-pointer"
                                size="sm"
                            >
                                {cat}
                            </Button>
                        ))}
                    </ScrollReveal>

                    {/* Search Field */}
                    <ScrollReveal direction="right" className="w-full md:max-w-xs relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search projects..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-10 rounded-full border-white/10 bg-neutral-900/40 text-foreground"
                        />
                    </ScrollReveal>
                </div>

                {/* Projects Grid */}
                {projects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ScrollReveal key={project.id} direction="up" delay={index * 0.05}>
                                <ProjectCard project={project} />
                            </ScrollReveal>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground text-lg">No projects match your search criteria.</p>
                    </div>
                )}
            </div>
        </PortfolioLayout>
    );
}
