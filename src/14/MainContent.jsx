import { useContext } from 'react';
import ThemeContext from './ThemeContext';
import './MainContent.css';

function MainContent() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const isDark = theme === 'dark';

    return (
        <main className="theme-page" data-theme={theme}>
            <section className="theme-page__card" aria-labelledby="theme-heading">
                <h1 id="theme-heading">화면 테마</h1>
                <p>버튼을 눌러 화면을 밝게 또는 어둡게 바꿔 보세요.</p>
                <div className="theme-page__controls">
                    <span>현재 테마 · {isDark ? '어둡게' : '밝게'}</span>
                    <button type="button" aria-pressed={isDark} onClick={toggleTheme}>
                        어두운 테마
                    </button>
                </div>
            </section>
        </main>
    );
}

export default MainContent;
