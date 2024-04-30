// 'use client'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Dashboard from './Dashboard'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import AddRecipeSheet from '@/components/addRecipeSheet'
import { Suspense } from 'react'
export default async function Page() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sheet>
          <main className="w-full xl:w-auto xl:max-w-none mx-auto px-8">
            <Dashboard />
            <SheetContent>
              <AddRecipeSheet />
            </SheetContent>
          </main>
          <SheetTrigger asChild>
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
          </SheetTrigger>
          </Sheet>
        </div>
  )
}
