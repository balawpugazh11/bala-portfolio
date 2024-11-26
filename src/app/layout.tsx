import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Balamurugan M - Full Stack Developer',
  description: 'Portfolio of Balamurugan M, a passionate Full Stack Developer specializing in React, Node.js, and cloud technologies.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'Web Development', 'Software Engineer'],
  authors: [{ name: 'Balamurugan M' }],
  openGraph: {
    title: 'Balamurugan M - Full Stack Developer',
    description: 'Portfolio of Balamurugan M, a passionate Full Stack Developer specializing in React, Node.js, and cloud technologies.',
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
      <body className={inter.className}>
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
