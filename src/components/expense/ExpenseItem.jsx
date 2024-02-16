import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "../ui/Card";

const ExpenseItem = (props) => {
  const { expense } = props;
  const deleteExpenseItemHandler = (event) => {
    event.preventDefault();
    console.log("deleteExpenseItemHandler called", event);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <ExpenseDetail
        description={expense.description}
        locationOfExpenditure={expense.locationOfExpenditure}
        amount={expense.amount}
      />
      <button onClick={deleteExpenseItemHandler} type="button">
        Delete
      </button>
    </Card>
  );
};
export default ExpenseItem;
