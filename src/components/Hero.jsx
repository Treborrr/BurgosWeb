import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import bgImage1 from '../assets/images/city/FortalezaKuelap.webp';
import bgImage2 from '../assets/images/city/Karajia.webp';
import bgImage3 from '../assets/images/city/CatarataGocta.webp';
import bgImage4 from '../assets/images/city/plaza-de-armas-chachapoyas.webp';
import bgImage5 from '../assets/images/city/VirgenBurgos.webp';
import { useLang } from '../context/LanguageContext';

const heroImages = [bgImage1, bgImage2, bgImage3, bgImage4, bgImage5];

// Returns a random index different from the current one
const getRandomIndex = (current) => {
    let next;
    do { next = Math.floor(Math.random() * heroImages.length); }
    while (next === current);
    return next;
};

export default function Hero() {
    const { t } = useLang();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [titleGold, setTitleGold] = useState(false);
    const timerRef = useRef(null);

    const changeImage = useCallback((currentIdx) => {
        setCurrentIndex(prev => getRandomIndex(prev));
    }, []);

    const resetTimer = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrentIndex(prev => getRandomIndex(prev));
        }, 45000);
    }, []);

    // Start timer on mount, clear on unmount
    useEffect(() => {
        resetTimer();
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [resetTimer]);

    const handleHeroClick = (e) => {
        if (e.target.closest('a') || e.target.closest('button')) return;
        setCurrentIndex(prev => getRandomIndex(prev));
        resetTimer(); // Reset the 45s timer on manual click
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
