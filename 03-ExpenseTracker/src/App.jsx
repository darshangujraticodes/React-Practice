import { useContext, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import { FormContext } from "./context/FormContext";

function App() {
  const { expenses, setExpenses } = useContext(FormContext);

  return (
    <>
      <div>
        <h1 className="text-center mt-3">Expense Tracker</h1>

        <div className="trackerInfo mt-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="taskFormWrap">
                  <h4>Enter Task Details</h4>

                  <ExpenseForm setExpenses={setExpenses} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="taskFormWrap">
                  <h4 className="">Task List</h4>
                  <div className="taskListContentWrap mt-3">
                    <ExpenseTable
                      expenseList={expenses}
                      setExpensesList={setExpenses}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
