import {combineReducers} from "@reduxjs/toolkit";
import pokemonReducer from "../reducers/pokemonReducer";
import { createStore, compose } from 'redux';

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer, composeEnhancers()
)