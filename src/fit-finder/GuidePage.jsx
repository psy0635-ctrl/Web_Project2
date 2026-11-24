import { useEffect, useState } from 'react';
import { bodyTypes } from './bodyTypes';

const favoritesKey = 'fitfinder_favorites';

function loadFavorites() {
    try {
        const saved = JSON.parse(window.localStorage.getItem(favoritesKey));
        return Array.isArray(saved) ? bodyTypes.map(({ id }) => id).filter(id => saved.includes(id)) : [];
    } catch {
        return [];
    }
}

function GuideCard({ type, favorite, targeted, onToggleFavorite }) {
    const [showNotRecommended, setShowNotRecommended] = useState(false);
    const { id, name, number, image, description, recommended, notRecommended } = type;
    const favoriteAction = favorite ? '즐겨찾기 해제' : '즐겨찾기 추가';
    const cardClass = `image-guide-card${favorite ? ' is-fav' : ''}${targeted ? ' is-targeted' : ''}`;

    return (
        <article className={cardClass} id={id} aria-labelledby={`${id}-title`} tabIndex={-1}>
            <div className="card-bg">
                <img src={image} alt={id === 'inverted' ? 'Inverted Triangle style' : `${name} style`} />
            </div>
            <button
                type="button"
                className={favorite ? 'fav-btn is-fav' : 'fav-btn'}
                title={favoriteAction}
                aria-label={`${name} 즐겨찾기`}
                aria-pressed={favorite}
                onClick={() => onToggleFavorite(id)}
            >
                ♥
            </button>
            <span>{number}</span>
            <h3 id={`${id}-title`}>{name}</h3>
            <p>{description}</p>
            <div className="fit-box" id={`${id}-fit`} aria-live="polite">
                <h4>{showNotRecommended ? '비추천 핏' : '추천 핏'}</h4>
                <p>{showNotRecommended ? notRecommended : recommended}</p>
            </div>
            <button
                type="button"
                className={showNotRecommended ? 'toggle-fit-btn showing-bad' : 'toggle-fit-btn'}
                aria-controls={`${id}-fit`}
                onClick={() => setShowNotRecommended(previous => !previous)}
            >
                {showNotRecommended ? '추천 핏 보기' : '비추천 핏 보기'}
            </button>
        </article>
    );
}

export default function GuidePage({ targetId }) {
    const [favorites, setFavorites] = useState(loadFavorites);

    useEffect(() => {
        try {
            window.localStorage.setItem(favoritesKey, JSON.stringify(favorites));
        } catch {
            // Keep favorites usable in the current page if storage is blocked.
        }
    }, [favorites]);

    function toggleFavorite(id) {
        setFavorites(previous => previous.includes(id) ? previous.filter(item => item !== id) : [...previous, id]);
    }

    return (
        <>
            <main className="guide-section">
                <h2>Find your best fit.</h2>
                <p>체형별로 어울리는 핏과 피해야 할 핏을 한눈에 확인하세요.</p>
                <div className="fav-counter" aria-live="polite">
                    <span className="fav-heart-icon" aria-hidden="true">♥</span>
                    <span>내 즐겨찾기 (<span className="fav-count-num">{favorites.length}</span>)</span>
                </div>
                <div className="guide-grid">
                    {bodyTypes.map(type => (
                        <GuideCard
                            key={type.id}
                            type={type}
                            favorite={favorites.includes(type.id)}
                            targeted={targetId === type.id}
                            onToggleFavorite={toggleFavorite}
                        />
                    ))}
                </div>
            </main>
            <footer className="footer">© 2026 FIT FINDER</footer>
        </>
    );
}
