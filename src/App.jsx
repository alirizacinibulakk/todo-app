import { useState } from 'react'
import './App.css'

function App() {
  const [todos , setTodos] = useState(['Todo1','Todo2'])
  const [input, setInput] = useState("");

  function handleInputChange(e){
    setInput(e.target.value);
  }

  function addTodo(){
    console.log(input);
    setTodos([...todos, input])
    
  }
  return (
    <div className='container'>
      <header>
        <h1>Todo App</h1>
      </header>
      <div className="todo-add">
        <input type="text" placeholder='Todo ekleyin' value={input}  onChange={handleInputChange}/>
        <button onClick={addTodo}>Ekle</button>
      </div>
      <div>
        {todos.map(todo => (
          <>
          <input type="checkbox" name="" id=""/>
          <span key={todo}>{todo}</span>
          </>
        ))}
      </div>
    </div>
  )
}

export default App