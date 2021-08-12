import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 100,
}

const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state, action) {
            state.counter -= action.payload;
        }
    }
});

export const { increment, decrement } = recipeSlice.actions;

export default recipeSlice.reducer;
