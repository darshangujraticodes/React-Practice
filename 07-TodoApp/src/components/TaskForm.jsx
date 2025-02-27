import React, { useContext, useState } from "react";
import { taskContext } from "../context/TaskContext";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const { todoData, setTodoData } = useContext(taskContext);

  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(taskName);

    if (!taskName) {
      alert("Enter Valid Task Name");
      return;
    }

    setTodoData((prev) => {
      return [
        ...prev,
        {
          id: todoData.length + 1,
          task: taskName,
          isComplete: false,
          isEditing: false,
        },
      ];
    });

    setTaskName("");
  };

  return (
    <>
      <div>
        <h1 className="text-center mt-3">Get Things Done!</h1>
        <p className="text-center">0/0 Task Completed</p>

        <div className="d-flex justify-content-center mt-3">
          <form action="" onSubmit={onSubmitHandle}>
            <input
              type="text"
              placeholder="Build Your Todays Task List"
              className="inputText"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <button type="submit" className="submitBtn">
              +
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
