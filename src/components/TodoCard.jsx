export function TodoCard(props) {
  const { todo, todoIndex, handleCompleteTodo, handleDeleteTodo } = props

  if (!todo) return null

  const title = todo.title ?? todo.text ?? ''
  const completed = !!todo.completed

  return (
    <div className='todo-item card'>
      <p>{title}</p>
      <div className='todo-buttons'>
        <button
          disabled={completed}
          onClick={() => {
            handleCompleteTodo(todoIndex)
          }}
        >
          Done
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(todoIndex)
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
