import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientSideServiceWorker from '@/components/ClientSideServiceWorker'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meal Planner',
  description: 'Meal Planner Created with Next App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="manifest" href="/manifest.json" />
    <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
    <meta name="theme-color" content="#000000" />
    <ClientSideServiceWorker />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
