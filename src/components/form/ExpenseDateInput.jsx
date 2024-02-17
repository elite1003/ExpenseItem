import React from "react";

function ExpenseDateInput() {
  const expenseDateInputHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };
  return <input type="date" onChange={expenseDateInputHandler} />;
}

export default ExpenseDateInput;
