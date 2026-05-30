import { Head, Link, router } from '@inertiajs/react';
import { Plus, Edit2, Trash2, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skill } from '@/types/portfolio';

interface IndexProps {
    skills: Skill[];
}

export default function SkillsIndex({ skills }: IndexProps) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this skill?')) {
            router.delete(`/admin/skills/${id}`);
        }
    };

    return (
        <>
            <Head title="Manage Skills - Portfolio Admin" />

            <div className="space-y-8 p-6 md:p-8 max-w-6xl mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Skills & Tech Stack</h1>
                        <p className="text-muted-foreground text-sm mt-1">Manage your front-end, back-end, and tooling expertises.</p>
                    </div>

                    <Link href="/admin/skills/create">
                        <Button className="cursor-pointer">
                            <Plus className="mr-2 h-4 w-4" /> Add Skill
                        </Button>
                    </Link>
                </div>

                <Card className="border-white/5 bg-neutral-900/40">
                    <CardContent className="p-0">
                        {skills.length > 0 ? (
                            <Table>
                                <TableHeader>
                                    <TableRow className="hover:bg-neutral-800/20">
                                        <TableHead>Skill Name</TableHead>
                                        <TableHead>Category</TableHead>
                                        <TableHead>Proficiency</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {skills.map((skill) => (
                                        <TableRow key={skill.id} className="hover:bg-neutral-800/10">
                                            <TableCell className="font-semibold text-foreground flex items-center gap-2">
                                                <Award className="h-4 w-4 text-primary shrink-0" />
                                                {skill.name}
                                            </TableCell>
                                            <TableCell className="capitalize text-muted-foreground">{skill.category}</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <div className="h-2 w-24 bg-neutral-800 rounded-full overflow-hidden">
                                                        <div 
                                                            className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" 
                                                            style={{ width: `${skill.proficiency}%` }} 
                                                        />
                                                    </div>
                                                    <span className="text-xs font-mono">{skill.proficiency}%</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Link href={`/admin/skills/${skill.id}/edit`}>
                                                        <Button size="icon" variant="ghost" className="h-8 w-8 cursor-pointer">
                                                            <Edit2 className="h-4 w-4 text-neutral-400 hover:text-white" />
                                                        </Button>
                                                    </Link>
                                                    <Button 
                                                        size="icon" 
                                                        variant="ghost" 
                                                        onClick={() => handleDelete(skill.id)} 
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
                            <div className="text-center py-12 text-muted-foreground">No skills registered yet. Create one!</div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
