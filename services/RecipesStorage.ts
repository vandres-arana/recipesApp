import { Recipe, ShoptItem } from "../models";
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

    static saveIngredientList = (ingredients: ShoptItem[]) => {
        try {
            const jsonValue = JSON.stringify(ingredients)
            AsyncStorage.setItem('@ingredients', jsonValue)
        } catch (e) {
            console.log(e);
        }
    }

    static getIngredientList = async (): Promise<ShoptItem[]> => {
        try {
            const jsonValue = await AsyncStorage.getItem('@ingredients')
            if (jsonValue != null) {
                const ingredients = JSON.parse(jsonValue) as ShoptItem[]
                return ingredients;
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