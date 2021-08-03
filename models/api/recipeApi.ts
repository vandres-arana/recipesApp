export default interface RecipeApi {
    recipe: recipeData;
}

interface recipeData {
    uri: string;
    label: string;
    image: string;
    totalTime: number;
}