import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseData = (expenseInputData) => {
    const expense = { ...expenseInputData, id: Math.random().toString() };
    props.onAddExpense(expense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm
        onAddExpenseOpen={props.onAddExpenseOpen}
        onSaveExpenseData={saveExpenseData}
      />
    </div>
  );
};

export default NewExpense;
