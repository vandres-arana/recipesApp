import RecipeApi from "../recipeApi"
import { Recipe } from "../.."

const recipeWrapper = (recipe: RecipeApi): Recipe => ({
    uri: recipe.recipe.uri,
    title: recipe.recipe.label,
    time: recipe.recipe.totalTime.toString(),
    likes: Math.floor(Math.random() * 150) + 70,
    image: recipe.recipe.image,
    dietLabels: recipe.recipe.dietLabels,
    healthLabels: recipe.recipe.healthLabels,
    cautionLabels: recipe.recipe.cautions,
    ingredients: recipe.recipe.ingredients,
    calories: recipe.recipe.calories,
    nutritionInformation: recipe.recipe.digest,
})

export default recipeWrapper