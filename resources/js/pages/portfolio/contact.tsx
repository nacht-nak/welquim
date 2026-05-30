import * as React from 'react';
import { Head, useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, CheckCircle2, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import PortfolioLayout from '@/layouts/portfolio-layout';
import SectionHeading from '@/components/portfolio/section-heading';
import ScrollReveal from '@/components/portfolio/scroll-reveal';
import GlassmorphismCard from '@/components/portfolio/glassmorphism-card';

interface ContactProps {
    contactInfo: {
        email?: string | null;
        phone?: string | null;
        location?: string | null;
        github_url?: string | null;
        linkedin_url?: string | null;
        twitter_url?: string | null;
    };
}

export default function Contact({ contactInfo }: ContactProps) {
    const { t } = useTranslation();
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/contact', {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <PortfolioLayout>
            <Head title="Contact Me - Portfolio" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <SectionHeading
                    title={t('contact.title')}
                    subtitle={t('contact.subtitle')}
                    alignment="center"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
                    {/* Left pane - Cards */}
                    <div className="lg:col-span-5 space-y-6">
                        <ScrollReveal direction="left" className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">{t('contact.heading')}</h2>
                            <p className="text-muted-foreground text-sm">
                                {t('contact.description')}
                            </p>
                        </ScrollReveal>

                        <div className="space-y-4 pt-4">
                            <ScrollReveal direction="left" delay={0.1}>
                                <GlassmorphismCard className="flex items-center gap-4 bg-neutral-900/30 p-4!">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs text-muted-foreground uppercase font-mono">{t('about.emailLabel')}</h4>
                                        <p className="text-sm font-semibold text-foreground">{contactInfo.email || 'hello@portfolio.dev'}</p>
                                    </div>
                                </GlassmorphismCard>
                            </ScrollReveal>

                            <ScrollReveal direction="left" delay={0.2}>
                                <GlassmorphismCard className="flex items-center gap-4 bg-neutral-900/30 p-4!">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs text-muted-foreground uppercase font-mono">{t('about.phoneLabel')}</h4>
                                        <p className="text-sm font-semibold text-foreground">{contactInfo.phone || '+1 (555) 123-4567'}</p>
                                    </div>
                                </GlassmorphismCard>
                            </ScrollReveal>

                            <ScrollReveal direction="left" delay={0.3}>
                                <GlassmorphismCard className="flex items-center gap-4 bg-neutral-900/30 p-4!">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs text-muted-foreground uppercase font-mono">{t('about.locationLabel')}</h4>
                                        <p className="text-sm font-semibold text-foreground">{contactInfo.location || 'San Francisco, CA'}</p>
                                    </div>
                                </GlassmorphismCard>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Right Pane - Form */}
                    <div className="lg:col-span-7">
                        <ScrollReveal direction="right">
                            <GlassmorphismCard glowColor="purple" className="bg-neutral-900/40">
                                <form onSubmit={handleContactSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">{t('contact.nameLabel')}</Label>
                                            <Input
                                                id="name"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                placeholder={t('contact.namePlaceholder')}
                                                required
                                                className="bg-neutral-950 border-white/10 text-foreground"
                                            />
                                            {errors.name && <span className="text-xs text-red-400">{errors.name}</span>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">{t('contact.emailLabel')}</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                placeholder={t('contact.emailPlaceholder')}
                                                required
                                                className="bg-neutral-950 border-white/10 text-foreground"
                                            />
                                            {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject">{t('contact.subjectLabel')}</Label>
                                        <Input
                                            id="subject"
                                            value={data.subject}
                                            onChange={(e) => setData('subject', e.target.value)}
                                            placeholder={t('contact.subjectPlaceholder')}
                                            className="bg-neutral-950 border-white/10 text-foreground"
                                        />
                                        {errors.subject && <span className="text-xs text-red-400">{errors.subject}</span>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">{t('contact.messageLabel')}</Label>
                                        <Textarea
                                            id="message"
                                            value={data.message}
                                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData('message', e.target.value)}
                                            placeholder={t('contact.messagePlaceholder')}
                                            rows={5}
                                            required
                                            className="bg-neutral-950 border-white/10 text-foreground"
                                        />
                                        {errors.message && <span className="text-xs text-red-400">{errors.message}</span>}
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg cursor-pointer"
                                    >
                                        {processing ? t('contact.sending') : t('contact.sendButton')}
                                    </Button>

                                    {wasSuccessful && (
                                        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg flex items-center gap-3">
                                            <CheckCircle2 className="h-5 w-5 shrink-0" />
                                            <span>{t('contact.successMessage')}</span>
                                        </div>
                                    )}
                                </form>
                            </GlassmorphismCard>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </PortfolioLayout>
    );
}
