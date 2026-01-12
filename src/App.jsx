import { Header } from './components/Header.jsx'
import { Tabs } from './components/Tabs.jsx'
import { TodoList } from './components/TodoList.jsx'
import { TodoInput } from './components/TodoInput.jsx'
import { Footer } from './components/Footer.jsx'
import './index.css'
import './fanta.css'

function App() {
  const todos = [
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build a To-Do App', completed: true },
    { id: 3, title: 'Master JavaScript', completed: false },
    { id: 4, title: 'Explore CSS Tricks', completed: true },
  ]
  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput />
      <Footer />
    </>
  )
}

export default App
