import { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">Virda's <span>Portofolio</span></a>
                <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <nav>
                        <ul className="nav-links">
                            <li><a href="#hero" onClick={closeMenu}>Beranda</a></li>
                            <li><a href="#projects" onClick={closeMenu}>Proyek</a></li>
                            <li><a href="#about" onClick={closeMenu}>Tentang</a></li>
                            <li><a href="#contact" onClick={closeMenu}>Kontak</a></li>
                        </ul>
                    </nav>
                    <button id="theme-toggle" className="theme-btn" aria-label="Toggle Dark Mode" onClick={toggleTheme}>
                        <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>
                </div>
                <button className="hamburger" aria-label="Menu" onClick={toggleMenu}>
                    <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
