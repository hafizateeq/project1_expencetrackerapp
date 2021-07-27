import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//inital state
const initialstate = {
  transactions: []

}

// create context

export const GlobalContext = createContext(initialstate);

//provider

export const GlobalProvider = ({ children }) => {
  const [state, dispach] = useReducer(AppReducer,initialstate);
  
  //Actions
  function deleteTransaction(id) {
    dispach({
      type: "DELETE_TRANSACTIONS",
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispach({
      type: "ADD_TRANSACTIONS",
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>)
}