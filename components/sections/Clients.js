import styles from './Clients.module.css';
import siteData from '@/data/siteData.json';

export default function Clients() {
  const { clients, testimonials } = siteData.mst;

  return (
    <section id="clients" className={styles.clients}>
      <div className="container">

        <div className={styles.sectionHeader}>
          <span className={styles.label}>Trusted By</span>
          <h2>Clients Who Rely on Us</h2>
          <p>
            From multinational corporations to large-scale Indian infrastructure
            projects — our work speaks across industries.
          </p>
        </div>

        <div className={styles.logoGrid}>
          {clients.map((client, i) => (
            <div key={i} className={styles.logoCard}>
              <div className={styles.iconBadge}>
                {client.icon}
              </div>
              <div className={styles.clientInfo}>
                <strong>{client.name}</strong>
                <span>{client.industry}</span>
              </div>
            </div>
          ))}
        </div>

        {testimonials && testimonials.length > 0 && (
          <div className={styles.testimonials}>
            <h3>What Clients Say</h3>
            <div className={styles.testimonialGrid}>
              {testimonials.map((t, i) => (
                <div key={i} className={styles.testimonialCard}>
                  <p className={styles.quote}>"{t.quote}"</p>
                  <div className={styles.author}>
                    <strong>{t.name}</strong>
                    <span>{t.designation}, {t.company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
