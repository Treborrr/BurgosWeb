export const translations = {
    es: {
        nav: {
            home: 'Inicio',
            rooms: 'Habitaciones',
            services: 'Servicios',
            location: 'Ubicación',
            book: 'Reservar',
        },
        hero: {
            eyebrow: 'Chachapoyas, Amazonas · Perú',
            subtitle: 'Elegancia colonial y confort moderno en el corazón histórico de Chachapoyas.',
            cta_rooms: 'Ver Habitaciones',
            cta_location: 'Nuestra Ubicación',
        },
        booking: {
            eyebrow: 'Alojamiento',
            title: 'Nuestras Habitaciones',
            subtitle: 'Cada habitación ha sido diseñada para ofrecerte confort y autenticidad colonial.',
            checkin: 'Check-in',
            checkout: 'Check-out',
            guests: 'Huéspedes',
            placeholder: 'dd/mm/aaaa',
            select: 'Seleccionar',
            selected: '✓ Seleccionada',
            cart_title: 'Tu Reserva',
            total: 'Total Estimado',
            confirm: 'Confirmar por WhatsApp',
            per_night: '/noche',
            view_more: 'Ver Más Habitaciones',
            show_less: 'Ver Menos',
            alert_dates: 'Por favor selecciona las fechas de tu estadía.',
            alert_rooms: 'Por favor añade al menos una habitación.',
            whatsapp: (ci, co, g, r, total) =>
                `¡Hola! Me gustaría reservar en Casa Hospedaje Burgos.%0A%0A📅 Fechas: ${ci} al ${co}%0A👥 Personas: ${g}%0A🏨 Habitaciones: ${r}%0A💰 Total estimado: S/${total}%0A%0A¿Tienen disponibilidad?`,
        },
        attractions: {
            eyebrow: 'Turismo',
            title: 'Explora Chachapoyas',
            subtitle: 'Descubre maravillas milenarias partiendo desde nuestro hospedaje.',
            items: [
                { name: 'Fortaleza de Kuelap', desc: 'La ciudad amurallada más importante de la cultura Chachapoyas.' },
                { name: 'Catarata Gocta', desc: 'Una de las caídas de agua más altas y espectaculares del mundo.' },
                { name: 'Sarcófagos de Karajía', desc: 'Impresionantes tumbas milenarias en los acantilados de piedra.' },
                { name: 'Catedral de Chachapoyas', desc: 'Belleza arquitectónica colonial frente a la plaza principal.' },
            ],
        },
        location: {
            eyebrow: 'Dónde estamos',
            title: 'Nuestra Ubicación',
            subtitle: 'Estratégicamente ubicados en el centro histórico para que tu estadía sea placentera y conveniente.',
        },
        faq: {
            eyebrow: 'Información',
            title: 'Preguntas Frecuentes',
            items: [
                { q: '¿Incluye desayuno?', a: 'Actualmente no ofrecemos el servicio de desayuno incluido. Sin embargo, en el primer piso de nuestro edificio encontrará una excelente cafetería independiente, además de una gran variedad de opciones a pocos pasos del hospedaje.' },
                { q: '¿Tienen estacionamiento?', a: 'No contamos con cochera privada, pero es seguro y está permitido estacionar en los exteriores. Al estar en la Plazuela de Burgos, parte del centro histórico, la zona cuenta con resguardo policial las 24 horas.' },
                { q: '¿Cómo llego desde el aeropuerto?', a: 'El aeropuerto cuenta con servicio de taxis de forma regular. Adicionalmente, previa coordinación y sujeta a disponibilidad, podemos enviarle un taxi de nuestra confianza para su traslado.' },
                { q: '¿A qué distancia está la Plaza de Armas?', a: 'Nos encontramos a una corta distancia a pie, exactamente a 5 cuadras (menos de 600 metros) de la Plaza de Armas de Chachapoyas.' },
            ],
        },
        reviews: {
            eyebrow: 'Experiencias',
            title: 'Lo que dicen nuestros huéspedes',
            items: [
                { name: 'Ricardo G.', date: 'Febrero 2024', text: 'Increíble ubicación y atención. Se siente el calor de hogar desde que entras. La vista desde el balcón es inigualable.', rating: 5 },
                { name: 'Elena M.', date: 'Enero 2024', text: 'La limpieza es impecable y el estilo colonial del hospedaje es precioso. Muy cerca de todo en Chachapoyas.', rating: 5 },
                { name: 'James Wilson', date: 'Marzo 2024', text: 'Perfect base for exploring Kuelap. The staff was incredibly helpful with tour recommendations. Will come back!', rating: 5 },
            ]
        },
        footer: {
            brand: 'Casa Hospedaje con encanto colonial en el corazón de Chachapoyas, Amazonas.',
            nav_title: 'Navegación',
            contact_title: 'Contacto',
            rights: 'Todos los derechos reservados.',
        },
    },

    en: {
        nav: {
            home: 'Home',
            rooms: 'Rooms',
            services: 'Services',
            location: 'Location',
            book: 'Book Now',
        },
        hero: {
            eyebrow: 'Chachapoyas, Amazonas · Peru',
            subtitle: 'Colonial elegance and modern comfort in the historic heart of Chachapoyas.',
            cta_rooms: 'View Rooms',
            cta_location: 'Our Location',
        },
        booking: {
            eyebrow: 'Accommodation',
            title: 'Our Rooms',
            subtitle: 'Each room has been designed to offer you comfort and colonial authenticity.',
            checkin: 'Check-in',
            checkout: 'Check-out',
            guests: 'Guests',
            placeholder: 'mm/dd/yyyy',
            select: 'Select Room',
            selected: '✓ Selected',
            cart_title: 'Your Booking',
            total: 'Estimated Total',
            confirm: 'Confirm via WhatsApp',
            per_night: '/night',
            view_more: 'View More Rooms',
            show_less: 'Show Less',
            alert_dates: 'Please select your stay dates.',
            alert_rooms: 'Please add at least one room.',
            whatsapp: (ci, co, g, r, total) =>
                `Hello! I'd like to book at Casa Hospedaje Burgos.%0A%0A📅 Dates: ${ci} to ${co}%0A👥 Guests: ${g}%0A🏨 Rooms: ${r}%0A💰 Estimated total: S/${total}%0A%0ADo you have availability?`,
        },
        attractions: {
            eyebrow: 'Tourism',
            title: 'Explore Chachapoyas',
            subtitle: 'Discover ancient wonders starting from our guesthouse.',
            items: [
                { name: 'Kuelap Fortress', desc: 'The most important walled city of the Chachapoyas culture.' },
                { name: 'Gocta Waterfall', desc: 'One of the highest and most spectacular waterfalls in the world.' },
                { name: 'Karajía Sarcophagi', desc: 'Impressive ancient tombs carved into the stone cliffs.' },
                { name: 'Chachapoyas Cathedral', desc: 'Colonial architectural beauty facing the main plaza.' },
            ],
        },
        location: {
            eyebrow: 'Where we are',
            title: 'Our Location',
            subtitle: 'Strategically located in the historic center to make your stay pleasant and convenient.',
        },
        faq: {
            eyebrow: 'Information',
            title: 'Frequently Asked Questions',
            items: [
                { q: 'Is breakfast included?', a: 'Currently, we do not offer included breakfast. However, you will find an excellent independent coffee shop on the first floor of our building, as well as a wide variety of options just a few steps from the guesthouse.' },
                { q: 'Do you have parking?', a: 'We do not have private parking, but it is permitted and safe to park right outside. Located in the Plazuela de Burgos, part of the historic center, the area features 24-hour police security.' },
                { q: 'How do I get from the airport?', a: 'The airport has regular taxi services. Additionally, with prior coordination and subject to availability, we can arrange for a trusted taxi to pick you up.' },
                { q: 'How far is the Plaza de Armas?', a: 'We are located within a short walking distance, exactly 5 blocks (less than 600 meters) from the Plaza de Armas (Main Square) of Chachapoyas.' },
            ],
        },
        reviews: {
            eyebrow: 'Experiences',
            title: 'Guest Reviews',
            items: [
                { name: 'Ricardo G.', date: 'February 2024', text: 'Amazing location and service. You feel the warmth of home from the moment you walk in. The balcony view is unmatched.', rating: 5 },
                { name: 'Elena M.', date: 'January 2024', text: 'The cleanliness is impeccable and the colonial style is beautiful. Very close to everything in Chachapoyas.', rating: 5 },
                { name: 'James Wilson', date: 'March 2024', text: 'Perfect base for exploring Kuelap. The staff was incredibly helpful with tour recommendations. Will come back!', rating: 5 },
            ]
        },
        footer: {
            brand: 'Casa Hospedaje con colonial charm in the heart of Chachapoyas, Amazonas.',
            nav_title: 'Navigation',
            contact_title: 'Contact',
            rights: 'All rights reserved.',
        },
    },
};
