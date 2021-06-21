import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) {
        income = income + transactions[i].amount
      }
    }
    return income;
  }

  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) {
        expense = expense + transactions[i].amount
      }
    }
    return expense;
  }
  return (
    <div className="ie-container">
      <div >
        <h4>Income</h4>
        <p className="income-plus">${getIncome()}</p>
      </div>
      <div >
        <h4>Expenses</h4>
        <p className="income-minus">${Math.abs(getExpense())}</p>
      </div>
    </div>
  )
}
