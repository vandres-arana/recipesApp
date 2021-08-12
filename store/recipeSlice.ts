import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Recipe } from '../models'
import RecipesService from '../services/RecipesService';
import { FILTERS } from '../static';

export const loadRecipesFromApi = createAsyncThunk('recipes/loadRecipes', (search: string) => {
    return RecipesService.getRecipes(search);
});

type InitialStateProps = {
    loading: boolean,
    recipes: Recipe[],
    currentSearch: string,
    dietType: string,
    healthType: string,
    mealType: string,
    dishType: string,
    counter: number,
}

const initialState: InitialStateProps = {
    loading: false,
    recipes: [],
    currentSearch: FILTERS[0].title,
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
        markAsFavorite(state, action: PayloadAction<string>) {
            const foundIndex = state.recipes.findIndex(recipe => recipe.title === action.payload)
        },
        resetFilters(state) {
            state.currentSearch = FILTERS[0].title
        }
    },
    extraReducers: builder => {
        builder.addCase(loadRecipesFromApi.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loadRecipesFromApi.fulfilled, (state, action: PayloadAction<Recipe[]>) => {
            state.loading = false;
            state.recipes = action.payload
        });
        builder.addCase(loadRecipesFromApi.rejected, (state) => {
            state.recipes = []
        })
    }
});

export const { increment, decrement, loadRecipes } = recipeSlice.actions;

export default recipeSlice.reducer;
