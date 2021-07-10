import ExpenseAmount from './ExpenseAmount/ExpenseAmount';
import ExpenseDate from './ExpenseDate/ExpenseDate';
import './ExpenseItem.css';
import ExpenseTitle from './ExpenseTitle/ExpenseTitle';
import { ReactComponent as RemoveButton } from '../../../assets/remove.svg';

function ExpenseItem(props) {
  const { expense, removeExpense } = props;

  return (
    <div className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__container">
        <div className="expense-item__description">
          <ExpenseTitle title={expense.title} />
          <ExpenseAmount amount={expense.amount} />
          <div className="expense-item__actions">
            <button onClick={() => removeExpense(expense.id)}>
              <RemoveButton />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
