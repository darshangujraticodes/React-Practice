import React, { useState } from "react";

import InputTextBox from "../components/InputTextBox";
import SelectInputField from "./SelectInputField";

// https://www.youtube.com/watch?v=w2ebVv_Rp7M&list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu&index=37

function ExpenseForm({ setExpenses }) {
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

  const validateConfig = {
    title: [
      { required: true, message: "Please Enter Title" },
      { onlyCharachter: true, message: "Please Enter Valid Title" },
      {
        minLength: 3,
        message: "Minimum Title Length should be 3 Charachter Lon",
      },
    ],
  };

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
        {/* custom Input text  */}

        <InputTextBox
          id="taskName"
          label="Title"
          name="title"
          placeholder="Enter Task Name"
          value={expenseData.title}
          errorValue={errors.title}
          className={`inputData  ${"titleInput"}`}
          onChangeFunction={handleChange}
        />

        <SelectInputField
          id="taskCategory"
          label="Category"
          name="category"
          className={`inputData  ${"selectCategory"}`}
          value={expenseData.category}
          onChangeFunction={handleChange}
          defaultOption="Select Your Category"
          optionArray={[
            "Grocery",
            "Education",
            "Entertainment",
            "Clothes",
            "Bills",
            "Medicine",
          ]}
          error={errors.category}
        />

        <InputTextBox
          id="taskAmount"
          label="Amount"
          name="amount"
          placeholder="Enter Amount"
          value={expenseData.amount}
          errorValue={errors.amount}
          className={`inputData  ${"amountInput"}`}
          onChangeFunction={handleChange}
        />

        <div>
          <input type="submit" className="submitBtn" value="Submit" />
        </div>
      </form>
    </>
  );
}

export default ExpenseForm;
