import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Balance = () => {
  const {transactions} = useContext(GlobalContext);
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
    <>
      <h4>Your Balance</h4>
      <h1>${getIncome() + getExpense()}</h1>
    </>
  )
}
