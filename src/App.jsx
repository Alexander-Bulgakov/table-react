import React, {useState, useEffect} from 'react';
import data from './data/generated.json';
import Table from './Table';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {

const [tableData, setTableData] = useState(data);
const [rowsPerPage, setRowsPerPage] = useState(20);
const [currentPage, setCurrentPage] = useState(1);
const [sortOrder, setSortOrder] = useState(true);

const paginate = pageNumber => setCurrentPage(pageNumber);

const lastRowIndex = currentPage * rowsPerPage;
const firstRowIndex = lastRowIndex - rowsPerPage;
const currentRow = tableData.slice(firstRowIndex, lastRowIndex);

const handleBlur = (e) => {
  setRowsPerPage(e.target.value);
}

const onSort = (sortCol) => {
  const dataCopy = data.slice();
  dataCopy.sort((a, b) => {
    const sortValue = sortOrder ? 1 : -1;
    return sortValue * (a[sortCol] > b[sortCol] ? 1 : -1);
  });
  setSortOrder(!sortOrder)
  setTableData(dataCopy);
}

  return(
    <div className="container">
      <h1>Hello world</h1>
      <header>
        <input type="number" onBlur={handleBlur}/>
      </header>
      <Table 
        onSort={onSort}
        currentRow={currentRow}
        />
      <Pagination 
        rowsPerPage={rowsPerPage} 
        totalRows={data.length}
        paginate={paginate} />
    </div>
  )  
}

export default App;