import { translations } from './data/translations';
import { rooms } from './data/rooms';

export const SITE_URL = 'https://hospedajeburgos.com';

// Rango de precios real, derivado de data/rooms.js, para que el schema.org
// (priceRange) nunca quede desincronizado de los precios que ve el usuario.
const roomPrices = rooms.map((r) => r.price);
const MIN_ROOM_PRICE = Math.min(...roomPrices);
const MAX_ROOM_PRICE = Math.max(...roomPrices);

const paths = { es: '/', en: '/en' };

const copy = {
    es: {
        title: 'Casa Hospedaje Burgos | Hospedaje en Chachapoyas cerca a Kuelap y Gocta',
        description: 'Casa Hospedaje en el corazón de Chachapoyas. Habitaciones modernas con encanto colonial, a solo 5 cuadras de la Plaza de Armas. Reserva hoy tu estadía en el Amazonas peruano.',
        keywords: 'hospedaje Chachapoyas, hotel Chachapoyas Amazonas, alojamiento Chachapoyas, Casa Hospedaje Burgos, Kuelap, Gocta, hotel cerca plaza de armas Chachapoyas',
        ogTitle: 'Casa Hospedaje Burgos | Tu hogar en Chachapoyas',
        ogDescription: 'Descubre la elegancia colonial y el confort moderno. El mejor punto de partida para explorar Kuelap y Gocta.',
        locale: 'es_PE',
    },
    en: {
        title: 'Casa Hospedaje Burgos | Guesthouse in Chachapoyas near Kuelap & Gocta',
        description: 'Guesthouse in the heart of Chachapoyas. Modern rooms with colonial charm, just 5 blocks from the main square. Book your stay in the Peruvian Amazon today.',
        keywords: 'Chachapoyas hotel, Chachapoyas guesthouse, Amazonas Peru lodging, Casa Hospedaje Burgos, Kuelap, Gocta, hotel near Chachapoyas main square',
        ogTitle: 'Casa Hospedaje Burgos | Your home in Chachapoyas',
        ogDescription: 'Discover colonial elegance and modern comfort. The best starting point to explore Kuelap and Gocta.',
        locale: 'en_US',
    },
};

export function buildMeta(lang) {
    const c = copy[lang];
    const url = `${SITE_URL}${paths[lang]}`;
    const image = `${SITE_URL}/images/og-image.webp`;

    return [
        { title: c.title },
        { name: 'description', content: c.description },
        { name: 'keywords', content: c.keywords },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: url },
        { property: 'og:title', content: c.ogTitle },
        { property: 'og:description', content: c.ogDescription },
        { property: 'og:image', content: image },
        { property: 'og:locale', content: c.locale },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: url },
        { property: 'twitter:title', content: c.ogTitle },
        { property: 'twitter:description', content: c.ogDescription },
        { property: 'twitter:image', content: image },
    ];
}

export function buildLinks(lang) {
    return [
        { rel: 'canonical', href: `${SITE_URL}${paths[lang]}` },
        { rel: 'alternate', hrefLang: 'es', href: `${SITE_URL}/` },
        { rel: 'alternate', hrefLang: 'en', href: `${SITE_URL}/en` },
        { rel: 'alternate', hrefLang: 'x-default', href: `${SITE_URL}/` },
    ];
}

// JSON-LD: se genera por idioma para que coincida con el contenido visible en cada página
export function buildStructuredData(lang) {
    const t = translations[lang];
    const c = copy[lang];
    const ratings = t.reviews.items.map((r) => r.rating);
    const avg = ratings.reduce((s, r) => s + r, 0) / ratings.length;

    const hotelJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Hotel',
        name: 'Casa Hospedaje Burgos',
        description: c.description,
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Jr. Hermosura 622',
            addressLocality: 'Chachapoyas',
            addressRegion: 'Amazonas',
            addressCountry: 'PE',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '-6.229897',
            longitude: '-77.867456',
        },
        url: `${SITE_URL}${paths[lang]}`,
        telephone: '+51941944562',
        priceRange: `S/${MIN_ROOM_PRICE} - S/${MAX_ROOM_PRICE}`,
        image: `${SITE_URL}/images/og-image.webp`,
        sameAs: [
            'https://www.facebook.com/plazuelaburgos',
            'https://www.tiktok.com/@hospedaje.burgos',
            'https://www.airbnb.com.pe/users/profile/1468587611313525214?previous_page_name=PdpHotel',
        ],
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: avg.toFixed(1),
            reviewCount: ratings.length,
        },
        review: t.reviews.items.map((r) => ({
            '@type': 'Review',
            author: { '@type': 'Person', name: r.name },
            reviewRating: { '@type': 'Rating', ratingValue: r.rating },
            reviewBody: r.text,
        })),
    };

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: t.faq.items.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
    };

    return [hotelJsonLd, faqJsonLd];
}
