import { AspectRatio } from "@/components/ui/aspect-ratio";

export default async function RecipePage({ params }: { params: { id: string } }) {
  const recipe = await getRecipe(params.id);

  async function getRecipe(id: string) {
    const result = await fetch("https://mealplan.lawsonserver.xyz/api/recipe/" + id);
    if (!result.ok) {
      console.log("Error fetching data.");
      throw new Error('Failed to fetch data');
    }
    const data = await result.json();
    return data.recipe;
  }

  return (
    <>
      <div className="flex flex-row min-h-screen w-full flex-col bg-muted/40">
        <div>
        {/* <AspectRatio ratio={9 / 16}> */}
          <img src={`/img/${recipe.image}`} alt={recipe.title} />
        {/* </AspectRatio> */}
        </div>
        <div>
        <h1>Recipe ID: {params.id}</h1>
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
        </div>
        {/* <button onClick={() => useRouter().push('/recipe')}>Back to Recipe List</button> */}
      </div>
    </>
  );
}
