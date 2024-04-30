import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Sheet } from '@/components/ui/sheet'
import { Recipe, RecipeResponse } from '../../interfaces/recipe'
import Link from 'next/link'

async function getRecipes() {
  const res = await fetch('https://mealplan.lawsonserver.xyz/api/recipes');

  // Check if the response is ok (i.e., status code in the range 200-299)
  if (!res.ok) {
    console.log("Error fetching data.");
    throw new Error('Failed to fetch data');
  }

  // Convert the ReadableStream to JSON
  const data: RecipeResponse = await res.json();

  return data.recipes;
}


export default async function Dashboard() {
  const recipes: Recipe[] = await getRecipes()
  return (
    <>
      <nav className="max-w-none">
        <div className="flex flex-col md:flex-row md:justify-between items-center w-full">
          <h1>Lawson's Recipes</h1>
          <div className="relative w-full md:w-auto mt-4 md:mt-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search recipes..."
              aria-label="Search recipes"
              className="w-full rounded-lg bg-background pl-8 md:w-[336px] lg:w-[336px]"
            />
          </div>
        </div>
      </nav>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {recipes.length > 0 ? (
          recipes.map((recipe) => (
          <Card key={recipe.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <div className="w-full">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={`/img/${recipe.image}`}
                    alt="Recipe Image"
                    fill
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
                <CardTitle className="mt-4">{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild>
              <Link href={`/recipe/${recipe.id}`}>View Recipe</Link>
              </Button>
              {recipe.vegan && <Badge variant={'secondary'}>Vegan!</Badge>}
            </CardFooter>
          </Card>
   )
   )) : (
    <div>No recipes found.</div> 
   )}
      </div>
    </>
  )
}
