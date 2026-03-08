import { Star } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function Reviews() {
    const { t } = useLang();

    return (
        <section className="reviews-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">{t.reviews.eyebrow}</span>
                    <h2 className="text-gradient-gold">{t.reviews.title}</h2>
                    <div className="section-divider" />
                </div>

                <div className="reviews-grid">
                    {t.reviews.items.map((review, i) => (
                        <div key={i} className="review-card">
                            <div className="review-rating">
                                {[...Array(review.rating)].map((_, idx) => (
                                    <Star key={idx} size={16} fill="var(--color-gold)" color="var(--color-gold)" />
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-footer">
                                <div className="review-author">
                                    <strong>{review.name}</strong>
                                    <span>{review.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
