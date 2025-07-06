import type { Metadata } from 'next';
import { Geist, Geist_Mono, Work_Sans } from 'next/font/google';
import './globals.css';
import Navbar from './components/layout/Navbar';

// Font setup
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AgriFresh | Sustainable Agriculture & Products',
  description: 'Explore AgriFresh’s innovative services, team, and sustainable solutions.',
  keywords: ['AgriFresh', 'sustainability', 'farming', 'organic', 'agriculture'],
  authors: [{ name: 'AgriFresh Team' }],
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${workSans.variable} 
          antialiased
        `}
      >
        <Navbar /> 
        <main > 
          {children}
        </main>
      </body>
    </html>
  );
}
