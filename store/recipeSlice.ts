import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Recipe } from '../models'
import RecipesService from '../services/RecipesService';

type InitialStateProps = {
    loading: boolean,
    recipes: Recipe[],
    basicSearch: string,
    dietType: string,
    healthType: string,
    mealType: string,
    dishType: string,
    counter: number,
}

const initialState: InitialStateProps = {
    loading: false,
    recipes: [],
    basicSearch: '',
    dietType: '',
    healthType: '',
    mealType: '',
    dishType: '',
    counter: 100,
}

const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        loadRecipes(state, action: PayloadAction<Recipe[]>) {
            state.recipes = action.payload;
        },
        increment(state) {
            state.counter++;
        },
        decrement(state, action) {
            state.counter -= action.payload;
        },
        markAsFavorite(state, action: PayloadAction<Recipe>) {
            state.recipes.push(action.payload)
        },
        resetFilters(state) {
            state.basicSearch = ''
        }
    }
});

export const { increment, decrement, loadRecipes } = recipeSlice.actions;

export default recipeSlice.reducer;
