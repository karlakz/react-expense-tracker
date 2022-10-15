import { useState } from "react";
import "./NewExpenseForm.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenseForm = (props) => {
  const [openForm, setOpenForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpensedData) => {
    const expenseData = {
      ...enteredExpensedData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setOpenForm(false);
  };

  const openFormHandler = () => {
    setOpenForm(true);
    console.log("button is pressed");
  };

  const closeFormHandler = () => {
    setOpenForm(false);
  };
  return (
    <div className="new-expense">
      {!openForm && <button onClick={openFormHandler}>Add New Expense</button>}
      {openForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={closeFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpenseForm;
