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