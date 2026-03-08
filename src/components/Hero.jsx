import { ChevronDown } from 'lucide-react';
import bgImage from '../assets/images/city/Karajia.png';

export default function Hero() {
    return (
        <section id="inicio" className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="hero-overlay" />

            <div className="hero-content">
                <span className="hero-eyebrow animate-fade-in">
                    Chachapoyas, Amazonas · Perú
                </span>

                <h1 className="animate-fade-in delay-1">
                    Casa Hospedaje<br />Burgos
                </h1>

                <div className="hero-divider animate-fade-in delay-2" />

                <p className="animate-fade-in delay-2">
                    Elegancia colonial y confort moderno en el corazón histórico de Chachapoyas.
                </p>

                <div className="hero-btns animate-fade-in delay-3">
                    <a href="#habitaciones" className="btn btn-primary">
                        Ver Habitaciones
                    </a>
                    <a href="#ubicacion" className="btn btn-outline">
                        Nuestra Ubicación
                    </a>
                </div>
            </div>

            <a href="#habitaciones" className="scroll-indicator">
                <ChevronDown size={20} />
            </a>
        </section>
    );
}
