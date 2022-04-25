export default function Task(props) {
  function handleDelete() {
    props.deleteItem(props.id);
  }
  return (
    <li className={props.completed ? "completed" : ""}>
      {props.task} <button onClick={handleDelete}>Remove </button>
    </li>
  );
}
