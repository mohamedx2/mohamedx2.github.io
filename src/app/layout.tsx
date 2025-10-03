import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from './components/Navigation';
import StructuredData from './components/StructuredData';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Mohamed Ali Hamroun | Full Stack Developer",
  description: "22-year-old full-stack developer passionate about creating innovative solutions. Specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: ['Mohamed Ali Hamroun', 'Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Web Developer', 'Portfolio', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'Mohamed Ali Hamroun' }],
  creator: 'Mohamed Ali Hamroun',
  publisher: 'Mohamed Ali Hamroun',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.mohamedalihamroun.me'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mohamed Ali Hamroun | Full Stack Developer',
    description: '22-year-old full-stack developer passionate about creating innovative solutions.',
    url: 'https://www.mohamedalihamroun.me',
    siteName: 'Mohamed Ali Hamroun Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Mohamed Ali Hamroun - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Ali Hamroun | Full Stack Developer',
    description: '22-year-old full-stack developer passionate about creating innovative solutions.',
    images: ['/profile.jpg'],
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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: { url: '/favicon.svg' }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <Navigation />
        <main suppressHydrationWarning>
          {children}
        </main>
        {/* Browser extension cleanup script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function cleanupExtensionAttributes() {
                  const attributes = ['data--h-bstatus', 'data--h-bresult'];
                  attributes.forEach(attr => {
                    const elements = document.querySelectorAll('[' + attr + ']');
                    elements.forEach(el => el.removeAttribute(attr));
                  });
                }
                
                // Clean immediately
                cleanupExtensionAttributes();
                
                // Clean after DOM changes
                if (typeof MutationObserver !== 'undefined') {
                  const observer = new MutationObserver(cleanupExtensionAttributes);
                  observer.observe(document.body, {
                    attributes: true,
                    childList: true,
                    subtree: true
                  });
                }
                
                // Clean periodically as fallback
                setInterval(cleanupExtensionAttributes, 1000);
              })();
            `
          }}
        />
      </body>
    </html>
  );
}
