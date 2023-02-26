import React, { useState, useEffect } from 'react';
import { apiRequest } from '../APIRequest';
import { Table } from 'reactstrap';

function TransactionList() {

  const [transactions, setTransactions] = useState([]);


  useEffect(() => {

    const fetchTransactions = async () => {
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
    <div style={{display: "flex", flexDirection:"column", textAlign:"center",
                margin:"20px", fontFamily:"'Exo 2', sans-serif", color:"white"}}>
      <h1>Transactions</h1>
            <Table border="1" frame="void" rules="rows" style={{background: "white", textAlign:"left",
                                                                borderRadius:"1%", padding:"10px",
                                                                border:"3px solid black", color:"black"}}>
            <thead>
              <tr>
                <th>Date</th>
                <th>City</th>
                <th>Article</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {(transactions && transactions.length) ? transactions.map((transaction) => (
                <tr style={transaction.operation === "Withdraw" ? {background:"#ed9595"}: {background:"#95edac"}} key={transaction.id} >
                  <td style={{padding:"0 15px 0 0"}}>{transaction.date}</td>
                  <td style={{padding:"0 15px 0 0"}}>
                    {transaction.storage.city === 1 ? "Cupertino" :
                      transaction.storage.city === 2 ? "Norrköping" :
                      transaction.storage.city === 3 ? "Frankfurt" : ""}
                  </td>
                  <td style={{padding:"0 15px 0 0"}}>{transaction.storage.article.name}</td>
                  <td>{transaction.operation === "Withdraw" ? - transaction.amount : transaction.amount} </td>
                </tr>
              )).reverse(): <div>
                  Log in to view transactions.
                </div>}
            </tbody>
          </Table>
  
    </div>
  );
}

export default TransactionList;