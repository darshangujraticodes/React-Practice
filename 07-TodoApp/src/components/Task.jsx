import React, { useContext, useState } from "react";
import { taskContext } from "../context/TaskContext";

const Task = () => {
  const { todoData, setTodoData } = useContext(taskContext);

  const [isChecked, setIsChecked] = useState(false);

  const deleteHandle = (taskId) => {
    const newData = todoData.filter((item) => item.id != taskId);
    setTodoData(newData);
  };

  const checkedHandle = (event, taskId) => {
    const checked = event.target.checked;

    console.log(checked);
    setIsChecked(checked);

    // const updateData = todoData.map((item) =>
    //   item.id === taskId ? { ...item, isComplete: !stateVal } : item
    // );

    // setTodoData(updateData);
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <div>
        <table>
          <thead>
            <tr>
              <th className="col1">Sr No.</th>
              <th className="col2 text-center">Mark</th>
              <th className="col3">Task Name</th>
              {/* <th className="col4">Status</th> */}
              <th className="col5 text-center ">Operation</th>
            </tr>
          </thead>
          <tbody>
            {todoData?.map((item) => (
              <tr key={item.id}>
                <td>
                  <div>
                    <p className="text-center mb-0">{item.id}</p>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-center">
                    <input
                      type="checkbox"
                      checked={isChecked}
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
                <td className="  ">
                  <div className="d-flex justify-content-center">
                    <button className="iconBtn">
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
