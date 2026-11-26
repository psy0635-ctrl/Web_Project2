import ProductImage from './ProductImage';
import { formatPrice } from './shoppingData';

export default function ProductDetail({ product, onBack, headingRef }) {
    return (
        <section className="mode-product-detail" aria-labelledby="product-title">
            <button type="button" className="mode-back" onClick={onBack}>← 상품 목록으로</button>
            <div className="mode-detail-grid">
                <div>
                    <div className="mode-detail-photo"><ProductImage key={product.id} product={product} /></div>
                    <p className="mode-photo-credit">상품 사진: UNIQLO 공식 이미지 · 상세 참고 사진은 색상이 다를 수 있습니다.</p>
                </div>
                <div className="mode-detail-info">
                    <p className="mode-kicker">{product.brand} / {product.tag}</p>
                    <h2 id="product-title" tabIndex={-1} ref={headingRef}>{product.title}</h2>
                    <p className="mode-english">{product.english}</p>
                    <p className="mode-detail-price">{formatPrice(product.price)}</p>
                    <p className="mode-price-note">{product.priceNote} · 실시간 가격 아님</p>
                    <p className="mode-description">{product.description}</p>
                    <dl className="mode-specs">
                        <div><dt>상품번호</dt><dd>{product.code}</dd></div>
                        <div><dt>브랜드</dt><dd>{product.brand}</dd></div>
                        <div><dt>대표 색상</dt><dd>{product.color}</dd></div>
                        <div><dt>표기 사이즈</dt><dd>{product.sizes}</dd></div>
                        <div><dt>소재</dt><dd>{product.material}</dd></div>
                        <div><dt>관리 방법</dt><dd>{product.care}</dd></div>
                    </dl>
                    <div className="mode-style-tip"><strong>EDITOR'S STYLING TIP</strong><p>{product.tip}</p></div>
                    <a className="mode-store-link" href={product.url} target="_blank" rel="noopener noreferrer">공식 상품 페이지 보기 ↗</a>
                    <p className="mode-price-note">실제 구매 가능 여부, 가격, 색상 및 사이즈 재고는 판매처에서 확인해 주세요.</p>
                </div>
            </div>
        </section>
    );
}
