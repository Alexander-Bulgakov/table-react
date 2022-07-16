import React, { useState, useEffect } from 'react';
import data from './data/generated.json';
import Table from './components/Table';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {

  const [tableData, setTableData] = useState(data);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState(true);
  const [searchText, setSearchText] = useState('');

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleSearch = () => {
    if (!searchText) {
      return tableData;
    } else {
      return tableData.filter(row => {
        return row['name'].toLowerCase().includes(searchText.toLowerCase())
            || row['phone'].toLowerCase().includes(searchText.toLowerCase())
            || row['email'].toLowerCase().includes(searchText.toLowerCase())
            || row['address'].toLowerCase().includes(searchText.toLowerCase())
      })
    }
  }

  const filteredRows = handleSearch();

  const lastRowIndex = currentPage * rowsPerPage;
  const firstRowIndex = lastRowIndex - rowsPerPage;
  const currentData = filteredRows.slice(firstRowIndex, lastRowIndex);

  const handleBlur = (e) => {
    const value = e.target.value;
    if (value > 0) {
      setRowsPerPage(value);
    }
  }

  const handleSort = (sortCol) => {
    const dataCopy = data.slice();
    dataCopy.sort((a, b) => {
      const sortValue = sortOrder ? 1 : -1;
      return sortValue * (a[sortCol] > b[sortCol] ? 1 : -1);
    });
    setSortOrder(!sortOrder);
    setTableData(dataCopy);
  }

  return (
    <div className="container">
      <header>
        <div className="header-container">
          <input 
            className="input header-container__number" 
            type="number" 
            placeholder="Количество строк" 
            onBlur={handleBlur} 
            />
          <input 
            className="input header-container__search" 
            type="text" value={searchText} 
            placeholder="Поиск" 
            onChange={(e) => setSearchText(e.target.value)} 
          />
        </div>

      </header>
      <Table
        handleSort={handleSort}
        currentData={currentData}
      />
      <Pagination
        rowsPerPage={rowsPerPage}
        totalRows={filteredRows.length}
        paginate={paginate}
      />
    </div>
  )
}

export default App;