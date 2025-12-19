import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

// Responsive viewport configuration with theme color
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#b3a5c8',
};

const siteUrl = 'https://amitdevx.tech';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Amit Divekar',
  url: siteUrl,
  jobTitle: 'Next.js Developer',
  description:
    'Next.js developer building performant web experiences and exploring AI, DevOps, CI/CD, and cloud infrastructure.',
  sameAs: [
    'https://github.com/uffamit',
    'https://www.linkedin.com/in/divekar-amit',
    'mailto:Amitdivekar289@gmail.com',
  ],
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
    'Next.js developer focused on performant web apps, AI, DevOps, CI/CD, and cloud infrastructure. View projects, experience, and certifications.',
  applicationName: 'Amit Divekar Portfolio',
  generator: 'Next.js',
  keywords: [
    'Amit Divekar',
    'Next.js developer',
    'React developer',
    'frontend engineer',
    'portfolio website',
    'web performance',
    'AI projects',
    'DevOps',
    'CI/CD',
    'cloud infrastructure',
    'full-stack developer',
    'TypeScript',
    'cloud services',
  ],
  authors: [{ name: 'Amit Divekar', url: siteUrl }],
  creator: 'Amit Divekar',
  publisher: 'Amit Divekar',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Amit Divekar - Portfolio',
    description:
      'Explore Amit Divekar’s work in Next.js, AI, DevOps, and cloud. Projects, experience, and certifications in one place.',
    siteName: 'Amit Divekar Portfolio',
    images: [
      {
        url: `${siteUrl}/favicon.svg`,
        width: 512,
        height: 512,
        alt: 'Amit Divekar logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amit Divekar - Portfolio',
    description:
      'Next.js developer focused on performant web apps, AI, DevOps, CI/CD, and cloud infrastructure.',
    images: [`${siteUrl}/favicon.svg`],
    creator: '@divekar_amit',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' }, // Fallback/Crawler preference
      { url: '/favicon.svg', type: 'image/svg+xml' }, // High quality for modern tabs
    ],
    apple: '/favicon.svg',
  },
  other: {
    'theme-color': '#b3a5c8',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#b3a5c8" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
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
