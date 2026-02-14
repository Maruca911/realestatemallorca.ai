export type LanguageCode = 'en' | 'de' | 'es' | 'fr' | 'nl' | 'it' | 'sv' | 'no' | 'da' | 'pl' | 'ru' | 'ar';

export const SUPPORTED_LANGUAGES: Record<LanguageCode, { name: string; nativeName: string; region: string; dir: 'ltr' | 'rtl' }> = {
  en: { name: 'English', nativeName: 'English', region: 'US', dir: 'ltr' },
  de: { name: 'German', nativeName: 'Deutsch', region: 'DE', dir: 'ltr' },
  es: { name: 'Spanish', nativeName: 'Español', region: 'ES', dir: 'ltr' },
  fr: { name: 'French', nativeName: 'Français', region: 'FR', dir: 'ltr' },
  nl: { name: 'Dutch', nativeName: 'Nederlands', region: 'NL', dir: 'ltr' },
  it: { name: 'Italian', nativeName: 'Italiano', region: 'IT', dir: 'ltr' },
  sv: { name: 'Swedish', nativeName: 'Svenska', region: 'SE', dir: 'ltr' },
  no: { name: 'Norwegian', nativeName: 'Norsk', region: 'NO', dir: 'ltr' },
  da: { name: 'Danish', nativeName: 'Dansk', region: 'DK', dir: 'ltr' },
  pl: { name: 'Polish', nativeName: 'Polski', region: 'PL', dir: 'ltr' },
  ru: { name: 'Russian', nativeName: 'Русский', region: 'RU', dir: 'ltr' },
  ar: { name: 'Arabic', nativeName: 'العربية', region: 'SA', dir: 'rtl' },
};

export const DEFAULT_LANGUAGE: LanguageCode = 'en';
export const FALLBACK_LANGUAGE: LanguageCode = 'en';

export const LANGUAGE_CODES = Object.keys(SUPPORTED_LANGUAGES) as LanguageCode[];
