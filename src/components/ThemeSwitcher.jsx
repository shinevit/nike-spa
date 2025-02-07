import { useState, useLayoutEffect } from 'react';
import { sun, moon } from '../assets/icons';
import SvgImage from './SvgImage';


const isDarkTheme = () => localStorage.getItem('theme') === 'dark' ||
    (!("theme" in localStorage) && matchMedia("(prefers-color-scheme: dark)").matches);

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(isDarkTheme() ? 'dark' : 'light');

    useLayoutEffect(() => {
        const rootElement = document.documentElement;
        // Apply theme to the <html> tag
        rootElement.setAttribute('data-theme', theme);
        
        // Store theme in local storage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toogleTheme = () => {
        const newTheme = (theme === "dark") ?  "light" : "dark";
        setTheme(newTheme);
    };

    return (
        <div>
            <button type="button" className="theme-switcher font-medium rounded-full
             text-gray-800         bg-gray-200      focus:outline-none
             dark:text-neutral-200 dark:bg-pale-blue" onClick={toogleTheme}>
                <span className="flex shrink-0 justify-center items-center size-8">
                    <SvgImage src={theme==="light" ? sun : moon} />
                </span>
            </button>
        </div>
    );
};

export default ThemeSwitcher;