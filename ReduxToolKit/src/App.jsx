
import './App.css'
import AddItems from './components/AddItems'
import Todo from './components/Todo'

function App() {

  return (
    <>
      <h1 className='text-white text-3xl font-rubik '>MY TODOS</h1>
      <AddItems />
      <Todo />
    </>
  )
}

export default App
