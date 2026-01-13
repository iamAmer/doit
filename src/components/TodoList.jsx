import { TodoCard } from './TodoCard'

export function TodoList(props) {
  const { todos, selectedTab } = props

  const filteredTodoList =
    selectedTab === 'All'
      ? todos
      : selectedTab === 'Active'
        ? todos.filter((todo) => !todo.completed)
        : todos.filter((todo) => todo.completed)

  return (
    <>
      {filteredTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todoIndex}
            {...props}
            todo={todo}
          />
        )
      })}
    </>
  )
}
