import { Header } from './components/Header.jsx'
import { Tabs } from './components/Tabs.jsx'
import { TodoList } from './components/TodoList.jsx'
import { TodoInput } from './components/TodoInput.jsx'
import { Footer } from './components/Footer.jsx'
import './index.css'
import './fanta.css'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState(() => {
    // try to load saved todos from localStorage on initial render
    try {
      if (typeof localStorage !== 'undefined') {
        const saved = localStorage.getItem('todo-app')
        if (saved) {
          const db = JSON.parse(saved)
          if (db && Array.isArray(db.todos)) return db.todos
        }
      }
    } catch {
      // ignore parse errors and fall back to defaults
    }

    return [{ id: 1, title: 'Learn React', completed: false }]
  })

  const [selectedTab, setSelectedTab] = useState('Active')

  function handleAddTodo(newTodo) {
    let newTodos = [
      ...todos,
      { title: newTodo, completed: false, id: crypto.randomUUID() },
    ]
    setTodos(newTodos)
    handleSaveData(newTodos)
  }

  function handleCompleteTodo(index) {
    const newTodos = todos.map((todo, todoIndex) =>
      todoIndex === index ? { ...todo, completed: true } : todo
    )

    setTodos(newTodos)
    handleSaveData(newTodos)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index)
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currentTodos) {
    // store under `todos` so load logic can read `db.todos`
    localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodos }))
  }

  // initial load handled by lazy useState initializer above

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
      <Footer />
    </>
  )
}

export default App
