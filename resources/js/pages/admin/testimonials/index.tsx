import { Head, Link, router } from '@inertiajs/react';
import { Plus, Edit2, Trash2, Star, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { Testimonial } from '@/types/portfolio';

interface IndexProps {
    testimonials: Testimonial[];
}

export default function TestimonialsIndex({ testimonials }: IndexProps) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this testimonial?')) {
            router.delete(`/admin/testimonials/${id}`);
        }
    };

    return (
        <>
            <Head title="Manage Testimonials - Portfolio Admin" />

            <div className="space-y-8 p-6 md:p-8 max-w-6xl mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Client Testimonials</h1>
                        <p className="text-muted-foreground text-sm mt-1">Manage testimonials, ratings, and avatars from your collaborators.</p>
                    </div>

                    <Link href="/admin/testimonials/create">
                        <Button className="cursor-pointer">
                            <Plus className="mr-2 h-4 w-4" /> Add Testimonial
                        </Button>
                    </Link>
                </div>

                <Card className="border-white/5 bg-neutral-900/40">
                    <CardContent className="p-0">
                        {testimonials.length > 0 ? (
                            <Table>
                                <TableHeader>
                                    <TableRow className="hover:bg-neutral-800/20">
                                        <TableHead className="w-16">Avatar</TableHead>
                                        <TableHead>Client Name</TableHead>
                                        <TableHead>Company & Role</TableHead>
                                        <TableHead>Rating</TableHead>
                                        <TableHead>Review</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {testimonials.map((testimonial) => (
                                        <TableRow key={testimonial.id} className="hover:bg-neutral-800/10">
                                            <TableCell>
                                                {testimonial.avatar ? (
                                                    <img
                                                        src={`/storage/${testimonial.avatar}`}
                                                        alt={testimonial.name}
                                                        className="w-10 h-10 object-cover rounded-full border border-white/10"
                                                    />
                                                ) : (
                                                    <div className="w-10 h-10 bg-neutral-950 border border-white/5 rounded-full flex items-center justify-center">
                                                        <User className="h-5 w-5 text-muted-foreground" />
                                                    </div>
                                                )}
                                            </TableCell>
                                            <TableCell className="font-semibold text-foreground">
                                                {testimonial.name}
                                            </TableCell>
                                            <TableCell className="text-muted-foreground text-sm">
                                                {testimonial.position} {testimonial.company ? `@ ${testimonial.company}` : ''}
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-0.5">
                                                    {Array.from({ length: 5 }).map((_, idx) => (
                                                        <Star
                                                            key={idx}
                                                            className={`h-3.5 w-3.5 ${
                                                                idx < testimonial.rating
                                                                    ? 'fill-amber-400 text-amber-400'
                                                                    : 'text-neutral-600'
                                                            }`}
                                                        />
                                                    ))}
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-muted-foreground text-xs max-w-xs truncate italic">
                                                "{testimonial.content}"
                                            </TableCell>
                                            <TableCell>
                                                <span className={`text-xs px-2.5 py-0.5 rounded-full ${testimonial.is_active ? 'bg-emerald-500/10 text-emerald-400' : 'bg-neutral-800 text-neutral-400'}`}>
                                                    {testimonial.is_active ? 'Active' : 'Draft'}
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Link href={`/admin/testimonials/${testimonial.id}/edit`}>
                                                        <Button size="icon" variant="ghost" className="h-8 w-8 cursor-pointer">
                                                            <Edit2 className="h-4 w-4 text-neutral-400 hover:text-white" />
                                                        </Button>
                                                    </Link>
                                                    <Button 
                                                        size="icon" 
                                                        variant="ghost" 
                                                        onClick={() => handleDelete(testimonial.id)} 
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
                            <div className="text-center py-12 text-muted-foreground">No testimonials registered yet. Create one!</div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
