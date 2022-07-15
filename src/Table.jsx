import React, {useState, useEffect} from 'react';
import data from './data/generated.json';
import Pagination from './components/Pagination';

const Table = ({ paginationStep, onSort }) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState();

  useEffect(() => {
    setRowsPerPage(paginationStep)
  })

  const lastRowIndex = currentPage * rowsPerPage;
  const firstRowIndex = lastRowIndex - rowsPerPage;
  const currentRow = data.slice(firstRowIndex, lastRowIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return(
    <div>
      <table>
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
      <Pagination 
        rowsPerPage={rowsPerPage} 
        totalRows={data.length}
        paginate={paginate} />
    </div>
  )
}

export default Table;