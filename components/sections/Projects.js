import styles from './Projects.module.css';
import siteData from '@/data/siteData.json';

export default function Projects() {
  const { projects } = siteData.mst;

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">

        <div className={styles.sectionHeader}>
          <span className={styles.label}>Our Work</span>
          <h2>Projects We're Proud Of</h2>
          <p>
            A selection of completed and ongoing electro-mechanical projects
            delivered across India for leading industrial clients.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.category}>{project.category}</span>
                <span className={`${styles.status} ${styles[project.status.toLowerCase().replace(' ', '_')]}`}>
                  {project.status}
                </span>
              </div>
              <h3>{project.title}</h3>
              <p className={styles.client}>
                <span className={styles.clientLabel}>Client:</span> {project.client}
              </p>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.cardFooter}>
                <span className={styles.location}>📍 {project.location}</span>
                <span className={styles.value}>{project.value}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
