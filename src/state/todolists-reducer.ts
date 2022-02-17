import {TodolistType} from "../App";

type ActionType = any;

export const todolistsReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state;
        default:
            return state;
    }
}

const RmoveTodolistAC = () => {

}