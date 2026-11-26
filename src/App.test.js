import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import ProfileCard from './13/ProfileCard';
import { THEME_KEY } from './shopping-landing/ShoppingLanding';

beforeEach(() => {
    window.history.replaceState(null, '', '#/shopping');
    localStorage.removeItem(THEME_KEY);
});

afterEach(() => {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
    localStorage.removeItem(THEME_KEY);
});

test('renders shopping landing and switches light and dark themes', () => {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
    const { container } = render(<App />);
    const toggle = screen.getByRole('button', { name: '다크 모드' });
    const page = container.querySelector('.shopping-landing');

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('The Shopping Edit');
    expect(screen.getAllByRole('article')).toHaveLength(6);
    expect(page).toHaveAttribute('data-theme', 'light');
    expect(toggle).toHaveAttribute('aria-pressed', 'false');

    fireEvent.click(toggle);
    expect(page).toHaveAttribute('data-theme', 'dark');
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
    expect(localStorage.getItem(THEME_KEY)).toBe('dark');

    fireEvent.click(toggle);
    expect(page).toHaveAttribute('data-theme', 'light');
    expect(toggle).toHaveAttribute('aria-pressed', 'false');
});

test('restores the saved theme when the page is opened again', () => {
    const first = render(<App />);
    fireEvent.click(screen.getByRole('button', { name: '다크 모드' }));
    first.unmount();
    const second = render(<App />);
    expect(second.container.querySelector('.shopping-landing')).toHaveAttribute('data-theme', 'dark');
});

test('filters products and switches between grid and list', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByRole('button', { name: '니트웨어' }));
    expect(screen.getAllByRole('article')).toHaveLength(2);
    expect(screen.getByRole('status')).toHaveTextContent('02 PRODUCTS');
    fireEvent.click(screen.getByRole('button', { name: '목록 보기' }));
    expect(container.querySelector('.mode-cards')).toHaveClass('mode-list');
    fireEvent.click(screen.getByRole('button', { name: '카드 보기' }));
    expect(container.querySelector('.mode-cards')).toHaveClass('mode-grid');
    fireEvent.click(screen.getByRole('button', { name: '전체 보기' }));
    expect(screen.getAllByRole('article')).toHaveLength(6);
});

test('opens actual product details and returns to the selected category', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: '니트웨어' }));
    fireEvent.click(screen.getByRole('button', { name: '캐시미어크루넥스웨터 상세 보기' }));
    expect(screen.getByRole('heading', { name: '캐시미어크루넥스웨터' })).toBeInTheDocument();
    expect(screen.getByText('485318')).toBeInTheDocument();
    expect(screen.getByText('캐시미어 100%')).toBeInTheDocument();
    expect(screen.getByText('129,000원')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /공식 상품 페이지 보기/ })).toHaveAttribute('href',
        'https://store-kr.uniqlo.com/kr/ko/products/E465734-000/00?colorDisplayCode=03');
    fireEvent.click(screen.getByRole('button', { name: '상품 목록으로', exact: false }));
    expect(screen.getAllByRole('article')).toHaveLength(2);
});

test('handles a failed image without hiding the product', () => {
    render(<App />);
    fireEvent.error(screen.getByRole('img', { name: /더블페이스릴랙스롱코트 BLACK/ }));
    expect(screen.getByRole('img', { name: '더블페이스릴랙스롱코트 사진 불러오기 실패' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: '더블페이스릴랙스롱코트 상세 보기' }));
    expect(screen.getByText('487423')).toBeInTheDocument();
});

// 기존 홈페이지 테스트는 새 주소에서 계속 확인한다.
test('renders the fashion homepage and switches from dark to light and back', () => {
    window.history.replaceState(null, '', '#/fashion-home');
    render(<App />);

    const toggle = screen.getByRole('button', { name: '어두운 테마' });
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Find your\s*own fit/);
    expect(screen.getAllByRole('article')).toHaveLength(3);
    expect(screen.getByRole('link', { name: '내 체형 진단하기' }))
        .toHaveAttribute('href', '#/fit-finder?section=body-type-quiz');
    expect(toggle).toHaveAttribute('aria-pressed', 'true');

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-pressed', 'false');
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
});

test('renders seven stay cards and lets each favorite be toggled independently', () => {
    render(<ProfileCard />);

    expect(screen.getAllByRole('article')).toHaveLength(7);
    const firstFavorite = screen.getByRole('button', { name: '해운대 라운지 찜하기' });
    const secondFavorite = screen.getByRole('button', { name: '광안 모닝하우스 찜하기' });

    fireEvent.click(firstFavorite);
    expect(firstFavorite).toHaveAttribute('aria-pressed', 'true');
    expect(secondFavorite).toHaveAttribute('aria-pressed', 'false');
    fireEvent.click(firstFavorite);
    expect(firstFavorite).toHaveAttribute('aria-pressed', 'false');
});
