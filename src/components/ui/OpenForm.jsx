import React from "react";
import "./OpenForm.css";
const OpenForm = (props) => {
  const { onAddNewExpesneClick } = props;
  return (
    <div className="open-expense">
      <button type="button" onClick={onAddNewExpesneClick}>
        Add New Expense
      </button>
    </div>
  );
};

export default OpenForm;
