import { useState, useEffect } from 'react';
import logo from '../assets/images/logo/LogoNoFondo.png';
import { useLang } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { lang, toggle, t } = useLang();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const close = () => setMenuOpen(false);

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0, left: 0,
                width: '100%',
                zIndex: 50,
                padding: isScrolled ? '0.5rem 0' : '1.1rem 0',
                backgroundColor: isScrolled ? '#2e1a14' : 'rgba(46, 26, 20, 0.6)',
                backdropFilter: isScrolled ? 'none' : 'blur(12px)',
                borderBottom: isScrolled ? '1px solid rgba(201, 168, 76, 0.18)' : 'none',
                boxShadow: isScrolled ? '0 4px 32px rgba(0,0,0,0.5)' : 'none',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}>
                <div className="nav-container">
                    <div className="logo-wrapper">
                        <img
                            src={logo}
                            alt="Casa Hospedaje Burgos"
                            style={{
                                height: isScrolled ? '48px' : 'clamp(60px, 12vw, 88px)',
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

                    <div className="nav-actions">
                        <button className="lang-toggle" onClick={toggle} aria-label="Cambiar idioma">
                            <span className={lang === 'es' ? 'lang-active' : ''}>ES</span>
                            <span className="lang-sep">|</span>
                            <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
                        </button>

                        <a
                            href="#habitaciones"
                            className="btn btn-primary nav-book-btn"
                            style={{ padding: '0.75rem 1.8rem', fontSize: '0.72rem' }}
                        >
                            {t.nav.book}
                        </a>

                        <button
                            className="nav-hamburger"
                            onClick={() => setMenuOpen(o => !o)}
                            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        >
                            {menuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="mobile-overlay" onClick={close}>
                    <div className="mobile-menu" onClick={e => e.stopPropagation()}>
                        <a href="#inicio" className="mobile-link" onClick={close}>{t.nav.home}</a>
                        <a href="#habitaciones" className="mobile-link" onClick={close}>{t.nav.rooms}</a>
                        <a href="#servicios" className="mobile-link" onClick={close}>{t.nav.services}</a>
                        <a href="#ubicacion" className="mobile-link" onClick={close}>{t.nav.location}</a>
                        <a
                            href="#habitaciones"
                            className="btn btn-primary"
                            style={{ width: '100%', marginTop: '1.2rem' }}
                            onClick={close}
                        >
                            {t.nav.book}
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
