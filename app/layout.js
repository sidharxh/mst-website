import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mithila Shail Tech Solutions | Electro-Mechanical Contractors',
  description:
    'Varanasi-based electro-mechanical contractors delivering electrical, HVAC, fire fighting, MEP and AMC solutions across India.',
  keywords:
    'electro-mechanical contractor, HVAC, electrical works, AMC, fire fighting, MEP, Varanasi, UP, India',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="slate" data-mode="light">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
