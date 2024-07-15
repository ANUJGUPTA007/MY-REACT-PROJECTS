import { useState , useEffect} from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import TodoForms from './components/TodoForms'
import ToDolist from './components/ToDolist'

function App() {


  const [todos, setTodos] = useState([])


  const addtodo = (todo) => {
    setTodos((prev)=> [{id:Date.now(),...todo},...prev]) 
  }


  const  updatetodo = (id,todo) => {
    setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo )))
  }


  const toggletodo = (id) => {
    setTodos((prev)=> prev.map((prevtodo)=> prevtodo.id === id ? {...prevtodo,completed:!prevtodo.completed} : prevtodo )  )
  }
  

  const deletetodo = (id) => {
    setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id !== id))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0) setTodos(todos)
  },[])


  useEffect(()=>{
    (localStorage.setItem("todos" , JSON.stringify(todos)))
  },[todos])





  return (
    <TodoProvider value={{todos , addtodo , deletetodo ,updatetodo ,toggletodo}}>
      {/* <div style={{width:'100vw', height:'100vh' , backgroundSize:'cover', backgroundImage:`url(${panda})`}} ></div> */}
      <div className='h-screen w-screen text-white bg-purple-800 px-96'>
          <h1 className='font-bold text-3xl py-10'>Manage Your ToDo's</h1>
          <div className='mb-7 border p-2.5 rounded-2xl'>
            <TodoForms />
          </div>
          <div className='flex flex-wrap rounded-2xl'>
            {todos.map((todo)=>(
              <div key={todo.id} className='w-full mb-5'>
                <ToDolist todo={todo}/>
              </div>
            ))}
          </div>
      </div>
    </TodoProvider>
  )
}

export default App