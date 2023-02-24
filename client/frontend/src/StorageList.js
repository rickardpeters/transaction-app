import React, { useState, useEffect } from 'react';
import { apiRequest } from './APIRequest';

function StorageList() {
  const [storages, setStorages] = useState([]);



  useEffect(() => {
    async function fetchStorage() {
      try {
        const data = await apiRequest('storages', 'GET');
        setStorages(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchStorage();
  }, []);

  return (
    <div style={{display: "flex", flexDirection:"column", textAlign:"center", margin:"20px", fontFamily:"'Exo 2', sans-serif"}}>
      <h1>Storage List</h1>
      <table border="1" frame="void" rules="rows" style={{background: "white", textAlign:"left", borderRadius:"1%", padding:"10px"}}>
        <thead>
          <tr>
            <th>City</th>
            <th>Article</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {storages.map((storage) => (
            <tr key={storage.id}>
              <td style={{padding:"0 15px 0 0"}}>
                {storage.city === 1 ? "Cupertino" :
                  storage.city === 2 ? "Norrköping" :
                  storage.city === 3 ? "Frankfurt" : ""}
              </td>
              <td style={{padding:"0 15px 0 0"}}>{storage.article.name}</td>
              <td style={{padding:"0 15px 0 0"}}>{storage.article.price}</td>
              <td >{storage.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StorageList;