import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/locales/en.json';
import es from '@/locales/es.json';
import id from '@/locales/id.json';
import ja from '@/locales/ja.json';
import ko from '@/locales/ko.json';
import tl from '@/locales/tl.json';
import zh from '@/locales/zh.json';

const savedLanguage = typeof window !== 'undefined'
    ? localStorage.getItem('i18nextLng') || 'en'
    : 'en';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        ja: { translation: ja },
        zh: { translation: zh },
        es: { translation: es },
        id: { translation: id },
        ko: { translation: ko },
        tl: { translation: tl },
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false, // React already handles XSS
    },
});

// Persist language choice
i18n.on('languageChanged', (lng: string) => {
    localStorage.setItem('i18nextLng', lng);
});

export default i18n;
