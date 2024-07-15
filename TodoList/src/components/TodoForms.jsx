import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoForms() {
 
    const [todo , setTodo] = useState("")

    const {addtodo} = useTodo()

    const add = (e)=>{
        e.preventDefault()

        if (!todo) return

        addtodo({ todo , completed: false})
        setTodo("")
    }
    
  return (
    <form onSubmit={add} className='flex'>
        <input  type="text" 
        placeholder='Write Todo ...' 
        className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 py-1.5 bg-white/5 font-bold'
        value={todo}
        onChange={(e)=> setTodo(e.target.value)} />

        <button type='submit' className='font-bold rounded-r-lg px-3 py1 bg-yellow-300 text-black'>Add</button>

    </form>
  )
}

export default TodoForms