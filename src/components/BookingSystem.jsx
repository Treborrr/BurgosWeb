import { useState } from 'react';
import { rooms } from '../data/rooms';
import { ShoppingCart, User, Calendar, Check, X } from 'lucide-react';

export default function BookingSystem() {
    const [cart, setCart] = useState([]);
    const [dates, setDates] = useState({ checkin: '', checkout: '' });
    const [guests, setGuests] = useState(1);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (room) => {
        if (!cart.find(item => item.id === room.id)) {
            setCart([...cart, room]);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const calculateTotal = () => cart.reduce((sum, room) => sum + room.price, 0);

    const sendWhatsApp = () => {
        if (!dates.checkin || !dates.checkout) {
            alert('Por favor selecciona las fechas de tu estadía.');
            return;
        }
        if (cart.length === 0) {
            alert('Por favor añade al menos una habitación.');
            return;
        }

        const roomNames = cart.map(r => r.name).join(', ');
        const message =
            `¡Hola! Me gustaría reservar en Casa Hospedaje Burgos.%0A%0A` +
            `📅 Fechas: ${dates.checkin} al ${dates.checkout}%0A` +
            `👥 Personas: ${guests}%0A` +
            `🏨 Habitaciones: ${roomNames}%0A` +
            `💰 Total estimado: S/${calculateTotal()}%0A%0A` +
            `¿Tienen disponibilidad?`;

        window.open(`https://wa.me/51900000000?text=${message}`, '_blank');
    };

    return (
        <section id="habitaciones" className="booking-section">
            <div className="container">

                {/* Barra de búsqueda — se superpone al final del hero */}
                <div className="search-bar glass">
                    <div className="search-item">
                        <label><Calendar size={14} /> Check-in</label>
                        <input
                            type="date"
                            value={dates.checkin}
                            onChange={(e) => setDates({ ...dates, checkin: e.target.value })}
                        />
                    </div>
                    <div className="search-item">
                        <label><Calendar size={14} /> Check-out</label>
                        <input
                            type="date"
                            value={dates.checkout}
                            onChange={(e) => setDates({ ...dates, checkout: e.target.value })}
                        />
                    </div>
                    <div className="search-item">
                        <label><User size={14} /> Huéspedes</label>
                        <select value={guests} onChange={(e) => setGuests(e.target.value)}>
                            {[1, 2, 3, 4, 5, 6].map(n => (
                                <option key={n} value={n}>{n} {n === 1 ? 'Persona' : 'Personas'}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Encabezado de sección */}
                <div className="section-header">
                    <span className="section-eyebrow">Alojamiento</span>
                    <h2 className="text-gradient-gold">Nuestras Habitaciones</h2>
                    <p>Cada habitación ha sido diseñada para ofrecerte confort y autenticidad colonial.</p>
                    <div className="section-divider" />
                </div>

                {/* Grid de habitaciones */}
                <div className="room-grid">
                    {rooms.map(room => {
                        const inCart = cart.find(i => i.id === room.id);
                        return (
                            <div key={room.id} className="room-card">
                                <div
                                    className="room-image"
                                    style={{
                                        backgroundImage: `url(${room.image})`,
                                        backgroundColor: 'var(--color-burgundy-light)',
                                    }}
                                >
                                    <div className="room-overlay-grad" />
                                    <div className="room-price">
                                        S/{room.price}<span>/noche</span>
                                    </div>
                                </div>

                                <div className="room-info">
                                    <h3>{room.name}</h3>
                                    <p>{room.description}</p>
                                    <div className="room-amenities">
                                        {room.amenities.slice(0, 3).map(a => (
                                            <span key={a}><Check size={11} /> {a}</span>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => addToCart(room)}
                                        className={`btn ${inCart ? 'btn-outline-dark' : 'btn-primary'}`}
                                        style={{ width: '100%' }}
                                    >
                                        {inCart ? '✓ Seleccionada' : 'Seleccionar'}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Botón flotante del carrito */}
            {cart.length > 0 && (
                <button className="cart-toggle" onClick={() => setIsCartOpen(true)}>
                    <ShoppingCart size={22} />
                    <span className="cart-count">{cart.length}</span>
                </button>
            )}

            {/* Modal / Sidebar del carrito */}
            {isCartOpen && (
                <div className="cart-modal" onClick={(e) => e.target === e.currentTarget && setIsCartOpen(false)}>
                    <div className="cart-content animate-fade-in">
                        <div className="cart-header">
                            <h3>Tu Reserva</h3>
                            <button onClick={() => setIsCartOpen(false)}>
                                <X size={16} />
                            </button>
                        </div>

                        <div className="cart-items">
                            {cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div>
                                        <h4>{item.name}</h4>
                                        <p>S/{item.price} / noche</p>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)}>
                                        <X size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="cart-footer">
                            <div className="cart-total">
                                <span>Total Estimado</span>
                                <span>S/{calculateTotal()}</span>
                            </div>
                            <button
                                className="btn btn-primary"
                                style={{ width: '100%', justifyContent: 'center' }}
                                onClick={sendWhatsApp}
                            >
                                Confirmar por WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
