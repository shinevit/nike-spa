import { createContext, useLayoutEffect, useContext, useState } from 'react';

const isDarkTheme = () => localStorage.getItem('theme') === 'dark' ||
    (!("theme" in localStorage) && matchMedia("(prefers-color-scheme: dark)").matches);

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(isDarkTheme() ? 'dark' : 'light');
  
    useLayoutEffect(() => {
        const rootElement = document.documentElement;

        // Apply the theme value to the <html> tag
        rootElement.setAttribute('data-theme', theme);
        
        // Store theme in local storage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
};

export default ThemeProvider;

export const useTheme = () => {
    const context = useContext(ThemeContext);
    
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};