import { useState } from "react";
import Expenses from "./components/expense/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    date: new Date(),
    title: "Car Insurence",
    amount: 3000,
  },
  {
    id: "e2",
    date: new Date(),
    title: "Rent",
    amount: 5000,
  },
  {
    id: "e3",
    date: new Date(),
    title: "Monthly expense",
    amount: 10000,
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpense = (expense) => {
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
    });
  };
  return (
    <>
      <NewExpense onAddExpense={addExpense} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
