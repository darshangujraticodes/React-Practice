import { createContext, useEffect, useState } from "react";

export const taskContext = createContext();

const taskContextProvider = ({ children }) => {
  const [todoData, setTodoData] = useState([]);

  const [showUpdateBox, setShowUpdateBox] = useState(false);

  const data = {
    todoData,
    setTodoData,
    showUpdateBox,
    setShowUpdateBox,
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todoTaskData"));

    // console.log("fetch localstorage data = ", data);

    if (data && data.length > 0) setTodoData(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoTaskData", JSON.stringify(todoData));
  }, [todoData]);

  // console.log("context = ", todoData);

  // console.log(todoData);

  return <taskContext.Provider value={data}>{children}</taskContext.Provider>;
};

export default taskContextProvider;
