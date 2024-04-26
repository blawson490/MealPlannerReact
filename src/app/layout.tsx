import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meal Planner',
  description: 'Meal Planner Created with Next App',
}

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Link from 'next/link'

import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <main className="w-full xl:w-auto xl:max-w-none mx-auto px-8">
            {children}
          </main>
          <Button
            variant={'default'}
            aria-label="New Recipe"
            className="fixed bottom-5 right-5 px-2 py-6 text-white rounded-full rounded-l-full rounded-r-full shadow-lg transition-all"
          >
            <span className="hidden sm:flex items-center">
              <Plus className="h-8 w-8 ml-1" />
              <span className="ml-3 text-lg mr-2">Create Recipe</span>
            </span>
            <span className="sm:hidden">
              <Plus className="h-8 w-8" />
            </span>
          </Button>
        </div>
      </body>
    </html>
  )
}
