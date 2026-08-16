import { translations } from '../data/translations';
import { LanguageContext } from './useLang';

export function LanguageProvider({ children, lang }) {
    const t = translations[lang];

    return (
        <LanguageContext.Provider value={{ lang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}
