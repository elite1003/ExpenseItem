import React from "react";
import ExpenseTitleInput from "./ExpenseTitleInput";
import ExpenseAmountInput from "./ExpenseAmountInput";
import ExpenseDateInput from "./ExpenseDateInput";
import ExpenseAddButton from "./ExpenseAddButton";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const expenseFormSubmitHandler = (e) => {
    e.preventDefault();
    console.log("form submit called");
  };
  return (
    <form onSubmit={expenseFormSubmitHandler}>
      <div className="new-expense__controls">
        <ExpenseTitleInput />
        <ExpenseAmountInput />
        <ExpenseDateInput />
      </div>
      <ExpenseAddButton />
    </form>
  );
};

export default ExpenseForm;
