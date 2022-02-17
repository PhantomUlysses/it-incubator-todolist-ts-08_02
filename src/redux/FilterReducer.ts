import {FilterValuesType} from "../App";

let initialState: FilterValuesType = 'all';

export const FilterReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "CHANGE-FILTER":
            return state = action.value;

        default: return state
    }
}

type ActionType = ReturnType<typeof changeFilterAC>

export const changeFilterAC = (value: FilterValuesType) => {
    return {
        type: "CHANGE-FILTER",
        value
    } as const
}