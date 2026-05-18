import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            setTheme('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (theme === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            setTheme('light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }
    };

    useEffect(() => {
        const fadeElements = document.querySelectorAll('.fade-in-up');

        const appearOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const appearOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, appearOptions);

        fadeElements.forEach(el => {
            appearOnScroll.observe(el);
        });

        return () => {
            fadeElements.forEach(el => {
                appearOnScroll.unobserve(el);
            });
        };
    }, []);

    return (
        <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Hero />
            <Projects />
            <About />
            <Education />
            <Experience />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
