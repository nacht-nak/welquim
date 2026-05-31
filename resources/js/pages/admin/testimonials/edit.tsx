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
import type { Testimonial } from '@/types/portfolio';

interface EditProps {
    testimonial: Testimonial;
}

export default function EditTestimonial({ testimonial }: EditProps) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT',
        name: testimonial.name,
        position: testimonial.position || '',
        company: testimonial.company || '',
        content: testimonial.content,
        rating: testimonial.rating,
        is_active: !!testimonial.is_active,
        sort_order: testimonial.sort_order,
        avatar: null as File | null,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(`/admin/testimonials/${testimonial.id}`, {
            forceFormData: true,
        });
    };

    return (
        <>
            <Head title={`Edit Testimonial: ${testimonial.name} - Portfolio Admin`} />

            <div className="space-y-6 p-6 md:p-8 max-w-xl mx-auto">
                <Link href="/admin/testimonials" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white">
                    <ArrowLeft className="h-4 w-4" /> Back to Testimonials
                </Link>

                <Card className="border-white/5 bg-neutral-900/40">
                    <CardHeader>
                        <CardTitle>Edit Testimonial: {testimonial.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Client Name</Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="Sarah Johnson"
                                    required
                                />
                                {errors.name && <span className="text-xs text-red-400">{errors.name}</span>}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="position">Job Position</Label>
                                    <Input
                                        id="position"
                                        value={data.position}
                                        onChange={(e) => setData('position', e.target.value)}
                                        placeholder="CEO / Founder"
                                    />
                                    {errors.position && <span className="text-xs text-red-400">{errors.position}</span>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="company">Company</Label>
                                    <Input
                                        id="company"
                                        value={data.company}
                                        onChange={(e) => setData('company', e.target.value)}
                                        placeholder="TechStart Inc."
                                    />
                                    {errors.company && <span className="text-xs text-red-400">{errors.company}</span>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="rating">Rating (1 to 5 Stars)</Label>
                                <Select
                                    value={data.rating.toString()}
                                    onValueChange={(val) => setData('rating', parseInt(val) || 5)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select rating" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="5">5 Stars</SelectItem>
                                        <SelectItem value="4">4 Stars</SelectItem>
                                        <SelectItem value="3">3 Stars</SelectItem>
                                        <SelectItem value="2">2 Stars</SelectItem>
                                        <SelectItem value="1">1 Star</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.rating && <span className="text-xs text-red-400">{errors.rating}</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="content">Review Content</Label>
                                <Textarea
                                    id="content"
                                    value={data.content}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData('content', e.target.value)}
                                    placeholder="Tell the visitors what the client said about your work..."
                                    rows={5}
                                    required
                                />
                                {errors.content && <span className="text-xs text-red-400">{errors.content}</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="avatar">Client Avatar Picture</Label>
                                <Input
                                    id="avatar"
                                    type="file"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('avatar', e.target.files?.[0] || null)}
                                    accept="image/*"
                                    className="cursor-pointer"
                                />
                                {testimonial.avatar && (
                                    <p className="text-xs text-muted-foreground mt-1">Current file: {testimonial.avatar}</p>
                                )}
                                {errors.avatar && <span className="text-xs text-red-400">{errors.avatar}</span>}
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
                                {processing ? 'Saving...' : 'Save Testimonial'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
