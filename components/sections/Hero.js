'use client';

import { useEffect } from 'react';
import styles from './Hero.module.css';
import siteData from '@/data/siteData.json';

export default function Hero() {
  const { company } = siteData.mst;

  useEffect(() => {
    fetch('/api/track-visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page: window.location.pathname,
        referrer: document.referrer || 'direct',
      }),
    });
  }, []);

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.badge}>Electro-Mechanical Experts</div>
          <h1>
            Powering India's
            <span className={styles.highlight}> Industrial Growth</span>
          </h1>
          <p>{company.tagline}</p>
          <p className={styles.sub}>
            Trusted by LG Electronics, Hilti, Sembcorp and more — delivering
            electrical, mechanical and AMC solutions across India since {company.founded}.
          </p>
          <div className={styles.heroCTA}>
            <a href="#contact" className="btn btn-primary">Get a Quote</a>
            <a href="#projects" className="btn btn-outline">View Projects</a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>8+</span>
              <span className={styles.statLabel}>Projects Delivered</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>{company.employees}+</span>
              <span className={styles.statLabel}>Team Members</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>7+</span>
              <span className={styles.statLabel}>Major Clients</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>Since {company.founded}</span>
              <span className={styles.statLabel}>In Business</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
