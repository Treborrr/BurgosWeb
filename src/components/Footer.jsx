import logo from '../assets/images/logo/LogoNoFondo.png';
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const TikTokIcon = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-label="TikTok">
        <path d="M21 7a4.5 4.5 0 0 1-4.5-4.5H13v11.25a2.25 2.25 0 1 1-3.182-2.057V8.107A5.75 5.75 0 1 0 16.5 13.75V9.317A8.5 8.5 0 0 0 21 10.5V7Z" />
    </svg>
);

const AirbnbIcon = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-label="Airbnb">
        <path d="M12 2c-1.6 0-3 .9-3.7 2.3C7.4 5.5 7 7 7 8.5c0 1.6.5 3.1 1.3 4.4L12 20l3.7-7.1c.8-1.3 1.3-2.8 1.3-4.4 0-1.5-.4-3-.9-4.2C15.4 2.9 13.8 2 12 2zm0 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
    </svg>
);

export default function Footer() {
    const { t } = useLang();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <img src={logo} alt="Logo Burgos" className="footer-logo" />
                        <p>{t.footer.brand}</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/plazuelaburgos" target="_blank" rel="noopener noreferrer"><Facebook size={17} /></a>
                            <a href="https://www.tiktok.com/@hospedaje.burgos" target="_blank" rel="noopener noreferrer"><TikTokIcon /></a>
                            <a href="https://www.airbnb.com.pe/users/profile/1468587611313525214?previous_page_name=PdpHotel" target="_blank" rel="noopener noreferrer"><AirbnbIcon /></a>
                            {/* Instagram: agrega tu URL cuando tengas la cuenta */}
                            {/* <a href="https://www.instagram.com/TU_USUARIO" target="_blank" rel="noopener noreferrer"><Instagram size={17} /></a> */}
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>{t.footer.nav_title}</h4>
                        <ul>
                            <li><a href="#inicio">{t.nav.home}</a></li>
                            <li><a href="#habitaciones">{t.nav.rooms}</a></li>
                            <li><a href="#servicios">{t.nav.services}</a></li>
                            <li><a href="#ubicacion">{t.nav.location}</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>{t.footer.contact_title}</h4>
                        <div className="contact-item"><Phone size={15} /> +51 941 944 562</div>
                        <div className="contact-item"><MapPin size={15} /> Jr. Hermosura 622, Chachapoyas</div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Casa Hospedaje Burgos. {t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
}
