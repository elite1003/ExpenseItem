import ExpenseItem from "./components/ExpenseItem";
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

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((expense) => {
        return <ExpenseItem expense={expense} />;
      })}
    </div>
  );
}

export default App;
