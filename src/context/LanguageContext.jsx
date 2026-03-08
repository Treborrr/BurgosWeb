import { createContext, useContext, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

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

export const useLang = () => useContext(LanguageContext);
