import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./recipeSlice";

const store = configureStore({
    reducer: recipeSlice,
});

export default store;