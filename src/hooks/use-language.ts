import { useState, useEffect } from 'react';

type Language = 'en' | 'ar' | 'de';

// Simple translations object - you can expand this
const translations: Record<Language, Record<string, string>> = {
  en: {
    'About': 'About',
    'Skills': 'Skills',
    'Projects': 'Projects',
    'Education': 'Education',
    'Contact': 'Contact',
    'Hire Me': 'Hire Me'
  },
  ar: {
    'About': 'عني',
    'Skills': 'المهارات',
    'Education': 'التعليم',
    'Experience': 'الخبرات',
    'Contact': 'اتصل بي',
    'Hire Me': 'وظفني'
  },
  de: {
    'About': 'Über mich',
    'Skills': 'Fähigkeiten',
    'Projects': 'Projekte',
    'Experience': 'Erfahrung',
    'Contact': 'Kontakt',
    'Hire Me': 'Kontaktieren Sie mich'
  }
};

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('language') as Language;
    if (stored && ['en', 'ar', 'de'].includes(stored)) return stored;
    return 'en'; // Default to English
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    // Update document dir for RTL languages
    document.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return { language, setLanguage, t };
}
