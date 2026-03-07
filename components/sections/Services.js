import styles from './Services.module.css';
import siteData from '@/data/siteData.json';

export default function Services() {
  const { services } = siteData.mst;

  return (
    <section id="services" className={styles.services}>
      <div className="container">

        <div className={styles.sectionHeader}>
          <span className={styles.label}>What We Do</span>
          <h2>End-to-End Electro-Mechanical<br />Solutions</h2>
          <p>
            From initial design and supply to installation, commissioning
            and long-term maintenance — we handle the full project lifecycle.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconBadge}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.subServices && (
                <ul className={styles.subList}>
                  {service.subServices.map((sub, j) => (
                    <li key={j}>
                      <span className={styles.dot} />
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
