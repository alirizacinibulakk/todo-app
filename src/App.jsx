import { useState } from 'react'
import './App.css'

function App() {
  const [todos , setTodos] = useState([])
  const [input, setInput] = useState("");

  function handleInputChange(e){
    setInput(e.target.value);
  }

  function addTodo(){
    setTodos([...todos, {
      id: crypto.randomUUID(),
      title: input,
      completed: false,
    }])
    setInput("");
    console.log(todos);
  }
  function handleCheckboxChange(e, todo){
    todo.completed = !todo.completed;
    setTodos([...todos]);
  }

  function handleDeleteTodo(id){
    setTodos(todos.filter(x => x.id !== id));
  }
  function handleEditTodo(id){
    setTodos(todos.map(x => {
      if(x.id === id){
        x.title = input;
      }
      return x;
    }))
    setInput("");
  }
  return (
    <>
      <header>
        <h1>Todo App</h1>
      </header>
      <div className='container'>
        <div className="todo-add">
          <input type="text" placeholder='Todo ekleyin' value={input}  onChange={handleInputChange}/>
          <button disabled={input.trim()== ""} onClick={addTodo}>Ekle</button>
        </div>
        <div className='todo-list-container'>
            <ul className='todo-list'>
              {
                todos.map(todo => (
                <li key={todo.id} className="todo">
                  <label htmlFor={`todo-${todo.id}`}>
                    <input id={`todo-${todo.id}`} type="checkbox" onChange={(e) => handleCheckboxChange(e,todo)}/>
                  </label>
                  <span className={`${todo.completed ? "line-through" : ""}`}>{todo.title}</span>
                  <button onClick={() => handleDeleteTodo(todo.id)}>Sil</button>
                  <button onClick={() => handleEditTodo(todo.id)}>Düzenle</button>
                </li>                  
                ))
              }
            </ul>
          </div>
      </div>
    </>
  )
}

export default App