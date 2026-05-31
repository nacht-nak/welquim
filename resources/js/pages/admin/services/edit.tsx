import { Head, useForm, Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import type { Service } from '@/types/portfolio';

interface EditProps {
    service: Service;
}

export default function EditService({ service }: EditProps) {
    const { data, setData, put, transform, processing, errors } = useForm({
        title: service.title,
        description: service.description || '',
        icon: service.icon || 'Globe',
        features: service.features || [],
        features_input: service.features ? service.features.join(', ') : '',
        is_active: !!service.is_active,
        sort_order: service.sort_order,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const featuresArray = data.features_input
            ? data.features_input.split(',').map((f) => f.trim()).filter(Boolean)
            : [];

        transform((data) => ({
            ...data,
            features: featuresArray,
        }));

        put(`/admin/services/${service.id}`);
    };

    return (
        <>
            <Head title={`Edit Service: ${service.title} - Portfolio Admin`} />

            <div className="space-y-6 p-6 md:p-8 max-w-xl mx-auto">
                <Link href="/admin/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white">
                    <ArrowLeft className="h-4 w-4" /> Back to Services
                </Link>

                <Card className="border-white/5 bg-neutral-900/40">
                    <CardHeader>
                        <CardTitle>Edit Service: {service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Service Title</Label>
                                <Input
                                    id="title"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    placeholder="Web Development"
                                    required
                                />
                                {errors.title && <span className="text-xs text-red-400">{errors.title}</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="icon">Service Icon</Label>
                                <Select
                                    value={data.icon}
                                    onValueChange={(val) => setData('icon', val)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select icon" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Globe">Globe (Webs)</SelectItem>
                                        <SelectItem value="Smartphone">Smartphone (Mobiles)</SelectItem>
                                        <SelectItem value="Palette">Palette (Designs)</SelectItem>
                                        <SelectItem value="Cloud">Cloud (Cloud & DevOps)</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.icon && <span className="text-xs text-red-400">{errors.icon}</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Detailed Description</Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData('description', e.target.value)}
                                    placeholder="Brief outline detailing value offered..."
                                    rows={4}
                                />
                                {errors.description && <span className="text-xs text-red-400">{errors.description}</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="features_input">Included Features (Comma-separated)</Label>
                                <Input
                                    id="features_input"
                                    value={data.features_input}
                                    onChange={(e) => setData('features_input', e.target.value)}
                                    placeholder="API Integrations, Custom CRM, High Scalability..."
                                />
                                {errors.features && <span className="text-xs text-red-400">{errors.features}</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="sort_order">Sort Order</Label>
                                <Input
                                    id="sort_order"
                                    type="number"
                                    value={data.sort_order}
                                    onChange={(e) => setData('sort_order', parseInt(e.target.value) || 0)}
                                    min="0"
                                />
                                {errors.sort_order && <span className="text-xs text-red-400">{errors.sort_order}</span>}
                            </div>

                            <div className="flex items-center gap-2 pt-4">
                                <Checkbox
                                    id="is_active"
                                    checked={data.is_active}
                                    onCheckedChange={(checked) => setData('is_active', !!checked)}
                                />
                                <Label htmlFor="is_active" className="cursor-pointer">Active (Publish Live)</Label>
                            </div>

                            <Button type="submit" disabled={processing} className="w-full mt-6 cursor-pointer">
                                {processing ? 'Saving...' : 'Save Service'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
