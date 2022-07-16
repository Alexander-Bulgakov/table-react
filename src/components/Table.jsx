import React from 'react';
import './Table.css';

const Table = ({ handleSort, currentData }) => {

  return(
    <div>
      <table className="table">
        <thead className="table__head">
          <tr>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('phone')}>Phone</th>
            <th onClick={() => handleSort('email')}>Email</th>
            <th onClick={() => handleSort('address')}>Address</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {currentData.map(row => (
            <tr key={row.guid}>
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

export default Table;