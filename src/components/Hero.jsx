import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import bgImage1 from '../assets/images/city/FortalezaKuelapBest.webp';
import bgImage2 from '../assets/images/city/Karajia.webp';
import bgImage3 from '../assets/images/city/CatarataGocta.webp';
import bgImage4 from '../assets/images/city/plaza-de-armas-chachapoyas.webp';
import bgImage5 from '../assets/images/city/VirgenAsuntaBurgos.webp';
import bgImage6 from '../assets/images/city/VirgenAsuntaFuegosArtificiales.webp';
import { useLang } from '../context/useLang';

const heroImages = [bgImage1, bgImage2, bgImage3, bgImage4, bgImage5, bgImage6];
const KARAJIA_INDEX = 1; // Index of bgImage2 in heroImages array
const OTHER_INDICES = heroImages.map((_, i) => i).filter((i) => i !== KARAJIA_INDEX);

export default function Hero() {
    const { t } = useLang();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [titleGold, setTitleGold] = useState(false);

    // Auto-transition logic based on current image
    useEffect(() => {
        const isKarajia = currentIndex === KARAJIA_INDEX;
        const duration = isKarajia ? 5 * 60 * 1000 : 45000; // 5 minutes for Karajia, 45 seconds for others

        const timer = setInterval(() => {
            if (isKarajia) {
                // Karajia is active, next is a random non-Karajia image
                const randomOther = OTHER_INDICES[Math.floor(Math.random() * OTHER_INDICES.length)];
                setCurrentIndex(randomOther);
            } else {
                // Other image is active, next is Karajia
                setCurrentIndex(KARAJIA_INDEX);
            }
        }, duration);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleHeroClick = (e) => {
        if (e.target.closest('a') || e.target.closest('button')) return;
        
        // Manual skip follows the same alternating logic
        if (currentIndex === KARAJIA_INDEX) {
            const randomOther = OTHER_INDICES[Math.floor(Math.random() * OTHER_INDICES.length)];
            setCurrentIndex(randomOther);
        } else {
            setCurrentIndex(KARAJIA_INDEX);
        }
    };

    return (
        <section
            id="inicio"
            className="hero"
            style={{
                backgroundImage: `url(${heroImages[currentIndex]})`,
                cursor: 'pointer',
            }}
            onClick={handleHeroClick}
        >
            <div className="hero-overlay" />

            <div className="hero-content">
                <span className="hero-eyebrow animate-fade-in">
                    {t.hero.eyebrow}
                </span>

                <h1
                    className="animate-fade-in delay-1"
                    style={{ cursor: 'pointer', userSelect: 'none' }}
                    onClick={(e) => { e.stopPropagation(); setTitleGold(prev => !prev); }}
                >
                    <span className={titleGold ? 'text-gradient-gold' : ''}>Casa Hospedaje</span>
                    <br />
                    <span className={titleGold ? 'text-gradient-gold' : ''}>
                        Burgos
                    </span>
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
