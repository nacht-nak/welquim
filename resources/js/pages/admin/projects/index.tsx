import { Head, Link, router } from '@inertiajs/react';
import { Plus, Edit2, Trash2, Globe, Github, Star, Image as ImageIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Project } from '@/types/portfolio';

interface IndexProps {
    projects: Project[];
}

export default function ProjectsIndex({ projects }: IndexProps) {
    const handleDelete = (slug: string) => {
        if (confirm('Are you sure you want to delete this project?')) {
            router.delete(`/admin/projects/${slug}`);
        }
    };

    return (
        <>
            <Head title="Manage Projects - Portfolio Admin" />

            <div className="space-y-8 p-6 md:p-8 max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Portfolio Projects</h1>
                        <p className="text-muted-foreground text-sm mt-1">Manage project records, thumbnails, categorization and tags.</p>
                    </div>

                    <Link href="/admin/projects/create">
                        <Button className="cursor-pointer">
                            <Plus className="mr-2 h-4 w-4" /> Add Project
                        </Button>
                    </Link>
                </div>

                <Card className="border-white/5 bg-neutral-900/40">
                    <CardContent className="p-0">
                        {projects.length > 0 ? (
                            <Table>
                                <TableHeader>
                                    <TableRow className="hover:bg-neutral-800/20">
                                        <TableHead className="w-16">Thumbnail</TableHead>
                                        <TableHead>Project Title</TableHead>
                                        <TableHead>Category</TableHead>
                                        <TableHead>Technologies</TableHead>
                                        <TableHead>Featured</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {projects.map((project) => (
                                        <TableRow key={project.id} className="hover:bg-neutral-800/10">
                                            <TableCell>
                                                {project.image ? (
                                                    <img
                                                        src={`/storage/${project.image}`}
                                                        alt={project.title}
                                                        className="w-10 h-10 object-cover rounded-lg border border-white/10"
                                                    />
                                                ) : (
                                                    <div className="w-10 h-10 bg-neutral-950 border border-white/5 rounded-lg flex items-center justify-center">
                                                        <ImageIcon className="h-5 w-5 text-muted-foreground" />
                                                    </div>
                                                )}
                                            </TableCell>
                                            <TableCell className="font-semibold text-foreground">
                                                {project.title}
                                            </TableCell>
                                            <TableCell className="capitalize text-muted-foreground">{project.category}</TableCell>
                                            <TableCell>
                                                <div className="flex flex-wrap gap-1">
                                                    {project.technologies?.slice(0, 3).map((tech) => (
                                                        <span key={tech} className="text-[10px] font-mono text-muted-foreground bg-neutral-950 px-1.5 py-0.5 rounded border border-white/5">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {(project.technologies?.length || 0) > 3 && (
                                                        <span className="text-[10px] font-mono text-muted-foreground bg-neutral-950 px-1.5 py-0.5 rounded border border-white/5">
                                                            +{(project.technologies?.length || 0) - 3}
                                                        </span>
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                {project.is_featured ? (
                                                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                                                ) : (
                                                    <span className="text-xs text-muted-foreground">No</span>
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                <span className={`text-xs px-2.5 py-0.5 rounded-full ${project.is_active ? 'bg-emerald-500/10 text-emerald-400' : 'bg-neutral-800 text-neutral-400'}`}>
                                                    {project.is_active ? 'Active' : 'Draft'}
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    {project.live_url && (
                                                        <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                                                            <Button size="icon" variant="ghost" className="h-8 w-8 cursor-pointer">
                                                                <Globe className="h-4 w-4 text-muted-foreground hover:text-white" />
                                                            </Button>
                                                        </a>
                                                    )}
                                                    {project.github_url && (
                                                        <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                                                            <Button size="icon" variant="ghost" className="h-8 w-8 cursor-pointer">
                                                                <Github className="h-4 w-4 text-muted-foreground hover:text-white" />
                                                            </Button>
                                                        </a>
                                                    )}
                                                    <Link href={`/admin/projects/${project.slug}/edit`}>
                                                        <Button size="icon" variant="ghost" className="h-8 w-8 cursor-pointer">
                                                            <Edit2 className="h-4 w-4 text-neutral-400 hover:text-white" />
                                                        </Button>
                                                    </Link>
                                                    <Button 
                                                        size="icon" 
                                                        variant="ghost" 
                                                        onClick={() => handleDelete(project.slug)} 
                                                        className="h-8 w-8 cursor-pointer"
                                                    >
                                                        <Trash2 className="h-4 w-4 text-red-500 hover:text-red-400" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        ) : (
                            <div className="text-center py-12 text-muted-foreground">No projects registered yet. Create one!</div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
