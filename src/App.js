import { useState } from "react";
import "./App.css";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Feed kids",
      completed: true,
    },
    {
      id: 2,
      task: "Buy food",
      completed: false,
    },
  ]);
  function deleteItem(id) {
    setTasks((oldState) => oldState.filter((item) => item.id !== id));
  }
  return (
    <div className="App">
      <form>
        <label htmlFor="taskInput">Add the task:</label>
        <input type="text" id="tastInput"></input>
        <button>Add task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <Task deleteItem={deleteItem} {...task} />
        ))}
      </ul>
    </div>
  );
}

export default App;
