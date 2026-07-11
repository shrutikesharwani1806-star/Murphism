import './globals.css';
import { Outfit, Space_Grotesk, Playfair_Display } from 'next/font/google';
import ClientWidgets from '@/components/ClientWidgets';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair-display',
  display: 'swap',
});

export const metadata = {
  title: 'MURPHISM Academy | We Morph You Into Industry-Ready Creators',
  description:
    'Join Murphism — the premium creative & tech academy offering Graphic Design, Website Development, Video Editing, 3D Modelling, AI Courses, and Diploma in Animations & Modelling. 100% Job Assistance. Foreign Work Exposures Provided.',
  icons: {
    icon: '/new-logo.jpeg',
    shortcut: '/new-logo.jpeg',
    apple: '/new-logo.jpeg',
  },
  keywords: [
    'Murphism Academy',
    'Graphic Design Course',

    'Website Development',
    'Video Editing',
    '3D Modelling',
    'Diploma Animation',
    'AI Courses',
    'Creative Academy',
    'Job Assistance',
  ],
  openGraph: {
    title: 'MURPHISM Academy | Industry-Ready Creators & Innovators',
    description:
      'We Morph You to Become Industry Ready Creators/Innovators. 100% Job Assistance. Foreign Work Exposures Provided.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MURPHISM Academy',
    description:
      'Premium creative & tech academy. 100% job assistance. Foreign work exposures provided.',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/new-logo.jpeg" type="image/jpeg" />
        <link rel="shortcut icon" href="/new-logo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/new-logo.jpeg" />
      </head>
      <body className="antialiased overflow-x-clip font-sans" suppressHydrationWarning>
        <ClientWidgets />
        {children}
      </body>
    </html>
  );
}
