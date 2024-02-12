import React from "react";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  const { expense } = props;
  return (
    <div className="expense-item">
      <div>{expense.date.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{expense.description}</h2>
        <h2>{expense.locationOfExpenditure}</h2>
        <div className="expense-item__price">{expense.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
