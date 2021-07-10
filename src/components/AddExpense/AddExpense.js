import Card from '../Card/Card';
import './AddExpense.css';
import AddExpenseForm from './AddExpenseForm/AddExpenseForm';

const AddExpense = (props) => {
  const { addExpense } = props;
  return (
    <Card>
      <div className="add-expense">
        <AddExpenseForm addExpense={addExpense} />
      </div>
    </Card>
  );
};

export default AddExpense;
