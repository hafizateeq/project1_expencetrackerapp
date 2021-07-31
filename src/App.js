import React from 'react';
import './App.css';
import Header from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import firebase from './services/firebaseServices';

function App() {
  React.useEffect(()=>{
    const msg = firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.log("token ",data);
    })
  })
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
