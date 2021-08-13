import Digest from "./digest";
import Ingredient from "./ingredient";

export default interface Recipe {
    uri: string;
    title: string;
    likes: number;
    image: string;
    dietLabels: string[];
    healthLabels: string[];
    cautionLabels: string[];
    ingredients: Ingredient[];
    nutritionInformation: Digest[];
    calories: number;
    time: string;
    isFavorite: boolean;
}