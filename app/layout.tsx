import type { Metadata, Viewport } from 'next';
import './globals.css';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://downloads.scrutium.com'),
  title: 'Scrutium — Official App Downloads',
  description:
    'Download the official Scrutium mobile app. Bring Scrutium AI to your device, explore its capabilities, and continue on the web.',
  keywords: [
    'Scrutium AI download',
    'Download Scrutium app',
    'Scrutium mobile app',
    'Scrutium desktop app',
    'Scrutium APK',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: 'https://downloads.scrutium.com',
  },
  openGraph: {
    title: 'Scrutium — Official App Downloads',
    description:
      'Bring Scrutium AI to your device. Get the app, explore its capabilities, and continue on the web whenever you need to.',
    url: 'https://downloads.scrutium.com',
    siteName: 'Scrutium',
    images: [
      {
        url: '/logos/x-ion-logo.png',
        width: 1254,
        height: 1254,
        alt: 'Scrutium AI Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Scrutium — Official App Downloads',
    description:
      'Official Scrutium AI standalone mobile application.',
    images: ['/logos/x-ion-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#07080b',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <JsonLd />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen bg-[#07080b] text-neutral-100 antialiased selection:bg-neutral-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
