export interface Recipe {
    title: string
    image: string
    time: number
    description: string
    vegan: boolean
    id: string
  }

export interface RecipeResponse {
    recipes: Recipe[]
  }

export interface PocketBaseTestRecipeResponse {
  page: number
  perPage: number
  totalItems: number
  totalPages: number
  items: PocketBaseTestRecipe[]
}

export interface PocketBaseTestRecipe {
  collectionId: string
  collectionName: string
  description: string
  id: string
  image: string
  title: string
  time: number
  vegan: boolean
  created: string
  updated: string
}