'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const themes = ['slate', 'lavender', 'sky'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('slate');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('mode') || 'light';
    const savedTheme = localStorage.getItem('theme') || 'slate';
    setDarkMode(savedMode === 'dark');
    setCurrentTheme(savedTheme);

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function toggleDarkMode() {
    const newMode = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-mode', newMode);
    localStorage.setItem('mode', newMode);
  }

  function changeTheme(theme) {
    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navInner}>

          {/* Logo */}
          <a href="/" className={styles.logo}>
            <span className={styles.logoMST}>MST</span>
            <span className={styles.logoFull}>Mithila Shail Tech</span>
          </a>

          {/* Desktop Nav Links */}
          <ul className={styles.navLinks}>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#clients">Clients</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Controls */}
          <div className={styles.controls}>

            {/* Theme Switcher */}
            <div className={styles.themeSwitcher}>
              {themes.map(theme => (
                <button
                  key={theme}
                  className={`${styles.themeBtn} ${currentTheme === theme ? styles.activeTheme : ''}`}
                  data-theme-btn={theme}
                  onClick={() => changeTheme(theme)}
                  title={theme}
                />
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <button className={styles.darkToggle} onClick={toggleDarkMode} title="Toggle dark mode">
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Mobile Hamburger */}
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className={styles.mobileMenu}>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#clients" onClick={() => setMenuOpen(false)}>Clients</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
}
