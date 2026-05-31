import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import type { About } from '@/types/portfolio';

interface AboutProps {
    about: About | null;
}

export default function AboutIndex({ about }: AboutProps) {
    const { data, setData, post, processing, errors, wasSuccessful } = useForm({
        _method: 'PUT',
        title: about?.title || '',
        subtitle: about?.subtitle || '',
        description: about?.description || '',
        email: about?.email || '',
        phone: about?.phone || '',
        location: about?.location || '',
        github_url: about?.github_url || '',
        linkedin_url: about?.linkedin_url || '',
        twitter_url: about?.twitter_url || '',
        years_experience: about?.years_experience || 0,
        projects_completed: about?.projects_completed || 0,
        happy_clients: about?.happy_clients || 0,
        profile_image: null as File | null,
        resume_file: null as File | null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Standard Laravel Inertia request for file uploads over PUT/PATCH
        post('/admin/about', {
            forceFormData: true,
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title="Manage About Me - Portfolio Admin" />

            <div className="space-y-8 p-6 md:p-8 max-w-4xl mx-auto">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Manage About Section</h1>
                    <p className="text-muted-foreground text-sm mt-1">Configure your personal information, bio, statistics and resume PDF.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Info */}
                    <Card className="border-white/5 bg-neutral-900/40">
                        <CardHeader>
                            <CardTitle>Basic Information</CardTitle>
                            <CardDescription>Hero title, subtitles, and short description.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title / Role</Label>
                                <Input
                                    id="title"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    placeholder="Full Stack Developer"
                                    required
                                />
                                {errors.title && <span className="text-xs text-red-400">{errors.title}</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="subtitle">Subtitle / Catchphrase</Label>
                                <Input
                                    id="subtitle"
                                    value={data.subtitle}
                                    onChange={(e) => setData('subtitle', e.target.value)}
                                    placeholder="Building Premium Digital Products"
                                />
                                {errors.subtitle && <span className="text-xs text-red-400">{errors.subtitle}</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Detailed Biography</Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData('description', e.target.value)}
                                    placeholder="Tell the visitors about your background, journey, and technical passions..."
                                    rows={8}
                                />
                                {errors.description && <span className="text-xs text-red-400">{errors.description}</span>}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Stats & Contacts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Contacts Card */}
                        <Card className="border-white/5 bg-neutral-900/40">
                            <CardHeader>
                                <CardTitle>Contact details & Socials</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="hello@domain.com"
                                    />
                                    {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input
                                        id="phone"
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        placeholder="+1 (555) 123-4567"
                                    />
                                    {errors.phone && <span className="text-xs text-red-400">{errors.phone}</span>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="location">Location</Label>
                                    <Input
                                        id="location"
                                        value={data.location}
                                        onChange={(e) => setData('location', e.target.value)}
                                        placeholder="San Francisco, CA"
                                    />
                                    {errors.location && <span className="text-xs text-red-400">{errors.location}</span>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="github_url">GitHub Profile URL</Label>
                                    <Input
                                        id="github_url"
                                        value={data.github_url}
                                        onChange={(e) => setData('github_url', e.target.value)}
                                        placeholder="https://github.com/..."
                                    />
                                    {errors.github_url && <span className="text-xs text-red-400">{errors.github_url}</span>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="linkedin_url">LinkedIn Profile URL</Label>
                                    <Input
                                        id="linkedin_url"
                                        value={data.linkedin_url}
                                        onChange={(e) => setData('linkedin_url', e.target.value)}
                                        placeholder="https://linkedin.com/in/..."
                                    />
                                    {errors.linkedin_url && <span className="text-xs text-red-400">{errors.linkedin_url}</span>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="twitter_url">Twitter / X URL</Label>
                                    <Input
                                        id="twitter_url"
                                        value={data.twitter_url}
                                        onChange={(e) => setData('twitter_url', e.target.value)}
                                        placeholder="https://twitter.com/..."
                                    />
                                    {errors.twitter_url && <span className="text-xs text-red-400">{errors.twitter_url}</span>}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Stats & Media Card */}
                        <div className="space-y-6">
                            <Card className="border-white/5 bg-neutral-900/40">
                                <CardHeader>
                                    <CardTitle>Professional Statistics</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="years_experience">Years of Experience</Label>
                                        <Input
                                            id="years_experience"
                                            type="number"
                                            value={data.years_experience}
                                            onChange={(e) => setData('years_experience', parseInt(e.target.value) || 0)}
                                            min="0"
                                        />
                                        {errors.years_experience && <span className="text-xs text-red-400">{errors.years_experience}</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="projects_completed">Projects Completed</Label>
                                        <Input
                                            id="projects_completed"
                                            type="number"
                                            value={data.projects_completed}
                                            onChange={(e) => setData('projects_completed', parseInt(e.target.value) || 0)}
                                            min="0"
                                        />
                                        {errors.projects_completed && <span className="text-xs text-red-400">{errors.projects_completed}</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="happy_clients">Happy Clients</Label>
                                        <Input
                                            id="happy_clients"
                                            type="number"
                                            value={data.happy_clients}
                                            onChange={(e) => setData('happy_clients', parseInt(e.target.value) || 0)}
                                            min="0"
                                        />
                                        {errors.happy_clients && <span className="text-xs text-red-400">{errors.happy_clients}</span>}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-white/5 bg-neutral-900/40">
                                <CardHeader>
                                    <CardTitle>Media uploads</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="profile_image">Profile Picture (Image)</Label>
                                        <Input
                                            id="profile_image"
                                            type="file"
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('profile_image', e.target.files?.[0] || null)}
                                            accept="image/*"
                                            className="cursor-pointer"
                                        />
                                        {about?.profile_image && (
                                            <p className="text-xs text-muted-foreground mt-1">Current file exists: {about.profile_image}</p>
                                        )}
                                        {errors.profile_image && <span className="text-xs text-red-400">{errors.profile_image}</span>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="resume_file">Resume / CV (PDF Only)</Label>
                                        <Input
                                            id="resume_file"
                                            type="file"
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('resume_file', e.target.files?.[0] || null)}
                                            accept="application/pdf"
                                            className="cursor-pointer"
                                        />
                                        {about?.resume_file && (
                                            <p className="text-xs text-muted-foreground mt-1">Current file exists: {about.resume_file}</p>
                                        )}
                                        {errors.resume_file && <span className="text-xs text-red-400">{errors.resume_file}</span>}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 border-t border-white/5 pt-6">
                        {wasSuccessful && (
                            <span className="text-sm text-emerald-400">About section updated successfully.</span>
                        )}
                        <Button type="submit" disabled={processing} className="ml-auto cursor-pointer">
                            {processing ? 'Saving...' : 'Save Changes'}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
