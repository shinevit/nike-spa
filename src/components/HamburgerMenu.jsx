import { useEffect, useRef } from 'react';
import SvgImage from './SvgImage';
import { hamburger, cross } from '../assets/icons';
import { navLinks } from '../data';
import ThemeSwitcher from './ThemeSwitcher';
import './HamburgerMenu.css';


const HamburgerMenu = () => {
    const hamburgerInputRef = useRef(null);
    const sidebarRef = useRef(null);

    const handleOverlayClick = () => {
        if (hamburgerInputRef.current &&
            hamburgerInputRef.current.checked) {
            hamburgerInputRef.current.checked = false;
        }
    };

    useEffect(() => {
        const sidebar = sidebarRef.current;
        const hamburgerInput = hamburgerInputRef.current;
        if (!sidebar || !hamburgerInput) {
            return;
        }

        const observer = new IntersectionObserver(entries => {
            if (entries.length > 0 && !entries[0].isIntersecting) { // Sidebar is invisible
                if (hamburgerInput) {
                    hamburgerInput.checked = false; // Uncheck the hamburger input
                }
            }
        });
        
        observer.observe(sidebar);

        return () => {
            if (observer) {
                sidebar && observer.unobserve(sidebar);
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div>
            <input ref={hamburgerInputRef} type="checkbox" id="hamburger" className="hamburger hidden appearance-none p-0 m-0 outline-none pointer-events-none" />
            <label htmlFor="hamburger" className="svg-container fixed top-7 max-sm:top-5 right-9 max-sm:right-3 z-50 cursor-pointer rounded-full size-8 dark:text-neutral-200">
                <SvgImage src={hamburger} />
                <SvgImage src={cross} />
            </label>
            <aside ref={sidebarRef} className="sidebar fixed top-0 h-full bg-white dark:bg-primary shadow-md dark:shadow-xs shadow-slate-gray/50 overflow-y-auto z-10 pl-8">
                <div className="flex justify-start pt-8">
                    <ThemeSwitcher />
                </div>
                <div className="flex justify-start pt-5 text-lg leading-normal font-medium font-montserrat text-black dark:text-white">
                    <a href="/">Sign in</a>
                </div>
                <nav>
                    <ul className="list-none mt-6">
                        {navLinks.map((link) => (
                            <li key={link.label} className="block py-3">
                                <a 
                                    className="font-montserrat leading-normal text-lg text-slate-gray no-underline cursor-pointer dark:text-neutral-200"
                                    href={link.href}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <div id="overlay" onClick={handleOverlayClick} className="fixed top-0 left-0 w-full h-full bg-white/60 dark:bg-white/10 z-1 transition-opacity duration-300 hidden"></div>
        </div>
    )
};

export default HamburgerMenu;