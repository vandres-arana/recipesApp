import { Recipe, RecipeApi, recipeWrapper } from "../models";

class RecipesService {
    static URL = 'https://api.edamam.com/api/recipes/v2';
    static ApiId = '9c81aebf';
    static ApiKey = '3a3fa1c3a45e684ec05b93ac52328f1c';

    static getRecipes = (search: string = 'chicken'): Promise<Recipe[]> => {
        const input = `${this.URL}?q=${search}&app_id=${this.ApiId}&app_key=${this.ApiKey}&type=public`
        return fetch(input)
            .then(response => response.json())
            .then(response => {
                const recipesFromApi = response.hits as RecipeApi[]
                return recipesFromApi.map(recipeWrapper);
            }).catch(error => {
                console.log(error);
                return [];
            })
    }

    static getRecipeDetails = (idenfifier: string): Promise<Recipe> => {
        const input = `${this.URL}/${idenfifier}?app_id=${this.ApiId}&app_key=${this.ApiKey}&type=public`
        return fetch(input)
            .then(response => response.json())
            .then(response => {
                const recipeFromApi = response as RecipeApi
                return recipeWrapper(recipeFromApi);
            })
    }
}

export default RecipesService