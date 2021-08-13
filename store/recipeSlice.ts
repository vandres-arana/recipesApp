import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '.';
import { AdvancedFilter, FilterData, Recipe, SearchFilters } from '../models'
import RecipesService from '../services/RecipesService';
import RecipesStorage from '../services/RecipesStorage';
import { FILTERS } from '../static';

export const loadRecipesFromApi = createAsyncThunk('recipes/loadRecipes', (searchFilters: SearchFilters) => {
    return RecipesService.getRecipes(searchFilters);
});

export const loadRecipesFromStorage = createAsyncThunk('recipes/loadRecipesFromStorage', () => {
    return RecipesStorage.getRecipes()
});

type InitialStateProps = {
    loading: boolean,
    recipes: Recipe[],
    favorites: Recipe[],
    currentSearch: FilterData,
    displayBottomSheet: boolean,
    advancedFilters: FilterData[],
}

const initialFilter: FilterData = {
    id: -1,
    title: ''
}

const initialState: InitialStateProps = {
    loading: false,
    recipes: [],
    favorites: [],
    currentSearch: FILTERS[0],
    displayBottomSheet: false,
    advancedFilters: [
        initialFilter,
        initialFilter,
        initialFilter,
        initialFilter,
        initialFilter,
    ]
}

const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        loadRecipes(state, action: PayloadAction<Recipe[]>) {
            state.recipes = action.payload;
        },
        loadFavorites(state, action: PayloadAction<Recipe[]>) {
            state.favorites = action.payload;
        },
        updateSearch(state, action: PayloadAction<FilterData>) {
            state.currentSearch = action.payload;
        },
        displayBottomSheet(state, action: PayloadAction<boolean>) {
            state.displayBottomSheet = action.payload;
        },
        setAdvancedFilter(state, action: PayloadAction<AdvancedFilter>) {
            state.advancedFilters[action.payload.filterGroup] = action.payload.filter;
        },
        resetStoreFilters(state) {
            state.advancedFilters = [
                initialFilter,
                initialFilter,
                initialFilter,
                initialFilter,
                initialFilter,
            ];
        },
        markAsFavorite(state, action: PayloadAction<Recipe>) {
            const foundIndex = state.recipes.findIndex(recipe => recipe.title === action.payload.title);
            if (foundIndex < 0) {
                return
            }
            if (!state.recipes[foundIndex].isFavorite) {
                state.recipes[foundIndex].isFavorite = true
                state.favorites.push(action.payload);
            } else {
                const foundIndexFavorite = state.favorites.findIndex(recipe => recipe.title === action.payload.title);
                if (foundIndexFavorite < 0) {
                    return
                }
                state.recipes[foundIndex].isFavorite = false;
                state.favorites.splice(foundIndexFavorite, 1);
            }
            RecipesStorage.saveRecipes(state.favorites);
        },
    },
    extraReducers: builder => {
        builder.addCase(loadRecipesFromApi.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loadRecipesFromApi.fulfilled, (state, action: PayloadAction<Recipe[]>) => {
            state.loading = false;
            state.recipes = action.payload.map((recipe) => {
                const foundIndex = state.favorites.findIndex(favoriteRecipe => favoriteRecipe.title == recipe.title);
                if (foundIndex > -1) {
                    recipe.isFavorite = true
                }
                return recipe
            })
        });
        builder.addCase(loadRecipesFromApi.rejected, (state) => {
            state.recipes = [];
        });
        builder.addCase(loadRecipesFromStorage.fulfilled, (state, action: PayloadAction<Recipe[]>) => {
            state.loading = false;
            state.favorites = action.payload.map((recipe) => {
                recipe.isFavorite = true
                return recipe
            });
        });
        builder.addCase(loadRecipesFromStorage.rejected, (state) => {
            state.favorites = [];
        })
    }
});

export const { loadRecipes, updateSearch, displayBottomSheet, setAdvancedFilter, resetStoreFilters, markAsFavorite } = recipeSlice.actions;

export default recipeSlice.reducer;

export const getRecipes = (state: RootState) => state.recipes.recipes;

export const getCurrentSearch = (state: RootState) => state.recipes.currentSearch.title;

export const getDisplayBottomSheet = (state: RootState) => state.recipes.displayBottomSheet;

export const getFilters = (state: RootState) => state.recipes.advancedFilters;

export const getSearchId = (state: RootState) => state.recipes.currentSearch.id;

export const getFavorites = (state: RootState) => state.recipes.favorites;
