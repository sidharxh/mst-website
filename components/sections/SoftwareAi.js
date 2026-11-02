import styles from './SoftwareAi.module.css';

const offers = [
  {
    icon: '⚙️',
    title: 'Business Workflow Automation',
    description:
      'Map repetitive work and connect the forms, spreadsheets, email, CRM, and business tools your team already uses. Automate handoffs, reminders, and routine updates around your existing process.',
    details: ['Workflow mapping', 'Tool and API integrations', 'Approvals and notifications'],
  },
  {
    icon: '✦',
    title: 'AI Assistants & Document Automation',
    description:
      'Use AI to answer common questions from approved business information, classify enquiries, extract details from documents, and prepare summaries. Add human review where decisions need oversight.',
    details: ['Website and support chatbots', 'Document processing', 'Human review steps'],
  },
  {
    icon: '▦',
    title: 'Custom Software & Business Tools',
    description:
      'Build software around the way your team works when spreadsheets or off-the-shelf tools no longer fit. Turn scattered records and manual reporting into a clearer shared workflow.',
    details: ['Internal tools and portals', 'Dashboards and reporting', 'Custom web applications'],
  },
  {
    icon: '⌘',
    title: 'Website Design & Development',
    description:
      'Create responsive business websites and web applications with clear service pages, accessible layouts, and a straightforward path for visitors to contact your team.',
    details: ['Business websites and landing pages', 'Web applications', 'Website redesigns'],
  },
  {
    icon: '↗',
    title: 'SEO & Local Search Optimization',
    description:
      'Make your services easier for search engines and customers to understand through useful page content, sound technical foundations, and location-specific information.',
    details: ['On-page and technical SEO', 'Local SEO for Lucknow and Noida', 'Page speed and structured data'],
  },
];

export default function SoftwareAi() {
  return (
    <section id="software-ai" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Software, AI & Digital</span>
          <h2>Software, AI Automation, Website Development &amp; SEO</h2>
          <p>
            Alongside our electrical and electro-mechanical work, Mithila Shail
            Tech Solutions helps businesses improve how they operate online and
            behind the scenes. We create websites, automate workflows, apply AI
            to practical business tasks, and strengthen the SEO foundations that
            help customers find your services. Work can start with one well-defined
            problem and grow as your needs become clearer.
          </p>
        </div>

        <div className={styles.grid}>
          {offers.map((offer) => (
            <article className={styles.card} key={offer.title}>
              <span className={styles.icon} aria-hidden="true">{offer.icon}</span>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <ul>
                {offer.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <p>Have a process to automate or a website to build?</p>
          <a href="#contact" className="btn btn-primary">Discuss Your Project</a>
        </div>
      </div>
    </section>
  );
}
