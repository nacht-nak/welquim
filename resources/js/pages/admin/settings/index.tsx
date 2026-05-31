import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { SiteSetting } from '@/types/portfolio';

interface SettingsProps {
    settings: {
        [groupName: string]: SiteSetting[];
    };
}

export default function SettingsIndex({ settings }: SettingsProps) {
    // Standardize all settings into an array for Inertia useForm
    const initialSettingsArray = Object.values(settings).flatMap((groupItems) =>
        groupItems.map((item) => ({
            key: item.key,
            value: item.value || '',
            type: item.type,
        }))
    );

    const { data, setData, put, processing, wasSuccessful } = useForm({
        settings: initialSettingsArray,
    });

    const handleValueChange = (key: string, newValue: string) => {
        setData(
            'settings',
            data.settings.map((item) =>
                item.key === key ? { ...item, value: newValue } : item
            )
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put('/admin/settings', {
            preserveScroll: true,
        });
    };

    // Helper to find setting value by key
    const getSetting = (key: string) => {
        return data.settings.find((item) => item.key === key);
    };

    return (
        <>
            <Head title="Site Settings - Portfolio Admin" />

            <div className="space-y-8 p-6 md:p-8 max-w-3xl mx-auto">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Website Settings</h1>
                    <p className="text-muted-foreground text-sm mt-1">Configure global portfolio titles, hero headings, and section visibilities.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* General Settings */}
                    <Card className="border-white/5 bg-neutral-900/40">
                        <CardHeader>
                            <CardTitle>General Settings</CardTitle>
                            <CardDescription>Global layout properties and branding.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="site_name">Site Name / Brand</Label>
                                <Input
                                    id="site_name"
                                    value={getSetting('site_name')?.value || ''}
                                    onChange={(e) => handleValueChange('site_name', e.target.value)}
                                    placeholder="Portfolio"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="site_description">Meta Description (SEO)</Label>
                                <Input
                                    id="site_description"
                                    value={getSetting('site_description')?.value || ''}
                                    onChange={(e) => handleValueChange('site_description', e.target.value)}
                                    placeholder="Full Stack Developer Portfolio..."
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="footer_text">Footer Copyright Text</Label>
                                <Input
                                    id="footer_text"
                                    value={getSetting('footer_text')?.value || ''}
                                    onChange={(e) => handleValueChange('footer_text', e.target.value)}
                                    placeholder="© 2026 Portfolio. All rights reserved."
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Hero Section Banner Settings */}
                    <Card className="border-white/5 bg-neutral-900/40">
                        <CardHeader>
                            <CardTitle>Hero Section Headers</CardTitle>
                            <CardDescription>Texts displayed inside the top hero banner.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="hero_title">Hero Main Title</Label>
                                <Input
                                    id="hero_title"
                                    value={getSetting('hero_title')?.value || ''}
                                    onChange={(e) => handleValueChange('hero_title', e.target.value)}
                                    placeholder="Hi, I'm a Creative Developer"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="hero_subtitle">Hero Subtitle</Label>
                                <Input
                                    id="hero_subtitle"
                                    value={getSetting('hero_subtitle')?.value || ''}
                                    onChange={(e) => handleValueChange('hero_subtitle', e.target.value)}
                                    placeholder="I build exceptional digital experiences"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="hero_cta_text">Call-To-Action Button Text</Label>
                                <Input
                                    id="hero_cta_text"
                                    value={getSetting('hero_cta_text')?.value || ''}
                                    onChange={(e) => handleValueChange('hero_cta_text', e.target.value)}
                                    placeholder="View My Work"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Sections Visibility Toggles */}
                    <Card className="border-white/5 bg-neutral-900/40">
                        <CardHeader>
                            <CardTitle>Sections Visibilities</CardTitle>
                            <CardDescription>Show or hide specific home page segments dynamically.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    id="show_services"
                                    checked={getSetting('show_services')?.value === '1'}
                                    onCheckedChange={(checked) => handleValueChange('show_services', checked ? '1' : '0')}
                                />
                                <Label htmlFor="show_services" className="cursor-pointer">Display Services segment on homepage</Label>
                            </div>

                            <div className="flex items-center gap-2">
                                <Checkbox
                                    id="show_testimonials"
                                    checked={getSetting('show_testimonials')?.value === '1'}
                                    onCheckedChange={(checked) => handleValueChange('show_testimonials', checked ? '1' : '0')}
                                />
                                <Label htmlFor="show_testimonials" className="cursor-pointer">Display Testimonials segment on homepage</Label>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex items-center justify-between gap-4 border-t border-white/5 pt-6">
                        {wasSuccessful && (
                            <span className="text-sm text-emerald-400">Settings updated successfully.</span>
                        )}
                        <Button type="submit" disabled={processing} className="ml-auto cursor-pointer">
                            {processing ? 'Saving...' : 'Save Settings'}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
