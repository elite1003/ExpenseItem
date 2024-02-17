import React from "react";

const ExpenseDateInput = (props) => {
  return (
    <div className="new-expense__control">
      <label>Date</label>
      <input
        type="date"
        min="2019-01-01"
        max="2022-12-31"
        onChange={props.dateChangeHandler}
      />
    </div>
  );
};

export default ExpenseDateInput;
