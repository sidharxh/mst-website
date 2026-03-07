'use client';

import { useState } from 'react';
import styles from './Contact.module.css';
import siteData from '@/data/siteData.json';

export default function Contact() {
  const { company } = siteData.mst;

  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">

        <div className={styles.sectionHeader}>
          <span className={styles.label}>Get In Touch</span>
          <h2>Let's Work Together</h2>
          <p>
            Have a project in mind? Send us a message and our team
            will get back to you within 24 hours.
          </p>
        </div>

        <div className={styles.grid}>

          {/* Left — Contact Info */}
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📍</span>
              <div>
                <strong>Office Address</strong>
                <p>{company.contact.address}</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📞</span>
              <div>
                <strong>Phone</strong>
                {company.contact.phone.map((ph, i) => (
                  <p key={i}><a href={`tel:${ph}`}>{ph}</a></p>
                ))}
              </div>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>✉️</span>
              <div>
                <strong>Email</strong>
                <p><a href={`mailto:${company.contact.email}`}>{company.contact.email}</a></p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>🕐</span>
              <div>
                <strong>Working Hours</strong>
                <p>Mon – Sat: 9:00 AM – 6:00 PM</p>
                <p>Sunday: Emergency only</p>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name" name="name" type="text"
                  placeholder="Your name"
                  value={form.name} onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email *</label>
                <input
                  id="email" name="email" type="email"
                  placeholder="your@email.com"
                  value={form.email} onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone" name="phone" type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone} onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="service">Service Needed</label>
                <select
                  id="service" name="service"
                  value={form.service} onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  {siteData.mst.services.map((s, i) => (
                    <option key={i} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message" name="message"
                rows={5}
                placeholder="Describe your project or requirement..."
                value={form.message} onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className={styles.successMsg}>
                ✅ Message sent! We'll get back to you within 24 hours.
              </p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg}>
                ❌ Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}
