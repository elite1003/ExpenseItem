import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const { expenses } = props;
  return (
    <Card className="expenses">
      {expenses.map((expense) => {
        return <ExpenseItem expense={expense} />;
      })}
    </Card>
  );
};

export default Expenses;