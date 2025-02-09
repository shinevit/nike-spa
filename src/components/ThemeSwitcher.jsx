import { useTheme } from '../context/ThemeContext';
import { sun, moon } from '../assets/icons';
import SvgImage from './SvgImage';
import { useRippleEffect } from '../hooks/useRippleEffect';


const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();
    const onClickWithRipple = useRippleEffect(toggleTheme);

    return (
        <div>
            <button type="button" className="theme-switcher" onClick={onClickWithRipple}>
                <span className="flex shrink-0 justify-center items-center size-8">
                    <SvgImage src={theme==="light" ? sun : moon} />
                </span>
            </button>
        </div>
    );
};

export default ThemeSwitcher;