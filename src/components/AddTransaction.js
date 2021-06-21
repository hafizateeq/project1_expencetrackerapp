import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount //convert into number
    }
    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  }

  return (
    <>
      <h3>Add new Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Add Description</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Description" required></input>
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" required></input>
        </div>
        <button className="btn">Add Transaction</button>

      </form>
    </>
  )
}
