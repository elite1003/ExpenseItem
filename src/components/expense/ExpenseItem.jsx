import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "../ui/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const { expense } = props;
  const [title] = useState(expense.title);
  const [amount] = useState(expense.amount);
  // const editExpensePriceHandler = (event) => {
  //   setAmount(100);
  // };
  // const deleteExpenseItemHandler = (event) => {
  //   console.log("deleteExpenseItemHandler called");
  // };
  // const editExpenseItemHandler = (event) => {
  //   setTitle("updated");
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <ExpenseDetail title={title} amount={amount} />
      {/* <button onClick={deleteExpenseItemHandler} type="button">
        Delete
      </button>
      <button onClick={editExpenseItemHandler} type="button">
        Edit
      </button>
      <button onClick={editExpensePriceHandler} type="button">
        Price
      </button> */}
    </Card>
  );
};
export default ExpenseItem;
