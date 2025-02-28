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

  console.log("context = ", todoData);

  return <taskContext.Provider value={data}>{children}</taskContext.Provider>;
};

export default taskContextProvider;
