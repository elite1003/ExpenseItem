import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

function Expenses(props) {
  const { expenses } = props;
  return (
    <Card className="expenses">
      {expenses.map((expense) => {
        return <ExpenseItem expense={expense} />;
      })}
    </Card>
  );
}

export default Expenses;
