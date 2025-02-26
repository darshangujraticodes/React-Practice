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

  const todo = [
    {
      id: 1,
      task: "Gluta LP",
      status: "Pending",
    },
    {
      id: 2,
      task: "Nursing LP",
      status: "Pending",
    },
    {
      id: 3,
      task: "IV Therapy LP",
      status: "Done",
    },
    {
      id: 4,
      task: "NadIV Therapy LP",
      status: "Working",
    },
  ];

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
