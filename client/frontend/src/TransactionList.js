import { textAlign } from '@mui/system';
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
    <div style={{display: "flex", flexDirection:"column", textAlign:"center", margin:"20px", fontFamily:"'Exo 2', sans-serif"}}>
      <h1>Transactions</h1>
            <table border="1" frame="void" rules="rows" style={{background: "white", textAlign:"left", borderRadius:"1%", padding:"10px"}}>
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
                <tr style={transaction.operation === "Withdraw"?{background:"#ed9595"}: {background:"#95edac"}}key={transaction.id} >
                  <td style={{padding:"0 15px 0 0"}}>{transaction.date}</td>
                  <td style={{padding:"0 15px 0 0"}}>
                    {transaction.storage.city === 1 ? "Cupertino" :
                      transaction.storage.city === 2 ? "Norrköping" :
                      transaction.storage.city === 3 ? "Frankfurt" : ""}
                  </td>
                  <td style={{padding:"0 15px 0 0"}}>{transaction.storage.article.name}</td>
                  <td>{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
  
    </div>
  );
}

export default TransactionList;