import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from 'react-router';
import './index.css';
import './analytics';
import heroLCP from './assets/images/city/FortalezaKuelapBest.webp';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function links() {
  return [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    // Primera imagen del hero: es el LCP de la página en toda visita inicial
    { rel: 'preload', as: 'image', href: heroLCP, type: 'image/webp', fetchPriority: 'high' },
  ];
}

export function Layout({ children }) {
  // Determina el idioma a partir de la ruta actual (/en → inglés, resto → español)
  // para que <html lang> coincida siempre con el contenido visible de la página.
  const location = useLocation();
  const lang = location.pathname.startsWith('/en') ? 'en' : 'es';

  return (
    <html lang={lang}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Casa Hospedaje Burgos" />
        <meta name="robots" content="index, follow" />

        {/* Security headers (meta) — reforzados también vía public/_headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="
            default-src 'self';
            script-src 'self' https://www.googletagmanager.com;
            style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
            font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;
            img-src 'self' data: blob: https:;
            frame-src https://www.google.com;
            connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com;
            object-src 'none';
            base-uri 'self';
            form-action 'self';
            upgrade-insecure-requests;
          "
        />

        <Meta />
        <Links />

        {/*
          Google Analytics (GA4) — se activa solo si VITE_GA_MEASUREMENT_ID está definida en el build.
          El init de dataLayer/gtag vive en './analytics' (bundle propio, servido desde 'self')
          para no depender de script-src 'unsafe-inline' en el CSP.
        */}
        {GA_MEASUREMENT_ID && (
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
        )}
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}

export function ErrorBoundary({ error }) {
  let message = 'Oops!';
  let details = 'Ocurrió un error inesperado.';
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details = error.status === 404
      ? 'La página que buscas no existe.'
      : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre style={{ textAlign: 'left', overflowX: 'auto' }}>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
