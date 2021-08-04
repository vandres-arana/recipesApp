import Digest from "../digest";
import Ingredient from "../ingredient";

export default interface RecipeApi {
    recipe: recipeData;
}

interface recipeData {
    uri: string;
    label: string;
    image: string;
    totalTime: number;
    dietLabels: string[];
    healthLabels: string[];
    cautions: string[];
    ingredients: Ingredient[];
    calories: number;
    digest: Digest[];
}