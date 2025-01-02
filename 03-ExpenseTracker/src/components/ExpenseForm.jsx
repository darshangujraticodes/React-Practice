import React, { useState } from "react";

function ExpenseForm({ setExpenses }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const emptyTaskList = {
    title: "",
    category: "",
    amount: "",
  };
  const [expenseData, setExpenseData] = useState(emptyTaskList);

  console.log(expenseData.title, expenseData.category, expenseData.amount);

  console.log(expenseData);

  const handleSubmit = (e) => {
    e.preventDefault();

    setExpenses((prevState) => [
      ...prevState,
      { ...expenseData, id: crypto.randomUUID() },
    ]);

    setExpenseData(emptyTaskList);
  };

  //   const getFormData = (form) => {
  //     const formData = new FormData(form);
  //     const data = {};
  //     for (const [key, value] of formData.entries()) {
  //       data[key] = value;
  //     }
  //     return data;
  //   };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="taskName">Title</label> <br />
          <input
            type="text"
            id="taskName"
            name="title"
            placeholder="Enter Task Name"
            className="inputData  titleInput "
            value={expenseData.title}
            onChange={(e) =>
              setExpenseData((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          />
          <p className="errorText">Enter Valid Task Name</p>
        </div>

        <div>
          <label htmlFor="taskCategory">Category</label> <br />
          <select
            name="category"
            className="inputData selectCategory"
            id="taskCategory"
            value={expenseData.category}
            onChange={(e) =>
              setExpenseData((prevState) => ({
                ...prevState,
                category: e.target.value,
              }))
            }
          >
            <option value="" hidden>
              Select Task Category
            </option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>
          <p className="errorText">Enter Valid Task Category</p>
        </div>

        <div>
          <label htmlFor="taskAmount">Amount</label> <br />
          <input
            type="text"
            name="amount"
            id="taskAmount"
            placeholder="Enter Task Name"
            className="inputData  amountInput "
            value={expenseData.amount}
            onChange={(e) =>
              setExpenseData((prevState) => ({
                ...prevState,
                amount: e.target.value,
              }))
            }
          />
          <p className="errorText">Enter Valid Task Amount</p>
        </div>

        <div>
          <input type="submit" className="submitBtn" value="Submit" />
        </div>
      </form>
    </>
  );
}

export default ExpenseForm;
