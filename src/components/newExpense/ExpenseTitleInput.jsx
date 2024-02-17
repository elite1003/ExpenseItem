import React from "react";

const ExpenseTitleInput = (props) => {
  const { titleChangeHandler, value } = props;
  return (
    <div className="new-expense__control">
      <label>Title</label>
      <input type="text" onChange={titleChangeHandler} value={value} />
    </div>
  );
};

export default ExpenseTitleInput;
