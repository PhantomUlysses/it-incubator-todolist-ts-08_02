import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {addTaskAC, changeStatusAC, removeTaskAC, TaskReducer} from "./redux/TaskReducer";
import {changeFilterAC, FilterReducer} from "./redux/FilterReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "./redux/store";

export type FilterValuesType = "all" | "active" | "completed";

function App() {
    let dispatch = useDispatch();
    // let tasks = useSelector<RootReducerType, Array<TaskType>>(state => state.tasks);

    // let filter = useSelector<RootReducerType, FilterValuesType>(state => state.filter);
    // let [filter, filterDispatch] = useReducer(FilterReducer,"all");


    function removeTask(id: string) {
       /* let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);*/
        // tasksDispatch(removeTaskAC(id))
        dispatch(removeTaskAC(id));
    }

    function addTask(title: string) {
        /*let task = {id: v1(), title: title, isDone: false};
        let newTasks = [task, ...tasks];
        setTasks(newTasks);*/
        // tasksDispatch(addTaskAC(title))
        dispatch(addTaskAC(title));
    }

    function changeStatus(taskId: string, isDone: boolean) {
       /* let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }

        setTasks([...tasks]);*/

        // tasksDispatch(changeStatusAC(taskId,isDone))
        dispatch(changeStatusAC(taskId, isDone));
    }


    // let tasksForTodolist = tasks;
    //
    // if (filter === "active") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === false);
    // }
    // if (filter === "completed") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === true);
    // }

    // function changeFilter(value: FilterValuesType) {
    //     // filterDispatch(changeFilterAC(value))
    //     dispatch(changeFilterAC(value));
    // }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      // tasks={tasksForTodolist}
                      removeTask={removeTask}
                      // changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeStatus}
                      // filter={filter}
            />
        </div>
    );
}

export default App;
