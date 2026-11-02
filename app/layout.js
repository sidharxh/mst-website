import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mithila Shail Tech Solutions | Electrical, Software & AI Services',
  description:
    'Mithila Shail Tech Solutions provides electrical and electro-mechanical contracting, custom software, workflow and AI automation, website development and SEO services in Lucknow, Noida and across India.',
  keywords: [
    'electrical contractor Lucknow',
    'electro-mechanical contractor India',
    'software development Lucknow',
    'AI automation services India',
    'website development Lucknow',
    'SEO services Lucknow',
  ],
  openGraph: {
    title: 'Mithila Shail Tech Solutions | Electrical, Software & AI Services',
    description:
      'Electrical contracting, business software, AI and workflow automation, website development and SEO for businesses across India.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="slate">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
