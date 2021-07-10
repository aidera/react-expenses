import React from 'react';

import './ExpenseAmount.css';

function ExpenseAmount(props) {
  const { amount } = props;

  let amountToDisplay = amount.toFixed(2);
  amountToDisplay = amountToDisplay.toString();

  return (
    <div className="expense-item__price">
      <span>${amountToDisplay}</span>
    </div>
  );
}

export default ExpenseAmount;
