import { useState } from "react";
import "./App.css";
import Task from "./components/Task";
import Fetcher from "./components/Fetcher";

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
  const [showCompleted, setShowCompleted] = useState(true);
  function deleteItem(id) {
    setTasks((oldState) => oldState.filter((item) => item.id !== id));
  }
  function submit(e) {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      task: e.target.elements.taskInput.value,
      completed: false,
    };
    setTasks((oldState) => oldState.concat(newTask));
  }

  function toggleCompletion(id) {
    setTasks((oldState) => {
      return oldState.map((item) => {
        if (id === item.id) {
          const newItem = { ...item };
          newItem.completed = !newItem.completed;
          return newItem;
        }
        return item;
      });
    });
  }
  let all = tasks;
  if (!showCompleted) {
    all = tasks.filter((item) => item.completed === false);
  }
  return (
    <div className="App">
      <Fetcher />
      <button
        onClick={() => {
          setShowCompleted((oldState) => !oldState);
        }}
      >
        Show
      </button>
      <form onSubmit={submit}>
        <label htmlFor="taskInput">Add the task:</label>
        <input type="text" id="tastInput" name="taskInput"></input>
        <button>Add task</button>
      </form>
      <ul>
        {all.map((task) => (
          <Task toggleCompletion={toggleCompletion} deleteItem={deleteItem} {...task} />
        ))}
      </ul>
    </div>
  );
}

export default App;
