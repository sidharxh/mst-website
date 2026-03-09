import Image from 'next/image';
import styles from './Footer.module.css';
import siteData from '@/data/siteData.json';

export default function Footer() {
  const { company } = siteData.mst;
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>

          {/* Brand */}
          <div className={styles.brand}>
            <Image
              src="/logo.png"
              alt="Mithila Shail Tech Solutions"
              height={60}
              width={60}
              className={styles.logoImg}
            />
            <p>Mithila Shail Tech Solutions</p>
            <p className={styles.tagline}>{company.tagline}</p>
          </div>

          {/* Quick Links */}
          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#clients">Clients</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.contact}>
            <h4>Contact</h4>
            <p>{company.contact.address}</p>
            <a href={`tel:${company.contact.phone[0]}`}>{company.contact.phone[0]}</a>
            <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Mithila Shail Tech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
