import { Recipe, RecipeApi, recipeWrapper, SearchFilters } from "../models";
import { Helpers } from "../utils";

class RecipesService {
    static URL = 'https://api.edamam.com/api/recipes/v2';
    static ApiId = '9c81aebf';
    static ApiKey = '3a3fa1c3a45e684ec05b93ac52328f1c';

    static getRecipes = (searchFilters: SearchFilters): Promise<Recipe[]> => {
        console.log("EN")
        console.log(searchFilters)
        const query = Helpers.constructQueryParams(searchFilters.filters)
        console.log("ON")
        const input = `${this.URL}?q=${searchFilters.search}&app_id=${this.ApiId}&app_key=${this.ApiKey}&type=public${query}`
        console.log(input)
        return fetch(input)
            .then(response => {
                return response.json()
            })
            .then(response => {
                if (response) {
                    const recipesFromApi = response.hits as RecipeApi[]
                    return recipesFromApi.map(recipeWrapper);
                } else {
                    return [];
                }
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