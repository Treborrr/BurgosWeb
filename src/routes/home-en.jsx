import { LanguageProvider } from '../context/LanguageContext';
import App from '../App';
import { buildMeta, buildLinks, buildStructuredData } from '../seo';

export function meta() {
    return buildMeta('en');
}

export function links() {
    return buildLinks('en');
}

export default function HomeEn() {
    return (
        <LanguageProvider lang="en">
            <App />
            {buildStructuredData('en').map((data, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
                />
            ))}
        </LanguageProvider>
    );
}
