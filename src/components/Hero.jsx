import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import bgImage1 from '../assets/images/city/FortalezaKuelap.webp';
import bgImage2 from '../assets/images/city/Karajia.webp';
import bgImage3 from '../assets/images/city/CatarataGocta.webp';
import bgImage4 from '../assets/images/city/plaza-de-armas-chachapoyas.webp';
import { useLang } from '../context/LanguageContext';

const heroImages = [bgImage1, bgImage2, bgImage3, bgImage4];

export default function Hero() {
    const { t } = useLang();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleHeroClick = (e) => {
        // Prevent changing image when clicking on buttons or links
        if (e.target.closest('a') || e.target.closest('button')) return;
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    };

    return (
        <section 
            id="inicio" 
            className="hero" 
            style={{ 
                backgroundImage: `url(${heroImages[currentImageIndex]})`,
                cursor: 'pointer',
                transition: 'background-image 0.8s ease-in-out'
            }}
            onClick={handleHeroClick}
        >
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
