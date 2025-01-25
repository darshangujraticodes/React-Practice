import React, { useContext, useState } from "react";

import InputTextBox from "../components/InputTextBox";
import SelectInputField from "./SelectInputField";
import { FormContext } from "../context/FormContext";

function ExpenseForm({ setExpenses }) {
  const {
    listId,
    emptyTaskList,
    expenseData,
    setExpenseData,
    editMode,
    setEditMode,
  } = useContext(FormContext);

  const [errors, setErrors] = useState(emptyTaskList);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors(emptyTaskList);
  };

  // console.log(editMode);

  // validation function

  // console.log(errors);

  const validateConfig = {
    title: [
      { required: true, message: "Title Cannot Be Empty" },
      { pattern: /^[A-Za-z\s]+$/, message: "Please Enter Valid Title" },
      {
        minLength: 5,
        message: "Minimum Title Length should be 5 Charachter Long",
      },
    ],
    category: [{ required: true, message: "Select Your Category" }],
    amount: [
      { required: true, message: "Amount Cannot Be Empty" },
      { pattern: /^[0-9]+$/, message: "Please Enter Valid Amount" },
    ],
  };

  const validate = (formData) => {
    const errorsData = {};

    // console.log(Object.entries(formData));

    Object.entries(formData).forEach(([key, value]) => {
      validateConfig[key].some((rule) => {
        // console.log(rule);

        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }

        if (rule.minLength && value.length < rule.minLength) {
          errorsData[key] = rule.message;
          return true;
        }

        if (rule.pattern && !rule.pattern.test(value)) {
          errorsData[key] = rule.message;
          return true;
        }
      });
    });

    setErrors(errorsData);

    return errorsData;
  };

  // form submit handle function

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(expenseData);

    if (Object.keys(validateResult).length) return;

    if (!editMode) {
      setExpenses((prevState) => [
        ...prevState,
        { ...expenseData, id: crypto.randomUUID() },
      ]);
    } else {
      setExpenses((prevState) =>
        prevState.map((item) => {
          if (item.id === listId) {
            return { ...expenseData, id: listId };
          }
          return item;
        })
      );
    }

    setEditMode(false);
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
