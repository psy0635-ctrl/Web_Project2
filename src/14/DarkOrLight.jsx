import { useState } from 'react';
import ThemeContext from './ThemeContext';
import MainContent from './MainContent';

function DarkOrLight({ children = <MainContent />, initialTheme = 'light' }) {
    const [theme, setTheme] = useState(initialTheme);

    function toggleTheme() {
        setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;
