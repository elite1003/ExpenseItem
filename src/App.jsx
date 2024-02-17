import { useState } from "react";
import Expenses from "./components/expense/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
function App() {
  const expenses = [
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
  const [expensesData, setExpensesData] = useState(expenses);
  const addExpense = (expense) => {
    setExpensesData((prevState) => {
      return [...prevState, expense];
    });
  };
  return (
    <>
      <NewExpense onAddExpense={addExpense} />
      <Expenses expenses={expensesData} />
    </>
  );
}

export default App;
