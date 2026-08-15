import { useState } from 'react';
import { translations } from '../data/translations';
import { LanguageContext } from './useLang';

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('es');
    const toggle = () => setLang(l => l === 'es' ? 'en' : 'es');
    const t = translations[lang];

    return (
        <LanguageContext.Provider value={{ lang, toggle, t }}>
            {children}
        </LanguageContext.Provider>
    );
}
