import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

type ActionsTypes = ReturnType<typeof RemoveTodolistAC>
    | ReturnType<typeof AddTodolistAC>
    | ReturnType<typeof ChangeTodolistTitleAC>
    | ReturnType<typeof ChangeTodolistFilterAC>;

export const todolistsReducer = (state: Array<TodolistType>, action: ActionsTypes) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.id);
        case 'ADD-TODOLIST':
            return [...state, {id: v1(), title: action.title, filter: 'all'}];
        case 'CHANGE-TODOLIST-TITLE':
            return state.map(tl => tl.id === action.id ? {...tl, title: action.title} : tl);
        case 'CHANGE-TODOLIST-FILTER':
            return state.map(tl => tl.id === action.id ? {...tl, filter: action.filter} : tl);
        default:
            return state;
    }
}

export const RemoveTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST', id
    } as const;
}

export const AddTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST', title
    } as const;
}

export const ChangeTodolistTitleAC = (id: string, title: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE', id , title
    } as const;
}

export const ChangeTodolistFilterAC = (id: string, filter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER', id, filter
    } as const;
}