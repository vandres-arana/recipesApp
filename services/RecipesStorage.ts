import { Recipe } from "../models";
import AsyncStorage from '@react-native-async-storage/async-storage';

class RecipesStorage {
    
    static saveRecipes = (recipes: Recipe[]) => {
        try {
            const jsonValue = JSON.stringify(recipes)
            AsyncStorage.setItem('@favorites', jsonValue)
        } catch (e) {
            console.log(e);
        }
    }

    static getRecipes = async (): Promise<Recipe[]> => {
        try {
            const jsonValue = await AsyncStorage.getItem('@favorites')
            if (jsonValue != null) {
                const recipes = JSON.parse(jsonValue) as Recipe[]
                return recipes;
            } else {
                return []
            }
        } catch (e) {
            console.log(e);
            return []
        }
    }
}

export default RecipesStorage