// Write your code here
const TodoItem = props => {
  const {todoDetails, deleteItem} = props
  const {id, title} = todoDetails

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button className="btn-button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
