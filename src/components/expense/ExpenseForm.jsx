import React from "react";
import ExpenseTitleInput from "../form/ExpenseTitleInput";
import ExpenseAmountInput from "../form/ExpenseAmountInput";
import ExpenseDateInput from "../form/ExpenseDateInput";
import ExpenseAddButton from "../form/ExpenseAddButton";

function ExpenseForm() {
  const expenseFormSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form onSubmit={expenseFormSubmitHandler}>
      <ExpenseTitleInput />
      <ExpenseAmountInput />
      <ExpenseDateInput />
      <ExpenseAddButton />
    </form>
  );
}

export default ExpenseForm;
