'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navInner}>

          {/* Logo */}
          <a href="/" className={styles.logo}>
            <Image
              src="/logo.png"
              alt="Mithila Shail Tech Solutions"
              height={40}
              width={120}
              className={styles.logoImg}
              priority
            />
          </a>

          {/* Desktop Nav Links */}
          <ul className={styles.navLinks}>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#clients">Clients</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

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
