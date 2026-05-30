import * as React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Phone, MapPin, CheckCircle2, Globe, Smartphone, Palette, Cloud, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import PortfolioLayout from '@/layouts/portfolio-layout';
import ParticlesBackground from '@/components/portfolio/particles-background';
import AnimatedText from '@/components/portfolio/animated-text';
import ScrollReveal from '@/components/portfolio/scroll-reveal';
import SectionHeading from '@/components/portfolio/section-heading';
import GlassmorphismCard from '@/components/portfolio/glassmorphism-card';
import SkillBar from '@/components/portfolio/skill-bar';
import ProjectCard from '@/components/portfolio/project-card';
import TestimonialCarousel from '@/components/portfolio/testimonial-carousel';
import AnimatedCounter from '@/components/portfolio/animated-counter';
import { About, Skill, Project, Service, Testimonial, PortfolioSettings } from '@/types/portfolio';

// Dynamic Service Icon Mapper
const IconMapper = ({ name, className }: { name: string | null; className?: string }) => {
    switch (name) {
        case 'Globe': return <Globe className={className} />;
        case 'Smartphone': return <Smartphone className={className} />;
        case 'Palette': return <Palette className={className} />;
        case 'Cloud': return <Cloud className={className} />;
        default: return <Terminal className={className} />;
    }
};

interface HomeProps {
    about: About | null;
    skills: Skill[];
    projects: Project[];
    services: Service[];
    testimonials: Testimonial[];
    settings: PortfolioSettings;
}

