import React, { useState } from "react";

import React from "react";

function basicInputFormValidation({ setExpenses }) {
  const emptyTaskList = {
    title: "",
    category: "",
    amount: "",
  };
  const [expenseData, setExpenseData] = useState(emptyTaskList);

  const [errors, setErrors] = useState(emptyTaskList);

  // console.log(expenseData);

  // onchange common function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors(emptyTaskList);
  };

  // validation function

  console.log(errors);

  const validate = (formData) => {
    const errorsData = {};

    const charRegex = /^[A-Za-z\s]+$/;
    const digitRegex = /^[0-9]+$/;

    if (!formData.title || !charRegex.test(formData.title)) {
      errorsData.title = "Enter Valid Title";
    }

    if (!formData.category) {
      errorsData.category = "Select Your Category";
    }

    if (!formData.amount || !digitRegex.test(formData.amount)) {
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

    // console.log(Object.keys(validateResult));

    if (Object.keys(validateResult).length) return;

    setExpenses((prevState) => [
      ...prevState,
      { ...expenseData, id: crypto.randomUUID() },
    ]);

    console.log(expenseData);

    setExpenseData(emptyTaskList);
  };

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
          <p className="errorText">{errors.title}</p>
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
            <option value="Entertainment">Entertainment</option>
          </select>
          <p className="errorText">{errors.category}</p>
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
          <p className="errorText">{errors.amount}</p>
        </div>

        <div>
          <input type="submit" className="submitBtn" value="Submit" />
        </div>
      </form>
    </>
  );
}

export default basicInputFormValidation;
