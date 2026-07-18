import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mohamedalihamroun.me'),
  title: 'Mohamed Ali Hamroun | Full-Stack Developer & Systems Engineer',
  description: 'Portfolio of Mohamed Ali Hamroun — Full-stack developer and systems engineer specializing in framework engineering, AI automation, and low-level systems. Creator of Baraqex, DBGO, and open-source tools.',
  keywords: ['Mohamed Ali Hamroun', 'full-stack developer', 'systems engineer', 'JavaScript', 'TypeScript', 'Go', 'React', 'Next.js', 'framework engineering', 'open source', 'Tunisia'],
  authors: [{ name: 'Mohamed Ali Hamroun' }],
  creator: 'Mohamed Ali Hamroun',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mohamedalihamroun.me',
    siteName: 'Mohamed Ali Hamroun',
    title: 'Mohamed Ali Hamroun | Full-Stack Developer & Systems Engineer',
    description: 'Portfolio of Mohamed Ali Hamroun — Full-stack developer and systems engineer specializing in framework engineering, AI automation, and low-level systems.',
    images: [
      {
        url: '/social-card.jpg',
        width: 1200,
        height: 630,
        alt: 'Mohamed Ali Hamroun — Full-Stack Developer & Systems Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Ali Hamroun | Full-Stack Developer & Systems Engineer',
    description: 'Full-stack developer and systems engineer specializing in framework engineering, AI automation, and low-level systems.',
    images: ['/social-card.jpg'],
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
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Hanken+Grotesk:wght@400;600&family=Work+Sans:wght@600&family=JetBrains+Mono&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="bg-background text-on-background font-body-md overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}