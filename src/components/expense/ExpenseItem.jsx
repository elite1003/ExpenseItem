import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "../ui/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { expense } = props;
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expense.date} />
        <ExpenseDetail title={expense.title} amount={expense.amount} />
      </Card>
    </li>
  );
};
export default ExpenseItem;
