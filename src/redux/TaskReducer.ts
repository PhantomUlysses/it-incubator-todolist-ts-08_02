import {TaskType} from "../Todolist";
import {v1} from "uuid";

let initialState: Array<TaskType> = [
    {id: v1(), title: "HTML&CSS", isDone: true},
    {id: v1(), title: "JS", isDone: true},
    {id: v1(), title: "ReactJS", isDone: false},
    {id: v1(), title: "Rest API", isDone: false},
    {id: v1(), title: "GraphQL", isDone: false},
];

export const TaskReducer = (state = initialState, action: ActionType): Array<TaskType> => {
    switch (action.type) {
        case "REMOVE-TASK":
            let newState = [...state]
            return  newState.filter(t => t.id != action.id);

        case "ADD-TASK":

            return [{id: v1(), title: action.title, isDone: false},...state];

        case "CHANGE-STATUS":
            
            return state.map(m => m.id === action.taskId ? {...m, isDone: action.isDone} : m)

        default: return state
    }
}

type ActionType = removeTaskACType | addTaskACType | changeStatusACType
type removeTaskACType = ReturnType<typeof removeTaskAC>

export const removeTaskAC = (id: string) => {
    return {
        type: "REMOVE-TASK",
        id
    } as const
}

type addTaskACType = ReturnType<typeof addTaskAC>

export const addTaskAC = (title: string) => {
    return {
        type: "ADD-TASK",
        title
    } as const
}

type changeStatusACType = ReturnType<typeof changeStatusAC>
export const changeStatusAC = (taskId: string, isDone: boolean) => {
    return {
        type: "CHANGE-STATUS",
        taskId,
        isDone
    } as const
}
