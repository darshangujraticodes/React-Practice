import React, { useContext, useEffect, useState } from "react";
import { taskContext } from "../context/TaskContext";
import EditTaskForm from "./EditTaskForm";

const Task = () => {
  const { todoData, setTodoData, showUpdateBox, setShowUpdateBox } =
    useContext(taskContext);

  console.log("task page", todoData);

  const [checkedTask, setCheckedTask] = useState([]);

  const [checkBoxID, setCheckBoxID] = useState(0);

  const [editTaskId, setEditTaskId] = useState(0);

  const deleteHandle = (taskId) => {
    const newData = todoData.filter((item) => item.id != taskId);
    setTodoData(newData);
    setCheckedTask(checkedTask.filter((item) => item !== taskId));
  };

  const editHandle = (id) => {
    setShowUpdateBox(true);

    setEditTaskId(id);
  };

  const checkedHandle = (event, taskId) => {
    const checked = event.target.checked;

    setCheckBoxID(taskId);

    if (checked) setCheckedTask([...checkedTask, taskId]);
    else setCheckedTask(checkedTask.filter((item) => item !== taskId));

    // console.log(checkedTask, checked, taskId);
  };

  useEffect(() => {
    const taskId = checkBoxID;
    if (checkedTask.includes(taskId)) {
      // console.log("useeffect = ", checkedTask.includes(taskId));

      const updateData = todoData.map((item) =>
        item.id === taskId ? { ...item, isComplete: true } : item
      );

      setTodoData(updateData);
    } else {
      const updateData = todoData.map((item) =>
        item.id === taskId ? { ...item, isComplete: false } : item
      );

      setTodoData(updateData);
    }
  }, [checkedTask]);

  return (
    <div className="d-flex justify-content-center mt-3">
      <div>
        <div>
          {showUpdateBox ? <EditTaskForm editTaskId={editTaskId} /> : null}
        </div>

        <table>
          <thead>
            <tr>
              <th className="col1">Sr No.</th>
              <th className="col2 text-center">Mark</th>
              <th className="col3">Task Name</th>
              <th className="col4">Priority</th>
              <th className="col5 text-center ">Operation</th>
            </tr>
          </thead>
          <tbody>
            {todoData?.map((item, index) => (
              <tr key={item.id}>
                <td>
                  <div>
                    <p className="text-center mb-0">{index + 1}</p>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-center">
                    <input
                      type="checkbox"
                      checked={checkedTask.includes(item.id)}
                      onChange={(event) => checkedHandle(event, item.id)}
                    />
                  </div>
                </td>
                <td>
                  <p
                    className={` taskTitle ${
                      item.isComplete ? " taskDone " : " taskPending "
                    }  `}
                  >
                    {item.task}
                  </p>
                </td>
                <td>
                  <p className="text-center mb-0">{item.priority}</p>
                </td>
                <td className="  ">
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => editHandle(item.id)}
                      className="iconBtn"
                    >
                      <i className="fa-regular fa-pen-to-square  oprIcon"></i>
                    </button>

                    <button
                      onClick={() => deleteHandle(item.id)}
                      className="iconBtn"
                    >
                      <i className="fa-solid fa-trash mx-3 oprIcon"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Task;
