import Card from '../Card/Card';
import ExpenseItem from './ExpenseItem/ExpenseItem';

function ExpenseItems(props) {
  const { items, removeExpense } = props;
  return (
    <Card>
      {items.map((el) => (
        <ExpenseItem key={el.id} expense={el} removeExpense={removeExpense} />
      ))}
    </Card>
  );
}

export default ExpenseItems;
