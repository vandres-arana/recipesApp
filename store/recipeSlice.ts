import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AdvancedFilter, FilterData, Recipe } from '../models'
import RecipesService from '../services/RecipesService';
import { FILTERS } from '../static';

export const loadRecipesFromApi = createAsyncThunk('recipes/loadRecipes', (search: string) => {
    return RecipesService.getRecipes(search);
});

type InitialStateProps = {
    loading: boolean,
    recipes: Recipe[],
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
        updateSearch(state, action: PayloadAction<FilterData>) {
            state.currentSearch = action.payload
        },
        displayBottomSheet(state, action: PayloadAction<boolean>) {
            state.displayBottomSheet = action.payload
        },
        setAdvancedFilter(state, action: PayloadAction<AdvancedFilter>) {
            state.advancedFilters[action.payload.filterGroup] = action.payload.filter
        },
        resetFilters(state) {
            state.currentSearch = FILTERS[0]
        },
        markAsFavorite(state, action: PayloadAction<string>) {
            const foundIndex = state.recipes.findIndex(recipe => recipe.title === action.payload)
        },
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

export const { loadRecipes, updateSearch, displayBottomSheet, setAdvancedFilter } = recipeSlice.actions;

export default recipeSlice.reducer;
