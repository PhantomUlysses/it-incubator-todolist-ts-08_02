import {combineReducers, createStore} from "redux";
import {TaskReducer} from "./TaskReducer";
import {FilterReducer} from "./FilterReducer";

let rootReducer = combineReducers({
    tasks: TaskReducer,
    filter: FilterReducer
});

export type RootReducerType = ReturnType<typeof rootReducer>;

export let store = createStore(rootReducer);