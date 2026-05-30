import { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '@/components/portfolio/language-switcher';

export default function Navbar() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const page = usePage();
    const { url } = page;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: t('nav.home'), href: '/' },
        { name: t('nav.projects'), href: '/projects' },
        { name: t('nav.contact'), href: '/contact' },
    ];

    const isActive = (href: string) => {
        if (href === '/') return url === '/';
        return url.startsWith(href);
    };

    // Dark/Light Theme toggler using the existing html className pattern
    const toggleTheme = () => {
        const isDark = document.documentElement.classList.contains('dark');
        if (isDark) {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            localStorage.setItem('appearance', 'light');
        } else {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
            localStorage.setItem('appearance', 'dark');
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? 'py-4 glass border-b border-white/10 dark:border-white/5 shadow-lg shadow-black/5 backdrop-blur-md bg-background/70'
                    : 'py-6 bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo + Language Switcher */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-2xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent font-sans">
                                Welquim
                            </span>
                        </Link>
                        <LanguageSwitcher />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:text-primary ${
                                    isActive(item.href)
                                        ? 'text-primary border-b-2 border-primary pb-1'
                                        : 'text-muted-foreground'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Theme Toggle Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="text-muted-foreground hover:text-foreground cursor-pointer"
                        >
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        </Button>

                        {/* Admin Link or Dashboard */}
                        <Link href="/admin">
                            <Button className="cursor-pointer bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all border-none">
                                {t('nav.adminPortal')}
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="text-muted-foreground hover:text-foreground cursor-pointer"
                        >
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        </Button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none cursor-pointer"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-80 border-b border-white/10 dark:border-white/5 bg-background/95 glass' : 'max-h-0'
                }`}
            >
                <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${
                                isActive(item.href)
                                    ? 'bg-neutral-100 dark:bg-neutral-800 text-primary'
                                    : 'text-muted-foreground hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-foreground'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="pt-4 px-3">
                        <Link href="/admin" onClick={() => setIsOpen(false)}>
                            <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white border-none cursor-pointer">
                                {t('nav.adminPortal')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
