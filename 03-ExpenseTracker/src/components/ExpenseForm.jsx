import React, { useState } from "react";

function ExpenseForm({ setExpenses }) {
  const emptyTaskList = {
    title: "",
    category: "",
    amount: "",
  };
  const [expenseData, setExpenseData] = useState(emptyTaskList);

  console.log(expenseData);

  // onchange common function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // validation function

  const [errors, setErrors] = useState();

  const validate = (formData) => {
    const errorsData = {};

    if (!formData.title) {
      errorsData.title = "Enter Valid Title";
    }

    if (!formData.category) {
      errorsData.category = "Enter Valid Category";
    }

    if (!formData.amount) {
      errorsData.amount = "Enter Valid Amount";
    }

    setErrors(errorsData);

    return errorsData;
  };

  // form submit handle function

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(expenseData);
    // console.log(validateResult);

    console.log(Object.keys(validateResult));

    if (Object.keys(validateResult).length) return;

    setExpenses((prevState) => [
      ...prevState,
      { ...expenseData, id: crypto.randomUUID() },
    ]);

    console.log(expenseData);

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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
