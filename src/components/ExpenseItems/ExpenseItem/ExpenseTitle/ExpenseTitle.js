import './ExpenseTitle.css';

function ExpenseTitle(props) {
  const { title } = props;

  return (
    <div className="expense-item__title">
      <span>{title}</span>
    </div>
  );
}

export default ExpenseTitle;
