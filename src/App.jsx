import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {


  return (
    <>
      <div className='space-y-4'>
        <h1 className='text-white font-extrabold'>📃Basic TO-Do List📃</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  )
}

export default App
