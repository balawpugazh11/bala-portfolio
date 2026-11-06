import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Balamurugan | MERN Stack Developer India',
  description: 'MERN Stack Developer in India: React, Node.js, Express, MongoDB. Building responsive, production-grade apps with modern UX.',
  keywords: ['MERN Stack Developer', 'React Developer', 'Node.js', 'Express', 'MongoDB', 'Full Stack Developer India', 'Web Development', 'Software Engineer'],
  authors: [{ name: 'Balamurugan' }],
  openGraph: {
    title: 'Balamurugan | MERN Stack Developer',
    description: 'React, Node.js, Express, MongoDB – responsive, performant apps and modern UI.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
