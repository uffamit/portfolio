import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const siteUrl = 'https://amitdivekar.qzz.io';

export const metadata: Metadata = {
  title: 'Amit Divekar - Portfolio',
  description: "Amit Divekar's personal portfolio website, showcasing projects and skills in web development and computer science.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Amit Divekar - Portfolio',
    description: "Amit Divekar's personal portfolio website.",
    siteName: 'Amit Divekar Portfolio',
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/favicon.ico',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
