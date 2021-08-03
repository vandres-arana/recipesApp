import { Recipe } from "../models";
import AsyncStorage from '@react-native-async-storage/async-storage';

class RecipesStorage {
    
    static saveRecipes = async (recipes: Recipe[]) => {
        try {
            const jsonValue = JSON.stringify(recipes)
            await AsyncStorage.setItem('@recipes', jsonValue)
        } catch (e) {
            console.log(e);
        }
    }

    static getRecipes = async (): Promise<Recipe[]> => {
        try {
            const jsonValue = await AsyncStorage.getItem('@recipes')
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