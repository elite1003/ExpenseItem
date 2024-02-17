import React from "react";

const ExpenseDateInput = (props) => {
  const { dateChangeHandler, value } = props;
  return (
    <div className="new-expense__control">
      <label>Date</label>
      <input
        type="date"
        min="2019-01-01"
        max="2022-12-31"
        onChange={dateChangeHandler}
        value={value}
      />
    </div>
  );
};

export default ExpenseDateInput;
