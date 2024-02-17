import React from "react";

const ExpenseTitleInput = (props) => {
  // const expenseTitleInputHandler = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.value);
  // };
  return (
    <div className="new-expense__control">
      <label>Title</label>
      <input type="text" />
    </div>
  );
};

export default ExpenseTitleInput;
