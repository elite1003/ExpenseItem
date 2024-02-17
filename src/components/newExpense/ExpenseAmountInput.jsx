import React from "react";

const ExpenseAmountInput = (props) => {
  const { amountChangeHandler, value } = props;
  return (
    <div className="new-expense__control">
      <label>Amount</label>
      <input
        type="number"
        min="0.01"
        step="0.01"
        onChange={amountChangeHandler}
        value={value}
      />
    </div>
  );
};

export default ExpenseAmountInput;
