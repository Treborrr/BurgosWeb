import { LanguageProvider } from '../context/LanguageContext';
import App from '../App';
import { buildMeta, buildLinks, buildStructuredData } from '../seo';

export function meta() {
    return buildMeta('es');
}

export function links() {
    return buildLinks('es');
}

export default function HomeEs() {
    return (
        <LanguageProvider lang="es">
            <App />
            {buildStructuredData('es').map((data, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
                />
            ))}
        </LanguageProvider>
    );
}
