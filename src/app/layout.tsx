import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { SkipLink } from '@/components/ui/skip-link';

export const metadata: Metadata = {
  title: 'Corrida Armamentista e Medo Nuclear | Era da Guerra Fria',
  description: 'Explore a era da corrida armamentista nuclear através de visualizações interativas, dados históricos e análises sobre como o medo nuclear redefiniu a geopolítica global.',
  keywords: 'corrida armamentista, guerra fria, armas nucleares, geopolítica, história nuclear, tensão mundial',
  authors: [{ name: 'Site CH' }],
  openGraph: {
    title: 'Corrida Armamentista e Medo Nuclear',
    description: 'Uma exploração visual e interativa da era da Guerra Fria que redefiniu o poder militar e a geopolítica global.',
    type: 'website',
    locale: 'pt_BR',
    images: [{
      url: '/corrida-armamentista.jpg',
      width: 1200,
      height: 630,
      alt: 'Corrida Armamentista Nuclear'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corrida Armamentista e Medo Nuclear',
    description: 'Explore a era da Guerra Fria através de visualizações interativas.',
    images: ['/corrida-armamentista.jpg']
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <SkipLink />
        <ThemeProvider storageKey="nuclear-theme">
          <main id="main-content">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
