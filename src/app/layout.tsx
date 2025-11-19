import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from './components/Navigation';
import StructuredData from './components/StructuredData';
import PWAHandler from './pwa';

// Optimize font loading with swap display strategy for better LCP
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto']
});

const baseUrl = 'https://www.mohamedalihamroun.me';
const profileImage = 'https://www.mohamedalihamroun.me/profile.jpg';

export const metadata: Metadata = {
  title: 'Mohamed Ali Hamroun | Full Stack Developer Portfolio',
  description: '22-year-old full-stack developer passionate about creating innovative solutions. Specializing in React, Next.js, Node.js, and modern web technologies. Explore my portfolio with 2 years of experience and 10+ projects.',
  keywords: [
    'Mohamed Ali Hamroun',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Web Developer',
    'Portfolio',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
  ],
  authors: [{ name: 'Mohamed Ali Hamroun' }],
  creator: 'Mohamed Ali Hamroun',
  publisher: 'Mohamed Ali Hamroun',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
  applicationName: 'Mohamed Ali Hamroun Portfolio',
  referrer: 'strict-origin-when-cross-origin',
  themeColor: '#ffffff',
  colorScheme: 'light dark',
  manifest: '/manifest.json',
  openGraph: {
    title: 'Mohamed Ali Hamroun | Full Stack Developer',
    description: '22-year-old full-stack developer with 2 years of experience. View my 10+ projects and skills in React, Next.js, Node.js, and more.',
    url: baseUrl,
    siteName: 'Mohamed Ali Hamroun Portfolio',
    images: [
      {
        url: profileImage,
        width: 1200,
        height: 1200,
        alt: 'Mohamed Ali Hamroun - Full Stack Developer',
        type: 'image/jpeg',
      },
      {
        url: profileImage,
        width: 600,
        height: 600,
        alt: 'Mohamed Ali Hamroun',
        type: 'image/jpeg',
      },
      {
        url: profileImage,
        width: 400,
        height: 400,
        alt: 'Mohamed Ali Hamroun Profile',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Ali Hamroun | Full Stack Developer',
    description: '22-year-old full-stack developer with 2 years of experience. Explore my portfolio with 10+ projects.',
    images: [profileImage],
    creator: '@mohamedx2',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Mohamed Ali Hamroun Portfolio',
  },
  appLinks: {
    ios: [
      {
        url: 'https://apps.apple.com/app/mohamedalihamroun/id123456789',
        app_name: 'Mohamed Ali Hamroun Portfolio',
      },
    ],
  },
  verification: {
    google: 'verification-code-here', // Add your Google verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="22-year-old full-stack developer with 2 years of experience. Explore my portfolio with 10+ projects in React, Next.js, Node.js, and more." />
        <meta name="google-site-verification" content="OQlj2Ur-U8IQLV5YDw7eeIUJcf_WMhwXkX63br52oYY" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light dark" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Mohamed Ali Hamroun" />
        
        {/* Open Graph Image Tags */}
        <meta property="og:image" content={profileImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Mohamed Ali Hamroun - Full Stack Developer" />
        
        {/* Twitter Image Tags */}
        <meta name="twitter:image" content={profileImage} />
        <meta name="twitter:image:alt" content="Mohamed Ali Hamroun Profile" />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Mohamed Ali Hamroun" />
        <meta name="copyright" content="Mohamed Ali Hamroun" />
        <meta name="language" content="English" />
        
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="canonical" href={baseUrl} />
        
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <Navigation />
        <PWAHandler />
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
