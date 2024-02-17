import React from "react";

const ExpenseAmountInput = (props) => {
  // const expenseAmountInputHandler = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.value);
  // };
  return (
    <div className="new-expense__control">
      <label>Amount</label>
      <input type="number" min="0.01" step="0.01" />
    </div>
  );
};

export default ExpenseAmountInput;
