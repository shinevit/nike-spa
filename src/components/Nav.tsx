import React from 'react';
import { headerLogo } from '../assets/images';
import { navLinks } from '../data';
import ThemeSwitcher from './ThemeSwitcher';
import HamburgerMenu from './HamburgerMenu';


const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="focus:outline-none">
            <img
                src={headerLogo}
                alt="Logo"
                width={130}
                height={29}
                className="m-0 w-[129px] h-[29px]" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((link) => (
                <li key={link.label}>
                    <a 
                        className={`font-montserrat leading-normal text-lg text-slate-gray 
                          ${['services', 'contact us'].includes(link.label.toLowerCase()) && "dark:xl:text-gray-800"}`
                        }
                        href={link.href}
                    >
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
        <div className="max-lg:hidden">
          <ThemeSwitcher />
        </div>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 text-black dark:text-white dark:xl:text-gray-800">
            <a href="/">Sign In</a>
            <span>/</span>
            <a href="/">Sign Up</a>
        </div>
        <div className="hidden max-lg:block">
            <HamburgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default Nav;