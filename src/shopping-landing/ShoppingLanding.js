import { useEffect, useRef, useState } from 'react';
import { categories, products, formatPrice } from './shoppingData';
import { HOME_HASH } from '../fit-finder/routes';
import ProductImage from './ProductImage';
import ProductDetail from './ProductDetail';
import './ShoppingLanding.css';

export const THEME_KEY = 'mode-edit-theme';

function getInitialTheme() {
    try {
        return localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light';
    } catch {
        return 'light';
    }
}

export default function ShoppingLanding() {
    const [theme, setTheme] = useState(getInitialTheme);
    const [category, setCategory] = useState('all');
    const [layout, setLayout] = useState('grid');
    const [selectedId, setSelectedId] = useState(null);
    const headingRef = useRef(null);
    const previousId = useRef(null);
    const isDark = theme === 'dark';

    useEffect(() => {
        try { localStorage.setItem(THEME_KEY, theme); } catch { /* 저장이 불가능해도 화면 전환은 유지 */ }
    }, [theme]);

    const visibleProducts = category === 'all' ? products : products.filter(product => product.category === category);
    const selectedProduct = products.find(product => product.id === selectedId);

    // 상세 화면으로 이동하면 제목에 포커스를 주고, 목록 복귀 시 원래 카드로 돌아간다.
    useEffect(() => {
        if (selectedId) {
            previousId.current = selectedId;
            headingRef.current?.focus();
            headingRef.current?.scrollIntoView?.({ block: 'start' });
        } else if (previousId.current) {
            document.getElementById(`product-${previousId.current}`)?.focus();
            previousId.current = null;
        }
    }, [selectedId]);

    function chooseCategory(id) {
        previousId.current = null;
        setCategory(id);
        setSelectedId(null);
    }

    function goToProducts(id) {
        chooseCategory(id);
        document.getElementById('mode-products')?.scrollIntoView?.({ block: 'start' });
    }

    return (
        <div className="shopping-landing" data-theme={theme}>
            <header className="mode-header">
                <div className="mode-header-inner">
                    <a className="mode-logo" href="#/shopping" onClick={() => chooseCategory('all')}>MODE<span>/</span>EDIT</a>
                    <nav className="mode-nav" aria-label="주 메뉴">
                        <button type="button" aria-pressed={category === 'all'} onClick={() => goToProducts('all')}>쇼핑 정보</button>
                        <button type="button" aria-pressed={category === 'outer'} onClick={() => goToProducts('outer')}>아우터</button>
                        <button type="button" aria-pressed={category === 'bag'} onClick={() => goToProducts('bag')}>액세서리</button>
                        <a href={HOME_HASH}>FIT FINDER</a>
                    </nav>
                    <button type="button" className="mode-theme" aria-label="다크 모드" aria-pressed={isDark}
                            onClick={() => setTheme(current => current === 'light' ? 'dark' : 'light')}>
                        <span aria-hidden="true">{isDark ? '☾' : '☀'}</span><span>{isDark ? 'DARK' : 'LIGHT'}</span>
                        <span className="mode-switch" aria-hidden="true"><span /></span>
                    </button>
                </div>
            </header>
            <main className="mode-container">
                <div className="mode-breadcrumb">HOME <span>/</span> SHOPPING EDIT{selectedProduct && ' / PRODUCT'}</div>
                <section className="mode-hero" aria-labelledby="mode-title">
                    <p className="mode-kicker">THE WINTER ISSUE &nbsp; / &nbsp; 2026</p>
                    <h1 id="mode-title">The Shopping Edit<span>.</span></h1>
                    <p className="mode-intro">지금의 계절, 나만의 스타일을 발견하는 순간.</p>
                    <button type="button" className="mode-hero-link" onClick={() => goToProducts('all')}>이번 시즌 둘러보기 <span aria-hidden="true">↓</span></button>
                </section>
                <section id="mode-products" className="mode-content" aria-label="쇼핑 정보">
                    <aside className="mode-sidebar" aria-label="카테고리">
                        <p className="mode-kicker">EXPLORE / 01</p><h2>쇼핑 정보</h2>
                        <div className="mode-filters">
                            {categories.map(item => <button key={item.id} type="button" aria-pressed={category === item.id} onClick={() => chooseCategory(item.id)}>
                                {item.label}<span aria-hidden="true">{category === item.id ? '↗' : '—'}</span>
                            </button>)}
                        </div>
                        <p className="mode-sidebar-note">A curated selection.<br/>당신의 취향을 위한 작은 발견.</p>
                    </aside>
                    <div className="mode-results">
                        {selectedProduct ? <ProductDetail product={selectedProduct} onBack={() => setSelectedId(null)} headingRef={headingRef} /> : <>
                            <div className="mode-toolbar">
                                <p role="status">{String(visibleProducts.length).padStart(2, '0')} PRODUCTS</p>
                                <div className="mode-layout" role="group" aria-label="보기 방식">
                                    <button type="button" aria-label="카드 보기" aria-pressed={layout === 'grid'} onClick={() => setLayout('grid')}>▦</button>
                                    <button type="button" aria-label="목록 보기" aria-pressed={layout === 'list'} onClick={() => setLayout('list')}>☰</button>
                                </div>
                            </div>
                            <div className={`mode-cards mode-${layout}`}>
                                {visibleProducts.map(product => (
                                    <article className="mode-card" key={product.id}>
                                        <button id={`product-${product.id}`} type="button" className="mode-product-button" aria-label={`${product.title} 상세 보기`} onClick={() => setSelectedId(product.id)}>
                                            <span className="mode-card-image">
                                                <ProductImage product={product} />
                                                <span className="mode-card-badge">{product.tag}</span><span className="mode-card-arrow" aria-hidden="true">↗</span>
                                            </span>
                                            <span className="mode-card-text">
                                                <span className="mode-card-tag">{product.brand} / {product.english}</span>
                                                <span className="mode-product-title">{product.title}</span>
                                                <span className="mode-product-price">{formatPrice(product.price)}{product.price !== null && <small className="mode-reference-price"> 참고가</small>}</span>
                                            </span>
                                        </button>
                                    </article>
                                ))}
                            </div>
                            <p className="mode-catalog-note">공식 상품 자료를 참고한 학습용 큐레이션입니다. 표시 가격은 실시간 정보가 아니며, 실제 판매 및 재고는 판매처에서 확인해 주세요.</p>
                        </>}
                    </div>
                </section>
            </main>
            <footer className="mode-footer">
                <div><strong>MODE / EDIT</strong><p>Fashion is a way to express yourself.</p></div>
                <div><a href="#/fashion-home">기존 패션 홈페이지</a><p>React 학습용 · UNIQLO 및 신세계와 제휴하지 않은 가상 서비스</p></div>
            </footer>
        </div>
    );
}
