import React from 'react';
import data from './data/generated.json';
import './App.css';

const App = () => {
  return(
    <div className="container">
      <h1>Hello world</h1>
      <table>
        <thead>
          <tr>
            {/* <th>guid</th> */}
            <th>name</th>
            <th>phone</th>
            <th>email</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.guid}>
              {/* <td>{row.guid}</td> */}
              <td>{row.name}</td>
              <td>{row.phone}</td>
              <td>{row.email}</td>
              <td>{row.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )  
}

export default App;