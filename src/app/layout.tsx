import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Providers } from '@/components/providers';
import { FloatingBookButton } from '@/components/floating-book-button';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Oceanic Salon | Premium Hair & Beauty Services',
  description:
    'Experience luxury grooming, hair styling, and skincare at Oceanic Salon. Where elegance meets expertise. Book your appointment today.',
  keywords: [
    'salon',
    'hair salon',
    'beauty salon',
    'grooming',
    'haircut',
    'spa',
    'skincare',
    'unisex salon',
  ],
  openGraph: {
    title: 'Oceanic Salon | Premium Hair & Beauty Services',
    description:
      'Experience luxury grooming, hair styling, and skincare at Tribe Salon.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} flex min-h-screen flex-col bg-[#FAFAFA] font-sans antialiased`}
      >
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingBookButton />
        </Providers>
      </body>
    </html>
  );
}
