import { useState } from "react";
import Card from "../UI/Card";
import "./NewExpense.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function NewExpense(props) {
  const [userSelectedYear, setUserSelectedYear] = useState("2021");
  const saveYearHandler = (selectedYear) => {
    console.log(typeof selectedYear);
    setUserSelectedYear(selectedYear);
  };

  const filteredYear = props.expenses.filter((expenseYear) => {
    return expenseYear.date.getFullYear().toString() === userSelectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={userSelectedYear}
          onSaveYear={saveYearHandler}
        />
        <ExpensesChart expenses={filteredYear} />
        <ExpensesList items={filteredYear} />
      </Card>
    </div>
  );
}

export default NewExpense;
