import { combineReducers, legacy_createStore } from "redux";
import { reducer as CounterReducer } from "./CounterReducer";
import { reducer as ThemeReducer } from "./ThemeReducer";


const rootreducers=combineReducers({CounterReducer,ThemeReducer})
export const store = legacy_createStore(rootreducers);