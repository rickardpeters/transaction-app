import React, { useState, useEffect } from 'react';
import { apiRequest } from './APIRequest';

function StorageList() {
  const [storages, setStorages] = useState([]);
  const [transactions, setTransactions] = useState([]);


  useEffect(() => {
    async function fetchStorage() {
      try {
        const data = await apiRequest('storages', 'GET');
        setStorages(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    }
    async function fetchTransactions() {
      try {
        const data = await apiRequest('transactions', 'GET');
        setTransactions(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    }

    fetchStorage();
    fetchTransactions();
  }, []);


  return (
    <div style={{display: "flex", flexDirection:"column"}}>
      <h1>Storage List</h1>
      <ul>
        {storages.map(storage => (
          <li key={storage.id}>
            <p>City: {storage.city == 1 ? "Cupertino":
                      storage.city == 2 ? "Norrköping":
                      storage.city == 3 ? "Frankfurt": ""}</p>
            <p>Article: {storage.article.name}</p>
            <p>Price: {storage.article.price}</p>
            <p>Amount: {storage.amount}</p>
          </li>
        ))}
      </ul>
      <h1>Transactions</h1>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            <p>Date: {transaction.date}</p>
            <p>City: {transaction.city == 1 ? "Cupertino":
                      transaction.city == 2 ? "Norrköping":
                      transaction.city == 3 ? "Frankfurt": ""}</p>
            <p>Article: {transaction.article.name}</p>
            <p>Amount: {transaction.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StorageList;