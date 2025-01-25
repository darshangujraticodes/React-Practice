import React from "react";

function ContextMenu({
  menuPosition,
  setMenuposition,
  setExpensesList,
  listId,
}) {
  if (!menuPosition.left) return null;

  return (
    <>
      <div className="context-menu" style={{ ...menuPosition }}>
        <div className="contextbuttonWrap">
          <button
            onClick={(e) => {
              // console.log("Editing");
              setMenuposition({});
            }}
            className="contextMenuButton"
          >
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
