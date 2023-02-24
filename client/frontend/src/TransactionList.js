import React, { useState, useEffect } from 'react';
import { apiRequest } from './APIRequest';

function TransactionList() {

  const [transactions, setTransactions] = useState([]);


  useEffect(() => {

    async function fetchTransactions() {
      try {
        const data = await apiRequest('transactions', 'GET');
        setTransactions(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTransactions();
  }, []);

 

  return (
    <div style={{display: "flex", flexDirection:"column"}}>
      <h1>Transactions</h1>
            <table style={{background: "white"}}>
            <thead>
              <tr>
                <th>Date</th>
                <th>City</th>
                <th>Article</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>
                    {transaction.storage.city === 1 ? "Cupertino" :
                      transaction.storage.city === 2 ? "Norrköping" :
                      transaction.storage.city === 3 ? "Frankfurt" : ""}
                  </td>
                  <td>{transaction.storage.article.name}</td>
                  <td>{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
         {/*    <li key={transaction.id}>
            <p>Date: {transaction.date}</p>
            <p>City: {transaction.storage.city === 1 ? "Cupertino":
                      transaction.storage.city === 2 ? "Norrköping":
                      transaction.storage.city === 3 ? "Frankfurt": ""}</p>
            <p>Article: {transaction.storage.article.name}</p>
            <p>Amount: {transaction.amount}</p>
          </li>    */}
  
    </div>
  );
}

export default TransactionList;