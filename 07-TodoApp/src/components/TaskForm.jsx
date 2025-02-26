import React, { useState } from "react";

const TaskForm = ({}) => {
  const defaultData = [
    {
      id: 1,
      task: "",
      status: "Pending",
    },
  ];

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

  const [taskName, setTaskName] = useState("");

  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(taskName);
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
