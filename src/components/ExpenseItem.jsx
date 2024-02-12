import React from "react";
import "./ExpenseItem.css";
function ExpenseItem() {
  const expenseDate = new Date().toLocaleDateString();
  const expenseDescription = "Car insurance";
  const expensePrice = 3000;
  const locationOfExpenditure = "Lucknow";
  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h2>{expenseDescription}</h2>
        <h2>{locationOfExpenditure}</h2>
        <div className="expense-item__price">{expensePrice}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