export default function Home({
    about,
    skills,
    projects,
    services,
    testimonials,
    settings,
}: HomeProps) {
    const { t } = useTranslation();
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/contact', {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <PortfolioLayout about={about}>
            <Head title="Welquim Panogaling" />

            {/* ================= HERO SECTION ================= */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4">
                {/* Floating WebGL/Canvas Particles */}
                <ParticlesBackground />

                {/* Ambient dynamic lights */}
                <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-neon-pink/10 rounded-full blur-[120px] animate-pulse" />

                <div className="max-w-7xl mx-auto w-full text-center relative z-10 space-y-8">
                    <ScrollReveal direction="up" delay={0.1}>
                        <span className="text-xs uppercase tracking-widest text-primary font-mono bg-primary/10 px-3.5 py-1.5 rounded-full">
                            {t('hero.availableForHire')}
                        </span>
                    </ScrollReveal>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
                        <AnimatedText
                            text={settings.hero_title || (about?.title ? `Hi, I'm ${about.title}` : t('hero.defaultTitle'))}
                            className="block text-foreground"
                        />
                        <span className="block mt-2 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent pb-2 font-mono text-3xl sm:text-4xl md:text-5xl">
                            {settings.hero_subtitle || t('hero.defaultSubtitle')}
                        </span>
                    </h1>

                    <ScrollReveal direction="up" delay={0.3} className="max-w-2xl mx-auto">
                        <p className="text-muted-foreground text-base sm:text-lg">
                            {about?.subtitle || t('hero.defaultDescription')}
                        </p>
                    </ScrollReveal>

                    {/* Stats Dashboard */}
                    {about && (
                        <ScrollReveal direction="up" delay={0.4} className="max-w-3xl mx-auto pt-6">
                            <div className="grid grid-cols-3 gap-4 border border-white/5 bg-neutral-900/30 rounded-2xl p-6 glass">
                                <div>
                                    <h4 className="text-2xl sm:text-3xl font-extrabold text-primary font-mono">
                                        <AnimatedCounter to={about.years_experience} suffix="+" />
                                    </h4>
                                    <p className="text-xs text-muted-foreground mt-1 uppercase">{t('hero.yearsExp')}</p>
                                </div>
                                <div>
                                    <h4 className="text-2xl sm:text-3xl font-extrabold text-primary font-mono">
                                        <AnimatedCounter to={about.projects_completed} suffix="+" />
                                    </h4>
                                    <p className="text-xs text-muted-foreground mt-1 uppercase">{t('hero.completedProjects')}</p>
                                </div>
                                <div>
                                    <h4 className="text-2xl sm:text-3xl font-extrabold text-primary font-mono">
                                        <AnimatedCounter to={about.happy_clients} suffix="+" />
                                    </h4>
                                    <p className="text-xs text-muted-foreground mt-1 uppercase">{t('hero.happyClients')}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    )}

                    {/* Action buttons */}
                    <ScrollReveal direction="up" delay={0.5} className="flex flex-wrap items-center justify-center gap-4 pt-4">
                        <a href="#projects">
                            <Button size="lg" className="rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg hover:shadow-primary/40 cursor-pointer">
                                {settings.hero_cta_text || t('hero.viewProjects')} <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </a>

                        {about?.resume_file && (
                            <a href="/resume/download">
                                <Button size="lg" variant="outline" className="rounded-full cursor-pointer hover:bg-neutral-800">
                                    <Download className="mr-2 h-4 w-4" /> {t('hero.downloadCV')}
                                </Button>
                            </a>
                        )}
                    </ScrollReveal>
                </div>
            </section>

            {/* ================= ABOUT ME SECTION ================= */}
            <section id="about" className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading title={t('about.title')} subtitle={t('about.subtitle')} alignment="center" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left: Animated Profile Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <ScrollReveal direction="left" delay={0.2} className="relative group max-w-sm w-full">
                            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                            <div className="relative rounded-2xl overflow-hidden aspect-square border border-white/10 bg-neutral-900 shadow-2xl">
                                <img
                                    src={about?.profile_image ? `/storage/${about.profile_image}` : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"}
                                    alt="Profile"
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right: Bio details */}
                    <div className="lg:col-span-7 space-y-6">
                        <ScrollReveal direction="right" delay={0.3}>
                            <h3 className="text-2xl font-bold text-foreground">
                                {t('about.heading')}
                            </h3>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={0.4} className="text-muted-foreground leading-relaxed whitespace-pre-line">
                            {about?.description || t('about.defaultDescription')}
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={0.5} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <span className="text-sm text-foreground font-medium">{about?.email || 'welpanogaling12@gmail.com'}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <span className="text-sm text-foreground font-medium">{about?.phone || '+639659374441'}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span className="text-sm text-foreground font-medium">{about?.location || 'Hinoba-an Negros Occidental,Philippines'}</span>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ================= SKILLS SECTION ================= */}
            <section id="skills" className="section-padding bg-neutral-950/40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading title={t('skills.title')} subtitle={t('skills.subtitle')} alignment="center" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Frontend skills */}
                        <ScrollReveal direction="up" delay={0.1}>
                            <GlassmorphismCard glowColor="blue" className="h-full space-y-6 bg-neutral-900/30">
                                <h3 className="text-lg font-bold text-foreground border-b border-white/5 pb-3">{t('skills.frontend')}</h3>
                                <div className="space-y-4">
                                    {skills.filter(s => s.category === 'frontend').map(skill => (
                                        <SkillBar key={skill.id} name={skill.name} proficiency={skill.proficiency} />
                                    ))}
                                </div>
                            </GlassmorphismCard>
                        </ScrollReveal>

                        {/* Backend skills */}
                        <ScrollReveal direction="up" delay={0.2}>
                            <GlassmorphismCard glowColor="purple" className="h-full space-y-6 bg-neutral-900/30">
                                <h3 className="text-lg font-bold text-foreground border-b border-white/5 pb-3">{t('skills.backend')}</h3>
                                <div className="space-y-4">
                                    {skills.filter(s => s.category === 'backend').map(skill => (
                                        <SkillBar key={skill.id} name={skill.name} proficiency={skill.proficiency} />
                                    ))}
                                </div>
                            </GlassmorphismCard>
                        </ScrollReveal>

                        {/* Tools / Other */}
                        <ScrollReveal direction="up" delay={0.3}>
                            <GlassmorphismCard glowColor="pink" className="h-full space-y-6 bg-neutral-900/30">
                                <h3 className="text-lg font-bold text-foreground border-b border-white/5 pb-3">{t('skills.tools')}</h3>
                                <div className="space-y-4">
                                    {skills.filter(s => ['tools', 'other'].includes(s.category)).map(skill => (
                                        <SkillBar key={skill.id} name={skill.name} proficiency={skill.proficiency} />
                                    ))}
                                </div>
                            </GlassmorphismCard>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ================= SERVICES SECTION ================= */}
            {settings.show_services && services.length > 0 && (
                <section id="services" className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading title={t('services.title')} subtitle={t('services.subtitle')} alignment="center" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <ScrollReveal key={service.id} direction="up" delay={index * 0.1}>
                                <GlassmorphismCard useTilt glowColor="purple" className="h-full space-y-6 border border-white/5 bg-neutral-900/40 hover:scale-[1.02]">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-neon-blue to-neon-purple flex items-center justify-center text-white shadow-lg">
                                        <IconMapper name={service.icon} className="h-6 w-6" />
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                                    </div>

                                    {service.features && service.features.length > 0 && (
                                        <ul className="space-y-2 pt-2 border-t border-white/5">
                                            {service.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-center gap-2 text-xs text-muted-foreground">
                                                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </GlassmorphismCard>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>
            )}

            {/* ================= PROJECTS SHOWCASE SECTION ================= */}
            <section id="projects" className="section-padding bg-neutral-950/40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading title={t('projects.title')} subtitle={t('projects.subtitle')} alignment="center" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ScrollReveal key={project.id} direction="up" delay={index * 0.1}>
                                <ProjectCard project={project} />
                            </ScrollReveal>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <ScrollReveal direction="up">
                            <Link href="/projects">
                                <Button size="lg" variant="outline" className="rounded-full cursor-pointer hover:bg-neutral-800">
                                    {t('projects.viewAll')} <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ================= TESTIMONIALS SECTION ================= */}
            {settings.show_testimonials && testimonials.length > 0 && (
                <section id="testimonials" className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading title={t('testimonials.title')} subtitle={t('testimonials.subtitle')} alignment="center" />

                    <ScrollReveal direction="up" delay={0.2}>
                        <TestimonialCarousel testimonials={testimonials} />
                    </ScrollReveal>
                </section>
            )}

            {/* ================= CONTACT SECTION ================= */}
            <section id="contact" className="section-padding bg-neutral-950/40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading title={t('contact.title')} subtitle={t('contact.subtitle')} alignment="center" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Info cards */}
                        <div className="lg:col-span-5 space-y-6">
                            <ScrollReveal direction="left" delay={0.1}>
                                <h3 className="text-2xl font-bold text-foreground">{t('contact.heading')}</h3>
                                <p className="text-muted-foreground text-sm mt-2">
                                    {t('contact.description')}
                                </p>

                                <div className="space-y-4 pt-6">
                                    <GlassmorphismCard className="flex items-center gap-4 bg-neutral-900/30 p-4!">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs text-muted-foreground uppercase font-mono">{t('about.emailLabel')}</h4>
                                            <p className="text-sm font-semibold text-foreground">{about?.email || 'welpanogaling12@gmail.com'}</p>
                                        </div>
                                    </GlassmorphismCard>

                                    <GlassmorphismCard className="flex items-center gap-4 bg-neutral-900/30 p-4!">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs text-muted-foreground uppercase font-mono">{t('about.phoneLabel')}</h4>
                                            <p className="text-sm font-semibold text-foreground">{about?.phone || '+639659374441'}</p>
                                        </div>
                                    </GlassmorphismCard>

                                    <GlassmorphismCard className="flex items-center gap-4 bg-neutral-900/30 p-4!">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs text-muted-foreground uppercase font-mono">{t('about.locationLabel')}</h4>
                                            <p className="text-sm font-semibold text-foreground">{about?.location || 'Hinoba-an Negros Occidental, Philippines'}</p>
                                        </div>
                                    </GlassmorphismCard>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-7">
                            <ScrollReveal direction="right" delay={0.2}>
                                <GlassmorphismCard glowColor="purple" className="bg-neutral-900/40">
                                    <form onSubmit={handleContactSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">{t('contact.nameLabel')}</Label>
                                                <Input
                                                    id="name"
                                                    value={data.name}
                                                    onChange={(e) => setData('name', e.target.value)}
                                                    placeholder="Client Name"
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
                                                    placeholder="Client Email"
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
            </section>
        </PortfolioLayout>
    );
}
