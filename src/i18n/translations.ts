// Translation utilities for Fragkosiko
// Supports: English (en) and Greek (el) — Greek is the default locale (no URL prefix)

import en from './en.json';
import el from './el.json';

export const languages = {
  el: 'Ελληνικά',
  en: 'English',
};

export const defaultLang = 'el' as const;

export const translations = { en, el } as const;

export type Lang = keyof typeof translations;

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang === 'en') return 'en';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[lang];

    for (const k of keys) {
      value = value?.[k];
    }

    // Fallback to default language if translation not found
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
  // Default language (el) has no prefix; non-default languages get /<lang> prefix
  if (lang === defaultLang) return path;
  if (path === '/') return `/${lang}/`;
  return `/${lang}${path}`;
}
