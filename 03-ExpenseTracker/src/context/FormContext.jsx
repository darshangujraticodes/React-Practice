import { createContext, useState } from "react";
import React from "react";
import expenseDataInfo from "../components/expenseData";

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(expenseDataInfo);

  const emptyTaskList = {
    title: "",
    category: "",
    amount: "",
  };

  const [expenseData, setExpenseData] = useState(emptyTaskList);

  const [listId, setListId] = useState("");

  const [editMode, setEditMode] = useState(false);

  const value = {
    emptyTaskList,
    expenses,
    setExpenses,
    expenseData,
    setExpenseData,
    listId,
    setListId,
    editMode,
    setEditMode,
  };

  return (
    <>
      <FormContext.Provider value={value}>{children}</FormContext.Provider>
    </>
  );
};

export default FormContextProvider;
