import { useState } from 'react';
import { ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import gocta from '../assets/images/city/CatarataGocta.png';
import kuelap from '../assets/images/city/Kuelap.png';
import karajia from '../assets/images/city/Karajia.png';
import catedral from '../assets/images/city/CatedralCieloLindo.jpg';

const faqs = [
    { q: "¿Incluye desayuno?", a: "Sí, todas nuestras tarifas incluyen un desayuno continental premium con productos locales de la región." },
    { q: "¿Tienen estacionamiento?", a: "Contamos con convenio de estacionamiento seguro a solo media cuadra del hospedaje." },
    { q: "¿Cómo llego desde el aeropuerto?", a: "Ofrecemos servicio de traslado previa coordinación, o podemos recomendarte los mejores taxis oficiales." },
    { q: "¿A qué distancia está la Plaza de Armas?", a: "Estamos ubicados en el corazón histórico, a menos de 2 cuadras de la Plaza de Armas de Chachapoyas." },
];

const attractions = [
    { name: "Fortaleza de Kuelap",    img: kuelap,   desc: "La ciudad amurallada más importante de la cultura Chachapoyas." },
    { name: "Catarata Gocta",         img: gocta,    desc: "Una de las caídas de agua más altas y espectaculares del mundo." },
    { name: "Sarcófagos de Karajía",  img: karajia,  desc: "Impresionantes tumbas milenarias en los acantilados de piedra." },
    { name: "Catedral de Chachapoyas",img: catedral, desc: "Belleza arquitectónica colonial frente a la plaza principal." },
];

export default function InfoSections() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <>
            {/* ── Atracciones ── */}
            <section id="servicios" className="attractions">
                <div className="container">
                    <div className="section-header">
                        <span className="section-eyebrow">Turismo</span>
                        <h2 className="text-gradient-gold">Explora Chachapoyas</h2>
                        <p>Descubre maravillas milenarias partiendo desde nuestro hospedaje.</p>
                        <div className="section-divider" />
                    </div>
                    <div className="attraction-grid">
                        {attractions.map(a => (
                            <div key={a.name} className="attraction-card">
                                <img src={a.img} alt={a.name} />
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

                    {/* Ubicación */}
                    <div className="location-info">
                        <span className="section-eyebrow">Dónde estamos</span>
                        <h2 className="text-gradient-gold">Nuestra Ubicación</h2>
                        <p style={{ color: 'var(--color-text-muted)', marginTop: '0.8rem', lineHeight: 1.85, fontSize: '0.97rem' }}>
                            Estratégicamente ubicados en el centro histórico para que tu estadía sea placentera y conveniente.
                        </p>
                        <div className="info-list">
                            <div className="info-item">
                                <MapPin size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                                Jr. Burgos 123, Chachapoyas, Perú
                            </div>
                            <div className="info-item">
                                <Phone size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                                +51 900 000 000
                            </div>
                            <div className="info-item">
                                <Mail size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                                reservas@casahospedajeburgos.com
                            </div>
                        </div>
                        <div className="map-placeholder">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15873.3421528434!2d-77.8727!3d-6.2294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b3f7f1a!2sChachapoyas!5e0!3m2!1ses!2spe!4v1"
                                width="100%"
                                height="300"
                                style={{ border: 0, display: 'block' }}
                                allowFullScreen
                                loading="lazy"
                                title="Mapa Casa Hospedaje Burgos"
                            />
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="faq-section">
                        <span className="section-eyebrow">Información</span>
                        <h2 className="text-gradient-gold">Preguntas Frecuentes</h2>
                        <div className="faq-list">
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className={`faq-item ${openFaq === i ? 'open' : ''}`}
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    <div className="faq-question">
                                        {faq.q}
                                        <ChevronDown size={18} className="icon" />
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
