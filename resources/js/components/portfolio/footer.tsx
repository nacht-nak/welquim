import { Link } from '@inertiajs/react';
import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

interface FooterProps {
    githubUrl?: string | null;
    linkedinUrl?: string | null;
    twitterUrl?: string | null;
    email?: string | null;
}

export default function Footer({
    githubUrl = 'https://github.com',
    linkedinUrl = 'https://linkedin.com',
    twitterUrl = 'https://twitter.com',
    email = 'hello@portfolio.dev',
}: FooterProps) {
    const { t } = useTranslation();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="border-t border-border/40 bg-neutral-950 text-neutral-400 py-12 md:py-16 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand Info */}
                    <div className="text-center md:text-left">
                        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent font-sans">
                            Welquim
                        </Link>
                        <p className="text-xs text-muted-foreground mt-2 max-w-xs">
                            Crafting exceptional, performance-driven full-stack digital solutions.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center gap-6 text-sm">
                        <Link href="/" className="hover:text-foreground transition-colors">{t('nav.home')}</Link>
                        <Link href="/projects" className="hover:text-foreground transition-colors">{t('nav.projects')}</Link>
                        <Link href="/contact" className="hover:text-foreground transition-colors">{t('nav.contact')}</Link>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-4">
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-white hover:border-primary/50 transition-colors"
                            >
                                <Github className="h-4 w-4" />
                            </a>
                        )}
                        {linkedinUrl && (
                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-white hover:border-primary/50 transition-colors"
                            >
                                <Linkedin className="h-4 w-4" />
                            </a>
                        )}
                        {twitterUrl && (
                            <a
                                href={twitterUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-white hover:border-primary/50 transition-colors"
                            >
                                <Twitter className="h-4 w-4" />
                            </a>
                        )}
                        {email && (
                            <a
                                href={`mailto:${email}`}
                                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-white hover:border-primary/50 transition-colors"
                            >
                                <Mail className="h-4 w-4" />
                            </a>
                        )}
                    </div>
                </div>

                <hr className="border-neutral-900 my-8" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <p>© 2026 Welquim. {t('footer.rights')}</p>

                    {/* Back to top */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={scrollToTop}
                        className="rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:text-white cursor-pointer"
                        title="Back to Top"
                    >
                        <ArrowUp className="h-4 w-4 animate-bounce" />
                    </Button>
                </div>
            </div>
        </footer>
    );
}
