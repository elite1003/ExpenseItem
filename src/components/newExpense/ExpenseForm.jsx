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
    const expenseInputData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    console.log(expenseInputData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  return (
    <form onSubmit={expenseFormSubmitHandler}>
      <div className="new-expense__controls">
        <ExpenseTitleInput
          titleChangeHandler={titleChangeHandler}
          value={title}
        />
        <ExpenseAmountInput
          amountChangeHandler={amountChangeHandler}
          value={amount}
        />
        <ExpenseDateInput dateChangeHandler={dateChangeHandler} value={date} />
      </div>
      <ExpenseAddButton />
    </form>
  );
};

export default ExpenseForm;
