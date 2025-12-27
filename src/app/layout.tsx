import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

// Responsive viewport configuration with theme color
export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

const siteUrl = 'https://amitdevx.tech';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Amit Divekar',
  url: siteUrl,
  jobTitle: 'Software Engineer',
  description:
    'Software Engineer with a Full-Stack background, focused on Cloud, DevOps, and AI-driven solutions.',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Savitribai Phule Pune University',
  },
  knowsAbout: ['Cloud Computing', 'DevOps', 'AI', 'Full-Stack Development', 'TypeScript', 'React', 'Next.js', 'AWS', 'Google Cloud', 'Azure'],
  sameAs: [
    'https://www.linkedin.com/in/divekar-amit',
    'https://github.com/uffamit',
    'https://www.kaggle.com/divekaramit',
    'https://x.com/amitdevx_',
  ],
  email: 'Amitdivekar289@gmail.com',
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: siteUrl,
  name: 'Amit Divekar - Portfolio',
  description:
    'Portfolio for Amit Divekar, showcasing Next.js projects, skills, and experience across web development and cloud.',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Amit Divekar - Portfolio',
    template: '%s | Amit Divekar',
  },
  description:
    'Software Engineer with Full-Stack background, focused on Cloud, DevOps, and AI-driven solutions. View my projects, experience, and skills.',
  applicationName: 'Amit Divekar Portfolio',
  generator: 'Next.js',
  keywords: [
    'Amit Divekar',
    'Software Engineer',
    'Full-Stack Developer',
    'Cloud Engineer',
    'DevOps',
    'Portfolio',
    'React',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: 'Amit Divekar', url: siteUrl }],
  creator: 'Amit Divekar',
  publisher: 'Amit Divekar',
  
  // ✅ FIXED: Proper favicon configuration
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon.svg', color: '#b3a5c8' },
    ],
  },
  
  // ✅ FIXED: PWA manifest
  manifest: '/site.webmanifest',
  
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Amit Divekar - Portfolio',
    description:
      'Software Engineer with Full-Stack background, focused on Cloud, DevOps, and AI-driven solutions.',
    siteName: 'Amit Divekar Portfolio',
    locale: 'en_US',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Amit Divekar - Software Engineer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amit Divekar - Portfolio',
    description:
      'Software Engineer with Full-Stack background, focused on Cloud, DevOps, and AI-driven solutions.',
    images: [`${siteUrl}/og-image.png`],
    creator: '@amitdevx_',
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
  
  other: {
    'msapplication-TileColor': '#0a0a0a',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload favicons for faster loading */}
        <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
        <link rel="preload" href="/favicon.svg" as="image" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
