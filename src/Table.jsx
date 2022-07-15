import React from 'react';
import './Table.css';

const Table = ({ onSort, currentRow }) => {

  return(
    <div>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => onSort('name')}>Name</th>
            <th onClick={() =>onSort('phone')}>Phone</th>
            <th onClick={() =>onSort('email')}>Email</th>
            <th onClick={() =>onSort('address')}>Address</th>
          </tr>
        </thead>
        <tbody>
          {currentRow.map(row => (
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