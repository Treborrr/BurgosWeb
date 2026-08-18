// Inicialización de Google Analytics (GA4) como módulo del bundle propio
// (en vez de <script> inline) para poder servir el sitio sin script-src 'unsafe-inline'.
// Se importa como side-effect en root.jsx. No hace nada durante el prerender en Node
// (no hay `window`) ni si VITE_GA_MEASUREMENT_ID no está definida en el build.
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

if (typeof window !== 'undefined' && GA_MEASUREMENT_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
        window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID);
}
