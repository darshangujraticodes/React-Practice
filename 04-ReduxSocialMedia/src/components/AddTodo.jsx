import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [taskTitle, setTaskTitle] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo(taskTitle));

    setTaskTitle("");
  };

  console.log(taskTitle);

  return (
    <>
      <div className="formWrap">
        <form onSubmit={addTodoHandler}>
          <div>
            <input
              placeholder="Enter Todo Task"
              type="text"
              className="todoInput"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>

          <div className="centerData">
            <input type="submit" className="submitBtn" />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTodo;
