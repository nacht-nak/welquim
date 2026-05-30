import { Head, Link, router } from '@inertiajs/react';
import { Plus, Edit2, Trash2, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Service } from '@/types/portfolio';

interface IndexProps {
    services: Service[];
}

export default function ServicesIndex({ services }: IndexProps) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this service?')) {
            router.delete(`/admin/services/${id}`);
        }
    };

    return (
        <>
            <Head title="Manage Services - Portfolio Admin" />

            <div className="space-y-8 p-6 md:p-8 max-w-6xl mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Services Offered</h1>
                        <p className="text-muted-foreground text-sm mt-1">Manage standard offerings, feature bullets, and category icons.</p>
                    </div>

                    <Link href="/admin/services/create">
                        <Button className="cursor-pointer">
                            <Plus className="mr-2 h-4 w-4" /> Add Service
                        </Button>
                    </Link>
                </div>

                <Card className="border-white/5 bg-neutral-900/40">
                    <CardContent className="p-0">
                        {services.length > 0 ? (
                            <Table>
                                <TableHeader>
                                    <TableRow className="hover:bg-neutral-800/20">
                                        <TableHead>Service Title</TableHead>
                                        <TableHead>Description</TableHead>
                                        <TableHead>Features Count</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {services.map((service) => (
                                        <TableRow key={service.id} className="hover:bg-neutral-800/10">
                                            <TableCell className="font-semibold text-foreground flex items-center gap-2">
                                                <Award className="h-4 w-4 text-primary shrink-0" />
                                                {service.title}
                                            </TableCell>
                                            <TableCell className="text-muted-foreground max-w-xs truncate">{service.description}</TableCell>
                                            <TableCell>{service.features?.length || 0} features</TableCell>
                                            <TableCell>
                                                <span className={`text-xs px-2.5 py-0.5 rounded-full ${service.is_active ? 'bg-emerald-500/10 text-emerald-400' : 'bg-neutral-800 text-neutral-400'}`}>
                                                    {service.is_active ? 'Active' : 'Draft'}
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Link href={`/admin/services/${service.id}/edit`}>
                                                        <Button size="icon" variant="ghost" className="h-8 w-8 cursor-pointer">
                                                            <Edit2 className="h-4 w-4 text-neutral-400 hover:text-white" />
                                                        </Button>
                                                    </Link>
                                                    <Button 
                                                        size="icon" 
                                                        variant="ghost" 
                                                        onClick={() => handleDelete(service.id)} 
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
                            <div className="text-center py-12 text-muted-foreground">No services registered yet. Create one!</div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
