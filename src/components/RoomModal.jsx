import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Check, Users, ZoomIn } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function RoomModal({ room, inCart, onClose, onAddToCart }) {
    const { lang, t } = useLang();
    const [imgIndex, setImgIndex]     = useState(0);
    const [lightbox, setLightbox]     = useState(false);

    const name   = lang === 'en' ? room.nameEn        : room.name;
    const desc   = lang === 'en' ? room.descriptionEn : room.description;
    const images = room.images?.length ? room.images : [];
    const hasMultiple = images.length > 1;

    // Cerrar con Escape (lightbox primero, luego modal)
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') lightbox ? setLightbox(false) : onClose();
            if (e.key === 'ArrowRight' && lightbox) next();
            if (e.key === 'ArrowLeft'  && lightbox) prev();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [lightbox, onClose, imgIndex]);

    // Bloquear scroll del body
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    const prev = () => setImgIndex(i => (i - 1 + images.length) % images.length);
    const next = () => setImgIndex(i => (i + 1) % images.length);

    return (
        <div className="room-modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="room-modal">

                {/* Botón cerrar */}
                <button className="room-modal-close" onClick={onClose}>
                    <X size={18} />
                </button>

                {/* Galería */}
                <div className="room-modal-gallery">
                    {images.length > 0 ? (
                        <>
                            <img
                                src={images[imgIndex]}
                                alt={name}
                                className="room-modal-img"
                                onClick={() => setLightbox(true)}
                                style={{ cursor: 'zoom-in' }}
                            />
                            {/* Hint de zoom */}
                            <div className="gallery-zoom-hint" onClick={() => setLightbox(true)}>
                                <ZoomIn size={15} />
                            </div>

                            {hasMultiple && (
                                <>
                                    <button className="gallery-arrow gallery-prev" onClick={prev}>
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button className="gallery-arrow gallery-next" onClick={next}>
                                        <ChevronRight size={20} />
                                    </button>
                                    <div className="gallery-dots">
                                        {images.map((_, i) => (
                                            <button
                                                key={i}
                                                className={`gallery-dot ${i === imgIndex ? 'active' : ''}`}
                                                onClick={() => setImgIndex(i)}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </>
                    ) : (
                        <div className="room-modal-no-img">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                <polyline points="21 15 16 10 5 21"/>
                            </svg>
                        </div>
                    )}

                    {/* Badge precio sobre la imagen */}
                    <div className="room-modal-price-badge">
                        S/{room.price}<span>{t.booking.per_night}</span>
                    </div>
                </div>

                {/* Contenido */}
                <div className="room-modal-body">
                    <div className="room-modal-header">
                        <div>
                            <h2>{name}</h2>
                            <div className="room-modal-capacity">
                                <Users size={15} />
                                <span>{room.capacity} {room.capacity === 1 ? (lang === 'en' ? 'guest' : 'persona') : (lang === 'en' ? 'guests' : 'personas')}</span>
                            </div>
                        </div>
                        <div className="room-modal-price-text">
                            <span className="price-amount">S/{room.price}</span>
                            <span className="price-night">{t.booking.per_night}</span>
                        </div>
                    </div>

                    <p className="room-modal-desc">{desc}</p>

                    {/* Amenities completas */}
                    <div className="room-modal-amenities">
                        {room.amenities.map(a => (
                            <span key={a} className="room-modal-amenity">
                                <Check size={13} /> {a}
                            </span>
                        ))}
                    </div>

                    {/* Botones */}
                    <div className="room-modal-actions">
                        <button className="btn btn-outline-dark" onClick={onClose} style={{ flex: 1 }}>
                            {lang === 'en' ? 'Close' : 'Cerrar'}
                        </button>
                        <button
                            className={`btn ${inCart ? 'btn-outline-dark' : 'btn-primary'}`}
                            style={{ flex: 2 }}
                            onClick={() => { onAddToCart(room); onClose(); }}
                            disabled={inCart}
                        >
                            {inCart ? t.booking.selected : t.booking.select}
                        </button>
                    </div>
                </div>

            </div>

            {/* Lightbox — imagen a pantalla completa */}
            {lightbox && (
                <div className="lightbox" onClick={() => setLightbox(false)}>
                    <button className="lightbox-close" onClick={() => setLightbox(false)}>
                        <X size={20} />
                    </button>

                    <img
                        src={images[imgIndex]}
                        alt={name}
                        className="lightbox-img"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {hasMultiple && (
                        <>
                            <button className="lightbox-arrow lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }}>
                                <ChevronLeft size={24} />
                            </button>
                            <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }}>
                                <ChevronRight size={24} />
                            </button>
                            <div className="lightbox-counter">
                                {imgIndex + 1} / {images.length}
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
