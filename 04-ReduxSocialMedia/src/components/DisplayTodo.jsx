import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../features/todo/todoSlice";
import AddTodo from "./AddTodo";

function DisplayTodo() {
  const [taskData, setTaskData] = useState();

  const storeTodoData = useSelector((state) => state.todoStoreReducer.todos);

  const dispatch = useDispatch();

  // console.log(storeTodoData);

  // console.log(taskData);

  return (
    <>
      <div className="mt-3">
        <AddTodo />
      </div>

      <div className=" mt-4 d-flex justify-content-center">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {storeTodoData?.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.text}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button onClick={() => dispatch(removeTodo(item.id))}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DisplayTodo;
