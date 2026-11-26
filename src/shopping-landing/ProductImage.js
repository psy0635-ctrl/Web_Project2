import { useState } from 'react';

export default function ProductImage({ product }) {
    const [attempt, setAttempt] = useState(0);
    const images = [product.image, product.fallbackImage].filter(Boolean);

    // 대표 사진에 문제가 생기면 공식 상세 사진을 시도하고, 모두 실패하면 안내한다.
    if (attempt >= images.length) {
        return <span className="mode-image-fallback" role="img" aria-label={`${product.title} 사진 불러오기 실패`}>
            <span aria-hidden="true">◇</span><span>사진을 불러오지 못했습니다.</span><small>공식 판매처에서 확인해 주세요.</small>
        </span>;
    }

    return <img className="mode-product-photo" src={images[attempt]}
                alt={`${product.title} ${attempt === 0 ? product.color : '공식 상세 참고 사진'}`}
                onError={() => setAttempt(current => current + 1)}
                loading="lazy" width="600" height="800" />;
}
