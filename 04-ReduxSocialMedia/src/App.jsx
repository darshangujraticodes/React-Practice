import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AddTodo from "./components/AddTodo";
import DisplayTodo from "./components/DisplayTodo";

function App() {
  const oldArray = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];

  const newData = [
    { id: 2, name: "Bob", age: 35 }, // Updated age
    { id: 3, name: "Charlie", age: 26 }, // Updated age
  ];

  // Updating old array with new data
  const updatedArray = oldArray.map((item) => {
    // Find matching item from newData using id
    const updatedItem = newData.find((newItem) => newItem.id === item.id);
    // Return updated item if found, else keep the old one
    return updatedItem ? { ...item, ...updatedItem } : item;
  });

  return (
    <>
      <div>
        <h1>Learn about React Redux toolkit</h1>

        <AddTodo />

        <div className="centerData displayTableData">
          <DisplayTodo />
        </div>
      </div>
    </>
  );
}

export default App;
