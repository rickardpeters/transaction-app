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
    <div>
      <h1>Storage List</h1>
      <table style={{background: "white"}}>
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
              <td>
                {storage.city === 1 ? "Cupertino" :
                  storage.city === 2 ? "Norrköping" :
                  storage.city === 3 ? "Frankfurt" : ""}
              </td>
              <td>{storage.article.name}</td>
              <td>{storage.article.price}</td>
              <td>{storage.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StorageList;