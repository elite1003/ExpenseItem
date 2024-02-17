import React from "react";

function ExpenseTitleInput() {
  const expenseTitleInputHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };
  return <input type="text" onChange={expenseTitleInputHandler} />;
}

export default ExpenseTitleInput;
