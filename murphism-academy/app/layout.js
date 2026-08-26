import './globals.css';
import { Outfit, Space_Grotesk, Playfair_Display } from 'next/font/google';
import localFont from 'next/font/local';
import ClientWidgets from '@/components/ClientWidgets';
import Script from 'next/script';

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

const clashDisplay = localFont({
  src: [
    {
      path: '../public/fonts/clash-display/clash-display-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/clash-display/clash-display-semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/clash-display/clash-display-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash-display',
  display: 'swap',
});

export const metadata = {
  title: "Animation & Video Editing Institute in Indore | Murphism",
  description:
    "Learn Video Editing, Graphic Design, AI Content Creation, VFX, 3D Animation and B.Sc. Animation & Multimedia at Murphism in Indore.",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
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
    title: "Animation & Video Editing Institute in Indore | Murphism",
    description:
      "Learn Video Editing, Graphic Design, AI Content Creation, VFX, 3D Animation and B.Sc. Animation & Multimedia at Murphism in Indore.",
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Animation & Video Editing Institute in Indore | Murphism",
    description:
      "Learn Video Editing, Graphic Design, AI Content Creation, VFX, 3D Animation and B.Sc. Animation & Multimedia at Murphism in Indore.",
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
    <html lang="en" className={`scroll-smooth ${outfit.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable} ${clashDisplay.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preload" href="/3d-computer.webp" as="image" type="image/webp" fetchPriority="high" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="antialiased overflow-x-clip font-sans" suppressHydrationWarning>
        <ClientWidgets />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y9FP6F5J1X"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Y9FP6F5J1X');
          `}
        </Script>
      </body>
    </html>
  );
}
