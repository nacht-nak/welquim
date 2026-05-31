import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
    { code: 'en', flag: '🇺🇸' },
    { code: 'ja', flag: '🇯🇵' },
    { code: 'zh', flag: '🇨🇳' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'id', flag: '🇮🇩' },
    { code: 'ko', flag: '🇰🇷' },
    { code: 'tl', flag: '🇵🇭' },
];

export default function LanguageSwitcher() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="cursor-pointer gap-2 rounded-full border border-white/10 bg-white/5 px-3 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
                >
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-base leading-none">{currentLang.flag}</span>
                    <span className="hidden text-xs font-medium sm:inline">
                        {t(`language.${currentLang.code}`)}
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="start"
                className="min-w-[180px] border border-white/10 bg-neutral-900/95 backdrop-blur-xl"
            >
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`cursor-pointer gap-3 px-3 py-2.5 text-sm transition-colors ${
                            i18n.language === lang.code
                                ? 'bg-primary/10 font-semibold text-primary'
                                : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        <span className="text-base leading-none">{lang.flag}</span>
                        <span>{t(`language.${lang.code}`)}</span>
                        {i18n.language === lang.code && (
                            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
                        )}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
