// Translation utilities for Fragkosiko
// Supports: English (en) and Greek (el)

import en from './en.json';
import el from './el.json';

export const languages = {
  en: 'English',
  el: 'Ελληνικά',
};

export const defaultLang = 'en';

export const translations = { en, el } as const;

export type Lang = keyof typeof translations;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[lang];

    for (const k of keys) {
      value = value?.[k];
    }

    // Fallback to English if translation not found
    if (value === undefined) {
      value = translations[defaultLang];
      for (const k of keys) {
        value = value?.[k];
      }
    }

    return value ?? key;
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  // Always prefix with language since prefixDefaultLocale is true
  return `/${lang}${path === '/' ? '' : path}`;
}

