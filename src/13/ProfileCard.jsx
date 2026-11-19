import React, { useState } from 'react';
import Card from './Card';

const stays = [
    { id: 'haeundae', name: '해운대 라운지', location: '해운대구', type: '아파트', dates: '12월 4일~6일', price: 290000, rating: '4.96' },
    { id: 'gwangalli', name: '광안 모닝하우스', location: '수영구', type: '독채', dates: '12월 4일~6일', price: 240000, rating: '4.92' },
    { id: 'yeongdo', name: '영도 작은 오두막', location: '영도구', type: '오두막', dates: '12월 11일~13일', price: 198000, rating: '4.98' },
    { id: 'jeonpo', name: '전포 스튜디오', location: '부산진구', type: '스튜디오', dates: '12월 11일~13일', price: 176000, rating: '4.89' },
    { id: 'dongnae', name: '동래 볕 드는 집', location: '동래구', type: '게스트하우스', dates: '12월 18일~20일', price: 210000, rating: '4.94' },
    { id: 'gijang', name: '기장 정원 빌라', location: '기장군', type: '빌라', dates: '12월 18일~20일', price: 348000, rating: '4.97' },
    { id: 'songjeong', name: '송정의 느린 오후', location: '해운대구', type: '아파트', dates: '12월 25일~27일', price: 268000, rating: '4.91' },
];

const priceFormatter = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
});

function StayCard({ stay }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const { id, name, location, type, dates, price, rating } = stay;

    return (
        <Card
            title={name}
            media={
                <div className="stay-card__media">
                    <img src={`${process.env.PUBLIC_URL}/stays/${id}.jpg`} alt="" />
                    <button
                        type="button"
                        className="stay-card__favorite"
                        aria-label={`${name} 찜하기`}
                        aria-pressed={isFavorite}
                        onClick={() => setIsFavorite((previous) => !previous)}
                    >
                        <span aria-hidden="true">{isFavorite ? '♥' : '♡'}</span>
                    </button>
                </div>
            }
        >
            <p className="stay-card__location">{location} · {type}</p>
            <p className="stay-card__dates">{dates}</p>
            <div className="stay-card__summary">
                <p><strong>{priceFormatter.format(price)}</strong> <span>2박</span></p>
                <p className="stay-card__rating">
                    <span role="img" aria-label={`평점 5점 만점에 ${rating}점`}>★ {rating}</span>
                </p>
            </div>
        </Card>
    );
}

export default function ProfileCard() {
    return (
        <main className="stays-page">
            <section className="stays-section" aria-labelledby="stays-title">
                <header className="stays-section__header">
                    <h1 id="stays-title">부산에서 머물 곳</h1>
                    <p>숙소 카드 예시 {stays.length}개</p>
                </header>
                <ul className="stays-grid">
                    {stays.map((stay) => (
                        <li key={stay.id}>
                            <StayCard stay={stay} />
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
