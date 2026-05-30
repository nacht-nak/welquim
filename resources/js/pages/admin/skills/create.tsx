import { Head, useForm, Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function CreateSkill() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        category: 'frontend',
        proficiency: 80,
        icon: '',
        sort_order: 0,
        is_active: true,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/skills');
    };

    return (
        <>
            <Head title="Add Skill - Portfolio Admin" />

            <div className="space-y-6 p-6 md:p-8 max-w-xl mx-auto">
                <Link href="/admin/skills" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white">
                    <ArrowLeft className="h-4 w-4" /> Back to Skills
                </Link>

                <Card className="border-white/5 bg-neutral-900/40">
                    <CardHeader>
                        <CardTitle>Add New Skill</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Skill Name</Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="React, Laravel, Docker..."
                                    required
                                />
                                {errors.name && <span className="text-xs text-red-400">{errors.name}</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Select
                                    value={data.category}
                                    onValueChange={(val) => setData('category', val as any)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="frontend">Frontend</SelectItem>
                                        <SelectItem value="backend">Backend</SelectItem>
                                        <SelectItem value="tools">Tools</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.category && <span className="text-xs text-red-400">{errors.category}</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="proficiency">Proficiency Percentage (0-100)</Label>
                                <Input
                                    id="proficiency"
                                    type="number"
                                    value={data.proficiency}
                                    onChange={(e) => setData('proficiency', parseInt(e.target.value) || 0)}
                                    min="0"
                                    max="100"
                                    required
                                />
                                {errors.proficiency && <span className="text-xs text-red-400">{errors.proficiency}</span>}
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

                            <Button type="submit" disabled={processing} className="w-full mt-6 cursor-pointer">
                                {processing ? 'Creating...' : 'Create Skill'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
