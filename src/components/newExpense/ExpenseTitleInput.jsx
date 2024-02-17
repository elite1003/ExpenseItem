import React from "react";

const ExpenseTitleInput = (props) => {
  return (
    <div className="new-expense__control">
      <label>Title</label>
      <input type="text" onChange={props.titleChangeHandler} />
    </div>
  );
};

export default ExpenseTitleInput;
