import React from "react";

function ExpenseAmountInput() {
  const expenseAmountInputHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };
  return <input type="number" onChange={expenseAmountInputHandler} />;
}

export default ExpenseAmountInput;
