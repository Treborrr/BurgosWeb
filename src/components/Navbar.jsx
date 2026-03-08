import { useState, useEffect } from 'react';
import logo from '../assets/images/logo/LogoNoFondo.png';
import { useLang } from '../context/LanguageContext';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { lang, toggle, t } = useLang();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 ${isScrolled ? 'py-2' : 'py-5'}`}
            style={{
                backgroundColor: isScrolled ? '#2e1a14' : 'rgba(46, 26, 20, 0.6)',
                backdropFilter: isScrolled ? 'none' : 'blur(12px)',
                borderBottom: isScrolled ? '1px solid rgba(201, 168, 76, 0.18)' : 'none',
                boxShadow: isScrolled ? '0 4px 32px rgba(0,0,0,0.5)' : 'none',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
        >
            <div className="nav-container">
                <div className="logo-wrapper">
                    <img
                        src={logo}
                        alt="Casa Hospedaje Burgos"
                        style={{
                            height: isScrolled ? '60px' : '105px',
                            width: 'auto',
                            objectFit: 'contain',
                            transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                    />
                </div>

                <div className="nav-links">
                    <a href="#inicio">{t.nav.home}</a>
                    <a href="#habitaciones">{t.nav.rooms}</a>
                    <a href="#servicios">{t.nav.services}</a>
                    <a href="#ubicacion">{t.nav.location}</a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    {/* Toggle de idioma */}
                    <button className="lang-toggle" onClick={toggle} aria-label="Cambiar idioma">
                        <span className={lang === 'es' ? 'lang-active' : ''}>ES</span>
                        <span className="lang-sep">|</span>
                        <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
                    </button>

                    <a
                        href="#habitaciones"
                        className="btn btn-primary"
                        style={{ padding: '0.75rem 1.8rem', fontSize: '0.72rem' }}
                    >
                        {t.nav.book}
                    </a>
                </div>
            </div>
        </nav>
    );
}
