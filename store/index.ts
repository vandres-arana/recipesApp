import { configureStore } from "@reduxjs/toolkit";
import errorHandler from "../middlewares/error-management";
import logger from "../middlewares/logger";
import thunk from 'redux-thunk';
import recipeRecucer from "./recipeSlice";

const middlewares: any = [
    thunk,
    // logger,
    // errorHandler,
]

const store = configureStore({
    reducer: {
        recipes: recipeRecucer
    },
    middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>

export default store;