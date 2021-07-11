import Card from '../Card/Card';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import './ExpenseItems.css';

function ExpenseItems(props) {
  const { items, removeExpense } = props;
  return (
    <Card>
      {items.length <= 0 ? (
        <span className="expense-items__error">There are no expenses for now</span>
      ) : (
        items.map((el) => (
          <ExpenseItem key={el.id} expense={el} removeExpense={removeExpense} />
        ))
      )}
    </Card>
  );
}

export default ExpenseItems;
