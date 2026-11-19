import React from 'react';
import './Card.css';

function Card({ title, background, media, children }) {
    return (
        <article className="stay-card" style={{ background }}>
            {media}
            <div className="stay-card__body">
                {title && <h2 className="stay-card__title">{title}</h2>}
                {children}
            </div>
        </article>
    );
}

export default Card;
