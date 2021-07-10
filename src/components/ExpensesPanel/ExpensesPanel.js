import { useState } from 'react';

import Card from '../Card/Card';
import ExpenseColumn from './ExpenseColumn/ExpenseColumn';
import './ExpensesPanel.css';

const ExpensesPanel = (props) => {
  const { expenses } = props;

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const currentYear = new Date().getFullYear().toString();

  const [year, setYear] = useState(currentYear);

  let maxAmount = 0;
  let totalAmount = 0;
  const monthsAmount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const yearsList = [currentYear];

  expenses.forEach((el) => {
    const expenseYear = el.date.getFullYear().toString();
    if (!yearsList.includes(expenseYear)) {
      yearsList.push(expenseYear);
    }

    if (expenseYear === year) {
      if (el.amount > maxAmount) {
        maxAmount = el.amount;
      }
      totalAmount += Math.round(el.amount);
      const monthIdx = el.date.getMonth();
      monthsAmount[monthIdx] = Math.round(monthsAmount[monthIdx] + el.amount);
    }
  });

  yearsList.sort();

  if (!yearsList.includes(year)) {
    setYear(yearsList[0]);
  }

  const filterHandler = (event) => {
    setYear(event.target.value);
  };

  return (
    <Card>
      <div className="expenses-panel">
        <div className="expenses-panel__header">
          <div className="expenses-panel__total-amount">
            Total: ${totalAmount}
          </div>
          <div className="expenses-panel__filter">
            <select onChange={filterHandler} value={year}>
              {yearsList.map((el) => {
                return (
                  <option key={el} value={el}>
                    {el}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="expenses-panel__columns">
          {months.map((month, i) => {
            return (
              <ExpenseColumn
                key={month}
                month={month}
                amount={monthsAmount[i]}
                maxAmount={maxAmount}
              />
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default ExpensesPanel;
