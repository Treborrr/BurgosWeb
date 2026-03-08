import { useState } from 'react';
import { rooms } from '../data/rooms';
import { useLang } from '../context/LanguageContext';
import RoomModal from './RoomModal';
import { ShoppingCart, User, Calendar, Check, X } from 'lucide-react';

const today = new Date().toISOString().split('T')[0];

export default function BookingSystem() {
    const { lang, t } = useLang();
    const [cart, setCart] = useState([]);
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [guests, setGuests] = useState(1);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [showAllRooms, setShowAllRooms] = useState(false);

    const addToCart = (room) => { if (!cart.find(i => i.id === room.id)) setCart([...cart, room]); };
    const removeFromCart = (id) => setCart(cart.filter(i => i.id !== id));
    const total = () => cart.reduce((s, r) => s + r.price, 0);

    const sendWhatsApp = () => {
        if (!checkin || !checkout) { alert(t.booking.alert_dates); return; }
        if (!cart.length)           { alert(t.booking.alert_rooms); return; }
        const safeGuests  = Math.max(1, Math.min(39, parseInt(guests, 10) || 1));
        const roomNames   = cart.map(r => r.name).join(', ');
        const plainMsg    = t.booking.whatsapp(checkin, checkout, safeGuests, roomNames, total());
        const encoded     = encodeURIComponent(plainMsg);
        window.open(`https://wa.me/51941944562?text=${encoded}`, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="habitaciones" className="booking-section">
            <div className="container">

                {/* Barra de búsqueda */}
                <div className="search-bar glass">
                    <div className="search-item">
                        <label><Calendar size={14} /> {t.booking.checkin}</label>
                        <input
                            type="date"
                            value={checkin}
                            min={today}
                            onChange={(e) => { setCheckin(e.target.value); if (checkout && e.target.value >= checkout) setCheckout(''); }}
                        />
                    </div>
                    <div className="search-item">
                        <label><Calendar size={14} /> {t.booking.checkout}</label>
                        <input
                            type="date"
                            value={checkout}
                            min={checkin || today}
                            onChange={(e) => setCheckout(e.target.value)}
                        />
                    </div>
                    <div className="search-item">
                        <label><User size={14} /> {t.booking.guests}</label>
                        <input
                            type="number" min="1" max="39"
                            value={guests}
                            onChange={(e) => setGuests(Math.max(1, Math.min(39, parseInt(e.target.value, 10) || 1)))}
                            placeholder="1"
                        />
                    </div>
                </div>

                {/* Encabezado */}
                <div className="section-header">
                    <span className="section-eyebrow">{t.booking.eyebrow}</span>
                    <h2 className="text-gradient-gold">{t.booking.title}</h2>
                    <p>{t.booking.subtitle}</p>
                    <div className="section-divider" />
                </div>

                {/* Grid de habitaciones */}
                <div className="room-grid">
                    {(showAllRooms ? rooms : rooms.slice(0, 5)).map(room => {
                        const inCart = cart.find(i => i.id === room.id);
                        const name = lang === 'en' ? room.nameEn : room.name;
                        const desc = lang === 'en' ? room.descriptionEn : room.description;
                        return (
                            <div key={room.id} className="room-card" onClick={() => setSelectedRoom(room)} style={{ cursor: 'pointer' }}>
                                <div
                                    className="room-image"
                                    style={{
                                        backgroundImage: room.image ? `url(${room.image})` : 'none',
                                        backgroundColor: 'var(--color-surface-3)',
                                    }}
                                >
                                    {!room.image && (
                                        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-text-faint)' }}>
                                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                                            <span style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>Foto próximamente</span>
                                        </div>
                                    )}
                                    <div className="room-overlay-grad" />
                                    <div className="room-price">S/{room.price}<span>{t.booking.per_night}</span></div>
                                </div>
                                <div className="room-info">
                                    <h3>{name}</h3>
                                    <p>{desc}</p>
                                    <div className="room-amenities">
                                        {room.amenities.slice(0, 3).map(a => <span key={a}><Check size={11} /> {a}</span>)}
                                    </div>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); addToCart(room); }}
                                        className={`btn ${inCart ? 'btn-outline-dark' : 'btn-primary'}`}
                                        style={{ width: '100%' }}
                                    >
                                        {inCart ? t.booking.selected : t.booking.select}
                                    </button>
                                </div>
                            </div>
                        );
                    })}

                    {/* Tarjeta de "Ver Más" / "Ver Menos" */}
                    <div
                        className="room-card card-view-more"
                        onClick={() => setShowAllRooms(!showAllRooms)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            minHeight: '450px',
                            background: showAllRooms ? 'var(--color-surface-3)' : 'var(--color-surface)',
                            border: '2px dashed var(--color-gold-border)'
                        }}
                    >
                        <div style={{ padding: '2rem', textAlign: 'center' }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '50%',
                                background: 'var(--color-gold-dim)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                color: 'var(--color-gold)',
                                transition: 'transform 0.4s ease'
                            }} className="icon-view-more">
                                {showAllRooms ? <X size={32} /> : <ShoppingCart size={32} />}
                            </div>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--color-gold)' }}>
                                {showAllRooms ? t.booking.show_less || 'Ver Menos' : t.booking.view_more || 'Ver Todas las Habitaciones'}
                            </h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                                {showAllRooms
                                    ? (lang === 'es' ? 'Ocultar listado extendido' : 'Hide extended list')
                                    : (lang === 'es' ? `Descubre nuestras ${rooms.length - 5} opciones adicionales` : `Discover our ${rooms.length - 5} additional options`)
                                }
                            </p>
                        </div>
                    </div>
                </div>

                {/* Modal de habitación */}
                {selectedRoom && (
                    <RoomModal
                        room={selectedRoom}
                        inCart={!!cart.find(i => i.id === selectedRoom.id)}
                        onClose={() => setSelectedRoom(null)}
                        onAddToCart={addToCart}
                    />
                )}
            </div>

            {/* Botón carrito */}
            {cart.length > 0 && (
                <button className="cart-toggle" onClick={() => setIsCartOpen(true)}>
                    <ShoppingCart size={22} />
                    <span className="cart-count">{cart.length}</span>
                </button>
            )}

            {/* Sidebar carrito */}
            {isCartOpen && (
                <div className="cart-modal" onClick={(e) => e.target === e.currentTarget && setIsCartOpen(false)}>
                    <div className="cart-content animate-fade-in">
                        <div className="cart-header">
                            <h3>{t.booking.cart_title}</h3>
                            <button onClick={() => setIsCartOpen(false)}><X size={16} /></button>
                        </div>
                        <div className="cart-items">
                            {cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div>
                                        <h4>{lang === 'en' ? item.nameEn : item.name}</h4>
                                        <p>S/{item.price}{t.booking.per_night}</p>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)}><X size={14} /></button>
                                </div>
                            ))}
                        </div>
                        <div className="cart-footer">
                            <div className="cart-total">
                                <span>{t.booking.total}</span>
                                <span>S/{total()}</span>
                            </div>
                            <button className="btn btn-primary" style={{ width: '100%' }} onClick={sendWhatsApp}>
                                {t.booking.confirm}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
