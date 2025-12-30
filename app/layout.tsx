import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Elektrik ve Elektronik Çözümleri',
  description: 'Kurumsal elektrik-elektronik projeler, saha işleri, uygulama ve bakım hizmetleri',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

