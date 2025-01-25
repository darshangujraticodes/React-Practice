import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

function ContextMenu({
  menuPosition,
  setMenuposition,
  setExpensesList,
  listId,
}) {
  const { expenses, expenseData, setExpenseData } = useContext(FormContext);

  // console.log(expenseData, expenses);

  if (!menuPosition.left) return null;

  const listEditOperation = () => {
    console.log("Editing", listId);

    const { title, category, amount } = expenses.find(
      (item) => item.id === listId
    );
    console.log("inputEdit Info = ", title, category, amount);

    setExpenseData({
      title,
      category,
      amount,
    });

    setMenuposition({});
  };

  return (
    <>
      <div className="context-menu" style={{ ...menuPosition }}>
        <div className="contextbuttonWrap">
          <button onClick={listEditOperation} className="contextMenuButton">
            Edit
          </button>
        </div>
        <div className="contextbuttonWrap">
          <button
            onClick={(e) => {
              // console.log("Deleting");
              setExpensesList((prevState) =>
                prevState.filter((item) => item.id !== listId)
              );
              setMenuposition({});
            }}
            className="contextMenuButton"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default ContextMenu;
