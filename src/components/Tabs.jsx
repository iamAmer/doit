export function Tabs({ todos = [] }) {
  const tabs = ['All', 'Active', 'Completed']

  return (
    <nav className='tab-container'>
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === 'All'
            ? todos.length
            : tab === 'Active'
              ? todos.filter((todo) => !todo.completed).length
              : todos.filter((todo) => todo.completed).length

        return (
          <button key={tabIndex} className='tab-button'>
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        )
      })}
    </nav>
  )
}
