import { TodoCard } from './TodoCard'

export function TodoList(props) {
  const { todos } = props

  const tab = 'All'
  const filteredTodoList =
    tab === 'All'
      ? todos
      : tab === 'Active'
        ? todos.filter((todo) => !todo.completed)
        : todos.filter((todo) => todo.completed)

  return (
    <>
      {filteredTodoList.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} todoIndex={todoIndex} todo={todo} />
      })}
    </>
  )
}
