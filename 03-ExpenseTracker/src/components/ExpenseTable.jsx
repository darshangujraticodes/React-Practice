import React, { useEffect, useState } from "react";

function ExpenseTable({ expenseList }) {
  const [categoryFilter, setCategoryFilter] = useState("");

  const [expenseListData, setExpenseListData] = useState(expenseList);

  // Object.values(object1).reduce((a, b) => a + b, 0)

  // reduce((accumulator, currentvalue) => business_logic,  initial value )

  const totalAmount = expenseList.reduce(
    (sum, expense) => parseInt(sum) + parseInt(expense.amount),
    0
  );

  // table category filter
  // const filterData;

  useEffect(() => {
    console.log(categoryFilter);
    let filterExpenseList;

    filterExpenseList = expenseList.filter((item) =>
      item.category.toLowerCase().includes(categoryFilter.toLowerCase())
    );
    setExpenseListData(filterExpenseList);

    console.log(filterExpenseList);
  }, [categoryFilter]);

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>
            <select
              id="filterCategory"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="Grocery">Grocery</option>
              <option value="Clothes">Clothes</option>
              <option value="Bills">Bills</option>
              <option value="Education">Education</option>
              <option value="Medicine">Medicine</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </th>
          <th className="amount-column">
            <div>
              <span>Amount</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                viewBox="0 0 384 512"
                className="arrow up-arrow"
              >
                <title>Ascending</title>
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                viewBox="0 0 384 512"
                className="arrow down-arrow"
              >
                <title>Descending</title>
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {expenseListData?.map((task, index) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.category}</td>
            <td>₹ {task.amount}</td>
          </tr>
        ))}

        <tr>
          <th>Total</th>
          <th></th>
          <th>₹ {totalAmount}</th>
        </tr>
      </tbody>
    </table>
  );
}

export default ExpenseTable;
