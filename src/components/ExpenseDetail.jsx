function ExpenseDetail(props) {
  const { amount, description, locationOfExpenditure } = props;
  return (
    <div className="expense-item__description">
      <h2>{description}</h2>
      <h2>{locationOfExpenditure}</h2>
      <div className="expense-item__price">{amount}</div>
    </div>
  );
}

export default ExpenseDetail;
