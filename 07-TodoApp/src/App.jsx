import { useEffect, useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  // const [todoData, setTodoData] = useState([]);

  // const addTask = (name) => {
  //   setTodoData((prev) => {
  //     return [
  //       ...prev,
  //       {
  //         id: todoData.length + 1,
  //         task: name,
  //         isComplete: false,
  //         isEditing: false,
  //       },
  //     ];
  //   });
  // };

  return (
    <>
      <div>
        <h1></h1>
        {/* <TaskForm addTask={addTask} />
        <Task todo={todoData} /> */}

        <TaskForm />
        <Task />
      </div>
    </>
  );
}

export default App;
