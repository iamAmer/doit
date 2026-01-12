export function TodoCard(props) {
  const { todo } = props

  if (!todo) return null

  const title = todo.title ?? todo.text ?? ''
  const completed = !!todo.completed

  return (
    <div className='todo-item card'>
      <p>{title}</p>
      <div className='todo-buttons'>
        <button disabled={completed}>Done</button>
        <button>Delete</button>
      </div>
    </div>
  )
}
