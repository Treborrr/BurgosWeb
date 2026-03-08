import { useState } from 'react';
import { ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import gocta from '../assets/images/city/CatarataGocta.png';
import kuelap from '../assets/images/city/Kuelap.png';
import karajia from '../assets/images/city/Karajia.png';
import catedral from '../assets/images/city/CatedralCieloLindo.jpg';

const imgs = [kuelap, gocta, karajia, catedral];

export default function InfoSections() {
    const { t } = useLang();
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <>
            {/* ── Atracciones ── */}
            <section id="servicios" className="attractions">
                <div className="container">
                    <div className="section-header">
                        <span className="section-eyebrow">{t.attractions.eyebrow}</span>
                        <h2 className="text-gradient-gold">{t.attractions.title}</h2>
                        <p>{t.attractions.subtitle}</p>
                        <div className="section-divider" />
                    </div>
                    <div className="attraction-grid">
                        {t.attractions.items.map((a, i) => (
                            <div key={a.name} className="attraction-card">
                                <img src={imgs[i]} alt={a.name} />
                                <div className="attraction-info">
                                    <h3>{a.name}</h3>
                                    <p>{a.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Ubicación + FAQ ── */}
            <section id="ubicacion" className="faq-location">
                <div className="container grid-2">

                    <div className="location-info">
                        <span className="section-eyebrow">{t.location.eyebrow}</span>
                        <h2 className="text-gradient-gold">{t.location.title}</h2>
                        <p style={{ color: 'var(--color-text-muted)', marginTop: '0.8rem', lineHeight: 1.85, fontSize: '0.97rem' }}>
                            {t.location.subtitle}
                        </p>
                        <div className="info-list">
                            <div className="info-item"><MapPin size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} /> Jr. Hermosura 622, Chachapoyas, Perú</div>
                            <div className="info-item"><Phone size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} /> +51 941 944 562</div>
                            <div className="info-item"><Mail size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} /> reservas@casahospedajeburgos.com</div>
                        </div>
                        <div className="map-placeholder">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3968.3533!2d-77.8674563!3d-6.2298975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f20!3m2!1m1!2zNsKwMTMnNDcuNiJTIDc3wrA1MicwMi44Ilc!5e0!3m2!1ses!2spe!4v1710000000000!5m2!1ses!2spe"
                                width="100%" height="300"
                                style={{ border: 0, display: 'block' }}
                                allowFullScreen loading="lazy"
                                sandbox="allow-scripts allow-same-origin"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa Casa Hospedaje Burgos"
                            />
                        </div>
                    </div>

                    <div className="faq-section">
                        <span className="section-eyebrow">{t.faq.eyebrow}</span>
                        <h2 className="text-gradient-gold">{t.faq.title}</h2>
                        <div className="faq-list">
                            {t.faq.items.map((faq, i) => (
                                <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                    <div className="faq-question">
                                        {faq.q} <ChevronDown size={18} className="icon" />
                                    </div>
                                    <div className="faq-answer">{faq.a}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
