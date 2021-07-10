import { useState } from 'react';

import './AddExpenseForm.css';
import { ReactComponent as AddButton } from '../../../assets/add.svg';

const AddExpenseForm = (props) => {
  const { addExpense } = props;
  
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setError('');
    if (!date) {
      setError("Date shouldn't be empty");
      return;
    }
    if (!title.trim()) {
      setError("Title shouldn't be empty");
      return;
    }
    if (!amount.trim()) {
      setError("Amount shouldn't be empty");
      return;
    }
    addExpense({
      id: Math.random(),
      title,
      date: new Date(date),
      amount: parseFloat(amount)
    })
    setDate('');
    setTitle('');
    setAmount('');
  };

  return (
    <>
      <form className="add-expense__form" onSubmit={submitHandler}>
        <div className="add-expense__controls">
          <div className="add-expense__control">
            <input
              onChange={dateChangeHandler}
              value={date}
              type="date"
              min="2019-01-01"
              step="2022-12-31"
            />
          </div>
          <div className="add-expense__control">
            <input
              onChange={titleChangeHandler}
              value={title}
              placeholder="Title"
              type="text"
            />
          </div>
          <div className="add-expense__control">
            <input
              onChange={amountChangeHandler}
              value={amount}
              placeholder="Amount, $"
              type="number"
              min="0.01"
              step="0.01"
            />
          </div>
        </div>
        <div className="add-expense__actions">
          <button type="submit">
            <AddButton />
          </button>
        </div>
      </form>
      {error && <div className="add-expense__error">{error}</div>}
    </>
  );
};

export default AddExpenseForm;
