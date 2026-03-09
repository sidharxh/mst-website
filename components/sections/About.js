import styles from './About.module.css';
import siteData from '@/data/siteData.json';

export default function About() {
  const { company } = siteData.mst;

  return (
    <section id="about" className={styles.about}>
      <div className="container">

        <div className={styles.sectionHeader}>
          <span className={styles.label}>Who We Are</span>
          <h2>Built on Trust,<br />Driven by Expertise</h2>
          <p>
            Mithila Shail Tech Solutions is a Lucknow & NCR-based electro-mechanical
            contractor serving India's leading industrial and infrastructure companies.
          </p>
        </div>

        <div className={styles.grid}>

          {/* Left — Story */}
          <div className={styles.story}>
            <p>
              Founded in <strong>{company.founded}</strong>, MST has grown from a local
              electrical contractor into a full-service electro-mechanical solutions provider
              trusted by Fortune 500 companies and large-scale industrial facilities across India.
            </p>
            <p>
              We specialize in electrical installations, panel design & supply, HVAC systems,
              MEP works, fire fighting, AMC contracts, and civil support — delivering
              end-to-end project execution with a team of <strong>{company.employees}+ skilled professionals</strong>.
            </p>
            <p>
              Headquartered in Lucknow with an office in Noida, our operational reach spans
              Uttar Pradesh, Bihar, Delhi NCR, and beyond — with a reputation built on
              on-time delivery, safety compliance, and long-term client relationships.
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.icon}>⚡</span>
                <div>
                  <strong>Electrical Works</strong>
                  <p>HT/LT installations, panels, cabling</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <span className={styles.icon}>🔌</span>
                <div>
                  <strong>Panel Works</strong>
                  <p>Design, supply & installation of control panels</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <span className={styles.icon}>❄️</span>
                <div>
                  <strong>HVAC & MEP</strong>
                  <p>Design, supply, installation & AMC</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <span className={styles.icon}>🔧</span>
                <div>
                  <strong>AMC Contracts</strong>
                  <p>Annual maintenance for industrial plants</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Info Card */}
          <div className={styles.infoCard}>
            <h3>Company at a Glance</h3>
            <ul className={styles.infoList}>
              <li>
                <span className={styles.infoLabel}>Founded</span>
                <span className={styles.infoValue}>{company.founded}</span>
              </li>
              <li>
                <span className={styles.infoLabel}>Headquarters</span>
                <span className={styles.infoValue}>{company.contact.address}</span>
              </li>
              <li>
                <span className={styles.infoLabel}>NCR Office</span>
                <span className={styles.infoValue}>Noida, Uttar Pradesh</span>
              </li>
              <li>
                <span className={styles.infoLabel}>Team Size</span>
                <span className={styles.infoValue}>{company.employees}+ Professionals</span>
              </li>
              <li>
                <span className={styles.infoLabel}>PAN</span>
                <span className={styles.infoValue}>{company.pan}</span>
              </li>
              <li>
                <span className={styles.infoLabel}>GSTIN</span>
                <span className={styles.infoValue}>{company.gstin}</span>
              </li>
              <li>
                <span className={styles.infoLabel}>Phone</span>
                <span className={styles.infoValue}>{company.contact.phone.join(', ')}</span>
              </li>
              <li>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>{company.contact.email}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
