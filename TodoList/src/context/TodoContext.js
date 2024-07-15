import React, { createContext , useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo:"todo",
            completed : false
        }
    ],
    addtodo : (todo) => {},
    deletetodo : (id) => {},
    updatetodo : (id,todo) => {},
    toggletodo : (id) => {},
})

export const TodoProvider = TodoContext.Provider


export const useTodo = ()=>{
    return useContext(TodoContext)
}


