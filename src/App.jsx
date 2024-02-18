import { useState } from "react";
import Expenses from "./components/expense/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import OpenForm from "./components/ui/OpenForm";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const addExpense = (expense) => {
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
    });
  };
  const addNewExpesneClick = () => {
    setIsFormOpen((prevState) => !prevState);
  };
  let renderForm = <OpenForm onAddNewExpesneClick={addNewExpesneClick} />;
  if (isFormOpen) {
    renderForm = (
      <NewExpense
        onAddExpenseOpen={addNewExpesneClick}
        onAddExpense={addExpense}
      />
    );
  }
  return (
    <>
      {renderForm}
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
