import { useState } from 'react'
import './App.css'
import TodoLIst from './TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <h1>testing</h1>
    <TodoLIst/>
    </div>
  )
}

export default App
