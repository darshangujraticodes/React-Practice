import React from "react";

const Task = ({ todo }) => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <div>
        <table>
          <thead>
            <tr>
              <th className="col1">Sr No.</th>
              <th className="col2 text-center">Mark</th>
              <th className="col3">Task Name</th>
              <th className="col4">Status</th>
              <th className="col5 text-center ">Operation</th>
            </tr>
          </thead>
          <tbody>
            {todo?.map((item) => (
              <tr key={item.id}>
                <td>
                  <div>
                    <p className="text-center mb-0">{item.id}</p>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-center">
                    <input type="checkbox" />
                  </div>
                </td>
                <td>{item.task}</td>
                <td>{item.status}</td>
                <td className="  ">
                  <div className="d-flex justify-content-center">
                    <i className="fa-regular fa-pen-to-square  oprIcon"></i>
                    <i className="fa-solid fa-trash mx-3 oprIcon"></i>
                  </div>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <div>
                  <p className="text-center mb-0">1.</p>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-center">
                  <input type="checkbox" />
                </div>
              </td>
              <td>Create Gluta LP</td>
              <td>Pending</td>
              <td className="  ">
                <div className="d-flex justify-content-center">
                  <i className="fa-regular fa-pen-to-square  oprIcon"></i>
                  <i className="fa-solid fa-trash mx-3 oprIcon"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Task;
