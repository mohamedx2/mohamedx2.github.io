import './globals.css';

import type { Metadata } from 'next';
import { ThemeProvider } from '../components/ThemeProvider';
import { Navigation } from '../components/Navigation';

export const metadata: Metadata = {
  title: "Mohamed Ali | Full Stack Developer",
  description: "Portfolio showcasing full-stack development skills and projects",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="antialiased font-sans">
        <ThemeProvider>
          <Navigation />
          <main className="pt-20">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
