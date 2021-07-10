import './ExpenseDate.css';

function ExpenseDate(props) {
  const { date } = props;

  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <div className="expense-item__date">
      <div>{day}</div>
      <div>{month} {year}</div>
    </div>
  );
}

export default ExpenseDate;
