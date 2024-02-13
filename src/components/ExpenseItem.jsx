import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";

function ExpenseItem(props) {
  const { expense } = props;
  return (
    <div className="expense-item">
      <ExpenseDate date={expense.date} />
      <ExpenseDetail
        description={expense.description}
        locationOfExpenditure={expense.locationOfExpenditure}
        amount={expense.amount}
      />
    </div>
  );
}
export default ExpenseItem;
