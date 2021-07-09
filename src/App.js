import ExpenseItems from './components/ExpenseItems/ExpenseItems';

function App() {
  const expenses = [
    {
      id: 1,
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 14),
    },
    { id: 2, title: 'Books', amount: 20.0, date: new Date(2021, 2, 14) },
    { id: 3, title: 'Food', amount: 402.15, date: new Date(2021, 2, 14) },
  ];
  return (
    <div className="container">
      <h2>Let's get started!</h2>
      <ExpenseItems items={expenses} />
    </div>
  );
}

export default App;
