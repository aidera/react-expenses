import './ExpenseDate.css';

function ExpenseDate(props) {
  const { date } = props;

  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <div className="date">
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
