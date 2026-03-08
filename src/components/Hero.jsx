import { ChevronDown } from 'lucide-react';
import bgImage from '../assets/images/city/Karajia.png';
import { useLang } from '../context/LanguageContext';

export default function Hero() {
    const { t } = useLang();

    return (
        <section id="inicio" className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="hero-overlay" />

            <div className="hero-content">
                <span className="hero-eyebrow animate-fade-in">
                    {t.hero.eyebrow}
                </span>

                <h1 className="animate-fade-in delay-1">
                    Casa Hospedaje<br />Burgos
                </h1>

                <div className="hero-divider animate-fade-in delay-2" />

                <p className="animate-fade-in delay-2">
                    {t.hero.subtitle}
                </p>

                <div className="hero-btns animate-fade-in delay-3">
                    <a href="#habitaciones" className="btn btn-primary">{t.hero.cta_rooms}</a>
                    <a href="#ubicacion" className="btn btn-outline">{t.hero.cta_location}</a>
                </div>
            </div>

            <a href="#habitaciones" className="scroll-indicator">
                <ChevronDown size={20} />
            </a>
        </section>
    );
}
