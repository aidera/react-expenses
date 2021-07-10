import './ExpenseColumn.css';

const ExpenseColumn = (props) => {
  const { month, amount, maxAmount } = props;

  const columnFillHeightPersent = maxAmount ? (amount * 100) / maxAmount : 0;

  return (
    <div className="expenses-panel__column-container">
      <div className="expenses-panel__column">
        <div className="expenses-panel__column-overflow">
          <div
            className="expenses-panel__column-fill"
            style={{ top: 100 - columnFillHeightPersent + '%' }}
          ></div>
        </div>
        <div
          className="expenses-panel__column-fill-shadow"
          style={{
            height: columnFillHeightPersent + '%',
            width:
              columnFillHeightPersent <= 20
                ? columnFillHeightPersent + 'px'
                : '100%',
          }}
        ></div>
      </div>
      <span className="expenses-panel__month">{month}</span>
      <span className="expenses-panel__amount">${amount}</span>
    </div>
  );
};

export default ExpenseColumn;
