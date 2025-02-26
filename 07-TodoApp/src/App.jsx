import { useEffect, useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  const [todoData, setTodoData] = useState([]);

  const addTask = (name) => {
    setTodoData((prev) => {
      return [
        ...prev,
        {
          id: todoData.length + 1,
          task: name,
          isComplete: false,
        },
      ];
    });
  };

  return (
    <>
      <div>
        <h1></h1>
        <TaskForm onAdd={addTask} />
        <Task todo={todoData} />
      </div>
    </>
  );
}

export default App;
