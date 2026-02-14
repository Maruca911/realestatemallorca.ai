import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SUPPORTED_LANGUAGES, LanguageCode } from '../lib/i18n/config';

export default function LanguageSwitcher() {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageSelect = (lang: LanguageCode) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Select language"
      >
        <Globe size={18} />
        <span className="text-sm font-medium uppercase">{currentLanguage}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 border border-gray-200">
          <div className="p-2 max-h-96 overflow-y-auto">
            {(Object.entries(SUPPORTED_LANGUAGES) as [LanguageCode, typeof SUPPORTED_LANGUAGES['en']][]).map(
              ([code, lang]) => (
                <button
                  key={code}
                  onClick={() => handleLanguageSelect(code)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                    currentLanguage === code
                      ? 'bg-blue-100 text-blue-900'
                      : 'hover:bg-gray-100 text-gray-900'
                  }`}
                >
                  <div className="font-medium">{lang.nativeName}</div>
                  <div className="text-xs text-gray-500">{lang.name}</div>
                </button>
              )
            )}
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
