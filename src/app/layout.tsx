import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Balamurugan | MERN Stack Developer India | Full-Stack Engineer',
  description: 'Professional MERN Stack Developer in India specializing in React, Node.js, Express, MongoDB. Building responsive, production-grade web applications with modern UX and real-time features.',
  keywords: [
    'MERN Stack Developer', 
    'React Developer', 
    'Node.js Developer', 
    'Express.js', 
    'MongoDB', 
    'Full Stack Developer India', 
    'Web Development', 
    'Software Engineer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Real-time Applications',
    'Web Applications',
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Developer'
  ],
  authors: [{ name: 'Balamurugan M', url: 'https://github.com/balawpugazh11' }],
  creator: 'Balamurugan M',
  publisher: 'Balamurugan M',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bala-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Balamurugan | MERN Stack Developer India',
    description: 'Professional MERN Stack Developer specializing in React, Node.js, Express, MongoDB. Building responsive, production-grade web applications with modern UX.',
    url: 'https://bala-portfolio.vercel.app',
    siteName: 'Balamurugan Portfolio',
    images: [
      {
        url: '/hero-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Balamurugan - Full-Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Balamurugan | MERN Stack Developer India',
    description: 'Professional MERN Stack Developer specializing in React, Node.js, Express, MongoDB. Building responsive, production-grade web applications.',
    images: ['/hero-image.jpeg'],
    creator: '@balawpugazh11',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio',
  other: {
    'theme-color': '#000000',
    'msapplication-TileColor': '#000000',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Balamurugan Portfolio',
    'application-name': 'Balamurugan Portfolio',
    'mobile-web-app-capable': 'yes',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
        <StructuredData />
      </body>
    </html>
  )
}
