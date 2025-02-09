import { useTheme } from '../context/ThemeContext';
import { sun, moon } from '../assets/icons';
import SvgImage from './SvgImage';


const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <button type="button" className="theme-switcher font-medium rounded-full
             text-gray-900         bg-gray-200      focus:outline-none
             dark:text-neutral-200 dark:bg-pale-blue" onClick={toggleTheme}>
                <span className="flex shrink-0 justify-center items-center size-8">
                    <SvgImage src={theme==="light" ? sun : moon} />
                </span>
            </button>
        </div>
    );
};

export default ThemeSwitcher;