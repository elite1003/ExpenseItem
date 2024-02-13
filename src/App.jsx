import Expenses from "./components/expense/Expenses";

function App() {
  const expenses = [
    {
      date: new Date(),
      description: "Car Insurence",
      amount: 3000,
      locationOfExpenditure: "Lucknow",
    },
    {
      date: new Date(),
      description: "Rent",
      amount: 5000,
      locationOfExpenditure: "Lucknow",
    },
    {
      date: new Date(),
      description: "Monthly expense",
      amount: 10000,
      locationOfExpenditure: "Lucknow",
    },
  ];

  return <Expenses expenses={expenses} />;
}

export default App;
