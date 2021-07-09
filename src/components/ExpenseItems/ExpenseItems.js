import Card from '../Card/Card';
import ExpenseItem from './ExpenseItem/ExpenseItem';

function ExpenseItems(props) {
  const { items } = props;
  return (
    <Card>
      {items.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))}
    </Card>
  );
}

export default ExpenseItems;
