import * as React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

export default function CreateProject() {
    const { data, setData, post, transform, processing, errors } = useForm({
        title: '',
        slug: '',
        short_description: '',
        description: '',
        category: 'web',
        technologies: [] as string[],
        tech_input: '', // Helper state for raw string input
        live_url: '',
        github_url: '',
        is_featured: false,
        is_active: true,
        sort_order: 0,
        image: null as File | null,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Convert the tech raw input into technologies array
        const techs = data.tech_input
            ? data.tech_input.split(',').map((t) => t.trim()).filter(Boolean)
            : [];

        transform((data) => ({
            ...data,
            technologies: techs,
        }));

        // In Inertia, we can trigger the post directly
        post('/admin/projects', {
            forceFormData: true,
        });
    };

    return (
        <>
            <Head title="Create Project - Portfolio Admin" />

            <div className="space-y-6 p-6 md:p-8 max-w-2xl mx-auto">
                <Link href="/admin/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white">
                    <ArrowLeft className="h-4 w-4" /> Back to Projects
                </Link>

                <Card className="border-white/5 bg-neutral-900/40">
                    <CardHeader>
                        <CardTitle>Create New Project</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Project Title</Label>
                                <Input
                                    id="title"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    placeholder="E-Commerce Platform"
                                    required
                                />
                                {errors.title && <span className="text-xs text-red-400">{errors.title}</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="slug">Slug (Optional - auto-generated if blank)</Label>
                                <Input
                                    id="slug"
                                    value={data.slug}
                                    onChange={(e) => setData('slug', e.target.value)}
                                    placeholder="e-commerce-platform"
                                />
                                {errors.slug && <span className="text-xs text-red-400">{errors.slug}</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Input
                                    id="category"
                                    value={data.category}
                                    onChange={(e) => setData('category', e.target.value)}
                                    placeholder="web, mobile, desktop, plugin..."
                                    required
                                />
                                {errors.category && <span className="text-xs text-red-400">{errors.category}</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="tech_input">Technologies (Comma-separated)</Label>
                                <Input
                                    id="tech_input"
                                    value={data.tech_input}
                                    onChange={(e) => setData('tech_input', e.target.value)}
                                    placeholder="React, Laravel, Tailwind, MySQL..."
                                />
                                {errors.technologies && <span className="text-xs text-red-400">{errors.technologies}</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="short_description">Short Description (Excerpt)</Label>
                                <Input
                                    id="short_description"
                                    value={data.short_description}
                                    onChange={(e) => setData('short_description', e.target.value)}
                                    placeholder="Brief description that displays on the card..."
                                />
                                {errors.short_description && <span className="text-xs text-red-400">{errors.short_description}</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Detailed Description (Overview)</Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData('description', e.target.value)}
                                    placeholder="Detailed overview about architecture, challenges solved, etc..."
                                    rows={5}
                                />
                                {errors.description && <span className="text-xs text-red-400">{errors.description}</span>}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="live_url">Live Demo URL</Label>
                                    <Input
                                        id="live_url"
                                        type="url"
                                        value={data.live_url}
                                        onChange={(e) => setData('live_url', e.target.value)}
                                        placeholder="https://example.com"
                                    />
                                    {errors.live_url && <span className="text-xs text-red-400">{errors.live_url}</span>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="github_url">GitHub Repository URL</Label>
                                    <Input
                                        id="github_url"
                                        type="url"
                                        value={data.github_url}
                                        onChange={(e) => setData('github_url', e.target.value)}
                                        placeholder="https://github.com/..."
                                    />
                                    {errors.github_url && <span className="text-xs text-red-400">{errors.github_url}</span>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="image">Cover Image Thumbnail</Label>
                                <Input
                                    id="image"
                                    type="file"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('image', e.target.files?.[0] || null)}
                                    accept="image/*"
                                    className="cursor-pointer"
                                />
                                {errors.image && <span className="text-xs text-red-400">{errors.image}</span>}
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

                            <div className="flex items-center gap-6 pt-4">
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="is_featured"
                                        checked={data.is_featured}
                                        onCheckedChange={(checked) => setData('is_featured', !!checked)}
                                    />
                                    <Label htmlFor="is_featured" className="cursor-pointer">Featured Project</Label>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="is_active"
                                        checked={data.is_active}
                                        onCheckedChange={(checked) => setData('is_active', !!checked)}
                                    />
                                    <Label htmlFor="is_active" className="cursor-pointer">Active (Publish Live)</Label>
                                </div>
                            </div>

                            <Button type="submit" disabled={processing} className="w-full mt-6 cursor-pointer">
                                {processing ? 'Creating...' : 'Create Project'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
