import React, { useState } from "react";
import ExpenseTitleInput from "./ExpenseTitleInput";
import ExpenseAmountInput from "./ExpenseAmountInput";
import ExpenseDateInput from "./ExpenseDateInput";
import ExpenseAddButton from "./ExpenseAddButton";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const expenseFormSubmitHandler = (e) => {
    e.preventDefault();
  };
  const titleChangeHandler = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    event.preventDefault();
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    event.preventDefault();
    setDate(event.target.value);
  };
  return (
    <form onSubmit={expenseFormSubmitHandler}>
      <div className="new-expense__controls">
        <ExpenseTitleInput titleChangeHandler={titleChangeHandler} />
        <ExpenseAmountInput amountChangeHandler={amountChangeHandler} />
        <ExpenseDateInput dateChangeHandler={dateChangeHandler} />
      </div>
      <ExpenseAddButton />
    </form>
  );
};

export default ExpenseForm;
