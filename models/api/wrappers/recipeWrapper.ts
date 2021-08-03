import RecipeApi from "../recipeApi"
import { Recipe } from "../.."

const recipeWrapper = (recipe: RecipeApi): Recipe => ({
    uri: recipe.recipe.uri,
    title: recipe.recipe.label,
    time: recipe.recipe.totalTime.toString(),
    likes: Math.floor(Math.random() * 150) + 70,
    image: recipe.recipe.image
})

export default recipeWrapper