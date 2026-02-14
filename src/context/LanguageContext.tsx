import React, { createContext, useState, useEffect, useCallback } from 'react';
import { LanguageCode, DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../lib/i18n/config';
import { loadTranslations } from '../lib/i18n/translations';

interface LanguageContextType {
  currentLanguage: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  translations: Record<string, string>;
  isLoading: boolean;
  t: (key: string, defaultValue?: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode; initialLanguage?: LanguageCode }> = ({
  children,
  initialLanguage = DEFAULT_LANGUAGE,
}) => {
  const [currentLanguage, setCurrentLanguageState] = useState<LanguageCode>(initialLanguage);
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load translations when language changes
  useEffect(() => {
    const loadLang = async () => {
      setIsLoading(true);
      const trans = await loadTranslations(currentLanguage);
      setTranslations(trans);
      setIsLoading(false);

      // Update document language and direction
      document.documentElement.lang = currentLanguage;
      document.documentElement.dir = SUPPORTED_LANGUAGES[currentLanguage].dir;
    };

    loadLang();
  }, [currentLanguage]);

  const setLanguage = useCallback((lang: LanguageCode) => {
    setCurrentLanguageState(lang);
    localStorage.setItem('preferredLanguage', lang);
    window.history.replaceState(null, '', `/${lang}`);
  }, []);

  const t = useCallback(
    (key: string, defaultValue: string = key): string => {
      return translations[key] || defaultValue;
    },
    [translations]
  );

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, translations, isLoading, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

