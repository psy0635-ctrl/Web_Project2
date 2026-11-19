import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders seven stay cards and lets each favorite be toggled independently', () => {
    render(<App />);

    expect(screen.getAllByRole('article')).toHaveLength(7);
    const firstFavorite = screen.getByRole('button', { name: '해운대 라운지 찜하기' });
    const secondFavorite = screen.getByRole('button', { name: '광안 모닝하우스 찜하기' });

    fireEvent.click(firstFavorite);
    expect(firstFavorite).toHaveAttribute('aria-pressed', 'true');
    expect(secondFavorite).toHaveAttribute('aria-pressed', 'false');

    fireEvent.click(firstFavorite);
    expect(firstFavorite).toHaveAttribute('aria-pressed', 'false');
});
