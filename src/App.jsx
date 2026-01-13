import { Header } from './components/Header.jsx'
import { Tabs } from './components/Tabs.jsx'
import { TodoList } from './components/TodoList.jsx'
import { TodoInput } from './components/TodoInput.jsx'
import { Footer } from './components/Footer.jsx'
import './index.css'
import './fanta.css'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build a To-Do App', completed: true },
    { id: 3, title: 'Master JavaScript', completed: false },
    { id: 4, title: 'Explore CSS Tricks', completed: true },
  ])

  const [selectedTab, setSelectedTab] = useState('Active')

  function handleAddTodo(newTodo) {
    let newTodos = [
      ...todos,
      { title: newTodo, completed: false, id: crypto.randomUUID() },
    ]
    setTodos(newTodos)
  }

  function handleCompleteTodo(index) {
    const newTodos = todos.map((todo, todoIndex) =>
      todoIndex === index ? { ...todo, completed: true } : todo
    )

    setTodos(newTodos)
  }


  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index)
    setTodos(newTodoList)
  }

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
