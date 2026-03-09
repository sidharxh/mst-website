import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mithila Shail Tech Solutions | Electro-Mechanical Contractors',
  description:
    'Lucknow & NCR-based electro-mechanical contractors delivering electrical, panel works, HVAC, fire fighting, MEP and AMC solutions to industries across India.',
  keywords:
    'electro-mechanical contractor, electrical panel works, HVAC, AMC, fire fighting, MEP, Lucknow, Noida, NCR, UP, India, industrial contractor',
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
