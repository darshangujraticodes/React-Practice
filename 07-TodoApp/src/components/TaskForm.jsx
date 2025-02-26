import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");

  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(taskName);

    if (!taskName) {
      alert("Enter Valid Task Name");
      return;
    }

    onAdd(taskName);
    setTaskName("");
  };

  return (
    <>
      <div>
        <h1 className="text-center mt-3">0/0 Task Complete</h1>

        <div className="d-flex justify-content-center mt-3">
          <form action="">
            <input
              type="text"
              placeholder="Enter Task Name"
              className="inputText"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <button onClick={onSubmitHandle} className="submitBtn">
              +
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
