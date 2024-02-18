import React from "react";

const ExpenseCancelButton = (props) => {
  return (
    <div className="new-expense__actions">
      <button type="button" onClick={props.onAddExpenseOpen}>
        Cancel
      </button>
    </div>
  );
};

export default ExpenseCancelButton;
