import logo from '../assets/images/logo/LogoNoFondo.png';
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <img src={logo} alt="Logo Burgos" className="footer-logo" />
                        <p>Hospedaje boutique con encanto colonial en el corazón de Chachapoyas, Perú.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Navegación</h4>
                        <ul>
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#habitaciones">Habitaciones</a></li>
                            <li><a href="#servicios">Servicios</a></li>
                            <li><a href="#ubicacion">Ubicación</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contacto</h4>
                        <div className="contact-item"><Phone size={16} /> +51 900 000 000</div>
                        <div className="contact-item"><MapPin size={16} /> Jr. Burgos 123, Chachapoyas</div>
                        <div className="social-icons">
                            <a href="#"><Instagram /></a>
                            <a href="#"><Facebook /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Casa Hospedaje Burgos. Todos los derechos reservados.</p>
                </div>
            </div>

        </footer>
    );
}
