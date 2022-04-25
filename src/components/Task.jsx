export default function Task(props) {
  function handleDelete() {
    props.deleteItem(props.id);
  }
  function handleCompletion() {
    props.toggleCompletion(props.id);
  }
  return (
    <li className={props.completed ? "completed" : ""}>
      {props.task} <button onClick={handleCompletion}>{props.completed ? "Undo" : "Complete"} </button>
      <button onClick={handleDelete}>Remove </button>
    </li>
  );
}
