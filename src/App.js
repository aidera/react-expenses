import { useState } from 'react';

import AddExpense from './components/AddExpense/AddExpense';
import ExpenseItems from './components/ExpenseItems/ExpenseItems';
import ExpensesPanel from './components/ExpensesPanel/ExpensesPanel';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 14),
    },
    { id: 2, title: 'Books', amount: 20.0, date: new Date(2021, 5, 22) },
    { id: 3, title: 'Food', amount: 402.15, date: new Date(2021, 8, 5) },
    { id: 4, title: 'Food2', amount: 402.15, date: new Date(2019, 2, 14) },
  ]);

  const removeExpense = (id) => {
    const newExpenses = expenses.filter(el => el.id !== id);
    setExpenses([...newExpenses]);
  };

  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  return (
    <div className="container">
      <br />
      <ExpensesPanel expenses={expenses} />
      <br />
      <AddExpense addExpense={addExpense} />
      <br />
      <ExpenseItems items={expenses} removeExpense={removeExpense} />
      <br />
    </div>
  );
}

export default App;
