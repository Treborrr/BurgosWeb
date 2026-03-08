import { useState, useEffect } from 'react';
import logo from '../assets/images/logo/LogoNoFondo.png';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 ${isScrolled ? 'py-2' : 'py-5'}`}
            style={{
                backgroundColor: isScrolled
                    ? '#2e1a14'
                    : 'rgba(46, 26, 20, 0.6)',
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
                    <a href="#inicio">Inicio</a>
                    <a href="#habitaciones">Habitaciones</a>
                    <a href="#servicios">Servicios</a>
                    <a href="#ubicacion">Ubicación</a>
                </div>

                <a
                    href="#habitaciones"
                    className="btn btn-primary"
                    style={{ padding: '0.75rem 1.8rem', fontSize: '0.72rem' }}
                >
                    Reservar
                </a>
            </div>
        </nav>
    );
}
