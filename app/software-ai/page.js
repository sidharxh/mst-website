import SoftwareAi from '@/components/sections/SoftwareAi';

export const metadata = {
  title: 'AI Automation, Software & SEO Services in Lucknow | MST',
  description:
    'Explore AI and workflow automation, custom software, website development and SEO services in Lucknow from Mithila Shail Tech Solutions, serving Noida and businesses across India.',
  keywords: [
    'software development company Lucknow',
    'AI automation services India',
    'AI chatbot and workflow automation Lucknow',
    'custom business software Lucknow',
    'website development Lucknow',
    'SEO services Lucknow',
    'local SEO Noida',
  ],
  openGraph: {
    title: 'AI Automation, Software & SEO Services | Mithila Shail Tech Solutions',
    description:
      'Business software, workflow automation, practical AI, website development and SEO for Lucknow, Noida and businesses across India.',
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Automation, Software Development, Website Development and SEO Services',
  description:
    'Business workflow automation, AI assistants, custom business software, website development and SEO for businesses in Lucknow, Noida and across India.',
  provider: {
    '@type': 'Organization',
    name: 'Mithila Shail Tech Solutions',
    email: 'mithilashailtech@gmail.com',
    telephone: '+91 9452062975',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'C-473/C Indira Nagar',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      postalCode: '226016',
      addressCountry: 'IN',
    },
  },
  areaServed: ['Lucknow', 'Noida', 'India'],
  serviceType: [
    'AI automation',
    'Business workflow automation',
    'Custom software development',
    'Website development',
    'Search engine optimization',
  ],
};

export default function SoftwareAiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c') }}
      />
      <header className="container" style={{ paddingTop: '8rem', paddingBottom: '1rem', textAlign: 'center' }}>
        <h1>AI Automation, Custom Software, Web Development &amp; SEO in Lucknow</h1>
        <p style={{ maxWidth: 760, margin: '1rem auto 0' }}>
          Mithila Shail Tech Solutions helps teams reduce repetitive work, build
          useful digital tools, and improve their online presence. We work with
          businesses in Lucknow, Noida and across India.
        </p>
      </header>
      <SoftwareAi />
      <section className="section section-surface">
        <div className="container">
          <div className="section-title">
            <h2>Start With the Business Problem</h2>
            <p>We first understand the task, the people involved, and the systems already in use. Then we recommend a practical scope, whether that calls for straightforward automation, custom software, or AI with human review.</p>
          </div>
          <div className="container" style={{ maxWidth: 850 }}>
            <h3>What can a business automate with AI?</h3>
            <p>Common starting points include sorting incoming enquiries, drafting responses from approved information, extracting details from documents, summarizing records, and preparing recurring reports. Important decisions can stay with a person.</p>
            <h3 style={{ marginTop: '1.5rem' }}>Can you connect automation to our existing tools?</h3>
            <p>Where the tools support it, workflows can connect forms, email, spreadsheets, CRMs, and other business systems through integrations and APIs. We define the scope around the systems your team already uses.</p>
            <h3 style={{ marginTop: '1.5rem' }}>Do you build SEO-friendly websites?</h3>
            <p>Yes. Website projects can include clear page structure, mobile-friendly layouts, relevant page titles and descriptions, technical SEO foundations, and local business information. Search rankings depend on many factors, so no position or traffic result is guaranteed.</p>
          </div>
        </div>
      </section>
    </>
  );
}
